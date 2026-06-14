"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { signUp } from "@vitrea/auth/client";
import { Button } from "@vitrea/ui/button";
import { Input } from "@vitrea/ui/input";
import { glassStyle } from "@vitrea/editor-ui/glass";
import { AlertCircle, Check } from "lucide-react";

interface SetupPageProps {
  onDone: () => void | Promise<void>;
}

export function SetupPage({ onDone }: Readonly<SetupPageProps>) {
  const [step, setStep] = useState<"form" | "done">("form");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [finishing, setFinishing] = useState(false);
  const finishingRef = useRef(false);

  async function finishSetup() {
    if (finishingRef.current) return;
    finishingRef.current = true;
    setFinishing(true);
    try {
      await onDone();
    } catch (err) {
      finishingRef.current = false;
      setFinishing(false);
      setError(err instanceof Error ? err.message : "Failed to open the editor");
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const result = await signUp.email({
      email,
      password,
      name,
    });

    setLoading(false);

    if (result.error) {
      setError(result.error.message ?? "Failed to create account");
      return;
    }

    setStep("done");
    void finishSetup();
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

  const isPasswordShort = password.length > 0 && password.length < 8;

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-editor-canvas">
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-12">
        <AnimatePresence mode="wait">
          {step === "done" ? (
            <motion.div
              key="done"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-md"
            >
              <div className="relative overflow-hidden rounded-3xl border border-white/[0.06] p-10 text-center" style={glassStyle}>
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.15, type: "spring", stiffness: 200, damping: 15 }}
                  className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-500/20 bg-emerald-500/10"
                >
                  <Check className="h-8 w-8 text-emerald-300" />
                </motion.div>

                <h2 className="text-2xl font-semibold tracking-tight text-white">
                  You are all set
                </h2>
                <p className="mt-2 text-sm text-white/50">
                  Your admin account has been created. Opening the editor...
                </p>

                {error && (
                  <div className="mt-4 flex items-start gap-3 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-left text-sm text-red-200">
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-300" />
                    <span>{error}</span>
                  </div>
                )}

                <Button
                  className="mt-6 h-11 w-full rounded-xl bg-white text-black hover:bg-white/90"
                  onClick={() => void finishSetup()}
                  disabled={finishing}
                >
                  {finishing ? "Opening Dashboard..." : "Go to Dashboard"}
                </Button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -12 }}
              variants={containerVariants}
              className="w-full max-w-md"
            >
              <div className="relative overflow-hidden rounded-3xl border border-white/[0.06] p-8 sm:p-10" style={glassStyle}>
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
                    Create your admin account
                  </h1>
                  <p className="mt-2 text-sm leading-relaxed text-white/50">
                    This is the first user for this Vitrea instance. The admin account can manage sites, content, and invite teammates.
                  </p>
                </motion.div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <motion.div variants={itemVariants}>
                    <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-white/50">
                      Full name
                    </label>
                    <Input
                      type="text"
                      placeholder="Admin"
                      value={name}
                      onChange={(e) => setName((e.target as HTMLInputElement).value)}
                      required
                      autoFocus
                      className="h-11 rounded-xl border-white/[0.08] bg-white/[0.03] text-white placeholder:text-white/30 focus-visible:border-white/20 focus-visible:ring-white/10"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-white/50">
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder="admin@example.com"
                      value={email}
                      onChange={(e) => setEmail((e.target as HTMLInputElement).value)}
                      required
                      className="h-11 rounded-xl border-white/[0.08] bg-white/[0.03] text-white placeholder:text-white/30 focus-visible:border-white/20 focus-visible:ring-white/10"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-white/50">
                      Password
                    </label>
                    <Input
                      type="password"
                      placeholder="Min 8 characters"
                      value={password}
                      onChange={(e) => setPassword((e.target as HTMLInputElement).value)}
                      required
                      minLength={8}
                      className="h-11 rounded-xl border-white/[0.08] bg-white/[0.03] text-white placeholder:text-white/30 focus-visible:border-white/20 focus-visible:ring-white/10"
                    />
                    {isPasswordShort && (
                      <p className="mt-2 text-xs text-amber-300/80">
                        Must be at least 8 characters
                      </p>
                    )}
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
                      disabled={loading || password.length < 8}
                      className="relative h-11 w-full overflow-hidden rounded-xl bg-white text-black hover:bg-white/90 active:scale-[0.98] disabled:opacity-50"
                    >
                      <span className={loading ? "opacity-0" : "opacity-100"}>
                        Create Admin Account
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
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
