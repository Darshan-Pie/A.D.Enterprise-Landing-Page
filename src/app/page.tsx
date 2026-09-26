"use client";

// ============================================================
// A.D. ENTERPRISES - Responsive Digital Business Card
// ============================================================

import { useState } from "react";
import { ChevronRight, X, Download, FileText, CheckCircle2, Phone } from "lucide-react";

// -- Configuration ------------------------------------------
const COMPANY_NAME = "A.D. ENTERPRISES";
const TAGLINE = "MANUFACTURER OF LV SWITCH BOARDS & LT BUS DUCT";
const CATALOGUE_URL = "/AD_ENTERPRISES.pdf";

// Dual Phone & WhatsApp Contacts
const PHONE_1_NAME = "Akash Chhatbar";
const PHONE_1_DISPLAY = "+91 93770 38505";
const PHONE_1_RAW = "919377038505";

const PHONE_2_NAME = "Dhiren Machchhar";
const PHONE_2_DISPLAY = "+91 78780 32927";
const PHONE_2_RAW = "917878032927";

const EMAIL = "akashet@yahoo.com";
const WEBSITE_URL = "https://www.adenterprise.in";
const GOOGLE_MAPS_URL = "https://www.google.com/maps/search/?api=1&query=A.D.+ENTERPRISES+Shyam+Industrial+Hub+Bakrol+Bujrang+Ahmedabad";
const ADDRESS = "32, 33, 38, 39 Shyam Industrial Hub, Kujad, Bakrol-Gatrad Rd, Bakrol Bujrang, Gujarat 382433";

// -- Local PNG Icon Paths (public/icons/) --------------------
const ICONS = {
  website: "/icons/website.png",
  phone: "/icons/phone.png",
  email: "/icons/email.png",
  location: "/icons/location.png",
  whatsapp: "/icons/whatsapp.png",
  catalogue: "/icons/catalogue.png",
};
// -----------------------------------------------------------

// ============================================================
// Top & Bottom Graphic Banners
// ============================================================
function TopCardBanner() {
  return (
    <div className="absolute top-0 left-0 right-0 w-full h-28 sm:h-32 pointer-events-none overflow-hidden z-0">
      <img
        src="/card-top.png"
        alt=""
        className="w-full h-full object-cover object-top opacity-95"
      />
    </div>
  );
}

function BottomCardBanner() {
  return (
    <div className="absolute bottom-0 left-0 right-0 w-full h-28 sm:h-32 pointer-events-none overflow-hidden z-0">
      <img
        src="/card-bottom.png"
        alt=""
        className="w-full h-full object-cover object-bottom opacity-95"
      />
    </div>
  );
}

// ============================================================
// Header
// ============================================================
function Header() {
  return (
    <header className="text-center pt-20 sm:pt-24 pb-4 px-6 relative z-10 flex flex-col items-center">
      <h1
        className="font-bold mb-2 w-full uppercase drop-shadow-sm"
        style={{
          fontSize: "clamp(1.35rem, 5.8vw, 2.2rem)",
          letterSpacing: "0.1em",
          lineHeight: 1.2,
          color: "#C8102E",
          fontFamily: "'BankGothic', 'Bank Gothic', sans-serif"
        }}
      >
        {COMPANY_NAME}
      </h1>

      <p className="font-bold text-slate-900 uppercase px-2 tracking-[0.14em] text-[10px] sm:text-[11px] max-w-xs sm:max-w-sm leading-relaxed">
        {TAGLINE}
      </p>
    </header>
  );
}

