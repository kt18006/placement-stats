export interface CompanySummary {
  id: number;
  name: string;
  short_name: string;
  logo_url: string;
  category: string;
  company_type: 'Super Dream' | 'Dream' | 'Standard' | 'Regular';
  incorporation_year: number;
  employee_size: string;
  headquarters_address: string;
  operating_countries: string;
  office_locations: string;
  yoy_growth_rate: string;
  website_url: string;
}

export interface CompanyProfile {
  // Identity & overview
  name: string;
  short_name: string;
  category: string;
  incorporation_year: number | string;
  nature_of_company: string;
  overview_text: string;
  headquarters_address: string;
  operating_countries: string;
  office_count: string;
  office_locations: string;
  employee_size: string;
  vision_statement: string;
  mission_statement: string;
  core_values: string;
  history_timeline: string;
  recent_news: string;

  // Digital presence
  website_url: string;
  linkedin_url: string;
  twitter_handle: string;
  facebook_url: string;
  instagram_url: string;
  primary_contact_email: string;
  primary_phone_number: string;

  // Risk & compliance
  regulatory_status: string;
  legal_issues: string;
  esg_ratings: string;
  supply_chain_dependencies: string;
  geopolitical_risks: string;
  macro_risks: string;
  carbon_footprint: string;
  ethical_sourcing: string;

  // Brand & ratings
  marketing_video_url: string;
  customer_testimonials: string;
  website_quality: string;
  website_rating: string;
  website_traffic_rank: string;
  social_media_followers: string;
  glassdoor_rating: string;
  indeed_rating: string;
  google_rating: string;
  awards_recognitions: string;
  brand_sentiment_score: string;
  event_participation: string;

  // Products & services
  pain_points_addressed: string;
  focus_sectors: string;
  offerings_description: string;
  top_customers: string;
  core_value_proposition: string;
  unique_differentiators: string;
  competitive_advantages: string;
  weaknesses_gaps: string;
  key_challenges_needs: string;
  key_competitors: string;
  market_share_percentage: string;
  sales_motion: string;
  customer_concentration_risk: string;
  exit_strategy_history: string;
  benchmark_vs_peers: string;
  future_projections: string;
  strategic_priorities: string;
  industry_associations: string;
  case_studies: string;
  go_to_market_strategy: string;
  innovation_roadmap: string;
  product_pipeline: string;
  tam: string;
  sam: string;
  som: string;

  // Culture & benefits
  leave_policy: string;
  health_support: string;
  fixed_vs_variable_pay: string;
  bonus_predictability: string;
  esops_incentives: string;
  family_health_insurance: string;
  relocation_support: string;
  lifestyle_benefits: string;
  hiring_velocity: string;
  employee_turnover: string;
  avg_retention_tenure: string;
  diversity_metrics: string;
  work_culture_summary: string;
  manager_quality: string;
  psychological_safety: string;
  feedback_culture: string;
  diversity_inclusion_score: string;
  ethical_standards: string;
  burnout_risk: string;
  layoff_history: string;
  mission_clarity: string;
  sustainability_csr: string;
  crisis_behavior: string;

  // Funding & financials
  annual_revenue: string;
  annual_profit: string;
  revenue_mix: string;
  valuation: string;
  yoy_growth_rate: string;
  profitability_status: string;
  key_investors: string;
  recent_funding_rounds: string;
  total_capital_raised: string;
  customer_acquisition_cost: string;
  customer_lifetime_value: string;
  cac_ltv_ratio: string;
  churn_rate: string;
  net_promoter_score: string;
  burn_rate: string;
  runway_months: string;
  burn_multiplier: string;

  // Work location
  remote_policy_details: string;
  typical_hours: string;
  overtime_expectations: string;
  weekend_work: string;
  flexibility_level: string;
  location_centrality: string;
  public_transport_access: string;
  cab_policy: string;
  airport_commute_time: string;
  office_zone_type: string;
  area_safety: string;
  safety_policies: string;
  infrastructure_safety: string;
  emergency_preparedness: string;

  // Leadership
  ceo_name: string;
  ceo_linkedin_url: string;
  key_leaders: string;
  warm_intro_pathways: string;
  decision_maker_access: string;
  contact_person_name: string;
  contact_person_title: string;
  contact_person_email: string;
  contact_person_phone: string;
  board_members: string;

  // Career growth
  training_spend: string;
  onboarding_quality: string;
  learning_culture: string;
  exposure_quality: string;
  mentorship_availability: string;
  internal_mobility: string;
  promotion_clarity: string;
  tools_access: string;
  role_clarity: string;
  early_ownership: string;
  work_impact: string;
  execution_thinking_balance: string;
  automation_level: string;
  cross_functional_exposure: string;
  company_maturity: string;
  brand_value: string;
  client_quality: string;
  exit_opportunities: string;
  skill_relevance: string;
  external_recognition: string;
  network_strength: string;
  global_exposure: string;

  // Tech
  technology_partners: string;
  intellectual_property: string;
  r_and_d_investment: string;
  ai_ml_adoption_level: string;
  tech_stack: string;
  cybersecurity_posture: string;
  partnership_ecosystem: string;
  tech_adoption_rating: string;

