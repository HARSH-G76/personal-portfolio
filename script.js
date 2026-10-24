/* ================================================================
   HARSH CHAUHAN — Anonymous Hacker Portfolio OS
   script.js  —  complete application logic
   ================================================================
   TABLE OF CONTENTS
   1.  CONFIG / DATA  — edit ALL personal content here
   2.  UTILITY FUNCTIONS
   3.  MATRIX RAIN CANVAS
   4.  CRT EFFECTS & REDUCED MOTION
   5.  BOOT SEQUENCE
   6.  CLOCK & PANEL
   7.  WINDOW MANAGER (drag, resize, focus, minimize, maximize)
   8.  CONTENT BUILDERS (about, skills, projects, experience, etc.)
   9.  TERMINAL
   10. ASK AI (offline knowledge base)
   11. LIGHTBOX
   12. BLOG
   13. CONTACT FORM
   14. COMMAND PALETTE (Ctrl+K)
   15. EASTER EGGS (Konami code)
   16. CURSOR TRAIL
   17. THEME & SETTINGS (localStorage)
   18. VISITOR COUNTER
   19. MOBILE LAYOUT
   20. INIT
   ================================================================ */

'use strict';

/* ================================================================
   1. CONFIG / DATA — edit ALL personal content here
   ================================================================ */
const CONFIG = {
  profile: {
    name: 'Harsh Chauhan',
    role: 'Web Developer',
    fullRole: 'Web Developer | Aspiring Software Engineer | BCA Student | Frontend Enthusiast',
    email: 'harshchauhan.bca@gmail.com',
    education: 'BCA, 1st Year — World College of Technology & Management (WCTM), Gurugram',
    goal: 'I want to become a Software Engineer. I\'m a BCA student building real-world web projects.',
    avatar: 'assets/photo/avatar.png',
    resume: 'assets/resume.pdf',
    location: 'Gurugram, Haryana, India',
  },
  links: {
    github:    'https://github.com/HARSH-G76',
    linkedin:  'https://www.linkedin.com/in/harsh-chauhan-14568a407/',
    youtube1:  'https://www.youtube.com/@HRXUG76',
    youtube2:  'https://www.youtube.com/@hrharshyt76',
  },
  skills: {
    categories: [
      {
        id: 'frontend', label: 'Frontend', icon: 'fa-solid fa-code',
        items: [
          { name: 'HTML',       level: 90 },
          { name: 'CSS',        level: 85 },
          { name: 'JavaScript', level: 80 },
          { name: 'React',      level: 55, note: 'learning' },
          { name: 'Frontend Development', level: 82 },
        ],
      },
      {
        id: 'backend', label: 'Backend / DB', icon: 'fa-solid fa-database',
        items: [
          { name: 'Firebase',  level: 70 },
          { name: 'Supabase',  level: 65 },
        ],
      },
      {
        id: 'tools', label: 'Tools', icon: 'fa-solid fa-wrench',
        items: [
          { name: 'Git',       level: 78 },
          { name: 'GitHub',    level: 80 },
          { name: 'AI Tools',  level: 75 },
        ],
      },
      {
        id: 'languages', label: 'Languages', icon: 'fa-solid fa-laptop-code',
        items: [
          { name: 'C Programming', level: 72 },
          { name: 'JavaScript',    level: 80 },
        ],
      },
    ],
  },
  projects: [
    {
      title: 'Chat App',
      desc: 'A real-time chat application with a clean UI for instant messaging.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
      demo: 'http://chatgapp.surge.sh/',
      code: 'https://github.com/HARSH-G76',
      image: 'assets/projects/project1.png',
      category: 'web',
      features: ['Real-time messaging', 'Clean responsive UI', 'Firebase backend', 'User authentication'],
    },
    {
      title: 'Miss Punch Tracker',
      desc: 'An attendance and punch-tracking app with an admin panel for managing employee records.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
      demo: 'https://harsh-g76.github.io/Miss-Punch-Tracker/',
      code: 'https://github.com/HARSH-G76/Miss-Punch-Tracker',
      image: 'assets/projects/project2.png',
      category: 'web',
      features: ['Attendance tracking', 'Admin panel', 'Punch in/out records', 'Data persistence'],
    },
    {
      title: 'Microsoft Homepage UI Clone',
      desc: 'A pixel-accurate recreation of the Microsoft homepage with responsive navigation and layouts.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      demo: 'https://harsh-g76.github.io/microsoft-homepage-ui-clone/',
      code: 'https://github.com/HARSH-G76/microsoft-homepage-ui-clone',
      image: 'assets/projects/project3.png',
      category: 'clone',
      features: ['Pixel-accurate UI', 'Responsive layout', 'Navigation menu', 'Product showcase'],
    },
    {
      title: 'HR Foundation NGO Website',
      desc: 'A website for an NGO with information sections, donation calls, and contact functionality.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      demo: 'https://harsh-g76.github.io/hr-foundation-web-project/',
      code: 'https://github.com/HARSH-G76/hr-foundation-web-project',
      image: 'assets/projects/project4.png',
      category: 'web',
      features: ['Mission & vision sections', 'Donation call-to-action', 'Contact form', 'Responsive design'],
    },
    {
      title: 'Rama Hospital Website',
      desc: 'A hospital website with departments, appointment booking UI, and doctor profiles.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      demo: 'https://ramahospital.netlify.app/',
      code: 'https://github.com/HARSH-G76',
      image: 'assets/projects/project5.png',
      category: 'web',
      features: ['Department listings', 'Appointment UI', 'Doctor profiles', 'Contact information'],
    },
  ],
  experience: [
    {
      title: 'Web Development Intern',
      org: 'Inamigos Foundation',
      date: '2024',
      desc: 'Worked on real-world web development projects, building and deploying front-end interfaces. Earned an Internship Certificate and was awarded the "Best Intern" certificate for performance.',
      awards: ['Internship Certificate', 'Best Intern Certificate'],
    },
    {
      title: 'Internshala Student Partner (ISP)',
      org: 'Internshala',
      date: '2024',
      desc: 'Selected for the Internshala Student Partner program. Received a Direct Entry Certificate for participation and completion of program activities.',
      awards: ['ISP Direct Entry Certificate'],
    },
  ],
  certificates: [
    { title: 'Internship Certificate',     issuer: 'Inamigos Foundation', date: '2026', image: 'assets/certificates/cert1.png', category: 'internship' },
    { title: 'Best Intern Certificate',    issuer: 'Inamigos Foundation', date: '2026', image: 'assets/certificates/cert2.png', category: 'achievement' },
    { title: 'ISP Direct Entry Certificate', issuer: 'Internshala',        date: '2026', image: 'assets/certificates/cert3.png', category: 'achievement' },
  ],
  blog: [
    {
      title: 'How I built my Chat App',
      excerpt: 'A walkthrough of building a real-time chat app from scratch using Firebase and vanilla JavaScript.',
      content: 'Building a chat app was my first deep dive into real-time web development. I used Firebase for the backend because it handles real-time data sync out of the box.\n\nThe biggest challenge was managing the chat state — keeping messages ordered, handling new messages efficiently, and making the UI feel instant. I learned to use Firebase\'s onSnapshot-style listeners to react to data changes.\n\nFor the UI, I kept it simple: a message list, an input field, and a send button. CSS flexbox made the layout responsive. The app is deployed on Surge.sh and works on both desktop and mobile.\n\nKey takeaways: real-time databases are powerful, simple UIs can feel great with the right interactions, and deployment platforms like Surge make going live painless.',
      tags: ['JavaScript', 'Firebase', 'Projects'],
      date: '2024-08-15',
      readTime: 4,
    },
    {
      title: 'My internship experience at Inamigos Foundation',
      excerpt: 'What I learned during my web development internship, from first-day nerves to winning Best Intern.',
      content: 'My internship at Inamigos Foundation was a turning point. I went in knowing HTML and CSS but not much about building complete projects.\n\nDuring the internship, I worked on multiple web projects, each teaching me something new — responsive layouts, JavaScript interactivity, Git workflows, and deployment. My mentors were supportive and gave real feedback.\n\nBy the end, I had built and deployed several projects. The "Best Intern" certificate was unexpected and motivating. It showed me that consistent effort gets noticed.\n\nAdvice for fellow students: take internships seriously, ask questions, build things that actually work, and deploy them. A live project is worth more than a hundred tutorials.',
      tags: ['Internship', 'Learning', 'Career'],
      date: '2024-09-01',
      readTime: 5,
    },
    {
      title: 'Learning JavaScript as a BCA student',
      excerpt: 'My journey learning JavaScript in my first year of BCA — resources, struggles, and tips.',
      content: 'JavaScript was the first programming language that clicked for me. As a BCA first-year student, I started with C programming in class, but JavaScript felt different because I could see results instantly in the browser.\n\nI started with free resources: MDN docs, YouTube tutorials, and hands-on practice. The key was building small things — a counter, a to-do list, a calculator — instead of just watching tutorials.\n\nThe hardest part was understanding asynchronous JavaScript and callbacks. It took time, but building a chat app with Firebase made it click.\n\nMy tips: build projects early, don\'t get stuck in tutorial hell, read documentation, and deploy everything you build. Even a simple app on GitHub Pages feels like an achievement.',
      tags: ['JavaScript', 'Learning', 'BCA'],
      date: '2024-09-20',
      readTime: 3,
    },
  ],
  windows: [
    { id: 'about',        title: 'About.exe',        icon: 'fa-solid fa-user-secret',   width: 620, height: 480 },
    { id: 'skills',       title: 'System Settings — Skills', icon: 'fa-solid fa-chart-simple', width: 720, height: 500 },
    { id: 'projects',     title: 'Projects/',        icon: 'fa-solid fa-folder-open',   width: 820, height: 560 },
    { id: 'experience',   title: 'Experience.log',   icon: 'fa-solid fa-briefcase',     width: 560, height: 520 },
    { id: 'certificates', title: 'Certificates.db',  icon: 'fa-solid fa-award',         width: 760, height: 520 },
    { id: 'resume',       title: 'Resume.pdf',       icon: 'fa-solid fa-file-lines',    width: 680, height: 580 },
    { id: 'terminal',     title: 'Terminal',         icon: 'fa-solid fa-terminal',      width: 640, height: 440 },
    { id: 'askai',        title: 'Ask AI — Portfolio Assistant', icon: 'fa-solid fa-robot', width: 500, height: 560 },
    { id: 'blog',         title: 'blog.md',          icon: 'fa-solid fa-newspaper',     width: 680, height: 520 },
    { id: 'contact',      title: 'Contact.form',     icon: 'fa-solid fa-envelope-open-text', width: 720, height: 500 },
  ],
};

