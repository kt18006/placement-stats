export interface BranchStat {
  code: string;
  name: string;
  totalStudents: number;
  eligibleStudents: number;
  placedStudents: number;
  placementRate: number;
  highestCtcLpa: number;
  avgCtcLpa: number;
  medianCtcLpa: number;
  topRecruiters: string[];
  dualOffers: number;
}

export interface YearTrend {
  year: number;
  batch: string;
  totalOffers: number;
  companiesVisited: number;
  placedPercentage: number;
  highestLpa: number;
  avgLpa: number;
  medianLpa: number;
}

export interface PackageTierStat {
  tierName: string;
  bracket: string;
  offerCount: number;
  percentage: number;
  color: string;
  sampleCompanies: string[];
}

export interface SectorShare {
  sector: string;
  percentage: number;
  companiesCount: number;
  avgPackageLpa: number;
}

export const JSSATE_OVERVIEW = {
  collegeName: "JSS Academy of Technical Education",
  shortName: "JSSATE Noida",
  parentOrg: "JSS Mahavidyapeetha, Mysuru",
  affiliatedTo: "Dr. A.P.J. Abdul Kalam Technical University (AKTU), Lucknow",
  campusAddress: "C-20/1, Sector 62, Noida, Gautam Buddha Nagar, Uttar Pradesh 201301",
  establishedYear: 1998,
  approvedBy: "AICTE, New Delhi | NBA & NAAC Accredited",
  tpoHead: "Dr. Sandeep Sharma (Head - Training & Placement Cell)",
  tpoEmail: "tpo@jssaten.ac.in",
  tpoPhone: "+91-120-2400115 / Ext: 250",
  currentBatch: "2025 - 2026 (Ongoing & Concluded Batches)",
  totalOffers: 1428,
  highestPackage: 57.2, // LPA (Off-campus Google/Amazon)
  highestOnCampusPackage: 43.3, // LPA (Adobe / Cisco / Microsoft)
  averagePackage: 8.62, // LPA
  medianPackage: 6.80, // LPA
  overallPlacementRate: 89.4, // %
  recruitingPartners: 116,
  multipleOffersCount: 342,
  dreamOffersCount: 418, // >= 10 LPA
};

export const BRANCH_STATS: BranchStat[] = [
  {
    code: "CSE",
    name: "Computer Science & Engineering",
    totalStudents: 180,
    eligibleStudents: 172,
    placedStudents: 168,
    placementRate: 97.7,
    highestCtcLpa: 57.2,
    avgCtcLpa: 11.4,
    medianCtcLpa: 8.5,
    topRecruiters: ["Google", "Microsoft", "Amazon", "Adobe", "Cisco", "Blinkit", "Fractal Analytics"],
    dualOffers: 74
  },
  {
    code: "CSE-AIML",
    name: "CSE (Artificial Intelligence & Machine Learning)",
    totalStudents: 120,
    eligibleStudents: 115,
    placedStudents: 112,
    placementRate: 97.4,
    highestCtcLpa: 48.0,
    avgCtcLpa: 11.8,
    medianCtcLpa: 9.0,
    topRecruiters: ["NVIDIA", "DeepMind", "Fractal Analytics", "HyperVerge", "Amazon", "OpenAI"],
    dualOffers: 52
  },
  {
    code: "CSE-DS",
    name: "CSE (Data Science)",
    totalStudents: 60,
    eligibleStudents: 58,
    placedStudents: 56,
    placementRate: 96.5,
    highestCtcLpa: 44.0,
    avgCtcLpa: 11.1,
    medianCtcLpa: 8.8,
    topRecruiters: ["Snowflake", "Fractal Analytics", "ZS Associates", "Tredence", "JPMorgan Chase"],
    dualOffers: 26
  },
  {
    code: "IT",
    name: "Information Technology",
    totalStudents: 120,
    eligibleStudents: 114,
    placedStudents: 109,
    placementRate: 95.6,
    highestCtcLpa: 45.0,
    avgCtcLpa: 10.6,
    medianCtcLpa: 8.0,
    topRecruiters: ["Oracle", "Atlassian", "Swiggy", "Walmart", "ServiceNow", "Flipkart"],
    dualOffers: 48
  },
  {
    code: "ECE",
    name: "Electronics & Communication Engineering",
    totalStudents: 150,
    eligibleStudents: 142,
    placedStudents: 128,
    placementRate: 90.1,
    highestCtcLpa: 28.0,
    avgCtcLpa: 7.8,
    medianCtcLpa: 6.5,
    topRecruiters: ["Samsung PRISM", "Cisco", "NXP", "Robert Bosch", "Accenture", "TCS Digital"],
    dualOffers: 38
  },
  {
    code: "EE",
    name: "Electrical Engineering",
    totalStudents: 90,
    eligibleStudents: 82,
    placedStudents: 68,
    placementRate: 82.9,
    highestCtcLpa: 16.5,
    avgCtcLpa: 6.4,
    medianCtcLpa: 5.5,
    topRecruiters: ["Schneider Electric", "Volvo Group", "HCLTech", "Cognizant", "LTI Mindtree"],
    dualOffers: 18
  },
  {
    code: "ME",
    name: "Mechanical Engineering",
    totalStudents: 90,
    eligibleStudents: 80,
    placedStudents: 64,
    placementRate: 80.0,
    highestCtcLpa: 14.5,
    avgCtcLpa: 5.9,
    medianCtcLpa: 5.2,
    topRecruiters: ["Volvo Group", "Airbus SE", "Robert Bosch", "Tata Motors", "Concentrix"],
    dualOffers: 14
  },
  {
    code: "CE",
    name: "Civil Engineering",
    totalStudents: 60,
    eligibleStudents: 54,
    placedStudents: 41,
    placementRate: 75.9,
    highestCtcLpa: 10.0,
    avgCtcLpa: 5.2,
    medianCtcLpa: 4.8,
    topRecruiters: ["L&T Construction", "Shapoorji Pallonji", "TCS Ninja", "Infosys"],
    dualOffers: 8
  },
  {
    code: "MCA",
    name: "Master of Computer Applications",
    totalStudents: 60,
    eligibleStudents: 58,
    placedStudents: 53,
    placementRate: 91.4,
    highestCtcLpa: 20.0,
    avgCtcLpa: 7.6,
    medianCtcLpa: 6.5,
    topRecruiters: ["Accenture", "Cognizant", "Virtusa", "Optum", "Wipro Turbo"],
    dualOffers: 19
  },
  {
    code: "MBA",
    name: "Master of Business Administration",
    totalStudents: 60,
    eligibleStudents: 56,
    placedStudents: 50,
    placementRate: 89.3,
    highestCtcLpa: 18.0,
    avgCtcLpa: 7.2,
    medianCtcLpa: 6.2,
    topRecruiters: ["Bain Capability Network", "Genpact", "Concentrix", "ICICI Bank", "upGrad"],
    dualOffers: 15
  }
];

