export const metadata = {
  title: "Refund Policy | EdgeX Academy",
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RefundPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24 bg-[var(--bg)]">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <h1 className="text-4xl font-bold mb-10 text-[var(--text-primary)] text-center uppercase">EdgeX Academy Refund Policy</h1>
        <div className="prose prose-invert max-w-none text-[var(--text-secondary)] text-justify space-y-6">
          <section>
            <p className="font-medium text-[var(--text-primary)]">Effective Date: July 15th, 2026</p>
            <p className="mt-4">At EdgeX Academy, we are committed to providing high-quality digital learning experiences. As our courses provide immediate access to proprietary digital content, learning resources, and educational materials upon enrolment, all purchases are generally considered final.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">1. General Refund Policy</h2>
            <p>Unless explicitly stated otherwise in writing on the student&apos;s invoice, quotation, or order confirmation, all course purchases, one-to-one sessions, subscriptions, digital products, and learning resources are non-refundable and non-transferable.</p>
            <p className="mt-2">Students are encouraged to carefully review the course details, curriculum, eligibility, and FAQs before completing their purchase.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">2. Exceptions</h2>
            <p>A refund may be considered only under the following circumstances:</p>
            
            <h3 className="text-xl font-medium text-[var(--text-primary)] mt-6 mb-2">A. Failure to Provide Access</h3>
            <p>If a student is unable to access the purchased course or learning material due to a technical issue attributable to EdgeX Academy, and our team is unable to restore access within a reasonable period after being notified, the student may be eligible for a full or partial refund at the sole discretion of EdgeX Academy.</p>
            
            <h3 className="text-xl font-medium text-[var(--text-primary)] mt-6 mb-2">B. Written Promotional Offers</h3>
            <p>Where a refund policy, money-back guarantee, or special cancellation provision has been explicitly stated in writing by EdgeX Academy on the invoice, promotional offer, or official communication, that written policy shall prevail for that specific purchase.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">3. Non-Refundable Situations</h2>
            <p>Refunds will not be provided for reasons including, but not limited to:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Change of mind after purchase.</li>
              <li>Change in career plans or educational goals.</li>
              <li>Failure to complete the course.</li>
              <li>Failure to attend live sessions.</li>
              <li>Scheduling conflicts.</li>
              <li>Dissatisfaction arising from personal expectations where the course has been delivered substantially as described.</li>
              <li>Lack of time or commitment to complete the program.</li>
              <li>Technical issues arising from the student&apos;s own internet connection, devices, software, or browser settings.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">4. One-to-One Sessions</h2>
            <p>Bookings for Mock Interviews, CV Reviews, Career Strategy Consultations, Essay Reviews, or any other one-to-one services are non-refundable once confirmed.</p>
            <p className="mt-2">Requests to reschedule may be accommodated if received at least 48 hours before the scheduled session, subject to mentor availability.</p>
            <p className="mt-2">Failure to attend a scheduled session without prior notice will be treated as a completed session and will not be eligible for refund or rescheduling.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">5. Technical Support</h2>
            <p>Students experiencing difficulties accessing course material should contact the EdgeX support team promptly. We will make reasonable efforts to resolve technical issues as quickly as possible and ensure uninterrupted access wherever feasible.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[var(--text-primary)] mt-8 mb-4">6. Contact</h2>
            <p>For refund-related queries or technical support, please contact:</p>
            <p className="mt-2"><strong>Email:</strong> <a href="mailto:office@edgex.co.in" className="text-[var(--accent)] hover:underline">office@edgex.co.in</a></p>
          </section>

          <section>
            <p className="mt-8 font-medium">EdgeX Academy reserves the right to review refund requests on a case-by-case basis in exceptional circumstances. Any decision made by EdgeX Academy regarding refunds shall be final.</p>
          </section>
        </div>
      </div>
    </main>
      <Footer />
    </>
  );
}
