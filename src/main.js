/**
 * PORTFOLIO APPLICATION LOGIC & PROGRESSIVE ENHANCEMENT
 * ====================================================
 * Coordinates navigation, interactive alpha simulator, project modal,
 * email clipboard copy, and accessibility features.
 */

import { portfolioData } from './data/portfolioData.js';

document.addEventListener('DOMContentLoaded', () => {
  // Mark document as JS-ready for subtle scroll reveals
  document.documentElement.classList.add('js-ready');

  initNavigation();
  initAlphaSimulator();
  initClipboard();
  initContactForm();
  initProjectModals();
  initScrollSpy();
  initIntersectionReveals();
  initBackToTop();
});

/**
 * Navigation Bar & Mobile Menu Drawer
 */
function initNavigation() {
  const toggleBtn = document.querySelector('.mobile-nav-toggle');
  const drawer = document.querySelector('.mobile-nav-drawer');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!toggleBtn || !drawer) return;

  function toggleMenu(open) {
    const shouldOpen = open !== undefined ? open : !drawer.classList.contains('is-open');
    toggleBtn.classList.toggle('is-open', shouldOpen);
    drawer.classList.toggle('is-open', shouldOpen);
    toggleBtn.setAttribute('aria-expanded', String(shouldOpen));
  }

  toggleBtn.addEventListener('click', () => toggleMenu());

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      // Smooth close menu on link click
      toggleMenu(false);

      const targetId = link.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          const headerHeight = document.querySelector('.site-header')?.offsetHeight || 72;
          const targetPosition = targetEl.getBoundingClientRect().top + window.pageYOffset - headerHeight + 10;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
          // Update URL hash cleanly
          history.pushState(null, '', targetId);
        }
      }
    });
  });

  // Close drawer on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
      toggleMenu(false);
    }
  });
}

/**
 * Interactive Alpha Simulator Widget (Hero Section)
 * Simulates how varying time-series decay parameters affects
 * Sharpe ratio, Fitness score, and Portfolio Turnover in WorldQuant BRAIN.
 */
function initAlphaSimulator() {
  const slider = document.getElementById('alpha-decay-slider');
  const decayValDisplay = document.getElementById('decay-val-display');
  const sharpeDisplay = document.getElementById('metric-sharpe');
  const fitnessDisplay = document.getElementById('metric-fitness');
  const turnoverDisplay = document.getElementById('metric-turnover');
  const sparklinePolyline = document.getElementById('sparkline-line');
  const formulaDecayParam = document.getElementById('formula-decay-param');

  if (!slider) return;

  // Base simulation curve coordinates for d = 10
  const basePoints = [
    [0, 52], [25, 48], [50, 42], [75, 46], [100, 36], 
    [125, 30], [150, 34], [175, 24], [200, 20], [225, 22], 
    [250, 16], [275, 12], [300, 8]
  ];

  function updateSimulation(decayDays) {
    decayDays = parseInt(decayDays, 10);
    if (decayValDisplay) decayValDisplay.textContent = `${decayDays}d`;
    if (formulaDecayParam) formulaDecayParam.textContent = `${decayDays}`;

    // Quantitative simulation dynamics:
    // Higher decay window smooths weights -> lowers turnover, stabilizes Sharpe up to an inflection point
    let sharpe, fitness, turnover;
    if (decayDays <= 12) {
      sharpe = (1.50 + (decayDays - 4) * 0.045).toFixed(2);
      fitness = (1.10 + (decayDays - 4) * 0.04).toFixed(2);
      turnover = (32.0 - (decayDays - 4) * 2.2).toFixed(1);
    } else {
      sharpe = (1.86 - (decayDays - 12) * 0.02).toFixed(2);
      fitness = (1.42 - (decayDays - 12) * 0.022).toFixed(2);
      turnover = (14.4 - (decayDays - 12) * 0.45).toFixed(1);
    }

    if (sharpeDisplay) sharpeDisplay.textContent = sharpe;
    if (fitnessDisplay) fitnessDisplay.textContent = fitness;
    if (turnoverDisplay) turnoverDisplay.textContent = `${turnover}%`;

    // Shift sparkline curve slightly to visualize smoothed equity progression
    if (sparklinePolyline) {
      const smoothingFactor = (decayDays - 10) * 0.4;
      const updatedPoints = basePoints.map(([x, y], idx) => {
        const offset = Math.sin(idx * 0.7) * smoothingFactor;
        const adjustedY = Math.max(5, Math.min(55, y - (idx * 0.25 * smoothingFactor) + offset));
        return `${x},${adjustedY.toFixed(1)}`;
      }).join(' ');
      sparklinePolyline.setAttribute('points', updatedPoints);
    }
  }

  slider.addEventListener('input', (e) => {
    updateSimulation(e.target.value);
  });
}

