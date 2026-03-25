import React, { useEffect, useRef } from 'react';

const Cursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let animId: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = `${mouseX}px`;
        dotRef.current.style.top = `${mouseY}px`;
      }
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = `${ringX}px`;
        ringRef.current.style.top = `${ringY}px`;
      }
      animId = requestAnimationFrame(animate);
    };

    const onEnterLink = () => {
      dotRef.current && (dotRef.current.style.transform = 'translate(-50%, -50%) scale(2)');
      ringRef.current && (ringRef.current.style.transform = 'translate(-50%, -50%) scale(1.5)');
      ringRef.current && (ringRef.current.style.opacity = '0.8');
    };

    const onLeaveLink = () => {
      dotRef.current && (dotRef.current.style.transform = 'translate(-50%, -50%) scale(1)');
      ringRef.current && (ringRef.current.style.transform = 'translate(-50%, -50%) scale(1)');
      ringRef.current && (ringRef.current.style.opacity = '0.5');
    };

    document.addEventListener('mousemove', onMove);
    document.querySelectorAll('a, button, [data-cursor]').forEach((el) => {
      el.addEventListener('mouseenter', onEnterLink);
      el.addEventListener('mouseleave', onLeaveLink);
    });

    animId = requestAnimationFrame(animate);
    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        style={{
          width: 10, height: 10,
          background: 'var(--accent)',
          borderRadius: '50%',
          position: 'fixed',
          top: 0, left: 0,
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate(-50%, -50%)',
          transition: 'transform 0.2s',
          mixBlendMode: 'screen',
        }}
      />
      <div
        ref={ringRef}
        style={{
          width: 36, height: 36,
          border: '1px solid var(--accent)',
          borderRadius: '50%',
          position: 'fixed',
          top: 0, left: 0,
          pointerEvents: 'none',
          zIndex: 9998,
          transform: 'translate(-50%, -50%)',
          opacity: 0.5,
          transition: 'transform 0.2s, opacity 0.2s',
        }}
      />
    </>
  );
};

export default Cursor;
