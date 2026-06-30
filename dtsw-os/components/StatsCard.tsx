/**
 * Stats Card Widget
 * Display statistics with trend indicators
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components';
import { cardVariants } from '@/lib/animations';
import { cn } from '@/lib/utils';

interface StatsCardProps {
  title: string;
  value: string | number;
  subtext?: string;
  trend?: {
    direction: 'up' | 'down' | 'neutral';
    percentage: number;
  };
  icon?: React.ReactNode;
  color?: 'orange' | 'blue' | 'green' | 'purple' | 'red';
  onClick?: () => void;
  className?: string;
}

const colorClasses = {
  orange: 'bg-orange-50 text-brand-primary',
  blue: 'bg-blue-50 text-blue-600',
  green: 'bg-emerald-50 text-emerald-600',
  purple: 'bg-purple-50 text-purple-600',
  red: 'bg-red-50 text-red-600',
};

const trendArrowClasses = {
  up: 'text-emerald-600 rotate-45',
  down: 'text-red-600 -rotate-45',
  neutral: 'text-gray-400',
};

export const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  subtext,
  trend,
  icon,
  color = 'orange',
  onClick,
  className,
}) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className="cursor-pointer"
      onClick={onClick}
    >
      <Card variant="interactive" padding="md" className={className}>
        <CardContent>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-sm font-medium text-text-secondary mb-2">{title}</p>
              <p className="text-3xl font-bold text-text-primary mb-2">{value}</p>
              <div className="flex items-center gap-2">
                {trend && (
                  <div className="flex items-center gap-1">
                    <span className={cn('text-sm font-medium', {
                      'text-emerald-600': trend.direction === 'up',
                      'text-red-600': trend.direction === 'down',
                      'text-gray-600': trend.direction === 'neutral',
                    })}>
                      {trend.direction === 'up' && '↑'}
                      {trend.direction === 'down' && '↓'}
                      {trend.direction === 'neutral' && '→'}
                      {trend.percentage}%
                    </span>
                    <span className="text-xs text-text-secondary">vs last month</span>
                  </div>
                )}
              </div>
              {subtext && (
                <p className="text-xs text-text-secondary mt-2">{subtext}</p>
              )}
            </div>
            {icon && (
              <div className={cn('p-3 rounded-lg flex-shrink-0', colorClasses[color])}>
                {icon}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

StatsCard.displayName = 'StatsCard';

// Grid component for multiple stats cards
interface StatsGridProps {
  stats: StatsCardProps[];
  columns?: 2 | 3 | 4;
}

export const StatsGrid: React.FC<StatsGridProps> = ({ stats, columns = 3 }) => {
  return (
    <div className={cn('grid gap-4', {
      'grid-cols-1 md:grid-cols-2': columns === 2,
      'grid-cols-1 md:grid-cols-2 lg:grid-cols-3': columns === 3,
      'grid-cols-1 md:grid-cols-2 lg:grid-cols-4': columns === 4,
    })}>
      {stats.map((stat, index) => (
        <StatsCard key={index} {...stat} />
      ))}
    </div>
  );
};

StatsGrid.displayName = 'StatsGrid';

export type { StatsCardProps, StatsGridProps };