/* ================================================================
   2. UTILITY FUNCTIONS
   ================================================================ */
const $  = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
const el = (tag, cls, html) => {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html != null) e.innerHTML = html;
  return e;
};
const clamp = (v, min, max) => Math.max(min, Math.min(max, v));
const rand  = (min, max) => Math.random() * (max - min) + min;
const pad2  = n => String(n).padStart(2, '0');

const STORAGE_KEYS = {
  theme: 'hc_theme',
  effects: 'hc_effects',
  sound: 'hc_sound',
  visitor: 'hc_visitor_count',
  windows: 'hc_window_state',
};

const isMobile = () => window.innerWidth < 768;
const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ================================================================
   3. MATRIX RAIN CANVAS
   ================================================================ */
const MatrixRain = (() => {
  const canvas = $('#matrix-canvas');
  const ctx = canvas.getContext('2d');
  let cols, drops, animId, running = true, fontSize = 14;
  const chars = '01ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜｦﾝ<>{}[]/\\=+*#$%@';
  let lastTime = 0;
  const FPS_INTERVAL = 1000 / 30; // cap at 30fps for performance

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    cols = Math.floor(canvas.width / fontSize);
    drops = new Array(cols).fill(0).map(() => rand(-50, 0));
  }

  function draw(timestamp) {
    if (!running) return;
    animId = requestAnimationFrame(draw);

    // throttle to 30fps
    if (timestamp - lastTime < FPS_INTERVAL) return;
    lastTime = timestamp;

    ctx.fillStyle = 'rgba(0, 0, 0, 0.06)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < cols; i++) {
      const char = chars[Math.floor(Math.random() * chars.length)];
      const x = i * fontSize;
      const y = drops[i] * fontSize;
      // Leading character is brighter
      ctx.fillStyle = drops[i] > 0 && Math.random() > 0.975 ? '#e8ffe8' : '#00ff41';
      ctx.fillText(char, x, y);
      if (y > canvas.height && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    }
  }

  function start() {
    if (running && animId) return;
    running = true;
    animId = requestAnimationFrame(draw);
  }

  function stop() {
    running = false;
    if (animId) cancelAnimationFrame(animId);
  }

  function toggle() {
    if (running) stop();
    else start();
    return running;
  }

  // Pause when tab hidden
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stop();
    else if (!prefersReducedMotion()) start();
  });

  resize();
  window.addEventListener('resize', resize);

  return { start, stop, toggle, isRunning: () => running };
})();

/* ================================================================
   4. CRT EFFECTS
   ================================================================ */
const Effects = (() => {
  const overlay = $('#crt-overlay');
  let enabled = true;

  function init() {
    const saved = localStorage.getItem(STORAGE_KEYS.effects);
    if (saved !== null) enabled = saved === 'true';
    apply();
  }

  function apply() {
    if (enabled && !prefersReducedMotion()) {
      overlay.classList.remove('effects-off');
      MatrixRain.start();
    } else {
      overlay.classList.add('effects-off');
      MatrixRain.stop();
    }
  }

  function toggle() {
    enabled = !enabled;
    localStorage.setItem(STORAGE_KEYS.effects, enabled);
    apply();
    return enabled;
  }

  return { init, toggle, isEnabled: () => enabled };
})();

/* ================================================================
   5. BOOT SEQUENCE
   ================================================================ */
const BootSequence = (() => {
  const screen = $('#boot-screen');
  const log = $('#boot-log');
  const bar = $('#boot-bar');
  const skipBtn = $('#boot-skip');
  let skipped = false;

  const lines = [
    { text: '[ <span class="ok">OK</span> ] Starting HARSH CHAUHAN...', delay: 100 },
    { text: '[ <span class="ok">OK</span> ] Loading hardware drivers...', delay: 150 },
    { text: '[ <span class="ok">OK</span> ] Mounting filesystem /dev/sda1...', delay: 120 },
    { text: '[ <span class="ok">OK</span> ] Initializing network interfaces...', delay: 130 },
    { text: '[ <span class="ok">OK</span> ] Loading kernel modules...', delay: 100 },
    { text: '[ <span class="ok">OK</span> ] Starting display manager...', delay: 120 },
    { text: '<span class="info">[ INFO ]</span> Initializing harsh-portfolio v1.0...', delay: 150 },
    { text: '<span class="dim">[ ... ] Decrypting user data...</span>', delay: 200 },
    { text: '<span class="dim">[ ... ] Bypassing firewall...</span>', delay: 200 },
    { text: '<span class="grant">[ GRANTED ] Access granted. Welcome, visitor.</span>', delay: 300 },
  ];

  function addLine(html) {
    const line = el('div', null, html);
    log.appendChild(line);
    log.scrollTop = log.scrollHeight;
  }

  async function run() {
    if (prefersReducedMotion()) {
      finish();
      return;
    }
    let totalDelay = 0;
    for (const item of lines) {
      if (skipped) break;
      totalDelay += item.delay;
      await new Promise(r => setTimeout(r, item.delay));
      if (skipped) break;
      addLine(item.text);
      // update progress bar
      const pct = Math.min(100, (totalDelay / 1600) * 100);
      bar.style.width = pct + '%';
    }
    if (!skipped) {
      bar.style.width = '100%';
      await new Promise(r => setTimeout(r, 400));
    }
    finish();
  }

  function finish() {
    screen.classList.add('hidden');
    setTimeout(() => { screen.style.display = 'none'; }, 600);
    // Start hero animations
    HeroAnimations.start();
  }

  function skip() {
    skipped = true;
    bar.style.width = '100%';
    finish();
  }

  skipBtn.addEventListener('click', skip);

  return { run, skip };
})();

/* ================================================================
   6. CLOCK & PANEL
   ================================================================ */
const Panel = (() => {
  const clockEl = $('#panel-clock');
  const dateEl  = $('#panel-date');
  const visitorEl = $('#visitor-count');

  function updateClock() {
    const now = new Date();
    clockEl.textContent = `${pad2(now.getHours())}:${pad2(now.getMinutes())}:${pad2(now.getSeconds())}`;
    dateEl.textContent = now.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  }

  function updateVisitor() {
    let count = parseInt(localStorage.getItem(STORAGE_KEYS.visitor) || '0', 10);
    count++;
    localStorage.setItem(STORAGE_KEYS.visitor, count);
    visitorEl.textContent = count;
  }

  function setActiveTitle(title) {
    $('#active-window-title').textContent = title;
  }

  function init() {
    updateClock();
    setInterval(updateClock, 1000);
    updateVisitor();
  }

  return { init, setActiveTitle };
})();

/* ================================================================
   7. WINDOW MANAGER
   ================================================================ */
