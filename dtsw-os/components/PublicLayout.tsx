import React from "react";

interface PublicLayoutProps {
  children: React.ReactNode;
}

export function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-bg-primary">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border-primary bg-surface-primary/95 backdrop-blur">
        <nav className="max-w-7xl mx-auto px-lg lg:px-2xl py-lg flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-md">
            <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
              <span className="text-sm font-bold text-text-inverse">DT</span>
            </div>
            <span className="font-bold text-lg text-text-primary">DTSW</span>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-xl">
            <a
              href="/"
              className="text-sm text-text-secondary hover:text-brand-primary transition-colors"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-sm text-text-secondary hover:text-brand-primary transition-colors"
            >
              About
            </a>
            <a
              href="/clubs"
              className="text-sm text-text-secondary hover:text-brand-primary transition-colors"
            >
              Clubs
            </a>
            <a
              href="/events"
              className="text-sm text-text-secondary hover:text-brand-primary transition-colors"
            >
              Events
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-md">
            <a
              href="/login"
              className="text-sm font-medium text-text-primary hover:text-brand-primary transition-colors"
            >
              Login
            </a>
            <a
              href="/signup"
              className="text-sm font-medium px-lg py-md bg-brand-primary text-text-inverse rounded-lg hover:bg-brand-dark transition-colors"
            >
              Join Now
            </a>
          </div>
        </nav>
      </header>

      {/* Main content */}
      <main className="flex-1 flex flex-col">{children}</main>

      {/* Footer */}
      <footer className="border-t border-border-primary bg-surface-secondary">
        <div className="max-w-7xl mx-auto px-lg lg:px-2xl py-2xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2xl mb-2xl">
            {/* Brand Column */}
            <div>
              <div className="flex items-center gap-md mb-lg">
                <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
                  <span className="text-sm font-bold text-text-inverse">DT</span>
                </div>
                <span className="font-bold text-text-primary">DTSW</span>
              </div>
              <p className="text-sm text-text-tertiary">
                Student-driven innovation ecosystem under SNS Institutions.
              </p>
            </div>

            {/* Links Columns */}
            <div>
              <h3 className="font-semibold text-text-primary mb-md">Product</h3>
              <ul className="space-y-sm text-sm text-text-tertiary">
                <li>
                  <a href="/clubs" className="hover:text-brand-primary">
                    Clubs
                  </a>
                </li>
                <li>
                  <a href="/events" className="hover:text-brand-primary">
                    Events
                  </a>
                </li>
                <li>
                  <a href="/hackathons" className="hover:text-brand-primary">
                    Hackathons
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-text-primary mb-md">Company</h3>
              <ul className="space-y-sm text-sm text-text-tertiary">
                <li>
                  <a href="/about" className="hover:text-brand-primary">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/blog" className="hover:text-brand-primary">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-brand-primary">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-text-primary mb-md">Legal</h3>
              <ul className="space-y-sm text-sm text-text-tertiary">
                <li>
                  <a href="/privacy" className="hover:text-brand-primary">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="hover:text-brand-primary">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-border-primary pt-lg text-center text-sm text-text-tertiary">
            <p>© {new Date().getFullYear()} DT Student Wing. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
