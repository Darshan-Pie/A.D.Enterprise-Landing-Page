"use client";

// ============================================================
// A.D. ENTERPRISES - Business Card Replica Landing Page
// ============================================================

import { useState } from "react";
import { Globe, Phone, Mail, ChevronRight, X, Download, MapPin, FileText, CheckCircle2 } from "lucide-react";

// -- Configuration ------------------------------------------
const COMPANY_NAME        = "A.D. ENTERPRISES";
const TAGLINE             = "MANUFACTURER OF LV SWITCH BOARDS & LT BUS DUCT";
const CATALOGUE_URL       = "/AD_ENTERPRISES.pdf";
const WHATSAPP_NUMBER     = "919377038505";
const PHONE_NUMBER        = "+91 93770 38505";
const EMAIL               = "akashet@yahoo.com";
const WEBSITE_URL         = "https://www.adenterprise.in";
const GOOGLE_MAPS_URL     = "https://www.google.com/maps/search/?api=1&query=A.D.+ENTERPRISES+Shyam+Industrial+Hub+Bakrol+Bujrang+Ahmedabad";
const ADDRESS             = "32, 33, 38, 39 Shyam Industrial Hub, Kujad, Bakrol-Gatrad Rd, Bakrol Bujrang, Gujarat 382433";
// -----------------------------------------------------------

