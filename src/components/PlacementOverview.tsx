import React, { useState } from 'react';
import { 
  JSSATE_OVERVIEW, 
  BRANCH_STATS, 
  YEAR_TRENDS, 
  PACKAGE_TIERS, 
  SECTOR_SHARES, 
  TOP_OFFER_COMPANIES,
  BranchStat
} from '../data/placementStats';
import { 
  TrendingUp, 
  Award, 
  Building2, 
  Users, 
  DollarSign, 
  ArrowUpRight, 
  CheckCircle2, 
  Briefcase, 
  Layers, 
  ChevronRight,
  Sparkles,
  School,
  MapPin,
  ExternalLink
} from 'lucide-react';

interface PlacementOverviewProps {
  onSelectCompany: (companyName: string) => void;
  onNavigateToTab: (tab: any) => void;
}

export const PlacementOverview: React.FC<PlacementOverviewProps> = ({
  onSelectCompany,
  onNavigateToTab
}) => {
  const [selectedBranch, setSelectedBranch] = useState<BranchStat | null>(BRANCH_STATS[0]);
  const [metricTab, setMetricTab] = useState<'ctc' | 'offers'>('ctc');

  // Calculation for maximum values for SVG charts
  const maxHighest = Math.max(...YEAR_TRENDS.map(y => y.highestLpa));
  const maxOffers = Math.max(...YEAR_TRENDS.map(y => y.totalOffers));

  return (
    <div className="space-y-8 pb-12">
      {/* Hero Campus Header */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-indigo-950 to-blue-950 border border-slate-800 p-6 md:p-8 shadow-2xl text-white">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-400/30 flex items-center gap-1.5">
                <School className="h-3.5 w-3.5" /> JSS Mahavidyapeetha, Mysuru
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                AKTU Affiliated • NBA & NAAC Accredited
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-300 border border-purple-400/30 flex items-center gap-1">
                <MapPin className="h-3 w-3" /> Sector 62, Noida
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white">
              Placement Statistics & Intelligence Cell
            </h1>

            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Official Placement & Career Progression record of <strong className="text-white">JSS Academy of Technical Education, Noida</strong>. 
              Featuring comprehensive salary analytics across 10 academic departments, 116 recruiting partners, and the proprietary 163-parameter corporate intelligence engine.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onNavigateToTab('companies')}
                className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30 transition-all flex items-center gap-2"
              >
                <Building2 className="h-4 w-4" />
                <span>Explore 116 Recruiting Companies</span>
              </button>
              <button
                onClick={() => onNavigateToTab('golden_record')}
                className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-purple-600/30 hover:bg-purple-600/50 text-purple-200 border border-purple-500/40 transition-all flex items-center gap-2"
              >
                <Sparkles className="h-4 w-4 text-purple-300" />
                <span>Prompt 1 Golden Record (163 Parameters)</span>
              </button>
            </div>
          </div>

          {/* Quick Highlight Badge Card */}
          <div className="shrink-0 bg-slate-800/80 backdrop-blur-md p-5 rounded-2xl border border-slate-700/80 shadow-xl space-y-3 w-full lg:w-72">
            <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold flex items-center justify-between">
              <span>Drive Highlights</span>
              <span className="text-emerald-400 font-bold">2026 Batch</span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-baseline border-b border-slate-700 pb-2">
                <span className="text-xs text-slate-300">Highest Offer</span>
                <span className="text-lg font-black text-amber-400">₹57.20 LPA</span>
              </div>
              <div className="flex justify-between items-baseline border-b border-slate-700 pb-2">
                <span className="text-xs text-slate-300">Average Package</span>
                <span className="text-base font-bold text-blue-400">₹8.62 LPA</span>
              </div>
              <div className="flex justify-between items-baseline border-b border-slate-700 pb-2">
                <span className="text-xs text-slate-300">Eligible Placed</span>
                <span className="text-base font-bold text-emerald-400">89.4%</span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="text-xs text-slate-300">Total Offers Made</span>
                <span className="text-base font-bold text-white">1,428</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-sm hover:border-slate-700 transition-all">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-medium">Highest Package</span>
            <Award className="h-4 w-4 text-amber-400" />
          </div>
          <div className="text-2xl font-extrabold text-white">₹57.2 <span className="text-xs font-normal text-slate-400">LPA</span></div>
          <p className="text-[11px] text-amber-400/90 mt-1">Google / Amazon Off-Campus</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-sm hover:border-slate-700 transition-all">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-medium">On-Campus Peak</span>
            <Building2 className="h-4 w-4 text-purple-400" />
          </div>
          <div className="text-2xl font-extrabold text-white">₹43.3 <span className="text-xs font-normal text-slate-400">LPA</span></div>
          <p className="text-[11px] text-purple-400/90 mt-1">Adobe / Cisco / Microsoft</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-sm hover:border-slate-700 transition-all">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-medium">Average CTC</span>
            <TrendingUp className="h-4 w-4 text-blue-400" />
          </div>
          <div className="text-2xl font-extrabold text-white">₹8.62 <span className="text-xs font-normal text-slate-400">LPA</span></div>
          <p className="text-[11px] text-blue-400/90 mt-1">+14.2% YoY growth</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-sm hover:border-slate-700 transition-all">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-medium">Median CTC</span>
            <DollarSign className="h-4 w-4 text-emerald-400" />
          </div>
          <div className="text-2xl font-extrabold text-white">₹6.80 <span className="text-xs font-normal text-slate-400">LPA</span></div>
          <p className="text-[11px] text-emerald-400/90 mt-1">Robust middle distribution</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-sm hover:border-slate-700 transition-all">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-medium">Recruiting Partners</span>
            <Briefcase className="h-4 w-4 text-cyan-400" />
          </div>
          <div className="text-2xl font-extrabold text-white">116+</div>
          <p className="text-[11px] text-cyan-400/90 mt-1">All in active directory</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-sm hover:border-slate-700 transition-all">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-medium">Multiple Offers</span>
            <Users className="h-4 w-4 text-pink-400" />
          </div>
          <div className="text-2xl font-extrabold text-white">342</div>
          <p className="text-[11px] text-pink-400/90 mt-1">Dual/PPO conversions</p>
        </div>
      </div>

      {/* Salary Trends & Package Tiers Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Year-over-Year Placement Trends (7 cols) */}
        <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div>
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-blue-400" />
                Year-over-Year Salary & Offer Growth (2021 – 2026)
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Steadily escalating packages and expanding marquee recruiter base at JSSATE Noida
              </p>
            </div>
            <div className="flex items-center gap-1 bg-slate-800 p-1 rounded-lg self-start">
              <button
                onClick={() => setMetricTab('ctc')}
                className={`px-2.5 py-1 text-xs rounded-md font-medium transition-all ${
                  metricTab === 'ctc' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                CTC Metric (LPA)
              </button>
              <button
                onClick={() => setMetricTab('offers')}
                className={`px-2.5 py-1 text-xs rounded-md font-medium transition-all ${
                  metricTab === 'offers' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Total Offers
              </button>
            </div>
          </div>

          {/* SVG Interactive Chart */}
          <div className="h-64 w-full relative">
            <svg viewBox="0 0 600 240" className="w-full h-full overflow-visible">
              <defs>
                <linearGradient id="highestGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.0" />
                </linearGradient>
                <linearGradient id="avgGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Grid Lines */}
              {[0, 1, 2, 3, 4].map(i => (
                <line
                  key={i}
                  x1="40"
                  y1={40 + i * 42}
                  x2="580"
                  y2={40 + i * 42}
                  stroke="#1e293b"
                  strokeDasharray="4 4"
                />
              ))}

              {/* Y-Axis Labels */}
              {metricTab === 'ctc' ? (
                <>
                  <text x="35" y="44" fill="#64748b" fontSize="10" textAnchor="end">60L</text>
                  <text x="35" y="86" fill="#64748b" fontSize="10" textAnchor="end">45L</text>
                  <text x="35" y="128" fill="#64748b" fontSize="10" textAnchor="end">30L</text>
                  <text x="35" y="170" fill="#64748b" fontSize="10" textAnchor="end">15L</text>
                  <text x="35" y="212" fill="#64748b" fontSize="10" textAnchor="end">0L</text>
                </>
              ) : (
                <>
                  <text x="35" y="44" fill="#64748b" fontSize="10" textAnchor="end">1500</text>
                  <text x="35" y="86" fill="#64748b" fontSize="10" textAnchor="end">1200</text>
                  <text x="35" y="128" fill="#64748b" fontSize="10" textAnchor="end">900</text>
                  <text x="35" y="170" fill="#64748b" fontSize="10" textAnchor="end">600</text>
                  <text x="35" y="212" fill="#64748b" fontSize="10" textAnchor="end">0</text>
                </>
              )}

              {/* Data Bars / Line points */}
              {YEAR_TRENDS.map((d, idx) => {
                const x = 70 + idx * 95;
                if (metricTab === 'ctc') {
                  // Scale: 60 LPA -> 40px, 0 LPA -> 210px
                  const yHighest = 210 - (d.highestLpa / 60) * 170;
                  const yAvg = 210 - (d.avgLpa / 60) * 170;
                  const yMedian = 210 - (d.medianLpa / 60) * 170;

                  return (
                    <g key={d.year} className="group cursor-pointer">
                      {/* Bar for Average CTC */}
                      <rect
                        x={x - 14}
                        y={yAvg}
                        width="28"
                        height={210 - yAvg}
                        rx="4"
                        fill="#3b82f6"
                        opacity="0.8"
                        className="hover:opacity-100 transition-opacity"
                      />
                      {/* Dot for Highest CTC */}
                      <circle cx={x} cy={yHighest} r="5" fill="#a855f7" stroke="#1e1b4b" strokeWidth="2" />
                      {/* Text value for highest */}
                      <text x={x} y={yHighest - 8} fill="#c084fc" fontSize="10" fontWeight="bold" textAnchor="middle">
                        ₹{d.highestLpa}
                      </text>
                      {/* Text value for avg inside or above bar */}
                      <text x={x} y={yAvg - 4} fill="#93c5fd" fontSize="9" textAnchor="middle">
                        ₹{d.avgLpa}
                      </text>
                      {/* Year label */}
                      <text x={x} y="228" fill="#94a3b8" fontSize="11" textAnchor="middle" fontWeight="500">
                        '{String(d.year).slice(2)}
                      </text>
                    </g>
                  );
                } else {
                  // Total offers bar
                  const yOffers = 210 - (d.totalOffers / 1600) * 170;
                  return (
                    <g key={d.year} className="group cursor-pointer">
                      <rect
                        x={x - 18}
                        y={yOffers}
                        width="36"
                        height={210 - yOffers}
                        rx="5"
                        fill="#6366f1"
                        opacity="0.85"
                        className="hover:opacity-100 transition-opacity"
                      />
                      <text x={x} y={yOffers - 8} fill="#a5b4fc" fontSize="10" fontWeight="bold" textAnchor="middle">
                        {d.totalOffers}
                      </text>
                      <text x={x} y={yOffers + 18} fill="#ffffff" fontSize="9" textAnchor="middle">
                        {d.placedPercentage}%
                      </text>
                      <text x={x} y="228" fill="#94a3b8" fontSize="11" textAnchor="middle">
                        '{String(d.year).slice(2)}
                      </text>
                    </g>
                  );
                }
              })}
            </svg>
          </div>

          {/* Chart Legend */}
          <div className="mt-4 pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between text-xs text-slate-400">
            {metricTab === 'ctc' ? (
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-purple-500" /> Highest Offer (LPA)
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-sm bg-blue-500" /> Average Package (LPA)
                </span>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-sm bg-indigo-500" /> Total Offers Made
                </span>
                <span className="text-slate-400">
                  Label inside bar: Eligible Placed %
                </span>
              </div>
            )}
            <span className="text-[11px] text-slate-400">Data source: JSSATE T&P Placement Audits</span>
          </div>
        </div>

        {/* Package Tiers Distribution (5 cols) */}
        <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                <Layers className="h-5 w-5 text-purple-400" />
                Package Tier Distribution
              </h2>
              <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded border border-purple-500/30">
                1,428 Total Offers
              </span>
            </div>

            <p className="text-xs text-slate-400 mb-5">
              JSSATE Noida categorizes campus selections into 4 distinct recruitment tiers:
            </p>

            <div className="space-y-4">
              {PACKAGE_TIERS.map((tier) => (
                <div key={tier.tierName} className="p-3 bg-slate-800/60 rounded-xl border border-slate-700/60">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full" style={{ backgroundColor: tier.color }} />
                      <span className="text-sm font-semibold text-white">{tier.tierName}</span>
                      <span className="text-xs text-slate-400 font-mono">({tier.bracket})</span>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-bold text-white">{tier.offerCount}</span>
                      <span className="text-xs text-slate-400 ml-1 font-mono">({tier.percentage}%)</span>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="h-2 w-full bg-slate-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full transition-all duration-700" 
                      style={{ width: `${tier.percentage}%`, backgroundColor: tier.color }} 
                    />
                  </div>

                  {/* Recruiter Pills */}
                  <div className="mt-2 flex flex-wrap gap-1">
                    {tier.sampleCompanies.slice(0, 5).map(c => (
                      <button
                        key={c}
                        onClick={() => onSelectCompany(c)}
                        className="text-[10px] px-2 py-0.5 rounded bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors border border-slate-700/50"
                      >
                        {c}
                      </button>
                    ))}
                    {tier.sampleCompanies.length > 5 && (
                      <span className="text-[10px] px-1 text-slate-400">
                        +{tier.sampleCompanies.length - 5} more
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <span>Super Dream + Dream Total:</span>
            <span className="font-bold text-emerald-400">418 Offers (29.3% of Batch)</span>
          </div>
        </div>
      </div>

      {/* Branch-Wise Placement Statistics */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
          <div>
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <School className="h-5 w-5 text-indigo-400" />
              Department & Branch-Wise Placement Matrix
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Comprehensive breakdown of eligible vs placed students, package metrics, and top recruiting partners by discipline
            </p>
          </div>
          <span className="text-xs text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full font-medium self-start">
            10 Academic Programs Tracked
          </span>
        </div>

        {/* Branch Table */}
        <div className="overflow-x-auto rounded-xl border border-slate-800">
          <table className="w-full text-left text-xs sm:text-sm text-slate-300">
            <thead className="bg-slate-800/80 text-slate-400 text-xs uppercase tracking-wider font-semibold border-b border-slate-700">
              <tr>
                <th className="py-3 px-4">Branch Code & Name</th>
                <th className="py-3 px-3 text-center">Batch Size</th>
                <th className="py-3 px-3 text-center">Eligible</th>
                <th className="py-3 px-3 text-center">Placed</th>
                <th className="py-3 px-3 text-center">Placed %</th>
                <th className="py-3 px-3 text-right">Highest CTC</th>
                <th className="py-3 px-3 text-right">Average CTC</th>
                <th className="py-3 px-4">Top Recruiters</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 font-normal">
              {BRANCH_STATS.map((b) => (
                <tr 
                  key={b.code} 
                  onClick={() => setSelectedBranch(b)}
                  className={`cursor-pointer transition-colors ${
                    selectedBranch?.code === b.code 
                      ? 'bg-blue-950/40 text-white font-medium border-l-4 border-l-blue-500' 
                      : 'hover:bg-slate-800/40 text-slate-300'
                  }`}
                >
                  <td className="py-3 px-4">
                    <div className="font-bold text-white flex items-center gap-1.5">
                      <span className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-xs font-mono text-blue-300">
                        {b.code}
                      </span>
                      <span>{b.name}</span>
                    </div>
                  </td>
                  <td className="py-3 px-3 text-center text-slate-400 font-mono">{b.totalStudents}</td>
                  <td className="py-3 px-3 text-center text-slate-400 font-mono">{b.eligibleStudents}</td>
                  <td className="py-3 px-3 text-center font-bold text-white font-mono">{b.placedStudents}</td>
                  <td className="py-3 px-3 text-center">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                      b.placementRate >= 95 ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' :
                      b.placementRate >= 85 ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                      'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                    }`}>
                      {b.placementRate}%
                    </span>
                  </td>
                  <td className="py-3 px-3 text-right font-bold text-purple-400 font-mono">₹{b.highestCtcLpa} LPA</td>
                  <td className="py-3 px-3 text-right font-semibold text-blue-400 font-mono">₹{b.avgCtcLpa} LPA</td>
                  <td className="py-3 px-4">
                    <div className="flex flex-wrap gap-1 max-w-xs">
                      {b.topRecruiters.slice(0, 3).map((r) => (
                        <span key={r} className="text-[10px] bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded">
                          {r}
                        </span>
                      ))}
                      {b.topRecruiters.length > 3 && (
                        <span className="text-[10px] text-slate-400">+{b.topRecruiters.length - 3}</span>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Selected Branch Highlight Drawer */}
        {selectedBranch && (
          <div className="mt-5 p-4 rounded-xl bg-slate-800/60 border border-slate-700/80 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-white text-base">
                  {selectedBranch.name} ({selectedBranch.code})
                </span>
                <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full font-semibold">
                  {selectedBranch.placedStudents} Placed of {selectedBranch.eligibleStudents} Eligible
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Highest: <strong className="text-purple-300">₹{selectedBranch.highestCtcLpa} LPA</strong> • 
                Average: <strong className="text-blue-300">₹{selectedBranch.avgCtcLpa} LPA</strong> • 
                Median: <strong className="text-slate-200">₹{selectedBranch.medianCtcLpa} LPA</strong> • 
                Dual/PPO Offers: <strong className="text-emerald-300">{selectedBranch.dualOffers}</strong>
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => onNavigateToTab('companies')}
                className="px-3 py-1.5 rounded-lg text-xs bg-blue-600 hover:bg-blue-500 text-white font-medium flex items-center gap-1.5 transition-all"
              >
                <span>Filter Companies for {selectedBranch.code}</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Top Offer Recruiters & Sector Share */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Top Volume Recruiters (7 cols) */}
        <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Award className="h-5 w-5 text-amber-400" />
              Major Recruiters by Selection Volume (Offers Made)
            </h2>
            <span className="text-xs text-slate-400">JSSATE Noida Drives</span>
          </div>

          <div className="space-y-3">
            {TOP_OFFER_COMPANIES.slice(0, 8).map((comp, idx) => (
              <div 
                key={comp.name} 
                onClick={() => onSelectCompany(comp.name)}
                className="group p-3 rounded-xl bg-slate-800/40 hover:bg-slate-800/80 border border-slate-700/50 hover:border-blue-500/50 transition-all flex items-center justify-between cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <span className="h-6 w-6 rounded-md bg-slate-800 border border-slate-700 text-slate-300 text-xs font-bold flex items-center justify-center">
                    #{idx + 1}
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors flex items-center gap-2">
                      {comp.name}
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-xs text-slate-400">Roles: {comp.roles}</p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-sm font-bold text-emerald-400 font-mono">{comp.offers} Offers</span>
                  <p className="text-xs text-slate-400">Avg CTC: {comp.avgCtc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800 text-center">
            <button
              onClick={() => onNavigateToTab('companies')}
              className="text-xs text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center gap-1"
            >
              <span>View all 116 recruiting companies with package details</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* Sector Distribution (5 cols) */}
        <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-emerald-400" />
                Recruitment Share by Sector
              </h2>
              <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded">
                Multi-Industry
              </span>
            </div>

            <p className="text-xs text-slate-400 mb-4">
              Proportion of total hiring across distinct technological and engineering sectors:
            </p>

            <div className="space-y-3">
              {SECTOR_SHARES.map((s) => (
                <div key={s.sector} className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-white">{s.sector}</span>
                    <span className="font-mono text-slate-300">{s.percentage}% ({s.companiesCount} cos)</span>
                  </div>
                  <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"
                      style={{ width: `${s.percentage * 2.2}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>Average package: ₹{s.avgPackageLpa} LPA</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Notice Banner */}
          <div className="mt-6 p-3.5 rounded-xl bg-blue-950/40 border border-blue-900/60 text-xs text-slate-300">
            <p className="font-semibold text-blue-300 flex items-center gap-1.5 mb-1">
              <CheckCircle2 className="h-4 w-4 text-blue-400" /> JSSATE Placement Policy
            </p>
            Students holding an offer in the Standard/Core category are eligible to sit for Dream and Super Dream companies with higher CTC ceilings.
          </div>
        </div>
      </div>
    </div>
  );
};
