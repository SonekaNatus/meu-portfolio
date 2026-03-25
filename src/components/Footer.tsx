import React from 'react';

const Footer: React.FC = () => (
  <footer className="site-footer">
    <span style={{
      fontFamily: 'var(--font-mono)', fontSize: '0.75rem',
      color: 'var(--muted)',
    }}>
      © 2025 Kauã Victor — feito com dedicação
    </span>
    <div className="site-footer__links" style={{ display: 'flex' }}>
      {[
        { label: 'GitHub',    href: 'https://github.com/SonekaNatus' },
        { label: 'LinkedIn',  href: 'https://linkedin.com/in/kauã-victor-125a912aa' },
        { label: 'Currículo', href: '/curriculo-kaua-victor.pdf' },
        { label: 'WhatsApp',  href: 'https://wa.me/5511979722730' },
        { label: 'Instagram', href: 'https://instagram.com/kauavictor_7xz' },
      ].map(({ label, href }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.72rem',
            color: 'var(--muted)', letterSpacing: '0.05em',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
        >
          {label}
        </a>
      ))}
    </div>
  </footer>
);

export default Footer;
