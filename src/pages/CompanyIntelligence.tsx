import React, { useState, useEffect, useRef, useMemo, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Globe, 
  Linkedin, 
  ExternalLink, 
  Star, 
  Video, 
  CheckCircle, 
  AlertCircle,
  Copy,
  ChevronDown
} from 'lucide-react';
import { useCompany } from '../context/CompanyContext';
import { CompanyLogo } from '../components/CompanyLogo';
import { buildIntelligenceSections, IntelligenceSection, IntelligenceField } from '../data/intelligenceData';
import { isNullish, splitItems } from '../lib/companyData';

// Helper to render values with auto-pill detection on ; and ,
const RenderFieldValue: React.FC<{ field: IntelligenceField }> = memo(({ field }) => {
  const { value, type } = field;

  if (isNullish(value)) {
    return (
      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-normal bg-slate-100 text-slate-400 border border-slate-200">
        Not Available
      </span>
    );
  }

  const strValue = String(value).trim();

  // URL rendering
  if (type === 'url' || strValue.startsWith('http://') || strValue.startsWith('https://')) {
    const urls = strValue.split(/;\s*/).filter(Boolean);
    return (
      <div className="flex flex-wrap gap-2">
        {urls.map((u, i) => (
          <a
            key={i}
            href={u}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-800 hover:underline font-medium break-all"
          >
            <Globe className="h-3 w-3 shrink-0" />
            <span>{u}</span>
            <ExternalLink className="h-2.5 w-2.5 shrink-0" />
          </a>
        ))}
      </div>
    );
  }

  // Video URL
  if (type === 'video' || strValue.includes('youtube.com') || strValue.includes('youtu.be')) {
    const videos = strValue.split(/;\s*/).filter(Boolean);
    return (
      <div className="flex flex-wrap gap-2">
        {videos.map((v, i) => (
          <a
            key={i}
            href={v}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs bg-red-50 text-red-700 hover:bg-red-100 border border-red-200 font-medium transition-colors"
          >
            <Video className="h-3.5 w-3.5 shrink-0" />
            <span>Watch Showcase Video</span>
            <ExternalLink className="h-2.5 w-2.5 shrink-0" />
          </a>
        ))}
      </div>
    );
  }

  // Rating
  if (type === 'rating' || /^\d+(\.\d+)?\s*\/\s*5/.test(strValue)) {
    return (
      <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-xs font-semibold">
        <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-500" />
        <span>{strValue}</span>
      </div>
    );
  }

  // Semicolon list or composite items -> auto-pill detection
  if (type === 'list' || strValue.includes(';') || (strValue.includes(',') && strValue.length < 150)) {
    const items = strValue
      .split(/;\s*/)
      .map(s => s.trim())
      .filter(s => s.length > 0 && !isNullish(s));

    if (items.length > 1) {
      return (
        <div className="flex flex-wrap gap-1.5">
          {items.map((item, idx) => (
            <span
              key={idx}
              className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-slate-50 text-slate-700 border border-slate-200"
            >
              {item}
            </span>
          ))}
        </div>
      );
    }
  }

  // Standard paragraph or text
  return (
    <div className="text-xs sm:text-sm text-slate-700 leading-relaxed break-words whitespace-pre-line">
      {strValue}
    </div>
  );
});

RenderFieldValue.displayName = "RenderFieldValue";

// Memoized Section Card
interface SectionCardProps {
  section: IntelligenceSection;
  index: number;
}