const WindowManager = (() => {
  const layer = $('#windows-layer');
  let zCounter = 100;
  let openWindows = new Map(); // id -> { element, state, isMinimized, isMaximized }
  let activeWindow = null;

  function getWinConfig(id) {
    return CONFIG.windows.find(w => w.id === id);
  }

  function getSavedState(id) {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEYS.windows) || '{}');
      return saved[id] || null;
    } catch { return null; }
  }

  function saveWindowState(id, state) {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEYS.windows) || '{}');
      saved[id] = state;
      localStorage.setItem(STORAGE_KEYS.windows, JSON.stringify(saved));
    } catch {}
  }

  function focus(winData) {
    if (activeWindow && activeWindow !== winData) {
      activeWindow.element.classList.remove('focused');
    }
    winData.element.classList.add('focused');
    winData.element.style.zIndex = ++zCounter;
    activeWindow = winData;
    Panel.setActiveTitle(winData.config.title);
  }

  function makeDraggable(winEl, titlebar, winData) {
    if (isMobile()) return;
    let isDragging = false, startX, startY, origX, origY;

    function onDown(e) {
      if (e.target.classList.contains('tl-btn')) return;
      if (winData.isMaximized) return;
      isDragging = true;
      const pt = e.touches ? e.touches[0] : e;
      startX = pt.clientX; startY = pt.clientY;
      const rect = winEl.getBoundingClientRect();
      origX = rect.left; origY = rect.top;
      focus(winData);
      e.preventDefault();
    }

    function onMove(e) {
      if (!isDragging) return;
      const pt = e.touches ? e.touches[0] : e;
      const dx = pt.clientX - startX;
      const dy = pt.clientY - startY;
      const newX = clamp(origX + dx, 0, window.innerWidth - 100);
      const newY = clamp(origY + dy, 36, window.innerHeight - 60);
      winEl.style.left = newX + 'px';
      winEl.style.top  = newY + 'px';
    }

    function onUp() {
      if (!isDragging) return;
      isDragging = false;
      saveWindowState(winData.config.id, {
        left: parseInt(winEl.style.left), top: parseInt(winEl.style.top),
        width: winEl.offsetWidth, height: winEl.offsetHeight,
      });
    }

    titlebar.addEventListener('mousedown', onDown);
    titlebar.addEventListener('touchstart', onDown, { passive: false });
    document.addEventListener('mousemove', onMove);
    document.addEventListener('touchmove', onMove, { passive: false });
    document.addEventListener('mouseup', onUp);
    document.addEventListener('touchend', onUp);
  }

  function makeResizable(winEl, resizeHandle, winData) {
    if (isMobile()) return;
    let isResizing = false, startX, startY, origW, origH;

    function onDown(e) {
      if (winData.isMaximized) return;
      isResizing = true;
      const pt = e.touches ? e.touches[0] : e;
      startX = pt.clientX; startY = pt.clientY;
      origW = winEl.offsetWidth; origH = winEl.offsetHeight;
      focus(winData);
      e.preventDefault(); e.stopPropagation();
    }

    function onMove(e) {
      if (!isResizing) return;
      const pt = e.touches ? e.touches[0] : e;
      const dw = pt.clientX - startX;
      const dh = pt.clientY - startY;
      winEl.style.width  = clamp(origW + dw, 320, window.innerWidth) + 'px';
      winEl.style.height = clamp(origH + dh, 200, window.innerHeight - 36) + 'px';
    }

    function onUp() {
      if (!isResizing) return;
      isResizing = false;
      saveWindowState(winData.config.id, {
        left: parseInt(winEl.style.left), top: parseInt(winEl.style.top),
        width: winEl.offsetWidth, height: winEl.offsetHeight,
      });
    }

    resizeHandle.addEventListener('mousedown', onDown);
    resizeHandle.addEventListener('touchstart', onDown, { passive: false });
    document.addEventListener('mousemove', onMove);
    document.addEventListener('touchmove', onMove, { passive: false });
    document.addEventListener('mouseup', onUp);
    document.addEventListener('touchend', onUp);
  }

  function openWindow(id) {
    const config = getWinConfig(id);
    if (!config) return;

    // If already open, restore/focus it
    if (openWindows.has(id)) {
      const existing = openWindows.get(id);
      if (existing.isMinimized) restoreWindow(id);
      else focus(existing);
      return;
    }

    if (isMobile()) return openMobileSection(id, config);

    const winEl = el('div', 'window opening');
    winEl.dataset.winId = id;

    // Title bar
    const titlebar = el('div', 'window-titlebar');
    const lights = el('div', 'traffic-lights');
    const closeBtn = el('button', 'tl-btn tl-close'); closeBtn.setAttribute('aria-label', 'Close');
    const minBtn   = el('button', 'tl-btn tl-min');   minBtn.setAttribute('aria-label', 'Minimize');
    const maxBtn   = el('button', 'tl-btn tl-max');   maxBtn.setAttribute('aria-label', 'Maximize');
    lights.append(closeBtn, minBtn, maxBtn);
    const titleText = el('span', 'window-title', `<i class="${config.icon} window-icon"></i> ${config.title}`);
    titlebar.append(lights, titleText);

    // Body
    const body = el('div', 'window-body');
    // Build content
    ContentBuilder.build(id, body);

    // Resize handle
    const resizeHandle = el('div', 'window-resize');

    winEl.append(titlebar, body, resizeHandle);
    layer.appendChild(winEl);

    // Position & size
    const saved = getSavedState(id);
    const w = saved?.width  || config.width;
    const h = saved?.height || config.height;
    const offset = openWindows.size * 30;
    const left = saved?.left || clamp((window.innerWidth - w) / 2 + offset, 0, window.innerWidth - w);
    const top  = saved?.top  || clamp(48 + offset, 36, window.innerHeight - h - 80);

    winEl.style.width = w + 'px';
    winEl.style.height = h + 'px';
    winEl.style.left = left + 'px';
    winEl.style.top = top + 'px';

    const winData = { element: winEl, config, isMinimized: false, isMaximized: false, body };
    openWindows.set(id, winData);

    // Events
    makeDraggable(winEl, titlebar, winData);
    makeResizable(winEl, resizeHandle, winData);
    winEl.addEventListener('mousedown', () => focus(winData));

    closeBtn.addEventListener('click', (e) => { e.stopPropagation(); closeWindow(id); });
    minBtn.addEventListener('click', (e) => { e.stopPropagation(); minimizeWindow(id); });
    maxBtn.addEventListener('click', (e) => { e.stopPropagation(); toggleMaximize(id); });

    // Double-click titlebar to maximize
    titlebar.addEventListener('dblclick', (e) => {
      if (e.target.classList.contains('tl-btn')) return;
      toggleMaximize(id);
    });

    focus(winData);
    updateDockIndicators();
    setTimeout(() => winEl.classList.remove('opening'), 300);

    // Trigger content animations (skill bars etc.)
    setTimeout(() => ContentBuilder.onOpen(id, body), 100);
  }

  function closeWindow(id) {
    const winData = openWindows.get(id);
    if (!winData) return;
    winData.element.classList.add('closing');
    setTimeout(() => {
      winData.element.remove();
      openWindows.delete(id);
      if (activeWindow === winData) {
        activeWindow = null;
        Panel.setActiveTitle('Desktop');
      }
      updateDockIndicators();
    }, 200);
  }

  function minimizeWindow(id) {
    const winData = openWindows.get(id);
    if (!winData) return;
    winData.isMinimized = true;
    winData.element.classList.add('minimizing');
    setTimeout(() => {
      winData.element.style.display = 'none';
      winData.element.classList.remove('minimizing');
    }, 300);
  }

  function restoreWindow(id) {
    const winData = openWindows.get(id);
    if (!winData) return;
    winData.isMinimized = false;
    winData.element.style.display = '';
    winData.element.classList.add('restoring');
    focus(winData);
    setTimeout(() => winData.element.classList.remove('restoring'), 300);
  }

  function toggleMaximize(id) {
    const winData = openWindows.get(id);
    if (!winData) return;
    winData.isMaximized = !winData.isMaximized;
    winData.element.classList.toggle('maximized', winData.isMaximized);
    focus(winData);
  }

  function updateDockIndicators() {
    $$('.dock-item').forEach(item => {
      const id = item.dataset.open;
      item.classList.toggle('has-window', openWindows.has(id) && !openWindows.get(id).isMinimized);
    });
  }

  /* Mobile: sections are full-screen stacked */
  function openMobileSection(id, config) {
    const winEl = el('div', 'window');
    winEl.dataset.winId = id;
    const titlebar = el('div', 'window-titlebar');
    const lights = el('div', 'traffic-lights');
    const closeBtn = el('button', 'tl-btn tl-close'); closeBtn.setAttribute('aria-label', 'Close');
    lights.append(closeBtn);
    const titleText = el('span', 'window-title', `<i class="${config.icon} window-icon"></i> ${config.title}`);
    titlebar.append(lights, titleText);
    const body = el('div', 'window-body');
    ContentBuilder.build(id, body);
    winEl.append(titlebar, body);
    layer.appendChild(winEl);
    closeBtn.addEventListener('click', () => {
      winEl.style.transition = 'opacity 0.2s';
      winEl.style.opacity = '0';
      setTimeout(() => winEl.remove(), 200);
    });
    setTimeout(() => ContentBuilder.onOpen(id, body), 100);
    // Scroll to it
    setTimeout(() => winEl.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
  }

  // Expose for terminal etc.
  return { open: openWindow, close: closeWindow, minimize: minimizeWindow, restore: restoreWindow, isOpen: id => openWindows.has(id) };
})();

/* ================================================================
   8. CONTENT BUILDERS
   ================================================================ */
