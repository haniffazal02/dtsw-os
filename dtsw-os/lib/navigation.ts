import { NavItem } from "@/types";

// Icons placeholder - we'll create actual icon components later
export const navigationConfig: NavItem[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
    roles: ["student", "core_team", "mentor", "admin"],
  },
  {
    label: "Clubs",
    href: "/dashboard/clubs",
    roles: ["student", "core_team", "mentor", "admin"],
    badge: 4,
  },
  {
    label: "Events",
    href: "/dashboard/events",
    roles: ["student", "core_team", "mentor", "admin"],
  },
  {
    label: "Tasks",
    href: "/dashboard/tasks",
    roles: ["student", "core_team", "mentor", "admin"],
  },
  {
    label: "Opportunities",
    href: "/dashboard/opportunities",
    roles: ["student", "core_team", "mentor", "admin"],
  },
];

// Core Team specific navigation
export const coreTeamNavigation: NavItem[] = [
  {
    label: "Team Dashboard",
    href: "/dashboard/team",
    roles: ["core_team", "admin"],
  },
  {
    label: "Members",
    href: "/dashboard/team/members",
    roles: ["core_team", "admin"],
  },
  {
    label: "Events Management",
    href: "/dashboard/team/events",
    roles: ["core_team", "admin"],
  },
  {
    label: "Analytics",
    href: "/dashboard/team/analytics",
    roles: ["core_team", "admin"],
  },
];

// Mentor specific navigation
export const mentorNavigation: NavItem[] = [
  {
    label: "Mentor Dashboard",
    href: "/dashboard/mentor",
    roles: ["mentor", "admin"],
  },
  {
    label: "Pending Approvals",
    href: "/dashboard/mentor/approvals",
    roles: ["mentor", "admin"],
    badge: 3,
  },
  {
    label: "Club Performance",
    href: "/dashboard/mentor/clubs",
    roles: ["mentor", "admin"],
  },
  {
    label: "Student Progress",
    href: "/dashboard/mentor/students",
    roles: ["mentor", "admin"],
  },
];

// Public navigation
export const publicNavigation: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Clubs",
    href: "/clubs",
  },
  {
    label: "Events",
    href: "/events",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];
