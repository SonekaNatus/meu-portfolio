import React from 'react';

const stats = [
  { num: '3+', label: 'projects\nshipped' },
  { num: '4+', label: 'stack\ntechnologies' },
  { num: '100%', label: 'committed\nto quality' },
  { num: '∞', label: 'drive to\nlearn' },
];

const About: React.FC = () => {
  return (
    <section
      id="about"
      style={{
        padding: 'var(--section-py) var(--section-px)',
        maxWidth: 1200, margin: '0 auto',
        position: 'relative', zIndex: 1,
      }}
    >
      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.75rem', color: 'var(--accent)',
        letterSpacing: '0.2em',
        marginBottom: '1rem',
        display: 'flex', alignItems: 'center', gap: 12,
      }}>
        01. about me
        <span style={{ display: 'block', width: 60, height: 1, background: 'var(--accent)', opacity: 0.4 }} />
      </div>

      <h2 style={{
        fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
        fontWeight: 800,
        letterSpacing: '-0.03em',
        marginBottom: '3rem',
        lineHeight: 1.1,
      }}>
        Hi, I&apos;m Kauã.
      </h2>

      <div className="layout-split">
        {/* Texto */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          {[
            <>I&apos;m a Full Stack developer passionate about technology, based in{' '}<span style={{ color: 'var(--accent)' }}>São Paulo</span>. I study Systems Analysis &amp; Development at{' '}<span style={{ color: 'var(--accent)' }}>Senac University São Paulo</span> and focus on building solid, end-to-end web solutions.</>,
            <>On the backend I work with{' '}<span style={{ color: 'var(--accent)' }}>Java + Spring Boot</span>; on the frontend with{' '}<span style={{ color: 'var(--accent)' }}>React + TypeScript</span>. I also explore automation with n8n and REST API integrations.</>,
            <>I&apos;m looking for an{' '}<span style={{ color: 'var(--accent)' }}>internship or first full-time role</span>{' '}where I can contribute, grow, and be part of a great team.</>,
          ].map((text, i) => (
            <p key={i} style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.9rem',
              color: 'var(--muted)',
              lineHeight: 1.9,
            }}>
              {text}
            </p>
          ))}

          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', flexWrap: 'wrap' }}>
            <a
              href="https://linkedin.com/in/kauã-victor-125a912aa"
              target="_blank"
              rel="noreferrer"
              style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.8rem',
                color: 'var(--accent)', display: 'flex', alignItems: 'center', gap: 6,
              }}
            >
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/SonekaNatus"
              target="_blank"
              rel="noreferrer"
              style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.8rem',
                color: 'var(--accent)', display: 'flex', alignItems: 'center', gap: 6,
              }}
            >
              GitHub ↗
            </a>
            <a
              href="https://wa.me/5511979722730"
              target="_blank"
              rel="noreferrer"
              style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.8rem',
                color: 'var(--accent)', display: 'flex', alignItems: 'center', gap: 6,
              }}
            >
              WhatsApp ↗
            </a>
            <a
              href="/curriculo-kaua-victor.pdf"
              target="_blank"
              rel="noreferrer"
              style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.8rem',
                color: 'var(--accent)', display: 'flex', alignItems: 'center', gap: 6,
              }}
            >
              Résumé PDF ↗
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="stats-grid">
          {stats.map(({ num, label }) => (
            <div
              key={num}
              style={{
                background: 'var(--card)',
                border: '1px solid var(--border)',
                borderRadius: 8,
                padding: '1.5rem',
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--accent)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
            >
              <div style={{
                fontSize: '2.5rem', fontWeight: 800,
                color: 'var(--accent)', lineHeight: 1,
                marginBottom: '0.5rem',
              }}>
                {num}
              </div>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem', color: 'var(--muted)',
                lineHeight: 1.5, whiteSpace: 'pre-line',
              }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
