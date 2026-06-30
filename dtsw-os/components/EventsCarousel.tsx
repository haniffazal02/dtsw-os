/**
 * Events Carousel Component
 * Horizontal scrolling carousel for events
 */

'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, Button, Badge } from '@/components';
import { containerVariants, itemVariants } from '@/lib/animations';
import { cn } from '@/lib/utils';

interface EventItem {
  id: string;
  title: string;
  date: Date;
  time: string;
  location: string;
  category: string;
  registered: number;
  capacity: number;
  image?: string;
  status: 'upcoming' | 'ongoing' | 'completed';
}

interface EventsCarouselProps {
  events: EventItem[];
  title?: string;
  onEventClick?: (event: EventItem) => void;
}

export const EventsCarousel: React.FC<EventsCarouselProps> = ({
  events,
  title = 'Upcoming Events',
  onEventClick,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;

    const scrollAmount = 400;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });

    setTimeout(checkScroll, 500);
  };

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  React.useEffect(() => {
    checkScroll();
    const element = scrollRef.current;
    if (element) {
      element.addEventListener('scroll', checkScroll);
      return () => element.removeEventListener('scroll', checkScroll);
    }
  }, [events]);

  const getCapacityPercentage = (registered: number, capacity: number) => {
    return Math.round((registered / capacity) * 100);
  };

  const categoryColors = {
    Workshop: 'bg-blue-100 text-blue-700',
    Competition: 'bg-red-100 text-red-700',
    Networking: 'bg-purple-100 text-purple-700',
    Hackathon: 'bg-orange-100 text-brand-primary',
    Webinar: 'bg-green-100 text-emerald-700',
    'Talk/Seminar': 'bg-indigo-100 text-indigo-700',
  };

  return (
    <Card variant="default" padding="lg">
      <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <CardTitle>{title}</CardTitle>
        <div className="flex gap-2 mt-4 sm:mt-0">
          <Button
            variant="secondary"
            size="icon-sm"
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className="disabled:opacity-50"
          >
            ←
          </Button>
          <Button
            variant="secondary"
            size="icon-sm"
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className="disabled:opacity-50"
          >
            →
          </Button>
        </div>
      </CardHeader>

      <CardContent>
        <motion.div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth"
          style={{ scrollBehavior: 'smooth' }}
          onScroll={checkScroll}
        >
          {events.map((event) => {
            const capacityPercent = getCapacityPercentage(event.registered, event.capacity);
            const isFull = capacityPercent >= 100;

            return (
              <motion.div
                key={event.id}
                className="flex-shrink-0 w-80 snap-start"
                variants={itemVariants}
              >
                <motion.button
                  onClick={() => onEventClick?.(event)}
                  className="group w-full text-left"
                  whileHover={{ y: -4 }}
                >
                  <Card variant="interactive" padding="md" className="h-full">
                    {/* Event Image */}
                    {event.image && (
                      <div className="relative w-full h-40 rounded-lg overflow-hidden mb-4 bg-surface-secondary">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      </div>
                    )}

                    {/* Event Content */}
                    <CardContent className="p-0">
                      <div className="space-y-3">
                        {/* Title and Category */}
                        <div>
                          <h3 className="font-semibold text-text-primary line-clamp-2">
                            {event.title}
                          </h3>
                          <Badge
                            variant="primary"
                            size="sm"
                            className={cn('mt-2', categoryColors[event.category as keyof typeof categoryColors])}
                          >
                            {event.category}
                          </Badge>
                        </div>

                        {/* Date and Time */}
                        <div className="text-sm text-text-secondary space-y-1">
                          <p className="flex items-center gap-2">
                            📅 {event.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                          </p>
                          <p className="flex items-center gap-2">
                            🕐 {event.time}
                          </p>
                          <p className="flex items-center gap-2">
                            📍 {event.location}
                          </p>
                        </div>

                        {/* Capacity Bar */}
                        <div>
                          <div className="flex justify-between items-center mb-1.5">
                            <span className="text-xs font-medium text-text-secondary">
                              {event.registered}/{event.capacity} registered
                            </span>
                            {isFull && (
                              <Badge variant="danger" size="sm">
                                Full
                              </Badge>
                            )}
                          </div>
                          <div className="w-full h-2 bg-surface-secondary rounded-full overflow-hidden">
                            <motion.div
                              className={cn('h-full', {
                                'bg-emerald-500': capacityPercent < 70,
                                'bg-amber-500': capacityPercent >= 70 && capacityPercent < 90,
                                'bg-red-500': capacityPercent >= 90,
                              })}
                              initial={{ width: 0 }}
                              animate={{ width: `${capacityPercent}%` }}
                              transition={{ duration: 0.5, delay: 0.2 }}
                            />
                          </div>
                        </div>

                        {/* Status */}
                        <div>
                          <Badge
                            variant={
                              event.status === 'upcoming'
                                ? 'primary'
                                : event.status === 'ongoing'
                                  ? 'success'
                                  : 'secondary'
                            }
                            size="sm"
                            className="capitalize"
                          >
                            {event.status}
                          </Badge>
                        </div>

                        {/* Register Button */}
                        <Button
                          variant={isFull ? 'secondary' : 'primary'}
                          size="sm"
                          fullWidth
                          disabled={isFull}
                          className="mt-4"
                        >
                          {isFull ? 'Waitlist' : 'Register'}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.button>
              </motion.div>
            );
          })}
        </motion.div>
      </CardContent>
    </Card>
  );
};

EventsCarousel.displayName = 'EventsCarousel';

export type { EventsCarouselProps, EventItem };
