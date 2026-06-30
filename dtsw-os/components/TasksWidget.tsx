/**
 * Tasks Widget Component
 * Task list with filters, status, and priority indicators
 */

'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, Badge, Button } from '@/components';
import { containerVariants, itemVariants } from '@/lib/animations';
import { cn } from '@/lib/utils';

type TaskStatus = 'pending' | 'in_progress' | 'completed';
type TaskPriority = 'high' | 'medium' | 'low';

interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: Date;
  priority: TaskPriority;
  status: TaskStatus;
  assignedBy: string;
  progress: number;
}

interface TasksWidgetProps {
  tasks: Task[];
  title?: string;
  onTaskClick?: (task: Task) => void;
  onTaskUpdate?: (taskId: string, status: TaskStatus) => void;
}

const statusColors = {
  pending: { bg: 'bg-amber-100', text: 'text-amber-700', label: 'Pending' },
  in_progress: { bg: 'bg-blue-100', text: 'text-blue-700', label: 'In Progress' },
  completed: { bg: 'bg-emerald-100', text: 'text-emerald-700', label: 'Completed' },
};

const priorityColors = {
  high: { bg: 'bg-red-100', text: 'text-red-700', label: '🔴 High' },
  medium: { bg: 'bg-amber-100', text: 'text-amber-700', label: '🟡 Medium' },
  low: { bg: 'bg-green-100', text: 'text-green-700', label: '🟢 Low' },
};

const statusIcons = {
  pending: '⭕',
  in_progress: '🔄',
  completed: '✓',
};