/**
 * Copy to Clipboard with Toast Notification
 */
function initClipboard() {
  const copyBtns = document.querySelectorAll('[data-copy-action]');
  const toast = document.getElementById('toast-notification');
  const toastMsg = document.getElementById('toast-message');

  function showToast(message) {
    if (!toast || !toastMsg) return;
    toastMsg.textContent = message;
    toast.classList.add('show');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }

  copyBtns.forEach(btn => {
    btn.addEventListener('click', async () => {
      const textToCopy = btn.getAttribute('data-copy-text') || portfolioData.contact.email;
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(textToCopy);
        } else {
          // Fallback
          const tempInput = document.createElement('input');
          tempInput.value = textToCopy;
          document.body.appendChild(tempInput);
          tempInput.select();
          document.execCommand('copy');
          document.body.removeChild(tempInput);
        }
        showToast(`Copied to clipboard: ${textToCopy}`);
      } catch (err) {
        showToast(`Selected: ${textToCopy}`);
      }
    });
  });
}

/**
 * Project Deep-Dive Modal
 */
const projectDetails = {
  "personal-portfolio": {
    title: "Personal Portfolio Website — Design & Architecture",
    badge: "Frontend Engineering",
    content: `
      <div style="display:flex; flex-direction:column; gap: 1rem;">
        <p class="body-muted">
          This portfolio was designed from the ground up to reflect an authentic, student-developer voice. It deliberately departs from generic purple/dark AI templates, opting instead for a tactile editorial aesthetic inspired by printed developer publications.
        </p>
        <div style="background-color: var(--color-bg-subtle); padding: 1rem; border-radius: 4px; border: 1px solid var(--border-subtle);">
          <h4 style="font-family: var(--font-serif); font-size: 1rem; margin-bottom: 0.5rem; color: var(--color-text-main);">Key Engineering Decisions:</h4>
          <ul style="font-size: 0.875rem; color: var(--color-text-muted); line-height: 1.6; list-style: disc; padding-left: 1.25rem;">
            <li><strong>Zero runtime bloat:</strong> Instant rendering without multi-megabyte bundle dependencies.</li>
            <li><strong>CSS Custom Properties Architecture:</strong> 100% themeable token scale for typography, spacing, colors, and shadows.</li>
            <li><strong>Responsive fluid scaling:</strong> Uses <code>clamp()</code> for seamless transitions from mobile viewports to ultrawide displays.</li>
            <li><strong>Centralized Single Source of Truth:</strong> All projects, skills, and bio content configure neatly in <code>portfolioData.js</code>.</li>
          </ul>
        </div>
        <p class="body-muted" style="font-size: 0.875rem;">
          <strong>Tech Stack:</strong> Semantic HTML5, Modern CSS (Grid & Flexbox), ES6+ JavaScript, Google Fonts (Fraunces, DM Sans, DM Mono).
        </p>
      </div>
    `
  },
  "alpha-research": {
    title: "Quantitative Alpha Research — WorldQuant BRAIN",
    badge: "WorldQuant BRAIN Lab",
    content: `
      <div style="display:flex; flex-direction:column; gap: 1rem;">
        <p class="body-muted">
          WorldQuant BRAIN provides an algorithmic simulation environment where researchers formulate quantitative equity signals (alphas) by combining time-series, cross-sectional, and mathematical operators.
        </p>
        <div style="background-color: #E7E2D5; padding: 1rem; border-left: 3px solid var(--color-terracotta); border-radius: 0 4px 4px 0; font-family: var(--font-mono); font-size: 0.8rem; line-height: 1.5;">
          <strong>Sample Formula Tested:</strong><br>
          rank(ts_decay_linear(returns(close, 5), 10)) - rank(vwap / close)
        </div>
        <div style="background-color: var(--color-bg-subtle); padding: 1rem; border-radius: 4px; border: 1px solid var(--border-subtle);">
          <h4 style="font-family: var(--font-serif); font-size: 1rem; margin-bottom: 0.5rem; color: var(--color-text-main);">Experimental Framework & Metrics:</h4>
          <ul style="font-size: 0.875rem; color: var(--color-text-muted); line-height: 1.6; list-style: disc; padding-left: 1.25rem;">
            <li><strong>Universe Selection:</strong> Tested primarily on liquid universes (e.g. US Equities TOP3000) to ensure execution viability.</li>
            <li><strong>Turnover Management:</strong> Applied linear decay (<code>ts_decay_linear</code>) to balance information ratio against transaction friction.</li>
            <li><strong>Statistical Validation:</strong> Checked Sharpe ratio (>1.5), Fitness score (>1.2), margin, and maximum drawdown limits.</li>
            <li><strong>Integrity:</strong> Clear distinction between raw exploratory backtests and validated research submissions.</li>
          </ul>
        </div>
        <p class="body-muted" style="font-size: 0.875rem;">
          <strong>Focus:</strong> Understanding signal decay, cross-sectional ranking operators, and market neutrality principles.
        </p>
      </div>
    `
  },
  "git-workflow": {
    title: "Git & Development Workflow — Architecture",
    badge: "Developer Tooling",
    content: `
      <div style="display:flex; flex-direction:column; gap: 1rem;">
        <p class="body-muted">
          A disciplined development workflow is essential for both software projects and quantitative research notebooks. This project codifies clean repository hygiene, documentation practices, and version control discipline.
        </p>
        <div style="background-color: #233940; color: #F5F1E8; padding: 1rem; border-radius: 4px; font-family: var(--font-mono); font-size: 0.775rem; line-height: 1.5;">
          <span style="color:#6FCF97;">commit convention:</span> feat(alpha): add decay operator to price-volume signal<br>
          <span style="color:#E2B93B;">branch strategy:</span> main &lt;-- develop &lt;-- feature/decay-smoothing<br>
          <span style="color:#CB593F;">documentation:</span> clear reproduction steps in README.md
        </div>
        <div style="background-color: var(--color-bg-subtle); padding: 1rem; border-radius: 4px; border: 1px solid var(--border-subtle);">
          <h4 style="font-family: var(--font-serif); font-size: 1rem; margin-bottom: 0.5rem; color: var(--color-text-main);">Core Principles Implemented:</h4>
          <ul style="font-size: 0.875rem; color: var(--color-text-muted); line-height: 1.6; list-style: disc; padding-left: 1.25rem;">
            <li><strong>Conventional Commits:</strong> Structured commit logs for automated changelogs and readability.</li>
            <li><strong>Branch Protection:</strong> Protecting the main branch, enforcing code review practices.</li>
            <li><strong>Experiment Isolation:</strong> Keeping speculative data models on isolated experiment branches.</li>
          </ul>
        </div>
      </div>
    `
  }
};

