import React, { useEffect, useState } from 'react';

const roles = [
  'Full Stack Developer',
  'Java + Spring Boot',
  'React + TypeScript',
  'Automação com n8n',
];

const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex', alignItems: 'center',
        padding: `clamp(5.5rem, 14vw, 8rem) var(--section-px) clamp(2rem, 6vw, 4rem)`,
        maxWidth: 1200, margin: '0 auto',
        position: 'relative',
      }}
    >
      {/* Glow */}
      <div
        className="hero-glow"
        style={{
        position: 'absolute',
        top: '30%', left: '60%',
        background: 'radial-gradient(circle, rgba(0,229,160,0.07) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 780, position: 'relative', zIndex: 1 }}>
        {/* Tag */}
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.8rem', color: 'var(--accent)',
          letterSpacing: '0.15em',
          marginBottom: '1.5rem',
          display: 'flex', alignItems: 'center', gap: 12,
          animation: 'fadeUp 0.6s 0.2s both',
        }}>
          <span style={{ display: 'block', width: 40, height: 1, background: 'var(--accent)' }} />
          disponível para oportunidades
        </div>

        {/* Name */}
        <h1 style={{
          fontSize: 'clamp(3rem, 8vw, 5.5rem)',
          fontWeight: 800,
          lineHeight: 1.0,
          letterSpacing: '-0.04em',
          marginBottom: '0.5rem',
          animation: 'fadeUp 0.6s 0.35s both',
        }}>
          Kauã<br />
          <span style={{ color: 'var(--accent)' }}>Victor</span>
        </h1>

        {/* Typing role */}
        <div style={{
          fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
          color: 'var(--muted)',
          fontWeight: 600,
          marginBottom: '2rem',
          height: '2rem',
          animation: 'fadeUp 0.6s 0.5s both',
        }}>
          {displayed}
          <span style={{
            display: 'inline-block', width: 2, height: '1.2em',
            background: 'var(--accent)', marginLeft: 3,
            verticalAlign: 'middle',
            animation: 'blink 1s step-end infinite',
          }} />
        </div>

        {/* Description */}
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.92rem',
          color: 'var(--muted)',
          lineHeight: 1.9,
          maxWidth: 520,
          marginBottom: '3rem',
          animation: 'fadeUp 0.6s 0.65s both',
        }}>
          Desenvolvedor Full Stack estudante de ADS na{' '}
          <span style={{ color: 'var(--accent)' }}>Universidade Senac SP</span>.
          Construo soluções web completas — do backend com Java e Spring Boot
          ao frontend com React e TypeScript.
        </p>

        {/* Actions */}
        <div style={{
          display: 'flex', gap: '1rem', flexWrap: 'wrap',
          animation: 'fadeUp 0.6s 0.8s both',
        }}>
          <a
            href="#projects"
            style={{
              padding: '0.9rem 2rem',
              background: 'var(--accent)',
              color: 'var(--bg)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.85rem',
              borderRadius: 4,
              letterSpacing: '0.05em',
              fontWeight: 400,
              transition: 'background 0.2s, transform 0.15s',
              display: 'inline-block',
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-2px)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
          >
            ver projetos →
          </a>
          <a
            href="#contact"
            style={{
              padding: '0.9rem 2rem',
              border: '1px solid var(--border)',
              color: 'var(--text)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.85rem',
              borderRadius: 4,
              letterSpacing: '0.05em',
              transition: 'border-color 0.2s, color 0.2s, transform 0.15s',
              display: 'inline-block',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--accent)';
              e.currentTarget.style.color = 'var(--accent)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--border)';
              e.currentTarget.style.color = 'var(--text)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            entrar em contato
          </a>
          <a
            href="/curriculo-kaua-victor.pdf"
            target="_blank"
            rel="noreferrer"
            style={{
              padding: '0.9rem 2rem',
              border: '1px solid var(--border)',
              color: 'var(--muted)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.85rem',
              borderRadius: 4,
              letterSpacing: '0.05em',
              transition: 'border-color 0.2s, color 0.2s, transform 0.15s',
              display: 'inline-block',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--accent)';
              e.currentTarget.style.color = 'var(--accent)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--border)';
              e.currentTarget.style.color = 'var(--muted)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            currículo PDF ↗
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll-hint" style={{
        position: 'absolute', left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
        fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
        color: 'var(--muted)', letterSpacing: '0.1em',
        animation: 'fadeIn 1s 2s both',
      }}>
        <span>scroll</span>
        <div style={{
          width: 1, height: 50,
          background: 'linear-gradient(to bottom, var(--accent), transparent)',
          animation: 'float 2s ease-in-out infinite',
        }} />
      </div>
    </section>
  );
};

export default Hero;
