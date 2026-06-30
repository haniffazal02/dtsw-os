/**
 * Student Dashboard Page
 * Main dashboard view with stats, widgets, and recent activity
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, Badge, Button } from '@/components';
import { StatsCard, StatsGrid } from '@/components/StatsCard';
import { containerVariants, itemVariants, pageVariants } from '@/lib/animations';
import { 
  getCurrentUser, 
  getUpcomingEvents, 
  getPendingTasks, 
  mockDashboardStats, 
  mockActivities 
} from '@/lib/mockData';

export default function DashboardPage() {
  const currentUser = getCurrentUser();
  const upcomingEvents = getUpcomingEvents();
  const pendingTasks = getPendingTasks();
  const recentActivities = mockActivities.slice(0, 5);

  // Stats for dashboard
  const dashboardStatistics = [
    {
      title: 'Active Clubs',
      value: mockDashboardStats.activeClubs,
      subtext: 'Currently member',
      icon: '👥',
      color: 'orange' as const,
      trend: { direction: 'up' as const, percentage: 2 },
    },
    {
      title: 'Upcoming Events',
      value: mockDashboardStats.upcomingEvents,
      subtext: 'This month',
      icon: '📅',
      color: 'blue' as const,
      trend: { direction: 'up' as const, percentage: 15 },
    },
    {
      title: 'Innovation Points',
      value: mockDashboardStats.innovationPoints,
      subtext: 'Total earned',
      icon: '⭐',
      color: 'purple' as const,
      trend: { direction: 'up' as const, percentage: 8 },
    },
    {
      title: 'Tasks Pending',
      value: mockDashboardStats.pendingTasks,
      subtext: 'Due this week',
      icon: '✓',
      color: 'red' as const,
      trend: { direction: 'down' as const, percentage: 3 },
    },
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={pageVariants}
      className="space-y-8 pb-8"
    >
      {/* Header */}
      <motion.div
        variants={itemVariants}
        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
      >
        <div>
          <h1 className="text-3xl font-bold text-text-primary">
            Welcome back, {currentUser.name.split(' ')[0]}! 👋
          </h1>
          <p className="text-text-secondary mt-1">
            Here's what's happening in your innovation journey
          </p>
        </div>
        <Button variant="primary" size="lg">
          Create Activity
        </Button>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <StatsGrid stats={dashboardStatistics} columns={2} />
      </motion.div>

      {/* Main Content Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
      >
        {/* Pending Tasks */}
        <motion.div variants={itemVariants} className="lg:col-span-2">
          <Card variant="default" padding="lg">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Pending Tasks</CardTitle>
                  <CardDescription>Keep up with your assignments</CardDescription>
                </div>
                <Badge variant="primary">High Priority</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pendingTasks.slice(0, 4).map((task) => (
                  <motion.div
                    key={task.id}
                    className="flex items-start gap-4 p-3 rounded-lg hover:bg-surface-secondary transition-colors"
                    variants={itemVariants}
                  >
                    <div className="flex-1">
                      <h4 className="font-medium text-text-primary">{task.title}</h4>
                      <p className="text-sm text-text-secondary mt-1">{task.description}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Badge 
                          variant={task.priority === 'high' ? 'danger' : 'warning'} 
                          size="sm"
                        >
                          {task.priority}
                        </Badge>
                        <span className="text-xs text-text-secondary">
                          Due {task.dueDate.toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                    <div className="w-16 text-right">
                      <div className="text-2xl font-bold text-brand-primary">{task.progress}%</div>
                      <div className="w-16 h-1.5 bg-surface-secondary rounded-full overflow-hidden mt-1">
                        <div
                          className="h-full bg-brand-primary transition-all"
                          style={{ width: `${task.progress}%` }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <Button variant="ghost" fullWidth className="mt-4">
                View All Tasks →
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Upcoming Events */}
        <motion.div variants={itemVariants}>
          <Card variant="default" padding="lg">
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
              <CardDescription>{upcomingEvents.length} events</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {upcomingEvents.slice(0, 3).map((event) => (
                  <motion.div
                    key={event.id}
                    className="p-3 rounded-lg border border-border-primary hover:border-brand-primary transition-colors cursor-pointer"
                    variants={itemVariants}
                  >
                    <p className="font-medium text-sm text-text-primary">{event.title}</p>
                    <p className="text-xs text-text-secondary mt-1">
                      {event.date.toLocaleDateString()}
                    </p>
                    <Badge variant="primary" size="sm" className="mt-2">
                      {event.category}
                    </Badge>
                  </motion.div>
                ))}
              </div>
              <Button variant="ghost" fullWidth className="mt-4">
                View All Events →
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      {/* Recent Activity */}
      <motion.div variants={itemVariants}>
        <Card variant="default" padding="lg">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your innovation journey updates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <motion.div
                  key={activity.id}
                  className="flex gap-4 pb-4 border-b border-border-primary last:border-b-0"
                  variants={itemVariants}
                >
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                    {activity.type === 'joined_club' && '✨'}
                    {activity.type === 'event_registered' && '📅'}
                    {activity.type === 'task_completed' && '✓'}
                    {activity.type === 'hackathon_registered' && '🚀'}
                    {activity.type === 'achievement_unlocked' && '⭐'}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-text-primary">{activity.title}</p>
                    <p className="text-sm text-text-secondary">
                      {activity.timestamp.toLocaleDateString()} at{' '}
                      {activity.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
