"use client";

import { useEffect, useState } from "react";
import { useSession, authClient } from "@hi/auth/client";
import { LoginPage } from "./login-page";
import { SetupPage } from "./setup-page";

interface AuthGateProps {
  children: React.ReactNode;
  api: { fetch: (path: string, init?: RequestInit) => Promise<unknown> };
}

export function AuthGate({ children, api }: AuthGateProps) {
  const { data: session, isPending, refetch } = useSession();
  const [mode, setMode] = useState<"loading" | "setup" | "login" | "ready">("loading");

  useEffect(() => {
    async function check() {
      try {
        const hasUsers = await api.fetch("/auth/has-users");
        if (!(hasUsers as { exists: boolean }).exists) {
          setMode("setup");
        } else {
          setMode("login");
        }
      } catch {
        setMode("login");
      }
    }
    check();
  }, [api]);

  useEffect(() => {
    if (session) {
      setMode("ready");
    }
  }, [session]);

  if (mode === "loading" || isPending) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="h-8 w-8 border-2 border-white/10 border-t-white/30 rounded-full animate-spin" />
      </div>
    );
  }

  if (mode === "setup") {
    return <SetupPage onDone={refetch} />;
  }

  if (mode === "login") {
    return <LoginPage onSuccess={refetch} />;
  }

  return <>{children}</>;
}
