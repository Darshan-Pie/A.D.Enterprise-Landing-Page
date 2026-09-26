"use client";

// ============================================================
// A.D. ENTERPRISES - Mobile-Optimized Landing Page
// ============================================================

import { useState } from "react";
import { Globe, Phone, Mail, ChevronRight, X, Download, MapPin, FileText, CheckCircle2 } from "lucide-react";

// -- Configuration ------------------------------------------
const COMPANY_NAME = "A.D. ENTERPRISES";
const TAGLINE = "MANUFACTURER OF LV SWITCH BOARDS & LT BUS DUCT";
const CATALOGUE_URL = "/AD_ENTERPRISES.pdf";
const WHATSAPP_NUMBER = "919377038505";
const PHONE_NUMBER = "+91 93770 38505";
const EMAIL = "akashet@yahoo.com";
const WEBSITE_URL = "https://www.adenterprise.in";
const GOOGLE_MAPS_URL = "https://www.google.com/maps/search/?api=1&query=A.D.+ENTERPRISES+Shyam+Industrial+Hub+Bakrol+Bujrang+Ahmedabad";
const ADDRESS = "32, 33, 38, 39 Shyam Industrial Hub, Kujad, Bakrol-Gatrad Rd, Bakrol Bujrang, Gujarat 382433";
// -----------------------------------------------------------

// --- Native SVG Icons (Eliminates External Network Dependencies) ---
function WhatsAppIcon({ size = 20, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

function GmailIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6z" />
      <path fill="#34A853" d="M22 6l-10 7L2 6v12h2V8l8 5.5L20 8v10h2V6z" />
      <path fill="#EA4335" d="M2 6l10 7L22 6" />
    </svg>
  );
}

function GoogleMapsIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path fill="#34A853" d="M12 2C7.58 2 4 5.58 4 10c0 5.25 7 12 8 12s8-6.75 8-12c0-4.42-3.58-8-8-8z" />
      <circle cx="12" cy="10" r="3" fill="#FFFFFF" />
    </svg>
  );
}

// ============================================================
// Geometric Corner Banners
// ============================================================
function CornerBanners() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div
        className="absolute bg-[#C8102E]"
        style={{
          width: "160px",
          height: "22px",
          top: "10px",
          left: "-50px",
          transform: "rotate(-45deg)",
          boxShadow: "0 2px 8px rgba(0,0,0,0.12)"
        }}
      />
      <div
        className="absolute bg-[#C8102E]"
        style={{
          width: "160px",
          height: "22px",
          bottom: "10px",
          right: "-50px",
          transform: "rotate(-45deg)",
          boxShadow: "0 -2px 8px rgba(0,0,0,0.12)"
        }}
      />
    </div>
  );
}

// ============================================================
// Header
// ============================================================
function Header() {
  return (
    <header className="text-center pt-14 sm:pt-18 pb-4 px-4 relative z-10 flex flex-col items-center">
      <h1 className="font-bold mb-2 w-full text-red-700 tracking-wide text-2xl sm:text-4xl uppercase">
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
          <div className="flex items-center justify-center w-11 h-11 rounded-full bg-[#C8102E] text-white shrink-0 shadow-sm">
            <FileText size={20} />
          </div>
          <div>
            <span className="block font-bold text-slate-800 text-[15px] mb-0.5">View Product Catalogue</span>
            <span className="block font-medium text-slate-500 text-[11px] tracking-wide">Tap to preview brochure in-app</span>
          </div>
        </div>
        <ChevronRight size={18} className="text-slate-400" />
      </button>

      {/* WhatsApp Card */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full bg-white border border-slate-200 rounded-xl p-3.5 flex items-center justify-between shadow-sm hover:shadow-md transition-all active:scale-[0.99]"
      >
        <div className="flex items-center gap-3.5 text-left">
          <div className="flex items-center justify-center w-11 h-11 rounded-full bg-[#25D366] text-white shrink-0 shadow-sm">
            <WhatsAppIcon size={22} color="#ffffff" />
          </div>
          <div>
            <span className="block font-bold text-slate-800 text-[15px] mb-0.5">Connect on WhatsApp</span>
            <span className="block font-medium text-slate-500 text-[11px] tracking-wide">+91 93770 38505</span>
          </div>
        </div>
        <ChevronRight size={18} className="text-slate-400" />
      </a>
    </section>
  );
}

// ============================================================
// Contact Grid (2x2)
// ============================================================
function ContactGrid() {
  const items = [
    {
      id: "c-web",
      href: WEBSITE_URL,
      icon: <Globe className="w-6 h-6 text-blue-600" />,
      label: "WEBSITE"
    },
    {
      id: "c-phone",
      href: `tel:${PHONE_NUMBER}`,
      icon: <Phone className="w-6 h-6 text-emerald-600" />,
      label: "CALL US"
    },
    {
      id: "c-email",
      href: `mailto:${EMAIL}`,
      icon: <GmailIcon className="w-6 h-6" />,
      label: "EMAIL"
    },
    {
      id: "c-maps",
      href: GOOGLE_MAPS_URL,
      icon: <GoogleMapsIcon className="w-6 h-6" />,
      label: "LOCATION"
    },
  ];

  return (
    <div className="px-4 max-w-md mx-auto w-full mb-8 relative z-10">
      <div className="grid grid-cols-2 gap-3">
        {items.map((c) => (
          <a
            key={c.id}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-2 p-3.5 bg-white rounded-xl border border-slate-200 transition-transform active:scale-95 hover:shadow-md hover:border-slate-300"
          >
            <div className="flex items-center justify-center w-10 h-10">
              {c.icon}
            </div>
            <span className="text-[10px] font-bold text-slate-700 tracking-widest">{c.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

// ============================================================
// Footer
// ============================================================
function Footer() {
  return (
    <footer className="w-full text-center pb-6 px-6 mt-auto relative z-10">
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
// Mobile-Friendly PDF Modal Viewer
// ============================================================
function PdfModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-slate-900/90 backdrop-blur-sm" role="dialog" aria-modal="true">
      <div className="flex items-center justify-between p-3 bg-[#C8102E] shadow-xl shrink-0">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="bg-white/20 p-1.5 rounded-full">
            <FileText size={16} className="text-white" />
          </div>
          <span className="font-bold text-white text-[12px] sm:text-[13px] tracking-widest truncate">
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
        {/* Uses Object with fallback link for iOS / Android mobile browsers */}
        <object
          data={CATALOGUE_URL}
          type="application/pdf"
          className="w-full h-full bg-white rounded-lg shadow-2xl border-0 hidden sm:block"
        >
          <p>Your browser does not support inline PDFs.</p>
        </object>

        {/* Mobile direct fallback container */}
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

  return (
    <>
      {isPdfOpen && <PdfModal onClose={() => setIsPdfOpen(false)} />}

      <main className="relative flex flex-col min-h-[100dvh] bg-slate-50 font-sans selection:bg-[#C8102E]/20 selection:text-[#C8102E] overflow-x-hidden">
        <CornerBanners />

        <div className="flex-1 flex flex-col w-full mx-auto relative z-10">
          <Header />
          <CertificationBanner />
          <ActionCards onOpenPdf={() => setIsPdfOpen(true)} />
          <ContactGrid />
          <Footer />
        </div>
      </main>
    </>
  );
}