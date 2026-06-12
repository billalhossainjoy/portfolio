"use client";

import React, { useActionState } from "react";
import { loginAction } from "@/app/billal-admin/actions";
import { TbBrandNextjs } from "react-icons/tb";

const initialState: { error?: string } = {};

export default function AdminLoginPage() {
  const [state, formAction, pending] = useActionState<{ error?: string }, FormData>(loginAction, initialState);

  return (
    <div className={"min-h-screen bg-gray-950 flex items-center justify-center px-4"}>
      <div className={"w-full max-w-sm space-y-8"}>
        {/* Logo */}
        <div className={"flex flex-col items-center gap-3"}>
          <div className={"size-12 rounded-xl bg-gradient-to-br from-green-400 to-green-700 flex items-center justify-center"}>
            <TbBrandNextjs className={"size-7 text-gray-900"} />
          </div>
          <div className={"text-center"}>
            <h1 className={"text-xl font-bold text-white"}>Portfolio Admin</h1>
            <p className={"text-sm text-gray-400 mt-1"}>Sign in to manage your projects</p>
          </div>
        </div>

        {/* Form */}
        <form action={formAction} className={"space-y-4"}>
          {state?.error && (
            <div className={"rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400"}>
              {state.error}
            </div>
          )}

          <div className={"space-y-1.5"}>
            <label htmlFor={"username"} className={"block text-sm font-medium text-gray-300"}>
              Username
            </label>
            <input
              id={"username"}
              name={"username"}
              type={"text"}
              autoComplete={"username"}
              required
              className={"w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder-gray-500 focus:border-green-500/60 focus:bg-white/8 focus:outline-none transition"}
              placeholder={"admin"}
            />
          </div>

          <div className={"space-y-1.5"}>
            <label htmlFor={"password"} className={"block text-sm font-medium text-gray-300"}>
              Password
            </label>
            <input
              id={"password"}
              name={"password"}
              type={"password"}
              autoComplete={"current-password"}
              required
              className={"w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder-gray-500 focus:border-green-500/60 focus:bg-white/8 focus:outline-none transition"}
              placeholder={"••••••••"}
            />
          </div>

          <button
            type={"submit"}
            disabled={pending}
            className={"w-full rounded-lg bg-green-500 hover:bg-green-400 disabled:opacity-60 py-2.5 font-semibold text-gray-900 transition duration-300"}
          >
            {pending ? "Signing in…" : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
