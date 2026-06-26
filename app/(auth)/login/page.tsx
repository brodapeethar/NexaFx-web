"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="w-full max-w-md bg-card text-card-foreground rounded-2xl shadow-lg p-8 md:p-12 border border-border/50">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold mb-2 text-center">Sign in</h1>
        <p className="text-muted-foreground text-sm text-center">
          Hey, Welcome back
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-medium text-muted-foreground mb-1.5">
            Email address
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email address"
            className="w-full px-4 py-2.5 bg-muted border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-brand transition-all text-sm text-foreground"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-muted-foreground mb-1.5">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="w-full px-4 py-2.5 bg-muted border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-brand transition-all text-sm text-foreground"
          />
          <div className="text-right mt-1.5">
            <Link
              href="/forgot-password"
              className="text-xs text-[#926F03] hover:underline font-medium"
            >
              Forgotten password?
            </Link>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-2.5 bg-brand hover:opacity-90 text-primary-foreground font-semibold rounded-md transition-all text-sm mt-6"
        >
          Log in
        </button>
      </form>

      <div className="mt-4 text-center text-xs text-muted-foreground">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="text-brand hover:underline font-medium">
          Sign up
        </Link>
      </div>
    </div>
  );
}