// ============================================================
// Certification Banner
// ============================================================
function CertificationBanner() {
  const certs = [
    "AN ISO 9001:2015 CERTIFIED COMPANY",
    "CPRI TESTED (70 KA S/C - IEC 61439)",
    "ERDA TESTED (100 KA S/C - IS 8623)"
  ];

  return (
    <div className="w-full bg-[#C8102E] text-white py-3.5 px-4 shadow-md mb-6 relative z-10">
      <div className="flex flex-col gap-2 max-w-md mx-auto items-center text-center">
        {certs.map((text, i) => (
          <div key={i} className="flex items-center justify-center gap-2">
            <CheckCircle2 size={12} className="text-white shrink-0" />
            <span className="text-[10px] sm:text-[10.5px] font-bold tracking-widest leading-snug">
              {text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ============================================================
// Action Cards Stack
// ============================================================
function ActionCards({ onOpenPdf }: { onOpenPdf: () => void }) {
  return (
    <section className="flex flex-col gap-3.5 px-4 w-full max-w-md mx-auto mb-6 relative z-10">
      {/* Catalogue Card */}
      <button
        onClick={onOpenPdf}
        className="w-full bg-white border border-slate-200 rounded-xl p-3.5 flex items-center justify-between shadow-sm hover:shadow-md transition-all active:scale-[0.99]"
      >
        <div className="flex items-center gap-3.5 text-left">
          <div className="w-11 h-11 shrink-0 flex items-center justify-center">
            <img
              src={ICONS.catalogue}
              alt="Catalogue"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <span className="block font-bold text-slate-800 text-[15px] mb-0.5">View Product Catalogue</span>
            <span className="block font-medium text-slate-500 text-[11px] tracking-wide">Tap to preview brochure in-app</span>
          </div>
        </div>
        <ChevronRight size={18} className="text-slate-400" />
      </button>

      {/* WhatsApp Card with Contact Names */}
      <div className="w-full bg-white border border-slate-200 rounded-xl p-3.5 shadow-sm">
        <div className="flex items-center gap-3.5 mb-2.5">
          <div className="w-11 h-11 shrink-0 flex items-center justify-center">
            <img
              src={ICONS.whatsapp}
              alt="WhatsApp"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <span className="block font-bold text-slate-800 text-[15px]">Connect on WhatsApp</span>
            <span className="block font-medium text-slate-500 text-[11px] tracking-wide">Select contact line to chat</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 mt-2 pt-2 border-t border-slate-100">
          <a
            href={`https://wa.me/${PHONE_1_RAW}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-2.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-950 rounded-lg transition-colors text-center border border-emerald-100"
          >
            <div className="flex items-center gap-1 mb-0.5">
              <img src={ICONS.whatsapp} alt="" className="w-3.5 h-3.5 object-contain" />
              <span className="text-[11px] font-bold leading-tight">{PHONE_1_NAME}</span>
            </div>
            <span className="text-[10px] font-medium text-emerald-700">{PHONE_1_DISPLAY}</span>
          </a>

          <a
            href={`https://wa.me/${PHONE_2_RAW}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-2.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-950 rounded-lg transition-colors text-center border border-emerald-100"
          >
            <div className="flex items-center gap-1 mb-0.5">
              <img src={ICONS.whatsapp} alt="" className="w-3.5 h-3.5 object-contain" />
              <span className="text-[11px] font-bold leading-tight">{PHONE_2_NAME}</span>
            </div>
            <span className="text-[10px] font-medium text-emerald-700">{PHONE_2_DISPLAY}</span>
          </a>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Contact Grid
// ============================================================
function ContactGrid({ onSelectCall }: { onSelectCall: () => void }) {
  return (
    <div className="px-4 max-w-md mx-auto w-full mb-8 relative z-10">
      <div className="grid grid-cols-2 gap-3">
        {/* Website */}
        <a
          href={WEBSITE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-2 p-3.5 bg-white rounded-xl border border-slate-200 transition-transform active:scale-95 hover:shadow-md hover:border-slate-300"
        >
          <img src={ICONS.website} alt="Website" className="w-8 h-8 object-contain" />
          <span className="text-[10px] font-bold text-slate-700 tracking-widest">WEBSITE</span>
        </a>

        {/* Call Us */}
        <button
          onClick={onSelectCall}
          className="flex flex-col items-center justify-center gap-2 p-3.5 bg-white rounded-xl border border-slate-200 transition-transform active:scale-95 hover:shadow-md hover:border-slate-300"
        >
          <img src={ICONS.phone} alt="Call Us" className="w-8 h-8 object-contain" />
          <span className="text-[10px] font-bold text-slate-700 tracking-widest">CALL US</span>
        </button>

        {/* Email */}
        <a
          href={`mailto:${EMAIL}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-2 p-3.5 bg-white rounded-xl border border-slate-200 transition-transform active:scale-95 hover:shadow-md hover:border-slate-300"
        >
          <img src={ICONS.email} alt="Email" className="w-8 h-8 object-contain" />
          <span className="text-[10px] font-bold text-slate-700 tracking-widest">EMAIL</span>
        </a>

        {/* Location */}
        <a
          href={GOOGLE_MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-2 p-3.5 bg-white rounded-xl border border-slate-200 transition-transform active:scale-95 hover:shadow-md hover:border-slate-300"
        >
          <img src={ICONS.location} alt="Location" className="w-8 h-8 object-contain" />
          <span className="text-[10px] font-bold text-slate-700 tracking-widest">LOCATION</span>
        </a>
      </div>
    </div>
  );
}

// ============================================================
// Call Choice Modal with Contact Names
// ============================================================
function CallModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm" role="dialog">
      <div className="bg-white rounded-2xl p-5 w-full max-w-xs shadow-2xl relative border border-slate-100">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-1 text-slate-400 hover:text-slate-600 rounded-full"
        >
          <X size={18} />
        </button>

        <div className="text-center mb-4">
          <div className="w-10 h-10 flex items-center justify-center mx-auto mb-2">
            <img src={ICONS.phone} alt="" className="w-full h-full object-contain" />
          </div>
          <h3 className="font-bold text-slate-900 text-base">Select Contact Line</h3>
          <p className="text-xs text-slate-500 mt-0.5">Tap a person to place a direct call</p>
        </div>

        <div className="flex flex-col gap-2.5">
          <a
            href={`tel:${PHONE_1_DISPLAY}`}
            className="flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors border border-slate-200"
          >
            <div className="text-left">
              <span className="block font-bold text-xs text-slate-900">{PHONE_1_NAME}</span>
              <span className="block text-[11px] text-slate-500 font-medium mt-0.5">{PHONE_1_DISPLAY}</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0 ml-2">
              <Phone size={14} />
            </div>
          </a>

          <a
            href={`tel:${PHONE_2_DISPLAY}`}
            className="flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors border border-slate-200"
          >
            <div className="text-left">
              <span className="block font-bold text-xs text-slate-900">{PHONE_2_NAME}</span>
              <span className="block text-[11px] text-slate-500 font-medium mt-0.5">{PHONE_2_DISPLAY}</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0 ml-2">
              <Phone size={14} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// Footer
// ============================================================
function Footer() {
  return (
    <footer className="w-full text-center pb-20 pt-2 px-10 mt-auto relative z-10">
      <div className="w-12 h-0.5 bg-slate-300 mx-auto mb-4"></div>
      <p className="text-[10px] sm:text-[11px] font-bold text-slate-700 leading-relaxed max-w-xs mx-auto mb-3 tracking-wide">
        {ADDRESS}
      </p>
      <p className="text-[9px] font-bold text-slate-400 tracking-[0.2em]">
        &copy; {new Date().getFullYear()} {COMPANY_NAME}.<br />ALL RIGHTS RESERVED.
      </p>
    </footer>
  );
}

// ============================================================
// Mobile PDF Modal Viewer
// ============================================================
function PdfModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-slate-900/90 backdrop-blur-sm" role="dialog" aria-modal="true">
      <div className="flex items-center justify-between p-3 bg-[#C8102E] shadow-xl shrink-0">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="bg-white/20 p-1.5 rounded-full">
            <FileText size={16} className="text-white" />
          </div>
          <span className="font-bold text-white text-[12px] sm:text-[13px] tracking-widest truncate" style={{ fontFamily: "'BankGothic', 'Bank Gothic', sans-serif" }}>
            {COMPANY_NAME}
          </span>
        </div>

        <div className="flex items-center gap-2.5 shrink-0 pl-2">
          <a
            href={CATALOGUE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 bg-white text-[#C8102E] rounded-md font-bold text-[10px] sm:text-[11px] shadow-sm hover:bg-slate-100 transition-colors tracking-wider"
          >
            <Download size={13} />
            DOWNLOAD
          </a>
          <button
            onClick={onClose}
            className="p-1 text-white/80 hover:text-white hover:bg-white/20 rounded-md transition-colors"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>
      </div>

      <div className="flex-1 p-2 md:p-6 overflow-hidden flex flex-col items-center justify-center">
        <object
          data={CATALOGUE_URL}
          type="application/pdf"
          className="w-full h-full bg-white rounded-lg shadow-2xl border-0 hidden sm:block"
        >
          <p>Your browser does not support inline PDFs.</p>
        </object>

        <div className="sm:hidden flex flex-col items-center justify-center text-center p-6 bg-white rounded-xl shadow-lg max-w-xs mx-auto">
          <FileText className="w-12 h-12 text-[#C8102E] mb-3" />
          <h3 className="text-base font-bold text-slate-900 mb-1">Product Catalogue</h3>
          <p className="text-xs text-slate-500 mb-4">Tap below to view or download the full PDF brochure on mobile.</p>
          <a
            href={CATALOGUE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-4 bg-[#C8102E] text-white rounded-lg font-bold text-xs tracking-wider flex items-center justify-center gap-2 shadow-md"
          >
            <Download size={14} /> Open PDF Brochure
          </a>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// Main App Layout
// ============================================================
export default function Home() {
  const [isPdfOpen, setIsPdfOpen] = useState(false);
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);

  return (
    <>
      {isPdfOpen && <PdfModal onClose={() => setIsPdfOpen(false)} />}
      {isCallModalOpen && <CallModal onClose={() => setIsCallModalOpen(false)} />}

      {/* Desktop Wrapper Background */}
      <main className="min-h-screen w-full bg-slate-900 sm:bg-slate-200 flex items-center justify-center sm:py-8 sm:px-4 selection:bg-[#C8102E]/20 selection:text-[#C8102E]">

        {/* Fixed Mobile Card Frame on PC */}
        <div className="relative w-full max-w-md min-h-[100dvh] sm:min-h-[820px] bg-slate-50 sm:rounded-3xl sm:shadow-2xl overflow-hidden flex flex-col justify-between sm:border sm:border-slate-300">

          <TopCardBanner />

          <div className="flex-1 flex flex-col w-full relative z-10">
            <Header />
            <CertificationBanner />
            <ActionCards onOpenPdf={() => setIsPdfOpen(true)} />
            <ContactGrid onSelectCall={() => setIsCallModalOpen(true)} />
          </div>

          <Footer />

          <BottomCardBanner />
        </div>
      </main>

      <style jsx global>{`
        @font-face {
          font-family: 'BankGothic';
          src: local('BankGothic Md BT'), local('Bank Gothic'), local('BankGothic');
        }
      `}</style>
    </>
  );
}