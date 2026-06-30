/**
 * Mock Data for DTSW Platform
 * Production-ready mock data structure for all components
 */

export const mockStudents = [
  {
    id: 'student-001',
    name: 'Aarav Sharma',
    email: 'aarav.sharma@college.edu',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav',
    role: 'student' as const,
    clubs: ['clt-001', 'scd-002'],
    joinedDate: '2024-09-01',
    points: 340,
    activeEvents: 3,
    tasksCompleted: 12,
  },
  {
    id: 'student-002',
    name: 'Priya Gupta',
    email: 'priya.gupta@college.edu',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya',
    role: 'student' as const,
    clubs: ['scd-001', 'iipc-001'],
    joinedDate: '2024-08-15',
    points: 520,
    activeEvents: 5,
    tasksCompleted: 28,
  },
  {
    id: 'student-003',
    name: 'Rohan Patel',
    email: 'rohan.patel@college.edu',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rohan',
    role: 'student' as const,
    clubs: ['clt-002', 'dtsw-talks-001'],
    joinedDate: '2024-07-20',
    points: 280,
    activeEvents: 2,
    tasksCompleted: 8,
  },
];

export const mockCoreTeam = [
  {
    id: 'core-001',
    name: 'Anjali Verma',
    email: 'anjali.verma@college.edu',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Anjali',
    role: 'core_team' as const,
    department: 'CLT',
    joinedDate: '2024-06-01',
  },
  {
    id: 'core-002',
    name: 'Vikram Singh',
    email: 'vikram.singh@college.edu',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram',
    role: 'core_team' as const,
    department: 'SCD',
    joinedDate: '2024-05-15',
  },
];

export const mockClubs = [
  {
    id: 'clt-001',
    name: 'AI & Innovation Club',
    pillar: 'CLT',
    members: 145,
    image: 'https://images.unsplash.com/photo-1677442d019cecf8e5c6f7a5c6d3e1e1?w=400&h=300&fit=crop',
    description: 'Explore AI, machine learning, and innovation methodologies',
    color: 'from-orange-500 to-orange-600',
    tags: ['AI', 'Innovation', 'Tech'],
  },
  {
    id: 'clt-002',
    name: 'Leadership Summit',
    pillar: 'CLT',
    members: 89,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
    description: 'Develop leadership and management skills',
    color: 'from-amber-500 to-orange-500',
    tags: ['Leadership', 'Management'],
  },
  {
    id: 'scd-001',
    name: 'Web Development Bootcamp',
    pillar: 'SCD',
    members: 234,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop',
    description: 'Master modern web development with React, Next.js, and more',
    color: 'from-blue-500 to-orange-400',
    tags: ['Web Dev', 'Coding', 'SCD'],
  },
  {
    id: 'scd-002',
    name: 'Research Initiative',
    pillar: 'SCD',
    members: 67,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
    description: 'Conduct cutting-edge research in emerging technologies',
    color: 'from-indigo-500 to-orange-400',
    tags: ['Research', 'Innovation'],
  },
  {
    id: 'iipc-001',
    name: 'Industry Connect',
    pillar: 'IIPC',
    members: 156,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
    description: 'Direct partnerships with leading industry professionals',
    color: 'from-green-500 to-orange-400',
    tags: ['Industry', 'Internship', 'Placement'],
  },
  {
    id: 'dtsw-talks-001',
    name: 'DTSW Talks Series',
    pillar: 'DTSW Talks',
    members: 456,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
    description: 'Weekly talks from industry experts and thought leaders',
    color: 'from-purple-500 to-orange-400',
    tags: ['Talks', 'Webinar', 'Learning'],
  },
];

export const mockEvents = [
  {
    id: 'event-001',
    title: 'AI Masterclass with Industry Expert',
    date: new Date('2025-05-30'),
    time: '14:00',
    location: 'Conference Hall A',
    registered: 87,
    capacity: 100,
    category: 'Workshop',
    description: 'Learn advanced AI concepts from a leading industry expert',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
    status: 'upcoming' as const,
  },
  {
    id: 'event-002',
    title: 'Startup Pitching Competition',
    date: new Date('2025-06-15'),
    time: '10:00',
    location: 'Main Auditorium',
    registered: 156,
    capacity: 200,
    category: 'Competition',
    description: 'Pitch your startup idea to investors and industry leaders',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
    status: 'upcoming' as const,
  },
  {
    id: 'event-003',
    title: 'Web Development Workshop',
    date: new Date('2025-06-01'),
    time: '15:00',
    location: 'Lab 2',
    registered: 45,
    capacity: 50,
    category: 'Workshop',
    description: 'Hands-on workshop on modern web development practices',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
    status: 'upcoming' as const,
  },
  {
    id: 'event-004',
    title: 'Networking Dinner - IIPC Partners',
    date: new Date('2025-05-28'),
    time: '18:00',
    location: 'Campus Dining Hall',
    registered: 120,
    capacity: 150,
    category: 'Networking',
    description: 'Connect with industry partners and professionals',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
    status: 'upcoming' as const,
  },
];

