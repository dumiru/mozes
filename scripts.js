// ============================================================
// SCRIPTS.JS — All JavaScript for Mozes Growth Agency
// Includes: navbar, footer, chat, newsletter, and site behavior
// ============================================================

(function() {
  'use strict';



  // ============================================================
  // 1. NAVBAR — Complete with HTML, CSS, and functionality
  // ============================================================
  function initNavbar() {
    const navbarStyles = `
      /* Navbar styles are now in styles.css */
      /* This is just a placeholder for clarity */
    `;

    const navbarHTML = `
      <div class="nav-inner">
        <a href="/index.html" class="logo-link">
          <img src="https://ik.imagekit.io/mozes/Logos/white1.png"
               alt="Mozes Growth Agency"
               onerror="this.onerror=null;this.src='data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%2286%22><text x=%220%22 y=%2255%22 font-family=%22Poppins,Arial%22 font-size=%2234%22 fill=%22%23ffffff%22>MOZES</text></svg>';">
        </a>

        <nav class="nav-links" id="navLinks">
          <a href="/index.html">Home</a>
          <a href="/index.html#services">Services</a>
          <a href="/mozes-summit-2026.html">Summit</a>
          <a href="/index.html#contact">Contact</a>
          <a href="/client-portal.html" class="nav-book-mobile">Client Portal</a>
        </nav>

        <div class="nav-right">
          <a href="/book-a-meeting.html" class="nav-book">Book a Meeting</a>
          <button class="burger" id="burgerBtn" aria-label="Open menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    `;

    const navbarRoot = document.getElementById('navbarRoot');
    if (navbarRoot) {
      navbarRoot.innerHTML = navbarHTML;
    }

    // Mobile nav toggle
    setTimeout(function() {
      const burger = document.getElementById('burgerBtn');
      const links = document.getElementById('navLinks');
      
      if (burger && links) {
        burger.addEventListener('click', function(e) {
          e.stopPropagation();
          links.classList.toggle('open');
        });

        links.querySelectorAll('a').forEach(function(a) {
          a.addEventListener('click', function() {
            links.classList.remove('open');
          });
        });

        document.addEventListener('click', function(e) {
          if (links.classList.contains('open') && 
              !links.contains(e.target) && 
              !burger.contains(e.target)) {
            links.classList.remove('open');
          }
        });
      }
    }, 100);
  }

  // ============================================================
  // 2. FOOTER
  // ============================================================
  function initFooter() {
    const footerHTML = `
      <div class="wrap">
        <div class="footer-top">
          <div class="footer-brand">
            <img src="https://ik.imagekit.io/mozes/Logos/red1.png" alt="Mozes Growth Agency"
                 onerror="this.onerror=null;this.src='data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22240%22 height=%2270%22><text x=%220%22 y=%2245%22 font-family=%22Poppins,Arial%22 font-size=%2228%22 fill=%22%23E70000%22>MOZES</text></svg>';">
            <p>Mozes Growth Agency is an integrated growth partner for startups and established brands.</p>
            <div class="social-row">
              <a href="https://facebook.com/" aria-label="Facebook"><svg viewBox="0 0 24 24" stroke-width="1.8"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3Z"></path></svg></a>
              <a href="https://instagram.com/" aria-label="Instagram"><svg viewBox="0 0 24 24" stroke-width="1.8"><rect x="2" y="2" width="20" height="20" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line></svg></a>
              <a href="https://linkedin.com/company/mozesone" aria-label="LinkedIn"><svg viewBox="0 0 24 24" stroke-width="1.8"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V8h4v1.5A6 6 0 0 1 16 8Z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
              <a href="https://x.com" aria-label="X (Twitter)"><svg viewBox="0 0 24 24" stroke-width="1.8"><line x1="4" y1="4" x2="20" y2="20"></line><line x1="20" y1="4" x2="4" y2="20"></line></svg></a>
            </div>
          </div>

          <div class="footer-col">
            <h6>Company</h6>
           <a href="/index.html">Home Page</a>
          <a href="/index.html#services">Our Services</a>
          <a href="/mozes-summit-2026.html">Mozes Summit</a>
          <a href="/index.html#contact">Contact Us</a>
          <a href="/client-portal.html" class="nav-book-mobile">Client Portal</a>
          </div>

          <div class="footer-col">
            <h6>Our Brands</h6>
            <a href="https://www.mozes.live">Mozes Growth Agency</a>
            <a href="#">Mozes Creative Studios</a>
            <a href="#">Mozes Channels Asia</a>
            <a href="#">Tutor Labs / GuruGo Lanka</a>
            <a href="#">GoZo Motion</a>
          </div>

          <div class="footer-col">
            <h6>Legal</h6>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>

        <div class="footer-bottom">
          <span>© 2026 Mozes Growth Agency. All rights reserved.</span>
          <span>Designed and Developed by Mozes Creatives</span>
        </div>
      </div>
    `;

    const footerRoot = document.getElementById('footerRoot');
    if (footerRoot) {
      footerRoot.innerHTML = footerHTML;
    }
  }

  // ============================================================
  // 3. CHAT WIDGET — Brevo Conversations
  // ============================================================
  function initChat() {
    (function(d, w, c) {
      w.BrevoConversationsID = '6a5b2a2340ff22f9b6076072';
      w[c] = w[c] || function() {
        (w[c].q = w[c].q || []).push(arguments);
      };
      var s = d.createElement('script');
      s.async = true;
      s.src = 'https://conversations-widget.brevo.com/brevo-conversations.js';
      if (d.head) d.head.appendChild(s);
    })(document, window, 'BrevoConversations');



















    
  }

  // ============================================================
  // 4. NEWSLETTER — Brevo Subscription Form
  // ============================================================
  function initNewsletter() {
    const newsletterHTML = `
     

   

    <!-- Begin Brevo Form -->


<!-- START - We recommend to place the below code in head tag of your website html  -->

<style>
  @font-face {
    font-display: block;
    font-family: Roboto;
    src: url(https://assets.brevo.com/font/Roboto/Latin/normal/normal/7529907e9eaf8ebb5220c5f9850e3811.woff2) format("woff2"), url(https://assets.brevo.com/font/Roboto/Latin/normal/normal/25c678feafdc175a70922a116c9be3e7.woff) format("woff")
  }

  @font-face {
    font-display: fallback;
    font-family: Roboto;
    font-weight: 600;
    src: url(https://assets.brevo.com/font/Roboto/Latin/medium/normal/6e9caeeafb1f3491be3e32744bc30440.woff2) format("woff2"), url(https://assets.brevo.com/font/Roboto/Latin/medium/normal/71501f0d8d5aa95960f6475d5487d4c2.woff) format("woff")
  }

  @font-face {
    font-display: fallback;
    font-family: Roboto;
    font-weight: 700;
    src: url(https://assets.brevo.com/font/Roboto/Latin/bold/normal/3ef7cf158f310cf752d5ad08cd0e7e60.woff2) format("woff2"), url(https://assets.brevo.com/font/Roboto/Latin/bold/normal/ece3a1d82f18b60bcce0211725c476aa.woff) format("woff")
  }

  :where(.sib-form-message-panel) {
    display: none;
  }

  :where(.sib-form-message-panel .sib-notification__icon) {
    width: 20px;
    height: 20px;
  }


  #sib-container input:-ms-input-placeholder {
    font-family: Helvetica, sans-serif;
    text-align: left;
    color: #c0ccda;
  }

  #sib-container input::placeholder {
    font-family: Helvetica, sans-serif;
    text-align: left;
    color: #c0ccda;
  }

  #sib-container textarea::placeholder {
    font-family: Helvetica, sans-serif;
    text-align: left;
    color: #c0ccda;
  }


  #sib-container a {
    text-decoration: underline;
    color: #2BB2FC;
  }
</style>
<link rel="stylesheet" href="https://sibforms.com/forms/end-form/build/sib-styles.css">


<!--  END - We recommend to place the above code in head tag of your website html -->






<!-- START - We recommend to place the below code where you want the form in your website html  -->
<div class="sib-form" style="text-align: center;
         background-color: transparent; 
        
        
        
        ">
  <div id="sib-form-container" class="sib-form-container">
    <div id="error-message" class="sib-form-message-panel" style="font-family:Helvetica, sans-serif; font-size:16px; text-align:left; color:#661d1d; background-color:#ffeded; border-color:#ff4949; border-radius:3px;
        max-width:540px;">
      <div class="sib-form-message-panel__text sib-form-message-panel__text--center">
        <svg viewBox="0 0 512 512" class="sib-icon sib-notification__icon">
          <path d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z" />
        </svg>
        <span class="sib-form-message-panel__inner-text">


                Your subscription could not be saved. Please try again.
              
            
          </span>
      </div>
    </div>
    <div></div>
    <div id="success-message" class="sib-form-message-panel" style="font-family:Helvetica, sans-serif; font-size:16px; text-align:left; color:#085229; background-color:#e7faf0; border-color:#13ce66; border-radius:3px;
        max-width:540px;">
      <div class="sib-form-message-panel__text sib-form-message-panel__text--center">
        <svg viewBox="0 0 512 512" class="sib-icon sib-notification__icon">
          <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z" />
        </svg>
        <span class="sib-form-message-panel__inner-text">


                Your subscription has been successful.
             
            
          </span>
      </div>
    </div>
    <div></div>
    <div id="sib-container" class="sib-container--large sib-container--vertical" style="max-width:540px; text-align:center; background-color:rgba(255,255,255,1); border-width:1px; border-style:solid; border-color:#e70000; border-radius:15px; direction:ltr">
      <form id="sib-form" method="POST" action="https://5739e9fa.sibforms.com/serve/MUIFAC-mD3ue3vyLUll5H69rXfpnMQT-5IThwHRMkhbKmJZ1x0pUA6hqBnXsyGp72UpcnrNm3QEbvxC4w51WtmVeXWNQ5ks6WYM_AO1pV5790yPoTaF4NHVWImlS-niHu5TrOkEap9iXi9BiE4YejlocqG8nFu_0eoeOiT-HvVNf52zzC8a-MHKojXaxy0jkp8HD4GzRklwDLxml-g==" data-type="subscription">


        <div style="padding: 8px 0;">


          <div class="sib-form-block" style="font-family:Helvetica, sans-serif; font-size:25px; text-align:left; color:#e70000; background-color:transparent; text-align:left">
            <p>Subscribe</p>
          </div>



        </div>



        <div style="padding: 8px 0;">


          <div class="sib-form-block" style="font-family:Helvetica, sans-serif; font-size:16px; text-align:left; color:#3C4858; background-color:transparent; text-align:left">
            <div class="sib-text-form-block">
              <p>Join our weekly newsletter to read this article and receive our top stories, exclusive insights, and practical tips directly in your inbox.</p>
            </div>
          </div>



        </div>



        <div style="padding: 8px 0;">



          <div class="sib-input sib-form-block">
            <div class="form__entry entry_block">
              <div class="form__label-row ">


                <label class="entry__label" style="font-weight: 700; text-align: left; font-family:Helvetica, sans-serif; font-size:16px; font-weight:700; text-align:left; color:#3c4858;" for="EMAIL" data-required="*">Enter your email address to subscribe</label>




                <div class="entry__field">

                  <input class="input " type="text" id="EMAIL" name="EMAIL" autocomplete="off" value="" placeholder="EMAIL" data-required="true" required />

                </div>

              </div>

              <label class="entry__error entry__error--primary" style="font-family:Helvetica, sans-serif; font-size:16px; text-align:left; color:#661d1d; background-color:#ffeded; border-color:#ff4949; border-radius:3px;">
              </label>



              <label class="entry__specification" style="font-family:Helvetica, sans-serif; font-size:12px; text-align:left; color:#8390A4; text-align: left ">
                Provide your email address to subscribe. For e.g abc@xyz.com
              </label>

            </div>
          </div>




        </div>



        <div style="padding: 8px 0;">


          <div class="sib-form-block sib-divider-form-block">
            <div style="border: 0; border-bottom: 1px solid #E5EDF6"></div>
          </div>



        </div>



        <div style="padding: 8px 0;">


          <div class="sib-form-block" style="text-align: left">
            <button class="sib-form-block__button sib-form-block__button-with-loader" style="font-family:Helvetica, sans-serif; font-size:16px; font-weight:700; text-align:left; color:#FFFFFF; background-color:#e70000; border-width:0px; border-radius:20px;" form="sib-form" type="submit">
              <svg class="icon clickable__icon progress-indicator__icon sib-hide-loader-icon" viewBox="0 0 512 512">
                <path d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z" />
              </svg>
              SUBSCRIBE
            </button>


          </div>



        </div>



        <input type="text" name="email_address_check" value="" class="input--hidden">


        <input type="hidden" name="locale" value="en">


      </form>
    </div>
  </div>
</div>
<!-- END - We recommend to place the above code where you want the form in your website html  -->

<!-- START - We recommend to place the below code in footer or bottom of your website html  -->
<script>
  window.REQUIRED_CODE_ERROR_MESSAGE = 'Please choose a country code';
  window.LOCALE = 'en';




  window.EMAIL_INVALID_MESSAGE = window.SMS_INVALID_MESSAGE = "The information provided is invalid. Please review the field format and try again.";





  window.REQUIRED_ERROR_MESSAGE = "This field cannot be left blank. ";

  window.GENERIC_INVALID_MESSAGE = "The information provided is invalid. Please review the field format and try again.";


  window.INVALID_NUMBER = "The information provided is invalid. Please review the field format and try again.";




  window.INVALID_DATE = "Please enter a valid date";



  window.REQUIRED_MULTISELECT_MESSAGE = 'Please select at least 1 option';


  window.translation = {
    common: {
      selectedList: '{quantity} list selected',
      selectedLists: '{quantity} lists selected',
      selectedOption: '{quantity} selected',
      selectedOptions: '{quantity} selected',
    }
  };

  var AUTOHIDE = Boolean(0);
</script>



<script defer src="https://sibforms.com/forms/end-form/build/main.js"></script>




<!-- END - We recommend to place the above code in footer or bottom of your website html  -->

<!-- End Brevo Form -->



















    `;

    const newsletterRoot = document.getElementById('newsletterRoot');
    if (newsletterRoot) {
      newsletterRoot.innerHTML = newsletterHTML;
    }
  }

  // ============================================================
  // 5. SITE BEHAVIOR — Slider, Marquee, etc.
  // ============================================================
  function initSiteBehavior() {
    // Hero Slider
    function createSlider(containerId, interval, dotsId) {
      var container = document.getElementById(containerId);
      if (!container) return;
      var slides = container.querySelectorAll('.hero-slide, .about-slide');
      var index = 0;
      var dotsEl = dotsId ? document.getElementById(dotsId) : null;

      if (dotsEl) {
        slides.forEach(function(_, i) {
          var b = document.createElement('button');
          if (i === 0) b.classList.add('active');
          b.addEventListener('click', function() { show(i); });
          dotsEl.appendChild(b);
        });
      }

      function show(i) {
        slides[index].classList.remove('active');
        if (dotsEl) dotsEl.children[index].classList.remove('active');
        index = i;
        slides[index].classList.add('active');
        if (dotsEl) dotsEl.children[index].classList.add('active');
        var img = slides[index].querySelector('img');
        if (img) { img.style.animation = 'none'; void img.offsetWidth; img.style.animation = ''; }
      }

      setInterval(function() {
        show((index + 1) % slides.length);
      }, interval);
    }

    createSlider('heroSlider', 5000, 'heroDots');

    // Marquee duplication
    var track = document.getElementById('marqueeTrack');
    if (track) track.innerHTML += track.innerHTML;
  }

  // ============================================================
  // INITIALIZE ALL COMPONENTS
  // ============================================================
  document.addEventListener('DOMContentLoaded', function() {
    initNavbar();
    initFooter();
    initChat();
    initNewsletter();
    initSiteBehavior();
  });

})();


