const SectionCard = memo<SectionCardProps>(({ section, index }) => {
  return (
    <section
      id={`section-${index}`}
      className="bg-white border border-[#E5E7EB] rounded-xl shadow-xs overflow-hidden scroll-mt-28 transition-all hover:border-slate-300"
    >
      {/* Header */}
      <div className="px-5 py-3.5 bg-slate-50/80 border-b border-[#E5E7EB] flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded-lg bg-white border border-slate-200 shadow-2xs">
            {section.icon}
          </div>
          <h2 className="text-sm font-bold text-slate-900 font-heading">
            {section.title}
          </h2>
        </div>
        <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-slate-200/70 text-slate-600">
          {section.fieldCount} fields
        </span>
      </div>

      {/* Field Rows */}
      <div className="divide-y divide-slate-100">
        {section.fields.map((field) => (
          <div
            key={field.key}
            className="px-5 py-3 flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 hover:bg-slate-50/50 transition-colors"
          >
            <div className="sm:w-1/3 shrink-0">
              <span className="text-xs font-semibold text-slate-600 block">
                {field.label}
              </span>
            </div>
            <div className="sm:w-2/3 min-w-0">
              <RenderFieldValue field={field} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

SectionCard.displayName = "SectionCard";

export const CompanyIntelligence: React.FC = () => {
  const navigate = useNavigate();
  const { selectedSummary, selectedProfile, isLoading } = useCompany();
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const isScrollingRef = useRef(false);
  const tabListRef = useRef<HTMLDivElement>(null);

  // Route Guard: If company data is missing and finished loading, navigate("/")
  useEffect(() => {
    if (!isLoading && !selectedSummary) {
      navigate("/", { replace: true });
    }
  }, [isLoading, selectedSummary, navigate]);

  const sections = useMemo(() => {
    return buildIntelligenceSections(selectedProfile || undefined);
  }, [selectedProfile]);

  // Scroll to section handler
  const scrollToSection = (index: number) => {
    setActiveTabIdx(index);
    isScrollingRef.current = true;
    const el = document.getElementById(`section-${index}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Auto-center tab
    if (tabListRef.current) {
      const tabButton = tabListRef.current.children[index] as HTMLElement;
      if (tabButton) {
        tabButton.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    }

    setTimeout(() => {
      isScrollingRef.current = false;
    }, 600);
  };

  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      if (isScrollingRef.current) return;

      const scrollPosition = window.scrollY + 140;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(`section-${i}`);
        if (el && el.offsetTop <= scrollPosition) {
          if (activeTabIdx !== i) {
            setActiveTabIdx(i);
            // Center active tab in horizontal scroll
            if (tabListRef.current) {
              const tabButton = tabListRef.current.children[i] as HTMLElement;
              if (tabButton) {
                tabButton.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
              }
            }
          }
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections, activeTabIdx]);

  if (isLoading || !selectedSummary) {
    return (
      <div className="py-20 text-center">
        <div className="inline-block h-6 w-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mb-3" />
        <p className="text-xs text-slate-500 font-medium">Hydrating intelligence data...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Sticky Top Information Bar (No Hero Section, No Gradient) */}
      <div className="sticky top-14 z-20 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-3 bg-white border-b border-[#E5E7EB] shadow-2xs flex flex-wrap items-center justify-between gap-3">
        {/* Left: Logo + Company Name + Industry Badge */}
        <div className="flex items-center gap-3 min-w-0">
          <CompanyLogo
            name={selectedSummary.name}
            logoUrl={selectedSummary.logo_url}
            websiteUrl={selectedSummary.website_url}
            size="md"
          />
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h1 className="text-base sm:text-lg font-bold text-slate-900 truncate font-heading">
                {selectedSummary.name}
              </h1>
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 shrink-0">
                {selectedSummary.category}
              </span>
            </div>
            <p className="text-xs text-slate-500 truncate">
              {selectedSummary.headquarters_address} • {selectedSummary.company_type} Category
            </p>
          </div>
        </div>

        {/* Right: Website Button + LinkedIn Button */}
        <div className="flex items-center gap-2">
          {selectedSummary.website_url && !isNullish(selectedSummary.website_url) && (
            <a
              href={selectedSummary.website_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 hover:text-blue-600 transition-colors shadow-2xs"
            >
              <Globe className="h-3.5 w-3.5 text-slate-500" />
              <span>Website</span>
              <ExternalLink className="h-3 w-3 text-slate-400" />
            </a>
          )}

          {selectedProfile?.linkedin_url && !isNullish(selectedProfile.linkedin_url) && (
            <a
              href={selectedProfile.linkedin_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 transition-colors shadow-2xs"
            >
              <Linkedin className="h-3.5 w-3.5 text-blue-600" />
              <span>LinkedIn</span>
              <ExternalLink className="h-3 w-3 text-blue-500" />
            </a>
          )}
        </div>
      </div>

      {/* Sticky Tab Bar (22 Tabs) with scroll-spy */}
      <div className="sticky top-[118px] z-10 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-2 bg-white/95 backdrop-blur-xs border-b border-[#E5E7EB]">
        <div
          ref={tabListRef}
          className="flex items-center gap-1 overflow-x-auto no-scrollbar scroll-smooth py-1"
        >
          {sections.map((section, idx) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(idx)}
              className={`shrink-0 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                activeTabIdx === idx
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <span>{section.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main 22 Intelligence Sections Container */}
      <div className="space-y-6 pt-2">
        {sections.map((section, index) => (
          <SectionCard key={section.id} section={section} index={index} />
        ))}
      </div>
    </div>
  );
};
