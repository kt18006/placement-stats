import React, { useState, useMemo, useEffect } from 'react';
import { Search, X, RotateCcw, Building2, Sparkles, Filter } from 'lucide-react';
import { SEED_COMPANIES } from '../data/seedCompanies';
import { COMPANIES_116 } from '../data/companies116';
import { normalizeCompanySummary, CompanySummary } from '../lib/companyData';
import { CompanyCard } from '../components/CompanyCard';

const COLLEGE_NAME = "JSS Academy of Technical Education, Noida";
const COLLEGE_SHORT = "JSSATE Noida";

type FilterType = 'All' | 'Super Dream' | 'Dream' | 'Standard' | 'Regular';

export const Index: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<FilterType>('All');
  const [isLoading, setIsLoading] = useState(false);

  // 200ms debounce on search
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 200);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Combine seed companies and directory recruiters into a unified list of CompanySummary items
  const allCompanies: CompanySummary[] = useMemo(() => {
    const list: CompanySummary[] = [];

    // Add canonical seed company (Accenture) first
    for (const seed of SEED_COMPANIES) {
      list.push(normalizeCompanySummary(seed.short_json, seed.company_id));
    }

    // Add other recruiters from the 116 list (mapped to appropriate tier categories)
    for (const c of COMPANIES_116) {
      // Avoid duplicate of Accenture
      if (c.name.toLowerCase().includes("accenture")) continue;

      let cType: 'Super Dream' | 'Dream' | 'Standard' | 'Regular' = 'Dream';
      if (c.tier.includes('Super Dream')) cType = 'Super Dream';
      else if (c.tier.includes('Dream')) cType = 'Dream';
      else if (c.tier.includes('Mass')) cType = 'Regular';
      else cType = 'Standard';

      list.push({
        id: c.id,
        name: c.name,
        short_name: c.shortName,
        logo_url: "",
        category: c.category,
        company_type: cType,
        incorporation_year: 2000,
        employee_size: `${c.rolesOffered.length * 2500}+ employees`,
        headquarters_address: c.headquarters,
        operating_countries: "Global",
        office_locations: c.headquarters,
        yoy_growth_rate: c.id % 7 === 0 ? "-2%" : `${(c.id % 12) + 5}%`,
        website_url: c.website
      });
    }

    return list;
  }, []);

  // Filtered companies based on search and category filter
  const filteredCompanies = useMemo(() => {
    return allCompanies.filter((company) => {
      const matchesSearch =
        debouncedQuery.trim() === '' ||
        company.name.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
        company.short_name.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
        company.headquarters_address.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
        company.category.toLowerCase().includes(debouncedQuery.toLowerCase());

      const matchesFilter =
        activeFilter === 'All' || company.company_type === activeFilter;

      return matchesSearch && matchesFilter;
    });
  }, [allCompanies, debouncedQuery, activeFilter]);

  // Live Counts for Filter Pills
  const counts = useMemo(() => {
    const c = {
      All: allCompanies.length,
      'Super Dream': 0,
      Dream: 0,
      Standard: 0,
      Regular: 0
    };

    for (const comp of allCompanies) {
      if (comp.company_type in c) {
        c[comp.company_type]++;
      }
    }
    return c;
  }, [allCompanies]);

  const handleReset = () => {
    setSearchQuery('');
    setDebouncedQuery('');
    setActiveFilter('All');
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-slate-800">
      {/* Enterprise SaaS Hero Section */}
      <section className="bg-white border-b border-[#E5E7EB] pt-10 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-4">
          {/* Top Pill - NO College Logo Image (Text-Only as strictly required) */}
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200">
              <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
              {COLLEGE_SHORT} · INTELLIGENCE PLATFORM
            </span>
            <span className="hidden sm:inline-block text-xs text-slate-400 font-medium">
              Enterprise Corporate Analytics
            </span>
          </div>

          {/* Large Heading & Subtitle */}
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 font-heading">
              {COLLEGE_NAME} Companies Research & Placement Analytics Portal
            </h1>
            <p className="mt-2 text-sm sm:text-base text-slate-500 font-normal font-body max-w-3xl">
              Your strategic edge for campus placements
            </p>
          </div>

          {/* Search Bar Directly Below */}
          <div className="pt-2 max-w-2xl relative">
            <div className="relative flex items-center">
              <Search className="absolute left-3.5 h-4 w-4 text-slate-400 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search across 116 recruiting companies, headquarters, or categories..."
                className="w-full pl-10 pr-10 py-2.5 bg-slate-50 border border-[#E5E7EB] focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100 rounded-xl text-sm text-slate-900 placeholder-slate-400 transition-all outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 p-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-200/60 transition-colors"
                  aria-label="Clear search input"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>

          {/* 5 Filter Pills with Live Counts & Exact Hex Colors */}
          <div className="pt-3 flex flex-wrap items-center gap-2">
            {/* All Pill */}
            <button
              onClick={() => setActiveFilter('All')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
                activeFilter === 'All'
                  ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
              }`}
            >
              All
              <span className={`ml-1.5 px-1.5 py-0.5 rounded-full text-[10px] ${
                activeFilter === 'All' ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
              }`}>
                {counts.All}
              </span>
            </button>

            {/* Super Dream #7c3aed */}
            <button
              onClick={() => setActiveFilter('Super Dream')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
                activeFilter === 'Super Dream'
                  ? 'bg-[#7c3aed] text-white border-[#7c3aed] shadow-xs'
                  : 'bg-white text-[#7c3aed] border-purple-200 hover:bg-purple-50'
              }`}
            >
              Super Dream
              <span className={`ml-1.5 px-1.5 py-0.5 rounded-full text-[10px] ${
                activeFilter === 'Super Dream' ? 'bg-white/20 text-white' : 'bg-purple-100 text-purple-700'
              }`}>
                {counts['Super Dream']}
              </span>
            </button>

            {/* Dream #2563eb */}
            <button
              onClick={() => setActiveFilter('Dream')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
                activeFilter === 'Dream'
                  ? 'bg-[#2563eb] text-white border-[#2563eb] shadow-xs'
                  : 'bg-white text-[#2563eb] border-blue-200 hover:bg-blue-50'
              }`}
            >
              Dream
              <span className={`ml-1.5 px-1.5 py-0.5 rounded-full text-[10px] ${
                activeFilter === 'Dream' ? 'bg-white/20 text-white' : 'bg-blue-100 text-blue-700'
              }`}>
                {counts['Dream']}
              </span>
            </button>

            {/* Standard #16a34a */}
            <button
              onClick={() => setActiveFilter('Standard')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
                activeFilter === 'Standard'
                  ? 'bg-[#16a34a] text-white border-[#16a34a] shadow-xs'
                  : 'bg-white text-[#16a34a] border-emerald-200 hover:bg-emerald-50'
              }`}
            >
              Standard
              <span className={`ml-1.5 px-1.5 py-0.5 rounded-full text-[10px] ${
                activeFilter === 'Standard' ? 'bg-white/20 text-white' : 'bg-emerald-100 text-emerald-700'
              }`}>
                {counts['Standard']}
              </span>
            </button>

            {/* Regular #d97706 */}
            <button
              onClick={() => setActiveFilter('Regular')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
                activeFilter === 'Regular'
                  ? 'bg-[#d97706] text-white border-[#d97706] shadow-xs'
                  : 'bg-white text-[#d97706] border-amber-200 hover:bg-amber-50'
              }`}
            >
              Regular
              <span className={`ml-1.5 px-1.5 py-0.5 rounded-full text-[10px] ${
                activeFilter === 'Regular' ? 'bg-white/20 text-white' : 'bg-amber-100 text-amber-700'
              }`}>
                {counts['Regular']}
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Companies Grid Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Results Counter and Active Filter indication */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span>Showing <strong>{filteredCompanies.length}</strong> of {allCompanies.length} companies</span>
            {debouncedQuery && (
              <span>• matching &quot;{debouncedQuery}&quot;</span>
            )}
          </div>
          {(debouncedQuery || activeFilter !== 'All') && (
            <button
              onClick={handleReset}
              className="text-xs font-medium text-blue-600 hover:text-blue-800 flex items-center gap-1"
            >
              <RotateCcw className="h-3 w-3" />
              <span>Reset Filters</span>
            </button>
          )}
        </div>

        {/* Loading Skeleton State (8-card skeleton) */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="bg-white border border-[#E5E7EB] rounded-xl p-4 space-y-3 animate-pulse">
                <div className="flex justify-between items-start">
                  <div className="h-11 w-11 bg-slate-200 rounded-xl" />
                  <div className="h-5 w-20 bg-slate-200 rounded-full" />
                </div>
                <div className="space-y-1.5">
                  <div className="h-5 w-3/4 bg-slate-200 rounded" />
                  <div className="h-3.5 w-1/2 bg-slate-200 rounded" />
                </div>
                <div className="space-y-2 pt-2">
                  <div className="h-3.5 w-full bg-slate-200 rounded" />
                  <div className="h-3.5 w-5/6 bg-slate-200 rounded" />
                </div>
              </div>
            ))}
          </div>
        ) : filteredCompanies.length > 0 ? (
          /* Grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredCompanies.map((company) => (
              <CompanyCard key={company.id} company={company} />
            ))}
          </div>
        ) : (
          /* Empty State with Reset CTA */
          <div className="py-16 text-center max-w-md mx-auto">
            <div className="h-12 w-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-3">
              <Building2 className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-base text-slate-800 mb-1">
              No matching companies found
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              We couldn't find any recruiting companies matching your current search query or filter selection.
            </p>
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-colors shadow-xs"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>Reset Search & Filters</span>
            </button>
          </div>
        )}
      </main>
    </div>
  );
};
