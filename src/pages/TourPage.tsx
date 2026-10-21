import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  CheckCircle2,
  Users,
  MapPin,
  Sparkles,
  Phone,
  ShieldCheck,
  CalendarCheck,
} from 'lucide-react';
import { AdPlaceholder } from '../components/AdPlaceholder';
import { useApp } from '../context/AppContext';
import { SCHOOL_INFO, PROGRAMS } from '../data/schoolData';

export const TourPage: React.FC = () => {
  const { tours, bookTour, showToast } = useApp();

  const [formData, setFormData] = useState({
    parentName: '',
    parentPhone: '',
    parentEmail: '',
    preferredDate: '',
    preferredTime: '10:00 AM (Morning Circle)',
    childAge: '2.5 Years (Nursery)',
    numAttendees: 2,
    notes: '',
  });

  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.parentName.trim()) {
      showToast('Please enter your name', 'error');
      return;
    }
    if (!formData.parentPhone.trim() || formData.parentPhone.length < 10) {
      showToast('Please provide a valid 10-digit mobile number', 'error');
      return;
    }
    if (!formData.preferredDate) {
      showToast('Please select your preferred visit date', 'error');
      return;
    }

    const newTour = bookTour({
      parentName: formData.parentName,
      parentPhone: formData.parentPhone,
      parentEmail: formData.parentEmail || 'visitor@example.com',
      preferredDate: formData.preferredDate,
      preferredTime: formData.preferredTime,
      childAge: formData.childAge,
      numAttendees: Number(formData.numAttendees),
      notes: formData.notes,
    });

    setSubmittedRef(newTour.bookingRef);
    setFormData({
      parentName: '',
      parentPhone: '',
      parentEmail: '',
      preferredDate: '',
      preferredTime: '10:00 AM (Morning Circle)',
      childAge: '2.5 Years (Nursery)',
      numAttendees: 2,
      notes: '',
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Banner */}
      <section className="bg-gradient-to-b from-amber-50/70 via-white to-slate-50 pt-12 pb-16 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold">
            <Sparkles className="h-3.5 w-3.5 text-amber-700" />
            <span>Personalized 45-Minute Guided Campus Walkthrough</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Schedule a Campus Tour
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            There is no better way to understand MountainHeights than observing our cheerful classrooms in action. Choose a date below to visit with your little one.
          </p>
        </div>
      </section>

      {/* Main Tour Booking Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Form Column */}
            <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  Select Your Preferred Date &amp; Time
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Visits are scheduled Monday through Saturday between 9:00 AM and 4:30 PM.
                </p>
              </div>

              {submittedRef && (
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs sm:text-sm space-y-2">
                  <div className="font-bold flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    <span>Campus Visit Confirmed! Reference #{submittedRef}</span>
                  </div>
                  <p>
                    We look forward to meeting you and your child. Our admissions counselor will send a confirmation SMS with gate parking details.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Parent / Guardian Name *
                    </label>
                    <input
                      type="text"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g. Vikram Mehra"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      name="parentPhone"
                      value={formData.parentPhone}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g. +91 98123 45678"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="parentEmail"
                      value={formData.parentEmail}
                      onChange={handleInputChange}
                      placeholder="e.g. vikram@example.com"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Child&rsquo;s Current Age / Grade
                    </label>
                    <select
                      name="childAge"
                      value={formData.childAge}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm bg-white focus:outline-hidden focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                    >
                      <option value="6-18 Months (Mother-Toddler)">6-18 Months (Mother-Toddler)</option>
                      <option value="1.5-2.5 Years (Playgroup)">1.5-2.5 Years (Playgroup)</option>
                      <option value="2.5-3.5 Years (Nursery)">2.5-3.5 Years (Nursery)</option>
                      <option value="3.5-5.5 Years (Kindergarten)">3.5-5.5 Years (Kindergarten)</option>
                      <option value="Daycare Only">Daycare Only</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Time Slot *
                    </label>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm bg-white focus:outline-hidden focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                    >
                      <option value="9:30 AM (Morning Circle & Assembly)">9:30 AM (Morning Circle &amp; Assembly)</option>
                      <option value="11:00 AM (Classroom & Splash Pool)">11:00 AM (Classroom &amp; Splash Pool)</option>
                      <option value="01:30 PM (Dining & Daycare Tour)">01:30 PM (Dining &amp; Daycare Tour)</option>
                      <option value="04:00 PM (After-School Clubs)">04:00 PM (After-School Clubs)</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Number of Attendees
                    </label>
                    <select
                      name="numAttendees"
                      value={formData.numAttendees}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm bg-white"
                    >
                      <option value={1}>1 Adult + Child</option>
                      <option value={2}>2 Adults (Both Parents) + Child</option>
                      <option value={3}>3 Adults (Parents &amp; Grandparent) + Child</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Specific Areas of Interest (Optional)
                    </label>
                    <textarea
                      name="notes"
                      rows={2}
                      value={formData.notes}
                      onChange={handleInputChange}
                      placeholder="e.g. We would love to see the splash pool, talk to the daycare supervisor, and review transport routes to Pitampura..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-amber-600 transition-colors shadow-md"
                  >
                    Confirm Campus Walkthrough
                  </button>
                  <p className="mt-2 text-xs text-slate-400">
                    Your appointment is persisted locally. You will receive an immediate reservation pass.
                  </p>
                </div>
              </form>
            </div>

            {/* Sidebar: What to Expect & Booked Tours */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-3">
                  What to Expect on Your Visit
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Meet the Principal:</strong> One-on-one discussion on developmental milestones and curriculum.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Live Class Observation:</strong> See how teachers interact warmly and patiently with little ones.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Hygiene &amp; Safety Audit:</strong> Inspect the RO kitchen, splash pool chlorination, and CCTV console.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Complimentary Welcome Activity Kit:</strong> Your toddler takes home an engaging sensory puzzle!</span>
                  </li>
                </ul>
              </div>

              {/* Booked Tours Saved in LocalStorage */}
              {tours.length > 0 && (
                <div className="p-6 bg-amber-50/60 rounded-2xl border border-amber-200/80 space-y-3">
                  <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
                    <CalendarCheck className="h-4 w-4 text-amber-700" />
                    <span>Your Scheduled Visits ({tours.length})</span>
                  </div>
                  <div className="space-y-2">
                    {tours.map((t) => (
                      <div
                        key={t.id}
                        className="p-3 bg-white rounded-xl border border-amber-100 text-xs text-slate-700 space-y-1"
                      >
                        <div className="flex justify-between items-center font-bold text-slate-900">
                          <span>Ref: {t.bookingRef}</span>
                          <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                            {t.status}
                          </span>
                        </div>
                        <div>Date: <strong>{t.preferredDate}</strong> at {t.preferredTime}</div>
                        <div>Parent: {t.parentName} ({t.childAge})</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Campus Address Card */}
              <div className="p-6 bg-slate-900 text-white rounded-2xl shadow-md space-y-3">
                <div className="flex items-center gap-2 text-amber-300 font-bold text-sm">
                  <MapPin className="h-4 w-4 text-amber-400" />
                  <span>Campus Location &amp; Directions</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {SCHOOL_INFO.address}
                </p>
                <div className="text-xs text-slate-400 space-y-1 pt-2 border-t border-slate-800">
                  <div><strong>Metro:</strong> Shalimar Bagh Metro (Pink Line) - 5 mins away</div>
                  <div><strong>Landmark:</strong> Near BQ Community Center</div>
                  <div><strong>Parking:</strong> Reserved visitor parking inside Gate 2</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compact Ad Section */}
      <AdPlaceholder
        title="Little Pediatric Dental &amp; Eye Wellness Checkups"
        subtitle="Exclusive preventative health screenings scheduled for visiting families at MountainHeights."
        category="Pediatric Healthcare Partner"
      />
    </div>
  );
};
