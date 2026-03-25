import React, { useEffect, useState } from 'react';

interface NavbarProps {
  activeSection: string;
}

const links = [
  { label: 'sobre', href: '#about', num: '01' },
  { label: 'stack', href: '#stack', num: '02' },
  { label: 'projetos', href: '#projects', num: '03' },
  { label: 'contato', href: '#contact', num: '04' },
];

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) setMenuOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      className="site-nav"
      style={{
        background: scrolled ? 'rgba(8,12,16,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      }}
    >
      <a href="#hero" className="site-nav__brand" onClick={closeMenu}>
        kauã<span style={{ color: 'var(--accent)' }}>.</span>dev
      </a>

      <ul id="site-nav-menu" className={`site-nav__links ${menuOpen ? 'is-open' : ''}`}>
        {links.map(({ label, href, num }) => {
          const isActive = activeSection === href.replace('#', '');
          return (
            <li key={href}>
              <a
                href={href}
                onClick={closeMenu}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  color: isActive ? 'var(--accent)' : 'var(--muted)',
                  letterSpacing: '0.05em',
                  transition: 'color 0.2s',
                  position: 'relative',
                }}
              >
                <span style={{ color: 'var(--accent)', marginRight: 4, fontSize: '0.7rem' }}>
                  {num}.
                </span>
                {label}
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: -4,
                      left: 0,
                      right: 0,
                      height: 1,
                      background: 'var(--accent)',
                      borderRadius: 1,
                    }}
                  />
                )}
              </a>
            </li>
          );
        })}
      </ul>

      <div className="site-nav__end">
        <a
          href="/curriculo-kaua-victor.pdf"
          className="site-nav__cv"
          target="_blank"
          rel="noreferrer"
          onClick={closeMenu}
        >
          currículo ↗
        </a>
        <button
          type="button"
          className="site-nav__menu-btn"
          aria-expanded={menuOpen}
          aria-controls="site-nav-menu"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className="site-nav__menu-bars">
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
