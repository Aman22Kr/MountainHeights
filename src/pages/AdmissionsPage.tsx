import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
  FileText,
  CheckCircle2,
  Calendar,
  Phone,
  Calculator,
  User,
  Sparkles,
  Printer,
  ShieldCheck,
  ArrowRight,
  ClipboardCheck,
} from 'lucide-react';
import { AdPlaceholder } from '../components/AdPlaceholder';
import { useApp } from '../context/AppContext';
import { SCHOOL_INFO, PROGRAMS, FEE_TIERS } from '../data/schoolData';

export const AdmissionsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const prefillProgram = searchParams.get('program') || 'Playgroup & Toddlers';

  const { admissions, submitAdmission, showToast } = useApp();

  // Tab: 'register' | 'fees' | 'tracker' | 'guidelines'
  const [activeTab, setActiveTab] = useState<'register' | 'fees' | 'tracker' | 'guidelines'>('register');

  // Form State
  const [formData, setFormData] = useState({
    childName: '',
    childDob: '',
    childGender: 'Female',
    program: prefillProgram,
    parentName: '',
    parentPhone: '',
    parentEmail: '',
    address: '',
    medicalNotes: '',
  });

  const [lastSubmittedId, setLastSubmittedId] = useState<string | null>(null);

  // Fee Calculator State
  const [calcGrade, setCalcGrade] = useState<string>('Playgroup');
  const [calcDaycare, setCalcDaycare] = useState<string>('none');
  const [calcTransport, setCalcTransport] = useState<string>('none');

  useEffect(() => {
    if (searchParams.get('program')) {
      setFormData((prev) => ({ ...prev, program: searchParams.get('program') || '' }));
    }
  }, [searchParams]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.childName.trim()) {
      showToast('Please enter the child’s full name', 'error');
      return;
    }
    if (!formData.parentPhone.trim() || formData.parentPhone.length < 10) {
      showToast('Please provide a valid 10-digit contact number', 'error');
      return;
    }
    if (!formData.parentName.trim()) {
      showToast('Please enter parent or guardian name', 'error');
      return;
    }

    const newApp = submitAdmission({
      childName: formData.childName,
      childDob: formData.childDob || '2023-05-15',
      childGender: formData.childGender,
      program: formData.program,
      parentName: formData.parentName,
      parentPhone: formData.parentPhone,
      parentEmail: formData.parentEmail || 'parent@example.com',
      address: formData.address || 'Shalimar Bagh, Delhi',
      medicalNotes: formData.medicalNotes,
    });

    setLastSubmittedId(newApp.id);
    // Reset form
    setFormData({
      childName: '',
      childDob: '',
      childGender: 'Female',
      program: 'Playgroup & Toddlers',
      parentName: '',
      parentPhone: '',
      parentEmail: '',
      address: '',
      medicalNotes: '',
    });
  };

  // Fee Calculation
  const selectedTier = FEE_TIERS.find((t) => t.grade.toLowerCase().includes(calcGrade.toLowerCase())) || FEE_TIERS[1];
  const daycareAddonPrice = calcDaycare === 'half' ? 14000 : calcDaycare === 'full' ? selectedTier.daycareAddon : 0;
  const transportPrice = calcTransport === 'shalimar' ? 9000 : calcTransport === 'pitampura' ? 12000 : calcTransport === 'rohini' ? 14000 : 0;
  const totalAnnualEst = selectedTier.annualComposite + selectedTier.registrationFee + selectedTier.kitCharges + daycareAddonPrice + transportPrice;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Banner */}
      <section className="bg-gradient-to-b from-amber-50/70 via-white to-slate-50 pt-12 pb-14 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold">
            <Sparkles className="h-3.5 w-3.5 text-amber-700" />
            <span>Academic Year 2026&ndash;2027 · Open Year-Round</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Admissions &amp; Registration Portal
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Begin your child&rsquo;s joyful learning journey at <strong className="text-slate-900">{SCHOOL_INFO.name}</strong>. Complete your registration online, compute fee estimates, or track your application.
          </p>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            <button
              onClick={() => setActiveTab('register')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors flex items-center gap-1.5 ${
                activeTab === 'register'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              <FileText className="h-4 w-4" />
              <span>Online Application</span>
            </button>
            <button
              onClick={() => setActiveTab('fees')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors flex items-center gap-1.5 ${
                activeTab === 'fees'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              <Calculator className="h-4 w-4" />
              <span>Fee Estimator</span>
            </button>
            <button
              onClick={() => setActiveTab('guidelines')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors flex items-center gap-1.5 ${
                activeTab === 'guidelines'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              <ClipboardCheck className="h-4 w-4" />
              <span>Procedure &amp; Documents</span>
            </button>
            <button
              onClick={() => setActiveTab('tracker')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors flex items-center gap-1.5 ${
                activeTab === 'tracker'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              <CheckCircle2 className="h-4 w-4" />
              <span>Track Applications ({admissions.length})</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Tab Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        {/* TAB 1: ONLINE APPLICATION FORM */}
        {activeTab === 'register' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  New Student Admission Registration
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Fill in your child&rsquo;s details to reserve an assessment and informal campus interaction slot.
                </p>
              </div>

              {lastSubmittedId && (
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs sm:text-sm space-y-2">
                  <div className="font-bold flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    <span>Application Submitted Successfully!</span>
                  </div>
                  <p>
                    Your registration has been saved to your browser session. You can view your printable application receipt in the <strong>Track Applications</strong> tab anytime.
                  </p>
                  <button
                    onClick={() => setActiveTab('tracker')}
                    className="text-xs font-bold text-emerald-800 underline hover:text-emerald-950"
                  >
                    View Status &amp; Application Details &rarr;
                  </button>
                </div>
              )}

              <form onSubmit={handleFormSubmit} className="space-y-6">
                {/* Child Information */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-3">
                    1. Child Information
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Child&rsquo;s Full Name *
                      </label>
                      <input
                        type="text"
                        name="childName"
                        value={formData.childName}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g. Aarav Sharma"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Date of Birth *
                      </label>
                      <input
                        type="date"
                        name="childDob"
                        value={formData.childDob}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Gender
                      </label>
                      <select
                        name="childGender"
                        value={formData.childGender}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 bg-white"
                      >
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                        <option value="Other">Prefer not to say</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Applying For Program *
                      </label>
                      <select
                        name="program"
                        value={formData.program}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 bg-white"
                      >
                        {PROGRAMS.map((p) => (
                          <option key={p.id} value={p.title}>
                            {p.title} ({p.ageGroup})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Parent / Guardian Information */}
                <div className="pt-4 border-t border-slate-100">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-3">
                    2. Parent / Guardian Contact
                  </h3>
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
                        placeholder="e.g. Dr. Ananya Sharma"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Primary Mobile Phone *
                      </label>
                      <input
                        type="tel"
                        name="parentPhone"
                        value={formData.parentPhone}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g. +91 98101 23456"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="parentEmail"
                        value={formData.parentEmail}
                        onChange={handleInputChange}
                        placeholder="e.g. ananya.sharma@example.com"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Residential Address &amp; Sector (Delhi NCR)
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="e.g. BQ Block, Shalimar Bagh, Delhi - 110088"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Medical & Dietary Notes */}
                <div className="pt-4 border-t border-slate-100">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-2">
                    3. Special Considerations &amp; Diet
                  </h3>
                  <textarea
                    name="medicalNotes"
                    rows={2}
                    value={formData.medicalNotes}
                    onChange={handleInputChange}
                    placeholder="Mention any allergies, food sensitivities, or comfort items your child needs..."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-amber-600 shadow-md transition-colors"
                  >
                    Submit Admission Registration
                  </button>
                  <p className="mt-2 text-xs text-slate-400">
                    Data is stored client-side in your browser localStorage. No external fees are charged during initial registration.
                  </p>
                </div>
              </form>
            </div>

            {/* Sidebar Guidelines */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-3">
                  Required Documents Checklist
                </h3>
                <ul className="space-y-2.5 text-xs text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Copy of Municipal Birth Certificate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>2 Passport-size color photos of the child</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>1 Passport photo each of Mother &amp; Father</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Residence ID Proof (Aadhar / Electricity bill)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Immunization &amp; pediatric vaccination card</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-amber-50/70 rounded-2xl border border-amber-200/80 space-y-3">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
                  <Phone className="h-4 w-4 text-amber-700" />
                  <span>Admissions Helpline</span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Have questions about age cut-offs, batch timings, or school transport routes? Our counselors are available 6 days a week.
                </p>
                <div className="pt-1 font-mono text-sm font-bold text-amber-900">
                  +91 925 005 7531
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: INTERACTIVE FEE ESTIMATOR */}
        {activeTab === 'fees' && (
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Interactive Fee Structure &amp; Estimator
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Transparent composite fee structure for the 2026-27 academic session. Customize your preferences below.
                </p>
              </div>

              {/* Selectors */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Select Grade / Program
                  </label>
                  <select
                    value={calcGrade}
                    onChange={(e) => setCalcGrade(e.target.value)}
                    className="w-full p-2.5 rounded-lg border border-slate-300 text-sm bg-white"
                  >
                    <option value="Mother-Toddler">Mother-Toddler</option>
                    <option value="Playgroup">Playgroup</option>
                    <option value="Nursery">Nursery</option>
                    <option value="Kindergarten">Kindergarten (LKG/UKG)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Daycare &amp; Evening Care
                  </label>
                  <select
                    value={calcDaycare}
                    onChange={(e) => setCalcDaycare(e.target.value)}
                    className="w-full p-2.5 rounded-lg border border-slate-300 text-sm bg-white"
                  >
                    <option value="none">No Daycare (Standard Hours)</option>
                    <option value="half">Half Day (Until 3:30 PM)</option>
                    <option value="full">Full Day (Until 6:30 PM with hot meals)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    AC Transport Fleet
                  </label>
                  <select
                    value={calcTransport}
                    onChange={(e) => setCalcTransport(e.target.value)}
                    className="w-full p-2.5 rounded-lg border border-slate-300 text-sm bg-white"
                  >
                    <option value="none">Self Drop &amp; Pickup</option>
                    <option value="shalimar">Shalimar Bagh Local (0-3 km)</option>
                    <option value="pitampura">Pitampura / Ashok Vihar (3-6 km)</option>
                    <option value="rohini">Rohini / Model Town (6-10 km)</option>
                  </select>
                </div>
              </div>

              {/* Estimate Summary Breakdown */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Annual Investment Breakdown ({calcGrade})
                </h3>

                <div className="space-y-2.5 text-sm">
                  <div className="flex justify-between items-center text-slate-600">
                    <span>One-time Admission &amp; Registration Fee:</span>
                    <span className="font-mono text-slate-900">₹{selectedTier.registrationFee.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-600">
                    <span>Annual Composite Tuition (4 Terms):</span>
                    <span className="font-mono text-slate-900">₹{selectedTier.annualComposite.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-600">
                    <span>Montessori Apparatus &amp; Activity Kit:</span>
                    <span className="font-mono text-slate-900">₹{selectedTier.kitCharges.toLocaleString()}</span>
                  </div>
                  {daycareAddonPrice > 0 && (
                    <div className="flex justify-between items-center text-slate-600">
                      <span>Daycare Extension (Fresh meals &amp; sleep suite):</span>
                      <span className="font-mono text-amber-700">₹{daycareAddonPrice.toLocaleString()}</span>
                    </div>
                  )}
                  {transportPrice > 0 && (
                    <div className="flex justify-between items-center text-slate-600">
                      <span>AC School Transport Fleet:</span>
                      <span className="font-mono text-amber-700">₹{transportPrice.toLocaleString()}</span>
                    </div>
                  )}

                  <div className="pt-3 border-t border-slate-200 flex justify-between items-center text-base sm:text-lg font-bold text-slate-900">
                    <span>Estimated Total Annual Investment:</span>
                    <span className="font-mono text-amber-600 text-xl">
                      ₹{totalAnnualEst.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="text-[11px] text-slate-400">
                  * Fees can be paid in 4 equal quarterly installments. Sibling discounts of 10% apply on the second child&rsquo;s tuition.
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => {
                    setFormData((prev) => ({ ...prev, program: calcGrade }));
                    setActiveTab('register');
                  }}
                  className="px-6 py-2.5 rounded-xl bg-slate-900 text-white font-semibold text-xs sm:text-sm hover:bg-slate-800 transition-colors"
                >
                  Proceed to Register for {calcGrade} &rarr;
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: GUIDELINES & STEP-BY-STEP */}
        {activeTab === 'guidelines' && (
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Four-Step Admission Roadmap
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-8 w-8 rounded-full bg-amber-500 text-white font-bold flex items-center justify-center shrink-0 text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">Step 1: Online Application Submission</h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">
                      Fill out the student registration form with basic parent and child details. A unique application reference number will be generated immediately.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-8 w-8 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center shrink-0 text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">Step 2: Campus Walkthrough &amp; Informal Interaction</h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">
                      Our admissions coordinator will reach out to schedule an informal meet-and-greet. There is no high-stress testing or interview for toddlers; our educators simply observe social comfort and readiness through play in our sensory zone.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-8 w-8 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center shrink-0 text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">Step 3: Document Verification &amp; Seat Allotment</h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">
                      Submit copies of the birth certificate and photographs. Once approved, the formal admission letter is generated with fee clearance instructions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-8 w-8 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center shrink-0 text-sm">
                    4
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">Step 4: Welcome Orientation &amp; Classroom Transition</h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">
                      Receive the MountainHeights Welcome Kit (uniform, sensory bag, student ID, and parent handbook). Parents are invited for a gradual settling-in period during the child&rsquo;s first week.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: TRACK APPLICATIONS */}
        {activeTab === 'tracker' && (
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Application History &amp; Status
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                    Records persisted safely in your browser localStorage.
                  </p>
                </div>
                <button
                  onClick={() => window.print()}
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50"
                >
                  <Printer className="h-3.5 w-3.5" />
                  <span>Print Receipt</span>
                </button>
              </div>

              {admissions.length === 0 ? (
                <div className="text-center py-12 text-slate-500 space-y-3">
                  <FileText className="h-10 w-10 text-slate-300 mx-auto" />
                  <p className="text-sm">No applications have been submitted in this browser yet.</p>
                  <button
                    onClick={() => setActiveTab('register')}
                    className="px-4 py-2 text-xs font-semibold rounded-lg bg-amber-500 text-slate-950 hover:bg-amber-400"
                  >
                    Start a New Application
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {admissions.map((app) => (
                    <div
                      key={app.id}
                      className="p-5 rounded-xl border border-slate-200 bg-slate-50/70 space-y-3"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200/60 pb-3">
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-bold text-amber-800 text-sm">
                            {app.applicationNumber}
                          </span>
                          <span className="text-xs text-slate-400">·</span>
                          <span className="text-xs text-slate-500">
                            Submitted on {new Date(app.submittedAt).toLocaleDateString()}
                          </span>
                        </div>
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 self-start sm:self-auto">
                          <CheckCircle2 className="h-3 w-3" />
                          <span>{app.status}</span>
                        </span>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                        <div>
                          <span className="text-slate-400 block">Child:</span>
                          <span className="font-bold text-slate-900">{app.childName}</span>
                        </div>
                        <div>
                          <span className="text-slate-400 block">Program:</span>
                          <span className="font-semibold text-slate-800">{app.program}</span>
                        </div>
                        <div>
                          <span className="text-slate-400 block">Parent:</span>
                          <span className="font-semibold text-slate-800">{app.parentName}</span>
                        </div>
                        <div>
                          <span className="text-slate-400 block">Phone:</span>
                          <span className="font-mono text-slate-800">{app.parentPhone}</span>
                        </div>
                      </div>

                      {app.medicalNotes && (
                        <div className="text-xs text-slate-600 bg-white p-2.5 rounded-lg border border-slate-100">
                          <span className="font-semibold text-slate-700">Remarks:</span> {app.medicalNotes}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Compact Ad Section */}
      <AdPlaceholder
        title="Little Explorer School Kit &amp; Ergonomic Toddler Backpacks"
        subtitle="Specially approved safety gear and non-toxic lunch sets for MountainHeights learners."
        category="Student Supplies Partner"
      />
    </div>
  );
};
