/**
 * CineBook Low-Fidelity Blueprint — Standardized Top Header & Floating AI Message Bubble
 * Strictly adheres to DESIGN.md (Single Search Bar, Fixed Dimensions, Bottom Chat Bubble)
 */

(function () {
  const currentPath = window.location.pathname;
  let currentFolder = '';
  const match = currentPath.match(/([0-9]+_cinebook_[^/]+)/);
  if (match) {
    currentFolder = match[1];
  }

  // Inject Stylesheet if not present
  if (!document.getElementById('cinebook-shared-styles')) {
    const link = document.createElement('link');
    link.id = 'cinebook-shared-styles';
    link.rel = 'stylesheet';
    link.href = '../cinebook-shared.css';
    document.head.appendChild(link);
  }

  // Ensure Google Material Symbols font is loaded
  if (!document.querySelector('link[href*="Material+Symbols"]')) {
    const iconLink = document.createElement('link');
    iconLink.rel = 'stylesheet';
    iconLink.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap';
    document.head.appendChild(iconLink);
  }

  /* ==========================================================================
     1. STANDARDIZED TOP HEADER (Normal Search + AI Search Dual Access)
     ========================================================================== */
  function unifyTopNavBar() {
    const isCustomerScreen = /^(1|2|3|4|5|6|7|8|9|10|11|12|13|14|26|27|28)_cinebook/.test(currentFolder);
    if (!isCustomerScreen) return;

    let topNav = null;
    const candidates = document.querySelectorAll('body > nav, body > header, nav, header');
    for (let el of candidates) {
      if (el.closest('main') || el.closest('section') || el.closest('aside') || el.closest('footer')) continue;
      topNav = el;
      break;
    }

    if (!topNav) return;
    const outerHeader = topNav.closest('header') || topNav.closest('nav') || topNav;

    const isMoviesActive = currentFolder.includes('movie_list') || currentFolder.includes('movie_detail');
    const isAiSearchActive = currentFolder.includes('ai_search');
    const isRecommendationsActive = currentFolder.includes('personalized_recommendations');

    const headerElem = document.createElement('header');
    headerElem.className = 'cb-header';
    headerElem.innerHTML = `
      <div class="cb-header-container">
        <!-- Left: Logo & Navigation Links -->
        <div class="cb-nav-left">
          <a href="../1_cinebook_home_page/code.html" class="cb-brand-logo">
            CineBook
          </a>
          
          <nav class="cb-nav-menu">
            <a href="../2_cinebook_movie_list/code.html" class="cb-nav-item ${isMoviesActive ? 'active' : ''}">
              <span class="material-symbols-outlined" style="font-size: 18px;">movie</span>
              <span>Movies</span>
            </a>
            <a href="../3_cinebook_ai_search/code.html" class="cb-nav-item ${isAiSearchActive ? 'active' : ''}">
              <span class="material-symbols-outlined" style="font-size: 18px;">auto_awesome</span>
              <span>AI Search</span>
            </a>
            <a href="../14_cinebook_personalized_recommendations/code.html" class="cb-nav-item ${isRecommendationsActive ? 'active' : ''}">
              <span class="material-symbols-outlined" style="font-size: 18px;">recommend</span>
              <span>For You</span>
            </a>
          </nav>
        </div>

        <!-- Right: Search Bar + Account Button -->
        <div class="cb-nav-right">
          <div class="cb-search-wrap">
            <span class="material-symbols-outlined cb-search-icon">search</span>
            <input type="text" id="cb-global-search-input" class="cb-search-input" placeholder="Search movies, genres, cinemas...">
            <button type="button" id="cb-ai-search-btn" class="cb-ai-search-pill" title="Chuyển sang Tìm kiếm AI">
              <span class="material-symbols-outlined" style="font-size: 14px;">auto_awesome</span>
              <span>AI</span>
            </button>
          </div>

          <a href="../13_cinebook_user_profile/code.html" class="cb-account-btn">
            <span class="material-symbols-outlined" style="font-size: 18px;">person</span>
            <span>Account</span>
          </a>
        </div>
      </div>
    `;

    outerHeader.replaceWith(headerElem);

    // Clean up any extra mobile search bars
    document.querySelectorAll('.md\\:hidden').forEach(el => {
      if (el.querySelector('input[placeholder*="Search"]') || el.querySelector('input[placeholder*="search"]')) {
        el.remove();
      }
    });

    // Search events
    const searchInput = document.getElementById('cb-global-search-input');
    if (searchInput) {
      searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && searchInput.value.trim()) {
          window.location.href = `../3_cinebook_ai_search/code.html?q=${encodeURIComponent(searchInput.value.trim())}`;
        }
      });
    }

    const aiSearchBtn = document.getElementById('cb-ai-search-btn');
    if (aiSearchBtn) {
      aiSearchBtn.addEventListener('click', () => {
        window.location.href = '../3_cinebook_ai_search/code.html';
      });
    }
  }

  /* ==========================================================================
     2. FLOATING AI ASSISTANT CHAT BUBBLE (Góc dưới bên phải màn hình)
     ========================================================================== */
  function injectFloatingAIWidget() {
    const isCustomerScreen = /^(1|2|3|4|5|6|7|8|9|10|11|12|13|14)_cinebook/.test(currentFolder);
    if (!isCustomerScreen) return;
    if (document.getElementById('cb-floating-chat-btn')) return;

    // 1. Create Floating Button
    const chatBtn = document.createElement('button');
    chatBtn.id = 'cb-floating-chat-btn';
    chatBtn.type = 'button';
    chatBtn.title = 'Hỏi trợ lý CineBook AI';
    chatBtn.innerHTML = `
      <span class="material-symbols-outlined" style="font-size: 24px;">chat</span>
      <span class="cb-chat-badge">AI</span>
    `;
    document.body.appendChild(chatBtn);

    // 2. Create Floating Modal
    const chatModal = document.createElement('div');
    chatModal.id = 'cb-floating-chat-modal';
    chatModal.innerHTML = `
      <div class="cb-chat-header">
        <div class="cb-chat-title">
          <span class="material-symbols-outlined" style="font-size: 20px;">smart_toy</span>
          <span>CineBook AI Assistant</span>
        </div>
        <button type="button" id="cb-chat-close-btn" class="cb-chat-close-btn">
          <span class="material-symbols-outlined" style="font-size: 18px;">close</span>
        </button>
      </div>

      <div class="cb-chat-body" id="cb-chat-messages">
        <div class="cb-msg ai">
          👋 Hello! I am your <strong>CineBook AI Assistant</strong>. What movie are you looking for today, or how can I assist with your booking?
        </div>

        <div class="cb-suggestion-chips" id="cb-suggestion-chips">
          <button type="button" class="cb-chip" data-query="Recommend top trending Sci-Fi movies">🎬 Sci-Fi Movies</button>
          <button type="button" class="cb-chip" data-query="Showtimes for tonight">🍿 Showtimes Tonight</button>
          <button type="button" class="cb-chip" data-query="How does VIP seat locking work?">🎟️ Seat Selection</button>
        </div>
      </div>

      <div class="cb-chat-footer">
        <input type="text" id="cb-chat-input" class="cb-chat-input" placeholder="Ask AI anything...">
        <button type="button" id="cb-chat-send-btn" class="cb-chat-send">
          <span class="material-symbols-outlined" style="font-size: 16px;">arrow_forward</span>
        </button>
      </div>
    `;
    document.body.appendChild(chatModal);

    // 3. Attach Direct Event Listeners
    chatBtn.addEventListener('click', () => {
      chatModal.classList.toggle('open');
      if (chatModal.classList.contains('open')) {
        const input = document.getElementById('cb-chat-input');
        if (input) input.focus();
      }
    });

    const closeBtn = document.getElementById('cb-chat-close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        chatModal.classList.remove('open');
      });
    }

    const sendBtn = document.getElementById('cb-chat-send-btn');
    const inputField = document.getElementById('cb-chat-input');

    function handleSend() {
      const text = inputField.value.trim();
      if (!text) return;
      inputField.value = '';
      executeAiQuery(text);
    }

    if (sendBtn) sendBtn.addEventListener('click', handleSend);
    if (inputField) {
      inputField.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') handleSend();
      });
    }

    // Attach click handlers on chips
    document.querySelectorAll('#cb-suggestion-chips .cb-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const query = chip.getAttribute('data-query');
        if (query) executeAiQuery(query);
      });
    });
  }

  // Execute AI query with live response
  function executeAiQuery(text) {
    const messages = document.getElementById('cb-chat-messages');
    if (!messages) return;

    // Append user bubble
    const userBubble = document.createElement('div');
    userBubble.className = 'cb-msg user';
    userBubble.innerText = text;
    messages.appendChild(userBubble);

    // Append AI loading bubble
    const aiBubble = document.createElement('div');
    aiBubble.className = 'cb-msg ai';
    aiBubble.innerHTML = 'Searching via pgvector semantic search...';
    messages.appendChild(aiBubble);
    messages.scrollTop = messages.scrollHeight;

    setTimeout(() => {
      let replyHtml = '';
      if (text.includes('Sci-Fi') || text.includes('movie')) {
        replyHtml = `I found a top match: <strong>"The Architect's Dream"</strong> (IMAX 2D).<br><br>
        ⭐ Rating: <strong>8.5/10</strong><br>
        🕒 Showtime: <strong>19:30 Tonight</strong><br><br>
        <div style="display: flex; gap: 8px; margin-top: 8px;">
          <a href="../4_cinebook_movie_detail/code.html" style="background: #000000; color: #ffffff; padding: 6px 12px; border-radius: 4px; font-size: 12px; text-decoration: none; font-weight: 600;">Movie Details</a>
          <a href="../6_cinebook_seat_selection/code.html" style="background: #f3f4f6; color: #000000; border: 1px solid #d1d5db; padding: 6px 12px; border-radius: 4px; font-size: 12px; text-decoration: none; font-weight: 600;">Select Seats</a>
        </div>`;
      } else {
        replyHtml = `Here are today's available showtimes:<br><br>
        • <strong>The Architect's Dream</strong> — 19:30 (Hall 1)<br>
        • <strong>Stellar Voyage</strong> — 20:15 (Hall 2)<br><br>
        <a href="../4_cinebook_movie_detail/code.html" style="background: #000000; color: #ffffff; padding: 6px 12px; border-radius: 4px; font-size: 12px; text-decoration: none; font-weight: 600; display: inline-block;">View Details</a>`;
      }
      aiBubble.innerHTML = replyHtml;
      messages.scrollTop = messages.scrollHeight;
    }, 400);
  }

  /* ==========================================================================
     3. UNIFY STAFF SIDEBAR (Screens 15-19)
     ========================================================================== */
  function unifyStaffSidebar() {
    const isStaffScreen = /^(15|16|17|18|19)_cinebook/.test(currentFolder);
    if (!isStaffScreen) return;

    let aside = document.querySelector('aside');
    if (!aside) return;

    // Define links
    const links = [
      { id: '15_cinebook_staff_dashboard', icon: 'dashboard', text: 'Dashboard', fill: 0 },
      { id: '16_cinebook_manage_showtimes', icon: 'event', text: 'Showtimes', fill: 0 },
      { id: '17_cinebook_manage_halls', icon: 'door_open', text: 'Halls & Seats', fill: 0 },
      { id: '18_cinebook_ticket_check_in', icon: 'qr_code_scanner', text: 'Ticket Check-in', fill: 0 },
      { id: '19_cinebook_staff_revenue_report', icon: 'assessment', text: 'Revenue Report', fill: 0 }
    ];

    let navHtml = '';
    links.forEach(l => {
      const isActive = currentFolder.includes(l.id);
      const activeClass = isActive 
        ? 'bg-primary dark:bg-primary text-on-primary dark:text-on-primary' 
        : 'text-secondary dark:text-on-secondary-fixed-variant hover:bg-surface-variant';
      const fillIcon = isActive ? 1 : l.fill;
      
      navHtml += `
        <a class="flex items-center gap-3 px-3 py-2 text-label-md font-label-md rounded transition-all duration-200 ${activeClass}" href="../${l.id}/code.html">
          <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' ${fillIcon};">${l.icon}</span>
          ${l.text}
        </a>
      `;
    });

    aside.innerHTML = `
      <div class="mb-8 flex items-center gap-3">
        <div class="w-10 h-10 rounded-full bg-surface-container-highest border border-outline-variant flex items-center justify-center overflow-hidden">
          <span class="material-symbols-outlined text-secondary">badge</span>
        </div>
        <div>
          <h1 class="text-headline-sm font-headline-sm font-bold text-primary dark:text-on-surface">Staff Portal</h1>
          <p class="text-label-sm font-label-sm text-secondary">Cinema Operations</p>
        </div>
      </div>
      <nav class="flex-1 flex flex-col gap-1">
        ${navHtml}
      </nav>
      <div class="mt-auto border-t border-outline-variant pt-4 flex flex-col gap-2">
        <button class="w-full bg-primary text-on-primary text-label-md font-label-md py-2 px-4 rounded-sm hover:bg-surface-tint transition-colors flex items-center justify-center gap-2">
          <span class="material-symbols-outlined" style="font-size: 18px;">qr_code_scanner</span>
          Quick Scan
        </button>
        <a class="flex items-center gap-3 px-3 py-2 text-secondary hover:bg-surface-container-lowest rounded text-label-md font-label-md transition-colors mt-2" href="../1_cinebook_home_page/code.html">
          <span class="material-symbols-outlined">logout</span>
          Sign Out
        </a>
      </div>
    `;
  }

  /* ==========================================================================
     4. UNIFY ADMIN SIDEBAR (Screens 20-25)
     ========================================================================== */
  function unifyAdminSidebar() {
    const isAdminScreen = /^(20|21|22|23|24|25)_cinebook/.test(currentFolder);
    if (!isAdminScreen) return;

    let aside = document.querySelector('aside');
    if (!aside) return;

    // Define links
    const links = [
      { id: '20_cinebook_admin_global_dashboard', icon: 'dashboard', text: 'Global Dashboard', fill: 0 },
      { id: '21_cinebook_manage_movies', icon: 'movie', text: 'Movies Catalog', fill: 0 },
      { id: '22_cinebook_manage_cinemas', icon: 'business', text: 'Cinemas Network', fill: 0 },
      { id: '23_cinebook_user_management', icon: 'group', text: 'Users & RBAC', fill: 0 },
      { id: '24_cinebook_promotions_management', icon: 'local_activity', text: 'Promotions', fill: 0 },
      { id: '25_cinebook_system_monitoring', icon: 'monitor_heart', text: 'System Monitoring', fill: 0 }
    ];

    let navHtml = '';
    links.forEach(l => {
      const isActive = currentFolder.includes(l.id);
      const activeClass = isActive 
        ? 'bg-primary dark:bg-primary text-on-primary dark:text-on-primary' 
        : 'text-secondary dark:text-on-secondary-fixed-variant hover:bg-surface-variant';
      const fillIcon = isActive ? 1 : l.fill;
      
      navHtml += `
        <a class="flex items-center gap-3 px-3 py-2 text-label-md font-label-md rounded transition-all duration-200 ${activeClass}" href="../${l.id}/code.html">
          <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' ${fillIcon};">${l.icon}</span>
          ${l.text}
        </a>
      `;
    });

    aside.innerHTML = `
      <div class="mb-8 flex items-center gap-3">
        <div class="w-10 h-10 rounded-full bg-surface-container-highest border border-outline-variant flex items-center justify-center overflow-hidden">
          <span class="material-symbols-outlined text-secondary">admin_panel_settings</span>
        </div>
        <div>
          <h1 class="text-headline-sm font-headline-sm font-bold text-primary dark:text-on-surface">Admin Console</h1>
          <p class="text-label-sm font-label-sm text-secondary">System Management</p>
        </div>
      </div>
      <nav class="flex-1 flex flex-col gap-1">
        ${navHtml}
      </nav>
      <div class="mt-auto border-t border-outline-variant pt-4 flex flex-col gap-2">
        <a class="flex items-center gap-3 px-3 py-2 text-secondary hover:bg-surface-container-lowest rounded text-label-md font-label-md transition-colors" href="../1_cinebook_home_page/code.html">
          <span class="material-symbols-outlined">logout</span>
          Sign Out
        </a>
      </div>
    `;
  }

  /* ==========================================================================
     5. UNIFY USER ACCOUNT SIDEBAR (Screens 13, 26, 27, 28)
     ========================================================================== */
  function unifyUserSidebar() {
    const isUserAccountScreen = /^(13|26|27|28)_cinebook/.test(currentFolder);
    if (!isUserAccountScreen) return;

    let aside = document.querySelector('aside');
    if (!aside) return;

    // Find the container div inside aside (could be .sticky or just the first div)
    let sidebarContainer = aside.querySelector('div.bg-surface, div.bg-white, .sticky');
    if (!sidebarContainer) {
      sidebarContainer = aside.firstElementChild; // fallback
    }
    if (!sidebarContainer) return;

    // Overwrite any hardcoded border or background styles to match our unified design
    sidebarContainer.className = "bg-surface border border-outline-variant rounded-DEFAULT p-4 sticky top-24";

    // Define links
    const links = [
      { id: '13_cinebook_user_profile', icon: 'account_circle', text: 'Profile Details', fill: 0 },
      { id: '26_cinebook_my_tickets', icon: 'confirmation_number', text: 'My Tickets', fill: 0 },
      { id: '27_cinebook_membership_points', icon: 'star', text: 'Membership & Points', fill: 0 },
      { id: '28_cinebook_preferences', icon: 'settings', text: 'Preferences', fill: 0 }
    ];

    let navHtml = '';
    links.forEach(l => {
      const isActive = currentFolder.includes(l.id);
      const activeClass = isActive 
        ? 'bg-surface-container-low text-primary border-l-2 border-primary' 
        : 'text-secondary hover:bg-surface-container-lowest border-l-2 border-transparent';
      const fillIcon = isActive ? 1 : l.fill;
      
      // Added whitespace-nowrap to prevent ugly wrapping
      navHtml += `
        <a class="flex items-center gap-3 px-3 py-2 rounded-r-DEFAULT text-label-md font-label-md whitespace-nowrap transition-colors ${activeClass}" href="../${l.id}/code.html">
          <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' ${fillIcon};">${l.icon}</span>
          ${l.text}
        </a>
      `;
    });

    sidebarContainer.innerHTML = `
      <div class="flex items-center gap-4 mb-6 pb-6 border-b border-outline-variant">
        <div class="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center border border-outline-variant overflow-hidden">
          <span class="material-symbols-outlined text-secondary" style="font-variation-settings: 'FILL' 0;">person</span>
        </div>
        <div>
          <h2 class="text-label-md font-label-md text-primary">Alex Mercer</h2>
          <p class="text-body-sm font-body-sm text-secondary">Member since 2023</p>
        </div>
      </div>
      <nav class="flex flex-col gap-1">
        ${navHtml}
        <a class="flex items-center gap-3 px-3 py-2 text-secondary hover:bg-surface-container-lowest rounded-DEFAULT text-label-md font-label-md transition-colors mt-4 border-t border-outline-variant pt-4" href="../1_cinebook_home_page/code.html">
          <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 0;">logout</span>
          Sign Out
        </a>
      </nav>
    `;
  }

  /* ==========================================================================
     6. INTERACTIVE WIREFRAME CLICK-THROUGH HOOKS
     ========================================================================== */
  function wireUpInteractiveLinks() {
    document.querySelectorAll('button, a').forEach(el => {
      const text = (el.innerText || '').trim().toLowerCase();
      
      if (text.includes('book') || text.includes('đặt vé') || text.includes('get tickets')) {
        if (!el.getAttribute('href') || el.getAttribute('href') === '#') {
          el.addEventListener('click', (e) => {
            e.preventDefault();
            if (currentFolder.includes('movie_detail')) {
              window.location.href = '../6_cinebook_seat_selection/code.html';
            } else {
              window.location.href = '../4_cinebook_movie_detail/code.html';
            }
          });
        }
      } else if (text.includes('proceed') || text.includes('snack') || text.includes('continue') || text.includes('tiếp tục')) {
        el.addEventListener('click', (e) => {
          e.preventDefault();
          if (currentFolder.includes('seat_selection')) {
            window.location.href = '../7_cinebook_combo_snacks/code.html';
          } else if (currentFolder.includes('combo_snacks')) {
            window.location.href = '../8_cinebook_payment_checkout/code.html';
          }
        });
      } else if (text.includes('pay') || text.includes('checkout') || text.includes('complete') || text.includes('thanh toán')) {
        el.addEventListener('click', (e) => {
          e.preventDefault();
          window.location.href = '../9_cinebook_booking_success/code.html';
        });
      } else if (text.includes('view ticket') || text.includes('ticket details') || text.includes('chi tiết vé')) {
        el.addEventListener('click', (e) => {
          e.preventDefault();
          window.location.href = '../12_cinebook_ticket_details/code.html';
        });
      }
    });

    // Movie cards click handler
    document.querySelectorAll('.group.cursor-pointer, [data-alt]').forEach(card => {
      const parent = card.closest('.flex-col') || card;
      if (!parent.hasAttribute('data-wired')) {
        parent.setAttribute('data-wired', 'true');
        parent.style.cursor = 'pointer';
        parent.addEventListener('click', (e) => {
          if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A') return;
          if (currentFolder.includes('home_page') || currentFolder.includes('movie_list') || currentFolder.includes('ai_search') || currentFolder.includes('personalized_recommendations')) {
            window.location.href = '../4_cinebook_movie_detail/code.html';
          }
        });
      }
    });
  }

  // Run on DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      unifyTopNavBar();
      unifyUserSidebar();
      unifyStaffSidebar();
      unifyAdminSidebar();
      injectFloatingAIWidget();
      wireUpInteractiveLinks();
    });
  } else {
    unifyTopNavBar();
    unifyUserSidebar();
    unifyStaffSidebar();
    unifyAdminSidebar();
    injectFloatingAIWidget();
    wireUpInteractiveLinks();
  }
})();
