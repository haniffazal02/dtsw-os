/**
 * Clubs Carousel Component
 * Showcase clubs with member count and details
 */

'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, Button, Badge } from '@/components';
import { containerVariants, itemVariants } from '@/lib/animations';
import { cn } from '@/lib/utils';

interface Club {
  id: string;
  name: string;
  pillar: 'CLT' | 'SCD' | 'IIPC' | 'DTSW Talks';
  members: number;
  image: string;
  description: string;
  color: string;
  tags: string[];
}

interface ClubsCarouselProps {
  clubs: Club[];
  title?: string;
  onClubClick?: (club: Club) => void;
}

const pillarColors = {
  CLT: { bg: 'bg-orange-500', text: 'text-orange-600', badge: 'bg-orange-100 text-orange-700' },
  SCD: { bg: 'bg-blue-500', text: 'text-blue-600', badge: 'bg-blue-100 text-blue-700' },
  IIPC: { bg: 'bg-green-500', text: 'text-green-600', badge: 'bg-green-100 text-green-700' },
  'DTSW Talks': { bg: 'bg-purple-500', text: 'text-purple-600', badge: 'bg-purple-100 text-purple-700' },
};

export const ClubsCarousel: React.FC<ClubsCarouselProps> = ({
  clubs,
  title = 'Featured Clubs',
  onClubClick,
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
  }, [clubs]);

  return (
    <Card variant="default" padding="lg">
      <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <CardTitle>{title}</CardTitle>
          <p className="text-sm text-text-secondary mt-1">{clubs.length} clubs available</p>
        </div>
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
          className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory"
          style={{ scrollBehavior: 'smooth' }}
          onScroll={checkScroll}
        >
          {clubs.map((club) => {
            const pillarInfo = pillarColors[club.pillar];

            return (
              <motion.div
                key={club.id}
                className="flex-shrink-0 w-72 snap-start"
                variants={itemVariants}
              >
                <motion.button
                  onClick={() => onClubClick?.(club)}
                  className="group w-full text-left"
                  whileHover={{ y: -4 }}
                >
                  <Card variant="interactive" padding="md" className="h-full">
                    {/* Club Image with Overlay */}
                    <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4 bg-surface-secondary">
                      <img
                        src={club.image}
                        alt={club.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                      {/* Pillar Badge */}
                      <div className="absolute top-3 right-3">
                        <Badge
                          variant="primary"
                          size="sm"
                          className={cn('font-semibold', pillarInfo.badge)}
                        >
                          {club.pillar}
                        </Badge>
                      </div>

                      {/* Members Count */}
                      <div className="absolute bottom-3 left-3 flex items-center gap-1 text-white">
                        <span className="text-lg">👥</span>
                        <span className="font-semibold">{club.members}</span>
                        <span className="text-sm opacity-90">members</span>
                      </div>
                    </div>

                    {/* Club Content */}
                    <CardContent className="p-0">
                      <div className="space-y-3">
                        {/* Title */}
                        <h3 className="font-bold text-lg text-text-primary line-clamp-2">
                          {club.name}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-text-secondary line-clamp-2">
                          {club.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {club.tags.slice(0, 2).map((tag, idx) => (
                            <Badge
                              key={idx}
                              variant="secondary"
                              size="sm"
                              className="text-xs"
                            >
                              {tag}
                            </Badge>
                          ))}
                          {club.tags.length > 2 && (
                            <Badge variant="secondary" size="sm" className="text-xs">
                              +{club.tags.length - 2}
                            </Badge>
                          )}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-2 pt-2">
                          <Button
                            variant="primary"
                            size="sm"
                            fullWidth
                            className="text-xs"
                          >
                            Join Club
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-xs"
                          >
                            ℹ️
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.button>
              </motion.div>
            );
          })}
        </motion.div>

        {/* View All Link */}
        <div className="mt-4 flex justify-center">
          <Button variant="ghost" className="text-sm">
            Explore All Clubs →
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

ClubsCarousel.displayName = 'ClubsCarousel';

export type { ClubsCarouselProps, Club };
