"use client";

import { useState } from "react";
import Link from "next/link";

/**
 * LOGIN PAGE
 * File location: app/(auth)/login/page.tsx
 * Route: /login
 * Wrapped by: app/(auth)/layout.tsx (AuthLayout)
 */
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // TODO: Implement with Supabase
      // const { error } = await supabase.auth.signInWithPassword({ email, password });
      // if (error) throw error;
      // redirect to /dashboard
      console.log("Login attempt:", { email });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-lg">
      <div className="text-center space-y-md">
        <h1 className="text-2xl font-bold text-text-primary">Welcome Back</h1>
        <p className="text-text-secondary">Sign in to your DTSW account</p>
      </div>

      {error && (
        <div className="p-md bg-error/10 border border-error rounded-lg">
          <p className="text-sm text-error">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-lg">
        <div className="space-y-sm">
          <label className="block text-sm font-medium text-text-primary">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@college.edu"
            className="w-full px-lg py-md border border-border-primary rounded-lg text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-brand-primary"
            required
          />
        </div>

        <div className="space-y-sm">
          <div className="flex items-center justify-between">
            <label className="block text-sm font-medium text-text-primary">
              Password
            </label>
            <Link
              href="/forgot-password"
              className="text-sm text-brand-primary hover:text-brand-dark"
            >
              Forgot?
            </Link>
          </div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="w-full px-lg py-md border border-border-primary rounded-lg text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-brand-primary"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full px-lg py-md bg-brand-primary text-text-inverse font-medium rounded-lg hover:bg-brand-dark disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>
      </form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border-primary" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-md bg-surface-primary text-text-tertiary">
            New to DTSW?
          </span>
        </div>
      </div>

      <Link
        href="/signup"
        className="w-full px-lg py-md border border-border-primary text-text-primary font-medium rounded-lg hover:bg-surface-secondary text-center transition-colors block"
      >
        Create Account
      </Link>
    </div>
  );
}