const ContentBuilder = (() => {

  function build(id, body) {
    switch (id) {
      case 'about':        buildAbout(body); break;
      case 'skills':       buildSkills(body); break;
      case 'projects':     buildProjects(body); break;
      case 'experience':   buildExperience(body); break;
      case 'certificates': buildCertificates(body); break;
      case 'resume':       buildResume(body); break;
      case 'terminal':     Terminal.init(body); break;
      case 'askai':        AskAI.init(body); break;
      case 'blog':         buildBlog(body); break;
      case 'contact':      buildContact(body); break;
    }
  }

  function onOpen(id, body) {
    if (id === 'skills') animateSkills(body);
  }

  /* ---- ABOUT ---- */
  function buildAbout(body) {
    const p = CONFIG.profile;
    body.innerHTML = `
      <div class="about-content">
        <div class="about-avatar">
          <img src="${p.avatar}" alt="${p.name}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"/>
          <div class="about-avatar-fallback" style="display:none">${p.name.split(' ').map(w=>w[0]).join('')}</div>
        </div>
        <div class="about-text">
          <h2>${p.name}</h2>
          <div class="role">${p.fullRole}</div>
          <p>${p.goal}</p>
          <dl class="about-info-grid">
            <dt>Education:</dt><dd>${p.education}</dd>
            <dt>Location:</dt><dd>${p.location}</dd>
            <dt>Email:</dt><dd><a href="mailto:${p.email}" style="color:var(--primary)">${p.email}</a></dd>
            <dt>GitHub:</dt><dd><a href="${CONFIG.links.github}" target="_blank" rel="noopener" style="color:var(--primary)">${CONFIG.links.github}</a></dd>
            <dt>LinkedIn:</dt><dd><a href="${CONFIG.links.linkedin}" target="_blank" rel="noopener" style="color:var(--primary)">View Profile</a></dd>
          </dl>
          <div class="about-goal">"${p.goal}"</div>
        </div>
      </div>`;
  }

  /* ---- SKILLS (KDE System Settings) ---- */
  function buildSkills(body) {
    const cats = CONFIG.skills.categories;
    body.innerHTML = `
      <div class="skills-layout">
        <nav class="skills-sidebar">
          ${cats.map((c, i) => `<button class="skills-cat-btn ${i===0?'active':''}" data-cat="${c.id}"><i class="${c.icon}"></i> ${c.label}</button>`).join('')}
        </nav>
        <div class="skills-main" id="skills-main">
          ${renderSkillCategory(cats[0])}
        </div>
      </div>`;

    body.querySelectorAll('.skills-cat-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        body.querySelectorAll('.skills-cat-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = cats.find(c => c.id === btn.dataset.cat);
        body.querySelector('#skills-main').innerHTML = renderSkillCategory(cat);
        animateSkillBars(body.querySelector('#skills-main'));
      });
    });
  }

  function renderSkillCategory(cat) {
    // Use bars for 4+ items, rings for <=3
    if (cat.items.length <= 3) {
      return `<h3>${cat.label}</h3>
        <div class="skill-rings">
          ${cat.items.map(item => {
            const r = 34, c = 2 * Math.PI * r;
            const offset = c * (1 - item.level / 100);
            return `<div class="skill-ring">
              <svg viewBox="0 0 80 80">
                <circle class="ring-bg" cx="40" cy="40" r="${r}"/>
                <circle class="ring-fg" cx="40" cy="40" r="${r}" stroke-dasharray="${c}" stroke-dashoffset="${c}" data-offset="${offset}" transform="rotate(-90 40 40)"/>
              </svg>
              <div class="ring-pct">${item.level}%</div>
              <div class="ring-label">${item.name}</div>
            </div>`;
          }).join('')}
        </div>`;
    }
    return `<h3>${cat.label}</h3>
      ${cat.items.map(item => `
        <div class="skill-row">
          <div class="skill-row-head">
            <span class="skill-name">${item.name}${item.note ? ' <small style="color:var(--warning)">(' + item.note + ')</small>' : ''}</span>
            <span class="skill-val">${item.level}%</span>
          </div>
          <div class="skill-bar-track"><div class="skill-bar-fill" data-level="${item.level}"></div></div>
        </div>
      `).join('')}`;
  }

  function animateSkills(body) { animateSkillBars(body); }
  function animateSkillBars(ctx) {
    ctx.querySelectorAll('.skill-bar-fill').forEach(bar => {
      requestAnimationFrame(() => { bar.style.width = bar.dataset.level + '%'; });
    });
    ctx.querySelectorAll('.ring-fg').forEach(ring => {
      requestAnimationFrame(() => { ring.style.strokeDashoffset = ring.dataset.offset; });
    });
  }

  /* ---- PROJECTS ---- */
  function buildProjects(body) {
    const categories = ['all', 'web', 'clone'];
    body.innerHTML = `
      <div class="project-filters">
        ${categories.map(c => `<button class="filter-btn ${c==='all'?'active':''}" data-filter="${c}">${c.toUpperCase()}</button>`).join('')}
      </div>
      <div class="projects-grid" id="projects-grid">
        ${CONFIG.projects.map((p, i) => renderProjectCard(p, i)).join('')}
      </div>`;

    body.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        body.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const f = btn.dataset.filter;
        body.querySelectorAll('.project-card').forEach(card => {
          card.style.display = (f === 'all' || card.dataset.category === f) ? '' : 'none';
        });
      });
    });

    // 3D tilt + click for detail
    body.querySelectorAll('.project-card').forEach((card, i) => {
      card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(600px) rotateY(${x*8}deg) rotateX(${-y*8}deg)`;
      });
      card.addEventListener('mouseleave', () => { card.style.transform = ''; });
      card.addEventListener('click', e => {
        if (e.target.closest('a')) return;
        openProjectModal(CONFIG.projects[i]);
      });
    });
  }

  function renderProjectCard(p, i) {
    return `
      <div class="project-card" data-category="${p.category}" data-index="${i}">
        <div class="project-thumb">
          <img src="${p.image}" alt="${p.title} screenshot" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"/>
          <div class="project-thumb-fallback" style="display:none">${p.title}</div>
        </div>
        <div class="project-info">
          <h4>${p.title}</h4>
          <p>${p.desc}</p>
          <div class="project-tags">${p.tech.map(t => `<span class="project-tag">${t}</span>`).join('')}</div>
          <div class="project-links">
            <a class="demo" href="${p.demo}" target="_blank" rel="noopener"><i class="fa-solid fa-up-right-from-square"></i> Live Demo</a>
            <a class="code" href="${p.code}" target="_blank" rel="noopener"><i class="fa-brands fa-github"></i> Code</a>
          </div>
        </div>
      </div>`;
  }

  function openProjectModal(p) {
    const modal = $('#project-modal');
    const modalBody = $('#project-modal-body');
    modalBody.innerHTML = `
      <h2>${p.title}</h2>
      <div class="meta">Category: ${p.category} | Tech: ${p.tech.join(', ')}</div>
      <img src="${p.image}" alt="${p.title}" onerror="this.style.display='none'"/>
      <div class="content">
        <p>${p.desc}</p>
        <h3>Features</h3>
        <ul>${p.features.map(f => `<li>${f}</li>`).join('')}</ul>
        <h3>Tech Stack</h3>
        <p>${p.tech.map(t => `<span class="project-tag" style="display:inline-block;margin:2px">${t}</span>`).join('')}</p>
        <div class="project-links" style="margin-top:1rem">
          <a class="demo" href="${p.demo}" target="_blank" rel="noopener"><i class="fa-solid fa-up-right-from-square"></i> Live Demo</a>
          <a class="code" href="${p.code}" target="_blank" rel="noopener"><i class="fa-brands fa-github"></i> Code</a>
        </div>
      </div>`;
    modal.hidden = false;
  }

  /* ---- EXPERIENCE ---- */
  function buildExperience(body) {
    body.innerHTML = `
      <div class="timeline">
        ${CONFIG.experience.map(exp => `
          <div class="timeline-item">
            <div class="timeline-node"></div>
            <h4>${exp.title}</h4>
            <div class="org">${exp.org}</div>
            <div class="date">${exp.date}</div>
            <p>${exp.desc}</p>
            ${exp.awards.map(a => `<div class="award"><i class="fa-solid fa-trophy"></i> ${a}</div>`).join('')}
          </div>
        `).join('')}
      </div>`;
  }

  /* ---- CERTIFICATES ---- */
  function buildCertificates(body) {
    const cats = ['all', ...new Set(CONFIG.certificates.map(c => c.category))];
    body.innerHTML = `
      <div class="cert-filters">
        ${cats.map(c => `<button class="filter-btn ${c==='all'?'active':''}" data-filter="${c}">${c.toUpperCase()}</button>`).join('')}
      </div>
      <div class="cert-grid" id="cert-grid">
        ${CONFIG.certificates.map((c, i) => `
          <div class="cert-card" data-category="${c.category}" data-index="${i}">
            <div class="cert-thumb">
              <img src="${c.image}" alt="${c.title}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"/>
              <div class="cert-thumb-fallback" style="display:none"><i class="fa-solid fa-award"></i></div>
            </div>
            <div class="cert-info">
              <h4>${c.title}</h4>
              <div class="issuer">${c.issuer}</div>
              <div class="date">${c.date}</div>
            </div>
          </div>
        `).join('')}
      </div>`;

    body.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        body.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const f = btn.dataset.filter;
        body.querySelectorAll('.cert-card').forEach(card => {
          card.style.display = (f === 'all' || card.dataset.category === f) ? '' : 'none';
        });
      });
    });

    body.querySelectorAll('.cert-card').forEach(card => {
      card.addEventListener('click', () => {
        Lightbox.open(parseInt(card.dataset.index, 10));
      });
    });
  }

  /* ---- RESUME ---- */
  function buildResume(body) {
    body.classList.add('resume-window');
    body.innerHTML = `
      <div class="resume-toolbar">
        <a href="${CONFIG.profile.resume}" download><i class="fa-solid fa-download"></i> Download</a>
        <button id="resume-print"><i class="fa-solid fa-print"></i> Print</button>
        <button id="resume-toggle"><i class="fa-solid fa-eye"></i> HTML View</button>
      </div>
      <div class="resume-viewer" id="resume-viewer">
        <iframe src="${CONFIG.profile.resume}" title="Resume PDF" id="resume-iframe" style="display:block"></iframe>
        <div class="resume-html-fallback" id="resume-html" style="display:none">${buildResumeHTML()}</div>
      </div>`;

    body.querySelector('#resume-print').addEventListener('click', () => {
      const iframe = body.querySelector('#resume-iframe');
      if (iframe && iframe.style.display !== 'none') {
        try { iframe.contentWindow.print(); } catch { window.print(); }
      } else {
        window.print();
      }
    });

    body.querySelector('#resume-toggle').addEventListener('click', (e) => {
      const iframe = body.querySelector('#resume-iframe');
      const html = body.querySelector('#resume-html');
      const isPdf = iframe.style.display !== 'none';
      if (isPdf) {
        iframe.style.display = 'none';
        html.style.display = 'block';
        e.currentTarget.innerHTML = '<i class="fa-solid fa-file-pdf"></i> PDF View';
      } else {
        iframe.style.display = 'block';
        html.style.display = 'none';
        e.currentTarget.innerHTML = '<i class="fa-solid fa-eye"></i> HTML View';
      }
    });
  }

  function buildResumeHTML() {
    const p = CONFIG.profile;
    return `
      <h2>${p.name}</h2>
      <p class="contact-line">${p.email} | ${p.location} | ${CONFIG.links.github}</p>
      <h3>Summary</h3>
      <p>${p.goal} Experienced in building and deploying web projects using HTML, CSS, JavaScript, and Firebase.</p>
      <h3>Skills</h3>
      <ul>${CONFIG.skills.categories.flatMap(c => c.items.map(i => `<li>${i.name}</li>`)).join('')}</ul>
      <h3>Projects</h3>
      <ul>${CONFIG.projects.map(p => `<li><strong>${p.title}:</strong> ${p.desc} <a href="${p.demo}" target="_blank" rel="noopener">[Live]</a></li>`).join('')}</ul>
      <h3>Experience</h3>
      <ul>${CONFIG.experience.map(e => `<li><strong>${e.title}</strong> at ${e.org} (${e.date}) — ${e.desc}</li>`).join('')}</ul>
      <h3>Education</h3>
      <p>${p.education}</p>
      <h3>Certificates</h3>
      <ul>${CONFIG.certificates.map(c => `<li><strong>${c.title}</strong> — ${c.issuer} (${c.date})</li>`).join('')}</ul>
    `;
  }

  /* ---- BLOG ---- */
  function buildBlog(body) {
    const tags = ['all', ...new Set(CONFIG.blog.flatMap(b => b.tags))];
    body.innerHTML = `
      <div class="blog-tags">
        ${tags.map(t => `<button class="filter-btn ${t==='all'?'active':''}" data-tag="${t}">${t}</button>`).join('')}
      </div>
      <div class="blog-grid">
        ${CONFIG.blog.map((post, i) => `
          <div class="blog-card" data-index="${i}">
            <h4>${post.title}</h4>
            <div class="meta"><span><i class="fa-solid fa-calendar"></i> ${post.date}</span><span><i class="fa-solid fa-clock"></i> ${post.readTime} min</span></div>
            <div class="excerpt">${post.excerpt}</div>
            <div class="blog-tags-inline">${post.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
          </div>
        `).join('')}
      </div>`;

    body.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        body.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const t = btn.dataset.tag;
        body.querySelectorAll('.blog-card').forEach(card => {
          const post = CONFIG.blog[parseInt(card.dataset.index, 10)];
          card.style.display = (t === 'all' || post.tags.includes(t)) ? '' : 'none';
        });
      });
    });

    body.querySelectorAll('.blog-card').forEach(card => {
      card.addEventListener('click', () => {
        openBlogModal(CONFIG.blog[parseInt(card.dataset.index, 10)]);
      });
    });
  }

  function openBlogModal(post) {
    const modal = $('#blog-modal');
    const modalBody = $('#blog-modal-body');
    const content = post.content.split('\n').map(p => p.trim() ? `<p>${p}</p>` : '').join('');
    modalBody.innerHTML = `
      <h2>${post.title}</h2>
      <div class="meta"><span><i class="fa-solid fa-calendar"></i> ${post.date}</span><span><i class="fa-solid fa-clock"></i> ${post.readTime} min read</span><span>${post.tags.map(t => `<span class="project-tag" style="display:inline-block;margin:0 2px">${t}</span>`).join('')}</span></div>
      <div class="content">${content}</div>`;
    modal.hidden = false;
  }

  /* ---- CONTACT ---- */
  function buildContact(body) {
    const p = CONFIG.profile;
    body.innerHTML = `
      <div class="contact-layout">
        <div class="contact-form-side">
          <form class="contact-form" id="contact-form" novalidate>
            <div>
              <label for="cf-name">Name</label>
              <input id="cf-name" name="name" type="text" required placeholder="Your name" />
            </div>
            <div>
              <label for="cf-email">Email</label>
              <input id="cf-email" name="email" type="email" required placeholder="you@example.com" />
            </div>
            <div>
              <label for="cf-subject">Subject</label>
              <input id="cf-subject" name="subject" type="text" required placeholder="Subject" />
            </div>
            <div>
              <label for="cf-message">Message</label>
              <textarea id="cf-message" name="message" required placeholder="Your message..."></textarea>
            </div>
            <button type="submit"><i class="fa-solid fa-paper-plane"></i> Send Message</button>
            <div class="contact-status" id="contact-status"></div>
          </form>
        </div>
        <div class="contact-cards-side">
          <div class="contact-cards">
            <a class="contact-card" href="mailto:${p.email}">
              <i class="fa-solid fa-envelope"></i>
              <div><div class="cc-label">Email</div><div class="cc-value">${p.email}</div></div>
              <button class="copy-email-btn" data-copy="${p.email}" type="button"><i class="fa-solid fa-copy"></i></button>
            </a>
            <a class="contact-card" href="${CONFIG.links.linkedin}" target="_blank" rel="noopener">
              <i class="fa-brands fa-linkedin"></i>
              <div><div class="cc-label">LinkedIn</div><div class="cc-value">View Profile</div></div>
            </a>
            <a class="contact-card" href="${CONFIG.links.github}" target="_blank" rel="noopener">
              <i class="fa-brands fa-github"></i>
              <div><div class="cc-label">GitHub</div><div class="cc-value">HARSH-G76</div></div>
            </a>
            <a class="contact-card" href="${CONFIG.links.youtube1}" target="_blank" rel="noopener">
              <i class="fa-brands fa-youtube"></i>
              <div><div class="cc-label">YouTube</div><div class="cc-value">@HRXUG76</div></div>
            </a>
            <a class="contact-card" href="${CONFIG.links.youtube2}" target="_blank" rel="noopener">
              <i class="fa-brands fa-youtube"></i>
              <div><div class="cc-label">YouTube</div><div class="cc-value">@hrharshyt76</div></div>
            </a>
          </div>
        </div>
      </div>`;

    // Copy email
    body.querySelectorAll('.copy-email-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault(); e.stopPropagation();
        navigator.clipboard.writeText(btn.dataset.copy).then(() => {
          btn.classList.add('copied');
          btn.innerHTML = '<i class="fa-solid fa-check"></i>';
          setTimeout(() => { btn.classList.remove('copied'); btn.innerHTML = '<i class="fa-solid fa-copy"></i>'; }, 2000);
        });
      });
    });

    // Form submit
    const form = body.querySelector('#contact-form');
    const status = body.querySelector('#contact-status');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let valid = true;
      form.querySelectorAll('input, textarea').forEach(inp => {
        if (!inp.value.trim() || (inp.type === 'email' && !/^[^@]+@[^@]+\.[^@]+$/.test(inp.value))) {
          inp.classList.add('field-error'); valid = false;
        } else {
          inp.classList.remove('field-error');
        }
      });
      if (!valid) {
        status.className = 'contact-status error';
        status.textContent = 'Please fill all fields with a valid email.';
        return;
      }

      /* ===========================================================
         CONTACT FORM INTEGRATION
         To use Formspree: replace the URL below with your endpoint
         e.g. https://formspree.io/f/your-id
         To use EmailJS: include the EmailJS SDK and configure
         emailjs.send('service_id','template_id', formData)
         For now, it falls back to a mailto: link.
         =========================================================== */
      const FORMSPREE_ENDPOINT = ''; // <-- put your Formspree URL here

      if (FORMSPREE_ENDPOINT) {
        fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify(Object.fromEntries(new FormData(form))),
        }).then(r => {
          if (r.ok) {
            status.className = 'contact-status success';
            status.textContent = 'Message sent successfully!';
            form.reset();
          } else throw new Error();
        }).catch(() => {
          status.className = 'contact-status error';
          status.textContent = 'Could not send. Opening your email client instead...';
          setTimeout(() => mailtoFallback(form), 1500);
        });
      } else {
        // mailto: fallback
        status.className = 'contact-status success';
        status.textContent = 'Opening your email client...';
        setTimeout(() => mailtoFallback(form), 800);
      }
    });

    function mailtoFallback(form) {
      const data = new FormData(form);
      const subject = encodeURIComponent(data.get('subject') || 'Portfolio Contact');
      const body = encodeURIComponent(`Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`);
      window.location.href = `mailto:${CONFIG.profile.email}?subject=${subject}&body=${body}`;
    }
  }

  return { build, onOpen };
})();

/* ================================================================
   9. TERMINAL
   ================================================================ */
const Terminal = (() => {
  let output, input, history = [], histIndex = -1;
  const PROMPT = '<span class="t-user">visitor</span><span class="t-at">@</span><span class="t-host">harsh-portfolio</span><span class="t-at">:</span><span class="t-path">~</span>$';

  const commands = {
    help: () => [
      '<span class="t-green">Available commands:</span>',
      '  help        — show this help',
      '  about       — about Harsh',
      '  whoami      — who am I?',
      '  skills      — list skills',
      '  projects    — list projects',
      '  experience  — work & internship experience',
      '  education   — education info',
      '  certificates— list certificates',
      '  contact     — contact details',
      '  social      — social media links',
      '  resume      — download resume',
      '  github      — open GitHub',
      '  linkedin    — open LinkedIn',
      '  youtube     — open YouTube',
      '  theme       — theme dark|light',
      '  matrix      — toggle matrix rain',
      '  date        — current date/time',
      '  echo        — echo text',
      '  ls          — list files',
      '  cat         — cat about.txt',
      '  sudo        — try sudo ;)',
      '  hack        — hack the planet',
      '  clear       — clear terminal',
      '  exit        — close terminal',
    ].join('\n'),

    about: () => [
      '<span class="t-green">═══ ABOUT ═══</span>',
      `  Name:      ${CONFIG.profile.name}`,
      `  Role:      ${CONFIG.profile.fullRole}`,
      `  Education: ${CONFIG.profile.education}`,
      `  Location:  ${CONFIG.profile.location}`,
      `  Goal:      ${CONFIG.profile.goal}`,
    ].join('\n'),

    whoami: () => `<span class="t-green">${CONFIG.profile.name}</span> — ${CONFIG.profile.fullRole}`,

    skills: () => {
      const lines = ['<span class="t-green">═══ SKILLS ═══</span>'];
      CONFIG.skills.categories.forEach(c => {
        lines.push(`  <span class="t-yellow">${c.label}:</span> ${c.items.map(i => `${i.name}(${i.level}%)`).join(', ')}`);
      });
      return lines.join('\n');
    },

    projects: () => {
      const lines = ['<span class="t-green">═══ PROJECTS ═══</span>'];
      CONFIG.projects.forEach((p, i) => {
        lines.push(`  ${i+1}. <span class="t-yellow">${p.title}</span>`);
        lines.push(`     ${p.desc}`);
        lines.push(`     <span class="t-dim">Tech:</span> ${p.tech.join(', ')}`);
        lines.push(`     <span class="t-link" data-url="${p.demo}">${p.demo}</span>`);
      });
      return lines.join('\n');
    },

    experience: () => {
      const lines = ['<span class="t-green">═══ EXPERIENCE ═══</span>'];
      CONFIG.experience.forEach(e => {
        lines.push(`  <span class="t-yellow">${e.title}</span> at ${e.org} (${e.date})`);
        lines.push(`    ${e.desc}`);
        if (e.awards) lines.push(`    <span class="t-green">Awards:</span> ${e.awards.join(', ')}`);
      });
      return lines.join('\n');
    },

    education: () => `<span class="t-green">═══ EDUCATION ═══</span>\n  ${CONFIG.profile.education}`,

    certificates: () => {
      const lines = ['<span class="t-green">═══ CERTIFICATES ═══</span>'];
      CONFIG.certificates.forEach((c, i) => {
        lines.push(`  ${i+1}. <span class="t-yellow">${c.title}</span> — ${c.issuer} (${c.date})`);
      });
      return lines.join('\n');
    },

    contact: () => [
      '<span class="t-green">═══ CONTACT ═══</span>',
      `  Email:     <span class="t-link" data-url="mailto:${CONFIG.profile.email}">${CONFIG.profile.email}</span>`,
      `  GitHub:    <span class="t-link" data-url="${CONFIG.links.github}">${CONFIG.links.github}</span>`,
      `  LinkedIn:  <span class="t-link" data-url="${CONFIG.links.linkedin}">${CONFIG.links.linkedin}</span>`,
      `  YouTube 1: <span class="t-link" data-url="${CONFIG.links.youtube1}">${CONFIG.links.youtube1}</span>`,
      `  YouTube 2: <span class="t-link" data-url="${CONFIG.links.youtube2}">${CONFIG.links.youtube2}</span>`,
    ].join('\n'),

    social: () => [
      '<span class="t-green">═══ SOCIAL ═══</span>',
      `  GitHub:    <span class="t-link" data-url="${CONFIG.links.github}">${CONFIG.links.github}</span>`,
      `  LinkedIn:  <span class="t-link" data-url="${CONFIG.links.linkedin}">${CONFIG.links.linkedin}</span>`,
      `  YouTube 1: <span class="t-link" data-url="${CONFIG.links.youtube1}">${CONFIG.links.youtube1}</span>`,
      `  YouTube 2: <span class="t-link" data-url="${CONFIG.links.youtube2}">${CONFIG.links.youtube2}</span>`,
      `  Email:     <span class="t-link" data-url="mailto:${CONFIG.profile.email}">${CONFIG.profile.email}</span>`,
    ].join('\n'),

    resume: () => {
      const a = el('a'); a.href = CONFIG.profile.resume; a.download = '';
      document.body.appendChild(a); a.click(); a.remove();
      return '<span class="t-green">Downloading resume...</span>';
    },

    github: () => { window.open(CONFIG.links.github, '_blank'); return '<span class="t-dim">Opening GitHub...</span>'; },
    linkedin: () => { window.open(CONFIG.links.linkedin, '_blank'); return '<span class="t-dim">Opening LinkedIn...</span>'; },
    youtube: () => { window.open(CONFIG.links.youtube1, '_blank'); return '<span class="t-dim">Opening YouTube...</span>'; },

    theme: (args) => {
      const t = args[0];
      if (t === 'dark' || t === 'light') {
        ThemeManager.set(t);
        return `<span class="t-green">Theme set to ${t}.</span>`;
      }
      return `<span class="t-red">Usage: theme dark|light</span>`;
    },

    matrix: () => {
      const on = MatrixRain.toggle();
      return on ? '<span class="t-green">Matrix rain: ON</span>' : '<span class="t-yellow">Matrix rain: OFF</span>';
    },

    date: () => new Date().toString(),

    echo: (args) => args.join(' ') || '',

    ls: () => '<span class="t-green">about.txt  projects/  skills.cfg  resume.pdf  certificates/  contact.vcf  blog.md  experience.log</span>',

    'cat about.txt': () => commands.about(),

    cat: (args) => {
      const file = args[0];
      if (file === 'about.txt') return commands.about();
      if (file === 'skills.cfg') return commands.skills();
      if (file === 'experience.log') return commands.experience();
      return `<span class="t-red">cat: ${file || 'null'}: No such file</span>`;
    },

    sudo: () => [
      '<span class="t-red">[sudo] password for visitor: </span>',
      '<span class="t-yellow">Nice try! We are Anonymous. We don\'t need sudo. ;)</span>',
      '<span class="t-dim">-- Access denied --</span>',
    ].join('\n'),

    hack: () => fakeHack(),

    clear: () => { output.innerHTML = ''; return null; },

    exit: () => {
      const win = output.closest('.window');
      if (win) WindowManager.close(win.dataset.winId);
      return null;
    },
  };

  function fakeHack() {
    const steps = [
      'Initializing hacking sequence...',
      'Bypassing firewall... <span class="t-green">[OK]</span>',
      'Cracking AES-256 encryption... <span class="t-green">[OK]</span>',
      'Injecting payload... <span class="t-green">[OK]</span>',
      'Accessing mainframe... <span class="t-green">[OK]</span>',
      'Decrypting database... <span class="t-green">[OK]</span>',
      '<span class="t-green">[ HACK COMPLETE ]</span>',
      '<span class="t-yellow">Just kidding. This is a portfolio. :)</span>',
    ];
    let i = 0;
    function next() {
      if (i >= steps.length) return;
      print(steps[i], 't-out');
      i++;
      setTimeout(next, 400);
    }
    next();
    return '<span class="t-dim">Running hack.exe...</span>';
  }

  function print(text, cls = 't-out') {
    const line = el('div', cls, text);
    output.appendChild(line);
    output.scrollTop = output.scrollHeight;
    // Make links clickable
    line.querySelectorAll('[data-url]').forEach(a => {
      a.addEventListener('click', () => window.open(a.dataset.url, '_blank'));
    });
  }

  function execute(cmdLine) {
    const trimmed = cmdLine.trim();
    if (!trimmed) return;
    // Echo command
    print(`<span class="t-cmd">${PROMPT}</span> ${escapeHtml(trimmed)}`);
    history.unshift(trimmed);
    histIndex = -1;

    const parts = trimmed.split(/\s+/);
    const cmd = parts[0];
    const args = parts.slice(1);

    // Handle "cat about.txt" as special case
    let result;
    if (cmd === 'cat' && args[0]) {
      result = commands.cat(args);
    } else if (commands[cmd]) {
      result = commands[cmd](args);
    } else {
      result = `<span class="t-red">command not found: ${escapeHtml(cmd)}. Type 'help' for available commands.</span>`;
    }

    if (result != null) print(result, 't-out');
  }

  function escapeHtml(s) {
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }

  function autocomplete() {
    const val = input.value;
    const cmds = Object.keys(commands).filter(c => c.startsWith(val));
    if (cmds.length === 1) input.value = cmds[0] + ' ';
    else if (cmds.length > 1) print(`<span class="t-dim">${cmds.join('  ')}</span>`);
  }

  function init(body) {
    body.classList.add('terminal-window');
    body.innerHTML = `
      <div class="terminal-output" id="terminal-output"></div>
      <div class="terminal-input-line">
        <span class="terminal-prompt">${PROMPT}</span>
        <input id="terminal-input" type="text" autocomplete="off" spellcheck="false" aria-label="Terminal input" />
        <span class="terminal-cursor" id="term-cursor"></span>
      </div>`;

    output = body.querySelector('#terminal-output');
    input  = body.querySelector('#terminal-input');
    const cursor = body.querySelector('#term-cursor');

    // Hide native cursor, show custom
    input.addEventListener('focus', () => cursor.style.display = 'none');
    input.addEventListener('blur', () => cursor.style.display = '');
    setTimeout(() => input.focus(), 100);

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        execute(input.value);
        input.value = '';
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (histIndex < history.length - 1) { histIndex++; input.value = history[histIndex]; }
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (histIndex > 0) { histIndex--; input.value = history[histIndex]; }
        else { histIndex = -1; input.value = ''; }
      } else if (e.key === 'Tab') {
        e.preventDefault();
        autocomplete();
      }
    });

    // Click anywhere in terminal focuses input
    body.addEventListener('click', () => input.focus());

    // Welcome message
    print('<span class="t-green">HC_OS Terminal v1.0 — Type \'help\' for commands.</span>');
    print('<span class="t-dim">Tip: Try \'whoami\', \'projects\', \'hack\', or \'sudo\' ;)</span>');
    print('');
  }

  return { init };
})();

/* ================================================================
   10. ASK AI (offline knowledge base)
   ================================================================ */
const AskAI = (() => {
  let messages, input, sendBtn, typing;

  // Knowledge base — keyword patterns mapped to answers
  const KB = [
    {
      keys: ['skill', 'tech', 'technology', 'know', 'good at', 'expertise'],
      answer: `Harsh's skills include:\n• Frontend: HTML (90%), CSS (85%), JavaScript (80%), React (55%, learning)\n• Backend/DB: Firebase (70%), Supabase (65%)\n• Tools: Git (78%), GitHub (80%), AI Tools (75%)\n• Languages: C Programming (72%), JavaScript (80%)`,
    },
    {
      keys: ['project', 'work', 'portfolio', 'built', 'build', 'made', 'created'],
      answer: `Harsh has built 5 projects:\n1. Chat App — real-time messaging (Firebase)\n2. Miss Punch Tracker — attendance tracking with admin panel\n3. Microsoft Homepage UI Clone — pixel-accurate recreation\n4. HR Foundation NGO Website — NGO site with donation CTAs\n5. Rama Hospital Website — hospital site with appointment UI\n\nType 'projects' in the terminal or open the Projects window to see live demos!`,
    },
    {
      keys: ['education', 'study', 'college', 'bca', 'degree', 'university', 'school'],
      answer: `Harsh is a 1st-year BCA student at World College of Technology & Management (WCTM), Gurugram.`,
    },
    {
      keys: ['intern', 'experience', 'work experience', 'job', 'inamigos', 'isp', 'internshala'],
      answer: `Harsh's experience:\n• Web Development Intern at Inamigos Foundation — earned Internship Certificate and "Best Intern" certificate.\n• Selected for Internshala Student Partner (ISP) program — received Direct Entry Certificate.`,
    },
    {
      keys: ['contact', 'reach', 'email', 'get in touch', 'connect'],
      answer: `You can contact Harsh at:\n• Email: harshchauhan.bca@gmail.com\n• LinkedIn: linkedin.com/in/harsh-chauhan-14568a407\n• GitHub: github.com/HARSH-G76\n\nUse the Contact window for the contact form!`,
    },
    {
      keys: ['goal', 'aim', 'future', 'want', 'become', 'dream', 'aspiration'],
      answer: `Harsh's goal: "I want to become a Software Engineer. I'm a BCA student building real-world web projects."`,
    },
    {
      keys: ['resume', 'cv', 'download resume'],
      answer: `You can download Harsh's resume from the Resume window or by using the 'resume' command in the terminal!`,
    },
    {
      keys: ['hire', 'recruit', 'employ', 'available', 'freelance'],
      answer: `Harsh is open to internships, freelance web development work, and junior developer roles. Reach out via email: harshchauhan.bca@gmail.com`,
    },
    {
      keys: ['who', 'harsh', 'about', 'tell me', 'introduce'],
      answer: `Harsh Chauhan is a Web Developer and aspiring Software Engineer. He's a 1st-year BCA student at WCTM, Gurugram, building real-world web projects. He's passionate about frontend development and continuously learning new technologies.`,
    },
    {
      keys: ['youtube', 'channel', 'video'],
      answer: `Harsh has two YouTube channels:\n• @HRXUG76 — youtube.com/@HRXUG76\n• @hrharshyt76 — youtube.com/@hrharshyt76`,
    },
    {
      keys: ['github', 'repo', 'code', 'source'],
      answer: `Harsh's GitHub: github.com/HARSH-G76 — check out his projects and code there!`,
    },
    {
      keys: ['linkedin', 'professional', 'network'],
      answer: `Harsh's LinkedIn: linkedin.com/in/harsh-chauhan-14568a407 — connect with him there!`,
    },
    {
      keys: ['certificate', 'achievement', 'award'],
      answer: `Harsh's certificates:\n• Internship Certificate — Inamigos Foundation\n• Best Intern Certificate — Inamigos Foundation\n• ISP Direct Entry Certificate — Internshala`,
    },
    {
      keys: ['blog', 'article', 'post', 'write'],
      answer: `Harsh writes about his journey in the Blog section. Posts include "How I built my Chat App", "My internship experience at Inamigos Foundation", and "Learning JavaScript as a BCA student". Open the Blog window to read!`,
    },
    {
      keys: ['hello', 'hi', 'hey', 'greetings', 'sup'],
      answer: `Hello! I'm Harsh's portfolio assistant. Ask me about his skills, projects, experience, or how to contact him!`,
    },
    {
      keys: ['thank', 'thanks', 'cool', 'awesome', 'nice', 'great'],
      answer: `Glad I could help! Feel free to explore the rest of the portfolio. Try the Terminal or Projects window!`,
    },
  ];

  function findAnswer(query) {
    const q = query.toLowerCase();
    let best = null, bestScore = 0;
    for (const entry of KB) {
      let score = 0;
      for (const key of entry.keys) {
        if (q.includes(key)) score += key.split(' ').length * 2 + 1;
      }
      if (score > bestScore) { bestScore = score; best = entry; }
    }
    if (best) return best.answer;
    return null;
  }

  function addMsg(text, sender) {
    const msg = el('div', `ai-msg ${sender}`);
    if (sender === 'bot') {
      msg.innerHTML = `<span class="ai-name">HC_AI</span>${escapeHtml(text).replace(/\n/g, '<br>')}`;
    } else {
      msg.textContent = text;
    }
    messages.appendChild(msg);
    messages.scrollTop = messages.scrollHeight;
  }

  function escapeHtml(s) {
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }

  function showTyping() {
    typing = el('div', 'ai-typing', '<span></span><span></span><span></span>');
    messages.appendChild(typing);
    messages.scrollTop = messages.scrollHeight;
  }

  function hideTyping() {
    if (typing) { typing.remove(); typing = null; }
  }

  function send(text) {
    if (!text.trim()) return;
    addMsg(text, 'user');
    input.value = '';
    showTyping();
    setTimeout(() => {
      hideTyping();
      const answer = findAnswer(text);
      if (answer) addMsg(answer, 'bot');
      else addMsg(`I'm not sure about that yet. Try asking about: skills, projects, experience, education, contact, goals, or certificates. You can also type 'help' in the terminal!`, 'bot');
    }, 600 + Math.random() * 400);
  }

  function init(body) {
    body.classList.add('ai-window');
    body.innerHTML = `
      <div class="ai-header"><i class="fa-solid fa-circle-info"></i> Offline portfolio assistant — no data is sent anywhere. Not a real AI; keyword-based Q&A about Harsh.</div>
      <div class="ai-messages" id="ai-messages"></div>
      <div class="ai-chips">
        <button class="ai-chip">What are your skills?</button>
        <button class="ai-chip">Show projects</button>
        <button class="ai-chip">How to contact you?</button>
        <button class="ai-chip">Education?</button>
        <button class="ai-chip">Experience?</button>
        <button class="ai-chip">What is your goal?</button>
      </div>
      <div class="ai-input-wrap">
        <input id="ai-input" type="text" placeholder="Ask me anything about Harsh..." aria-label="Ask AI input" />
        <button id="ai-send"><i class="fa-solid fa-paper-plane"></i></button>
      </div>`;

    messages = body.querySelector('#ai-messages');
    input = body.querySelector('#ai-input');
    sendBtn = body.querySelector('#ai-send');

    sendBtn.addEventListener('click', () => send(input.value));
    input.addEventListener('keydown', e => { if (e.key === 'Enter') send(input.value); });

    body.querySelectorAll('.ai-chip').forEach(chip => {
      chip.addEventListener('click', () => send(chip.textContent));
    });

    // Welcome
    addMsg(`Hi! I'm HC_AI, Harsh's portfolio assistant. Ask me about his skills, projects, experience, or how to contact him. This is a fully offline assistant — no data leaves your browser.`, 'bot');
  }

  return { init };
})();

