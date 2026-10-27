/**
 * PORTFOLIO CONFIGURATION & DATA SOURCE
 * =====================================
 * Customize all your personal details, project descriptions, skills,
 * and contact links here in one convenient location.
 *
 * All placeholders are clearly indicated with [YOUR_...] or realistic
 * defaults suitable for student portfolios.
 */

export const portfolioData = {
  personal: {
    name: "Anika Sharma",
    monogram: "AS",
    role: "Student Developer & Quantitative Research Enthusiast",
    location: "Bengaluru, India",
    statusBadge: {
      active: true,
      label: "Open to Internships & Research Collaborations",
      dotColor: "#385451" // Forest green
    },
    shortBio: "Undergraduate student exploring frontend engineering, quantitative alpha research, and algorithmic problem-solving. Currently learning through hands-on experiments, WorldQuant BRAIN alpha modeling, and clean web development.",
    headline: "Building at the intersection of code, data & markets.",
    currentlyLearning: "Alpha Signals on WorldQuant BRAIN & Semantic Web Systems"
  },

  navigation: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Exploring", href: "#exploring" },
    { label: "Contact", href: "#contact" }
  ],

  hero: {
    tagline: "Student • Developer • Quantitative Enthusiast",
    headline: "Building at the intersection of code, data & markets.",
    subtext: "Exploring algorithmic trading concepts, time-series signals on WorldQuant BRAIN, and craft-driven frontend experiences with clean, semantic web architecture.",
    primaryCta: {
      text: "Explore My Work",
      href: "#projects"
    },
    secondaryCta: {
      text: "Get In Touch",
      href: "#contact"
    },
    highlightMetric: {
      label: "Currently Exploring",
      detail: "WorldQuant BRAIN Alpha Modeling • Modern Web Standards"
    }
  },

  about: {
    kicker: "About Me",
    title: "Curiosity, Analytical Rigor & Craft",
    lead: "I am a student fascinated by how simple mathematical rules and clean software architectures can capture complex dynamics — whether in financial markets or intuitive user interfaces.",
    paragraphs: [
      "My technical journey began with an innate curiosity about systems: understanding how data flows, how algorithms find signal in market noise, and how clear interfaces communicate complex ideas to users.",
      "In quantitative finance, I actively experiment on the WorldQuant BRAIN platform, researching mathematical alpha expressions, time-series decay, and portfolio turnover dynamics. I approach every simulation as a learning lab — testing hypotheses systematically and learning from drawdowns.",
      "In web development, I believe in mastering fundamentals first: semantic HTML, modern CSS layouts, and modular JavaScript without unnecessary bloat. I strive to write code that is clean, accessible, and structured with intentionality."
    ],
    principles: [
      {
        num: "01",
        title: "First-Principles Thinking",
        description: "Breaking down complex problems into verifiable components before jumping into code or models."
      },
      {
        num: "02",
        title: "Analytical Discipline",
        description: "Treating trading signals and code architecture with equal rigor — validating assumptions and measuring performance."
      },
      {
        num: "03",
        title: "Continuous Learning Loop",
        description: "Viewing failed alpha tests and software bugs not as setbacks, but as the clearest feedback for iteration."
      }
    ],
    stats: [
      { label: "Active Focus", value: "Code & Alpha Signals" },
      { label: "Primary Platform", value: "WorldQuant BRAIN" },
      { label: "Development Ethos", value: "Clean & Semantic" },
      { label: "Mindset", value: "Continuous Iteration" }
    ]
  },

  projects: [
    {
      id: "personal-portfolio",
      title: "Personal Portfolio Website",
      category: "Frontend Engineering & Design System",
      status: "Production / Maintained",
      statusType: "live",
      description: "A bespoke, editorial-inspired portfolio created from first principles. Features a warm color palette, Fraunces serif typography, zero framework dependencies, accessible semantic structure, and responsive mobile-first architecture.",
      technologies: ["Semantic HTML5", "Modern CSS3", "JavaScript ES6+", "Design Systems", "Web Accessibility (WCAG AA)"],
      highlights: [
        "Editorial layout inspired by modern developer publications",
        "Fluid responsive typography with CSS clamp() and custom properties",
        "Zero bloat: lightning-fast load times and high Lighthouse scores",
        "Single source of truth data configuration for effortless updates"
      ],
      links: {
        github: "https://github.com/anikasharma/portfolio",
        demo: "#top",
        demoLabel: "Live Site (You are here)"
      },
      badge: "Featured Build"
    },
    {
      id: "alpha-research",
      title: "Quantitative Alpha Research",
      category: "WorldQuant BRAIN • Algorithmic Signals",
      status: "Active Research Lab",
      statusType: "research",
      description: "Mathematical formulation, simulation, and evaluation of quantitative alpha expressions on WorldQuant BRAIN. Explores equity time-series signals, price-volume divergence, decay functions, and turnover penalization across liquid US equity universes.",
      technologies: ["WorldQuant BRAIN", "Alpha Expressions", "Time-Series Operators", "Backtesting", "Sharpe & Fitness Analysis"],
      highlights: [
        "Tested decay-weighted momentum and mean-reversion alphas",
        "Rigorous backtesting distinguishing test experiments from validated signals",
        "Analysis of turnover constraints, sub-universe selection, and market neutrality",
        "Simulation metrics tracking: Sharpe ratio, fitness, drawdown, and information coefficient"
      ],
      links: {
        github: "https://github.com/anikasharma/alpha-research-notes",
        demo: "https://brain.worldquant.com",
        demoLabel: "BRAIN Platform Profile"
      },
      badge: "Quantitative Lab"
    },
    {
      id: "git-workflow",
      title: "Git & Development Workflow",
      category: "Developer Tooling & Best Practices",
      status: "Core Practice",
      statusType: "tooling",
      description: "A structured repository template and development framework codifying clean version control practices. Includes Conventional Commits, branch isolation policies, automated linting checks, and documentation standards for student engineering projects.",
      technologies: ["Git", "GitHub Actions", "VS Code Tooling", "Conventional Commits", "Markdown Docs"],
      highlights: [
        "Semantic commit history for crystal-clear project lineage",
        "Branch protection rules and pull request review templates",
        "Standardized repository architecture for reproducibility",
        "Comprehensive documentation guidelines for research experiments"
      ],
      links: {
        github: "https://github.com/anikasharma/dev-workflow-template",
        demo: "https://github.com/anikasharma",
        demoLabel: "GitHub Profile"
      },
      badge: "Tooling & Workflow"
    }
  ],

  skills: {
    kicker: "Competencies & Tooling",
    title: "Skills & Technical Knowledge",
    note: "Presented honestly based on active learning and experimentation — distinguishing core foundations from skills currently in progress.",
    categories: [
      {
        id: "frontend",
        name: "Frontend Development",
        description: "Building responsive, semantic, and accessible web experiences from scratch.",
        skills: [
          { name: "HTML5", level: "Core Foundation", note: "Semantic structure, accessibility tree, SEO" },
          { name: "CSS3", level: "Core Foundation", note: "Flexbox, CSS Grid, Custom Properties, fluid design" },
          { name: "JavaScript (ES6+)", level: "Actively Learning", note: "DOM manipulation, modules, async/fetch, event loop" },
          { name: "Responsive Design", level: "Core Foundation", note: "Mobile-first layouts, media queries, clamp scaling" },
          { name: "Web Accessibility", level: "Actively Learning", note: "Keyboard navigation, contrast compliance, ARIA basics" }
        ]
      },
      {
        id: "quantitative",
        name: "Quantitative Research & Modeling",
        description: "Formulating market signals and analyzing performance statistics on WorldQuant BRAIN.",
        skills: [
          { name: "Alpha Expressions", level: "Active Experimentation", note: "Cross-sectional ranking, decay operators, grouping" },
          { name: "Time-Series Signals", level: "Active Experimentation", note: "Moving averages, price-volume trends, momentum" },
          { name: "Backtesting Rigor", level: "Conceptually Grounded", note: "In-sample vs out-of-sample data, lookahead bias prevention" },
          { name: "Performance Metrics", level: "Conceptually Grounded", note: "Sharpe ratio, fitness score, margin, annualized return" },
          { name: "Risk & Turnover", level: "Conceptually Grounded", note: "Portfolio turnover limits, drawdowns, neutralization" }
        ]
      },
      {
        id: "tools",
        name: "Developer Tools & Workflow",
        description: "Essential software engineering tools for clean, repeatable, and collaborative work.",
        skills: [
          { name: "Git", level: "Core Practice", note: "Branching, staging, atomic commits, merge conflicts" },
          { name: "GitHub", level: "Core Practice", note: "Repositories, pull requests, releases, issue tracking" },
          { name: "VS Code", level: "Daily Driver", note: "Workspace settings, keybindings, linting integrations" },
          { name: "AI-Assisted Dev", level: "Daily Driver", note: "Antigravity, structured prompts, pair programming" }
        ]
      }
    ]
  },

  currentlyExploring: {
    kicker: "Continuous Learning",
    title: "Currently Exploring",
    subtitle: "Active areas of research, technical reading, and mini-experiments.",
    items: [
      {
        topic: "Cross-Sectional Momentum in Multi-Factor Alphas",
        category: "Quantitative Finance",
        platform: "WorldQuant BRAIN",
        description: "Investigating how volume-weighted decay functions mitigate turnover while preserving information coefficient across large-cap equity universes.",
        status: "Running Backtests",
        statusColor: "#CB593F"
      },
      {
        topic: "Component Architecture & State Patterns",
        category: "Frontend Engineering",
        platform: "JavaScript & Modern Web APIs",
        description: "Deepening understanding of state management, custom web components, and transition rendering without heavy runtime overhead.",
        status: "Building Projects",
        statusColor: "#385451"
      },
      {
        topic: "Statistical Signal Neutralization & Sub-Universe Masking",
        category: "Data & Market Signals",
        platform: "Alpha Simulation",
        description: "Studying market, sector, and industry neutralization techniques to isolate idiosyncratic alpha from broad market factor exposures.",
        status: "Literature Review",
        statusColor: "#233940"
      },
      {
        topic: "Accessible Design Systems & Micro-Interactions",
        category: "UI / UX Design",
        platform: "CSS Architecture",
        description: "Exploring refined typography pairing (serif + sans + mono), high-contrast accessible palettes, and subtle CSS transitions.",
        status: "Design Iteration",
        statusColor: "#385451"
      }
    ]
  },

  contact: {
    kicker: "Get In Touch",
    title: "Let's Connect & Collaborate",
    description: "I am actively seeking student internship opportunities, research collaborations, and connections with developers and quantitative researchers. Feel free to reach out directly or check out my work on GitHub.",
    email: "anika.sharma.research@example.com", // Customizable placeholder
    links: [
      {
        platform: "GitHub",
        handle: "github.com/anikasharma",
        url: "https://github.com/anikasharma",
        note: "Code repositories & experiments"
      },
      {
        platform: "LinkedIn",
        handle: "linkedin.com/in/anikasharma",
        url: "https://linkedin.com/in/anikasharma",
        note: "Professional background & updates"
      },
      {
        platform: "WorldQuant BRAIN",
        handle: "brain.worldquant.com/user/placeholder",
        url: "https://brain.worldquant.com",
        note: "Research profile & alpha submissions"
      }
    ]
  },

  footer: {
    author: "Anika Sharma",
    year: 2026,
    tagline: "Building at the intersection of code, data & markets.",
    colophon: "Designed with an editorial sensibility in Bengaluru. Set in Fraunces, DM Sans, and DM Mono. Built with semantic HTML, modern CSS, and modular JavaScript."
  }
};

