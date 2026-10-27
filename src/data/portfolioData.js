/**
 * PORTFOLIO CONFIGURATION & DATA SOURCE
 * =====================================
 * Single source of truth for all personal details, projects,
 * skills, research experiments, and contact links.
 *
 * Supported both as an ES Module and a browser script (window.portfolioData).
 */

export const portfolioData = {
  personal: {
    name: "Anika Sharma",
    monogram: "AS",
    tag: "AS // 01",
    role: "Student Developer & Quantitative Research Enthusiast",
    location: "Bengaluru, India",
    statusBadge: {
      active: true,
      label: "Open to Internships",
      detail: "Open to Internships & Research Collaborations",
      dotColor: "#385451" // Forest green
    },
    shortBio: "Undergraduate student exploring frontend engineering, algorithmic trading concepts, and time-series alpha research on WorldQuant BRAIN. Passionate about craftsmanship, mathematics, and building clean web interfaces from first principles.",
    headline: "Building at the intersection of code, data & markets.",
    currentlyExploring: "Alpha Signals on BRAIN & Semantic Web Architecture"
  },

  navigation: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Exploring", href: "#exploring" },
    { label: "Contact", href: "#contact" }
  ],

  hero: {
    kicker: "Student Developer & Researcher",
    headline: "Building at the intersection of code, data & markets.",
    lead: "I am an undergraduate student exploring frontend engineering, algorithmic trading concepts, and time-series alpha research on WorldQuant BRAIN. Passionate about craftsmanship, mathematics, and building clean web interfaces from first principles.",
    primaryCta: {
      text: "Explore My Work",
      href: "#projects"
    },
    secondaryCta: {
      text: "Get In Touch",
      href: "#contact"
    },
    tickerText: "Alpha Signals on BRAIN & Semantic Web Architecture",
    specimen: {
      platform: "WorldQuant BRAIN • Simulation Lab",
      universe: "Universe: US TOP3000",
      formula: "rank(ts_decay_linear(returns(close, 5), {d})) - rank(vwap / close)",
      baseDecay: 10
    }
  },

  about: {
    kicker: "01 // About Me",
    title: "Curiosity, Analytical Rigor & Craft",
    metaSubtitle: "A student builder's journey driven by continuous experimentation, deep fundamentals, and deliberate practice.",
    lead: "I am a student fascinated by how simple mathematical rules and clean software architectures can capture complex dynamics — whether in financial markets or intuitive user interfaces.",
    paragraphs: [
      "My technical journey began with an innate curiosity about systems: understanding how data flows, how algorithms separate signal from market noise, and how clear digital interfaces communicate complex ideas without cognitive overhead.",
      "In quantitative finance, I actively experiment on the WorldQuant BRAIN platform, researching mathematical alpha expressions, time-series decay, and portfolio turnover dynamics. I approach every simulation as a learning lab — testing hypotheses systematically and learning from drawdowns.",
      "In web development, I believe in mastering fundamentals first: semantic HTML, modern CSS layouts, and modular JavaScript without unnecessary bloat. I strive to write code that is clean, accessible, and structured with intentionality."
    ],
    principles: [
      {
        num: "01",
        title: "First-Principles Thinking",
        description: "Breaking down complex problems into verifiable components before jumping into code or models. Seeking clarity before complexity."
      },
      {
        num: "02",
        title: "Analytical Discipline",
        description: "Treating trading signals and code architecture with equal rigor — validating assumptions, measuring performance, and respecting edge cases."
      },
      {
        num: "03",
        title: "Continuous Learning Loop",
        description: "Viewing failed alpha tests and software bugs not as setbacks, but as the clearest empirical feedback for deliberate iteration."
      }
    ],
    stats: [
      { label: "Current Focus", value: "Code & Alpha Modeling" },
      { label: "Research Platform", value: "WorldQuant BRAIN" },
      { label: "Frontend Ethos", value: "Clean & Semantic" },
      { label: "Growth Mindset", value: "Continuous Iteration" }
    ]
  },

  projects: [
    {
      id: "personal-portfolio",
      title: "Personal Portfolio Website",
      category: "Frontend",
      categoryFull: "Frontend Engineering & Design System",
      status: "Live & Maintained",
      statusType: "live",
      description: "A bespoke, editorial-inspired portfolio created from first principles. Features a warm off-white palette, Fraunces serif typography, zero bloated frameworks, semantic HTML, and fluid responsive scaling.",
      technologies: ["HTML5", "Modern CSS", "JavaScript", "Responsive", "WCAG AA"],
      links: {
        github: "https://github.com/anikasharma/portfolio",
        live: "#top",
        liveLabel: "Live Site ↑"
      },
      deepDive: {
        badge: "Frontend Engineering",
        summary: "This portfolio was designed from the ground up to reflect an authentic student-developer voice. It deliberately departs from generic purple/dark AI templates, opting instead for a tactile editorial aesthetic inspired by printed developer publications.",
        points: [
          "Zero runtime bloat: Instant rendering without multi-megabyte bundle dependencies.",
          "CSS Custom Properties Architecture: 100% themeable token scale for typography, spacing, colors, and shadows.",
          "Responsive fluid scaling: Uses clamp() for seamless transitions from mobile viewports to ultrawide displays.",
          "Centralized Single Source of Truth: All projects, skills, and bio content configure neatly in portfolioData.js.",
          "Accessible Focus & Contrast: Full WCAG AA color contrast compliance with keyboard-accessible navigation."
        ],
        techStack: "Semantic HTML5, Modern CSS (Grid & Flexbox), ES6+ JavaScript, Google Fonts (Fraunces, DM Sans, DM Mono)."
      }
    },
    {
      id: "alpha-research",
      title: "Quantitative Alpha Research",
      category: "Quantitative",
      categoryFull: "WorldQuant BRAIN • Algorithmic Signals",
      status: "Active BRAIN Lab",
      statusType: "research",
      description: "Mathematical modeling and simulation of quantitative trading signals on WorldQuant BRAIN. Explores equity time-series signals, price-volume divergence, decay functions, and turnover penalization across liquid US universes.",
      technologies: ["WorldQuant BRAIN", "Alpha Expressions", "Backtesting", "Sharpe Ratio"],
      links: {
        github: "https://github.com/anikasharma/alpha-research-notes",
        live: "https://brain.worldquant.com",
        liveLabel: "BRAIN Platform ↗"
      },
      deepDive: {
        badge: "WorldQuant BRAIN Lab",
        summary: "WorldQuant BRAIN provides an algorithmic simulation environment where researchers formulate quantitative equity signals (alphas) by combining time-series, cross-sectional, and mathematical operators.",
        sampleFormula: "rank(ts_decay_linear(returns(close, 5), 10)) - rank(vwap / close)",
        points: [
          "Universe Selection: Tested primarily on liquid universes (e.g. US Equities TOP3000) to ensure execution viability.",
          "Turnover Management: Applied linear decay (ts_decay_linear) to balance information ratio against transaction friction.",
          "Statistical Validation: Checked Sharpe ratio (>1.5), Fitness score (>1.2), margin, and maximum drawdown limits.",
          "Research Integrity: Clear distinction between raw exploratory backtests and validated research submissions.",
          "Neutralization: Explored market-neutral and industry-neutral groupings to isolate idiosyncratic returns."
        ],
        techStack: "WorldQuant BRAIN Platform, Python Analysis Notebooks, Financial Time-Series Data, Statistical Backtesting."
      }
    },
    {
      id: "git-workflow",
      title: "Git & Development Workflow",
      category: "Tooling",
      categoryFull: "Developer Tooling & Best Practices",
      status: "Core Practice",
      statusType: "tooling",
      description: "A disciplined repository framework codifying clean version control practices. Includes Conventional Commits, branch isolation policies, automated linting checks, and documentation standards for reproducible research.",
      technologies: ["Git", "GitHub", "VS Code", "Conventional Commits"],
      links: {
        github: "https://github.com/anikasharma/dev-workflow-template",
        live: "https://github.com/anikasharma",
        liveLabel: "GitHub Profile ↗"
      },
      deepDive: {
        badge: "Developer Tooling",
        summary: "A disciplined development workflow is essential for both software projects and quantitative research notebooks. This project codifies clean repository hygiene, documentation practices, and version control discipline.",
        terminalSpecimen: [
          "commit convention: feat(alpha): add decay operator to price-volume signal",
          "branch strategy: main <-- develop <-- feature/decay-smoothing",
          "documentation: clear reproduction steps in README.md"
        ],
        points: [
          "Conventional Commits: Structured commit messages for readable git lineage and automated changelogs.",
          "Branch Isolation: Clean branch lifecycles separating production code from speculative experiments.",
          "Review Hygiene: Structured pull request descriptions documenting hypotheses and test outcomes.",
          "Reproducibility: Standardized directory hierarchies and environment specification for repeatable setups."
        ],
        techStack: "Git, GitHub, Visual Studio Code, Markdown Specifications, Shell Utilities."
      }
    }
  ],

  skills: {
    kicker: "03 // Competencies",
    title: "Skills & Technical Knowledge",
    metaSubtitle: "Organized honestly by active learning stage — distinguishing fundamental core competencies from areas in active experimentation.",
    categories: [
      {
        id: "frontend",
        domain: "Domain 01",
        name: "Frontend Engineering",
        description: "Crafting responsive, semantic, and performant web interfaces from first principles.",
        skills: [
          { name: "HTML5", level: "Core Foundation", note: "Semantic tags, document outline, accessibility tree" },
          { name: "CSS3 & Responsive Layout", level: "Core Foundation", note: "Flexbox, CSS Grid, Custom Properties, clamp scaling" },
          { name: "JavaScript (ES6+)", level: "Actively Learning", note: "DOM manipulation, modules, event loop, fetch API" },
          { name: "Web Accessibility", level: "Actively Learning", note: "Keyboard navigation, WCAG AA contrast, ARIA landmarks" },
          { name: "Modern Dev Tools", level: "Core Foundation", note: "Browser devtools, responsive emulation, performance audit" }
        ]
      },
      {
        id: "quantitative",
        domain: "Domain 02",
        name: "Quantitative Research & Market Modeling",
        description: "Formulating algorithmic trading signals and evaluating performance metrics on WorldQuant BRAIN.",
        skills: [
          { name: "Alpha Expressions", level: "Active Research", note: "Cross-sectional ranking, mathematical operators, grouping" },
          { name: "Time-Series Signals", level: "Active Research", note: "Price-volume divergence, linear decay, momentum tracking" },
          { name: "Backtesting Methodology", level: "Conceptually Grounded", note: "In-sample vs out-of-sample rigor, lookahead bias prevention" },
          { name: "Performance Statistics", level: "Conceptually Grounded", note: "Sharpe ratio, fitness score, margin, annualized returns" },
          { name: "Turnover & Risk", level: "Conceptually Grounded", note: "Portfolio turnover penalties, sub-universe constraints" }
        ]
      },
      {
        id: "tools",
        domain: "Domain 03",
        name: "Developer Tooling & Workflow",
        description: "Modern version control, editors, and structured pair programming workflows.",
        skills: [
          { name: "Git Version Control", level: "Core Practice", note: "Branching, atomic commits, staging, merge resolution" },
          { name: "GitHub", level: "Core Practice", note: "Repositories, PR reviews, issue management, release tags" },
          { name: "Visual Studio Code", level: "Daily Driver", note: "Workspace customization, formatting, terminal debugging" },
          { name: "AI-Assisted Development", level: "Daily Driver", note: "Antigravity, prompt engineering, accelerated learning" }
        ]
      }
    ]
  },

  currentlyExploring: {
    kicker: "04 // Continuous Learning",
    title: "Currently Exploring",
    metaSubtitle: "A living log of active research hypotheses, readings, and technical investigations. Easy to update as my studies progress.",
    items: [
      {
        topic: "Cross-Sectional Momentum in Multi-Factor Alphas",
        category: "Quantitative Finance",
        platform: "WorldQuant BRAIN Platform",
        description: "Investigating how volume-weighted decay functions mitigate portfolio turnover while preserving information coefficient across US large-cap equity universes on WorldQuant BRAIN.",
        status: "Running Backtests",
        statusColor: "#CB593F"
      },
      {
        topic: "Component Architecture & State Management",
        category: "Frontend Architecture",
        platform: "Vanilla JavaScript & Modern Web APIs",
        description: "Deepening understanding of state lifecycle, custom web components, and smooth DOM transitions without the overhead of heavy framework bundles.",
        status: "Building Projects",
        statusColor: "#385451"
      },
      {
        topic: "Statistical Signal Neutralization & Factor Exposures",
        category: "Market Data Signals",
        platform: "Financial Time-Series Analysis",
        description: "Studying market, sector, and industry neutralization techniques to isolate idiosyncratic equity alpha from macroeconomic and factor momentum trends.",
        status: "Literature Review",
        statusColor: "#233940"
      },
      {
        topic: "Accessible Editorial Design & Micro-Interactions",
        category: "Design Systems",
        platform: "CSS Architecture & WCAG AA",
        description: "Exploring typography pairing (Fraunces serif with DM Sans and DM Mono), tactile color palettes, and refined micro-interactions that feel polished rather than distracting.",
        status: "Design Iteration",
        statusColor: "#385451"
      }
    ]
  },

  contact: {
    kicker: "05 // Get In Touch",
    title: "Let's Connect & Collaborate",
    metaSubtitle: "Open to student internships, research collaborations, and discussions with developers and quantitative analysts.",
    lead: "I am actively looking for internship opportunities and collaborative projects in frontend engineering and quantitative research.",
    email: "anika.sharma.research@example.com", // Customizable placeholder
    links: [
      {
        platform: "GitHub",
        handle: "github.com/anikasharma",
        url: "https://github.com/anikasharma"
      },
      {
        platform: "LinkedIn",
        handle: "linkedin.com/in/anikasharma",
        url: "https://linkedin.com/in/anikasharma"
      },
      {
        platform: "WorldQuant BRAIN",
        handle: "Research Profile & Alphas",
        url: "https://brain.worldquant.com"
      }
    ]
  },

  footer: {
    name: "Anika Sharma",
    year: 2026,
    tagline: "Building at the intersection of code, data & markets. A student portfolio dedicated to craft, curiosity, and continuous learning.",
    colophon: "Set in Fraunces, DM Sans & DM Mono."
  }
};

// Universal export for browser script tag and modules
if (typeof window !== 'undefined') {
  window.portfolioData = portfolioData;
}
