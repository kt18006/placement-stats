import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Users, TrendingUp, TrendingDown, ArrowRight } from 'lucide-react';
import { CompanySummary, isNullish } from '../lib/companyData';
import { CompanyLogo } from './CompanyLogo';
import { useCompany } from '../context/CompanyContext';

export interface CompanyCardProps {
  company: CompanySummary;
}

export const CompanyCard = memo<CompanyCardProps>(({ company }) => {
  const navigate = useNavigate();
  const { setSelectedCompany } = useCompany();

  const handleCardClick = () => {
    // 1. Save selected-company to localStorage
    const meta = {
      companyId: company.id,
      companyName: company.name,
      logoUrl: company.logo_url
    };
    try {
      localStorage.setItem("selected-company", JSON.stringify(meta));
    } catch {
      // storage quota fallback
    }

    // 2. Update CompanyContext
    setSelectedCompany(meta);

    // 3. Navigate to /company/intelligence
    navigate("/company/intelligence");
  };

  // Category Color Map (exact hex, do not substitute)
  const categoryBadgeStyles: Record<string, { bg: string; text: string; border: string }> = {
    'Super Dream': { bg: 'bg-[#7c3aed]/10', text: 'text-[#7c3aed]', border: 'border-[#7c3aed]/25' },
    'Dream': { bg: 'bg-[#2563eb]/10', text: 'text-[#2563eb]', border: 'border-[#2563eb]/25' },
    'Standard': { bg: 'bg-[#16a34a]/10', text: 'text-[#16a34a]', border: 'border-[#16a34a]/25' },
    'Regular': { bg: 'bg-[#d97706]/10', text: 'text-[#d97706]', border: 'border-[#d97706]/25' }
  };

  const badgeStyle = categoryBadgeStyles[company.company_type] || categoryBadgeStyles['Dream'];

  // Check growth rate
  const isNegativeGrowth = company.yoy_growth_rate.trim().startsWith('-');

  return (
    <div
      onClick={handleCardClick}
      className="group relative bg-white border border-[#E5E7EB] hover:border-blue-400 rounded-xl p-4 transition-all duration-200 cursor-pointer shadow-xs hover:shadow-md flex flex-col justify-between"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleCardClick();
        }
      }}
    >
      <div>
        {/* Header: Logo & Badge */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <CompanyLogo
            name={company.name}
            logoUrl={company.logo_url}
            websiteUrl={company.website_url}
            size="md"
          />
          <span 
            className={`text-[11px] font-semibold px-2 py-0.5 rounded-full border ${badgeStyle.bg} ${badgeStyle.text} ${badgeStyle.border}`}
          >
            {company.company_type}
          </span>
        </div>

        {/* Company Name & Short Name */}
        <div className="mb-3">
          <h3 className="font-bold text-base text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">
            {company.name}
          </h3>
          <p className="text-xs text-slate-500 font-medium line-clamp-1">
            {company.short_name !== company.name ? company.short_name : company.category}
          </p>
        </div>

        {/* Company Meta info */}
        <div className="space-y-1.5 text-xs text-slate-600">
          {/* Headquarters */}
          <div className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-slate-400 shrink-0" />
            <span className="truncate">
              {isNullish(company.headquarters_address) ? (
                <span className="italic text-slate-400">not publicly available</span>
              ) : (
                company.headquarters_address
              )}
            </span>
          </div>

          {/* Employee Size */}
          <div className="flex items-center gap-1.5">
            <Users className="h-3.5 w-3.5 text-slate-400 shrink-0" />
            <span className="truncate">
              {isNullish(company.employee_size) ? (
                <span className="italic text-slate-400">not publicly available</span>
              ) : (
                company.employee_size
              )}
            </span>
          </div>

          {/* YoY Growth Rate */}
          <div className="flex items-center gap-1.5">
            {isNegativeGrowth ? (
              <TrendingDown className="h-3.5 w-3.5 text-rose-500 shrink-0" />
            ) : (
              <TrendingUp className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
            )}
            <span className="truncate">
              {isNullish(company.yoy_growth_rate) ? (
                <span className="italic text-slate-400">not publicly available</span>
              ) : (
                <span className={isNegativeGrowth ? "text-rose-600 font-medium" : "text-emerald-700 font-medium"}>
                  {company.yoy_growth_rate} YoY Growth
                </span>
              )}
            </span>
          </div>
        </div>
      </div>

      {/* Footer Arrow */}
      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
        <span className="text-[11px] text-slate-400 group-hover:text-blue-600 font-medium transition-colors">
          View Intelligence
        </span>
        <div className="h-6 w-6 rounded-full bg-slate-50 group-hover:bg-blue-50 text-slate-400 group-hover:text-blue-600 flex items-center justify-center transition-colors">
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </div>
      </div>
    </div>
  );
});

CompanyCard.displayName = "CompanyCard";