export const TasksWidget: React.FC<TasksWidgetProps> = ({
  tasks,
  title = 'My Tasks',
  onTaskClick,
  onTaskUpdate,
}) => {
  const [filter, setFilter] = useState<TaskStatus | 'all'>('all');
  const [sortBy, setSortBy] = useState<'priority' | 'dueDate'>('priority');

  const filteredTasks = filter === 'all' 
    ? tasks 
    : tasks.filter(t => t.status === filter);

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (sortBy === 'priority') {
      const priorityOrder = { high: 0, medium: 1, low: 2 };
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    } else {
      return a.dueDate.getTime() - b.dueDate.getTime();
    }
  });

  const completedCount = tasks.filter(t => t.status === 'completed').length;
  const totalTasks = tasks.length;
  const completionPercentage = Math.round((completedCount / totalTasks) * 100);

  const isOverdue = (dueDate: Date, status: TaskStatus) => {
    return status !== 'completed' && dueDate < new Date();
  };

  return (
    <Card variant="default" padding="lg">
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{totalTasks} tasks ({completedCount} completed)</CardDescription>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-2xl font-bold text-brand-primary">{completionPercentage}%</p>
              <p className="text-xs text-text-secondary">Complete</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-surface-secondary flex items-center justify-center relative">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#E5E7EB"
                  strokeWidth="8"
                />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#FF9500"
                  strokeWidth="8"
                  strokeDasharray={`${2 * Math.PI * 45}`}
                  strokeDashoffset={`${2 * Math.PI * 45 * (1 - completionPercentage / 100)}`}
                  strokeLinecap="round"
                  initial={{ strokeDashoffset: 2 * Math.PI * 45 }}
                  animate={{ strokeDashoffset: 2 * Math.PI * 45 * (1 - completionPercentage / 100) }}
                  transition={{ duration: 1 }}
                />
              </svg>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6 pb-6 border-b border-border-primary">
          <div className="flex gap-2 flex-wrap">
            {['all', 'pending', 'in_progress', 'completed'].map((status) => (
              <motion.button
                key={status}
                onClick={() => setFilter(status as any)}
                className={cn(
                  'px-3 py-1.5 rounded-lg text-sm font-medium transition-all',
                  filter === status
                    ? 'bg-brand-primary text-white'
                    : 'bg-surface-secondary text-text-secondary hover:bg-border-primary'
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {status === 'all' ? 'All' : status === 'pending' ? 'Pending' : status === 'in_progress' ? 'In Progress' : 'Completed'}
              </motion.button>
            ))}
          </div>

          <div className="ml-auto">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-3 py-1.5 rounded-lg text-sm border border-border-primary bg-white text-text-primary"
            >
              <option value="priority">Sort by Priority</option>
              <option value="dueDate">Sort by Due Date</option>
            </select>
          </div>
        </div>

        {/* Task List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-3"
        >
          {sortedTasks.length > 0 ? (
            sortedTasks.map((task) => {
              const statusInfo = statusColors[task.status];
              const priorityInfo = priorityColors[task.priority];
              const overdue = isOverdue(task.dueDate, task.status);

              return (
                <motion.button
                  key={task.id}
                  onClick={() => onTaskClick?.(task)}
                  className="w-full text-left"
                  variants={itemVariants}
                >
                  <div className={cn(
                    'p-4 rounded-lg border transition-all hover:border-brand-primary',
                    task.status === 'completed'
                      ? 'bg-emerald-50 border-emerald-200'
                      : overdue
                        ? 'bg-red-50 border-red-200'
                        : 'bg-white border-border-primary'
                  )}>
                    {/* Task Header */}
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-start gap-3 flex-1">
                        {/* Status Icon */}
                        <motion.button
                          onClick={(e) => {
                            e.stopPropagation();
                            const nextStatus: TaskStatus = 
                              task.status === 'pending' ? 'in_progress' :
                              task.status === 'in_progress' ? 'completed' : 'pending';
                            onTaskUpdate?.(task.id, nextStatus);
                          }}
                          className={cn(
                            'w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all',
                            task.status === 'completed' ? 'bg-emerald-500 text-white' :
                            task.status === 'in_progress' ? 'bg-blue-500 text-white' :
                            'bg-surface-secondary text-text-secondary'
                          )}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <span className="text-lg">{statusIcons[task.status]}</span>
                        </motion.button>

                        {/* Task Title */}
                        <div className="flex-1">
                          <h4 className={cn(
                            'font-semibold text-text-primary',
                            task.status === 'completed' && 'line-through text-text-secondary'
                          )}>
                            {task.title}
                          </h4>
                          <p className="text-sm text-text-secondary mt-1">
                            {task.description}
                          </p>
                        </div>
                      </div>

                      {/* Priority Badge */}
                      <Badge
                        variant="secondary"
                        size="sm"
                        className={cn('flex-shrink-0', priorityInfo.bg, priorityInfo.text)}
                      >
                        {priorityInfo.label}
                      </Badge>
                    </div>

                    {/* Progress Bar & Info */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex-1">
                          <div className="w-full h-2 bg-surface-secondary rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-brand-primary rounded-full transition-all"
                              initial={{ width: 0 }}
                              animate={{ width: `${task.progress}%` }}
                              transition={{ duration: 0.5 }}
                            />
                          </div>
                        </div>
                        <span className="text-xs font-semibold text-text-secondary flex-shrink-0">
                          {task.progress}%
                        </span>
                      </div>

                      {/* Meta Info */}
                      <div className="flex flex-wrap gap-3 text-xs text-text-secondary pt-2">
                        <span>
                          📅 {task.dueDate.toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                          })}
                        </span>
                        <span>👤 {task.assignedBy}</span>
                        <Badge
                          variant="secondary"
                          size="sm"
                          className={cn('text-xs', statusInfo.bg, statusInfo.text)}
                        >
                          {statusInfo.label}
                        </Badge>
                        {overdue && task.status !== 'completed' && (
                          <Badge variant="danger" size="sm" className="text-xs">
                            ⚠️ Overdue
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.button>
              );
            })
          ) : (
            <motion.div
              variants={itemVariants}
              className="text-center py-8 text-text-secondary"
            >
              <p className="text-lg font-medium mb-2">No tasks found</p>
              <p className="text-sm">Try changing your filters</p>
            </motion.div>
          )}
        </motion.div>

        {/* View All Button */}
        {sortedTasks.length > 0 && (
          <Button variant="ghost" fullWidth className="mt-4">
            View All Tasks →
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

TasksWidget.displayName = 'TasksWidget';

export type { TasksWidgetProps, Task, TaskStatus, TaskPriority };
