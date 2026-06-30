// DTSW Platform - App Router Architecture
// ==========================================
// 
// File Structure (Next.js App Router with Route Groups):
//
// app/
//   (public)/                    # Route group for public pages
//     layout.tsx                # PublicLayout wrapper
//     page.tsx                  # Landing page (/)
//     about/
//       page.tsx               # /about
//     clubs/
//       page.tsx               # /clubs listing
//     events/
//       page.tsx               # /events listing
//     contact/
//       page.tsx               # /contact
//   
//   (auth)/                     # Route group for auth pages
//     layout.tsx               # Auth layout
//     login/
//       page.tsx              # /login
//     signup/
//       page.tsx              # /signup
//     forgot-password/
//       page.tsx              # /forgot-password
//   
//   dashboard/                  # Authenticated dashboard
//     layout.tsx              # DashboardLayout wrapper
//     page.tsx                # /dashboard (overview)
//     
//     clubs/
//       page.tsx              # /dashboard/clubs
//       [clubId]/
//         page.tsx            # /dashboard/clubs/[clubId]
//         members/
//           page.tsx          # /dashboard/clubs/[clubId]/members
//     
//     events/
//       page.tsx              # /dashboard/events
//       [eventId]/
//         page.tsx            # /dashboard/events/[eventId]
//     
//     tasks/
//       page.tsx              # /dashboard/tasks
//       [taskId]/
//         page.tsx            # /dashboard/tasks/[taskId]
//     
//     opportunities/
//       page.tsx              # /dashboard/opportunities
//     
//     team/                    # Core team section
//       page.tsx              # /dashboard/team
//       members/
//         page.tsx            # /dashboard/team/members
//       events/
//         page.tsx            # /dashboard/team/events
//       analytics/
//         page.tsx            # /dashboard/team/analytics
//     
//     mentor/                  # Mentor section
//       page.tsx              # /dashboard/mentor
//       approvals/
//         page.tsx            # /dashboard/mentor/approvals
//       clubs/
//         page.tsx            # /dashboard/mentor/clubs
//       students/
//         page.tsx            # /dashboard/mentor/students
//     
//     profile/
//       page.tsx              # /dashboard/profile
//       settings/
//         page.tsx            # /dashboard/profile/settings
//   
//   clubs/                     # Public club pages
//     page.tsx                # /clubs listing (public)
//     [clubId]/
//       page.tsx              # /clubs/[clubId] (public club detail)
//   
//   events/                    # Public event pages
//     page.tsx                # /events listing (public)
//     [eventId]/
//       page.tsx              # /events/[eventId] (public event detail)
//   
//   research/                  # Research cell pages
//     page.tsx                # /research
//     [projectId]/
//       page.tsx              # /research/[projectId]
//   
//   industry-lab/              # Industry lab pages
//     page.tsx                # /industry-lab
//     [projectId]/
//       page.tsx              # /industry-lab/[projectId]
//   
//   api/                       # API routes
//     auth/                   # Auth endpoints
//       login/
//         route.ts
//       signup/
//         route.ts
//       logout/
//         route.ts
//     clubs/
//       route.ts              # GET /api/clubs, POST /api/clubs
//       [clubId]/
//         route.ts            # GET /api/clubs/[clubId]
//     events/
//       route.ts              # GET /api/events
//     users/
//       [userId]/
//         route.ts            # GET /api/users/[userId]
//   
//   globals.css               # Global styles
//   layout.tsx                # Root layout with AuthProvider
//
// Route Groups:
// - (public)  = Public pages with PublicLayout (header, footer)
// - (auth)    = Auth pages (login, signup, forgot password)
// - dashboard = Protected dashboard with DashboardLayout (sidebar + content)
//
// Layout Hierarchy:
// Root Layout (auth provider, fonts)
//   ├─ (public) Layout (PublicLayout - header/footer)
//   │   ├─ page.tsx (home)
//   │   ├─ about/page.tsx
//   │   └─ clubs/page.tsx
//   ├─ (auth) Layout (AuthLayout - centered form)
//   │   ├─ login/page.tsx
//   │   └─ signup/page.tsx
//   └─ dashboard Layout (DashboardLayout - sidebar + content)
//       ├─ page.tsx (overview)
//       ├─ clubs/page.tsx
//       ├─ events/page.tsx
//       └─ team/page.tsx
