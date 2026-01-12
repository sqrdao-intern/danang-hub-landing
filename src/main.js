import './style.css'

document.querySelector('#app').innerHTML = `
  <header class="header glass">
    <div class="container header-container">
      <div class="logo">
        <img src="/assets/logo.svg" alt="Da Nang Blockchain Hub" height="48">
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
          <li><a href="#events">Events</a></li>
          <li><a href="#location">Location</a></li>
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
        <h2 class="section-title text-center">Hub Activities</h2>
        <p class="section-subtitle text-center">From intimate workshops to major hackathons, view our latest community moments.</p>
        
        <div class="media-grid">
          <div class="media-item glass">
            <img src="/assets/DSC07805.jpg" alt="Hub Event">
            <div class="media-overlay">
              <span>Community Gatherings</span>
            </div>
          </div>
          <div class="media-item glass">
            <img src="/assets/TVN02532.jpg" alt="Workshop">
            <div class="media-overlay">
              <span>Technical Workshops</span>
            </div>
          </div>
          <div class="media-item glass">
            <img src="/assets/TVN02568.jpg" alt="Networking">
            <div class="media-overlay">
              <span>Networking Nights</span>
            </div>
          </div>
           <div class="media-item glass">
            <img src="/assets/TVN02708.jpg" alt="Demo Day">
            <div class="media-overlay">
              <span>Demo Days</span>
            </div>
          </div>
          <div class="media-item glass">
            <img src="/assets/1741076518017.jpeg" alt="Builders">
            <div class="media-overlay">
              <span>Builders in Action</span>
            </div>
          </div>
          <div class="media-item glass">
            <img src="/assets/494262413_1271617061633605_5026052851423093241_n.jpg" alt="Innovation">
            <div class="media-overlay">
              <span>Innovation Hub</span>
            </div>
          </div>
        </div>
        
        <div class="events-footer text-center" style="margin-top: 2rem;">
            <a href="#" class="btn btn-secondary" onclick="event.preventDefault(); alert('Full gallery coming soon!')">See Full Gallery</a>
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
                   <p>Monday - Friday: 8:00 AM - 8:00 PM<br>Saturday: 9:00 AM - 5:00 PM</p>
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
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.198 2.433a2.242 2.242 0 0 0-1.022.215l-8.609 3.33c-2.068.8-4.133 1.598-5.724 2.21a405.15 405.15 0 0 1-2.863 1.09c-1.115.422-1.636.566-1.588.66.074.15.539.317 1.25.666 1.056.516 2.053 1.095 2.531 1.63a3.52 3.52 0 0 1 .491.737c.189.444.202.825.105 1.154-.084.285-.297.525-.566.703-.309.205-.71.36-1.558.175-.63-.138-1.516-.273-2.646-.273-.67 0-1.348.06-1.99.18a3.1 3.1 0 0 0-1.28.539 2.53 2.53 0 0 0-.825 1.604c-.067.575.053 1.198.544 1.708.435.452 1.05.747 1.748.86 1.517.247 3.525.247 5.617-.234 1.849-.425 3.398-1.42 4.417-2.695l.02.015a2.27 2.27 0 0 0 1.25-.632c.563-.565.814-1.353.94-2.128L21.84 4.54a2.24 2.24 0 0 0-.642-2.107zM3.483 14.153c.48.093 1.018.14 1.58.14 1.077 0 1.916-.135 2.478-.266.38-.088.7-.163.957-.163.633 0 1.13.25 1.48.775.297.447.464 1.006.464 1.624 0 1.229-.684 2.195-1.728 2.668-.466.21-1.02.327-1.63.327-.584 0-1.2-.1-1.802-.218-.546-.107-1-.33-1.312-.654-.319-.333-.377-.73-.332-1.07.039-.317.2-.676.54-1.01.378-.372.93-.687 1.616-.927 1.4-.492 3.254-1.186 5.12-1.908l8.608-3.33c.96-.37 1.683-.652 1.683-.652s.373-.15.424-.047c.05.103-.314 1.944-1.298 6.467-.116.533-.313 1.156-.7 1.545-.487.488-1.205.717-2.008.349-1.272-.582-2.825-1.442-4.184-2.27a.78.78 0 0 1 .158-.291c.29-.318.595-.589.923-.815l4.316-2.97c.594-.41.67-.93.18-1.135-.49-.204-1.08.064-1.52.366L6.873 13.91l-.226.136c-.463.275-.807.478-1.26.543-.377.054-.744-.01-1.06-.153z"/></svg> 
            <!-- Using a simpler generic plane/send icon for Telegram if complex path fails, but trying standard path first. Actually, let's use a simpler send icon for reliability. -->
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
          <a href="#events">Events</a>
          <a href="#location">Location</a>
        </div>
        <div class="footer-column">
          <h4>Community</h4>
          <a href="#">Twitter/X</a>
          <a href="#">Telegram</a>
          <a href="#">Discord</a>
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
