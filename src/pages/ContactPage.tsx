import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Sparkles,
  Navigation,
  Train,
  Car,
  MessageSquare,
} from 'lucide-react';
import { AdPlaceholder } from '../components/AdPlaceholder';
import { useApp } from '../context/AppContext';
import { SCHOOL_INFO } from '../data/schoolData';

export const ContactPage: React.FC = () => {
  const { submitInquiry, showToast } = useApp();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Admissions 2026-27 Inquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      showToast('Please enter your full name', 'error');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      showToast('Please provide a valid 10-digit mobile number', 'error');
      return;
    }

    submitInquiry({
      name: formData.name,
      email: formData.email || 'parent@example.com',
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message || 'General enquiry about early years programs.',
    });

    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: 'Admissions 2026-27 Inquiry',
      message: '',
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Banner */}
      <section className="bg-gradient-to-b from-amber-50/70 via-white to-slate-50 pt-12 pb-16 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold">
            <Sparkles className="h-3.5 w-3.5 text-amber-700" />
            <span>We Are Always Ready to Welcome You</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Contact &amp; Admissions Helpdesk
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Have questions about age cut-offs, fee schedules, or our child-centered approach? Drop us a line or visit our campus.
          </p>
        </div>
      </section>

      {/* Main Grid: Info + Form */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Contact Details Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs space-y-6">
                <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
                  Campus Coordinates
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3 text-sm">
                    <div className="h-9 w-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Campus Address</div>
                      <div className="text-slate-600 text-xs sm:text-sm mt-0.5">
                        {SCHOOL_INFO.address}
                      </div>
                      <div className="text-[11px] text-amber-800 font-semibold mt-1">
                        Landmark: Near BQ Community Center
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-sm">
                    <div className="h-9 w-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                      <Phone className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Telephone Lines</div>
                      <div className="text-slate-600 text-xs sm:text-sm mt-0.5 space-y-1">
                        {SCHOOL_INFO.phones.map((p, idx) => (
                          <div key={idx}>
                            <a href={`tel:${p.replace(/\s+/g, '')}`} className="hover:text-amber-800 font-mono">
                              {p}
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-sm">
                    <div className="h-9 w-9 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center shrink-0">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Email Desks</div>
                      <div className="text-slate-600 text-xs sm:text-sm mt-0.5 space-y-1">
                        <div>
                          <a href={`mailto:${SCHOOL_INFO.admissionsEmail}`} className="hover:text-amber-800">
                            {SCHOOL_INFO.admissionsEmail}
                          </a>
                        </div>
                        <div>
                          <a href={`mailto:${SCHOOL_INFO.email}`} className="hover:text-amber-800">
                            {SCHOOL_INFO.email}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-sm">
                    <div className="h-9 w-9 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center shrink-0">
                      <Clock className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Visiting Hours</div>
                      <div className="text-slate-600 text-xs sm:text-sm mt-0.5">
                        {SCHOOL_INFO.officeHours}
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5">
                        Sunday &amp; Gazetted Holidays: Closed
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Transit & Commute Guide */}
              <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-md space-y-3">
                <div className="flex items-center gap-2 text-amber-300 font-bold text-sm">
                  <Navigation className="h-4 w-4" />
                  <span>How to Reach Us</span>
                </div>
                <div className="space-y-2 text-xs text-slate-300">
                  <div className="flex items-start gap-2">
                    <Train className="h-4 w-4 text-sky-400 shrink-0 mt-0.5" />
                    <span><strong>Delhi Metro:</strong> Shalimar Bagh Metro Station (Pink Line) - approximately 800m. Netaji Subhash Place (Red/Pink Interchange) is 7 mins away.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Car className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Private Vehicle &amp; Cabs:</strong> Easy approach via Ring Road and Outer Ring Road. Dedicated visitor drop-off bay at Main Gate.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Inquiry Form Column */}
            <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Send a Direct Message to Admissions
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  We reply within 24 hours on working days.
                </p>
              </div>

              {submitted && (
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs sm:text-sm space-y-1">
                  <div className="font-bold flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    <span>Thank You! Inquiry Dispatched to Our Desk.</span>
                  </div>
                  <p>
                    Our administrative team has logged your query and will contact you via phone or email promptly.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g. Pooja Malhotra"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g. +91 98111 22334"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. pooja@example.com"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm bg-white"
                    >
                      <option value="Admissions 2026-27 Inquiry">Admissions 2026-27 Inquiry</option>
                      <option value="Daycare & Extended Care Timings">Daycare &amp; Extended Care Timings</option>
                      <option value="School Bus Transport Coverage">School Bus Transport Coverage</option>
                      <option value="Pedagogical & Syllabus Consultation">Pedagogical &amp; Syllabus Consultation</option>
                      <option value="Career Opportunities / Teaching Faculty">Career Opportunities / Teaching Faculty</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Your Message or Question
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Please share any specific requirements such as your child's age, dietary needs, or preferred batch timing..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-amber-600 transition-colors shadow-md"
                  >
                    <Send className="h-4 w-4" />
                    <span>Send Message</span>
                  </button>
                  <p className="mt-2 text-xs text-slate-400">
                    Client-side persistence: Recorded safely in your browser storage.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Styled Interactive Campus Map Representation */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto mb-8 space-y-1">
            <h3 className="text-lg font-bold text-slate-900">
              Interactive Campus Neighborhood Map
            </h3>
            <p className="text-xs text-slate-500">
              Located in the peaceful, green residential sector of BQ-Block, Shalimar Bagh.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 p-8 text-center shadow-xs">
            <div className="max-w-md mx-auto space-y-4">
              <div className="h-16 w-16 rounded-full bg-amber-500/20 text-amber-700 flex items-center justify-center mx-auto border border-amber-300">
                <MapPin className="h-8 w-8 text-amber-600" />
              </div>
              <div>
                <h4 className="text-base font-extrabold text-slate-900">
                  MountainHeights Early Learning Academy
                </h4>
                <p className="text-xs text-slate-600 mt-1">
                  BQ-Block, NS-9 Shalimar Campus, North Delhi – 110088
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(
                    'Phulwari Heights School BQ Block Shalimar Bagh Delhi'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors"
                >
                  <Navigation className="h-3.5 w-3.5" />
                  <span>Open in Google Maps</span>
                </a>
                <a
                  href="tel:+919250057531"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-50 transition-colors"
                >
                  <Phone className="h-3.5 w-3.5 text-slate-500" />
                  <span>Call Gate Reception</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compact Ad Section */}
      <AdPlaceholder
        title="Little Stars Uniform &amp; Orthopedic Footwear Fitting"
        subtitle="Schedule an at-home fitting for approved MountainHeights non-skid school footwear."
        category="Student Apparel Partner"
      />
    </div>
  );
};