  // Allow flexible index access
  [key: string]: any;
}

export type BloomLevel = 'CU' | 'AP' | 'AS' | 'EV' | 'CR';
export type CriticalityLevel = 'Critical' | 'Important' | 'Baseline';
export type DifficultyTier = 'EXPERT' | 'ADVANCED' | 'PRO' | 'BEGINNER';

export interface DashboardSkill {
  skill_set_id: number;
  skill_set_name: string;
  required_level: number;
  required_proficiency: string;
  bloom_level: BloomLevel;
  criticality: CriticalityLevel;
  difficulty: DifficultyTier;
}

// Helpers
export function asString(val: any, fallback: string = ""): string {
  if (val === null || val === undefined) return fallback;
  return String(val).trim();
}

export function asRecord(val: any): Record<string, any> {
  if (typeof val === 'object' && val !== null) return val;
  return {};
}

export function splitItems(val: string): string[] {
  if (!val) return [];
  // Split on newlines, semicolons, bullets
  return val
    .split(/[\n;•]+/)
    .map(s => s.trim())
    .filter(s => s.length > 0 && !/^[\s,-]+$/.test(s));
}

export function titleCaseFromCode(code: string): string {
  return code
    .replace(/[_-]+/g, ' ')
    .replace(/\b\w/g, char => char.toUpperCase());
}

export function scoreToDifficulty(score: number): DifficultyTier {
  if (score >= 8) return 'EXPERT';
  if (score >= 6) return 'ADVANCED';
  if (score >= 4) return 'PRO';
  return 'BEGINNER';
}

export function proficiencyToBloom(level: number): BloomLevel {
  if (level <= 2) return 'CU'; // Conceptual Understanding
  if (level <= 4) return 'AP'; // Application
  if (level <= 6) return 'AS'; // Analysis
  if (level <= 8) return 'EV'; // Evaluation
  return 'CR';                 // Creation
}

export function scoreToCriticality(score: number): CriticalityLevel {
  if (score >= 7) return 'Critical';
  if (score >= 5) return 'Important';
  return 'Baseline';
}

export function isNullish(val: any): boolean {
  if (val === null || val === undefined) return true;
  const s = String(val).trim().toLowerCase();
  return (
    s === "" ||
    s === "na" ||
    s === "n/a" ||
    s === "none" ||
    s === "-" ||
    s === "null" ||
    s === "undefined" ||
    s === "not found"
  );
}

// Normalizers
export function normalizeCompanySummary(short_json: any, id: number = 1): CompanySummary {
  const s = asRecord(short_json);
  const rawType = asString(s.company_type, "Dream");
  let company_type: 'Super Dream' | 'Dream' | 'Standard' | 'Regular' = 'Dream';
  if (rawType.toLowerCase().includes('super')) company_type = 'Super Dream';
  else if (rawType.toLowerCase().includes('dream')) company_type = 'Dream';
  else if (rawType.toLowerCase().includes('standard')) company_type = 'Standard';
  else if (rawType.toLowerCase().includes('regular')) company_type = 'Regular';

  return {
    id,
    name: asString(s.name, "Company Name"),
    short_name: asString(s.short_name, asString(s.name, "Company")),
    logo_url: asString(s.logo_url, ""),
    category: asString(s.category, "Enterprise"),
    company_type,
    incorporation_year: Number(s.incorporation_year) || 2000,
    employee_size: asString(s.employee_size, "Not Available"),
    headquarters_address: asString(s.headquarters_address, "Not Available"),
    operating_countries: asString(s.operating_countries, "Not Available"),
    office_locations: asString(s.office_locations, "Not Available"),
    yoy_growth_rate: asString(s.yoy_growth_rate, "NA"),
    website_url: asString(s.website_url, "#")
  };
}

export function normalizeCompanyProfile(full_json: any, short_json?: any): CompanyProfile {
  const f = asRecord(full_json);
  const s = asRecord(short_json);
  const merged = { ...s, ...f };

  const profile: Record<string, any> = {};
  for (const key of Object.keys(merged)) {
    profile[key] = merged[key];
  }

  // Ensure mandatory defaults for all 163 fields
  profile.name = asString(merged.name, "Company Name");
  profile.short_name = asString(merged.short_name, profile.name);
  profile.category = asString(merged.category, "Enterprise");
  profile.company_type = asString(merged.company_type, "Dream");

  return profile as CompanyProfile;
}

export function normalizeDashboardSkills(skillLevels: any[]): DashboardSkill[] {
  if (!Array.isArray(skillLevels)) return [];

  return skillLevels.map((item, index) => {
    const level = Number(item.required_level) || 5;
    return {
      skill_set_id: Number(item.skill_set_id) || (index + 1),
      skill_set_name: asString(item.skill_set_name, `Skill ${index + 1}`),
      required_level: level,
      required_proficiency: asString(item.required_proficiency, "Proficient"),
      bloom_level: proficiencyToBloom(level),
      criticality: scoreToCriticality(level),
      difficulty: scoreToDifficulty(level)
    };
  }).sort((a, b) => b.required_level - a.required_level);
}
