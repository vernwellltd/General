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
        <img src="/images/Vernwell_Logo.png" alt="Vernwell Ltd logo" onerror="this.style.display='none'">
      </a>
      <button class="nav-toggle" id="navToggle" aria-label="Toggle navigation" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
      <ul class="nav-links" id="navLinks">
        ${linksHTML}
        
      </ul>
    </div>
  </div>
</nav>
<script>
  (function() {
    var btn = document.getElementById('navToggle');
    var menu = document.getElementById('navLinks');
    if (!btn || !menu) return;
    btn.addEventListener('click', function() {
      var open = menu.classList.toggle('nav-open');
      btn.setAttribute('aria-expanded', open);
      btn.classList.toggle('is-open', open);
    });
    // Close on link click
    menu.querySelectorAll('a').forEach(function(a) {
      a.addEventListener('click', function() {
        menu.classList.remove('nav-open');
        btn.classList.remove('is-open');
        btn.setAttribute('aria-expanded', false);
      });
    });
  })();
</script>`;
}
