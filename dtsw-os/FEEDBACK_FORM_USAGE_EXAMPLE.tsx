/**
 * FeedbackForm Integration Example
 * 
 * This example demonstrates how to integrate the FeedbackForm component
 * into a page or modal within the DTSW Innovation OS platform.
 */

'use client';

import React, { useState } from 'react';
import { FeedbackForm, type FeedbackData } from '@/components';
import { Card, CardContent, CardHeader, CardTitle } from '@/components';

/**
 * Example 1: Simple Page Integration
 */
export function FeedbackPage() {
  const handleFeedbackSubmit = async (data: FeedbackData) => {
    console.log('Feedback submitted:', data);

    // Call your API endpoint
    const response = await fetch('/api/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to submit feedback');
    }

    // Optionally send email notification
    await fetch('/api/notify-feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        category: data.category,
        title: data.title,
        userEmail: data.email,
      }),
    });
  };

  const handleClose = () => {
    // Navigate away or close modal
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-surface-secondary py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <FeedbackForm 
          onSubmit={handleFeedbackSubmit}
          onClose={handleClose}
        />
      </div>
    </div>
  );
}

/**
 * Example 2: Modal Integration
 */
export function FeedbackModal() {
  const [isOpen, setIsOpen] = useState(false);

  const handleFeedbackSubmit = async (data: FeedbackData) => {
    console.log('Feedback submitted:', data);

    // Submit to your backend
    const response = await fetch('/api/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to submit feedback');
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-brand-primary text-white px-6 py-3 rounded-lg shadow-lg hover:bg-orange-600 transition-colors"
      >
        💬 Send Feedback
      </button>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <FeedbackForm 
          onSubmit={handleFeedbackSubmit}
          onClose={() => setIsOpen(false)}
        />
      </div>
    </div>
  );
}

/**
 * Example 3: Dashboard Widget Integration
 */
export function FeedbackWidget() {
  const [submitted, setSubmitted] = useState(false);

  const handleFeedbackSubmit = async (data: FeedbackData) => {
    console.log('Feedback submitted:', data);

    const response = await fetch('/api/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to submit feedback');
    }

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Card variant="filled" padding="lg">
        <CardHeader>
          <CardTitle>Thank You!</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-text-secondary mb-4">
            Your feedback helps us improve the DTSW Innovation OS platform. We appreciate your input!
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="text-brand-primary hover:underline font-medium"
          >
            Send More Feedback
          </button>
        </CardContent>
      </Card>
    );
  }

  return <FeedbackForm onSubmit={handleFeedbackSubmit} />;
}

/**
 * Example 4: Dashboard Integration with Loading States
 */
export function DashboardFeedbackSection() {
  const [isLoading, setIsLoading] = useState(false);
  const [feedbackList, setFeedbackList] = useState<FeedbackData[]>([]);

  const handleFeedbackSubmit = async (data: FeedbackData) => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit feedback');
      }

      // Update local state for admin dashboard
      setFeedbackList((prev) => [data, ...prev]);

      // Send notification email
      await fetch('/api/notify-admin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'new_feedback',
          category: data.category,
          title: data.title,
          rating: data.rating,
          email: data.email,
        }),
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <FeedbackForm onSubmit={handleFeedbackSubmit} />

      {/* Admin View: Recent Feedback */}
      {feedbackList.length > 0 && (
        <Card variant="default" padding="lg">
          <CardHeader>
            <CardTitle>Recent Feedback ({feedbackList.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {feedbackList.map((item, idx) => (
                <div key={idx} className="border-b border-border-primary last:border-b-0 pb-4 last:pb-0">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-text-primary">{item.title}</h4>
                    <span className="text-brand-primary font-bold">{'⭐'.repeat(item.rating)}</span>
                  </div>
                  <p className="text-text-secondary text-sm mb-2">{item.description}</p>
                  <div className="flex gap-2 items-center text-xs">
                    <span className="px-2 py-1 bg-orange-100 text-brand-primary rounded">
                      {item.category}
                    </span>
                    {item.email && (
                      <a href={`mailto:${item.email}`} className="text-blue-600 hover:underline">
                        {item.email}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

/**
 * Example 5: Standalone Component Usage (No Callbacks)
 */
export function StandaloneFeedback() {
  return (
    <div className="p-6">
      <FeedbackForm />
    </div>
  );
}

/**
 * API Route Example: /api/feedback
 * 
 * This is a reference for your backend implementation:
 * 
 * ```typescript
 * import { NextRequest, NextResponse } from 'next/server';
 * 
 * export async function POST(req: NextRequest) {
 *   try {
 *     const body = await req.json();
 *     
 *     // Validate input
 *     if (!body.title || !body.description) {
 *       return NextResponse.json(
 *         { error: 'Missing required fields' },
 *         { status: 400 }
 *       );
 *     }
 *     
 *     // Store in database
 *     const feedback = await db.feedback.create({
 *       title: body.title,
 *       description: body.description,
 *       rating: body.rating,
 *       category: body.category,
 *       email: body.email,
 *       createdAt: new Date(),
 *       ipAddress: req.headers.get('x-forwarded-for'),
 *     });
 *     
 *     // Send notification
 *     await sendNotification({
 *       to: process.env.ADMIN_EMAIL,
 *       subject: `New Feedback: ${body.category}`,
 *       body: body.description,
 *     });
 *     
 *     return NextResponse.json(
 *       { success: true, id: feedback.id },
 *       { status: 201 }
 *     );
 *   } catch (error) {
 *     console.error('Feedback error:', error);
 *     return NextResponse.json(
 *       { error: 'Failed to submit feedback' },
 *       { status: 500 }
 *     );
 *   }
 * }
 * ```
 */
