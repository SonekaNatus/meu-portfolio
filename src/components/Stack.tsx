import React, { useState } from 'react';

interface Tech {
  name: string;
  color: string;
}

interface Category {
  label: string;
  techs: Tech[];
}

const categories: Category[] = [
  {
    label: 'frontend',
    techs: [
      { name: 'HTML5',      color: '#E34F26' },
      { name: 'CSS3',       color: '#1572B6' },
      { name: 'JavaScript', color: '#F7DF1E' },
      { name: 'TypeScript', color: '#3178C6' },
      { name: 'React',      color: '#61DAFB' },
      { name: 'Angular',    color: '#DD0031' },
    ],
  },
  {
    label: 'backend',
    techs: [
      { name: 'Java',        color: '#007396' },
      { name: 'Spring Boot', color: '#6DB33F' },
      { name: 'APIs REST',   color: '#00e5a0' },
      { name: 'MySQL',       color: '#4479A1' },
    ],
  },
  {
    label: 'devops & ferramentas',
    techs: [
      { name: 'Docker',   color: '#2496ED' },
      { name: 'Git',      color: '#F05032' },
      { name: 'n8n',      color: '#FF6D00' },
      { name: 'Postman',  color: '#FF6C37' },
      { name: 'VS Code',  color: '#007ACC' },
    ],
  },
];

const Stack: React.FC = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section
      id="stack"
      style={{
        padding: 'var(--section-py) var(--section-px)',
        background: 'var(--bg2)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        position: 'relative', zIndex: 1,
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.75rem', color: 'var(--accent)',
          letterSpacing: '0.2em',
          marginBottom: '1rem',
          display: 'flex', alignItems: 'center', gap: 12,
        }}>
          02. stack técnica
          <span style={{ display: 'block', width: 60, height: 1, background: 'var(--accent)', opacity: 0.4 }} />
        </div>

        <h2 style={{
          fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          marginBottom: 'clamp(2rem, 6vw, 4rem)',
        }}>
          Tecnologias que uso.
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {categories.map(({ label, techs }) => (
            <div key={label}>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem', color: 'var(--muted)',
                letterSpacing: '0.15em',
                marginBottom: '1rem',
              }}>
                — {label}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {techs.map(({ name, color }) => (
                  <div
                    key={name}
                    onMouseEnter={() => setHovered(name)}
                    onMouseLeave={() => setHovered(null)}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 8,
                      padding: '0.6rem 1.2rem',
                      background: hovered === name ? 'var(--bg3)' : 'var(--card)',
                      border: `1px solid ${hovered === name ? color : 'var(--border)'}`,
                      borderRadius: 6,
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.82rem',
                      color: hovered === name ? 'var(--text)' : 'var(--muted)',
                      transition: 'all 0.2s',
                      cursor: 'default',
                    }}
                  >
                    <span style={{
                      width: 8, height: 8, borderRadius: '50%',
                      background: color,
                      boxShadow: hovered === name ? `0 0 8px ${color}` : 'none',
                      transition: 'box-shadow 0.2s',
                      flexShrink: 0,
                    }} />
                    {name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;
