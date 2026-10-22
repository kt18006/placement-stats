import React from 'react';
import { 
  Building, 
  Eye, 
  Users2, 
  DollarSign, 
  Globe2, 
  Package, 
  Cpu, 
  Handshake, 
  Swords, 
  Compass, 
  Leaf, 
  HeartHandshake, 
  Newspaper, 
  BarChart2, 
  ShieldAlert, 
  MapPin, 
  ShieldCheck, 
  GraduationCap, 
  Award, 
  Gift, 
  Share2, 
  Mail
} from 'lucide-react';
import { CompanyProfile } from '../lib/companyData';

export interface IntelligenceField {
  key: string;
  label: string;
  value?: any;
  type?: 'text' | 'url' | 'video' | 'rating' | 'list' | 'paragraph';
}

export interface IntelligenceSection {
  id: string;
  title: string;
  icon: React.ReactNode;
  fieldCount: number;
  fields: IntelligenceField[];
}

export function buildIntelligenceSections(profile?: CompanyProfile): IntelligenceSection[] {
  const p = profile || ({} as Partial<CompanyProfile>);

  const rawSections = [
    // 1. Company Identity
    {
      id: "company-identity",
      title: "Company Identity",
      icon: <Building className="h-4 w-4 text-blue-600" />,
      fields: [
        { key: "name", label: "Full Official Name", value: p.name },
        { key: "short_name", label: "Short Name", value: p.short_name },
        { key: "category", label: "Company Category", value: p.category },
        { key: "company_type", label: "Placement Tier", value: p.company_type },
        { key: "incorporation_year", label: "Incorporation Year", value: p.incorporation_year },
        { key: "nature_of_company", label: "Nature of Company", value: p.nature_of_company }
      ]
    },

    // 2. Overview & Vision
    {
      id: "overview-vision",
      title: "Overview & Vision",
      icon: <Eye className="h-4 w-4 text-indigo-600" />,
      fields: [
        { key: "overview_text", label: "Executive Overview", value: p.overview_text, type: 'paragraph' as const },
        { key: "vision_statement", label: "Vision Statement", value: p.vision_statement, type: 'paragraph' as const },
        { key: "mission_statement", label: "Mission Statement", value: p.mission_statement, type: 'paragraph' as const },
        { key: "core_values", label: "Core Values", value: p.core_values, type: 'list' as const },
        { key: "history_timeline", label: "Corporate History & Milestones", value: p.history_timeline }
      ]
    },

    // 3. Leadership
    {
      id: "leadership",
      title: "Leadership",
      icon: <Users2 className="h-4 w-4 text-purple-600" />,
      fields: [
        { key: "ceo_name", label: "Chief Executive Officer", value: p.ceo_name },
        { key: "ceo_linkedin_url", label: "CEO LinkedIn", value: p.ceo_linkedin_url, type: 'url' as const },
        { key: "key_leaders", label: "Key Business Leaders", value: p.key_leaders, type: 'list' as const },
        { key: "board_members", label: "Board of Directors", value: p.board_members, type: 'list' as const },
        { key: "warm_intro_pathways", label: "Warm Introduction Pathways", value: p.warm_intro_pathways },
        { key: "decision_maker_access", label: "Decision Maker Accessibility", value: p.decision_maker_access }
      ]
    },

    // 4. Funding & Financials
    {
      id: "funding-financials",
      title: "Funding & Financials",
      icon: <DollarSign className="h-4 w-4 text-emerald-600" />,
      fields: [
        { key: "annual_revenue", label: "Annual Revenue", value: p.annual_revenue },
        { key: "annual_profit", label: "Annual Net Profit", value: p.annual_profit },
        { key: "valuation", label: "Company Valuation / Market Cap", value: p.valuation },
        { key: "revenue_mix", label: "Revenue Mix Breakdown", value: p.revenue_mix, type: 'list' as const },
        { key: "yoy_growth_rate", label: "YoY Growth Rate", value: p.yoy_growth_rate },
        { key: "profitability_status", label: "Profitability Status", value: p.profitability_status },
        { key: "key_investors", label: "Key Investors & Institutional Backers", value: p.key_investors, type: 'list' as const },
        { key: "recent_funding_rounds", label: "Recent Funding / Capital Structure", value: p.recent_funding_rounds },
        { key: "total_capital_raised", label: "Total Capital Raised", value: p.total_capital_raised }
      ]
    },

    // 5. Global Presence
    {
      id: "global-presence",
      title: "Global Presence",
      icon: <Globe2 className="h-4 w-4 text-cyan-600" />,
      fields: [
        { key: "headquarters_address", label: "Headquarters Address", value: p.headquarters_address },
        { key: "office_count", label: "Total Office Count", value: p.office_count },
        { key: "operating_countries", label: "Operating Countries", value: p.operating_countries, type: 'list' as const },
        { key: "office_locations", label: "Key Global & Regional Hubs", value: p.office_locations, type: 'list' as const }
      ]
    },

    // 6. Products & Services
    {
      id: "products-services",
      title: "Products & Services",
      icon: <Package className="h-4 w-4 text-amber-600" />,
      fields: [
        { key: "offerings_description", label: "Core Products & Services", value: p.offerings_description, type: 'list' as const },
        { key: "focus_sectors", label: "Focus Industry Sectors", value: p.focus_sectors, type: 'list' as const },
        { key: "pain_points_addressed", label: "Customer Pain Points Addressed", value: p.pain_points_addressed, type: 'list' as const },
        { key: "top_customers", label: "Top Clients & Customer Segments", value: p.top_customers, type: 'list' as const },
        { key: "product_pipeline", label: "Product Pipeline & Upcoming Inventions", value: p.product_pipeline, type: 'list' as const }
      ]
    },

    // 7. Technology Stack
    {
      id: "technology-stack",
      title: "Technology Stack",
      icon: <Cpu className="h-4 w-4 text-sky-600" />,
      fields: [
        { key: "tech_stack", label: "Core Tech Stack & Tools", value: p.tech_stack, type: 'list' as const },
        { key: "ai_ml_adoption_level", label: "AI & Machine Learning Adoption", value: p.ai_ml_adoption_level },
        { key: "tech_adoption_rating", label: "Tech Stack Maturity Rating", value: p.tech_adoption_rating },
        { key: "intellectual_property", label: "Intellectual Property & Patents", value: p.intellectual_property },
        { key: "r_and_d_investment", label: "Annual R&D Investment", value: p.r_and_d_investment }
      ]
    },

    // 8. Partnerships & Ecosystem
    {
      id: "partnerships-ecosystem",
      title: "Partnerships & Ecosystem",
      icon: <Handshake className="h-4 w-4 text-violet-600" />,
      fields: [
        { key: "technology_partners", label: "Strategic Technology Alliances", value: p.technology_partners, type: 'list' as const },
        { key: "partnership_ecosystem", label: "Partnership Ecosystem", value: p.partnership_ecosystem, type: 'list' as const },
        { key: "industry_associations", label: "Industry Associations & Memberships", value: p.industry_associations, type: 'list' as const }
      ]
    },

    // 9. Competitive Landscape
    {
      id: "competitive-landscape",
      title: "Competitive Landscape",
      icon: <Swords className="h-4 w-4 text-rose-600" />,
      fields: [
        { key: "key_competitors", label: "Key Market Competitors", value: p.key_competitors, type: 'list' as const },
        { key: "unique_differentiators", label: "Unique Differentiators", value: p.unique_differentiators, type: 'list' as const },
        { key: "competitive_advantages", label: "Competitive Advantages & Moats", value: p.competitive_advantages, type: 'list' as const },
        { key: "weaknesses_gaps", label: "Identified Vulnerabilities & Gaps", value: p.weaknesses_gaps, type: 'list' as const },
        { key: "key_challenges_needs", label: "Critical Strategic Challenges", value: p.key_challenges_needs, type: 'list' as const },
        { key: "benchmark_vs_peers", label: "Peer Performance Benchmark", value: p.benchmark_vs_peers }
      ]
    },

    // 10. Market Opportunity
    {
      id: "market-opportunity",
      title: "Market Opportunity",
      icon: <Compass className="h-4 w-4 text-teal-600" />,
      fields: [
        { key: "tam", label: "Total Addressable Market (TAM)", value: p.tam },
        { key: "sam", label: "Serviceable Addressable Market (SAM)", value: p.sam },
        { key: "som", label: "Serviceable Obtainable Market (SOM)", value: p.som },
        { key: "market_share_percentage", label: "Target Market Share %", value: p.market_share_percentage },
        { key: "future_projections", label: "Multi-Year Growth Projections", value: p.future_projections },
        { key: "strategic_priorities", label: "3-5 Year Strategic Priorities", value: p.strategic_priorities, type: 'list' as const }
      ]
    },

    // 11. Core Value Proposition & ESG
    {
      id: "core-value-esg",
      title: "Core Value Proposition & ESG",
      icon: <Leaf className="h-4 w-4 text-emerald-600" />,
      fields: [
        { key: "core_value_proposition", label: "Core Value Proposition", value: p.core_value_proposition, type: 'list' as const },
        { key: "esg_ratings", label: "ESG Initiatives & Accreditations", value: p.esg_ratings, type: 'list' as const },
        { key: "sustainability_csr", label: "Sustainability & Social Responsibility", value: p.sustainability_csr },
        { key: "carbon_footprint", label: "Carbon Footprint Strategy", value: p.carbon_footprint },
        { key: "ethical_sourcing", label: "Ethical Sourcing & Fair Trade", value: p.ethical_sourcing }
      ]
    },

    // 12. Culture & Work Life
    {
      id: "culture-work-life",
      title: "Culture & Work Life",
      icon: <HeartHandshake className="h-4 w-4 text-pink-600" />,
      fields: [
        { key: "work_culture_summary", label: "Work Culture Summary", value: p.work_culture_summary, type: 'list' as const },
        { key: "manager_quality", label: "Manager & Leadership Quality", value: p.manager_quality },
        { key: "psychological_safety", label: "Psychological Safety Level", value: p.psychological_safety },
        { key: "feedback_culture", label: "Feedback & Performance Rhythm", value: p.feedback_culture },
        { key: "diversity_inclusion_score", label: "Diversity & Inclusion Practices", value: p.diversity_inclusion_score, type: 'list' as const },
        { key: "ethical_standards", label: "Ethical Standards & Governance", value: p.ethical_standards },
        { key: "burnout_risk", label: "Burnout Risk Assessment", value: p.burnout_risk },
        { key: "mission_clarity", label: "Mission Clarity", value: p.mission_clarity },
        { key: "crisis_behavior", label: "Crisis Leadership & Restructuring Behavior", value: p.crisis_behavior }
      ]
    },

    // 13. Recent News & Milestones
    {
      id: "recent-news",
      title: "Recent News & Milestones",
      icon: <Newspaper className="h-4 w-4 text-blue-600" />,
      fields: [
        { key: "recent_news", label: "Recent News (Last 12-24 Months)", value: p.recent_news, type: 'list' as const },
        { key: "case_studies", label: "Public Success Stories & Case Studies", value: p.case_studies, type: 'list' as const },
        { key: "customer_testimonials", label: "Customer Endorsements & Quotes", value: p.customer_testimonials, type: 'list' as const }
      ]
    },

    // 14. Sales & Customer Metrics
    {
      id: "sales-customer-metrics",
      title: "Sales & Customer Metrics",
      icon: <BarChart2 className="h-4 w-4 text-indigo-600" />,
      fields: [
        { key: "sales_motion", label: "Primary Sales Motion", value: p.sales_motion },
        { key: "go_to_market_strategy", label: "Go-to-Market Architecture", value: p.go_to_market_strategy, type: 'list' as const },
        { key: "customer_acquisition_cost", label: "Customer Acquisition Cost (CAC)", value: p.customer_acquisition_cost },
        { key: "customer_lifetime_value", label: "Customer Lifetime Value (CLV)", value: p.customer_lifetime_value },
        { key: "cac_ltv_ratio", label: "CAC to LTV Ratio", value: p.cac_ltv_ratio },
        { key: "churn_rate", label: "Annual Customer Churn Rate", value: p.churn_rate },
        { key: "net_promoter_score", label: "Net Promoter Score (NPS)", value: p.net_promoter_score },
        { key: "customer_concentration_risk", label: "Customer Concentration Risk", value: p.customer_concentration_risk },
        { key: "burn_rate", label: "Monthly Cash Burn Rate", value: p.burn_rate },
        { key: "runway_months", label: "Operational Cash Runway", value: p.runway_months },
        { key: "burn_multiplier", label: "Net Burn Efficiency Multiplier", value: p.burn_multiplier }
      ]
    },

    // 15. Risk & Compliance
    {
      id: "risk-compliance",
      title: "Risk & Compliance",
      icon: <ShieldAlert className="h-4 w-4 text-red-600" />,
      fields: [
        { key: "regulatory_status", label: "Certifications & Regulatory Status", value: p.regulatory_status, type: 'list' as const },
        { key: "legal_issues", label: "Legal Disputes & Controversies", value: p.legal_issues },
        { key: "cybersecurity_posture", label: "Cybersecurity & Security Certifications", value: p.cybersecurity_posture, type: 'list' as const },
        { key: "supply_chain_dependencies", label: "Critical Supply Chain Dependencies", value: p.supply_chain_dependencies, type: 'list' as const },
        { key: "geopolitical_risks", label: "Geopolitical & Tariff Risks", value: p.geopolitical_risks, type: 'list' as const },
        { key: "macro_risks", label: "Macroeconomic & Industry Headwinds", value: p.macro_risks, type: 'list' as const }
      ]
    },

    // 16. Work Location & Commute
    {
      id: "work-location-commute",
      title: "Work Location & Commute",
      icon: <MapPin className="h-4 w-4 text-emerald-600" />,
      fields: [
        { key: "remote_policy_details", label: "Remote & Hybrid Work Policy", value: p.remote_policy_details },
        { key: "flexibility_level", label: "Flexibility Level", value: p.flexibility_level, type: 'list' as const },
        { key: "typical_hours", label: "Typical Working Hours", value: p.typical_hours },
        { key: "overtime_expectations", label: "Overtime Expectations", value: p.overtime_expectations },
        { key: "weekend_work", label: "Weekend Work Frequency", value: p.weekend_work },
        { key: "location_centrality", label: "Centrality vs Suburb Location", value: p.location_centrality },
        { key: "public_transport_access", label: "Public Transport Accessibility", value: p.public_transport_access, type: 'list' as const },
        { key: "cab_policy", label: "Cab Services & Late Night Support", value: p.cab_policy, type: 'list' as const },
        { key: "airport_commute_time", label: "Airport Commute Duration", value: p.airport_commute_time },
        { key: "office_zone_type", label: "Office Zone Classification", value: p.office_zone_type }
      ]
    },

    // 17. Safety & Wellbeing
    {
      id: "safety-wellbeing",
      title: "Safety & Wellbeing",
      icon: <ShieldCheck className="h-4 w-4 text-green-600" />,
      fields: [
        { key: "area_safety", label: "Surrounding Area Safety", value: p.area_safety, type: 'list' as const },
        { key: "safety_policies", label: "Employee Safety Protocols", value: p.safety_policies, type: 'list' as const },
        { key: "infrastructure_safety", label: "Facility Safety Standards", value: p.infrastructure_safety, type: 'list' as const },
        { key: "emergency_preparedness", label: "Medical & Emergency Preparedness", value: p.emergency_preparedness, type: 'list' as const },
        { key: "health_support", label: "Healthcare & Mental Wellness Coverage", value: p.health_support, type: 'list' as const }
      ]
    },

    // 18. Career Growth & Learning
    {
      id: "career-growth-learning",
      title: "Career Growth & Learning",
      icon: <GraduationCap className="h-4 w-4 text-amber-600" />,
      fields: [
        { key: "onboarding_quality", label: "Graduate Onboarding & Initial Training", value: p.onboarding_quality },
        { key: "learning_culture", label: "Learning Platforms & Certifications", value: p.learning_culture, type: 'list' as const },
        { key: "training_spend", label: "Annual Training Budget per Employee", value: p.training_spend },
        { key: "exposure_quality", label: "Problem Solving & Exposure Depth", value: p.exposure_quality },
        { key: "mentorship_availability", label: "Formal & Peer Mentorship", value: p.mentorship_availability, type: 'list' as const },
        { key: "internal_mobility", label: "Internal Job Posting (IJP) Mobility", value: p.internal_mobility },
        { key: "promotion_clarity", label: "Promotion Criteria & Ladder Transparency", value: p.promotion_clarity, type: 'list' as const },
        { key: "tools_access", label: "Modern Developer Tools Access", value: p.tools_access, type: 'list' as const },
        { key: "role_clarity", label: "Role Scope Clarity", value: p.role_clarity },
        { key: "early_ownership", label: "Early Responsibility & Ownership", value: p.early_ownership },
        { key: "work_impact", label: "Tangible Work Impact", value: p.work_impact, type: 'list' as const },
        { key: "execution_thinking_balance", label: "Execution vs Architectural Thinking", value: p.execution_thinking_balance },
        { key: "automation_level", label: "Process Automation Level", value: p.automation_level },
        { key: "cross_functional_exposure", label: "Cross-Functional Exposure", value: p.cross_functional_exposure, type: 'list' as const }
      ]
    },

    // 19. Brand & Reputation
    {
      id: "brand-reputation",
      title: "Brand & Reputation",
      icon: <Award className="h-4 w-4 text-purple-600" />,
      fields: [
        { key: "company_maturity", label: "Corporate Maturity", value: p.company_maturity },
        { key: "brand_value", label: "Global Brand & Resume Standing", value: p.brand_value },
        { key: "client_quality", label: "Enterprise Client Portfolio Standing", value: p.client_quality, type: 'list' as const },
        { key: "awards_recognitions", label: "Awards & Recognitions", value: p.awards_recognitions, type: 'list' as const },
        { key: "brand_sentiment_score", label: "Employer Sentiment Score", value: p.brand_sentiment_score },
        { key: "event_participation", label: "Global Tech Summit Participation", value: p.event_participation, type: 'list' as const },
        { key: "layoff_history", label: "Restructuring & Layoff History", value: p.layoff_history },
        { key: "exit_opportunities", label: "Alumni Exit Opportunities", value: p.exit_opportunities, type: 'list' as const },
        { key: "skill_relevance", label: "Acquired Skill Relevance in Industry", value: p.skill_relevance },
        { key: "external_recognition", label: "Top-Tier Employer Credibility", value: p.external_recognition },
        { key: "network_strength", label: "Alumni & Executive Network Power", value: p.network_strength, type: 'list' as const },
        { key: "global_exposure", label: "Global Project Exposure", value: p.global_exposure, type: 'list' as const }
      ]
    },

    // 20. Compensation & Benefits
    // NOTE: Strictly never displaying CTC, Stipend, or Selection Ratio anywhere!
    {
      id: "compensation-benefits",
      title: "Compensation & Benefits",
      icon: <Gift className="h-4 w-4 text-orange-600" />,
      fields: [
        { key: "fixed_vs_variable_pay", label: "Salary Structure (Fixed vs Variable)", value: p.fixed_vs_variable_pay },
        { key: "bonus_predictability", label: "Annual Bonus Predictability", value: p.bonus_predictability },
        { key: "esops_incentives", label: "Stock Grants (RSUs) & Long-Term Incentives", value: p.esops_incentives, type: 'list' as const },
        { key: "family_health_insurance", label: "Family Health Insurance Coverage", value: p.family_health_insurance, type: 'list' as const },
        { key: "leave_policy", label: "Paid Leave & Vacation Policy", value: p.leave_policy, type: 'list' as const },
        { key: "relocation_support", label: "Relocation Assistance & Initial Stay", value: p.relocation_support, type: 'list' as const },
        { key: "lifestyle_benefits", label: "Lifestyle, Meal & Wellness Perks", value: p.lifestyle_benefits, type: 'list' as const }
      ]
    },

    // 21. Digital Presence & Ratings
    {
      id: "digital-presence-ratings",
      title: "Digital Presence & Ratings",
      icon: <Share2 className="h-4 w-4 text-blue-600" />,
      fields: [
        { key: "website_url", label: "Official Web Portal", value: p.website_url, type: 'url' as const },
        { key: "website_quality", label: "Digital Presence Quality", value: p.website_quality },
        { key: "website_rating", label: "Website Rating Score", value: p.website_rating },
        { key: "website_traffic_rank", label: "Traffic Rank", value: p.website_traffic_rank },
        { key: "social_media_followers", label: "Combined Social Followers", value: p.social_media_followers },
        { key: "glassdoor_rating", label: "Glassdoor Employee Rating", value: p.glassdoor_rating, type: 'rating' as const },
        { key: "indeed_rating", label: "Indeed Workplace Rating", value: p.indeed_rating, type: 'rating' as const },
        { key: "google_rating", label: "Google Review Rating", value: p.google_rating, type: 'rating' as const },
        { key: "linkedin_url", label: "Official LinkedIn Profile", value: p.linkedin_url, type: 'url' as const },
        { key: "twitter_handle", label: "X / Twitter Handle", value: p.twitter_handle },
        { key: "facebook_url", label: "Official Facebook Page", value: p.facebook_url, type: 'url' as const },
        { key: "instagram_url", label: "Official Instagram Handle", value: p.instagram_url, type: 'url' as const },
        { key: "marketing_video_url", label: "Corporate Video Showcase", value: p.marketing_video_url, type: 'video' as const }
      ]
    },

    // 22. Contact Information
    {
      id: "contact-information",
      title: "Contact Information",
      icon: <Mail className="h-4 w-4 text-slate-700" />,
      fields: [
        { key: "primary_contact_email", label: "Corporate Inquiry Email", value: p.primary_contact_email },
        { key: "primary_phone_number", label: "Company Phone Number", value: p.primary_phone_number },
        { key: "contact_person_name", label: "Primary Campus Liaison Name", value: p.contact_person_name },
        { key: "contact_person_title", label: "Liaison Title / Designation", value: p.contact_person_title },
        { key: "contact_person_email", label: "Talent Acquisition Email", value: p.contact_person_email },
        { key: "contact_person_phone", label: "Direct Phone Extension", value: p.contact_person_phone }
      ]
    }
  ];

  return rawSections.map(s => ({
    ...s,
    fieldCount: s.fields.length
  }));
}
