/**
 * Hackathons Section Component
 * Featured hackathon display with grid of upcoming hackathons
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, Button, Badge } from '@/components';
import { containerVariants, itemVariants } from '@/lib/animations';
import { cn } from '@/lib/utils';

interface Hackathon {
  id: string;
  name: string;
  date: Date;
  endDate: Date;
  image: string;
  description: string;
  prizePool: string;
  participants: number;
  teams: number;
  status: 'upcoming' | 'ongoing' | 'completed';
  tags: string[];
}

interface HackathonsCarouselProps {
  hackathons: Hackathon[];
  featured?: Hackathon;
  title?: string;
  onHackathonClick?: (hackathon: Hackathon) => void;
}

const getCountdownDays = (date: Date) => {
  const today = new Date();
  const diffTime = date.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};

export const HackathonsSection: React.FC<HackathonsCarouselProps> = ({
  hackathons,
  featured = hackathons[0],
  title = 'Hackathons',
  onHackathonClick,
}) => {
  const countdownDays = featured ? getCountdownDays(featured.date) : 0;
  const regularHackathons = hackathons.slice(1);

  return (
    <div className="space-y-6">
      {/* Featured Hackathon */}
      {featured && (
        <motion.div variants={itemVariants}>
          <motion.button
            onClick={() => onHackathonClick?.(featured)}
            className="group w-full text-left"
            whileHover={{ y: -4 }}
          >
            <Card variant="interactive" padding="none" className="overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 min-h-80">
                {/* Featured Image */}
                <div className="relative h-80 md:h-auto overflow-hidden bg-surface-secondary">
                  <img
                    src={featured.image}
                    alt={featured.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge
                      variant={
                        featured.status === 'upcoming'
                          ? 'primary'
                          : featured.status === 'ongoing'
                            ? 'success'
                            : 'secondary'
                      }
                      size="md"
                      className="capitalize"
                    >
                      {featured.status}
                    </Badge>
                  </div>
                </div>

                {/* Featured Content */}
                <CardContent className="p-8 md:p-10 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-2">
                        {featured.name}
                      </h2>
                      <p className="text-text-secondary text-lg">
                        {featured.description}
                      </p>
                    </div>

                    {/* Key Stats */}
                    <div className="grid grid-cols-3 gap-4 py-6 border-t border-b border-border-primary">
                      <div>
                        <p className="text-2xl font-bold text-brand-primary">
                          {featured.teams}
                        </p>
                        <p className="text-sm text-text-secondary">Teams</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-brand-primary">
                          {featured.participants}+
                        </p>
                        <p className="text-sm text-text-secondary">Participants</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-brand-primary">
                          {featured.prizePool}
                        </p>
                        <p className="text-sm text-text-secondary">Prize Pool</p>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {featured.tags.map((tag, idx) => (
                        <Badge key={idx} variant="secondary" size="sm">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Button variant="primary" size="lg" fullWidth>
                    Register Now
                  </Button>
                </CardContent>
              </div>
            </Card>
          </motion.button>
        </motion.div>
      )}

      {/* Upcoming Hackathons Grid */}
      {regularHackathons.length > 0 && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h3 className="text-xl font-semibold text-text-primary mb-4">
            Other Hackathons
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularHackathons.map((hackathon) => {
              const countdown = getCountdownDays(hackathon.date);

              return (
                <motion.button
                  key={hackathon.id}
                  onClick={() => onHackathonClick?.(hackathon)}
                  className="group w-full text-left"
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                >
                  <Card variant="interactive" padding="md" className="h-full">
                    {/* Hackathon Image */}
                    <div className="relative w-full h-40 rounded-lg overflow-hidden mb-4 bg-surface-secondary">
                      <img
                        src={hackathon.image}
                        alt={hackathon.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                      {/* Countdown Timer */}
                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-3 py-1.5 rounded-lg">
                        <p className="text-sm font-semibold text-brand-primary">
                          {countdown > 0 ? `${countdown}d` : 'Live!'}
                        </p>
                      </div>
                    </div>

                    {/* Content */}
                    <CardContent className="p-0">
                      <div className="space-y-3">
                        {/* Title */}
                        <h4 className="font-bold text-lg text-text-primary line-clamp-2">
                          {hackathon.name}
                        </h4>

                        {/* Description */}
                        <p className="text-sm text-text-secondary line-clamp-2">
                          {hackathon.description}
                        </p>

                        {/* Date */}
                        <div className="text-sm text-text-secondary">
                          {hackathon.date.toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                          })}{' '}
                          -{' '}
                          {hackathon.endDate.toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                          })}
                        </div>

                        {/* Stats Row */}
                        <div className="flex items-center justify-between text-sm py-2 border-t border-border-primary">
                          <div className="flex items-center gap-4">
                            <span className="text-text-secondary">
                              <span className="font-semibold text-text-primary">
                                {hackathon.teams}
                              </span>{' '}
                              teams
                            </span>
                            <span className="text-text-secondary">
                              <span className="font-semibold text-text-primary">
                                {hackathon.participants}
                              </span>{' '}
                              attend
                            </span>
                          </div>
                        </div>

                        {/* Prize Pool */}
                        <div className="bg-orange-50 px-3 py-2 rounded-lg">
                          <p className="text-xs text-text-secondary">Prize Pool</p>
                          <p className="font-bold text-brand-primary">
                            {hackathon.prizePool}
                          </p>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1">
                          {hackathon.tags.map((tag, idx) => (
                            <Badge
                              key={idx}
                              variant="secondary"
                              size="sm"
                              className="text-xs"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        {/* Register Button */}
                        <Button
                          variant="primary"
                          size="sm"
                          fullWidth
                          className="mt-2"
                        >
                          Learn More
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      )}
    </div>
  );
};

HackathonsSection.displayName = 'HackathonsSection';

export type { HackathonsCarouselProps, Hackathon };