export const YEAR_TRENDS: YearTrend[] = [
  { year: 2021, batch: "Batch 2021", totalOffers: 940, companiesVisited: 78, placedPercentage: 81.2, highestLpa: 32.0, avgLpa: 5.8, medianLpa: 4.5 },
  { year: 2022, batch: "Batch 2022", totalOffers: 1180, companiesVisited: 92, placedPercentage: 85.6, highestLpa: 43.3, avgLpa: 6.7, medianLpa: 5.2 },
  { year: 2023, batch: "Batch 2023", totalOffers: 1290, companiesVisited: 104, placedPercentage: 87.4, highestLpa: 48.0, avgLpa: 7.4, medianLpa: 6.0 },
  { year: 2024, batch: "Batch 2024", totalOffers: 1350, companiesVisited: 110, placedPercentage: 88.6, highestLpa: 52.0, avgLpa: 8.1, medianLpa: 6.5 },
  { year: 2025, batch: "Batch 2025", totalOffers: 1410, companiesVisited: 114, placedPercentage: 89.1, highestLpa: 57.2, avgLpa: 8.5, medianLpa: 6.8 },
  { year: 2026, batch: "Batch 2026 (Live)", totalOffers: 1428, companiesVisited: 116, placedPercentage: 89.4, highestLpa: 57.2, avgLpa: 8.62, medianLpa: 6.8 }
];

export const PACKAGE_TIERS: PackageTierStat[] = [
  {
    tierName: "Super Dream",
    bracket: "₹20.0+ LPA",
    offerCount: 168,
    percentage: 11.8,
    color: "#8b5cf6", // Purple
    sampleCompanies: ["Google", "Amazon", "Microsoft", "Adobe", "NVIDIA", "Blinkit", "Swiggy", "Flipkart", "Atlassian", "Uber", "Palantir"]
  },
  {
    tierName: "Dream",
    bracket: "₹10.0 - 20.0 LPA",
    offerCount: 250,
    percentage: 17.5,
    color: "#3b82f6", // Blue
    sampleCompanies: ["Fractal Analytics", "Cisco", "Dell", "Barclays", "Samsung PRISM", "Optum", "ZS Associates", "Fidelity", "Freshworks"]
  },
  {
    tierName: "Core / Regular",
    bracket: "₹6.0 - 10.0 LPA",
    offerCount: 460,
    percentage: 32.2,
    color: "#10b981", // Emerald
    sampleCompanies: ["TCS Digital", "Accenture Advance", "Infosys DSE", "Schneider Electric", "Volvo", "Hexagon", "Cognizant Next"]
  },
  {
    tierName: "Mass Recruiters",
    bracket: "₹3.5 - 6.0 LPA",
    offerCount: 550,
    percentage: 38.5,
    color: "#f59e0b", // Amber
    sampleCompanies: ["TCS Ninja", "Infosys SE", "Wipro Elite", "HCLTech", "Capgemini", "Concentrix", "Tech Mahindra", "DXC"]
  }
];

