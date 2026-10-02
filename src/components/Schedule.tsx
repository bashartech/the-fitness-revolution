import React, { useState } from 'react';
import { Clock, AlertCircle, Phone, CalendarCheck } from 'lucide-react';
import { gymData } from '../lib/gymData';

export const Schedule: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<string>('Monday');

  return (
    <section id="schedule" className="py-20 lg:py-28 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#FFC400]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#FFC400] font-bold">
                TIMINGS & SLOTS
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-none">
              GYM <span className="text-[#C7FF00]">HOURS.</span>
            </h2>
          </div>

          <div className="max-w-md p-4 rounded-xl bg-[#111111] border border-white/10 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-[#FFC400] shrink-0 mt-0.5" />
            <div className="text-xs text-neutral-300">
              <span className="font-bold text-white block mb-0.5">Please Note:</span>
              {gymData.hoursNotice}
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-8 text-xs font-semibold">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#FFC400]" />
            <span className="text-neutral-300">Morning Session (6 AM - 11 AM)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#00AEEF]" />
            <span className="text-neutral-300">Ladies Dedicated Hours (11 AM - 4 PM)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#C7FF00]" />
            <span className="text-neutral-300">Evening / Late Night (5 PM - 2 AM)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-neutral-600" />
            <span className="text-neutral-400">Sunday Closed</span>
          </div>
        </div>

        {/* Desktop Table View (Hidden on mobile) */}
        <div className="hidden lg:block overflow-hidden rounded-2xl border border-white/10 bg-[#0B0B0B] shadow-xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 bg-[#111111] text-xs font-bold uppercase tracking-wider text-neutral-400">
                <th className="py-4 px-6">Day</th>
                <th className="py-4 px-6 text-[#FFC400]">Morning Open Floor</th>
                <th className="py-4 px-6 text-[#00AEEF]">Ladies Dedicated Slot</th>
                <th className="py-4 px-6 text-[#C7FF00]">Evening & Late Night</th>
                <th className="py-4 px-6 text-right">Floor Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-sm">
              {gymData.weeklySchedule.map((row) => {
                const isClosed = row.status === 'Closed';
                return (
                  <tr
                    key={row.day}
                    className={`transition-colors ${
                      isClosed ? 'bg-black/40 text-neutral-500' : 'hover:bg-white/[0.02]'
                    }`}
                  >
                    <td className="py-4 px-6 font-bold text-white flex items-center gap-2">
                      <CalendarCheck className={`w-4 h-4 ${isClosed ? 'text-neutral-600' : 'text-[#FFC400]'}`} />
                      <span>{row.day}</span>
                    </td>
                    <td className="py-4 px-6 font-medium">
                      {row.morning}
                    </td>
                    <td className="py-4 px-6 font-medium">
                      {row.ladies}
                    </td>
                    <td className="py-4 px-6 font-medium">
                      {row.evening}
                    </td>
                    <td className="py-4 px-6 text-right">
                      <span
                        className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                          isClosed
                            ? 'bg-neutral-800 text-neutral-400'
                            : 'bg-[#C7FF00]/10 text-[#C7FF00] border border-[#C7FF00]/30'
                        }`}
                      >
                        {row.status}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Mobile / Tablet Day Selector & Cards View */}
        <div className="block lg:hidden space-y-4">
          {/* Day selection buttons */}
          <div className="flex gap-1.5 overflow-x-auto pb-2 scrollbar-none">
            {gymData.weeklySchedule.map((item) => (
              <button
                key={item.day}
                onClick={() => setSelectedDay(item.day)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider shrink-0 transition-colors cursor-pointer ${
                  selectedDay === item.day
                    ? 'bg-[#C7FF00] text-black'
                    : 'bg-[#141414] text-neutral-400 hover:text-white border border-white/5'
                }`}
              >
                {item.shortDay}
              </button>
            ))}
          </div>

          {/* Selected day details card */}
          {(() => {
            const current = gymData.weeklySchedule.find((d) => d.day === selectedDay) || gymData.weeklySchedule[0];
            const isClosed = current.status === 'Closed';

            return (
              <div className="p-6 rounded-2xl bg-[#0F0F0F] border border-white/10 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-2xl font-bold text-white uppercase">
                    {current.day} Timetable
                  </h3>
                  <span
                    className={`text-xs font-bold uppercase px-3 py-1 rounded-full ${
                      isClosed
                        ? 'bg-neutral-800 text-neutral-400'
                        : 'bg-[#C7FF00]/10 text-[#C7FF00] border border-[#C7FF00]/30'
                    }`}
                  >
                    {current.status}
                  </span>
                </div>

                {!isClosed ? (
                  <div className="space-y-3 pt-2">
                    <div className="p-3.5 rounded-xl bg-black/60 border border-[#FFC400]/20 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <Clock className="w-4 h-4 text-[#FFC400]" />
                        <span className="text-xs font-bold text-neutral-300">Morning Session</span>
                      </div>
                      <span className="text-xs font-mono text-white">{current.morning}</span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-black/60 border border-[#00AEEF]/20 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <Clock className="w-4 h-4 text-[#00AEEF]" />
                        <span className="text-xs font-bold text-[#00AEEF]">Ladies Dedicated</span>
                      </div>
                      <span className="text-xs font-mono text-white">{current.ladies}</span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-black/60 border border-[#C7FF00]/20 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <Clock className="w-4 h-4 text-[#C7FF00]" />
                        <span className="text-xs font-bold text-neutral-300">Evening & Night</span>
                      </div>
                      <span className="text-xs font-mono text-white">{current.evening}</span>
                    </div>
                  </div>
                ) : (
                  <div className="py-6 text-center text-xs text-neutral-400">
                    Sunday is designated for deep facility maintenance and recovery.
                  </div>
                )}

                <div className="pt-2">
                  <a
                    href={`tel:${gymData.contact.phoneRaw}`}
                    className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#FFC400]" />
                    <span>Call To Confirm Today's Session: {gymData.contact.phone}</span>
                  </a>
                </div>
              </div>
            );
          })()}
        </div>

      </div>
    </section>
  );
};
