"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseSlug: string;
  brochureUrl?: string;
}

export default function BrochureModal({ isOpen, onClose, courseSlug, brochureUrl }: BrochureModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        setSuccess(false);
        setError("");
        setFormData({ fullName: "", email: "", phone: "", college: "" });
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    college: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // Simple validations
  const validate = () => {
    if (!formData.fullName.trim()) return "Full Name is required.";
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      return "Valid Email is required.";
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.phone.trim() || !phoneRegex.test(formData.phone)) {
      return "Valid 10-digit Phone Number is required.";
    }

    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    let popup: Window | null = null;
    if (brochureUrl) {
      popup = window.open("about:blank", "_blank");
    }

    try {
      const response = await fetch("/api/brochure", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, courseSlug }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit details. Please try again.");
      }

      setSuccess(true);
      
      // Trigger download
      if (brochureUrl && popup) {
        popup.location.href = brochureUrl;
      } else if (!brochureUrl) {
        const link = document.createElement("a");
        link.href = "/media/brochure/Brochure.pdf";
        link.download = `EdgeX-Brochure-${courseSlug}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }

    } catch (err: any) {
      if (popup) popup.close();
      setError(err.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="relative w-full max-w-md overflow-hidden rounded-2xl bg-[var(--bg-card)] p-6 shadow-2xl border border-[var(--border)]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
              aria-label="Close"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <h3 className="text-xl font-semibold tracking-tight text-[var(--text-primary)] mb-2">
              Download Brochure
            </h3>
            
            {success ? (
              <div className="py-10 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h4 className="text-lg font-medium text-[var(--text-primary)]">Details Submitted!</h4>
                <div className="mt-5">
                  <a
                    href={brochureUrl || "/media/brochure/Brochure.pdf"}
                    target={brochureUrl ? "_blank" : undefined}
                    download={!brochureUrl ? `EdgeX-Brochure-${courseSlug}.pdf` : undefined}
                    rel={brochureUrl ? "noopener noreferrer" : undefined}
                    className="text-sm font-semibold text-[var(--accent)] underline underline-offset-2 hover:text-[var(--primary)] transition-colors"
                  >
                    Click here if it didn't open
                  </a>
                </div>
              </div>
            ) : (
              <>
                <p className="text-sm text-[var(--text-secondary)] mb-6">
                  Please enter your details to download the detailed course brochure.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-[var(--text-primary)] mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg-secondary)] px-4 py-2 text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--primary)] focus:outline-none focus:ring-1 focus:ring-[var(--primary)]"
                      placeholder="John Doe"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      disabled={loading}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[var(--text-primary)] mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg-secondary)] px-4 py-2 text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--primary)] focus:outline-none focus:ring-1 focus:ring-[var(--primary)]"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      disabled={loading}
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[var(--text-primary)] mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      maxLength={10}
                      className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg-secondary)] px-4 py-2 text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--primary)] focus:outline-none focus:ring-1 focus:ring-[var(--primary)]"
                      placeholder="9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '') })}
                      disabled={loading}
                    />
                  </div>

                  <div>
                    <label htmlFor="college" className="block text-sm font-medium text-[var(--text-primary)] mb-1">
                      College Name
                    </label>
                    <input
                      id="college"
                      type="text"
                      className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg-secondary)] px-4 py-2 text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--primary)] focus:outline-none focus:ring-1 focus:ring-[var(--primary)]"
                      placeholder="IIT Bombay"
                      value={formData.college}
                      onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                      disabled={loading}
                    />
                  </div>

                  {error && (
                    <p className="text-sm text-red-500 font-medium">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary mt-2 w-full rounded-lg px-4 py-3 font-medium flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    ) : (
                      "Download PDF"
                    )}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
