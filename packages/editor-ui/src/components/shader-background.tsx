"use client";

import { useEffect, useRef } from "react";

const VERTEX_SHADER = `
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

const AURORA_FRAGMENT_SHADER = `
  precision mediump float;

  uniform vec2 u_resolution;
  uniform float u_time;
  uniform vec2 u_mouse;

  // Simplex-ish noise
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

  float snoise(vec3 v) {
    const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;
    i = mod289(i);
    vec4 p = permute(permute(permute(
      i.z + vec4(0.0, i1.z, i2.z, 1.0))
      + i.y + vec4(0.0, i1.y, i2.y, 1.0))
      + i.x + vec4(0.0, i1.x, i2.x, 1.0));
    float n_ = 0.142857142857;
    vec3 ns = n_ * D.wyz - D.xzx;
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    vec4 x = x_ * ns.x + ns.yyyy;
    vec4 y = y_ * ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    vec4 s0 = floor(b0) * 2.0 + 1.0;
    vec4 s1 = floor(b1) * 2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);
    vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;
    vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;
    vec2 aspect = vec2(u_resolution.x / u_resolution.y, 1.0);

    float t = u_time * 0.05;

    // Layered slow noise — larger, slower shapes
    float n1 = snoise(vec3(uv * 0.7 * aspect, t)) * 0.5 + 0.5;
    float n2 = snoise(vec3(uv * 1.8 * aspect, t * 1.2 + 100.0)) * 0.5 + 0.5;
    float n3 = snoise(vec3(uv * 4.5 * aspect, t * 0.6 + 200.0)) * 0.5 + 0.5;

    float noise = n1 * 0.5 + n2 * 0.3 + n3 * 0.2;

    // Subtle mouse-reactive highlight
    vec2 mouse = u_mouse / u_resolution;
    float mouseGlow = 1.0 - smoothstep(0.15, 0.55, distance(uv, mouse));
    mouseGlow *= 0.05;

    // Base dark color
    vec3 base = vec3(0.02, 0.02, 0.025);
    vec3 lift = vec3(0.16, 0.16, 0.19);

    vec3 color = base + lift * (noise * 0.65 + mouseGlow);

    // Vignette
    float vignette = 1.0 - smoothstep(0.15, 0.9, length(uv - 0.5));
    color *= 0.72 + vignette * 0.28;

    gl_FragColor = vec4(color, 1.0);
  }
