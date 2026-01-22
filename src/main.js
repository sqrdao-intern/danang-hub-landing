import './style.css'
import { inject } from '@vercel/analytics'

inject()

document.querySelector('#app').innerHTML = `
  <header class="header glass">
    <div class="container header-container">
      <div class="logo">
        <img src="/assets/logo.svg" alt="Da Nang Blockchain Hub" height="64">
      </div>
      <button class="mobile-menu-btn" aria-label="Toggle Menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav class="nav">
        <ul class="nav-list">
          <li><a href="#about">About</a></li>
          <li><a href="#leadership">Leadership</a></li>
          <li><a href="#events">Activities</a></li>
          <li><a href="#location">Location</a></li>
          <li><a href="#calendar">Calendar</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <a href="#contact" class="btn btn-primary join-us-btn">Join Us</a>
    </div>
  </header>

  <main>
    <section class="hero section">
      <div class="container hero-container">
        <h1 class="hero-title">
          The <span class="gradient-text">Builders-First</span> Venue <br>
          in Central Vietnam
        </h1>
        <p class="hero-motto">
          Builders-first. Chain-agnostic. Community-centric.
        </p>
        <p class="hero-subtitle">
          Da Nang Blockchain Hub welcomes all credible Web3 and blockchain ecosystems. 
          We focus on onboarding and accelerating founders, developers, and real-world applications in APAC.
        </p>
        <div class="hero-actions">
          <a href="#contact" class="btn btn-primary">Connect With Us</a>
          <a href="#about" class="btn btn-secondary">Explore Ecosystem</a>
        </div>
      </div>
    </section>

    <section id="about" class="section about-section">
      <div class="container">
        <h2 class="section-title text-center">Empowering the Ecosystem</h2>
        <p class="section-subtitle text-center">We provide the resources, network, and space for the next generation of Web3 builders.</p>
        
        <div class="grid about-grid">
          <div class="card glass">
            <h3 class="card-title">Open & Chain-Agnostic</h3>
            <p>Education on core blockchain concepts, security culture, smart contracts, account abstraction, and public goods.</p>
          </div>
          <div class="card glass">
            <h3 class="card-title">Ecosystem-Friendly</h3>
            <p>Support for multiple L1s and L2s, tooling, grants, and ecosystem partners—no exclusivity.</p>
          </div>
          <div class="card glass">
            <h3 class="card-title">Event & Meetup Space</h3>
            <p>Open co-working and event venue for the broader tech and startup community, fostering collaboration between Web3 and traditional builders.</p>
          </div>
          <div class="card glass">
            <h3 class="card-title">Legal & Regulatory Support</h3>
            <p>Connections to local legal advisors, regulatory guidance for blockchain and fintech startups, sandbox program navigation, and compliance frameworks.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="leadership" class="section leadership-section">
      <div class="container">
        <h2 class="section-title text-center">Our Leadership</h2>
        <p class="section-subtitle text-center">Backed by industry pioneers and ecosystem builders.</p>
        
        <div class="partners-grid-detailed">
           <!-- sqrDAO -->
           <div class="glass partner-card-premium">
             <div class="partner-logo-large-container">
               <img src="/assets/sqrdao.png" alt="sqrDAO" class="partner-logo-large" style="max-height: 45px;">
             </div>
             <div class="partner-role-text">Managing Partner</div>
             <h3 class="partner-name-premium">sqrDAO</h3>
             <p class="partner-desc-premium">
               A decentralized autonomous organization building Web3 infrastructure and community in SEA. 
               Handles operations, program execution, and transparent reporting for the Hub.
             </p>
             <div class="partner-links-premium">
               <a href="https://sqrdao.com" target="_blank" aria-label="Website">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
               </a>
               <a href="https://x.com/sqrdao" target="_blank" aria-label="Twitter">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
               </a>
               <a href="https://www.linkedin.com/company/sqrdao" target="_blank" aria-label="LinkedIn">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9H12.76v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
               </a>
               <a href="https://www.facebook.com/sqrDAO" target="_blank" aria-label="Facebook">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
               </a>
               <a href="https://www.youtube.com/@sqrdao" target="_blank" aria-label="Youtube">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
               </a>
             </div>
           </div>

           <!-- NAPA Global -->
           <div class="glass partner-card-premium">
             <div class="partner-logo-large-container">
               <img src="/assets/napa.svg" alt="NAPA Global" class="partner-logo-large">
             </div>
             <div class="partner-role-text">Founding Partner</div>
             <h3 class="partner-name-premium">NAPA Global</h3>
             <p class="partner-desc-premium">
               Providing infrastructure support and regional expertise. 
               Offers access to enterprise networks and facilitates connections across central Vietnam's tech ecosystem.
             </p>
             <div class="partner-links-premium">
               <a href="https://napaglobal.com/" target="_blank" aria-label="Website">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
               </a>
               <a href="https://www.linkedin.com/company/napaglobal/" target="_blank" aria-label="LinkedIn">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9H12.76v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
               </a>
               <a href="https://www.facebook.com/Napaglobal" target="_blank" aria-label="Facebook">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
               </a>
             </div>
           </div>

           <!-- Superteam Vietnam -->
           <div class="glass partner-card-premium">
             <div class="partner-logo-large-container">
                 <!-- Using png as requested in previous turn -->
               <img src="/assets/superteamvn.png" alt="Superteam Vietnam" class="partner-logo-large">
             </div>
             <div class="partner-role-text">Founding Partner</div>
             <h3 class="partner-name-premium">Superteam Vietnam</h3>
             <p class="partner-desc-premium">
               Extensive network of Web3 builders and developers on Solana. 
               Contributing to program design, talent sourcing, and ecosystem connections in APAC.
             </p>
             <div class="partner-links-premium">
               <a href="https://vn.superteam.fun/" target="_blank" aria-label="Website">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
               </a>
               <a href="https://x.com/SuperteamVN" target="_blank" aria-label="Twitter">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
               </a>
               <a href="https://www.linkedin.com/company/solana-superteam-vietnam/" target="_blank" aria-label="LinkedIn">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9H12.76v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
               </a>
               <a href="https://www.facebook.com/solanasuperteamvietnam" target="_blank" aria-label="Facebook">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
               </a>
             </div>
           </div>

           <!-- DISSC -->
           <div class="glass partner-card-premium">
             <div class="partner-logo-large-container">
               <img src="/assets/dissc.png" alt="DISSC" class="partner-logo-large" style="max-height: 60px;">
             </div>
             <div class="partner-role-text">Strategic Partner</div>
             <h3 class="partner-name-premium">DISSC</h3>
             <p class="partner-desc-premium">
               Da Nang Innovation Startup Support Center. 
               The core connector for the city's startup ecosystem, providing government support, incubation, and international partnerships.
             </p>
             <div class="partner-links-premium">
               <a href="https://startupdanang.vn/" target="_blank" aria-label="Website">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
               </a>
               <a href="https://vn.linkedin.com/in/dissc" target="_blank" aria-label="LinkedIn">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9H12.76v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
               </a>
               <a href="https://www.facebook.com/TrungtamDISSC/" target="_blank" aria-label="Facebook">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
               </a>
             </div>
           </div>
        </div>
      </div>
    </section>

    <section id="events" class="section events-section">
      <div class="container">
        <h2 class="section-title text-center">Gallery</h2>
        <p class="section-subtitle text-center">From intimate workshops to major hackathons, view our latest community moments.</p>
        
        <div class="gallery-grid">
          <div class="gallery-item glass" data-index="0" data-src="/gallery/DSC07805.jpg" data-alt="Community Gatherings">
            <img src="/gallery/DSC07805.jpg" alt="Community Gatherings" loading="lazy">
            <div class="gallery-overlay">
              <span>Community Gatherings</span>
            </div>
          </div>
          <div class="gallery-item glass" data-index="1" data-src="/gallery/TVN02260.jpg" data-alt="Hub Event">
            <img src="/gallery/TVN02260.jpg" alt="Hub Event" loading="lazy">
            <div class="gallery-overlay">
              <span>Hub Event</span>
            </div>
          </div>
          <div class="gallery-item glass" data-index="2" data-src="/gallery/TVN02295.jpg" data-alt="Community Event">
            <img src="/gallery/TVN02295.jpg" alt="Community Event" loading="lazy">
            <div class="gallery-overlay">
              <span>Community Event</span>
            </div>
          </div>
          <div class="gallery-item glass" data-index="3" data-src="/gallery/TVN02305.jpg" data-alt="Workshop Session">
            <img src="/gallery/TVN02305.jpg" alt="Workshop Session" loading="lazy">
            <div class="gallery-overlay">
              <span>Workshop Session</span>
            </div>
          </div>
          <div class="gallery-item glass" data-index="4" data-src="/gallery/TVN02310.jpg" data-alt="Hub Activity">
            <img src="/gallery/TVN02310.jpg" alt="Hub Activity" loading="lazy">
            <div class="gallery-overlay">
              <span>Hub Activity</span>
            </div>
          </div>
          <div class="gallery-item glass" data-index="5" data-src="/gallery/TVN02532.jpg" data-alt="Technical Workshops">
            <img src="/gallery/TVN02532.jpg" alt="Technical Workshops" loading="lazy">
            <div class="gallery-overlay">
              <span>Technical Workshops</span>
            </div>
          </div>
          <div class="gallery-item glass" data-index="6" data-src="/gallery/TVN02568.jpg" data-alt="Networking Nights">
            <img src="/gallery/TVN02568.jpg" alt="Networking Nights" loading="lazy">
            <div class="gallery-overlay">
              <span>Networking Nights</span>
            </div>
          </div>
          <div class="gallery-item glass" data-index="7" data-src="/gallery/TVN02708.jpg" data-alt="Demo Days">
            <img src="/gallery/TVN02708.jpg" alt="Demo Days" loading="lazy">
            <div class="gallery-overlay">
              <span>Demo Days</span>
            </div>
          </div>
          <div class="gallery-item glass" data-index="8" data-src="/gallery/KOT09294.jpg" data-alt="Hub Space">
            <img src="/gallery/KOT09294.jpg" alt="Hub Space" loading="lazy">
            <div class="gallery-overlay">
              <span>Hub Space</span>
            </div>
          </div>
          <div class="gallery-item glass" data-index="9" data-src="/gallery/1741076518017.jpeg" data-alt="Builders in Action">
            <img src="/gallery/1741076518017.jpeg" alt="Builders in Action" loading="lazy">
            <div class="gallery-overlay">
              <span>Builders in Action</span>
            </div>
          </div>
          <div class="gallery-item glass" data-index="10" data-src="/gallery/494262413_1271617061633605_5026052851423093241_n.jpg" data-alt="Innovation Hub">
            <img src="/gallery/494262413_1271617061633605_5026052851423093241_n.jpg" alt="Innovation Hub" loading="lazy">
            <div class="gallery-overlay">
              <span>Innovation Hub</span>
            </div>
          </div>
          <div class="gallery-item glass" data-index="11" data-src="/gallery/photo_2026-01-20%2011.13.58.jpeg" data-alt="Hub Moments">
            <img src="/gallery/photo_2026-01-20%2011.13.58.jpeg" alt="Hub Moments" loading="lazy">
            <div class="gallery-overlay">
              <span>Hub Moments</span>
            </div>
          </div>
          <div class="gallery-item glass" data-index="12" data-src="/gallery/photo_2026-01-20%2011.14.06.jpeg" data-alt="Community Gathering">
            <img src="/gallery/photo_2026-01-20%2011.14.06.jpeg" alt="Community Gathering" loading="lazy">
            <div class="gallery-overlay">
              <span>Community Gathering</span>
            </div>
          </div>
          <div class="gallery-item glass" data-index="13" data-src="/gallery/photo_2026-01-20%2011.14.13.jpeg" data-alt="Hub Activity">
            <img src="/gallery/photo_2026-01-20%2011.14.13.jpeg" alt="Hub Activity" loading="lazy">
            <div class="gallery-overlay">
              <span>Hub Activity</span>
            </div>
          </div>
          <div class="gallery-item glass" data-index="14" data-src="/gallery/photo_2026-01-20%2011.21.20.jpeg" data-alt="Workshop">
            <img src="/gallery/photo_2026-01-20%2011.21.20.jpeg" alt="Workshop" loading="lazy">
            <div class="gallery-overlay">
              <span>Workshop</span>
            </div>
          </div>
          <div class="gallery-item glass" data-index="15" data-src="/gallery/photo_2026-01-20%2011.21.24.jpeg" data-alt="Learning Session">
            <img src="/gallery/photo_2026-01-20%2011.21.24.jpeg" alt="Learning Session" loading="lazy">
            <div class="gallery-overlay">
              <span>Learning Session</span>
            </div>
          </div>
          <div class="gallery-item glass" data-index="16" data-src="/gallery/photo_2026-01-20%2011.21.30.jpeg" data-alt="Event Photo">
            <img src="/gallery/photo_2026-01-20%2011.21.30.jpeg" alt="Event Photo" loading="lazy">
            <div class="gallery-overlay">
              <span>Event Photo</span>
            </div>
          </div>
          <div class="gallery-item glass" data-index="17" data-src="/gallery/photo_2026-01-20%2011.21.33.jpeg" data-alt="Hub Event">
            <img src="/gallery/photo_2026-01-20%2011.21.33.jpeg" alt="Hub Event" loading="lazy">
            <div class="gallery-overlay">
              <span>Hub Event</span>
            </div>
          </div>
          <div class="gallery-item glass" data-index="18" data-src="/gallery/photo_2026-01-20%2011.21.35.jpeg" data-alt="Community Photo">
            <img src="/gallery/photo_2026-01-20%2011.21.35.jpeg" alt="Community Photo" loading="lazy">
            <div class="gallery-overlay">
              <span>Community Photo</span>
            </div>
          </div>
          <div class="gallery-item glass" data-index="19" data-src="/gallery/photo_2026-01-20%2011.21.38.jpeg" data-alt="Hub Gathering">
            <img src="/gallery/photo_2026-01-20%2011.21.38.jpeg" alt="Hub Gathering" loading="lazy">
            <div class="gallery-overlay">
              <span>Hub Gathering</span>
            </div>
          </div>
          <div class="gallery-item glass" data-index="20" data-src="/gallery/photo_2026-01-20%2011.21.44.jpeg" data-alt="Workshop Moment">
            <img src="/gallery/photo_2026-01-20%2011.21.44.jpeg" alt="Workshop Moment" loading="lazy">
            <div class="gallery-overlay">
              <span>Workshop Moment</span>
            </div>
          </div>
          <div class="gallery-item glass" data-index="21" data-src="/gallery/photo_2026-01-20%2011.21.48.jpeg" data-alt="Event Moment">
            <img src="/gallery/photo_2026-01-20%2011.21.48.jpeg" alt="Event Moment" loading="lazy">
            <div class="gallery-overlay">
              <span>Event Moment</span>
            </div>
          </div>
          <div class="gallery-item glass" data-index="22" data-src="/gallery/photo_2026-01-20%2011.22.03.jpeg" data-alt="Hub Session">
            <img src="/gallery/photo_2026-01-20%2011.22.03.jpeg" alt="Hub Session" loading="lazy">
            <div class="gallery-overlay">
              <span>Hub Session</span>
            </div>
          </div>
          <div class="gallery-item glass" data-index="23" data-src="/gallery/photo_2026-01-20%2011.22.05.jpeg" data-alt="Community Moment">
            <img src="/gallery/photo_2026-01-20%2011.22.05.jpeg" alt="Community Moment" loading="lazy">
            <div class="gallery-overlay">
              <span>Community Moment</span>
            </div>
          </div>
          <div class="gallery-item glass" data-index="24" data-src="/gallery/photo_2026-01-20%2011.22.08.jpeg" data-alt="Hub Event">
            <img src="/gallery/photo_2026-01-20%2011.22.08.jpeg" alt="Hub Event" loading="lazy">
            <div class="gallery-overlay">
              <span>Hub Event</span>
            </div>
          </div>
          <div class="gallery-item glass" data-index="25" data-src="/gallery/photo_2026-01-20%2011.22.11.jpeg" data-alt="Workshop Photo">
            <img src="/gallery/photo_2026-01-20%2011.22.11.jpeg" alt="Workshop Photo" loading="lazy">
            <div class="gallery-overlay">
              <span>Workshop Photo</span>
            </div>
          </div>
          <div class="gallery-item glass" data-index="26" data-src="/gallery/photo_2026-01-20%2011.22.14.jpeg" data-alt="Hub Activity">
            <img src="/gallery/photo_2026-01-20%2011.22.14.jpeg" alt="Hub Activity" loading="lazy">
            <div class="gallery-overlay">
              <span>Hub Activity</span>
            </div>
          </div>
        </div>
        
        <!-- Pagination Controls -->
        <div class="gallery-pagination">
          <button class="pagination-btn pagination-prev" aria-label="Previous page" disabled>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
            Previous
          </button>
          <div class="pagination-info">
            <span class="pagination-current">1</span>
            <span class="pagination-separator">/</span>
            <span class="pagination-total">1</span>
          </div>
          <button class="pagination-btn pagination-next" aria-label="Next page">
            Next
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>
      
      <!-- Lightbox Modal -->
      <div class="lightbox" id="lightbox" aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="lightbox-title">
        <div class="lightbox-overlay"></div>
        <button class="lightbox-close" aria-label="Close lightbox">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <button class="lightbox-nav lightbox-prev" aria-label="Previous image">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <button class="lightbox-nav lightbox-next" aria-label="Next image">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
        <div class="lightbox-content">
          <img class="lightbox-image" src="" alt="" id="lightbox-image">
          <div class="lightbox-info">
            <p class="lightbox-caption" id="lightbox-caption"></p>
            <p class="lightbox-counter" id="lightbox-counter"></p>
          </div>
        </div>
      </div>
    </section>

    <section id="location" class="section location-section">
      <div class="container">
        <h2 class="section-title text-center">Visit The Hub</h2>
        <p class="section-subtitle text-center">Located in the heart of Da Nang's innovation district.</p>
                <div class="location-content">
          <div class="location-info">
             <div class="card glass">
               <div class="info-item">
                 <div class="info-icon">📍</div>
                 <div>
                   <h4>Address</h4>
                   <p>Level 10, NAPA Riverside Building<br>381 Đ. Trần Hưng Đạo, An Hải Trung, Sơn Trà, Đà Nẵng 550000</p>
                   <a href="https://maps.app.goo.gl/AA1gp69SCtFEWZQH9" target="_blank" style="font-size: 0.85rem; color: var(--accent-secondary); margin-top: 0.5rem; display: inline-block;">View on Google Maps ↗</a>
                 </div>
               </div>
             </div>
             
             <div class="card glass">
               <div class="info-item">
                 <div class="info-icon">⏰</div>
                 <div>
                   <h4>Hours</h4>
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                 </div>
               </div>
             </div>
          </div>
          
          <div class="map-container glass">
            <iframe src="https://maps.google.com/maps?q=381+Tr%E1%BA%A7n+H%C6%B0ng+%C4%90%E1%BA%A1o,+S%C6%A1n+Tr%C3%A0,+%C4%90%C3%A0+N%E1%BA%B5ng&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style="border:0; filter: invert(90%) hue-rotate(180deg);" 
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>
    </section>

    <section id="calendar" class="section calendar-section">
      <div class="container">
        <h2 class="section-title text-center">Calendar</h2>
        <p class="section-subtitle text-center">Stay up to date with our upcoming events and activities.</p>
        
        <div class="calendar-container" style="display: flex; justify-content: center; margin-top: var(--spacing-xl);">
          <iframe
            src="https://luma.com/embed/calendar/cal-iI3qdGqnHleunFJ/events"
            width="600"
            height="450"
            frameborder="0"
            style="border: 1px solid #bfcbda88; border-radius: 4px;"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
      </div>
    </section>

    <section id="contact" class="section contact-section">
      <div class="container">
        <h2 class="section-title text-center">Get in Touch</h2>
        <p class="section-subtitle text-center">Join our community channels to stay updated and connect with other builders.</p>
        
        <div class="text-center" style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
          <a href="https://www.facebook.com/profile.php?id=61576570201707" target="_blank" class="btn btn-secondary" style="display: flex; align-items: center; gap: 0.5rem;">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            Facebook
          </a>
          <a href="https://t.me/+7ycB8RxiZQY5MDNl" target="_blank" class="btn btn-secondary" style="display: flex; align-items: center; gap: 0.5rem;">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 2L11 13"></path>
              <path d="M22 2l-7 20-4-9-9-4 20-7z"></path>
            </svg>
            Telegram
          </a>
          <a href="mailto:gm@sqrdao.com" class="btn btn-secondary" style="display: flex; align-items: center; gap: 0.5rem;">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            Email
          </a>
        </div>
      </div>
    </section>
  </main>

  <footer class="footer section">
    <div class="container footer-container">
      <div class="footer-brand">
        <img src="/assets/logo.svg" alt="Da Nang Blockchain Hub" class="footer-logo" height="60" style="margin-bottom: 0.5rem;">
        <p>Accelerating the Decentralized Future in Central Vietnam.</p>
      </div>
      <div class="footer-links">
        <div class="footer-column">
          <h4>Hub</h4>
          <a href="#about">About</a>
          <a href="#leadership">Leadership</a>
          <a href="#events">Activities</a>
          <a href="#location">Location</a>
          <a href="#calendar">Calendar</a>
        </div>
        <div class="footer-column">
          <h4>Community</h4>
          <a href="https://www.facebook.com/profile.php?id=61576570201707" target="_blank">Facebook</a>
          <a href="https://t.me/+7ycB8RxiZQY5MDNl" target="_blank">Telegram</a>
          <a href="mailto:gm@sqrdao.com">Email</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom text-center">
      <p>&copy; 2026 sqrDAO. All rights reserved.</p>
    </div>
  </footer>
`

