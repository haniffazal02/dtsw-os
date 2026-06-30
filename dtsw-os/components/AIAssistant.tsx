/**
 * AI Assistant Component
 * Placeholder module for future AI integration
 * Features: Chat interface mockup, quick actions, recommendation cards
 */

'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from './Card';
import { Badge } from './Badge';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

interface Recommendation {
  id: string;
  title: string;
  description: string;
  icon: string;
  tags: string[];
}

const EXAMPLE_MESSAGES: Message[] = [
  {
    id: '1',
    text: 'How can I improve my club engagement?',
    sender: 'user',
    timestamp: new Date(Date.now() - 300000),
  },
  {
    id: '2',
    text: 'Great question! Consider hosting regular meetings, creating exclusive events, and engaging members with personalized content. Would you like specific suggestions?',
    sender: 'ai',
    timestamp: new Date(Date.now() - 240000),
  },
  {
    id: '3',
    text: 'Yes, please! What about event planning tips?',
    sender: 'user',
    timestamp: new Date(Date.now() - 180000),
  },
  {
    id: '4',
    text: 'Event planning tips:\n• Plan 2-3 weeks ahead\n• Set clear objectives\n• Budget wisely\n• Promote early\n• Gather feedback after',
    sender: 'ai',
    timestamp: new Date(Date.now() - 120000),
  },
];

const RECOMMENDATIONS: Recommendation[] = [
  {
    id: 'rec-1',
    title: 'Event Strategy Guide',
    description: 'Learn best practices for planning successful club events',
    icon: '📅',
    tags: ['events', 'planning', 'strategy'],
  },
  {
    id: 'rec-2',
    title: 'Member Engagement Toolkit',
    description: 'Tools and techniques to keep members active and engaged',
    icon: '👥',
    tags: ['engagement', 'community', 'retention'],
  },
  {
    id: 'rec-3',
    title: 'Social Media Best Practices',
    description: 'Maximize reach and engagement across social platforms',
    icon: '📱',
    tags: ['marketing', 'social', 'promotion'],
  },
];

const QUICK_ACTIONS = [
  { label: 'Get Suggestions', icon: '💡', color: 'primary' },
  { label: 'Help & Support', icon: '❓', color: 'secondary' },
  { label: 'My Profile', icon: '👤', color: 'secondary' },
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
};

const messageVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};

const pulseVariants = {
  animate: {
    scale: [1, 1.05, 1],
    transition: { duration: 2, repeat: Infinity },
  },
};

export const AIAssistant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>(EXAMPLE_MESSAGES);
  const [isLoading, setIsLoading] = useState(false);

  const handleQuickAction = async (action: string) => {
    setIsLoading(true);
    setTimeout(() => {
      const newMessage: Message = {
        id: `msg-${Date.now()}`,
        text: `I clicked on: ${action}. This feature is coming soon!`,
        sender: 'user',
        timestamp: new Date(),
      };
      setMessages([...messages, newMessage]);
      setIsLoading(false);
    }, 800);
  };

  return (
    <motion.div
      className="w-full space-y-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Main Chat Card */}
      <motion.div variants={itemVariants}>
        <Card variant="elevated" padding="lg">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <motion.span variants={pulseVariants} animate="animate" className="text-2xl">
                    ✨
                  </motion.span>
                  AI Assistant
                </CardTitle>
                <CardDescription>Chat interface powered by AI (Coming Soon)</CardDescription>
              </div>
              <Badge variant="primary" size="sm">
                Beta Preview
              </Badge>
            </div>
          </CardHeader>

          <CardContent>
            <div className="space-y-4">
              {/* Chat Messages */}
              <div className="flex flex-col gap-3 bg-surface-secondary rounded-lg p-4 h-64 overflow-y-auto">
                {messages.map((message, index) => (
                  <motion.div
                    key={message.id}
                    variants={messageVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * 0.1 }}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs px-4 py-2 rounded-lg ${
                        message.sender === 'user'
                          ? 'bg-brand-primary text-white rounded-br-none'
                          : 'bg-white border border-border-primary text-text-primary rounded-bl-none shadow-sm'
                      }`}
                    >
                      <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.text}</p>
                      <span className="text-xs opacity-70 mt-1 block">
                        {message.timestamp.toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {QUICK_ACTIONS.map((action, index) => (
                  <motion.div
                    key={action.label}
                    variants={itemVariants}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      variant={action.color === 'primary' ? 'primary' : 'secondary'}
                      fullWidth
                      onClick={() => handleQuickAction(action.label)}
                      disabled={isLoading}
                      leftIcon={<span className="text-lg">{action.icon}</span>}
                    >
                      {action.label}
                    </Button>
                  </motion.div>
                ))}
              </div>

              {/* Coming Soon Badge */}
              <div className="flex items-center justify-center p-4 bg-orange-50 border border-orange-200 rounded-lg">
                <span className="text-sm font-medium text-brand-primary">
                  🚀 Full AI chat integration coming soon
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Recommendation Cards */}
      <motion.div variants={itemVariants}>
        <div>
          <h3 className="text-lg font-semibold text-text-primary mb-3">AI-Powered Recommendations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {RECOMMENDATIONS.map((rec, index) => (
              <motion.div
                key={rec.id}
                variants={itemVariants}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <Card variant="interactive" padding="lg">
                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      <div className="flex items-start justify-between">
                        <span className="text-3xl">{rec.icon}</span>
                        <Badge variant="primary" size="sm">
                          New
                        </Badge>
                      </div>

                      <div>
                        <h4 className="font-semibold text-text-primary">{rec.title}</h4>
                        <p className="text-sm text-text-secondary mt-1">{rec.description}</p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {rec.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" size="sm">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <Button variant="outline" size="sm" fullWidth className="mt-4">
                        Learn More →
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Feature Status Card */}
      <motion.div variants={itemVariants}>
        <Card variant="filled" padding="lg">
          <CardContent className="space-y-4">
            <div className="flex items-start gap-4">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                className="flex-shrink-0"
              >
                <span className="text-3xl">⚙️</span>
              </motion.div>

              <div className="flex-1">
                <h4 className="font-semibold text-text-primary mb-2">What's Coming</h4>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li className="flex items-center gap-2">
                    <span className="text-brand-primary">○</span>
                    Real-time AI conversation engine
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-brand-primary">○</span>
                    Intelligent recommendations based on your profile
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-brand-primary">○</span>
                    Multi-language support
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-brand-primary">○</span>
                    Voice-enabled interactions
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

AIAssistant.displayName = 'AIAssistant';

export type { Message, Recommendation };