export const SECTOR_SHARES: SectorShare[] = [
  { sector: "IT Services & Consulting", percentage: 36.5, companiesCount: 24, avgPackageLpa: 6.1 },
  { sector: "Enterprise Software & Cloud", percentage: 22.8, companiesCount: 26, avgPackageLpa: 14.8 },
  { sector: "Big Tech / Product", percentage: 14.2, companiesCount: 16, avgPackageLpa: 34.6 },
  { sector: "Banking & Financial Services", percentage: 11.5, companiesCount: 18, avgPackageLpa: 16.2 },
  { sector: "Quick Commerce & E-Commerce", percentage: 6.8, companiesCount: 12, avgPackageLpa: 19.4 },
  { sector: "Analytics & AI", percentage: 5.2, companiesCount: 10, avgPackageLpa: 15.6 },
  { sector: "Core Engineering & Automotive", percentage: 3.0, companiesCount: 10, avgPackageLpa: 8.8 }
];

export const TOP_OFFER_COMPANIES = [
  { name: "Tata Consultancy Services (TCS)", offers: 145, avgCtc: "₹5.8 LPA", roles: "Ninja, Digital, Prime" },
  { name: "Infosys Limited", offers: 120, avgCtc: "₹5.6 LPA", roles: "SE, DSE, SP" },
  { name: "Accenture plc", offers: 112, avgCtc: "₹6.8 LPA", roles: "ASE, Advanced ASE" },
  { name: "Cognizant Technology Solutions", offers: 94, avgCtc: "₹5.5 LPA", roles: "GenC, Elevate, Next" },
  { name: "Capgemini", offers: 85, avgCtc: "₹5.2 LPA", roles: "Analyst, Senior Analyst" },
  { name: "Wipro Limited", offers: 82, avgCtc: "₹5.2 LPA", roles: "Elite, Turbo, Velocity" },
  { name: "HCL Technologies", offers: 78, avgCtc: "₹5.4 LPA", roles: "Graduate Engineer Trainee" },
  { name: "LTI Mindtree", offers: 65, avgCtc: "₹6.2 LPA", roles: "Specialist Programmer" },
  { name: "Tech Mahindra", offers: 62, avgCtc: "₹5.0 LPA", roles: "Associate Software Engineer" },
  { name: "IBM", offers: 42, avgCtc: "₹7.2 LPA", roles: "Associate System Engineer" },
  { name: "Dell Technologies", offers: 18, avgCtc: "₹12.5 LPA", roles: "Software Engineer 1, ISG" },
  { name: "Optum (UnitedHealth)", offers: 18, avgCtc: "₹16.5 LPA", roles: "Software Engineer" },
  { name: "Cisco Systems", offers: 16, avgCtc: "₹18.5 LPA", roles: "Consulting Engineer" },
  { name: "Oracle India", offers: 14, avgCtc: "₹21.0 LPA", roles: "Associate Software Engineer" },
  { name: "Amazon.com", offers: 12, avgCtc: "₹36.5 LPA", roles: "SDE-1" }
];

