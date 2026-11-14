/**
 * =========================================================================
 * APPLICATION LOGIC (INDUSTRIAL HARDWARE & TECHNICAL PRECISION)
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

    // Document title
    document.title = `${personal.name} | ${personal.role}`;

    // Telemetry bar
    const telStatus = document.getElementById('telemetry-status');
    if (telStatus) telStatus.textContent = `SYS_STATUS: ${personal.status.toUpperCase()}`;

    const telComp = document.getElementById('telemetry-company');
    if (telComp && personal.company) telComp.textContent = `@ ${personal.company.toUpperCase()}`;

    const telLoc = document.getElementById('telemetry-location');
    if (telLoc && personal.location) telLoc.textContent = `LOC: ${personal.location.toUpperCase()}`;

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

    // Core Skills Matrix
    const skillsCloud = document.getElementById('skills-cloud');
    if (skillsCloud && skills) {
      skillsCloud.innerHTML = skills.map(skill => `
        <span class="bracket-tag">
          [ ${skill.name} ]
        </span>
      `).join('');
    }
  }

  // 1.5 RENDER FIELD AWARDS & TRACK RECORD
  function renderAwards() {
    const container = document.getElementById('awards-list');
    if (!container || !PROFILE_CONFIG.awards) return;

    container.innerHTML = PROFILE_CONFIG.awards.map(award => `
      <div class="tech-box p-3.5 flex flex-col justify-between">
        <div>
          <div class="font-mono text-[10px] text-amber-500 flex items-center justify-between mb-1.5 border-b border-hw-border pb-1">
            <span>YEAR: ${award.year}</span>
            <span class="text-slate-400">${award.team}</span>
          </div>
          <h4 class="text-xs sm:text-sm font-bold text-slate-100 mb-1 leading-snug tracking-tight">
            ${award.title}
          </h4>
          <p class="text-[11px] text-slate-400 leading-relaxed font-mono">
            ${award.desc}
          </p>
        </div>
      </div>
    `).join('');
  }

  // 2. RENDER CATEGORIES
  function renderCategories() {
    const filtersContainer = document.getElementById('category-filters');
    if (!filtersContainer || !PROFILE_CONFIG.categories) return;

    filtersContainer.innerHTML = PROFILE_CONFIG.categories.map((cat, idx) => `
      <button 
        data-category="${cat.id}" 
        class="tech-filter-btn ${cat.id === currentCategory ? 'active' : ''}">
        [ 0${idx}_${cat.label.replace(/\s+/g, '_').toUpperCase()} ]
      </button>
    `).join('');

    filtersContainer.querySelectorAll('.tech-filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        filtersContainer.querySelectorAll('.tech-filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.getAttribute('data-category');
        renderProjects();
      });
    });
  }

  // 3. RENDER PROJECTS (HARDWARE CASE FILES)
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

    grid.innerHTML = filteredProjects.map((project, idx) => `
      <div class="tech-box p-4 flex flex-col justify-between group cursor-pointer" data-project-id="${project.id}">
        
        <!-- Case File Header -->
        <div class="font-mono text-[11px] text-slate-400 flex items-center justify-between pb-2.5 mb-3 border-b border-hw-border">
          <div class="flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span class="text-amber-500 font-bold">CASE_FILE_${String(idx + 1).padStart(2, '0')}</span>
            <span class="text-slate-600">//</span>
            <span>${project.timeline}</span>
          </div>
          ${project.featured ? `
            <span class="px-1.5 py-0.2 bg-amber-500/10 border border-amber-500/30 text-[10px] text-amber-400 font-bold">
              [ FEATURED ]
            </span>
          ` : ''}
        </div>

        <!-- Media Preview Frame -->
        <div class="relative w-full aspect-video bg-hw-950 border border-hw-border overflow-hidden mb-4">
          <img 
            src="${project.heroImage}" 
            alt="${project.title}" 
            class="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
            loading="lazy"
          />
        </div>

        <!-- Title & Overview -->
        <div class="flex-1 flex flex-col justify-between">
          <div>
            <div class="font-mono text-[11px] text-slate-400 mb-1 flex items-center gap-1.5">
              <span>ROLE:</span>
              <span class="text-slate-200">${project.role}</span>
            </div>

            <h3 class="text-lg font-bold text-white tracking-tight group-hover:text-amber-400 transition-colors mb-2">
              ${project.title}
            </h3>

            <p class="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2">
              ${project.tagline || project.overview}
            </p>

            <!-- Technical Specification Badges -->
            <div class="flex flex-wrap gap-1 mb-4">
              ${project.skills.slice(0, 5).map(skill => `
                <span class="bracket-tag">
                  [ ${skill} ]
                </span>
              `).join('')}
              ${project.skills.length > 5 ? `
                <span class="bracket-tag text-slate-500">
                  +${project.skills.length - 5}
                </span>
              ` : ''}
            </div>
          </div>

          <!-- Bottom Action Strip -->
          <div class="pt-3 border-t border-hw-border flex items-center justify-between font-mono text-xs">
            <button class="inline-flex items-center gap-1.5 text-amber-400 group-hover:text-amber-300 transition-colors font-bold">
              <span>[ VIEW_CASE_FILE → ]</span>
            </button>

            <div class="flex items-center gap-3 text-slate-400" onclick="event.stopPropagation()">
              ${project.links?.github ? `
                <a href="${project.links.github}" target="_blank" class="hover:text-white transition-colors" title="Mã nguồn">
                  [ GIT ]
                </a>
              ` : ''}
              ${project.links?.demo ? `
                <a href="${project.links.demo}" target="_blank" class="hover:text-amber-400 transition-colors" title="Demo / Video">
                  [ DEMO ]
                </a>
              ` : ''}
            </div>
          </div>
        </div>

      </div>
    `).join('');

    // Attach click to open modal
    grid.querySelectorAll('.tech-box[data-project-id]').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-project-id');
        openModal(id);
      });
    });

    if (window.lucide) lucide.createIcons();
  }

  // 4. TECHNICAL DOSSIER MODAL
  const modal = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalBackdrop = document.getElementById('modal-backdrop');

  function openModal(projectId) {
    const project = PROFILE_CONFIG.projects.find(p => p.id === projectId);
    if (!project || !modal) return;

    document.getElementById('modal-role').textContent = project.role.toUpperCase();
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
        <button class="w-16 h-12 border ${idx === 0 ? 'border-amber-400' : 'border-hw-border opacity-60'} hover:opacity-100 transition-all flex-shrink-0" onclick="document.getElementById('modal-main-image').src='${imgUrl}'">
          <img src="${imgUrl}" class="w-full h-full object-cover">
        </button>
      `).join('');
    } else {
      thumbsContainer.classList.add('hidden');
    }

    // Metrics (KPI cards in technical style)
    const metricsContainer = document.getElementById('modal-metrics');
    if (project.metrics && project.metrics.length > 0) {
      metricsContainer.classList.remove('hidden');
      metricsContainer.innerHTML = project.metrics.map(m => `
        <div class="tech-box p-2.5 text-center font-mono">
          <div class="text-sm sm:text-base font-bold text-amber-400 mb-0.5">${m.value}</div>
          <div class="text-[10px] text-slate-400 uppercase">${m.label}</div>
        </div>
      `).join('');
    } else {
      metricsContainer.classList.add('hidden');
    }

    // Skills
    const skillsContainer = document.getElementById('modal-skills');
    skillsContainer.innerHTML = project.skills.map(s => `
      <span class="bracket-tag">
        [ ${s} ]
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
        <a href="${project.links.demo}" target="_blank" class="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-hw-950 font-bold transition-all">
          [ WATCH_DEMO_VIDEO ]
        </a>
      `;
    }
    if (project.links?.github) {
      actionsContainer.innerHTML += `
        <a href="${project.links.github}" target="_blank" class="px-3 py-1.5 tech-box text-slate-200 hover:text-white transition-all">
          [ GITHUB_REPOSITORY ]
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
    }, 150);
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // INITIAL RUN
  renderHeader();
  renderAwards();
  renderCategories();
  renderProjects();
  if (window.lucide) lucide.createIcons();
});
