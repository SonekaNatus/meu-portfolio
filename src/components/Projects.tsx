import React, { useState } from 'react';

interface Project {
  num: string;
  name: string;
  description: string;
  long: string;
  tags: string[];
  github: string;
  live?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    num: '01',
    name: 'Doce Encanto Atelier',
    description: 'Sistema web completo para gestão de doceria.',
    long: 'Aplicação full stack com catálogo de produtos, sistema de pedidos e painel administrativo. Backend com Spring Boot e MySQL, frontend em Angular.',
    tags: ['Angular', 'Spring Boot', 'MySQL', 'Docker', 'REST API'],
    github: 'https://github.com/SonekaNatus/doce-encanto-atelier',
    featured: true,
  },
  {
    num: '02',
    name: 'Calculadora de Financiamento',
    description: 'Simulador de financiamento imobiliário em tempo real.',
    long: 'Calcula parcelas pelas tabelas SAC e PRICE com atualização reativa. Interface limpa construída com React e TypeScript sem dependências externas.',
    tags: ['React', 'TypeScript'],
    github: 'https://github.com/SonekaNatus/calculadora-financiamento',
  },
  {
    num: '03',
    name: 'Site Mega Pam Planejados',
    description: 'Landing page institucional com integração WhatsApp.',
    long: 'Página com seções de apresentação, galeria de ambientes, depoimentos e formulário de contato com envio direto pelo WhatsApp.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/SonekaNatus/Site-Mega-Pam-Planejados',
  },
];

const Projects: React.FC = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section
      id="projects"
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
        03. projetos
        <span style={{ display: 'block', width: 60, height: 1, background: 'var(--accent)', opacity: 0.4 }} />
      </div>

      <h2 style={{
        fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
        fontWeight: 800,
        letterSpacing: '-0.03em',
        marginBottom: 'clamp(2rem, 6vw, 4rem)',
      }}>
        O que já construí.
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {projects.map((proj) => (
          <div
            key={proj.num}
            onMouseEnter={() => setHovered(proj.num)}
            onMouseLeave={() => setHovered(null)}
            style={{
              background: 'var(--card)',
              border: `1px solid ${hovered === proj.num ? 'var(--accent)' : 'var(--border)'}`,
              borderRadius: 10,
              padding: 'clamp(1.25rem, 4vw, 2rem)',
              transition: 'all 0.25s',
              transform: hovered === proj.num ? 'translateY(-2px)' : 'translateY(0)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {proj.featured && (
              <div className="project-featured-badge" style={{
                position: 'absolute',
                fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
                color: 'var(--accent)', letterSpacing: '0.1em',
                border: '1px solid var(--accent)',
                padding: '2px 10px', borderRadius: 20,
              }}>
                destaque
              </div>
            )}

            <div className="project-card-row">
              <div>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.75rem',
                  color: 'var(--accent)', marginBottom: '0.5rem',
                  letterSpacing: '0.1em',
                }}>
                  {proj.num}
                </div>
                <h3 style={{
                  fontSize: '1.3rem', fontWeight: 700,
                  letterSpacing: '-0.02em', marginBottom: '0.5rem',
                }}>
                  {proj.name}
                </h3>
                <p style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.82rem',
                  color: 'var(--muted)', lineHeight: 1.7, marginBottom: '1rem',
                  maxWidth: 600,
                }}>
                  {proj.long}
                </p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: 'var(--font-mono)', fontSize: '0.72rem',
                        color: 'var(--muted)',
                        padding: '2px 10px',
                        border: '1px solid var(--border)',
                        borderRadius: 4,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-card-actions">
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontFamily: 'var(--font-mono)', fontSize: '0.78rem',
                    color: hovered === proj.num ? 'var(--accent)' : 'var(--muted)',
                    display: 'flex', alignItems: 'center', gap: 6,
                    transition: 'color 0.2s',
                    whiteSpace: 'nowrap',
                  }}
                >
                  GitHub ↗
                </a>
                {proj.live && (
                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      fontFamily: 'var(--font-mono)', fontSize: '0.78rem',
                      color: 'var(--accent)',
                      display: 'flex', alignItems: 'center', gap: 6,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    demo ao vivo ↗
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{
        marginTop: '3rem', textAlign: 'center',
      }}>
        <a
          href="https://github.com/SonekaNatus"
          target="_blank"
          rel="noreferrer"
          style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.82rem',
            color: 'var(--muted)',
            letterSpacing: '0.05em',
            transition: 'color 0.2s',
            display: 'inline-flex', alignItems: 'center', gap: 8,
          }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
        >
          ver todos os repositórios no GitHub ↗
        </a>
      </div>
    </section>
  );
};

export default Projects;
