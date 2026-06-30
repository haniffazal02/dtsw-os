"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/context/auth";
import {
  navigationConfig,
  coreTeamNavigation,
  mentorNavigation,
} from "@/lib/navigation";
import { cn } from "@/lib/utils";
import {
  containerVariants,
  itemVariants,
  pulseVariants,
  slideInLeftVariants,
  fadeInVariants,
} from "@/lib/animations";

interface SidebarProps {
  open?: boolean;
  onClose?: () => void;
}

export function Sidebar({ open = true, onClose }: SidebarProps) {
  const pathname = usePathname();
  const { user, isAuthenticated } = useAuth();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [dragStart, setDragStart] = useState(0);

  // Load collapse state from localStorage on mount
  useEffect(() => {
    const savedCollapsedState = localStorage.getItem("sidebar-collapsed");
    if (savedCollapsedState) {
      setIsCollapsed(JSON.parse(savedCollapsedState));
    }
  }, []);

  // Save collapse state to localStorage
  const handleToggleCollapse = () => {
    const newState = !isCollapsed;
    setIsCollapsed(newState);
    localStorage.setItem("sidebar-collapsed", JSON.stringify(newState));
  };

  // Combine navigation based on user role
  const getNavItems = () => {
    if (!isAuthenticated || !user) return [];

    let items = [...navigationConfig];

    if (user.role === "core_team" || user.role === "admin") {
      items = [...items, ...coreTeamNavigation];
    }

    if (user.role === "mentor" || user.role === "admin") {
      items = [...items, ...mentorNavigation];
    }

    return items;
  };

  const navItems = getNavItems();

  // Filter items based on user role
  const visibleItems = navItems.filter(
    (item) => !item.roles || item.roles.includes(user?.role || ("" as any))
  );

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(href + "/");
  };

  // Handle drag-to-close on mobile
  const handleDragEnd = (event: any, info: any) => {
    // Swipe left to close (on mobile)
    if (info.offset.x < -50 && window.innerWidth < 1024) {
      onClose?.();
    }
  };

  return (
    <>
      {/* Mobile Backdrop with fade animation */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 z-30 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar with slide and drag animations */}
      <motion.aside
        initial={false}
        animate={{
          x: open ? 0 : "-100%",
          width: isCollapsed ? "64px" : "256px",
        }}
        transition={{
          x: { duration: 0.3, ease: "easeInOut" },
          width: { duration: 0.4, ease: "easeInOut" },
        }}
        drag="x"
        dragElastic={0.2}
        dragConstraints={{ left: -100, right: 0 }}
        onDragEnd={handleDragEnd}
        className={cn(
          "fixed left-0 top-0 h-screen bg-surface-primary border-r border-border-primary z-40",
          "flex flex-col",
          "lg:static lg:translate-x-0 lg:drag-none"
        )}
      >
        {/* Header with smooth transitions */}
        <motion.div
          layout
          className="flex items-center justify-between h-16 px-lg border-b border-border-primary"
        >
          <motion.div
            className="flex items-center gap-md"
            initial={{ opacity: 1 }}
            animate={{ opacity: isCollapsed ? 0 : 1 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-sm font-bold text-text-inverse">DT</span>
            </motion.div>
            <motion.span className="font-semibold text-text-primary whitespace-nowrap">
              DTSW
            </motion.span>
          </motion.div>

          {/* Close button on mobile */}
          <motion.button
            onClick={onClose}
            className="lg:hidden p-xs hover:bg-surface-secondary rounded-md transition-colors"
            aria-label="Close sidebar"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </motion.button>
        </motion.div>

        {/* Navigation with stagger animation */}
        <motion.nav
          className="flex-1 overflow-y-auto p-lg space-y-sm"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {visibleItems.map((item, index) => (
            <motion.div
              key={item.href}
              variants={itemVariants}
              layout
            >
              <Link
                href={item.href}
                onClick={() => {
                  setIsLoading(true);
                  onClose?.();
                  // Simulate navigation delay for loading state
                  setTimeout(() => setIsLoading(false), 300);
                }}
                className={cn(
                  "flex items-center justify-between px-lg py-md rounded-lg transition-colors relative group",
                  "touch-target-lg",
                  isActive(item.href)
                    ? "bg-brand-primary text-text-inverse font-medium"
                    : "text-text-secondary hover:bg-surface-secondary"
                )}
              >
                {/* Active link highlight animation */}
                {isActive(item.href) && (
                  <motion.div
                    layoutId="nav-highlight"
                    className="absolute inset-0 bg-brand-primary rounded-lg -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 40 }}
                  />
                )}

                <motion.span
                  className="whitespace-nowrap overflow-hidden"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: isCollapsed ? 0 : 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.label}
                </motion.span>

                {/* Badge with pulse animation */}
                <AnimatePresence>
                  {item.badge && !isCollapsed && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      transition={{ duration: 0.2 }}
                      className={cn(
                        "text-xs font-medium px-md py-xs rounded-full flex-shrink-0",
                        isActive(item.href)
                          ? "bg-text-inverse text-brand-primary"
                          : "bg-brand-primary text-text-inverse"
                      )}
                    >
                      <motion.div
                        variants={pulseVariants}
                        initial="initial"
                        animate="animate"
                      >
                        {item.badge}
                      </motion.div>
                    </motion.span>
                  )}
                </AnimatePresence>
              </Link>
            </motion.div>
          ))}
        </motion.nav>

        {/* User Profile Section with smooth animations */}
        {isAuthenticated && user && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="border-t border-border-primary p-lg space-y-md"
          >
            <motion.div
              className="flex items-center gap-md"
              layout
            >
              <motion.div
                className="w-10 h-10 bg-brand-light rounded-full flex items-center justify-center flex-shrink-0"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-sm font-semibold text-text-primary">
                  {user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </motion.div>
              <motion.div
                className="flex-1 min-w-0"
                animate={{
                  opacity: isCollapsed ? 0 : 1,
                  width: isCollapsed ? 0 : "auto",
                }}
                transition={{ duration: 0.2 }}
              >
                <p className="text-sm font-medium text-text-primary truncate">
                  {user.name}
                </p>
                <p className="text-xs text-text-tertiary truncate">
                  {user.email}
                </p>
              </motion.div>
            </motion.div>
            <motion.button
              className="w-full px-lg py-md text-sm text-text-secondary hover:bg-surface-secondary rounded-lg transition-colors text-left"
              whileHover={{ backgroundColor: "var(--color-surface-secondary)" }}
              whileTap={{ scale: 0.98 }}
            >
              {isLoading ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="inline-block"
                >
                  ⟳
                </motion.div>
              ) : (
                "Logout"
              )}
            </motion.button>
          </motion.div>
        )}

        {/* Collapse button for desktop */}
        <motion.button
          onClick={handleToggleCollapse}
          className="hidden lg:flex items-center justify-center h-12 border-t border-border-primary hover:bg-surface-secondary transition-colors"
          whileHover={{ backgroundColor: "var(--color-surface-secondary)" }}
          whileTap={{ scale: 0.95 }}
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <motion.svg
            className="w-5 h-5 text-text-secondary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={{ rotate: isCollapsed ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </motion.svg>
        </motion.button>
      </motion.aside>
    </>
  );
}
