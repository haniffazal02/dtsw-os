/**
 * Badge Component
 * Status, tag, and category indicator
 */

import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full font-medium transition-colors',
  {
    variants: {
      variant: {
        primary: 'bg-orange-100 text-brand-primary',
        secondary: 'bg-gray-100 text-gray-800',
        success: 'bg-emerald-100 text-emerald-700',
        danger: 'bg-red-100 text-red-700',
        warning: 'bg-amber-100 text-amber-700',
        info: 'bg-blue-100 text-blue-700',
        neutral: 'bg-surface-secondary text-text-primary',
      },
      size: {
        sm: 'px-2 py-0.5 text-xs',
        md: 'px-3 py-1 text-sm',
        lg: 'px-4 py-1.5 text-base',
      },
      outline: {
        true: 'border-2',
      },
    },
    compoundVariants: [
      {
        variant: 'primary',
        outline: true,
        className: 'bg-transparent border-brand-primary',
      },
      {
        variant: 'success',
        outline: true,
        className: 'bg-transparent border-emerald-700',
      },
      {
        variant: 'danger',
        outline: true,
        className: 'bg-transparent border-red-700',
      },
    ],
    defaultVariants: {
      variant: 'secondary',
      size: 'md',
    },
  }
);

interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  icon?: React.ReactNode;
}

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, size, outline, icon, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(badgeVariants({ variant, size, outline }), className)}
      {...props}
    >
      {icon && <span className="mr-1.5 flex-shrink-0">{icon}</span>}
      {children}
    </div>
  )
);

Badge.displayName = 'Badge';

export type { BadgeProps };
