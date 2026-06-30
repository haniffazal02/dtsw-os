// Core user and auth types
export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
}

export type UserRole = "student" | "core_team" | "mentor" | "admin";

export interface AuthContext {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  logout: () => Promise<void>;
}

// Club types
export interface Club {
  id: string;
  name: string;
  description: string;
  pillar: ClubPillar;
  members: number;
  image?: string;
  createdAt: Date;
}

export type ClubPillar = "CLT" | "SCD" | "IIPC" | "TALKS";

// Event types
export interface Event {
  id: string;
  title: string;
  description: string;
  date: Date;
  location?: string;
  capacity?: number;
  registered: number;
  image?: string;
  club?: Club;
  createdAt: Date;
}

// Task types
export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: Priority;
  dueDate: Date;
  assignedBy: User;
  assignedTo: User;
  createdAt: Date;
}

export type TaskStatus = "todo" | "in_progress" | "completed";
export type Priority = "low" | "medium" | "high";

// Navigation types
export interface NavItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
  badge?: number | string;
  children?: NavItem[];
  roles?: UserRole[];
}

// Page metadata
export interface PageMetadata {
  title: string;
  description?: string;
  image?: string;
  url?: string;
}
