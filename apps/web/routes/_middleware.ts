import { define } from "../utils.ts";

const classRegex = /class="([^"]+)"/g;
const cssCache = new Map<string, string>();
const GEN_PATH = "_tw_gen.css";

function extractClasses(html: string): string[] {
  const classes = new Set<string>();
  let match;
  while ((match = classRegex.exec(html)) !== null) {
    for (const c of match[1].split(/\s+/)) {
      if (c) classes.add(c);
    }
  }
  return [...classes].sort();
}

async function generateCSS(classes: string[]): Promise<string> {
  const key = classes.join(" ");
  const cached = cssCache.get(key);
  if (cached) return cached;

  const source = `@import "tailwindcss";\n@source inline("${classes.join(" ")}");`;
  await Deno.writeTextFile(GEN_PATH, source);

  const cmd = new Deno.Command(Deno.execPath(), {
    args: ["run", "-A", "npm:@tailwindcss/cli", "--input", GEN_PATH],
    stdout: "piped",
    stderr: "piped",
  });
  const output = await cmd.output();
  const css = new TextDecoder().decode(output.stdout);

  cssCache.set(key, css);
  return css;
}

export default define.middleware(async (ctx) => {
  const response = await ctx.next();

  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("text/html")) return response;

  const html = await response.text();
  const classes = extractClasses(html);
  if (classes.length === 0) return new Response(html, { headers: response.headers, status: response.status });

  const css = await generateCSS(classes);

  const injected = html.replace("</head>", `<style>${css}</style>`);
  return new Response(injected, {
    headers: response.headers,
    status: response.status,
  });
});