function initProjectModals() {
  const modalBackdrop = document.getElementById('project-modal');
  const modalTitle = document.getElementById('modal-project-title');
  const modalBadge = document.getElementById('modal-project-badge');
  const modalContent = document.getElementById('modal-project-content');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const triggerBtns = document.querySelectorAll('[data-project-trigger]');

  if (!modalBackdrop) return;

  function openModal(projectId) {
    const data = projectDetails[projectId];
    if (!data) return;

    if (modalTitle) modalTitle.textContent = data.title;
    if (modalBadge) modalBadge.textContent = data.badge;
    if (modalContent) modalContent.innerHTML = data.content;

    modalBackdrop.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modalBackdrop.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  triggerBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = btn.getAttribute('data-project-trigger');
      openModal(projectId);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('is-open')) {
      closeModal();
    }
  });
}

/**
 * ScrollSpy for Sticky Navigation Highlighting
 */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!sections.length || !navLinks.length) return;

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    const headerHeight = document.querySelector('.site-header')?.offsetHeight || 72;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - headerHeight - 40;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, { passive: true });
}

/**
 * Subtle Intersection Observer Scroll Reveals
 */
function initIntersectionReveals() {
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if (!revealElements.length || !('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
}

/**
 * Contact Form Demo Submission Handler
 */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput = form.querySelector('[name="name"]');
    const emailInput = form.querySelector('[name="email"]');
    const messageInput = form.querySelector('[name="message"]');

    if (!nameInput.value || !emailInput.value || !messageInput.value) {
      alert("Please fill in all fields.");
      return;
    }

    if (feedback) {
      feedback.textContent = `Thank you, ${nameInput.value}! Your message note has been prepared. In the meantime, feel free to email ${portfolioData.contact.email} directly!`;
      feedback.classList.add('success');
      form.reset();
      setTimeout(() => {
        feedback.classList.remove('success');
      }, 7000);
    }
  });
}

/**
 * Back to Top Smooth Scroll
 */
function initBackToTop() {
  const backBtn = document.getElementById('back-to-top-btn');
  if (!backBtn) return;

  backBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