export const mockHackathons = [
  {
    id: 'hack-001',
    name: 'InnovateTech 2025',
    date: new Date('2025-07-10'),
    endDate: new Date('2025-07-12'),
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop',
    description: 'Build innovative solutions for real-world problems',
    prizePool: '₹5,00,000',
    participants: 234,
    teams: 45,
    status: 'upcoming' as const,
    tags: ['Innovation', 'Tech', 'Competition'],
  },
  {
    id: 'hack-002',
    name: 'AI Solutions Hackathon',
    date: new Date('2025-08-20'),
    endDate: new Date('2025-08-22'),
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
    description: 'Build AI-powered applications that solve industry challenges',
    prizePool: '₹3,50,000',
    participants: 189,
    teams: 38,
    status: 'upcoming' as const,
    tags: ['AI', 'Machine Learning', 'Tech'],
  },
  {
    id: 'hack-003',
    name: 'Startup Sprint Challenge',
    date: new Date('2025-06-25'),
    endDate: new Date('2025-06-26'),
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
    description: 'Rapid prototyping and pitching challenge for startups',
    prizePool: '₹2,00,000',
    participants: 120,
    teams: 24,
    status: 'upcoming' as const,
    tags: ['Startup', 'Entrepreneurship'],
  },
];

export const mockTasks = [
  {
    id: 'task-001',
    title: 'Complete Python Assignment',
    description: 'Finish the data structures assignment for SCD module',
    dueDate: new Date('2025-05-28'),
    priority: 'high' as const,
    status: 'pending' as const,
    assignedBy: 'Anjali Verma',
    progress: 60,
  },
  {
    id: 'task-002',
    title: 'Submit Hackathon Proposal',
    description: 'Finalize and submit proposal for InnovateTech hackathon',
    dueDate: new Date('2025-06-01'),
    priority: 'high' as const,
    status: 'in_progress' as const,
    assignedBy: 'Vikram Singh',
    progress: 80,
  },
  {
    id: 'task-003',
    title: 'Research Industry Partnerships',
    description: 'Research and document 5 potential industry partners',
    dueDate: new Date('2025-06-05'),
    priority: 'medium' as const,
    status: 'pending' as const,
    assignedBy: 'Anjali Verma',
    progress: 30,
  },
  {
    id: 'task-004',
    title: 'Prepare Presentation for DTSW Talks',
    description: 'Create presentation slides for upcoming talk',
    dueDate: new Date('2025-06-10'),
    priority: 'medium' as const,
    status: 'pending' as const,
    assignedBy: 'Vikram Singh',
    progress: 0,
  },
  {
    id: 'task-005',
    title: 'Complete Club Leadership Training',
    description: 'Finish the leadership training module',
    dueDate: new Date('2025-05-25'),
    priority: 'low' as const,
    status: 'completed' as const,
    assignedBy: 'Anjali Verma',
    progress: 100,
  },
];

export const mockPartners = [
  {
    id: 'partner-001',
    name: 'TechCorp India',
    logo: 'https://api.dicebear.com/7.x/initials/svg?seed=TechCorp&backgroundColor=FF9500',
    category: 'Technology',
    description: 'Leading AI and software solutions provider',
  },
  {
    id: 'partner-002',
    name: 'InnovateLabs',
    logo: 'https://api.dicebear.com/7.x/initials/svg?seed=InnovateLabs&backgroundColor=FFA500',
    category: 'Innovation',
    description: 'Research and development for emerging technologies',
  },
  {
    id: 'partner-003',
    name: 'StartupHub',
    logo: 'https://api.dicebear.com/7.x/initials/svg?seed=StartupHub&backgroundColor=FFB84D',
    category: 'Startup Ecosystem',
    description: 'Accelerator and mentorship for new ventures',
  },
  {
    id: 'partner-004',
    name: 'Global Consultants',
    logo: 'https://api.dicebear.com/7.x/initials/svg?seed=GlobalConsultants&backgroundColor=FF9500',
    category: 'Consulting',
    description: 'Business strategy and transformation services',
  },
  {
    id: 'partner-005',
    name: 'FinTech Solutions',
    logo: 'https://api.dicebear.com/7.x/initials/svg?seed=FinTech&backgroundColor=FFA500',
    category: 'Financial Technology',
    description: 'Cutting-edge financial technology innovations',
  },
  {
    id: 'partner-006',
    name: 'Digital Marketing Co',
    logo: 'https://api.dicebear.com/7.x/initials/svg?seed=DigitalMarketing&backgroundColor=FFB84D',
    category: 'Marketing',
    description: 'Digital marketing and brand strategy expertise',
  },
];

