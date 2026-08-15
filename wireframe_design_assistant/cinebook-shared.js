/**
 * CineBook Low-Fidelity Blueprint — Shared Wireframe Header & AI Pop-up
 * Strictly adheres to DESIGN.md (Clean Grayscale Wireframe, Inter Typography, Standard UX)
 */

(function () {
  // Determine current screen from URL
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

  // Ensure Google Material Symbols and Inter Fonts are loaded
  if (!document.querySelector('link[href*="Material+Symbols"]')) {
    const iconLink = document.createElement('link');
    iconLink.rel = 'stylesheet';
    iconLink.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap';
    document.head.appendChild(iconLink);
  }

  /* ==========================================================================
     1. STANDARDIZED TOP NAVBAR (Wireframe Standard: Logo + Movies + Offers + Search + Ask AI + Account)
     ========================================================================== */
  function unifyTopNavBar() {
    const existingNav = document.querySelector('nav') || document.querySelector('header');
    if (!existingNav) return;

    const isMoviesActive = currentFolder.includes('movie_list') || currentFolder.includes('movie_detail') || currentFolder.includes('seat_selection');
    const isOffersActive = currentFolder.includes('combo_snacks') || currentFolder.includes('promotions');

    const navHTML = `
      <div class="cb-nav-wrapper">
        <div class="cb-nav-inner">
          <!-- Left: Logo & Standard Navigation Links -->
          <div style="display: flex; align-items: center; gap: 32px; height: 100%;">
            <a href="../1_cinebook_home_page/code.html" class="cb-logo">
              CineBook
            </a>
            
            <div class="cb-nav-links">
              <a href="../2_cinebook_movie_list/code.html" class="cb-nav-link ${isMoviesActive ? 'active' : ''}">
                Movies
              </a>
              <a href="../7_cinebook_combo_snacks/code.html" class="cb-nav-link ${isOffersActive ? 'active' : ''}">
                Offers
              </a>
            </div>
          </div>

          <!-- Right: Search Bar + Ask AI + Account -->
          <div class="cb-nav-right">
            <div class="cb-search-bar">
              <span class="material-symbols-outlined cb-search-icon">search</span>
              <input type="text" id="cb-global-search-input" class="cb-search-input" placeholder="Search movies, genres, cinemas...">
            </div>

            <button type="button" class="cb-btn-ai" onclick="window.toggleCineBookAIWidget()">
              <span class="material-symbols-outlined" style="font-size: 18px;">auto_awesome</span>
              <span>Ask AI</span>
            </button>

            <a href="../13_cinebook_user_profile/code.html" class="cb-btn-account">
              <span class="material-symbols-outlined" style="font-size: 18px;">person</span>
              <span>Account</span>
            </a>
          </div>
        </div>
      </div>
    `;

    // Replace outer navbar with standardized container
    existingNav.outerHTML = navHTML;

    // Search enter handler
    const searchInput = document.getElementById('cb-global-search-input');
    if (searchInput) {
      searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && searchInput.value.trim()) {
          window.location.href = `../3_cinebook_ai_search/code.html?q=${encodeURIComponent(searchInput.value.trim())}`;
        }
      });
    }
  }

  /* ==========================================================================
     2. FLOATING AI ASSISTANT POP-UP WIDGET (Clean Low-Fidelity Wireframe Pop-up)
     ========================================================================== */
  function injectFloatingAIWidget() {
    if (document.getElementById('cb-floating-ai-trigger')) return;

    // Trigger Pill Button
    const trigger = document.createElement('button');
    trigger.id = 'cb-floating-ai-trigger';
    trigger.type = 'button';
    trigger.innerHTML = `
      <span class="material-symbols-outlined" style="font-size: 18px;">auto_awesome</span>
      <span>Ask AI</span>
    `;
    trigger.onclick = () => window.toggleCineBookAIWidget();
    document.body.appendChild(trigger);

    // Chat Drawer Popup
    const chatWidget = document.createElement('div');
    chatWidget.id = 'cb-floating-ai-widget';
    chatWidget.innerHTML = `
      <div class="cb-chat-header">
        <div class="cb-chat-title">
          <span class="material-symbols-outlined" style="font-size: 20px;">smart_toy</span>
          <span>CineBook AI Assistant</span>
        </div>
        <button type="button" onclick="window.toggleCineBookAIWidget(false)" style="background: transparent; border: none; cursor: pointer; color: #4b5563; display: flex; padding: 4px; border-radius: 4px;">
          <span class="material-symbols-outlined" style="font-size: 18px;">close</span>
        </button>
      </div>

      <div class="cb-chat-body" id="cb-chat-messages">
        <div class="cb-msg ai">
          Hello! I am your <strong>CineBook AI Assistant</strong>. What movie are you looking for today, or how can I assist with your booking?
        </div>

        <div class="cb-suggestion-chips">
          <div class="cb-chip" onclick="window.sendAiQuickQuery('Recommend top trending Sci-Fi movies')">Sci-Fi Movies</div>
          <div class="cb-chip" onclick="window.sendAiQuickQuery('Showtimes for tonight')">Showtimes Tonight</div>
          <div class="cb-chip" onclick="window.sendAiQuickQuery('How does seat locking work?')">VIP Seat Selection</div>
        </div>
      </div>

      <div class="cb-chat-footer">
        <input type="text" id="cb-chat-input" class="cb-chat-input" placeholder="Ask AI anything..." onkeydown="if(event.key==='Enter') window.sendAiChat()">
        <button type="button" class="cb-chat-send" onclick="window.sendAiChat()">
          <span class="material-symbols-outlined" style="font-size: 16px;">arrow_forward</span>
        </button>
      </div>
    `;
    document.body.appendChild(chatWidget);
  }

  // Global toggle function
  window.toggleCineBookAIWidget = function (forcedState) {
    const widget = document.getElementById('cb-floating-ai-widget');
    if (!widget) return;
    if (typeof forcedState === 'boolean') {
      if (forcedState) widget.classList.add('open');
      else widget.classList.remove('open');
    } else {
      widget.classList.toggle('open');
    }
    if (widget.classList.contains('open')) {
      const input = document.getElementById('cb-chat-input');
      if (input) input.focus();
    }
  };

  // AI Chat interaction simulation
  window.sendAiChat = function () {
    const input = document.getElementById('cb-chat-input');
    const msg = input ? input.value.trim() : '';
    if (!msg) return;
    input.value = '';
    window.sendAiQuickQuery(msg);
  };

  window.sendAiQuickQuery = function (text) {
    const messages = document.getElementById('cb-chat-messages');
    if (!messages) return;

    // User message
    const userMsg = document.createElement('div');
    userMsg.className = 'cb-msg user';
    userMsg.innerText = text;
    messages.appendChild(userMsg);

    // AI typing placeholder
    const aiMsg = document.createElement('div');
    aiMsg.className = 'cb-msg ai';
    aiMsg.innerHTML = 'Thinking via pgvector semantic search...';
    messages.appendChild(aiMsg);
    messages.scrollTop = messages.scrollHeight;

    setTimeout(() => {
      let replyHtml = '';
      if (text.includes('Sci-Fi') || text.includes('movie')) {
        replyHtml = `I found a top match: <strong>"The Architect's Dream"</strong> (IMAX 2D).<br><br>
        Rating: <strong>8.5/10</strong><br>
        Showtime: <strong>19:30 Tonight</strong><br><br>
        <div style="display: flex; gap: 8px; margin-top: 6px;">
          <a href="../4_cinebook_movie_detail/code.html" style="background: #000000; color: #ffffff; padding: 6px 12px; border-radius: 4px; font-size: 12px; text-decoration: none; font-weight: 600;">Movie Details</a>
          <a href="../6_cinebook_seat_selection/code.html" style="background: #f3f4f6; color: #000000; border: 1px solid #d1d5db; padding: 6px 12px; border-radius: 4px; font-size: 12px; text-decoration: none; font-weight: 600;">Select Seats</a>
        </div>`;
      } else {
        replyHtml = `Here are today's available showtimes:<br><br>
        • <strong>The Architect's Dream</strong> — 19:30 (Hall 1)<br>
        • <strong>Stellar Voyage</strong> — 20:15 (Hall 2)<br><br>
        <a href="../4_cinebook_movie_detail/code.html" style="background: #000000; color: #ffffff; padding: 6px 12px; border-radius: 4px; font-size: 12px; text-decoration: none; font-weight: 600; display: inline-block;">View Details</a>`;
      }
      aiMsg.innerHTML = replyHtml;
      messages.scrollTop = messages.scrollHeight;
    }, 400);
  };

  /* ==========================================================================
     3. INTERACTIVE WIREFRAME CLICK-THROUGH HOOKS
     ========================================================================== */
  function wireUpInteractiveLinks() {
    document.querySelectorAll('button, a').forEach(el => {
      const text = (el.innerText || '').trim().toLowerCase();
      
      if (text.includes('book ticket') || text.includes('book now') || text.includes('đặt vé')) {
        if (!el.getAttribute('href') || el.getAttribute('href') === '#') {
          el.onclick = (e) => {
            e.preventDefault();
            if (currentFolder.includes('movie_detail')) {
              window.location.href = '../6_cinebook_seat_selection/code.html';
            } else {
              window.location.href = '../4_cinebook_movie_detail/code.html';
            }
          };
        }
      }

      if (text.includes('proceed to payment') || text.includes('select snacks') || text.includes('continue') || text.includes('tiếp tục')) {
        el.onclick = (e) => {
          e.preventDefault();
          if (currentFolder.includes('seat_selection')) {
            window.location.href = '../7_cinebook_combo_snacks/code.html';
          } else if (currentFolder.includes('combo_snacks')) {
            window.location.href = '../8_cinebook_payment_checkout/code.html';
          }
        };
      }

      if (text.includes('pay now') || text.includes('checkout') || text.includes('confirm payment') || text.includes('thanh toán')) {
        el.onclick = (e) => {
          e.preventDefault();
          window.location.href = '../9_cinebook_booking_success/code.html';
        };
      }

      if (text.includes('view ticket') || text.includes('ticket details') || text.includes('chi tiết vé')) {
        el.onclick = (e) => {
          e.preventDefault();
          window.location.href = '../12_cinebook_ticket_details/code.html';
        };
      }
    });

    // Make movie cards clickable to go to Movie Detail
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
      injectFloatingAIWidget();
      wireUpInteractiveLinks();
    });
  } else {
    unifyTopNavBar();
    injectFloatingAIWidget();
    wireUpInteractiveLinks();
  }
})();