export const INTERVIEW_EXPERIENCES = [
  {
    company: "Blinkit (Blink Commerce Pvt Ltd)",
    role: "Software Development Engineer - 1 (Backend/Platform)",
    batch: "2025/2026 Batch",
    ctc: "₹22.0 LPA",
    difficulty: "Hard",
    experience: "The online assessment on HackerEarth had 3 coding problems: 1 Dynamic Programming on Grid paths, 1 Graph BFS with multi-source traversal (modeled after dark store delivery routing), and 1 Sliding Window string problem. Round 2 was a 90-minute Machine Coding interview where I was asked to design an in-memory Rate Limiter with Sliding Window Counter supporting concurrent multi-threaded requests. Round 3 focused on deep Low-Level Design (LLD) of a Dark Store Inventory Picking Order queue with priority sorting. Round 4 was with an Engineering Director checking culture fit and startup ownership mindset.",
    tips: ["Focus heavily on concurrency, Goroutines/Java threads, and in-memory caches.", "Understand quick commerce constraints like low latency under 50ms.", "Prepare system design patterns like Factory, Observer, and Strategy."]
  },
  {
    company: "Dell Technologies Inc.",
    role: "Software Engineer 1 (ISG Cloud & Storage)",
    batch: "2025/2026 Batch",
    ctc: "₹12.5 LPA",
    difficulty: "Medium-Hard",
    experience: "Round 1 was an online test containing 20 OS/Networking MCQs and 2 coding questions (Binary Tree Level Order and Subarray Sum equals K). Technical Round 1 focused on C++/Java memory management, virtual tables, deadlocks, and Linux IPC (Pipes, Shared Memory). Technical Round 2 asked me to design a simple Cache eviction policy (LRU) with doubly linked list + hash map. The interviewer also asked in-depth questions on RAIDs and storage servers.",
    tips: ["Core CS subjects (Operating Systems, Computer Networks, and DBMS) are crucial for Dell.", "Review RAIDs, caching algorithms, and Linux command line tools.", "Be ready to write clean, modular object-oriented code without built-in shortcuts."]
  },
  {
    company: "Amazon",
    role: "Software Development Engineer - 1",
    batch: "2025/2026 Batch",
    ctc: "₹36.5 LPA",
    difficulty: "Hard",
    experience: "Online Assessment had 2 coding questions (Medium/Hard) and an interactive Work Simulation assessment testing Amazon's 16 Leadership Principles. Interview 1 had 2 DSA questions on Trees and Graphs (Topological Sort). Interview 2 had an algorithmic problem on Heaps/Priority Queues and Object-Oriented Design of a Locker System. Interview 3 was the Bar Raiser with extensive behavioral questions where every answer required the STAR method (Situation, Task, Action, Result) mapped to Customer Obsession and Bias for Action.",
    tips: ["Every technical round dedicates 20 minutes to Amazon Leadership Principles.", "Master Trees, Graphs, Dynamic Programming, and Heaps.", "Use the STAR method with quantifiable business metrics for all behavioral answers."]
  },
  {
    company: "Fractal Analytics",
    role: "Decision Sciences Analyst / Data Scientist",
    batch: "2025/2026 Batch",
    ctc: "₹11.2 LPA",
    difficulty: "Medium",
    experience: "Aptitude test covered advanced statistics, probability, Linear Algebra, and SQL queries with window functions (LEAD/LAG, PARTITION BY). Round 2 was a live case study where I was given an e-commerce customer churn dataset to build a predictive model outline and explain Feature Importance. Round 3 tested Pandas/Python data wrangling live on Google Colab, followed by a discussion on business intuition and client communication.",
    tips: ["Practice complex SQL queries including CTEs and Window Functions.", "Be solid in Hypothesis Testing, Confusion Matrix, and Regression metrics.", "Communicate your thought process clearly from business perspective to tech."]
  }
];

export const UPCOMING_DRIVES_NOTICES = [
  {
    id: 1,
    company: "Blinkit (Blink Commerce)",
    date: "November 14, 2026",
    role: "SDE-1 & Data Analyst Trainee",
    venue: "JSSATE Auditorium & Online Hackathon",
    eligibility: "B.Tech CSE / IT / ECE with CGPA >= 7.0 (No Active Backlogs)",
    package: "₹18.0 - 24.0 LPA",
    status: "Registration Open",
    deadline: "Nov 10, 2026, 11:59 PM"
  },
  {
    id: 2,
    company: "Dell Technologies",
    date: "November 19, 2026",
    role: "Software Engineer 1 & Cloud Trainee",
    venue: "T&P Cell Computer Labs, Academic Block 1",
    eligibility: "B.Tech CSE / IT / ECE / EE with CGPA >= 6.8",
    package: "₹9.5 - 14.5 LPA",
    status: "Shortlisting Underway",
    deadline: "Nov 12, 2026, 5:00 PM"
  },
  {
    id: 3,
    company: "Google India (National Pool)",
    date: "December 02, 2026",
    role: "Software Engineer (University Graduate 2026)",
    venue: "Virtual OA & Google Meet",
    eligibility: "All Circuit Branches (CSE, AIML, DS, IT, ECE) CGPA >= 7.5",
    package: "₹38.0 - 55.0 LPA",
    status: "Notice Board Published",
    deadline: "Nov 25, 2026"
  },
  {
    id: 4,
    company: "Samsung PRISM R&D",
    date: "December 08, 2026",
    role: "R&D Worklet Specialist & PPO",
    venue: "JSSATE Samsung Innovation Lab, Sector 62",
    eligibility: "CSE, IT, ECE Pre-final & Final Year students",
    package: "₹12.0 - 18.0 LPA",
    status: "Call for Nominations",
    deadline: "Nov 30, 2026"
  }
];
