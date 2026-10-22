import { describe, it, expect } from 'vitest';
import { SEED_COMPANIES } from './data/seedCompanies';
import { normalizeCompanySummary, normalizeCompanyProfile, normalizeDashboardSkills } from './lib/companyData';
import { SKILL_TOPICS } from './data/skillTopics';
import { buildIntelligenceSections } from './data/intelligenceData';

describe('JSSATE Noida Intelligence Platform Smoke Tests', () => {
  it('loads the seed company (Accenture) verbatim', () => {
    expect(SEED_COMPANIES.length).toBeGreaterThanOrEqual(1);
    const accenture = SEED_COMPANIES[0];
    expect(accenture.short_json.name).toBe('Accenture plc');
    expect(accenture.short_json.company_type).toBe('Dream');
  });

  it('normalizes company summary and profile properly', () => {
    const seed = SEED_COMPANIES[0];
    const summary = normalizeCompanySummary(seed.short_json, seed.company_id);
    expect(summary.name).toBe('Accenture plc');
    expect(summary.company_type).toBe('Dream');

    const profile = normalizeCompanyProfile(seed.full_json, seed.short_json);
    expect(profile.ceo_name).toBe('Julie Sweet');
    expect(profile.valuation).toBe('$220B market capitalization');
  });

  it('generates 22 intelligence sections in exact order', () => {
    const seed = SEED_COMPANIES[0];
    const profile = normalizeCompanyProfile(seed.full_json, seed.short_json);
    const sections = buildIntelligenceSections(profile);
    expect(sections.length).toBe(22);
    expect(sections[0].title).toBe('Company Identity');
    expect(sections[1].title).toBe('Overview & Vision');
    expect(sections[21].title).toBe('Contact Information');
  });

  it('has 10-level topic roadmaps for all 12 skills', () => {
    const seed = SEED_COMPANIES[0];
    const skills = normalizeDashboardSkills(seed.skill_levels);
    expect(skills.length).toBe(12);

    for (const s of skills) {
      const topics = SKILL_TOPICS[s.skill_set_id];
      expect(topics).toBeDefined();
      expect(topics.length).toBe(10);
    }
  });
});