// Mobile Menu Logic
const mobileBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav-list a');

if (mobileBtn) {
  mobileBtn.addEventListener('click', () => {
    mobileBtn.classList.toggle('active');
    nav.classList.toggle('active');
    document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
  });

  // Close menu when clicking a link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileBtn.classList.remove('active');
      nav.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

// Gallery Lightbox Logic - Initialize after DOM is ready
function initGallery() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightbox-image');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxCounter = document.getElementById('lightbox-counter');
  const lightboxClose = document.querySelector('.lightbox-close');
  const lightboxPrev = document.querySelector('.lightbox-prev');
  const lightboxNext = document.querySelector('.lightbox-next');
  const lightboxOverlay = document.querySelector('.lightbox-overlay');

  // Pagination elements
  const paginationPrev = document.querySelector('.pagination-prev');
  const paginationNext = document.querySelector('.pagination-next');
  const paginationCurrent = document.querySelector('.pagination-current');
  const paginationTotal = document.querySelector('.pagination-total');

  // Exit if essential elements are missing
  if (!lightbox || !lightboxImage || !lightboxCaption || !lightboxCounter || galleryItems.length === 0) {
    console.warn('Gallery elements not found');
    return;
  }

  // Pagination settings
  const ITEMS_PER_PAGE = 6;
  const totalImages = galleryItems.length;
  const totalPages = Math.ceil(totalImages / ITEMS_PER_PAGE);
  let currentPage = 1;
  let currentIndex = 0; // For lightbox navigation

  function openLightbox(index) {
    if (index < 0 || index >= totalImages) return;
    
    currentIndex = index;
    updateLightboxImage();
    lightbox.classList.add('active');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    
    // Preload adjacent images
    preloadAdjacentImages();
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function updateLightboxImage() {
    const item = galleryItems[currentIndex];
    if (!item) return;
    
    const imageSrc = item.getAttribute('data-src');
    const imageAlt = item.getAttribute('data-alt');
    
    // Remove loaded class while loading
    lightboxImage.classList.remove('loaded');
    
    // Set image source
    lightboxImage.src = imageSrc;
    lightboxImage.alt = imageAlt || '';
    lightboxCaption.textContent = imageAlt || '';
    lightboxCounter.textContent = `${currentIndex + 1} / ${totalImages}`;
    
    // Show image when loaded
    lightboxImage.onload = () => {
      lightboxImage.classList.add('loaded');
    };
    
    // Handle load errors
    lightboxImage.onerror = () => {
      lightboxImage.classList.add('loaded');
      console.error('Failed to load image:', imageSrc);
    };
    
    // Show/hide navigation buttons
    if (lightboxPrev) {
      lightboxPrev.style.display = currentIndex === 0 ? 'none' : 'flex';
    }
    if (lightboxNext) {
      lightboxNext.style.display = currentIndex === totalImages - 1 ? 'none' : 'flex';
    }
  }

  function navigateLightbox(direction) {
    if (direction === 'next' && currentIndex < totalImages - 1) {
      currentIndex++;
      updateLightboxImage();
    } else if (direction === 'prev' && currentIndex > 0) {
      currentIndex--;
      updateLightboxImage();
    }
  }

  function preloadAdjacentImages() {
    const indicesToPreload = [];
    if (currentIndex > 0) indicesToPreload.push(currentIndex - 1);
    if (currentIndex < totalImages - 1) indicesToPreload.push(currentIndex + 1);
    
    indicesToPreload.forEach(index => {
      const item = galleryItems[index];
      if (item) {
        const img = new Image();
        img.src = item.getAttribute('data-src');
      }
    });
  }

  // Pagination functions
  function updatePagination() {
    // Update pagination info
    if (paginationCurrent) paginationCurrent.textContent = currentPage;
    if (paginationTotal) paginationTotal.textContent = totalPages;
    
    // Update button states
    if (paginationPrev) {
      paginationPrev.disabled = currentPage === 1;
      paginationPrev.classList.toggle('disabled', currentPage === 1);
    }
    if (paginationNext) {
      paginationNext.disabled = currentPage === totalPages;
      paginationNext.classList.toggle('disabled', currentPage === totalPages);
    }
    
    // Show/hide gallery items
    galleryItems.forEach((item, index) => {
      const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
      const endIndex = startIndex + ITEMS_PER_PAGE;
      
      if (index >= startIndex && index < endIndex) {
        item.style.display = 'block';
        // Add fade-in animation
        item.style.opacity = '0';
        setTimeout(() => {
          item.style.opacity = '1';
        }, 10);
      } else {
        item.style.display = 'none';
      }
    });
  }

  function goToPage(page) {
    if (page < 1 || page > totalPages) return;
    currentPage = page;
    updatePagination();
  }

  // Initialize pagination
  if (paginationPrev && paginationNext) {
    paginationPrev.addEventListener('click', () => {
      if (currentPage > 1) {
        goToPage(currentPage - 1);
      }
    });

    paginationNext.addEventListener('click', () => {
      if (currentPage < totalPages) {
        goToPage(currentPage + 1);
      }
    });
  }

  // Initialize first page
  updatePagination();

  // Open lightbox on gallery item click
  galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      openLightbox(index);
    });
  });

  // Close lightbox handlers
  if (lightboxClose) {
    lightboxClose.addEventListener('click', (e) => {
      e.stopPropagation();
      closeLightbox();
    });
  }

  if (lightboxOverlay) {
    lightboxOverlay.addEventListener('click', closeLightbox);
  }

  // Navigation handlers
  if (lightboxPrev) {
    lightboxPrev.addEventListener('click', (e) => {
      e.stopPropagation();
      navigateLightbox('prev');
    });
  }

  if (lightboxNext) {
    lightboxNext.addEventListener('click', (e) => {
      e.stopPropagation();
      navigateLightbox('next');
    });
  }

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lightbox || !lightbox.classList.contains('active')) return;
    
    switch (e.key) {
      case 'Escape':
        closeLightbox();
        break;
      case 'ArrowLeft':
        navigateLightbox('prev');
        break;
      case 'ArrowRight':
        navigateLightbox('next');
        break;
    }
  });

  // Touch gestures for mobile
  let touchStartX = 0;
  let touchEndX = 0;

  if (lightbox) {
    lightbox.addEventListener('touchstart', (e) => {
      if (!lightbox.classList.contains('active')) return;
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    lightbox.addEventListener('touchend', (e) => {
      if (!lightbox.classList.contains('active')) return;
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });
  }

  function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        // Swipe left - next image
        navigateLightbox('next');
      } else {
        // Swipe right - previous image
        navigateLightbox('prev');
      }
    }
  }
}

// Initialize gallery after DOM content is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initGallery);
} else {
  // DOM is already ready, initialize immediately
  setTimeout(initGallery, 0);
}