/* ================================================================
   11. LIGHTBOX
   ================================================================ */
const Lightbox = (() => {
  const lb = $('#lightbox');
  const img = $('#lb-image');
  const caption = $('#lb-caption');
  let currentIndex = 0;

  function show(index) {
    const certs = CONFIG.certificates;
    if (index < 0 || index >= certs.length) return;
    currentIndex = index;
    const c = certs[index];
    img.src = c.image;
    img.alt = c.title;
    img.onerror = () => { img.style.display = 'none'; };
    img.onload = () => { img.style.display = ''; };
    caption.textContent = `${c.title} — ${c.issuer} (${c.date})`;
    lb.hidden = false;
  }

  function next() { show((currentIndex + 1) % CONFIG.certificates.length); }
  function prev() { show((currentIndex - 1 + CONFIG.certificates.length) % CONFIG.certificates.length); }
  function close() { lb.hidden = true; }

  function init() {
    $('#lb-close').addEventListener('click', close);
    $('#lb-next').addEventListener('click', next);
    $('#lb-prev').addEventListener('click', prev);
    lb.addEventListener('click', e => { if (e.target === lb) close(); });
    document.addEventListener('keydown', e => {
      if (lb.hidden) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    });
  }

  return { init, open: show };
})();

/* ================================================================
   12. BLOG & PROJECT MODALS (close handlers)
   ================================================================ */