// ============================================================
// SERVICE PAGE SPECIFIC FUNCTIONALITY
// Add to your existing scripts.js
// ============================================================

(function() {
  'use strict';

  // ---------- QUICK NAV SMOOTH SCROLL (Optimized) ----------
  document.querySelectorAll('.quicknav a').forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          const navHeight = document.querySelector('.navbar')?.offsetHeight || 70;
          const quickNavHeight = document.querySelector('.quicknav')?.offsetHeight || 0;
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight - quickNavHeight;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // ---------- FAQ ACCORDION (Toggle plus icon) ----------
  document.querySelectorAll('.faq-item').forEach(item => {
    const summary = item.querySelector('summary');
    if (summary) {
      summary.addEventListener('click', function() {
        // Toggle the open state
        const isOpen = item.hasAttribute('open');
        if (isOpen) {
          item.removeAttribute('open');
        } else {
          item.setAttribute('open', '');
        }
      });
    }
  });

  // ---------- ACTIVE QUICK NAV LINK ON SCROLL ----------
  let activeQuickNav = null;
  const quickNavLinks = document.querySelectorAll('.quicknav a');
  
  function updateQuickNav() {
    const scrollPosition = window.pageYOffset + 120;
    let currentSection = null;
    
    document.querySelectorAll('section[id]').forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        currentSection = section.id;
      }
    });
    
    quickNavLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === '#' + currentSection) {
        link.style.color = 'var(--red)';
        link.style.borderBottomColor = 'var(--red)';
      } else {
        link.style.color = 'var(--ink-soft)';
        link.style.borderBottomColor = 'transparent';
      }
    });
  }

  // Use requestAnimationFrame for better performance
  let ticking = false;
  window.addEventListener('scroll', function() {
    if (!ticking) {
      window.requestAnimationFrame(function() {
        updateQuickNav();
        ticking = false;
      });
      ticking = true;
    }
  });

  // Initial update
  setTimeout(updateQuickNav, 100);

})();





