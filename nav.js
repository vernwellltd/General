// nav.js — shared navigation for vernwell.co.uk
function getNavHTML(activePage) {
  const links = [
    { href: '/services/', label: 'Services' },
    { href: '/about/',    label: 'About' },
    { href: '/contact/',  label: 'Contact' },
  ];

  const linksHTML = links.map(l => {
    const active = activePage === l.href ? ' class="active"' : '';
    return `<li><a href="${l.href}"${active}>${l.label}</a></li>`;
  }).join('');

  return `
<nav>
  <div class="container">
    <div class="nav-inner">
      <a href="/" class="nav-logo">
        <img src="/images/vernwell-logo.png" alt="Vernwell Ltd logo" onerror="this.style.display='none'">
        <span class="nav-logo-text">Vernwell<span>.</span></span>
      </a>
      <ul class="nav-links">
        ${linksHTML}
        <li><a href="/contact/" class="nav-cta">Get in Touch</a></li>
      </ul>
    </div>
  </div>
</nav>`;
}