function initModals() {
  const blogModal = $('#blog-modal');
  const projModal = $('#project-modal');
  $('#blog-modal-close').addEventListener('click', () => blogModal.hidden = true);
  $('#project-modal-close').addEventListener('click', () => projModal.hidden = true);
  blogModal.addEventListener('click', e => { if (e.target === blogModal) blogModal.hidden = true; });
  projModal.addEventListener('click', e => { if (e.target === projModal) projModal.hidden = true; });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      if (!blogModal.hidden) blogModal.hidden = true;
      if (!projModal.hidden) projModal.hidden = true;
    }
  });
}

/* ================================================================
   13. CONTACT FORM — built in ContentBuilder

   14. COMMAND PALETTE (Ctrl+K)
   ================================================================ */
const CommandPalette = (() => {
  const palette = $('#cmd-palette');
  const input = $('#cmd-input');
  const list = $('#cmd-list');
  let items = [];

  function buildItems() {
    items = CONFIG.windows.map(w => ({
      label: w.title, icon: w.icon, action: () => WindowManager.open(w.id),
    }));
    items.push({ label: 'Toggle Theme', icon: 'fa-solid fa-moon', action: () => ThemeManager.toggle() });
    items.push({ label: 'Toggle Matrix Rain', icon: 'fa-solid fa-tv', action: () => Effects.toggle() });
    items.push({ label: 'Download Resume', icon: 'fa-solid fa-download', action: () => {
      const a = el('a'); a.href = CONFIG.profile.resume; a.download = ''; document.body.appendChild(a); a.click(); a.remove();
    }});
  }

  function render(filter = '') {
    const filtered = items.filter(i => i.label.toLowerCase().includes(filter.toLowerCase()));
    list.innerHTML = filtered.map((item, i) =>
      `<li class="${i===0?'selected':''}" data-idx="${i}"><i class="${item.icon}"></i> ${item.label}</li>`
    ).join('');
    list.querySelectorAll('li').forEach((li, i) => {
      li.addEventListener('click', () => { filtered[i].action(); close(); });
    });
  }

  function open() {
    palette.hidden = false;
    input.value = '';
    render('');
    input.focus();
  }

  function close() { palette.hidden = true; }

  function init() {
    buildItems();
    document.addEventListener('keydown', e => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (palette.hidden) open(); else close();
      }
      if (e.key === 'Escape' && !palette.hidden) close();
    });
    input.addEventListener('input', () => render(input.value));
    input.addEventListener('keydown', e => {
      const selected = list.querySelector('.selected');
      if (e.key === 'Enter' && selected) {
        const idx = parseInt(selected.dataset.idx, 10);
        const filtered = items.filter(i => i.label.toLowerCase().includes(input.value.toLowerCase()));
        if (filtered[idx]) { filtered[idx].action(); close(); }
      }
      if (e.key === 'ArrowDown' && selected?.nextElementSibling) {
        selected.classList.remove('selected');
        selected.nextElementSibling.classList.add('selected');
        selected.nextElementSibling.scrollIntoView({ block: 'nearest' });
      }
      if (e.key === 'ArrowUp' && selected?.previousElementSibling) {
        selected.classList.remove('selected');
        selected.previousElementSibling.classList.add('selected');
        selected.previousElementSibling.scrollIntoView({ block: 'nearest' });
      }
    });
    palette.addEventListener('click', e => { if (e.target === palette) close(); });
  }

  return { init };
})();