// ============================================================
// WhatsApp inline SVG
// ============================================================
function WhatsAppIcon({ size = 20, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

// ============================================================
// Geometric Corner Banners
// ============================================================
function CornerBanners() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Top Left Red Ribbon */}
      <div 
        className="absolute bg-[#C8102E]"
        style={{
          width: "300px", 
          height: "40px",
          top: "40px",
          left: "-90px",
          transform: "rotate(-45deg)",
          boxShadow: "0 4px 10px rgba(0,0,0,0.15)"
        }}
      />
      {/* Bottom Right Red Ribbon */}
      <div 
        className="absolute bg-[#C8102E]"
        style={{
          width: "300px", 
          height: "40px",
          bottom: "40px",
          right: "-90px",
          transform: "rotate(-45deg)",
          boxShadow: "0 -4px 10px rgba(0,0,0,0.15)"
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
    <header className="text-center pt-24 pb-6 px-4 relative z-10 flex flex-col items-center">
      <h1 className="font-bold mb-3 w-full" style={{
        fontSize: "clamp(1.8rem, 8vw, 2.8rem)",
        letterSpacing: "0.15em",
        lineHeight: 1.1,
        paddingLeft: "0.15em",
        color: "#C8102E",
        fontFamily: "'BankGothic', 'Bank Gothic', sans-serif"
      }}>
        {COMPANY_NAME}
      </h1>
      
      <p className="font-bold text-slate-900 uppercase px-2 tracking-[0.2em] text-[11px] max-w-sm" style={{ lineHeight: 1.6 }}>
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
    <div className="w-full bg-[#C8102E] text-white py-5 px-4 shadow-md mb-8 relative z-10">
      <div className="flex flex-col gap-2.5 max-w-md mx-auto items-center text-center">
        {certs.map((text, i) => (
          <div key={i} className="flex items-center justify-center gap-2">
            <CheckCircle2 size={12} className="text-white shrink-0" />
            <span className="text-[10.5px] font-bold tracking-widest leading-snug">
              {text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ============================================================
// Shared Hover Helpers for Action Cards
// ============================================================
function useHover(hoverStyle: React.CSSProperties, baseStyle: React.CSSProperties) {
  return {
    onMouseEnter: (e: React.MouseEvent<HTMLElement>) => Object.assign((e.currentTarget as HTMLElement).style, hoverStyle),
    onMouseLeave: (e: React.MouseEvent<HTMLElement>) => Object.assign((e.currentTarget as HTMLElement).style, baseStyle),
    onMouseDown:  (e: React.MouseEvent<HTMLElement>) => { (e.currentTarget as HTMLElement).style.transform = "scale(0.98)"; },
    onMouseUp:    (e: React.MouseEvent<HTMLElement>) => Object.assign((e.currentTarget as HTMLElement).style, hoverStyle),
  };
}

// ============================================================
// Action Cards Stack
// ============================================================
function ActionCards({ onOpenPdf }: { onOpenPdf: () => void }) {
  // Base White Card
  const cardBase: React.CSSProperties = {
    background: "#ffffff",
    border: "1px solid #e2e8f0",
    borderRadius: "12px",
    padding: "16px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    textDecoration: "none",
    boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
    transition: "transform 0.2s, box-shadow 0.2s, border-color 0.2s",
    cursor: "pointer",
  };

  const hoverCard = useHover(
    { transform: "translateY(-3px)", boxShadow: "0 8px 20px rgba(0,0,0,0.08)", borderColor: "#cbd5e1" },
    { transform: "translateY(0)", boxShadow: "0 2px 10px rgba(0,0,0,0.04)", borderColor: "#e2e8f0" }
  );

  return (
    <section className="flex flex-col gap-4 px-4 w-full max-w-md mx-auto mb-8 relative z-10">
      
      {/* Card 1 - Catalogue */}
      <button onClick={onOpenPdf} style={cardBase} {...hoverCard}>
        <div className="flex items-center gap-4 text-left">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#C8102E] text-white shrink-0 shadow-md">
            <FileText size={22} />
          </div>
          <div>
            <span className="block font-bold text-slate-800 text-[16px] mb-0.5">View Product Catalogue</span>
            <span className="block font-medium text-slate-500 text-[11px] tracking-wide">Tap to preview brochure in-app</span>
          </div>
        </div>
        <ChevronRight size={20} className="text-slate-400" />
      </button>

      {/* Card 2 - WhatsApp */}
      <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" style={cardBase} {...hoverCard}>
        <div className="flex items-center gap-4 text-left">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] text-white shrink-0 shadow-md">
            <WhatsAppIcon size={24} color="#ffffff" />
          </div>
          <div>
            <span className="block font-bold text-slate-800 text-[16px] mb-0.5">Connect on WhatsApp</span>
            <span className="block font-medium text-slate-500 text-[11px] tracking-wide">+91 93770 38505</span>
          </div>
        </div>
        <ChevronRight size={20} className="text-slate-400" />
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
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/chrome/chrome-original.svg" alt="Website" className="w-10 h-10 object-contain drop-shadow-sm" />,
      label: "WEBSITE"
    },
    {
      id: "c-phone",
      href: `tel:${PHONE_NUMBER}`,
      icon: (
        <div className="w-10 h-10 bg-[#1A73E8] rounded-full flex items-center justify-center shadow-sm drop-shadow-sm">
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
          </svg>
        </div>
      ),
      label: "CALL US"
    },
    {
      id: "c-email",
      href: `mailto:${EMAIL}`,
      icon: <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" alt="Email" className="w-10 h-10 object-contain drop-shadow-sm" />,
      label: "EMAIL"
    },
    {
      id: "c-maps",
      href: GOOGLE_MAPS_URL,
      icon: <img src="https://upload.wikimedia.org/wikipedia/commons/a/aa/Google_Maps_icon_%282020%29.svg" alt="Location" className="w-10 h-10 object-contain drop-shadow-sm" />,
      label: "LOCATION"
    },
  ];

  return (
    <div className="px-4 max-w-md mx-auto w-full mb-10 relative z-10">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {items.map((c) => (
          <a key={c.id} href={c.href} target="_blank" rel="noopener noreferrer" 
            className="flex flex-col items-center justify-center gap-3 p-4 bg-white rounded-xl border border-slate-200 transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-slate-300"
          >
            <div className="flex items-center justify-center w-12 h-12">
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
    <footer className="w-full text-center pb-8 px-6 mt-auto relative z-10">
      <div className="w-16 h-0.5 bg-slate-300 mx-auto mb-6"></div>
      <p className="text-[11px] font-bold text-slate-700 leading-relaxed max-w-xs mx-auto mb-4 tracking-wide">
        {ADDRESS}
      </p>
      <p className="text-[9px] font-bold text-slate-400 tracking-[0.2em]">
        &copy; {new Date().getFullYear()} {COMPANY_NAME}.<br/>ALL RIGHTS RESERVED.
      </p>
    </footer>
  );
}

// ============================================================
// PDF Modal Viewer
// ============================================================
function PdfModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-slate-900/80 backdrop-blur-sm" role="dialog" aria-modal="true">
      {/* Top Header - Solid Crimson */}
      <div className="flex items-center justify-between p-3.5 bg-[#C8102E] shadow-xl shrink-0">
        <div className="flex items-center gap-3 min-w-0">
          <div className="bg-white/20 p-2 rounded-full">
            <FileText size={16} className="text-white" />
          </div>
          <span className="font-bold text-white text-[13px] tracking-widest truncate" style={{ fontFamily: "'BankGothic', 'Bank Gothic', sans-serif" }}>
            {COMPANY_NAME}
          </span>
        </div>
        
        <div className="flex items-center gap-3 shrink-0 pl-2">
          <a 
            href={CATALOGUE_URL} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 bg-white text-[#C8102E] rounded-md font-bold text-[11px] shadow-sm hover:bg-slate-100 transition-colors tracking-wider"
          >
            <Download size={14} />
            DOWNLOAD
          </a>
          <button 
            onClick={onClose}
            className="p-1.5 text-white/80 hover:text-white hover:bg-white/20 rounded-md transition-colors"
            aria-label="Close"
          >
            <X size={22} />
          </button>
        </div>
      </div>
      
      {/* Viewer Body */}
      <div className="flex-1 p-2 md:p-6 overflow-hidden">
        <iframe
          src={CATALOGUE_URL}
          title="Catalogue"
          className="w-full h-full bg-white rounded-lg shadow-2xl border-0"
        />
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

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        @font-face {
          font-family: 'BankGothic';
          src: local('BankGothic Md BT'), local('Bank Gothic'), local('BankGothic');
        }
        body { 
          margin: 0;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          -webkit-font-smoothing: antialiased;
          background-color: #f8fafc;
        }
      `}</style>
    </>
  );
}