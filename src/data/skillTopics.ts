export interface SkillTopicLevel {
  level_number: number;
  topic: string;
}

export interface SkillTopicMap {
  [skill_set_id: number]: SkillTopicLevel[];
}

export const SKILL_TOPICS: SkillTopicMap = {
  // 1: Data Structures & Algorithms
  1: [
    { level_number: 1, topic: "Time and Space Complexity Analysis (Big O notation basics)" },
    { level_number: 2, topic: "Arrays, String Manipulation, and Sliding Window techniques" },
    { level_number: 3, topic: "Linked Lists, Stacks, Queues, and Two-pointer approaches" },
    { level_number: 4, topic: "Recursion, Backtracking, and Binary Search variants" },
    { level_number: 5, topic: "Binary Trees, Binary Search Trees, and Tree Traversals" },
    { level_number: 6, topic: "Hash Maps, Sets, and Collision Resolution strategies" },
    { level_number: 7, topic: "Heaps, Priority Queues, and Disjoint Set Union (DSU)" },
    { level_number: 8, topic: "Graph Algorithms: BFS, DFS, Dijkstra, Topological Sorting" },
    { level_number: 9, topic: "Dynamic Programming: 1D, 2D grids, and Knapsack problems" },
    { level_number: 10, topic: "Advanced DP with Bitmasking, Trie structures, and Segment Trees" }
  ],

  // 2: Object-Oriented Programming
  2: [
    { level_number: 1, topic: "Classes, Objects, and Primitive vs Reference types" },
    { level_number: 2, topic: "Constructors, Method Overloading, and Scope Identifiers" },
    { level_number: 3, topic: "Encapsulation, Data Hiding, and Access Modifiers" },
    { level_number: 4, topic: "Inheritance hierarchies and Runtime Polymorphism (Overriding)" },
    { level_number: 5, topic: "Abstract Classes, Interfaces, and Multiple Inheritance models" },
    { level_number: 6, topic: "Exception Handling, Custom Exceptions, and Resource cleanup" },
    { level_number: 7, topic: "SOLID Design Principles application in real-world systems" },
    { level_number: 8, topic: "Creational & Structural Design Patterns (Singleton, Factory, Adapter)" },
    { level_number: 9, topic: "Behavioral Design Patterns (Observer, Strategy, Command pattern)" },
    { level_number: 10, topic: "Clean Architecture, Domain-Driven Design, and Refactoring paradigms" }
  ],

  // 3: SQL & Databases
  3: [
    { level_number: 1, topic: "Relational Database concepts, Tables, Keys, and Schema definition" },
    { level_number: 2, topic: "Basic SQL Queries: SELECT, WHERE, ORDER BY, and Filtering" },
    { level_number: 3, topic: "Aggregate functions, GROUP BY, and HAVING clause clauses" },
    { level_number: 4, topic: "Table Joins: INNER, LEFT, RIGHT, and FULL OUTER joins" },
    { level_number: 5, topic: "Subqueries, Nested queries, and Correlated subqueries" },
    { level_number: 6, topic: "Database Normalization (1NF, 2NF, 3NF, BCNF) and Integrity" },
    { level_number: 7, topic: "Window Functions: ROW_NUMBER(), RANK(), DENSE_RANK(), LEAD/LAG" },
    { level_number: 8, topic: "Indexing strategies: B-Tree, Hash indexes, and Query EXPLAIN plans" },
    { level_number: 9, topic: "Transactions, ACID properties, Isolation levels, and Deadlocks" },
    { level_number: 10, topic: "Sharding, Partitioning, Replication, and NoSQL DB trade-offs" }
  ],

  // 4: Cloud Fundamentals (AWS/Azure)
  4: [
    { level_number: 1, topic: "Cloud Computing Models: IaaS, PaaS, SaaS, and Shared Responsibility" },
    { level_number: 2, topic: "Regions, Availability Zones, and Global Cloud Infrastructure" },
    { level_number: 3, topic: "Virtual Compute instances (AWS EC2 / Azure VMs) and Machine Images" },
    { level_number: 4, topic: "Object and Block Storage (AWS S3, EBS / Azure Blob Storage)" },
    { level_number: 5, topic: "Cloud Networking: Virtual Private Clouds (VPC), Subnets, and Gateways" },
    { level_number: 6, topic: "Identity & Access Management (IAM), Roles, and Security Policies" },
    { level_number: 7, topic: "Managed Relational & NoSQL Cloud Databases (RDS, DynamoDB, Cosmos)" },
    { level_number: 8, topic: "Serverless architectures: AWS Lambda, API Gateway, Azure Functions" },
    { level_number: 9, topic: "Load Balancing, Auto-Scaling Groups, and CloudWatch Monitoring" },
    { level_number: 10, topic: "Infrastructure as Code (Terraform/CloudFormation) and Multi-Cloud" }
  ],

  // 5: Operating Systems
  5: [
    { level_number: 1, topic: "OS Architecture, Kernel vs User space, and System Calls" },
    { level_number: 2, topic: "Process Management, Process Control Block (PCB), and States" },
    { level_number: 3, topic: "Threads, Multithreading models, and CPU scheduling algorithms" },
    { level_number: 4, topic: "Process Synchronization: Critical Section, Mutex, and Semaphores" },
    { level_number: 5, topic: "Deadlocks: Necessary Conditions, Handling, and Banker's Algorithm" },
    { level_number: 6, topic: "Memory Management: Paging, Segmentation, and Virtual Memory" },
    { level_number: 7, topic: "Page Replacement Algorithms (LRU, FIFO, Optimal, Working Set)" },
    { level_number: 8, topic: "File Systems, Inodes, Directory structures, and Disk scheduling" },
    { level_number: 9, topic: "Inter-Process Communication (IPC): Pipes, Shared Memory, Message Queues" },
    { level_number: 10, topic: "Containerization internals: Linux cgroups, namespaces, and hypervisors" }
  ],

  // 6: Computer Networks
  6: [
    { level_number: 1, topic: "OSI Model and TCP/IP protocol suite layer breakdowns" },
    { level_number: 2, topic: "Physical & Data Link layers: MAC Addressing, Framing, CSMA/CD" },
    { level_number: 3, topic: "Network Layer: IPv4/IPv6 Addressing, Subnetting, and CIDR notation" },
    { level_number: 4, topic: "Routing Protocols: Distance Vector, Link State, OSPF, and BGP basics" },
    { level_number: 5, topic: "Transport Layer: TCP 3-Way Handshake, TCP vs UDP differences" },
    { level_number: 6, topic: "Flow Control (Sliding Window) and Congestion Control mechanisms" },
    { level_number: 7, topic: "Application Protocols: DNS resolution, DHCP, and FTP operations" },
    { level_number: 8, topic: "HTTP/1.1, HTTP/2, HTTP/3, Headers, and RESTful stateless semantics" },
    { level_number: 9, topic: "Network Security: SSL/TLS Handshakes, Firewalls, and VPN tunneling" },
    { level_number: 10, topic: "Software Defined Networking (SDN), CDN edge routing, and WebSockets" }
  ],

  // 7: Aptitude & Logical Reasoning
  7: [
    { level_number: 1, topic: "Number Systems, Divisibility rules, and HCF / LCM fundamentals" },
    { level_number: 2, topic: "Percentages, Ratios, Proportions, and Partnership calculations" },
    { level_number: 3, topic: "Profit, Loss, Discount, Simple Interest, and Compound Interest" },
    { level_number: 4, topic: "Time & Work, Pipes & Cisterns, and Work-efficiency formulas" },
    { level_number: 5, topic: "Time, Speed & Distance, Relative speed, Trains, and Boats/Streams" },
    { level_number: 6, topic: "Permutations, Combinations, Probability, and Counting principles" },
    { level_number: 7, topic: "Data Interpretation: Bar Charts, Pie Charts, and Tabular analysis" },
    { level_number: 8, topic: "Logical Deductions, Syllogisms, and Blood Relations pathways" },
    { level_number: 9, topic: "Seating Arrangements (Linear & Circular) and Direction Sense tests" },
    { level_number: 10, topic: "Critical Thinking, Statement-Assumption, and Data Sufficiency" }
  ],

  // 8: Communication & Behavioral
  8: [
    { level_number: 1, topic: "Active Listening, Voice Modulation, and Concise Self-Introductions" },
    { level_number: 2, topic: "Professional Email Etiquette, Meeting Minutes, and Messaging" },
    { level_number: 3, topic: "Resume Structuring, Keyword Optimization, and Project Pitching" },
    { level_number: 4, topic: "The STAR Framework (Situation, Task, Action, Result) methodology" },
    { level_number: 5, topic: "Handling Conflict Resolution, Disagreements, and Cross-team friction" },
    { level_number: 6, topic: "Demonstrating Leadership, Ownership Mentality, and Accountability" },
    { level_number: 7, topic: "Client-Facing Presentation Skills and Technical Storytelling" },
    { level_number: 8, topic: "Navigating Ambiguity, Prioritizing Trade-offs, and Pressure management" },
    { level_number: 9, topic: "Constructive Feedback Delivery, Receiving Critique, and Growth Mindset" },
    { level_number: 10, topic: "Executive Presence, Cross-Cultural Communication, and Negotiation" }
  ],

  // 9: Web Development Basics
  9: [
    { level_number: 1, topic: "HTML5 Semantic Elements, Document Object Model (DOM) structure" },
    { level_number: 2, topic: "CSS3 Box Model, Flexbox layouts, Grid systems, and Media queries" },
    { level_number: 3, topic: "JavaScript Essentials: Variables (let/const), Types, and Functions" },
    { level_number: 4, topic: "Asynchronous JS: Promises, Async/Await, and Fetch API calls" },
    { level_number: 5, topic: "Modern Component Architecture: React JSX, Props, and State hooks" },
    { level_number: 6, topic: "Lifecycle management with useEffect, useMemo, and Custom Hooks" },
    { level_number: 7, topic: "Client-Side Routing, Global State Management (Context, Redux/Zustand)" },
    { level_number: 8, topic: "Backend Integration: REST APIs, JSON formatting, and CORS handling" },
    { level_number: 9, topic: "Web Performance: Bundling (Vite/Webpack), Code-splitting, Lazy loading" },
    { level_number: 10, topic: "Web Security: XSS, CSRF prevention, Content Security Policy (CSP)" }
  ],

  // 10: System Design (Intro)
  10: [
    { level_number: 1, topic: "Client-Server Architecture, Monolith vs Microservices overview" },
    { level_number: 2, topic: "Horizontal vs Vertical Scaling, Stateless vs Stateful services" },
    { level_number: 3, topic: "Load Balancers (Layer 4 vs Layer 7) and Reverse Proxies (Nginx)" },
    { level_number: 4, topic: "Caching Strategies: Redis, Memcached, Cache-Aside, Write-Through" },
    { level_number: 5, topic: "Database Choices: SQL vs NoSQL, CAP Theorem, and PACELC trade-offs" },
    { level_number: 6, topic: "Content Delivery Networks (CDNs), Edge caching, and Geo-routing" },
    { level_number: 7, topic: "Asynchronous Messaging: Message Queues (Kafka, RabbitMQ, SQS)" },
    { level_number: 8, topic: "Designing Rate Limiters and URL Shortener systems (TinyURL)" },
    { level_number: 9, topic: "Consistent Hashing, Distributed Unique ID Generators (Snowflake ID)" },
    { level_number: 10, topic: "High-Availability, Fault Tolerance, Disaster Recovery, and SLAs/SLOs" }
  ],

  // 11: Git & Version Control
  11: [
    { level_number: 1, topic: "Version Control concepts, Git init, staging, and commit histories" },
    { level_number: 2, topic: "Git Branching models, switching branches, and head pointer inspection" },
    { level_number: 3, topic: "Remote Repositories: Git push, pull, fetch, and upstream tracking" },
    { level_number: 4, topic: "Git Merging: Fast-forward vs 3-way merge, handling Merge Conflicts" },
    { level_number: 5, topic: "Git Stashing, temporary work shelving, and uncommitted patch recovery" },
    { level_number: 6, topic: "Git Rebase, interactive rebasing, squash commits, and history cleanup" },
    { level_number: 7, topic: "Pull Request (PR) workflows, Code Reviews, and branch protection rules" },
    { level_number: 8, topic: "Git Cherry-pick, Git revert, and safe reset strategies (soft vs hard)" },
    { level_number: 9, topic: "Git Hooks, Pre-commit linters, and semantic commit message conventions" },
    { level_number: 10, topic: "Advanced Git: Bisect for bug hunts, Submodules, and Git Worktrees" }
  ],

  // 12: Generative AI Basics
  12: [
    { level_number: 1, topic: "AI vs ML vs Deep Learning vs Generative AI definitions and scope" },
    { level_number: 2, topic: "Transformer Architecture overview: Self-Attention and Tokens" },
    { level_number: 3, topic: "Large Language Models (LLMs): Pre-training, Fine-tuning, and Inference" },
    { level_number: 4, topic: "Prompt Engineering: Zero-shot, Few-shot, and Chain-of-Thought prompts" },
    { level_number: 5, topic: "Embeddings, Vector Spaces, and Cosine Similarity computations" },
    { level_number: 6, topic: "Vector Databases: Pinecone, Chroma, pgvector, and Hybrid search" },
    { level_number: 7, topic: "Retrieval-Augmented Generation (RAG) architecture and chunking methods" },
    { level_number: 8, topic: "Function Calling, Tool Use, and Structured JSON output parsing" },
    { level_number: 9, topic: "AI Safety, Guardrails, Hallucination mitigation, and Evaluation" },
    { level_number: 10, topic: "Building Autonomous Agentic Workflows and Multi-Agent Orchestration" }
  ]
};
