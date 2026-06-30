/**
 * LoadingState Component
 * Skeleton and loading animations
 */

import React from 'react';
import { cn } from '@/lib/utils';

interface LoadingStateProps {
  variant?: 'skeleton' | 'spinner' | 'pulse';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  count?: number;
  className?: string;
}

export const LoadingState: React.FC<LoadingStateProps> = ({
  variant = 'skeleton',
  size = 'md',
  fullWidth = false,
  count = 1,
  className,
}) => {
  if (variant === 'spinner') {
    return (
      <div className="flex justify-center items-center">
        <svg
          className={cn('animate-spin', {
            'h-4 w-4': size === 'sm',
            'h-6 w-6': size === 'md',
            'h-8 w-8': size === 'lg',
          })}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75 text-brand-primary"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      </div>
    );
  }

  if (variant === 'pulse') {
    return (
      <div className={cn('space-y-3', { 'w-full': fullWidth })}>
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={i}
            className={cn('bg-surface-secondary rounded-lg animate-pulse', {
              'h-4': size === 'sm',
              'h-6': size === 'md',
              'h-8': size === 'lg',
              'w-full': fullWidth,
            }, className)}
          />
        ))}
      </div>
    );
  }

  return (
    <div className={cn('space-y-3', { 'w-full': fullWidth })}>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className={cn('bg-gradient-to-r from-surface-secondary via-white to-surface-secondary bg-200% animate-pulse rounded-lg', {
            'h-4': size === 'sm',
            'h-6': size === 'md',
            'h-8': size === 'lg',
            'w-full': fullWidth,
          }, className)}
        />
      ))}
    </div>
  );
};

LoadingState.displayName = 'LoadingState';

// Skeleton card for loading dashboard
export const SkeletonCard: React.FC<{ count?: number }> = ({ count = 3 }) => (
  <div className="space-y-4">
    {Array.from({ length: count }).map((_, i) => (
      <div key={i} className="bg-white border border-border-primary rounded-lg p-4 space-y-3">
        <div className="h-4 bg-surface-secondary rounded w-3/4 animate-pulse" />
        <div className="h-3 bg-surface-secondary rounded w-1/2 animate-pulse" />
      </div>
    ))}
  </div>
);

SkeletonCard.displayName = 'SkeletonCard';

export type { LoadingStateProps };