/* ================================================================
   15. EASTER EGGS — Konami Code
   ================================================================ */
const Konami = (() => {
  const sequence = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
  let pos = 0;
  const overlay = $('#anon-overlay');
  const canvas = $('#anon-canvas');
  let active = false;
  let animId;

  function activate() {
    if (active) return;
    active = true;
    overlay.classList.add('active');
    runAnonMatrix();
    // Auto-dismiss after 8 seconds
    setTimeout(deactivate, 8000);
  }

  function deactivate() {
    active = false;
    overlay.classList.remove('active');
    if (animId) cancelAnimationFrame(animId);
  }

  function runAnonMatrix() {
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const fontSize = 16;
    const cols = Math.floor(canvas.width / fontSize);
    const drops = new Array(cols).fill(0).map(() => rand(-50, 0));
    const chars = '01ｱｲｳｴｵｶｷｸｹｺWE ARE ANONYMOUS WE ARE LEGION EXPECT US';

    function draw() {
      if (!active) return;
      animId = requestAnimationFrame(draw);
      ctx.fillStyle = 'rgba(0,0,0,0.06)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = fontSize + 'px monospace';
      for (let i = 0; i < cols; i++) {
        const ch = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillStyle = Math.random() > 0.5 ? '#00ff41' : '#39ff14';
        ctx.fillText(ch, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }
    }
    draw();
  }

  function init() {
    document.addEventListener('keydown', e => {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      if (key === sequence[pos]) {
        pos++;
        if (pos === sequence.length) { pos = 0; activate(); }
      } else {
        pos = key === sequence[0] ? 1 : 0;
      }
    });
    overlay.addEventListener('click', deactivate);
  }

  return { init };
})();

/* ================================================================
   16. CURSOR TRAIL
   ================================================================ */
function initCursorTrail() {
  const trail = $('#cursor-trail');
  if (isMobile() || prefersReducedMotion()) { trail.style.display = 'none'; return; }
  let mx = 0, my = 0;
  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    trail.style.transform = `translate(${mx - 8}px, ${my - 8}px)`;
  });
  // Click ripple
  document.addEventListener('mousedown', () => {
    trail.style.transform += ' scale(2)';
    trail.style.opacity = '0.5';
  });
  document.addEventListener('mouseup', () => {
    trail.style.opacity = '';
  });
}

