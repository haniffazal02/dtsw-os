/**
 * Calendar Widget
 * Monthly calendar view with event indicators
 */

'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, Button, Badge } from '@/components';
import { itemVariants } from '@/lib/animations';
import { cn } from '@/lib/utils';

interface CalendarEvent {
  date: Date;
  title: string;
  type: 'workshop' | 'competition' | 'networking' | 'hackathon' | 'meeting';
}

interface CalendarWidgetProps {
  events: CalendarEvent[];
  onDateSelect?: (date: Date) => void;
  defaultMonth?: Date;
}

const eventTypeColors = {
  workshop: 'bg-blue-100 text-blue-700',
  competition: 'bg-red-100 text-red-700',
  networking: 'bg-purple-100 text-purple-700',
  hackathon: 'bg-orange-100 text-brand-primary',
  meeting: 'bg-green-100 text-emerald-700',
};

const eventTypeDots = {
  workshop: 'bg-blue-500',
  competition: 'bg-red-500',
  networking: 'bg-purple-500',
  hackathon: 'bg-brand-primary',
  meeting: 'bg-emerald-500',
};

export const CalendarWidget: React.FC<CalendarWidgetProps> = ({
  events,
  onDateSelect,
  defaultMonth = new Date(),
}) => {
  const [currentMonth, setCurrentMonth] = useState(defaultMonth);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const getDaysInMonth = (date: Date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const getFirstDayOfMonth = (date: Date) => new Date(date.getFullYear(), date.getMonth(), 1).getDay();

  const currentYear = currentMonth.getFullYear();
  const currentMonthIndex = currentMonth.getMonth();
  const monthName = new Date(currentYear, currentMonthIndex).toLocaleDateString('en-US', { month: 'long' });

  const daysInMonth = getDaysInMonth(currentMonth);
  const firstDay = getFirstDayOfMonth(currentMonth);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const getEventsForDate = (day: number) => {
    return events.filter(
      (e) =>
        e.date.getDate() === day &&
        e.date.getMonth() === currentMonthIndex &&
        e.date.getFullYear() === currentYear
    );
  };

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentYear, currentMonthIndex - 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentYear, currentMonthIndex + 1));
  };

  const handleDateSelect = (day: number) => {
    const date = new Date(currentYear, currentMonthIndex, day);
    setSelectedDate(date);
    onDateSelect?.(date);
  };

  const selectedDateEvents = selectedDate && getEventsForDate(selectedDate.getDate());

  return (
    <motion.div variants={itemVariants}>
      <Card variant="default" padding="lg">
        <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <CardTitle>{monthName} {currentYear}</CardTitle>
          <div className="flex gap-2 mt-4 sm:mt-0">
            <Button variant="secondary" size="sm" onClick={handlePrevMonth}>
              ← Previous
            </Button>
            <Button variant="secondary" size="sm" onClick={handleNextMonth}>
              Next →
            </Button>
          </div>
        </CardHeader>

        <CardContent>
          <div className="grid grid-cols-7 gap-2 mb-4">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <div key={day} className="text-center font-semibold text-text-secondary text-sm p-2">
                {day}
              </div>
            ))}

            {/* Empty cells for days before month starts */}
            {Array.from({ length: firstDay }).map((_, i) => (
              <div key={`empty-${i}`} className="p-2" />
            ))}

            {/* Calendar days */}
            {days.map((day) => {
              const dayEvents = getEventsForDate(day);
              const isSelected = selectedDate && selectedDate.getDate() === day && selectedDate.getMonth() === currentMonthIndex;
              const isToday =
                day === new Date().getDate() &&
                currentMonthIndex === new Date().getMonth() &&
                currentYear === new Date().getFullYear();

              return (
                <motion.button
                  key={day}
                  onClick={() => handleDateSelect(day)}
                  className={cn(
                    'p-2 rounded-lg border transition-all relative text-sm',
                    isSelected
                      ? 'bg-brand-primary text-white border-brand-primary'
                      : isToday
                        ? 'bg-orange-50 border-brand-primary text-text-primary font-semibold'
                        : dayEvents.length > 0
                          ? 'bg-surface-secondary border-border-primary text-text-primary'
                          : 'border-border-primary text-text-primary hover:border-brand-primary'
                  )}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {day}
                  {dayEvents.length > 0 && (
                    <div className="flex gap-0.5 mt-1 justify-center flex-wrap">
                      {dayEvents.slice(0, 2).map((event, idx) => (
                        <div
                          key={idx}
                          className={cn('w-1.5 h-1.5 rounded-full', eventTypeDots[event.type])}
                        />
                      ))}
                      {dayEvents.length > 2 && (
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                      )}
                    </div>
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Selected date events */}
          {selectedDate && selectedDateEvents && selectedDateEvents.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 pt-6 border-t border-border-primary"
            >
              <h4 className="font-semibold text-text-primary mb-3">
                Events on {selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
              </h4>
              <div className="space-y-2">
                {selectedDateEvents.map((event, idx) => (
                  <motion.div
                    key={idx}
                    className={cn('p-3 rounded-lg', eventTypeColors[event.type])}
                    variants={itemVariants}
                  >
                    <p className="font-medium text-sm">{event.title}</p>
                    <Badge variant="secondary" size="sm" className="mt-2 capitalize">
                      {event.type}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {selectedDate && (!selectedDateEvents || selectedDateEvents.length === 0) && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 pt-6 border-t border-border-primary text-center text-text-secondary"
            >
              <p>No events on {selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}</p>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

CalendarWidget.displayName = 'CalendarWidget';

export type { CalendarWidgetProps, CalendarEvent };
