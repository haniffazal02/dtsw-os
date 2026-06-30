/**
 * Partners Carousel Component
 * Industry partners logo carousel
 */

'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, Button } from '@/components';
import { itemVariants } from '@/lib/animations';
import { cn } from '@/lib/utils';

interface Partner {
  id: string;
  name: string;
  logo: string;
  category: string;
  description: string;
}

interface PartnersCarouselProps {
  partners: Partner[];
  title?: string;
  onPartnerClick?: (partner: Partner) => void;
}

export const PartnersCarousel: React.FC<PartnersCarouselProps> = ({
  partners,
  title = 'Industry Partners',
  onPartnerClick,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [hoveredPartnerId, setHoveredPartnerId] = useState<string | null>(null);

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
  }, [partners]);

  const categoryColors = {
    Technology: 'from-blue-100 to-cyan-100',
    Innovation: 'from-purple-100 to-pink-100',
    'Startup Ecosystem': 'from-orange-100 to-red-100',
    Consulting: 'from-green-100 to-emerald-100',
    'Financial Technology': 'from-yellow-100 to-orange-100',
    Marketing: 'from-indigo-100 to-purple-100',
  };

  return (
    <Card variant="default" padding="lg">
      <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <CardTitle>{title}</CardTitle>
          <p className="text-sm text-text-secondary mt-1">
            Trusted by {partners.length} leading organizations
          </p>
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
          className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory"
          style={{ scrollBehavior: 'smooth' }}
          onScroll={checkScroll}
        >
          {partners.map((partner) => {
            const gradientClass = categoryColors[partner.category as keyof typeof categoryColors] || 'from-gray-100 to-gray-200';
            const isHovered = hoveredPartnerId === partner.id;

            return (
              <motion.button
                key={partner.id}
                onClick={() => onPartnerClick?.(partner)}
                className="flex-shrink-0 w-64 snap-start"
                variants={itemVariants}
                onMouseEnter={() => setHoveredPartnerId(partner.id)}
                onMouseLeave={() => setHoveredPartnerId(null)}
                whileHover={{ y: -8 }}
              >
                <Card variant="interactive" padding="lg" className="h-full">
                  <CardContent className="p-0">
                    <div className="space-y-4">
                      {/* Logo Container */}
                      <motion.div
                        className={cn(
                          'w-full h-40 rounded-lg flex items-center justify-center bg-gradient-to-br transition-all duration-300',
                          gradientClass,
                          isHovered ? 'scale-105' : 'scale-100'
                        )}
                      >
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="h-24 w-24 object-contain"
                        />
                      </motion.div>

                      {/* Partner Info */}
                      <div className="space-y-2">
                        <h3 className="font-bold text-lg text-text-primary line-clamp-2">
                          {partner.name}
                        </h3>

                        {/* Category Tag */}
                        <div className="inline-block">
                          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-secondary text-text-secondary text-xs font-medium">
                            {partner.category}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="text-sm text-text-secondary line-clamp-2">
                          {partner.description}
                        </p>
                      </div>

                      {/* Learn More Button */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Button
                          variant="ghost"
                          size="sm"
                          fullWidth
                          className="text-xs"
                        >
                          Learn More →
                        </Button>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Partnership Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-8 p-6 bg-orange-50 rounded-lg border border-orange-200"
        >
          <h4 className="font-semibold text-text-primary mb-2">Become a Partner</h4>
          <p className="text-sm text-text-secondary mb-4">
            Join our network of innovative organizations and contribute to the future of student innovation.
          </p>
          <Button variant="primary" size="sm">
            Partnership Opportunities
          </Button>
        </motion.div>
      </CardContent>
    </Card>
  );
};

PartnersCarousel.displayName = 'PartnersCarousel';

export type { PartnersCarouselProps, Partner };
