import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Lock, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  Zap, 
  Target, 
  BookOpen,
  AlertCircle
} from 'lucide-react';
import { useCompany } from '../context/CompanyContext';
import { CompanyLogo } from '../components/CompanyLogo';
import { SKILL_TOPICS } from '../data/skillTopics';
import { DashboardSkill, BloomLevel, CriticalityLevel } from '../lib/companyData';

// Bloom exact color map: CU #3b82f6, AP #22c55e, AS #eab308, EV #ef4444, CR #a855f7
const BLOOM_COLORS: Record<BloomLevel, { hex: string; bg: string; text: string; label: string }> = {
  CU: { hex: '#3b82f6', bg: 'bg-[#3b82f6]/10', text: 'text-[#3b82f6]', label: 'Conceptual Understanding' },
  AP: { hex: '#22c55e', bg: 'bg-[#22c55e]/10', text: 'text-[#22c55e]', label: 'Application' },
  AS: { hex: '#eab308', bg: 'bg-[#eab308]/10', text: 'text-[#eab308]', label: 'Analysis' },
  EV: { hex: '#ef4444', bg: 'bg-[#ef4444]/10', text: 'text-[#ef4444]', label: 'Evaluation' },
  CR: { hex: '#a855f7', bg: 'bg-[#a855f7]/10', text: 'text-[#a855f7]', label: 'Creation' }
};

