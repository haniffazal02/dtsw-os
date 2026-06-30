"use client";

import { useState } from "react";
import Link from "next/link";

/**
 * SIGNUP PAGE
 * File location: app/(auth)/signup/page.tsx
 * Route: /signup
 * Wrapped by: app/(auth)/layout.tsx (AuthLayout)
 */
export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (!agreeToTerms) {
      setError("Please agree to the terms and conditions");
      return;
    }

    setLoading(true);
    try {
      // TODO: Implement with Supabase
      // const { error } = await supabase.auth.signUp({ email, password });
      console.log("Signup attempt:", { email: formData.email, name: formData.name });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-lg">
      <div className="text-center space-y-md">
        <h1 className="text-2xl font-bold text-text-primary">Join DTSW</h1>
        <p className="text-text-secondary">Create your account and start innovating</p>
      </div>

      {error && (
        <div className="p-md bg-error/10 border border-error rounded-lg">
          <p className="text-sm text-error">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-lg">
        <div className="space-y-sm">
          <label className="block text-sm font-medium text-text-primary">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="w-full px-lg py-md border border-border-primary rounded-lg text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-brand-primary"
            required
          />
        </div>

        <div className="space-y-sm">
          <label className="block text-sm font-medium text-text-primary">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="name@college.edu"
            className="w-full px-lg py-md border border-border-primary rounded-lg text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-brand-primary"
            required
          />
        </div>

        <div className="space-y-sm">
          <label className="block text-sm font-medium text-text-primary">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="••••••••"
            className="w-full px-lg py-md border border-border-primary rounded-lg text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-brand-primary"
            required
          />
        </div>

        <div className="space-y-sm">
          <label className="block text-sm font-medium text-text-primary">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="••••••••"
            className="w-full px-lg py-md border border-border-primary rounded-lg text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-brand-primary"
            required
          />
        </div>

        <div className="flex items-start gap-md">
          <input
            type="checkbox"
            id="terms"
            checked={agreeToTerms}
            onChange={(e) => setAgreeToTerms(e.target.checked)}
            className="mt-1 w-4 h-4 rounded border-border-primary text-brand-primary cursor-pointer"
          />
          <label htmlFor="terms" className="text-sm text-text-secondary cursor-pointer">
            I agree to the{" "}
            <Link href="/terms" className="text-brand-primary hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-brand-primary hover:underline">
              Privacy Policy
            </Link>
          </label>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full px-lg py-md bg-brand-primary text-text-inverse font-medium rounded-lg hover:bg-brand-dark disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {loading ? "Creating account..." : "Create Account"}
        </button>
      </form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border-primary" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-md bg-surface-primary text-text-tertiary">
            Already have an account?
          </span>
        </div>
      </div>

      <Link
        href="/login"
        className="w-full px-lg py-md border border-border-primary text-text-primary font-medium rounded-lg hover:bg-surface-secondary text-center transition-colors block"
      >
        Sign In
      </Link>
    </div>
  );
}
