import React from 'react';
import { 
  GraduationCap, 
  Building2, 
  Database, 
  BarChart3, 
  GitCompare, 
  BookOpen, 
  BellRing,
  Download,
  Award
} from 'lucide-react';
import { JSSATE_OVERVIEW } from '../data/placementStats';

export type ActiveTab = 'overview' | 'companies' | 'golden_record' | 'compare' | 'prep' | 'notices';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  selectedCompanyName?: string;
  onExportCSV: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  selectedCompanyName,
  onExportCSV
}) => {
  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white shadow-xl">
      {/* Top Banner Ticker */}
      <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 px-4 py-1.5 text-xs text-white font-medium flex items-center justify-between overflow-x-auto gap-4">
        <div className="flex items-center gap-2 shrink-0">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="font-semibold tracking-wide uppercase text-[11px] bg-white/20 px-2 py-0.5 rounded">
            Official T&P Cell
          </span>
          <span>JSS Academy of Technical Education, C-20/1, Sector 62, Noida (Affiliated to AKTU, Lucknow)</span>
        </div>
        <div className="flex items-center gap-4 text-blue-100 shrink-0 text-[11px]">
          <span>⭐ <strong>116</strong> Recruiting Partners</span>
          <span>•</span>
          <span>🚀 Highest: <strong>₹{JSSATE_OVERVIEW.highestPackage} LPA</strong></span>
          <span>•</span>
          <span>📈 Avg: <strong>₹{JSSATE_OVERVIEW.averagePackage} LPA</strong></span>
          <span>•</span>
          <span>🎯 Placed: <strong>{JSSATE_OVERVIEW.overallPlacementRate}%</strong></span>
          <span>•</span>
          <span className="bg-emerald-500/30 text-emerald-200 border border-emerald-400/40 px-2 py-0.5 rounded">
            163-Param Golden Record Engine Active
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col md:flex-row md:items-center justify-between gap-3">
        {/* Brand & Crest */}
        <div className="flex items-center gap-3">
          <div className="h-11 w-11 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-500 flex items-center justify-center shadow-lg shadow-blue-500/20 border border-white/20">
            <GraduationCap className="h-6 w-6 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-bold tracking-tight text-white flex items-center gap-1.5">
                JSSATE Noida
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30">
                  T&P Division
                </span>
              </h1>
            </div>
            <p className="text-xs text-slate-400 font-medium">
              Placement Statistics & 163-Parameter Corporate Intelligence Cell
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex items-center gap-1 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
          <button
            onClick={() => setActiveTab('overview')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeTab === 'overview'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <BarChart3 className="h-3.5 w-3.5" />
            <span>Placement Stats</span>
          </button>

          <button
            onClick={() => setActiveTab('companies')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeTab === 'companies'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Building2 className="h-3.5 w-3.5" />
            <span>116 Recruiters Directory</span>
          </button>

          <button
            onClick={() => setActiveTab('golden_record')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeTab === 'golden_record'
                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-600/30 ring-1 ring-purple-400/50'
                : 'text-purple-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Database className="h-3.5 w-3.5 text-purple-400" />
            <span>163-Param Golden Record</span>
            <span className="text-[10px] bg-purple-400/20 text-purple-200 px-1.5 py-0.2 rounded font-bold">
              Prompt 1
            </span>
          </button>

          <button
            onClick={() => setActiveTab('compare')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeTab === 'compare'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <GitCompare className="h-3.5 w-3.5" />
            <span>Company Compare</span>
          </button>

          <button
            onClick={() => setActiveTab('prep')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeTab === 'prep'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <BookOpen className="h-3.5 w-3.5" />
            <span>Interview Prep</span>
          </button>

          <button
            onClick={() => setActiveTab('notices')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeTab === 'notices'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <BellRing className="h-3.5 w-3.5 text-amber-400" />
            <span>Drive Notices</span>
          </button>
        </nav>

        {/* Quick Action Export */}
        <div className="hidden lg:flex items-center gap-2">
          <button
            onClick={onExportCSV}
            title="Download Golden Record as CSV"
            className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 px-3 py-1.5 rounded-lg text-xs font-medium transition-all"
          >
            <Download className="h-3.5 w-3.5 text-blue-400" />
            <span>Export CSV</span>
          </button>
        </div>
      </div>
    </header>
  );
};
