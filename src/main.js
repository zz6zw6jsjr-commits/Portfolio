/**
 * PORTFOLIO APPLICATION LOGIC & PROGRESSIVE ENHANCEMENT
 * ====================================================
 * Universal compatibility (works with ES Modules and traditional script tags).
 * Coordinates navigation, interactive alpha simulator, project modal,
 * email clipboard copy, data-binding, and accessibility features.
 */

// Fallback import if loaded via module bundler; otherwise reads from window.portfolioData
let data = (typeof window !== 'undefined' && window.portfolioData) ? window.portfolioData : null;

function getPortfolioData() {
  if (data) return data;
  if (typeof window !== 'undefined' && window.portfolioData) {
    data = window.portfolioData;
    return data;
  }
  return null;
}

function initApp() {
  // Mark document as JS-ready for subtle scroll reveals
  document.documentElement.classList.add('js-ready');

  syncDataToDOM();
  initNavigation();
  initAlphaSimulator();
  initClipboard();
  initContactForm();
  initProjectModals();
  initScrollSpy();
  initIntersectionReveals();
  initBackToTop();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

/**
 * Synchronize Data from portfolioData to DOM elements
 * Ensures editing src/data/portfolioData.js updates all matching elements!
 */
function syncDataToDOM() {
  const pData = getPortfolioData();
  if (!pData) return;

  // Sync email
  const emailEls = document.querySelectorAll('[data-bind-email]');
  emailEls.forEach(el => {
    el.textContent = pData.contact.email;
  });

  const emailLinks = document.querySelectorAll('[data-bind-email-link]');
  emailLinks.forEach(link => {
    link.setAttribute('href', `mailto:${pData.contact.email}`);
  });

  const copyEmailBtns = document.querySelectorAll('[data-copy-email]');
  copyEmailBtns.forEach(btn => {
    btn.setAttribute('data-copy-text', pData.contact.email);
  });
}

/**
 * Navigation Bar & Mobile Menu Drawer
 */
function initNavigation() {
  const toggleBtn = document.querySelector('.mobile-nav-toggle');
  const drawer = document.querySelector('.mobile-nav-drawer');
  const header = document.querySelector('.site-header');

  if (!toggleBtn || !drawer) return;

  function toggleMenu(open) {
    const shouldOpen = open !== undefined ? open : !drawer.classList.contains('is-open');
    toggleBtn.classList.toggle('is-open', shouldOpen);
    drawer.classList.toggle('is-open', shouldOpen);
    toggleBtn.setAttribute('aria-expanded', String(shouldOpen));
  }

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  // All links inside drawer (including CTA buttons) close the drawer
  const allDrawerLinks = drawer.querySelectorAll('a');
  allDrawerLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      toggleMenu(false);
      handleAnchorScroll(link, e);
    });
  });

  // Desktop navigation links smooth scroll
  const desktopLinks = document.querySelectorAll('.site-header .nav-link');
  desktopLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      handleAnchorScroll(link, e);
    });
  });

  function handleAnchorScroll(link, e) {
    const targetId = link.getAttribute('href');
    if (targetId && targetId.startsWith('#')) {
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerHeight = header?.offsetHeight || 72;
        const targetPosition = targetEl.getBoundingClientRect().top + window.pageYOffset - headerHeight + 5;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        history.pushState(null, '', targetId);
      }
    }
  }

  // Close drawer on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
      toggleMenu(false);
    }
  });

  // Close drawer on click outside
  document.addEventListener('click', (e) => {
    if (drawer.classList.contains('is-open') && !drawer.contains(e.target) && !toggleBtn.contains(e.target)) {
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

    // Dynamic SVG curve adjustment
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

  // Initialize immediately on startup with default slider value
  updateSimulation(slider.value);

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
      const pData = getPortfolioData();
      const defaultEmail = pData ? pData.contact.email : 'anika.sharma.research@example.com';
      const textToCopy = btn.getAttribute('data-copy-text') || defaultEmail;
      
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(textToCopy);
        } else {
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
 * Project Deep-Dive Modal (Data-Driven from portfolioData)
 */
function initProjectModals() {
  const modalBackdrop = document.getElementById('project-modal');
  const modalTitle = document.getElementById('modal-project-title');
  const modalBadge = document.getElementById('modal-project-badge');
  const modalContent = document.getElementById('modal-project-content');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalFooterCloseBtn = document.getElementById('modal-footer-close-btn');
  const triggerBtns = document.querySelectorAll('[data-project-trigger]');

  if (!modalBackdrop) return;

  function closeModal() {
    modalBackdrop.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  function openModal(projectId) {
    const pData = getPortfolioData();
    let project = pData ? pData.projects.find(p => p.id === projectId) : null;
    
    if (!project) return;

    if (modalTitle) modalTitle.textContent = project.title;
    if (modalBadge) modalBadge.textContent = project.deepDive?.badge || project.categoryFull || 'Deep Dive';

    let html = `
      <div style="display:flex; flex-direction:column; gap: 1rem;">
        <p class="body-muted" style="font-size: 0.95rem;">
          ${project.deepDive?.summary || project.description}
        </p>
    `;

    if (project.deepDive?.sampleFormula) {
      html += `
        <div style="background-color: #E7E2D5; padding: 1rem; border-left: 3px solid var(--color-terracotta); border-radius: 0 4px 4px 0; font-family: var(--font-mono); font-size: 0.8125rem; line-height: 1.5;">
          <strong style="color: var(--color-forest);">Tested Alpha Formula:</strong><br>
          ${project.deepDive.sampleFormula}
        </div>
      `;
    }

    if (project.deepDive?.terminalSpecimen) {
      html += `
        <div style="background-color: #233940; color: #F5F1E8; padding: 1rem; border-radius: 4px; font-family: var(--font-mono); font-size: 0.775rem; line-height: 1.6;">
          ${project.deepDive.terminalSpecimen.map(line => `<div>${line}</div>`).join('')}
        </div>
      `;
    }

    if (project.deepDive?.points && project.deepDive.points.length > 0) {
      html += `
        <div style="background-color: var(--color-bg-subtle); padding: 1rem 1.25rem; border-radius: 4px; border: 1px solid var(--border-subtle);">
          <h4 style="font-family: var(--font-serif); font-size: 1rem; margin-bottom: 0.5rem; color: var(--color-text-main);">Key Framework Principles:</h4>
          <ul style="font-size: 0.875rem; color: var(--color-text-muted); line-height: 1.6; list-style: disc; padding-left: 1.25rem;">
            ${project.deepDive.points.map(pt => `<li>${pt}</li>`).join('')}
          </ul>
        </div>
      `;
    }

    if (project.deepDive?.techStack) {
      html += `
        <p class="body-muted" style="font-size: 0.85rem; padding-top: 0.5rem; border-top: 1px dashed var(--border-subtle);">
          <strong>Technologies:</strong> ${project.deepDive.techStack}
        </p>
      `;
    }

    html += `</div>`;

    if (modalContent) modalContent.innerHTML = html;

    modalBackdrop.classList.add('is-open');
    document.body.style.overflow = 'hidden';
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
  if (modalFooterCloseBtn) {
    modalFooterCloseBtn.addEventListener('click', closeModal);
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
  const navLinks = document.querySelectorAll('.site-header .nav-link');

  if (!sections.length || !navLinks.length) return;

  function onScroll() {
    const scrollY = window.pageYOffset;
    const headerHeight = document.querySelector('.site-header')?.offsetHeight || 72;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - headerHeight - 40;
      const sectionId = current.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/**
 * Subtle Intersection Observer Scroll Reveals
 */
function initIntersectionReveals() {
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if (!revealElements.length) return;

  if (!('IntersectionObserver' in window)) {
    revealElements.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.05,
    rootMargin: '0px 0px -20px 0px'
  });

  revealElements.forEach(el => {
    // If element is already in initial viewport, mark visible immediately
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add('is-visible');
    } else {
      observer.observe(el);
    }
  });
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
    const subjectInput = form.querySelector('[name="subject"]');
    const messageInput = form.querySelector('[name="message"]');

    if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
      if (feedback) {
        feedback.textContent = "Please fill in all required fields (Name, Email, and Message).";
        feedback.style.color = "var(--color-terracotta)";
        feedback.style.display = "block";
      }
      return;
    }

    const pData = getPortfolioData();
    const targetEmail = pData ? pData.contact.email : 'anika.sharma.research@example.com';
    const encodedSubject = encodeURIComponent(subjectInput.value.trim() || 'Portfolio Inquiry');
    const encodedBody = encodeURIComponent(`From: ${nameInput.value.trim()} (${emailInput.value.trim()})\n\n${messageInput.value.trim()}`);
    const mailtoUrl = `mailto:${targetEmail}?subject=${encodedSubject}&body=${encodedBody}`;

    if (feedback) {
      feedback.innerHTML = `
        <strong>Thank you, ${nameInput.value.trim()}!</strong> Your message is ready.<br>
        <a href="${mailtoUrl}" class="btn btn-sm btn-primary" style="margin-top: 8px; display: inline-flex;">
          Send Email via Client →
        </a>
      `;
      feedback.className = "form-feedback success";
      form.reset();
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