// ============================================================
// SMOOTH SCROLL FOR NAVBAR LINKS
// Add this to your scripts.js
// ============================================================

(function() {
  'use strict';

  // ---------- SMOOTH SCROLL FOR ALL ANCHOR LINKS ----------
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      
      // Skip if it's just "#" or empty
      if (targetId === '#' || targetId === '') return;
      
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        e.preventDefault();
        
        // Get navbar height for offset
        const navbar = document.querySelector('.navbar');
        const navHeight = navbar ? navbar.offsetHeight : 70;
        
        // Get target position
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
        
        // Smooth scroll to target
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

})();









// ============================================================
// CLIENT PORTAL — Login Functionality
// Add these to your existing scripts.js
// ============================================================

(function() {
  'use strict';

  // ---------- CLIENT PORTAL LOGIN ----------
  const loginForm = document.getElementById('loginForm');
  const loginEmail = document.getElementById('loginEmail');
  const loginPassword = document.getElementById('loginPassword');
  const loginBtn = document.getElementById('loginBtn');
  const loginBtnText = document.getElementById('loginBtnText');
  const loginError = document.getElementById('loginError');
  const errorMessage = document.getElementById('errorMessage');
  const togglePassword = document.getElementById('togglePassword');
  const rememberMe = document.getElementById('rememberMe');

  // Demo credentials (for testing)
  const DEMO_EMAIL = 'client@mozes.live';
  const DEMO_PASSWORD = 'mozes2026';

  // ---------- TOGGLE PASSWORD VISIBILITY ----------
  if (togglePassword) {
    togglePassword.addEventListener('click', function() {
      const type = loginPassword.getAttribute('type') === 'password' ? 'text' : 'password';
      loginPassword.setAttribute('type', type);
      // Toggle eye icon
      const svg = this.querySelector('svg');
      if (type === 'text') {
        svg.innerHTML = '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/>';
      } else {
        svg.innerHTML = '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>';
      }
    });
  }

  // ---------- AUTO-FILL DEMO CREDENTIALS (for testing) ----------
  // Remove this in production
  if (loginEmail && loginPassword) {
    // Optional: Auto-fill demo credentials for testing
    // Uncomment below to enable auto-fill
    // loginEmail.value = DEMO_EMAIL;
    // loginPassword.value = DEMO_PASSWORD;
  }

  // ---------- REMEMBER ME ----------
  if (rememberMe) {
    // Check if remembered email exists
    const savedEmail = localStorage.getItem('mozes_client_email');
    if (savedEmail) {
      loginEmail.value = savedEmail;
      rememberMe.checked = true;
    }

    rememberMe.addEventListener('change', function() {
      if (this.checked) {
        localStorage.setItem('mozes_client_email', loginEmail.value);
      } else {
        localStorage.removeItem('mozes_client_email');
      }
    });
  }

  // ---------- LOGIN FORM SUBMIT ----------
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const email = loginEmail.value.trim();
      const password = loginPassword.value.trim();

      // Clear previous error
      loginError.classList.remove('show');
      loginError.style.display = 'none';

      // Validate fields
      if (!email || !password) {
        showError('Please enter both email and password.');
        return;
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showError('Please enter a valid email address.');
        return;
      }

      // Show loading state
      loginBtn.classList.add('loading');
      loginBtn.disabled = true;

      // Simulate API call with delay
      setTimeout(function() {
        // Check credentials (Demo only - replace with real auth)
        if (email === DEMO_EMAIL && password === DEMO_PASSWORD) {
          // Success - redirect or show success
          loginBtn.classList.remove('loading');
          loginBtn.disabled = false;
          
          // Save session (demo)
          sessionStorage.setItem('mozes_client_logged_in', 'true');
          
          // Show success and redirect
          loginBtnText.textContent = 'Redirecting...';
          loginBtn.style.background = '#22c55e';
          loginBtn.style.borderColor = '#22c55e';
          
          setTimeout(function() {
            // Redirect to dashboard (demo)
            alert('Login successful! Redirecting to dashboard...');
            // window.location.href = '/dashboard.html'; // Uncomment in production
            loginBtnText.textContent = 'Sign In';
            loginBtn.style.background = '';
            loginBtn.style.borderColor = '';
          }, 1000);
          
        } else {
          // Failed login
          loginBtn.classList.remove('loading');
          loginBtn.disabled = false;
          
          // Check if email exists but password wrong
          if (email === DEMO_EMAIL) {
            showError('Incorrect password. Please try again.');
          } else {
            showError('No account found with this email. Please contact support.');
          }
        }
      }, 1200);
    });
  }

  // ---------- SHOW ERROR FUNCTION ----------
  function showError(message) {
    errorMessage.textContent = message;
    loginError.style.display = 'flex';
    // Trigger reflow for animation
    loginError.classList.remove('show');
    void loginError.offsetWidth;
    loginError.classList.add('show');
  }

  // ---------- REAL-TIME VALIDATION ----------
  if (loginEmail) {
    loginEmail.addEventListener('blur', function() {
      const email = this.value.trim();
      if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        this.style.borderColor = '#dc2626';
        this.style.boxShadow = '0 0 0 3px rgba(220,38,38,.1)';
      } else {
        this.style.borderColor = '';
        this.style.boxShadow = '';
      }
    });
    loginEmail.addEventListener('input', function() {
      this.style.borderColor = '';
      this.style.boxShadow = '';
      loginError.classList.remove('show');
      loginError.style.display = 'none';
    });
  }

  if (loginPassword) {
    loginPassword.addEventListener('input', function() {
      loginError.classList.remove('show');
      loginError.style.display = 'none';
    });
  }

  // ---------- ENTER KEY SUPPORT ----------
  if (loginPassword) {
    loginPassword.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        loginForm.dispatchEvent(new Event('submit'));
      }
    });
  }

  if (loginEmail) {
    loginEmail.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        loginPassword.focus();
      }
    });
  }

})();


