const CRITICALITY_STYLES: Record<CriticalityLevel, { bg: string; text: string; border: string }> = {
  Critical: { bg: 'bg-red-50', text: 'text-red-700', border: 'border-red-200' },
  Important: { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200' },
  Baseline: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' }
};

export const SkillIntelligence: React.FC = () => {
  const navigate = useNavigate();
  const { selectedSummary, selectedSkills, isLoading } = useCompany();
  const [expandedSkills, setExpandedSkills] = useState<Record<number, boolean>>({});

  // Route Guard: If company data is missing and finished loading, navigate("/")
  useEffect(() => {
    if (!isLoading && !selectedSummary) {
      navigate("/", { replace: true });
    }
  }, [isLoading, selectedSummary, navigate]);

  const toggleSkillExpand = (id: number) => {
    setExpandedSkills(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const expandAll = () => {
    const allExpanded: Record<number, boolean> = {};
    for (const skill of selectedSkills) {
      allExpanded[skill.skill_set_id] = true;
    }
    setExpandedSkills(allExpanded);
  };

  const collapseAll = () => {
    setExpandedSkills({});
  };

  if (isLoading || !selectedSummary) {
    return (
      <div className="py-20 text-center">
        <div className="inline-block h-6 w-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mb-3" />
        <p className="text-xs text-slate-500 font-medium">Hydrating skill data...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header: Company Logo + "{Company} Skill Intelligence" */}
      <div className="bg-white border border-[#E5E7EB] rounded-xl p-5 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <CompanyLogo
            name={selectedSummary.name}
            logoUrl={selectedSummary.logo_url}
            websiteUrl={selectedSummary.website_url}
            size="lg"
          />
          <div>
            <h1 className="text-lg sm:text-xl font-bold text-slate-900 font-heading">
              {selectedSummary.name} Skill Intelligence
            </h1>
            <p className="text-xs text-slate-500 mt-0.5">
              Target Technical Proficiency, Bloom Taxonomic Distribution & 10-Level Topic Roadmaps
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-center">
          <button
            onClick={expandAll}
            className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200/80 transition-colors"
          >
            Expand All
          </button>
          <button
            onClick={collapseAll}
            className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200/80 transition-colors"
          >
            Collapse All
          </button>
        </div>
      </div>

      {/* Bloom 5-Col Legend */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
            Bloom&apos;s Taxonomy Competency Levels
          </span>
          <span className="text-[11px] text-slate-400">1-10 Scale Framework</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
          {(['CU', 'AP', 'AS', 'EV', 'CR'] as BloomLevel[]).map((code) => {
            const meta = BLOOM_COLORS[code];
            return (
              <div
                key={code}
                className="p-3 rounded-xl border border-slate-200 bg-white flex flex-col justify-between shadow-2xs"
              >
                <div className="flex items-center justify-between mb-1">
                  <span
                    className="text-xs font-extrabold px-2 py-0.5 rounded-md"
                    style={{ backgroundColor: `${meta.hex}15`, color: meta.hex }}
                  >
                    {code}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    {code === 'CU' ? '1–2' : code === 'AP' ? '3–4' : code === 'AS' ? '5–6' : code === 'EV' ? '7–8' : '9–10'}
                  </span>
                </div>
                <span className="text-xs font-medium text-slate-700 leading-tight">
                  {meta.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Criticality 3-Card Legend */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="p-3 rounded-xl bg-red-50/70 border border-red-200 text-red-900 flex items-start gap-2.5">
          <Zap className="h-4 w-4 text-red-600 shrink-0 mt-0.5" />
          <div>
            <h4 className="text-xs font-bold">Critical (Score ≥ 7)</h4>
            <p className="text-[11px] text-red-700 mt-0.5">
              Core evaluation criteria. High bar on technical rounds and live assessments.
            </p>
          </div>
        </div>

        <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200 text-amber-900 flex items-start gap-2.5">
          <Target className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <h4 className="text-xs font-bold">Important (Score 5–6)</h4>
            <p className="text-[11px] text-amber-700 mt-0.5">
              Essential competency. Direct questions expected in technical interviews.
            </p>
          </div>
        </div>

        <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-200 text-blue-900 flex items-start gap-2.5">
          <BookOpen className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
          <div>
            <h4 className="text-xs font-bold">Baseline (Score &lt; 5)</h4>
            <p className="text-[11px] text-blue-700 mt-0.5">
              Foundational knowledge and operational familiarity required.
            </p>
          </div>
        </div>
      </div>

      {/* Skill Cards Sorted Descending */}
      <div className="space-y-4">
        {selectedSkills.map((skill) => {
          const bloomMeta = BLOOM_COLORS[skill.bloom_level];
          const critStyle = CRITICALITY_STYLES[skill.criticality];
          const isExpanded = !!expandedSkills[skill.skill_set_id];
          const topics = SKILL_TOPICS[skill.skill_set_id] || [];

          return (
            <div
              key={skill.skill_set_id}
              className="bg-white border border-[#E5E7EB] hover:border-slate-300 rounded-xl overflow-hidden shadow-xs transition-all"
            >
              {/* Card Header Row */}
              <div
                onClick={() => toggleSkillExpand(skill.skill_set_id)}
                className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 cursor-pointer select-none hover:bg-slate-50/50 transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <h3 className="font-bold text-sm sm:text-base text-slate-900 font-heading">
                      {skill.skill_set_name}
                    </h3>

                    {/* Bloom Badge with Exact Hex Color */}
                    <span
                      className="text-xs font-bold px-2 py-0.5 rounded-full border"
                      style={{
                        backgroundColor: `${bloomMeta.hex}15`,
                        color: bloomMeta.hex,
                        borderColor: `${bloomMeta.hex}30`
                      }}
                      title={`${bloomMeta.label} (${skill.bloom_level})`}
                    >
                      {skill.bloom_level} · {bloomMeta.label}
                    </span>

                    {/* Criticality Label */}
                    <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-md border ${critStyle.bg} ${critStyle.text} ${critStyle.border}`}>
                      {skill.criticality}
                    </span>
                  </div>

                  {/* Progress Bar & Proficiency Score */}
                  <div className="flex items-center gap-3 max-w-md">
                    <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{
                          width: `${(skill.required_level / 10) * 100}%`,
                          backgroundColor: bloomMeta.hex
                        }}
                      />
                    </div>
                    <span className="text-xs font-bold text-slate-700 font-mono shrink-0">
                      Level {skill.required_level}/10
                    </span>
                    <span className="text-xs text-slate-400 shrink-0">
                      ({skill.required_proficiency})
                    </span>
                  </div>
                </div>

                {/* Right: Expand Toggle Button */}
                <div className="flex items-center gap-2 self-end sm:self-center">
                  <span className="text-xs text-slate-400 font-medium hidden sm:inline">
                    {isExpanded ? 'Hide Ladder' : 'View Ladder'}
                  </span>
                  <div className="p-1 rounded-md text-slate-400 hover:text-slate-600">
                    {isExpanded ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </div>
                </div>
              </div>

              {/* Expandable 10-Level Roadmap */}
              {isExpanded && (
                <div className="px-4 sm:px-5 pb-5 pt-2 border-t border-slate-100 bg-slate-50/40">
                  <div className="mb-3 flex items-center justify-between text-xs text-slate-500 font-medium">
                    <span>10-Level Topic Mastery Roadmap</span>
                    <span>Target Target Threshold: Level {skill.required_level}</span>
                  </div>

                  <div className="space-y-1.5">
                    {topics.map((t) => {
                      const isLocked = t.level_number > skill.required_level;
                      const isTarget = t.level_number === skill.required_level;

                      return (
                        <div
                          key={t.level_number}
                          className={`p-2.5 rounded-lg flex items-center justify-between gap-3 text-xs transition-colors ${
                            isLocked
                              ? 'bg-slate-100/60 text-slate-400 border border-slate-200/50'
                              : isTarget
                              ? 'bg-blue-50 text-blue-900 border border-blue-200 font-medium shadow-2xs'
                              : 'bg-white text-slate-700 border border-slate-200/80'
                          }`}
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <span
                              className={`h-5 w-5 rounded-full flex items-center justify-center font-mono text-[10px] shrink-0 font-bold ${
                                isLocked
                                  ? 'bg-slate-200 text-slate-500'
                                  : isTarget
                                  ? 'bg-blue-600 text-white'
                                  : 'bg-emerald-100 text-emerald-800'
                              }`}
                            >
                              {t.level_number}
                            </span>
                            <span className="truncate">{t.topic}</span>
                          </div>

                          <div className="shrink-0 flex items-center gap-1.5">
                            {isLocked ? (
                              <span className="inline-flex items-center gap-1 text-[11px] text-slate-400 font-medium px-2 py-0.5 rounded bg-slate-200/50">
                                <Lock className="h-3 w-3" />
                                <span>Beyond scope</span>
                              </span>
                            ) : isTarget ? (
                              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-700 bg-blue-100/80 px-2 py-0.5 rounded">
                                <Target className="h-3 w-3 text-blue-600" />
                                <span>Target Requirement</span>
                              </span>
                            ) : (
                              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
