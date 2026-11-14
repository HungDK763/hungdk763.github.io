/**
 * =========================================================================
 * APPLICATION LOGIC (MODERN MINIMALIST EDITORIAL)
 * =========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  if (typeof PROFILE_CONFIG === 'undefined') {
    console.error('Không tìm thấy tệp profile-config.js!');
    return;
  }

  let currentCategory = 'all';

  // 1. RENDER PROFILE HEADER
  function renderHeader() {
    const { personal, skills } = PROFILE_CONFIG;

    document.title = `${personal.name} | ${personal.role}`;

    // Avatar & Info
    const avatarImg = document.getElementById('profile-avatar');
    if (avatarImg) avatarImg.src = personal.avatar;

    document.getElementById('profile-name').textContent = personal.name;
    document.getElementById('profile-role').textContent = personal.role;
    document.getElementById('profile-bio').textContent = personal.bio;

    // Email & Resume
    const btnEmail = document.getElementById('btn-email');
    if (btnEmail && personal.email) btnEmail.href = `mailto:${personal.email}`;

    const btnResume = document.getElementById('btn-resume');
    if (btnResume && personal.resumeUrl) btnResume.href = personal.resumeUrl;

    const navBtnResume = document.getElementById('nav-btn-resume');
    if (navBtnResume && personal.resumeUrl) navBtnResume.href = personal.resumeUrl;

    // Skills
    const skillsCloud = document.getElementById('skills-cloud');
    if (skillsCloud && skills) {
      skillsCloud.innerHTML = skills.map(skill => `
        <span class="clean-pill">
          ${skill.name}
        </span>
      `).join('');
    }
  }

  // 1.5 RENDER AWARDS & HONORS
  function renderAwards() {
    const container = document.getElementById('awards-list');
    if (!container || !PROFILE_CONFIG.awards) return;

    container.innerHTML = PROFILE_CONFIG.awards.map(award => `
      <div class="editorial-card p-4 flex flex-col justify-between hover:border-white/20 transition-all">
        <div>
          <div class="flex items-center justify-between gap-2 mb-2">
            <span class="text-xs font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-md border border-amber-400/20 whitespace-nowrap">
              ${award.year}
            </span>
            <span class="text-xs text-zinc-400 font-medium truncate">${award.team}</span>
          </div>
          <h4 class="text-sm font-bold text-white mb-1.5 leading-snug">
            ${award.title}
          </h4>
          <p class="text-xs text-zinc-400 leading-relaxed">
            ${award.desc}
          </p>
        </div>
      </div>
    `).join('');
  }

  // 1.8 RENDER CAREER TIMELINE
  function renderTimeline() {
    const container = document.getElementById('timeline-list');
    if (!container || !PROFILE_CONFIG.timeline) return;

    container.innerHTML = PROFILE_CONFIG.timeline.map((item) => `
      <div class="relative group">
        <!-- Node Dot -->
        <span class="absolute -left-[29px] top-4 w-2.5 h-2.5 rounded-full ${item.isCurrent ? 'bg-emerald-400 ring-4 ring-emerald-400/20 animate-pulse' : 'bg-zinc-600 ring-4 ring-[#09090b] group-hover:bg-blue-400'} transition-colors"></span>
        
        <div class="editorial-card p-4 hover:border-white/20 transition-all space-y-2">
          <!-- Row 1: Period (whitespace-nowrap) + Company -->
          <div class="flex items-center justify-between gap-2 border-b border-white/[0.04] pb-1.5">
            <span class="inline-flex items-center text-[11px] font-semibold font-mono whitespace-nowrap px-2 py-0.5 rounded ${item.isCurrent ? 'text-emerald-400 bg-emerald-400/10 border border-emerald-400/20' : 'text-zinc-400 bg-zinc-800'}">
              ${item.period}
            </span>
            <span class="text-xs font-semibold text-zinc-400 truncate">
              ${item.company}
            </span>
          </div>

          <!-- Row 2: Role on its own line -->
          <h4 class="text-sm font-bold text-white leading-snug">
            ${item.role}
          </h4>

          <!-- Row 3: Description -->
          <p class="text-xs text-zinc-300 leading-relaxed">
            ${item.desc}
          </p>
        </div>
      </div>
    `).join('');
  }

  // 2. RENDER CATEGORIES
  function renderCategories() {
    const filtersContainer = document.getElementById('category-filters');
    if (!filtersContainer || !PROFILE_CONFIG.categories) return;

    filtersContainer.innerHTML = PROFILE_CONFIG.categories.map(cat => `
      <button 
        data-category="${cat.id}" 
        class="filter-tab whitespace-nowrap ${cat.id === currentCategory ? 'active' : ''}">
        ${cat.label}
      </button>
    `).join('');

    filtersContainer.querySelectorAll('.filter-tab').forEach(btn => {
      btn.addEventListener('click', () => {
        filtersContainer.querySelectorAll('.filter-tab').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.getAttribute('data-category');
        renderProjects();
      });
    });
  }

  // 3. RENDER PROJECTS (EDITORIAL SHOWCASE CARDS)
  function renderProjects() {
    const grid = document.getElementById('projects-grid');
    const emptyState = document.getElementById('empty-state');
    const countBadge = document.getElementById('projects-count');
    if (!grid) return;

    const filteredProjects = PROFILE_CONFIG.projects.filter(p => {
      if (currentCategory === 'all') return true;
      return p.category === currentCategory;
    });

    if (countBadge) countBadge.textContent = filteredProjects.length;

    if (filteredProjects.length === 0) {
      grid.innerHTML = '';
      emptyState.classList.remove('hidden');
      return;
    }

    emptyState.classList.add('hidden');

    grid.innerHTML = filteredProjects.map(project => `
      <div class="editorial-card overflow-hidden flex flex-col group cursor-pointer" data-project-id="${project.id}">
        
        <!-- Media Container (16:9) -->
        <div class="relative w-full aspect-video overflow-hidden bg-zinc-950">
          <img 
            src="${project.heroImage}" 
            alt="${project.title}" 
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            loading="lazy"
          />
          <!-- Badge overlay -->
          <div class="absolute top-3 left-3 flex items-center gap-2">
            <span class="px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/10 text-xs font-semibold text-zinc-200">
              ${project.timeline}
            </span>
            ${project.featured ? `
              <span class="px-2.5 py-1 rounded-full bg-blue-600/90 text-xs font-semibold text-white shadow-sm">
                Nổi bật
              </span>
            ` : ''}
          </div>
        </div>

        <!-- Card Content -->
        <div class="p-6 flex-1 flex flex-col justify-between">
          <div>
            <div class="text-xs font-medium text-zinc-400 mb-1.5 flex items-center gap-1.5">
              <span>${project.role}</span>
            </div>

            <h3 class="font-display text-lg font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors mb-2">
              ${project.title}
            </h3>

            <p class="text-zinc-300 text-sm leading-relaxed mb-4 line-clamp-2">
              ${project.tagline || project.overview}
            </p>

            <!-- Skill Tags -->
            <div class="flex flex-wrap gap-1.5 mb-5">
              ${project.skills.slice(0, 4).map(skill => `
                <span class="clean-pill text-[11px] py-1 px-2">
                  ${skill}
                </span>
              `).join('')}
              ${project.skills.length > 4 ? `
                <span class="clean-pill text-[11px] py-1 px-2 text-zinc-400">
                  +${project.skills.length - 4}
                </span>
              ` : ''}
            </div>
          </div>

          <!-- Bottom Actions -->
          <div class="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-semibold">
            <button class="inline-flex items-center gap-1.5 text-blue-400 group-hover:text-white transition-colors">
              <span>Xem chi tiết dự án</span>
              <i data-lucide="arrow-up-right" class="w-4 h-4"></i>
            </button>

            <div class="flex items-center gap-3 text-zinc-400" onclick="event.stopPropagation()">
              ${project.links?.github ? `
                <a href="${project.links.github}" target="_blank" class="hover:text-white transition-colors p-1" title="Mã nguồn">
                  <i data-lucide="github" class="w-4 h-4"></i>
                </a>
              ` : ''}
              ${project.links?.demo ? `
                <a href="${project.links.demo}" target="_blank" class="hover:text-blue-400 transition-colors p-1" title="Xem Demo">
                  <i data-lucide="external-link" class="w-4 h-4"></i>
                </a>
              ` : ''}
            </div>
          </div>
        </div>

      </div>
    `).join('');

    // Attach click events
    grid.querySelectorAll('.editorial-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-project-id');
        openModal(id);
      });
    });

    if (window.lucide) lucide.createIcons();
  }

  // 4. CASE STUDY MODAL
  const modal = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalBackdrop = document.getElementById('modal-backdrop');

  function openModal(projectId) {
    const project = PROFILE_CONFIG.projects.find(p => p.id === projectId);
    if (!project || !modal) return;

    document.getElementById('modal-role').textContent = project.role;
    document.getElementById('modal-timeline').textContent = project.timeline;
    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-tagline').textContent = project.tagline || project.overview;

    const mainImg = document.getElementById('modal-main-image');
    mainImg.src = project.heroImage;

    // Gallery Thumbs
    const thumbsContainer = document.getElementById('modal-gallery-thumbs');
    const images = project.gallery && project.gallery.length > 0 ? project.gallery : [project.heroImage];

    if (images.length > 1) {
      thumbsContainer.classList.remove('hidden');
      thumbsContainer.innerHTML = images.map((imgUrl, idx) => `
        <button class="w-16 h-12 rounded-lg overflow-hidden border ${idx === 0 ? 'border-blue-400' : 'border-white/10 opacity-60'} hover:opacity-100 transition-all flex-shrink-0" onclick="document.getElementById('modal-main-image').src='${imgUrl}'">
          <img src="${imgUrl}" class="w-full h-full object-cover">
        </button>
      `).join('');
    } else {
      thumbsContainer.classList.add('hidden');
    }

    // Metrics Strip
    const metricsContainer = document.getElementById('modal-metrics');
    if (project.metrics && project.metrics.length > 0) {
      metricsContainer.classList.remove('hidden');
      metricsContainer.innerHTML = project.metrics.map(m => `
        <div class="p-3 rounded-xl bg-zinc-900 border border-white/[0.06] text-center">
          <div class="text-base sm:text-lg font-bold text-blue-400 mb-0.5">${m.value}</div>
          <div class="text-xs text-zinc-400">${m.label}</div>
        </div>
      `).join('');
    } else {
      metricsContainer.classList.add('hidden');
    }

    // Skills
    const skillsContainer = document.getElementById('modal-skills');
    skillsContainer.innerHTML = project.skills.map(s => `
      <span class="clean-pill">
        ${s}
      </span>
    `).join('');

    // Challenge & Solutions
    document.getElementById('modal-challenge').textContent = project.challenge || project.overview;
    
    const solutionsList = document.getElementById('modal-solutions');
    if (Array.isArray(project.solution)) {
      solutionsList.innerHTML = project.solution.map(item => `<li>${item}</li>`).join('');
    } else {
      solutionsList.innerHTML = `<li>${project.solution}</li>`;
    }

    // Actions
    const actionsContainer = document.getElementById('modal-actions');
    actionsContainer.innerHTML = '';
    if (project.links?.demo) {
      actionsContainer.innerHTML += `
        <a href="${project.links.demo}" target="_blank" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-zinc-950 font-semibold text-xs hover:bg-zinc-200 transition-all">
          <i data-lucide="external-link" class="w-4 h-4"></i>
          <span>Xem Video / Demo</span>
        </a>
      `;
    }
    if (project.links?.github) {
      actionsContainer.innerHTML += `
        <a href="${project.links.github}" target="_blank" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-medium text-xs transition-all">
          <i data-lucide="github" class="w-4 h-4"></i>
          <span>Xem Mã Nguồn GitHub</span>
        </a>
      `;
    }

    modal.classList.remove('hidden');
    requestAnimationFrame(() => {
      modal.classList.add('active');
    });
    document.body.style.overflow = 'hidden';

    if (window.lucide) lucide.createIcons();
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('active');
    setTimeout(() => {
      modal.classList.add('hidden');
      document.body.style.overflow = '';
    }, 200);
  }

  // 5. CONTACT MODAL (OPTION B)
  const contactModal = document.getElementById('contact-modal');
  const btnContact = document.getElementById('btn-contact');
  const navBtnContact = document.getElementById('nav-btn-contact');
  const contactCloseBtn = document.getElementById('contact-modal-close');
  const contactBackdrop = document.getElementById('contact-modal-backdrop');
  const copyEmailBtn = document.getElementById('copy-email-btn');
  const copyEmailText = document.getElementById('copy-email-text');

  function openContactModal() {
    if (!contactModal) return;
    contactModal.classList.remove('hidden');
    requestAnimationFrame(() => {
      contactModal.classList.add('active');
    });
    document.body.style.overflow = 'hidden';
    if (window.lucide) lucide.createIcons();
  }

  function closeContactModal() {
    if (!contactModal) return;
    contactModal.classList.remove('active');
    setTimeout(() => {
      contactModal.classList.add('hidden');
      document.body.style.overflow = '';
    }, 200);
  }

  if (btnContact) btnContact.addEventListener('click', openContactModal);
  if (navBtnContact) navBtnContact.addEventListener('click', openContactModal);
  if (contactCloseBtn) contactCloseBtn.addEventListener('click', closeContactModal);
  if (contactBackdrop) contactBackdrop.addEventListener('click', closeContactModal);

  // Copy email to clipboard
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      const email = PROFILE_CONFIG.personal.email || 'tolahungstm@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        if (copyEmailText) copyEmailText.textContent = 'Đã chép!';
        setTimeout(() => {
          if (copyEmailText) copyEmailText.textContent = 'Sao chép';
        }, 2000);
      }).catch(() => {
        const tempInput = document.createElement('input');
        tempInput.value = email;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        if (copyEmailText) copyEmailText.textContent = 'Đã chép!';
        setTimeout(() => {
          if (copyEmailText) copyEmailText.textContent = 'Sao chép';
        }, 2000);
      });
    });
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
      closeContactModal();
    }
  });

  // INITIAL RUN
  renderHeader();
  renderTimeline();
  renderAwards();
  renderCategories();
  renderProjects();
  if (window.lucide) lucide.createIcons();
});
