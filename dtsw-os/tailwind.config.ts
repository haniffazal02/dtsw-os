import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // SNS Brand Colors
        brand: {
          primary: "#FF9500", // Orange
          secondary: "#FFA500", // Light Orange
          dark: "#FF8C00", // Darker Orange
          light: "#FFB84D", // Lighter Orange
        },
        // Semantic Colors
        background: {
          primary: "#FFFFFF", // White
          secondary: "#F9FAFB", // Light Gray
          tertiary: "#F3F4F6", // Lighter Gray
        },
        surface: {
          primary: "#FFFFFF",
          secondary: "#F9FAFB",
          tertiary: "#F3F4F6",
          hover: "#FFFBF5",
        },
        text: {
          primary: "#111827", // Dark Gray (almost black)
          secondary: "#374151", // Medium Gray
          tertiary: "#6B7280", // Light Gray
          muted: "#9CA3AF", // Muted Gray
          inverse: "#FFFFFF", // White
        },
        border: {
          primary: "#E5E7EB", // Light Gray
          secondary: "#D1D5DB", // Medium Gray
          subtle: "#F3F4F6", // Subtle Gray
        },
        // Status Colors
        success: "#10B981",
        warning: "#F59E0B",
        error: "#EF4444",
        info: "#3B82F6",
      },
      backgroundColor: {
        default: "var(--bg-primary, #FFFFFF)",
        secondary: "var(--bg-secondary, #F9FAFB)",
      },
      textColor: {
        default: "var(--text-primary, #111827)",
        secondary: "var(--text-secondary, #374151)",
      },
      borderColor: {
        default: "var(--border-primary, #E5E7EB)",
      },
      fontSize: {
        xs: ["12px", { lineHeight: "16px", letterSpacing: "-0.3px" }],
        sm: ["14px", { lineHeight: "20px", letterSpacing: "-0.2px" }],
        base: ["16px", { lineHeight: "24px", letterSpacing: "-0.16px" }],
        lg: ["18px", { lineHeight: "28px", letterSpacing: "-0.18px" }],
        xl: ["20px", { lineHeight: "28px", letterSpacing: "-0.2px" }],
        "2xl": ["24px", { lineHeight: "32px", letterSpacing: "-0.24px" }],
        "3xl": ["30px", { lineHeight: "36px", letterSpacing: "-0.3px" }],
        "4xl": ["36px", { lineHeight: "44px", letterSpacing: "-0.36px" }],
      },
      fontWeight: {
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
      },
      spacing: {
        xs: "4px",
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        "2xl": "32px",
        "3xl": "48px",
        "4xl": "64px",
      },
      borderRadius: {
        none: "0",
        sm: "4px",
        base: "6px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        "2xl": "20px",
        "3xl": "24px",
        full: "9999px",
      },
      boxShadow: {
        none: "none",
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
        // Card shadows (futuristic clean)
        card: "0 1px 3px 0 rgba(0, 0, 0, 0.08), 0 1px 2px 0 rgba(0, 0, 0, 0.04)",
        "card-hover": "0 4px 12px 0 rgba(0, 0, 0, 0.12)",
        "card-focus": "0 10px 20px -5px rgba(255, 149, 0, 0.15)",
      },
      transitionDuration: {
        fast: "150ms",
        base: "200ms",
        slow: "300ms",
        slower: "500ms",
      },
      animation: {
        // Smooth fade-in
        "fade-in": "fadeIn 0.2s ease-in-out",
        "fade-in-slow": "fadeIn 0.3s ease-in-out",
        // Slide animations
        "slide-in-up": "slideInUp 0.2s ease-out",
        "slide-in-down": "slideInDown 0.2s ease-out",
        // Scale animations
        "scale-in": "scaleIn 0.2s ease-out",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideInUp: {
          from: { transform: "translateY(8px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        slideInDown: {
          from: { transform: "translateY(-8px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          from: { transform: "scale(0.95)", opacity: "0" },
          to: { transform: "scale(1)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
