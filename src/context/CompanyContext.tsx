import React, { createContext, useContext, useState, useEffect } from 'react';
import { SEED_COMPANIES } from '../data/seedCompanies';
import { 
  CompanySummary, 
  CompanyProfile, 
  DashboardSkill, 
  normalizeCompanySummary, 
  normalizeCompanyProfile, 
  normalizeDashboardSkills 
} from '../lib/companyData';

export interface SelectedCompanyMeta {
  companyId: number;
  companyName: string;
  logoUrl: string;
}

interface CompanyContextType {
  selectedCompanyMeta: SelectedCompanyMeta | null;
  selectedSummary: CompanySummary | null;
  selectedProfile: CompanyProfile | null;
  selectedSkills: DashboardSkill[];
  setSelectedCompany: (meta: SelectedCompanyMeta) => void;
  isLoading: boolean;
}

const STORAGE_KEY = "selected-company";

const CompanyContext = createContext<CompanyContextType | undefined>(undefined);

export const CompanyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedCompanyMeta, setSelectedCompanyMetaState] = useState<SelectedCompanyMeta | null>(null);
  const [selectedSummary, setSelectedSummary] = useState<CompanySummary | null>(null);
  const [selectedProfile, setSelectedProfile] = useState<CompanyProfile | null>(null);
  const [selectedSkills, setSelectedSkills] = useState<DashboardSkill[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Load from localStorage or initialize with seed company on first run
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      let targetSeed = SEED_COMPANIES[0];

      if (stored) {
        try {
          const parsed = JSON.parse(stored) as SelectedCompanyMeta;
          const match = SEED_COMPANIES.find(c => 
            c.company_id === parsed.companyId || 
            c.short_json.name.toLowerCase() === parsed.companyName.toLowerCase()
          );
          if (match) {
            targetSeed = match;
          }
        } catch {
          // ignore corrupted json
        }
      }

      if (targetSeed) {
        const meta: SelectedCompanyMeta = {
          companyId: targetSeed.company_id,
          companyName: targetSeed.short_json.name,
          logoUrl: targetSeed.short_json.logo_url
        };
        setSelectedCompanyMetaState(meta);
        setSelectedSummary(normalizeCompanySummary(targetSeed.short_json, targetSeed.company_id));
        setSelectedProfile(normalizeCompanyProfile(targetSeed.full_json, targetSeed.short_json));
        setSelectedSkills(normalizeDashboardSkills(targetSeed.skill_levels));
        localStorage.setItem(STORAGE_KEY, JSON.stringify(meta));
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  const setSelectedCompany = (meta: SelectedCompanyMeta) => {
    setSelectedCompanyMetaState(meta);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(meta));

    // Find in SEED_COMPANIES
    const match = SEED_COMPANIES.find(c => 
      c.company_id === meta.companyId || 
      c.short_json.name.toLowerCase() === meta.companyName.toLowerCase()
    );

    if (match) {
      setSelectedSummary(normalizeCompanySummary(match.short_json, match.company_id));
      setSelectedProfile(normalizeCompanyProfile(match.full_json, match.short_json));
      setSelectedSkills(normalizeDashboardSkills(match.skill_levels));
    } else {
      // Fallback: Use first seed as template with custom name & logo
      const template = SEED_COMPANIES[0];
      const customShort = { ...template.short_json, name: meta.companyName, logo_url: meta.logoUrl };
      const customFull = { ...template.full_json, name: meta.companyName };
      setSelectedSummary(normalizeCompanySummary(customShort, meta.companyId));
      setSelectedProfile(normalizeCompanyProfile(customFull, customShort));
      setSelectedSkills(normalizeDashboardSkills(template.skill_levels));
    }
  };

  return (
    <CompanyContext.Provider
      value={{
        selectedCompanyMeta,
        selectedSummary,
        selectedProfile,
        selectedSkills,
        setSelectedCompany,
        isLoading
      }}
    >
      {children}
    </CompanyContext.Provider>
  );
};

export const useCompany = (): CompanyContextType => {
  const context = useContext(CompanyContext);
  if (!context) {
    throw new Error("useCompany must be used within a CompanyProvider");
  }
  return context;
};
