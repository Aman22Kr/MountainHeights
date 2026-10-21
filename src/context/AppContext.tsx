import React, { createContext, useContext, useState, useEffect } from 'react';

export interface AdmissionApplication {
  id: string;
  applicationNumber: string;
  childName: string;
  childDob: string;
  childGender: string;
  program: string;
  parentName: string;
  parentPhone: string;
  parentEmail: string;
  address: string;
  medicalNotes?: string;
  submittedAt: string;
  status: 'Submitted' | 'Documents Under Review' | 'Interaction Scheduled' | 'Admission Confirmed';
}

export interface TourBooking {
  id: string;
  bookingRef: string;
  parentName: string;
  parentPhone: string;
  parentEmail: string;
  preferredDate: string;
  preferredTime: string;
  childAge: string;
  numAttendees: number;
  notes?: string;
  bookedAt: string;
  status: 'Confirmed' | 'Completed' | 'Rescheduled';
}

export interface InquiryMessage {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  submittedAt: string;
}

export interface ToastNotice {
  id: string;
  type: 'success' | 'info' | 'error';
  message: string;
}

interface AppContextType {
  admissions: AdmissionApplication[];
  tours: TourBooking[];
  inquiries: InquiryMessage[];
  savedNoticeIds: string[];
  recentSearches: string[];
  toasts: ToastNotice[];
  submitAdmission: (data: Omit<AdmissionApplication, 'id' | 'applicationNumber' | 'submittedAt' | 'status'>) => AdmissionApplication;
  bookTour: (data: Omit<TourBooking, 'id' | 'bookingRef' | 'bookedAt' | 'status'>) => TourBooking;
  submitInquiry: (data: Omit<InquiryMessage, 'id' | 'submittedAt'>) => InquiryMessage;
  toggleSaveNotice: (id: string) => void;
  isNoticeSaved: (id: string) => boolean;
  addRecentSearch: (query: string) => void;
  clearRecentSearches: () => void;
  showToast: (message: string, type?: 'success' | 'info' | 'error') => void;
  removeToast: (id: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const STORAGE_KEYS = {
  ADMISSIONS: 'mountainheights_admissions_v1',
  TOURS: 'mountainheights_tours_v1',
  INQUIRIES: 'mountainheights_inquiries_v1',
  SAVED_NOTICES: 'mountainheights_saved_notices_v1',
  SEARCHES: 'mountainheights_recent_searches_v1',
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [admissions, setAdmissions] = useState<AdmissionApplication[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.ADMISSIONS);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [tours, setTours] = useState<TourBooking[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.TOURS);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [inquiries, setInquiries] = useState<InquiryMessage[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.INQUIRIES);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [savedNoticeIds, setSavedNoticeIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.SAVED_NOTICES);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [recentSearches, setRecentSearches] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.SEARCHES);
      return stored ? JSON.parse(stored) : ['Nursery admission', 'Splash pool', 'Fee structure', 'Shalimar Bagh'];
    } catch {
      return [];
    }
  });

  const [toasts, setToasts] = useState<ToastNotice[]>([]);

  // Sync state to LocalStorage safely
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.ADMISSIONS, JSON.stringify(admissions));
    } catch (e) {
      console.warn('LocalStorage error while saving admissions', e);
    }
  }, [admissions]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.TOURS, JSON.stringify(tours));
    } catch (e) {
      console.warn('LocalStorage error while saving tours', e);
    }
  }, [tours]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.INQUIRIES, JSON.stringify(inquiries));
    } catch (e) {
      console.warn('LocalStorage error while saving inquiries', e);
    }
  }, [inquiries]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.SAVED_NOTICES, JSON.stringify(savedNoticeIds));
    } catch (e) {
      console.warn('LocalStorage error while saving notices', e);
    }
  }, [savedNoticeIds]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.SEARCHES, JSON.stringify(recentSearches));
    } catch (e) {
      console.warn('LocalStorage error while saving searches', e);
    }
  }, [recentSearches]);

  const showToast = (message: string, type: 'success' | 'info' | 'error' = 'success') => {
    const id = Date.now().toString() + Math.random().toString(36).substring(2, 6);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4500);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const submitAdmission = (
    data: Omit<AdmissionApplication, 'id' | 'applicationNumber' | 'submittedAt' | 'status'>
  ): AdmissionApplication => {
    const randNum = Math.floor(1000 + Math.random() * 9000);
    const newApp: AdmissionApplication = {
      ...data,
      id: 'app_' + Date.now(),
      applicationNumber: `MH-2026-${randNum}`,
      submittedAt: new Date().toISOString(),
      status: 'Submitted',
    };
    setAdmissions((prev) => [newApp, ...prev]);
    showToast(`Application submitted! Ref #${newApp.applicationNumber}`, 'success');
    return newApp;
  };

  const bookTour = (
    data: Omit<TourBooking, 'id' | 'bookingRef' | 'bookedAt' | 'status'>
  ): TourBooking => {
    const randLetters = Math.random().toString(36).substring(2, 6).toUpperCase();
    const newTour: TourBooking = {
      ...data,
      id: 'tour_' + Date.now(),
      bookingRef: `TOUR-${randLetters}`,
      bookedAt: new Date().toISOString(),
      status: 'Confirmed',
    };
    setTours((prev) => [newTour, ...prev]);
    showToast(`Campus visit scheduled for ${data.preferredDate} at ${data.preferredTime}!`, 'success');
    return newTour;
  };

  const submitInquiry = (data: Omit<InquiryMessage, 'id' | 'submittedAt'>): InquiryMessage => {
    const newInquiry: InquiryMessage = {
      ...data,
      id: 'inq_' + Date.now(),
      submittedAt: new Date().toISOString(),
    };
    setInquiries((prev) => [newInquiry, ...prev]);
    showToast('Your message has been received! Our admissions desk will call you shortly.', 'success');
    return newInquiry;
  };

  const toggleSaveNotice = (id: string) => {
    setSavedNoticeIds((prev) => {
      if (prev.includes(id)) {
        showToast('Removed notice from saved bookmarks', 'info');
        return prev.filter((item) => item !== id);
      } else {
        showToast('Notice saved to bookmarks', 'success');
        return [...prev, id];
      }
    });
  };

  const isNoticeSaved = (id: string) => savedNoticeIds.includes(id);

  const addRecentSearch = (query: string) => {
    const trimmed = query.trim();
    if (!trimmed) return;
    setRecentSearches((prev) => {
      const filtered = prev.filter((item) => item.toLowerCase() !== trimmed.toLowerCase());
      return [trimmed, ...filtered].slice(0, 8);
    });
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
  };

  return (
    <AppContext.Provider
      value={{
        admissions,
        tours,
        inquiries,
        savedNoticeIds,
        recentSearches,
        toasts,
        submitAdmission,
        bookTour,
        submitInquiry,
        toggleSaveNotice,
        isNoticeSaved,
        addRecentSearch,
        clearRecentSearches,
        showToast,
        removeToast,
      }}
    >
      {children}
      {/* Toast Overlay Container */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            role="status"
            className={`pointer-events-auto flex items-center justify-between p-3.5 rounded-lg shadow-lg text-sm font-medium border transition-all ${
              toast.type === 'success'
                ? 'bg-emerald-900 text-emerald-50 border-emerald-700'
                : toast.type === 'error'
                ? 'bg-rose-900 text-rose-50 border-rose-700'
                : 'bg-slate-900 text-slate-100 border-slate-700'
            }`}
          >
            <span>{toast.message}</span>
            <button
              onClick={() => removeToast(toast.id)}
              className="ml-3 text-white/70 hover:text-white p-1"
              aria-label="Dismiss notification"
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
