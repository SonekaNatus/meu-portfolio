import React, { useState } from 'react';

const TO_EMAIL = 'kauavictorkakan@gmail.com';

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contato de ${form.name} via portfólio`);
    const body = encodeURIComponent(`Nome: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.open(`mailto:${TO_EMAIL}?subject=${subject}&body=${body}`);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.85rem 1rem',
    background: 'var(--bg3)',
    border: '1px solid var(--border)',
    borderRadius: 6,
    color: 'var(--text)',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.85rem',
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  return (
    <section
      id="contact"
      style={{
        padding: 'var(--section-py) var(--section-px)',
        background: 'var(--bg2)',
        borderTop: '1px solid var(--border)',
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
          04. contato
          <span style={{ display: 'block', width: 60, height: 1, background: 'var(--accent)', opacity: 0.4 }} />
        </div>

        <h2 style={{
          fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          marginBottom: '1rem',
        }}>
          Vamos trabalhar juntos?
        </h2>

        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.9rem', color: 'var(--muted)',
          lineHeight: 1.8, marginBottom: 'clamp(2rem, 6vw, 4rem)',
          maxWidth: 500,
        }}>
          Estou aberto a oportunidades de estágio, trabalho ou colaboração.
          Me manda uma mensagem — responderei em breve!
        </p>

        <div className="contact-split">
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.72rem',
                color: 'var(--muted)', letterSpacing: '0.1em',
                display: 'block', marginBottom: '0.4rem',
              }}>
                nome
              </label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Seu nome"
                style={inputStyle}
                onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                onBlur={e => (e.target.style.borderColor = 'var(--border)')}
              />
            </div>

            <div>
              <label style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.72rem',
                color: 'var(--muted)', letterSpacing: '0.1em',
                display: 'block', marginBottom: '0.4rem',
              }}>
                email
              </label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="seu@email.com"
                style={inputStyle}
                onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                onBlur={e => (e.target.style.borderColor = 'var(--border)')}
              />
            </div>

            <div>
              <label style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.72rem',
                color: 'var(--muted)', letterSpacing: '0.1em',
                display: 'block', marginBottom: '0.4rem',
              }}>
                mensagem
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Olá Kauã, gostaria de conversar sobre..."
                style={{ ...inputStyle, resize: 'vertical' }}
                onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                onBlur={e => (e.target.style.borderColor = 'var(--border)')}
              />
            </div>

            <button
              type="submit"
              style={{
                padding: '0.9rem 2rem',
                background: sent ? 'var(--accent2)' : 'var(--accent)',
                color: 'var(--bg)',
                border: 'none',
                borderRadius: 6,
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                letterSpacing: '0.05em',
                transition: 'background 0.2s, transform 0.15s',
                alignSelf: 'flex-start',
              }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-2px)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              {sent ? '✓ mensagem enviada!' : 'enviar mensagem →'}
            </button>
          </form>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {[
              {
                label: 'Email',
                value: TO_EMAIL,
                href: `mailto:${TO_EMAIL}`,
              },
              {
                label: 'LinkedIn',
                value: 'linkedin.com/in/kauã-victor-125a912aa',
                href: 'https://linkedin.com/in/kauã-victor-125a912aa',
              },
              {
                label: 'GitHub',
                value: 'github.com/SonekaNatus',
                href: 'https://github.com/SonekaNatus',
              },
              {
                label: 'WhatsApp',
                value: '+55 11 97972-2730',
                href: 'https://wa.me/5511979722730',
              },
            ].map(({ label, value, href }) => {
              const isMail = href.startsWith('mailto:');
              return (
                <div key={label}>
                  <div style={{
                    fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
                    color: 'var(--muted)', letterSpacing: '0.12em',
                    marginBottom: '0.3rem',
                  }}>
                    {label}
                  </div>
                  <a
                    href={href}
                    {...(isMail ? {} : { target: '_blank', rel: 'noreferrer' })}
                    style={{
                      fontFamily: 'var(--font-mono)', fontSize: '0.88rem',
                      color: 'var(--text)',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--text)')}
                  >
                    {value} ↗
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
