'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PublicLayout } from '@/components/PublicLayout';
import { Button } from '@/components/Button';
import { Card, CardContent } from '@/components/Card';
import { Badge } from '@/components/Badge';
import { StatsCard, StatsGrid } from '@/components/StatsCard';
import { ClubsCarousel } from '@/components/ClubsCarousel';
import { EventsCarousel } from '@/components/EventsCarousel';
import { HackathonsSection } from '@/components/HackathonsSection';
import { PartnersCarousel } from '@/components/PartnersCarousel';
import {
  containerVariants,
  itemVariants,
  slideInLeftVariants,
  slideInRightVariants,
  fadeInVariants,
  cardVariants,
} from '@/lib/animations';
import {
  mockClubs,
  mockEvents,
  mockHackathons,
  mockPartners,
  mockDashboardStats,
} from '@/lib/mockData';

export default function Home() {
  const pillarCards = [
    {
      icon: '🎓',
      title: 'Clubs (CLT)',
      description:
        'Join AI & Innovation, Startup & Entrepreneurship, and Ambassador clubs to grow your network.',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: '🔬',
      title: 'Research Cell (SCD)',
      description:
        'Conduct cutting-edge student-led research and explore emerging technologies.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: '🏢',
      title: 'Industry Lab (IIPC)',
      description:
        'Connect with industry partners for real-world projects and internship opportunities.',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: '🎤',
      title: 'DTSW Talks',
      description:
        'Learn from industry experts and thought leaders through engaging founder sessions.',
      color: 'from-purple-500 to-purple-600',
    },
  ];

  return (
    <PublicLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 lg:px-8 py-12 lg:py-20 flex flex-col items-center text-center">
          <motion.div
            className="space-y-6 max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="flex justify-center">
              <Badge variant="primary" className="text-sm">
                ✨ Welcome to DTSW Innovation OS
              </Badge>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl lg:text-7xl font-black tracking-tight text-text-primary leading-tight"
            >
              Student Innovation
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Ecosystem
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="text-xl lg:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed"
            >
              Connect learning, innovation, industry exposure, and real-world execution into one unified platform. Build the future with us.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            >
              <Button
                size="lg"
                variant="primary"
                onClick={() => (window.location.href = '/signup')}
                className="w-full sm:w-auto"
              >
                Join Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => (window.location.href = '/about')}
                className="w-full sm:w-auto"
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>

          {/* Hero Illustration */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInRightVariants}
            className="mt-12 w-full max-w-3xl"
          >
            <Card variant="elevated" className="aspect-video">
              <CardContent className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🚀</div>
                  <p className="text-lg font-semibold text-text-primary mb-2">
                    Innovation Platform
                  </p>
                  <p className="text-sm text-text-secondary">
                    Showcase of student achievements and innovations
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Four Pillars Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl lg:text-5xl font-bold text-text-primary mb-4"
            >
              Four Pillars of Innovation
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-text-secondary max-w-2xl mx-auto"
            >
              DTSW connects students across multiple dimensions of growth and development.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
          >
            {pillarCards.map((pillar, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <Card variant="interactive" padding="lg" className="h-full">
                  <CardContent className="flex flex-col items-center text-center">
                    <div className="text-5xl mb-4">{pillar.icon}</div>
                    <h3 className="text-xl font-bold text-text-primary mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {pillar.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl lg:text-5xl font-bold text-text-primary mb-4"
            >
              By The Numbers
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-text-secondary"
            >
              Impact and growth at a glance
            </motion.p>
          </motion.div>

          <StatsGrid
            stats={[
              {
                title: 'Active Clubs',
                value: mockDashboardStats.activeClubs,
                color: 'orange',
                icon: '🎓',
              },
              {
                title: 'Student Members',
                value: '500+',
                color: 'blue',
                icon: '👥',
              },
              {
                title: 'Upcoming Events',
                value: mockDashboardStats.upcomingEvents,
                color: 'green',
                icon: '📅',
              },
              {
                title: 'Hackathons',
                value: mockDashboardStats.hackathonsRegistered,
                color: 'purple',
                icon: '🏆',
              },
            ]}
            columns={4}
          />
        </div>
      </section>

      {/* Featured Clubs Section */}
      <section className="py-16 lg:py-20 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            className="mb-8"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl lg:text-5xl font-bold text-text-primary mb-2"
            >
              Featured Clubs
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-text-secondary"
            >
              Join communities driving innovation across different domains
            </motion.p>
          </motion.div>

          <ClubsCarousel clubs={mockClubs.slice(0, 6)} />
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            className="mb-8"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl lg:text-5xl font-bold text-text-primary mb-2"
            >
              Upcoming Events
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-text-secondary"
            >
              Discover workshops, competitions, and networking opportunities
            </motion.p>
          </motion.div>

          <EventsCarousel events={mockEvents.slice(0, 4)} />
        </div>
      </section>

      {/* Hackathons Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            className="mb-8"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl lg:text-5xl font-bold text-text-primary mb-2"
            >
              Hackathons & Competitions
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-text-secondary"
            >
              Showcase your skills and win amazing prizes
            </motion.p>
          </motion.div>

          <HackathonsSection hackathons={mockHackathons} />
        </div>
      </section>

      {/* Industry Partners Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            className="mb-8"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl lg:text-5xl font-bold text-text-primary mb-2"
            >
              Industry Partners
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-text-secondary"
            >
              Partnering with leading organizations in tech and innovation
            </motion.p>
          </motion.div>

          <PartnersCarousel partners={mockPartners} />
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-orange-500 via-orange-400 to-orange-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.h2
              variants={itemVariants}
              className="text-5xl lg:text-6xl font-black text-white leading-tight"
            >
              Ready to Join the Innovation?
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-xl text-orange-50 max-w-2xl mx-auto"
            >
              Take the first step towards becoming a member of DTSW's vibrant ecosystem of innovators, builders, and leaders.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            >
              <Button
                size="lg"
                variant="secondary"
                onClick={() => (window.location.href = '/signup')}
                className="w-full sm:w-auto bg-white text-orange-600 hover:bg-gray-100"
              >
                Get Started Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => (window.location.href = '/contact')}
                className="w-full sm:w-auto border-2 border-white text-white hover:bg-white/10"
              >
                Contact Us
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PublicLayout>
  );
}