/* ================================================================
   17. THEME & SETTINGS
   ================================================================ */
const ThemeManager = (() => {
  let current = 'dark';

  function apply(theme) {
    current = theme;
    document.body.classList.toggle('theme-light', theme === 'light');
    const icon = $('#theme-toggle-btn i');
    if (icon) {
      icon.className = theme === 'dark' ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
    }
  }

  function set(theme) {
    apply(theme);
    localStorage.setItem(STORAGE_KEYS.theme, theme);
  }

  function toggle() {
    set(current === 'dark' ? 'light' : 'dark');
    return current;
  }

  function init() {
    const saved = localStorage.getItem(STORAGE_KEYS.theme) || 'dark';
    apply(saved);
    $('#theme-toggle-btn').addEventListener('click', toggle);
  }

  return { init, toggle, set, get: () => current };
})();

/* ================================================================
   18. VISITOR COUNTER — in Panel.init

   19. MOBILE LAYOUT
   ================================================================ */
function initMobile() {
  function check() {
    const mobile = isMobile();
    document.body.classList.toggle('mobile-mode', mobile);
  }
  check();
  window.addEventListener('resize', () => {
    check();
  });

  // Mobile "More" menu
  const moreBtn = $('#mobile-more');
  const moreMenu = $('#mobile-more-menu');
  if (moreBtn) {
    moreBtn.addEventListener('click', () => { moreMenu.hidden = !moreMenu.hidden; });
    document.addEventListener('click', e => {
      if (!e.target.closest('#mobile-more') && !e.target.closest('#mobile-more-menu')) moreMenu.hidden = true;
    });
  }

  // Mobile nav buttons
  $$('#mobile-nav button, #mobile-more-menu button').forEach(btn => {
    if (btn.dataset.open) {
      btn.addEventListener('click', () => {
        WindowManager.open(btn.dataset.open);
        moreMenu.hidden = true;
      });
    }
  });

  // Scroll progress
  window.addEventListener('scroll', () => {
    if (!isMobile()) return;
    const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    $('#scroll-progress').style.width = pct + '%';
  });
}

/* ================================================================
   HERO ANIMATIONS (typewriter, whoami)
   ================================================================ */
const HeroAnimations = (() => {
  let started = false;

  async function typeWriter(element, text, speed = 60) {
    for (let i = 0; i < text.length; i++) {
      element.textContent += text[i];
      await new Promise(r => setTimeout(r, speed));
    }
  }

  async function rotateTypewriter() {
    const twText = $('#tw-text');
    const roles = CONFIG.profile.fullRole.split(' | ');
    let idx = 0;
    while (true) {
      await new Promise(r => setTimeout(r, 1500));
      // Erase
      while (twText.textContent.length > 0) {
        twText.textContent = twText.textContent.slice(0, -1);
        await new Promise(r => setTimeout(r, 30));
      }
      // Type next
      await typeWriter(twText, roles[idx], 50);
      idx = (idx + 1) % roles.length;
    }
  }

  function start() {
    if (started) return;
    started = true;
    const whoami = $('#hero-whoami');
    const nameEl = $('#hero-name');
    const twText = $('#tw-text');

    // Type "> whoami"
    typeWriter(whoami, '> whoami', 80).then(async () => {
      await new Promise(r => setTimeout(r, 300));
      // Glitch the name
      nameEl.style.opacity = '1';
      // Start rotating typewriter
      rotateTypewriter();
    });

    // Staggered entrance
    const hero = $('.hero');
    if (hero) {
      hero.style.opacity = '0';
      hero.style.transform = 'translateY(20px)';
      hero.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      requestAnimationFrame(() => {
        hero.style.opacity = '1';
        hero.style.transform = 'translateY(0)';
      });
    }
  }

  return { start };
})();

/* ================================================================
   20. INIT
   ================================================================ */
function init() {
  // Core systems
  ThemeManager.init();
  Effects.init();
  Panel.init();
  Lightbox.init();
  CommandPalette.init();
  Konami.init();
  initModals();
  initMobile();
  initCursorTrail();

  // Dock & desktop icon clicks
  $$('[data-open]').forEach(btn => {
    btn.addEventListener('click', () => WindowManager.open(btn.dataset.open));
    // Desktop icons: double-click
    if (btn.classList.contains('desktop-icon')) {
      btn.addEventListener('dblclick', () => WindowManager.open(btn.dataset.open));
    }
  });

  // Sound toggle (placeholder — no audio loaded by default)
  let soundOn = false;
  const soundBtn = $('#sound-toggle-btn');
  soundBtn.addEventListener('click', () => {
    soundOn = !soundOn;
    soundBtn.querySelector('i').className = soundOn ? 'fa-solid fa-volume-high' : 'fa-solid fa-volume-xmark';
    localStorage.setItem(STORAGE_KEYS.sound, soundOn);
  });
  const savedSound = localStorage.getItem(STORAGE_KEYS.sound) === 'true';
  if (savedSound) { soundOn = true; soundBtn.querySelector('i').className = 'fa-solid fa-volume-high'; }

  // Effects toggle
  $('#effects-toggle-btn').addEventListener('click', () => {
    const on = Effects.toggle();
    $('#effects-toggle-btn').style.color = on ? '' : 'var(--text-muted)';
  });

  // Boot sequence
  BootSequence.run();
}

// Start when DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
