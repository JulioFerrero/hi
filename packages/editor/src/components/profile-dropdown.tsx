"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { useSession, signOut } from "@hi/auth/client";
import { cn } from "@hi/utils";
import { ChevronDown, User, LogOut } from "lucide-react";
import { navigate } from "../lib/navigate";

export function ProfileDropdown() {
  const { data: session } = useSession();
  const user = session?.user;
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const close = useCallback(() => {
    setOpen(false);
    setLeaving(true);
    timerRef.current = setTimeout(() => {
      setVisible(false);
      setLeaving(false);
    }, 120);
  }, []);

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        close();
      }
    }
    if (open) document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [open, close]);

  function toggle() {
    if (open) {
      close();
    } else {
      setOpen(true);
      setVisible(true);
    }
  }

  if (!user) return null;

  const initials = (user.name ?? "?")
    .split(" ")
    .map((w: string) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={toggle}
        className={cn(
          "flex items-center gap-2 rounded-full p-0.5 pr-2 transition-all duration-150",
          "border border-white/[0.06] hover:border-white/[0.12]",
          "bg-white/[0.02] hover:bg-white/[0.04]",
        )}
      >
        <div className="h-7 w-7 rounded-full overflow-hidden flex items-center justify-center bg-white/[0.06]">
          {user.image ? (
            <img src={user.image} alt="" className="h-full w-full object-cover" />
          ) : (
            <span className="text-[11px] font-medium text-white/30">{initials}</span>
          )}
        </div>
        <ChevronDown className={cn(
          "h-3 w-3 text-white/30 transition-transform duration-150",
          open && "rotate-180",
        )} />
      </button>

      {visible && (
        <div className={cn(
          "absolute right-0 top-full mt-2 w-56 origin-top-right rounded-xl border border-white/[0.08] bg-[#141416] shadow-2xl shadow-black/50 overflow-hidden z-50",
          leaving ? "animate-out" : "animate-in",
        )}>
          <div className="px-4 py-3 border-b border-white/[0.04]">
            <p className="text-sm font-medium text-white/80 truncate">{user.name}</p>
            <p className="text-xs text-white/30 truncate mt-0.5">{user.email}</p>
          </div>

          <button
            type="button"
            onClick={() => { close(); navigate("/account"); }}
            className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-white/50 hover:bg-white/[0.04] hover:text-white/80 transition-colors"
          >
            <User className="h-4 w-4" />
            Edit Profile
          </button>

          <button
            type="button"
            onClick={() => { signOut(); navigate("/"); }}
            className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-white/40 hover:bg-red-500/[0.06] hover:text-red-400 transition-colors"
          >
            <LogOut className="h-4 w-4" />
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}