// ============================================================
// FAQ ACCORDION — Plus/Minus Toggle
// Add this to your scripts.js
// ============================================================

(function() {
  'use strict';

  // ---------- FAQ ACCORDION TOGGLE ----------
  document.querySelectorAll('.faq-item').forEach(function(item) {
    const summary = item.querySelector('summary');
    if (summary) {
      summary.addEventListener('click', function(e) {
        // Prevent default toggling behavior (we handle it manually)
        e.preventDefault();
        
        // Toggle the open attribute
        const isOpen = item.hasAttribute('open');
        if (isOpen) {
          item.removeAttribute('open');
        } else {
          // Close all other FAQ items
          document.querySelectorAll('.faq-item').forEach(function(otherItem) {
            otherItem.removeAttribute('open');
          });
          item.setAttribute('open', '');
        }
      });
    }
  });

})();


















// ============================================================
// FAQ ACCORDION — Toggle Functionality
// ============================================================

(function() {
  'use strict';

  // ---------- FAQ TOGGLE ----------
  document.querySelectorAll('.faq-item').forEach(function(item) {
    const summary = item.querySelector('summary');
    
    if (summary) {
      summary.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default toggling
        
        // Toggle the open attribute
        const isOpen = item.hasAttribute('open');
        
        if (isOpen) {
          item.removeAttribute('open');
        } else {
          // Optional: Close other open items (accordion behavior)
          document.querySelectorAll('.faq-item').forEach(function(otherItem) {
            if (otherItem !== item && otherItem.hasAttribute('open')) {
              otherItem.removeAttribute('open');
            }
          });
          item.setAttribute('open', '');
        }
      });
    }
  });

})();








createSlider('serviceHeroSlider', 5000, 'serviceHeroDots');