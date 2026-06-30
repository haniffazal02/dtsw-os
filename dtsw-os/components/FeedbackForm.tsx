/**
 * FeedbackForm Component
 * Collects user feedback with title, description, rating, and category
 * Production-grade with validation, animations, and proper UX feedback
 */

'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from './Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './Card';
import { Badge } from './Badge';

export type FeedbackCategory = 'Suggestion' | 'Bug' | 'Feature Request' | 'Other';
export type FormState = 'idle' | 'loading' | 'success' | 'error';

export interface FeedbackFormProps {
  onSubmit?: (data: FeedbackData) => Promise<void> | void;
  onClose?: () => void;
  className?: string;
}

export interface FeedbackData {
  title: string;
  description: string;
  rating: number;
  category: FeedbackCategory;
  email?: string;
}

interface FormErrors {
  title?: string;
  description?: string;
  email?: string;
}

const CATEGORIES: FeedbackCategory[] = ['Suggestion', 'Bug', 'Feature Request', 'Other'];

const categoryColors: Record<FeedbackCategory, 'primary' | 'success' | 'warning' | 'danger'> = {
  Suggestion: 'primary',
  Bug: 'danger',
  'Feature Request': 'success',
  Other: 'warning',
};

export const FeedbackForm: React.FC<FeedbackFormProps> = ({
  onSubmit,
  onClose,
  className,
}) => {
  const [formState, setFormState] = useState<FormState>('idle');
  const [errors, setErrors] = useState<FormErrors>({});
  const [successMessage, setSuccessMessage] = useState('');

  const [formData, setFormData] = useState<FeedbackData>({
    title: '',
    description: '',
    rating: 0,
    category: 'Suggestion',
    email: '',
  });

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Feedback title is required';
    } else if (formData.title.trim().length < 5) {
      newErrors.title = 'Title must be at least 5 characters';
    } else if (formData.title.trim().length > 100) {
      newErrors.title = 'Title must not exceed 100 characters';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Please provide feedback details';
    } else if (formData.description.trim().length < 10) {
      newErrors.description = 'Description must be at least 10 characters';
    } else if (formData.description.trim().length > 2000) {
      newErrors.description = 'Description must not exceed 2000 characters';
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setFormState('loading');

    try {
      if (onSubmit) {
        await onSubmit(formData);
      }

      setFormState('success');
      setSuccessMessage('Thank you! Your feedback has been submitted successfully.');

      setTimeout(() => {
        setFormData({
          title: '',
          description: '',
          rating: 0,
          category: 'Suggestion',
          email: '',
        });
        setFormState('idle');
        setSuccessMessage('');
        if (onClose) {
          onClose();
        }
      }, 2000);
    } catch (error) {
      setFormState('error');
      setSuccessMessage('Failed to submit feedback. Please try again.');
      setTimeout(() => {
        setFormState('idle');
        setSuccessMessage('');
      }, 3000);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleRatingClick = (rating: number) => {
    setFormData((prev) => ({
      ...prev,
      rating,
    }));
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  };

  const fieldVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, delay: i * 0.05 },
    }),
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={cn('w-full', className)}
    >
      <Card variant="elevated" padding="lg">
        <CardHeader>
          <CardTitle>Share Your Feedback</CardTitle>
          <CardDescription>
            Help us improve the DTSW Innovation OS platform by sharing your thoughts
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title Input */}
            <motion.div custom={0} variants={fieldVariants} initial="hidden" animate="visible">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-text-primary mb-2"
              >
                Feedback Title
              </label>
              <input
                id="title"
                name="title"
                type="text"
                placeholder="Brief summary of your feedback"
                value={formData.title}
                onChange={handleInputChange}
                className={cn(
                  'w-full px-4 py-2.5 bg-white border rounded-lg text-text-primary placeholder-text-tertiary transition-all duration-200',
                  'focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent',
                  errors.title ? 'border-red-500 focus:ring-red-500' : 'border-border-primary'
                )}
                maxLength={100}
                disabled={formState === 'loading'}
              />
              {errors.title && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-sm mt-1"
                >
                  {errors.title}
                </motion.p>
              )}
              <p className="text-text-tertiary text-xs mt-1">
                {formData.title.length}/100 characters
              </p>
            </motion.div>

            {/* Category Select */}
            <motion.div custom={1} variants={fieldVariants} initial="hidden" animate="visible">
              <label
                htmlFor="category"
                className="block text-sm font-medium text-text-primary mb-2"
              >
                Category
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className={cn(
                  'w-full px-4 py-2.5 bg-white border border-border-primary rounded-lg text-text-primary transition-all duration-200',
                  'focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent',
                  'disabled:opacity-50 disabled:cursor-not-allowed'
                )}
                disabled={formState === 'loading'}
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
              <div className="mt-2">
                <Badge variant={categoryColors[formData.category]} size="sm">
                  {formData.category}
                </Badge>
              </div>
            </motion.div>

            {/* Rating Stars */}
            <motion.div custom={2} variants={fieldVariants} initial="hidden" animate="visible">
              <label className="block text-sm font-medium text-text-primary mb-3">
                Rate Your Experience
              </label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <motion.button
                    key={star}
                    type="button"
                    onClick={() => handleRatingClick(star)}
                    disabled={formState === 'loading'}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="focus:outline-none transition-all duration-200"
                  >
                    <svg
                      className={cn(
                        'w-8 h-8 transition-all duration-200',
                        formData.rating >= star
                          ? 'fill-brand-primary text-brand-primary drop-shadow-md'
                          : 'fill-border-primary text-border-primary hover:fill-orange-100'
                      )}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </motion.button>
                ))}
              </div>
              {formData.rating > 0 && (
                <p className="text-text-secondary text-sm mt-2">
                  Rating: <span className="font-semibold text-brand-primary">{formData.rating}/5</span>
                </p>
              )}
            </motion.div>

            {/* Description Textarea */}
            <motion.div custom={3} variants={fieldVariants} initial="hidden" animate="visible">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-text-primary mb-2"
              >
                Feedback Details
              </label>
              <textarea
                id="description"
                name="description"
                placeholder="Please provide detailed feedback to help us improve..."
                value={formData.description}
                onChange={handleInputChange}
                rows={5}
                className={cn(
                  'w-full px-4 py-3 bg-white border rounded-lg text-text-primary placeholder-text-tertiary transition-all duration-200 resize-none',
                  'focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent',
                  'disabled:opacity-50 disabled:cursor-not-allowed',
                  errors.description ? 'border-red-500 focus:ring-red-500' : 'border-border-primary'
                )}
                maxLength={2000}
                disabled={formState === 'loading'}
              />
              {errors.description && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-sm mt-1"
                >
                  {errors.description}
                </motion.p>
              )}
              <p className="text-text-tertiary text-xs mt-1">
                {formData.description.length}/2000 characters
              </p>
            </motion.div>

            {/* Email Input (Optional) */}
            <motion.div custom={4} variants={fieldVariants} initial="hidden" animate="visible">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-text-primary mb-2"
              >
                Email <span className="text-text-tertiary">(optional)</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleInputChange}
                className={cn(
                  'w-full px-4 py-2.5 bg-white border rounded-lg text-text-primary placeholder-text-tertiary transition-all duration-200',
                  'focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent',
                  'disabled:opacity-50 disabled:cursor-not-allowed',
                  errors.email ? 'border-red-500 focus:ring-red-500' : 'border-border-primary'
                )}
                disabled={formState === 'loading'}
              />
              {errors.email && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-sm mt-1"
                >
                  {errors.email}
                </motion.p>
              )}
              <p className="text-text-tertiary text-xs mt-1">
                We'll use this to follow up if needed
              </p>
            </motion.div>

            {/* Status Messages */}
            <AnimatePresence>
              {successMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={cn(
                    'p-4 rounded-lg text-sm font-medium',
                    formState === 'success'
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                      : 'bg-red-50 text-red-700 border border-red-200'
                  )}
                >
                  {successMessage}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Submit and Close Buttons */}
            <motion.div
              custom={5}
              variants={fieldVariants}
              initial="hidden"
              animate="visible"
              className="flex gap-3 pt-4"
            >
              <Button
                type="submit"
                variant="primary"
                fullWidth
                isLoading={formState === 'loading'}
                disabled={formState === 'loading' || formState === 'success'}
              >
                Submit Feedback
              </Button>
              {onClose && (
                <Button
                  type="button"
                  variant="secondary"
                  onClick={onClose}
                  disabled={formState === 'loading'}
                  className="flex-1"
                >
                  Close
                </Button>
              )}
            </motion.div>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
};

FeedbackForm.displayName = 'FeedbackForm';

export type { FeedbackFormProps, FeedbackData, FeedbackCategory };