export const mockActivities = [
  {
    id: 'activity-001',
    type: 'joined_club' as const,
    title: 'Joined AI & Innovation Club',
    timestamp: new Date('2025-05-25 10:30'),
    user: 'Aarav Sharma',
  },
  {
    id: 'activity-002',
    type: 'event_registered' as const,
    title: 'Registered for AI Masterclass',
    timestamp: new Date('2025-05-24 14:15'),
    user: 'Aarav Sharma',
  },
  {
    id: 'activity-003',
    type: 'task_completed' as const,
    title: 'Completed Leadership Training Module',
    timestamp: new Date('2025-05-23 16:45'),
    user: 'Aarav Sharma',
  },
  {
    id: 'activity-004',
    type: 'hackathon_registered' as const,
    title: 'Registered for InnovateTech 2025 Hackathon',
    timestamp: new Date('2025-05-22 09:20'),
    user: 'Aarav Sharma',
  },
  {
    id: 'activity-005',
    type: 'achievement_unlocked' as const,
    title: 'Earned 500 Innovation Points',
    timestamp: new Date('2025-05-20 11:00'),
    user: 'Aarav Sharma',
  },
];

export const mockNotifications = [
  {
    id: 'notif-001',
    type: 'event_reminder',
    title: 'Event Reminder',
    message: 'AI Masterclass starts in 2 hours',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
    read: false,
  },
  {
    id: 'notif-002',
    type: 'task_assigned',
    title: 'New Task Assigned',
    message: 'Prepare Presentation for DTSW Talks',
    timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000),
    read: false,
  },
  {
    id: 'notif-003',
    type: 'task_due',
    title: 'Task Due Soon',
    message: 'Python Assignment due tomorrow',
    timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000),
    read: true,
  },
  {
    id: 'notif-004',
    type: 'event_updated',
    title: 'Event Updated',
    message: 'Startup Pitching Competition venue changed',
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000),
    read: true,
  },
];

export const mockDashboardStats = {
  activeClubs: 6,
  upcomingEvents: 4,
  pendingTasks: 3,
  hackathonsRegistered: 2,
  innovationPoints: 340,
  tasksCompleted: 12,
  eventsAttended: 5,
  clubMembers: 3,
};

export const mockCalendarEvents = [
  {
    date: new Date('2025-05-28'),
    title: 'Networking Dinner',
    type: 'networking' as const,
  },
  {
    date: new Date('2025-05-30'),
    title: 'AI Masterclass',
    type: 'workshop' as const,
  },
  {
    date: new Date('2025-06-01'),
    title: 'Web Development Workshop',
    type: 'workshop' as const,
  },
  {
    date: new Date('2025-06-15'),
    title: 'Startup Pitching Competition',
    type: 'competition' as const,
  },
  {
    date: new Date('2025-07-10'),
    title: 'InnovateTech Hackathon Starts',
    type: 'hackathon' as const,
  },
];

// Get current user (for dashboard context)
export const getCurrentUser = () => mockStudents[0];

// Get user by ID
export const getUserById = (id: string) => mockStudents.find(u => u.id === id);

// Get clubs by pillar
export const getClubsByPillar = (pillar: string) => mockClubs.filter(c => c.pillar === pillar);

// Get upcoming events
export const getUpcomingEvents = () => 
  mockEvents.filter(e => e.date > new Date()).sort((a, b) => a.date.getTime() - b.date.getTime());

// Get pending tasks
export const getPendingTasks = () => 
  mockTasks.filter(t => t.status !== 'completed').sort((a, b) => b.priority.localeCompare(a.priority));

// Get completed tasks
export const getCompletedTasks = () => mockTasks.filter(t => t.status === 'completed');
