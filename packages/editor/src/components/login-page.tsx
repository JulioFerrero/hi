"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { signIn } from "@vitrea/auth/client";
import { Button } from "@vitrea/ui/button";
import { Input } from "@vitrea/ui/input";
import { glassStyle } from "@vitrea/editor-ui/glass";
import { ShaderBackground } from "@vitrea/editor-ui/shader-background";
import { AlertCircle } from "lucide-react";

interface LoginPageProps {
  onSuccess: () => void;
}

export function LoginPage({ onSuccess }: LoginPageProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const result = await signIn.email({
      email,
      password,
    });

    setLoading(false);

    if (result.error) {
      setError(result.error.message ?? "Invalid credentials");
      return;
    }

    onSuccess();
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    },
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white">
      <ShaderBackground variant="clouds" />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="w-full max-w-md"
        >
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.06] p-8 sm:p-10" style={glassStyle}>
            {/* subtle inner highlight */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <motion.div variants={itemVariants} className="mb-8">
              <div className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.03]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-white">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <h1 className="text-2xl font-semibold tracking-tight text-white">
                Welcome back
              </h1>
              <p className="mt-2 text-sm text-white/50">
                Sign in to continue editing your sites.
              </p>
            </motion.div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <motion.div variants={itemVariants}>
                <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-white/50">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail((e.target as HTMLInputElement).value)}
                  required
                  autoFocus
                  className="h-11 rounded-xl border-white/[0.08] bg-white/[0.03] text-white placeholder:text-white/30 focus-visible:border-white/20 focus-visible:ring-white/10"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-white/50">
                  Password
                </label>
                <Input
                  type="password"
                  placeholder="Your password"
                  value={password}
                  onChange={(e) => setPassword((e.target as HTMLInputElement).value)}
                  required
                  className="h-11 rounded-xl border-white/[0.08] bg-white/[0.03] text-white placeholder:text-white/30 focus-visible:border-white/20 focus-visible:ring-white/10"
                />
              </motion.div>

              {error && (
                <motion.div
                  variants={itemVariants}
                  className="flex items-start gap-3 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-200"
                >
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-300" />
                  <span>{error}</span>
                </motion.div>
              )}

              <motion.div variants={itemVariants} className="pt-2">
                <Button
                  type="submit"
                  disabled={loading}
                  className="relative h-11 w-full overflow-hidden rounded-xl bg-white text-black hover:bg-white/90 active:scale-[0.98]"
                >
                  <span className={loading ? "opacity-0" : "opacity-100"}>
                    Sign In
                  </span>
                  {loading && (
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-black/20 border-t-black" />
                    </span>
                  )}
                </Button>
              </motion.div>
            </form>
          </div>

          <motion.p
            variants={itemVariants}
            className="mt-6 text-center text-xs text-white/30"
          >
            Vitrea Editor
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
