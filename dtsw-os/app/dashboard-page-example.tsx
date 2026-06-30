"use client";

import { DashboardLayout } from "@/components/DashboardLayout";
import { useAuth } from "@/context/auth";

/**
 * DASHBOARD OVERVIEW PAGE
 * File location: app/dashboard/page.tsx
 * Route: /dashboard
 * Wrapped by: app/dashboard/layout.tsx (DashboardLayout)
 * 
 * This is the main dashboard landing page that shows:
 * - Welcome header
 * - Quick stats
 * - Recent tasks
 * - Upcoming events
 * - CTA buttons
 */
export default function DashboardPage() {
  const { user, isAuthenticated } = useAuth();

  return (
    <div className="space-y-2xl">
      {/* Welcome Header */}
      <div>
        <h1 className="text-3xl font-bold text-text-primary mb-md">
          Welcome Back!
        </h1>
        <p className="text-text-secondary">
          {isAuthenticated && user
            ? `Nice to see you, ${user.name}!`
            : "Login to see your personalized dashboard."}
        </p>
      </div>

      {/* Quick Stats Grid - 4 columns on desktop, 2 on tablet, 1 on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg">
        {[
          { label: "Active Tasks", value: "8", color: "bg-brand-primary" },
          { label: "Club Memberships", value: "4", color: "bg-blue-500" },
          { label: "Upcoming Events", value: "3", color: "bg-green-500" },
          { label: "Total Points", value: "240", color: "bg-purple-500" },
        ].map((stat, idx) => (
          <div
            key={idx}
            className="p-lg bg-surface-primary border border-border-primary rounded-xl hover:shadow-card-hover transition-all"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-text-secondary mb-sm">
                  {stat.label}
                </p>
                <p className="text-2xl font-bold text-text-primary">
                  {stat.value}
                </p>
              </div>
              <div
                className={`w-12 h-12 rounded-lg ${stat.color} opacity-10`}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid - Tasks and Events */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-lg">
        {/* Recent Tasks - 2/3 width on desktop */}
        <div className="lg:col-span-2 p-lg bg-surface-primary border border-border-primary rounded-xl">
          <div className="flex items-center justify-between mb-lg">
            <h2 className="text-lg font-semibold text-text-primary">
              Recent Tasks
            </h2>
            <a
              href="/dashboard/tasks"
              className="text-sm text-brand-primary hover:text-brand-dark"
            >
              View All →
            </a>
          </div>

          <div className="space-y-md">
            {[
              { title: "Complete AI Workshop", status: "in_progress" },
              { title: "Submit Project Report", status: "todo" },
              { title: "Attend Event", status: "todo" },
            ].map((task, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-md bg-surface-secondary rounded-lg hover:bg-surface-tertiary transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-text-primary">{task.title}</p>
                  <p className="text-sm text-text-tertiary">Due soon</p>
                </div>
                <span
                  className={`shrink-0 ml-md text-xs font-medium px-md py-xs rounded-full ${
                    task.status === "in_progress"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {task.status === "in_progress" ? "In Progress" : "To Do"}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events - 1/3 width on desktop */}
        <div className="p-lg bg-surface-primary border border-border-primary rounded-xl">
          <div className="flex items-center justify-between mb-lg">
            <h2 className="text-lg font-semibold text-text-primary">
              Upcoming
            </h2>
            <a
              href="/dashboard/events"
              className="text-sm text-brand-primary hover:text-brand-dark"
            >
              All →
            </a>
          </div>

          <div className="space-y-md">
            {[
              { name: "AI Workshop", date: "May 25" },
              { name: "Startup Pitch", date: "May 28" },
              { name: "Research Meet", date: "June 1" },
            ].map((event, idx) => (
              <button
                key={idx}
                className="w-full text-left p-md bg-surface-secondary rounded-lg border border-border-primary hover:border-brand-primary transition-colors"
              >
                <p className="font-medium text-text-primary text-sm">
                  {event.name}
                </p>
                <p className="text-xs text-text-tertiary mt-xs">{event.date}</p>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="p-lg bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 border border-brand-light rounded-xl">
        <h3 className="font-semibold text-text-primary mb-md">
          Get More Involved
        </h3>
        <p className="text-sm text-text-secondary mb-lg">
          Explore new clubs, submit projects, and connect with other students.
        </p>
        <div className="flex flex-wrap gap-md">
          <a
            href="/dashboard/clubs"
            className="px-lg py-md bg-brand-primary text-text-inverse font-medium rounded-lg hover:bg-brand-dark transition-colors text-sm"
          >
            Explore Clubs
          </a>
          <a
            href="/dashboard/events"
            className="px-lg py-md border border-brand-primary text-brand-primary font-medium rounded-lg hover:bg-brand-light/10 transition-colors text-sm"
          >
            View Events
          </a>
        </div>
      </div>
    </div>
  );
}
