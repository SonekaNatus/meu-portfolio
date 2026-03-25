import React from 'react';

const stats = [
  { num: '3+', label: 'projetos\nconcluídos' },
  { num: '4+', label: 'tecnologias\nno stack' },
  { num: '100%', label: 'comprometido\ncom qualidade' },
  { num: '∞', label: 'vontade de\naprender' },
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
        01. sobre mim
        <span style={{ display: 'block', width: 60, height: 1, background: 'var(--accent)', opacity: 0.4 }} />
      </div>

      <h2 style={{
        fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
        fontWeight: 800,
        letterSpacing: '-0.03em',
        marginBottom: '3rem',
        lineHeight: 1.1,
      }}>
        Prazer, sou o Kauã.
      </h2>

      <div className="layout-split">
        {/* Texto */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          {[
            <>Desenvolvedor Full Stack apaixonado por tecnologia, natural de{' '}<span style={{ color: 'var(--accent)' }}>São Paulo</span>. Estudo Análise e Desenvolvimento de Sistemas na{' '}<span style={{ color: 'var(--accent)' }}>Universidade Senac SP</span> e me dedico a construir soluções web completas e bem feitas.</>,
            <>Trabalho com{' '}<span style={{ color: 'var(--accent)' }}>Java + Spring Boot</span> no backend e{' '}<span style={{ color: 'var(--accent)' }}>React + TypeScript</span> no frontend. Também exploro automações com n8n e integração de APIs REST.</>,
            <>Estou em busca de uma oportunidade de{' '}<span style={{ color: 'var(--accent)' }}>estágio ou primeiro emprego</span>{' '}onde eu possa contribuir, evoluir e fazer parte de um time incrível.</>,
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
              Currículo PDF ↗
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