`;

const CLOUDS_FRAGMENT_SHADER = `
  precision mediump float;

  uniform vec2 u_resolution;
  uniform float u_time;

  const float cloudscale = 1.1;
  const float speed = 0.008;
  const float clouddark = 0.5;
  const float cloudlight = 0.3;
  const float cloudcover = 0.2;
  const float cloudalpha = 8.0;
  const float skytint = 0.5;
  const vec3 skycolour1 = vec3(0.2, 0.4, 0.6);
  const vec3 skycolour2 = vec3(0.4, 0.7, 1.0);

  const mat2 m = mat2(1.6, 1.2, -1.2, 1.6);

  vec2 hash(vec2 p) {
    p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
    return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
  }

  float noise(in vec2 p) {
    const float K1 = 0.366025404; // (sqrt(3)-1)/2;
    const float K2 = 0.211324865; // (3-sqrt(3))/6;
    vec2 i = floor(p + (p.x + p.y) * K1);
    vec2 a = p - i + (i.x + i.y) * K2;
    vec2 o = (a.x > a.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec2 b = a - o + K2;
    vec2 c = a - 1.0 + 2.0 * K2;
    vec3 h = max(0.5 - vec3(dot(a, a), dot(b, b), dot(c, c)), 0.0);
    vec3 n = h * h * h * h * vec3(dot(a, hash(i + 0.0)), dot(b, hash(i + o)), dot(c, hash(i + 1.0)));
    return dot(n, vec3(70.0));
  }

  float fbm(vec2 n) {
    float total = 0.0, amplitude = 0.1;
    for (int i = 0; i < 7; i++) {
      total += noise(n) * amplitude;
      n = m * n;
      amplitude *= 0.4;
    }
    return total;
  }

  void main() {
    vec2 p = gl_FragCoord.xy / u_resolution;
    vec2 uv = p * vec2(u_resolution.x / u_resolution.y, 1.0);
    float time = u_time * speed;
    float q = fbm(uv * cloudscale * 0.5);

    // ridged noise shape
    float r = 0.0;
    uv *= cloudscale;
    uv -= q - time;
    float weight = 0.8;
    for (int i = 0; i < 8; i++) {
      r += abs(weight * noise(uv));
      uv = m * uv + time;
      weight *= 0.7;
    }

    // noise shape
    float f = 0.0;
    uv = p * vec2(u_resolution.x / u_resolution.y, 1.0);
    uv *= cloudscale;
    uv -= q - time;
    weight = 0.7;
    for (int i = 0; i < 8; i++) {
      f += weight * noise(uv);
      uv = m * uv + time;
      weight *= 0.6;
    }

    f *= r + f;

    // noise colour
    float c = 0.0;
    time = u_time * speed * 2.0;
    uv = p * vec2(u_resolution.x / u_resolution.y, 1.0);
    uv *= cloudscale * 2.0;
    uv -= q - time;
    weight = 0.4;
    for (int i = 0; i < 7; i++) {
      c += weight * noise(uv);
      uv = m * uv + time;
      weight *= 0.6;
    }

    // noise ridge colour
    float c1 = 0.0;
    time = u_time * speed * 3.0;
    uv = p * vec2(u_resolution.x / u_resolution.y, 1.0);
    uv *= cloudscale * 3.0;
    uv -= q - time;
    weight = 0.4;
    for (int i = 0; i < 7; i++) {
      c1 += abs(weight * noise(uv));
      uv = m * uv + time;
      weight *= 0.6;
    }

    c += c1;

    vec3 skycolour = mix(skycolour2, skycolour1, p.y);
    vec3 cloudcolour = vec3(1.1, 1.1, 0.9) * clamp((clouddark + cloudlight * c), 0.0, 1.0);

    f = cloudcover + cloudalpha * f * r;

    vec3 result = mix(skycolour, clamp(skytint * skycolour + cloudcolour, 0.0, 1.0), clamp(f + c, 0.0, 1.0));

    gl_FragColor = vec4(result, 1.0);
  }
`;

function compileShader(gl: WebGLRenderingContext, type: number, source: string): WebGLShader {
  const shader = gl.createShader(type);
  if (!shader) throw new Error("Failed to create shader");
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const info = gl.getShaderInfoLog(shader);
    gl.deleteShader(shader);
    throw new Error(`Shader compile error: ${info}`);
  }
  return shader;
}

function createProgram(gl: WebGLRenderingContext, fragmentSource: string): WebGLProgram {
  const program = gl.createProgram();
  if (!program) throw new Error("Failed to create program");
  const vs = compileShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER);
  const fs = compileShader(gl, gl.FRAGMENT_SHADER, fragmentSource);
  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    const info = gl.getProgramInfoLog(program);
    gl.deleteProgram(program);
    throw new Error(`Program link error: ${info}`);
  }
  return program;
}

interface ShaderBackgroundProps {
  className?: string;
  variant?: "aurora" | "clouds";
}

export function ShaderBackground({ className, variant = "aurora" }: ShaderBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvasEl = canvasRef.current;
    if (!canvasEl) return;

    const gl = canvasEl.getContext("webgl", { antialias: false, alpha: false });
    if (!gl) return;

    let disposed = false;
    let raf = 0;
    let startTime = performance.now();
    let frameCount = 0;

    // Clouds are soft and slow; render at half frame rate to save GPU while keeping quality.
    const resolutionScale = 1.0;
    const frameSkip = variant === "clouds" ? 1 : 0; // render every 2nd frame for clouds

    const fragmentShader = variant === "clouds" ? CLOUDS_FRAGMENT_SHADER : AURORA_FRAGMENT_SHADER;
    const program = createProgram(gl, fragmentShader);
    const positionLoc = gl.getAttribLocation(program, "position");
    const resolutionLoc = gl.getUniformLocation(program, "u_resolution");
    const timeLoc = gl.getUniformLocation(program, "u_time");
    const mouseLoc = gl.getUniformLocation(program, "u_mouse");

    // Full-screen quad
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW,
    );

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2) * resolutionScale;
      const width = Math.floor(canvasEl!.clientWidth * dpr);
      const height = Math.floor(canvasEl!.clientHeight * dpr);
      if (canvasEl!.width !== width || canvasEl!.height !== height) {
        canvasEl!.width = width;
        canvasEl!.height = height;
        gl!.viewport(0, 0, width, height);
      }
    }

    function render() {
      if (disposed) return;
      raf = requestAnimationFrame(render);

      frameCount++;
      if (frameSkip > 0 && frameCount % (frameSkip + 1) !== 0) return;

      resize();

      const time = (performance.now() - startTime) / 1000;
      gl!.useProgram(program);
      gl!.bindBuffer(gl!.ARRAY_BUFFER, buffer);
      gl!.enableVertexAttribArray(positionLoc);
      gl!.vertexAttribPointer(positionLoc, 2, gl!.FLOAT, false, 0, 0);
      gl!.uniform2f(resolutionLoc, canvasEl!.width, canvasEl!.height);
      gl!.uniform1f(timeLoc, time);
      gl!.uniform2f(mouseLoc, mouseRef.current.x * window.devicePixelRatio, mouseRef.current.y * window.devicePixelRatio);
      gl!.drawArrays(gl!.TRIANGLES, 0, 6);
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvasEl!.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: rect.height - (e.clientY - rect.top),
      };
    };

    resize();
    raf = requestAnimationFrame(render);
    canvasEl!.addEventListener("mousemove", handleMouseMove);

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      canvasEl!.removeEventListener("mousemove", handleMouseMove);
      gl!.deleteProgram(program);
      gl!.deleteBuffer(buffer);
    };
  }, []);

    return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "auto",
      }}
    />
  );
}
