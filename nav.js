function getNavHTML(activePage) {
  const pages = [
    { href: 'index.html', label: 'Home', id: 'home' },
    { href: 'services.html', label: 'Services', id: 'services' },
    { href: 'about.html', label: 'About', id: 'about' },
  ];
  const links = pages.map(p =>
    `<li><a href="${p.href}"${activePage === p.id ? ' class="active"' : ''}>${p.label}</a></li>`
  ).join('');
  return `
<nav id="main-nav">
  <div class="nav-inner">
    <a href="index.html" class="nav-logo"><img src="images/logo.png" alt="Vernwell Ltd"></a>
    <ul class="nav-links" id="nav-links">
      ${links}
      <li><a href="contact.html" class="nav-cta${activePage === 'contact' ? ' active' : ''}">Get in Touch</a></li>
    </ul>
    <button class="nav-hamburger" id="hamburger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>`;
}

function getFooterHTML() {
  return `
<footer>
  <div class="container">
    <div class="footer-inner">
      <div class="footer-brand">
        <img src="images/logo.png" alt="Vernwell Ltd">
        <p>BI and AI automation consultancy for SMEs and PE-backed businesses. Based in Malvern, Worcestershire.</p>
      </div>
      <div class="footer-col">
        <h5>Services</h5>
        <ul>
          <li><a href="services.html#bi">Business Intelligence</a></li>
          <li><a href="services.html#ai">AI Automation</a></li>
          <li><a href="services.html#data">Data Strategy</a></li>
          <li><a href="services.html#interim">Interim Leadership</a></li>
          <li><a href="services.html#cyber">Cyber Security</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>Contact</h5>
        <div class="footer-contact-item"><a href="tel:07788258843">07788 258843</a></div>
        <div class="footer-contact-item"><a href="mailto:james.eyles@vernwell.co.uk">james.eyles@vernwell.co.uk</a></div>
        <div class="footer-contact-item">Malvern, Worcestershire</div>
        <a href="https://uk.linkedin.com/in/james-eyles-acma-44282033" target="_blank" rel="noopener" class="linkedin-link">
          <svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          LinkedIn
        </a>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; ${new Date().getFullYear()} Vernwell Ltd. Registered in England &amp; Wales.</p>
      <div class="footer-links">
        <a href="legal.html">Legal Notice</a>
        <a href="privacy.html">Privacy Policy</a>
      </div>
    </div>
  </div>
</footer>`;
}

function initNav() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
    document.addEventListener('click', (e) => {
      if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('open');
      }
    });
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.08 });
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
}
