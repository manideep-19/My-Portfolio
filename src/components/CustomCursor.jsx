import React, { useState, useEffect, useRef } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  const [hoverLabel, setHoverLabel] = useState('');
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const requestRef = useRef(null);

  useEffect(() => {
    // Check if device has fine pointer (mouse)
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!hasFinePointer) return;

    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;

    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check hovered element
      const target = e.target;
      const interactiveEl = target.closest('button, a, input, textarea, select, .mechanical-box, .clickable, [role="button"]');
      
      if (interactiveEl) {
        setIsHoveringInteractive(true);
        const customLabel = interactiveEl.getAttribute('data-cursor') || 
          (interactiveEl.tagName === 'A' ? 'OPEN' : 
           interactiveEl.tagName === 'BUTTON' ? 'PRESS' : 
           interactiveEl.classList.contains('mechanical-box') ? 'INSPECT' : '');
        setHoverLabel(customLabel);
      } else {
        setIsHoveringInteractive(false);
        setHoverLabel('');
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Smooth lerp animation loop for the outer precision target ring
    const animate = () => {
      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;
      setTrailingPos({ x: currentX, y: currentY });
      requestRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="custom-cursor-root" aria-hidden="true">
      {/* Inner Precision Crosshair Dot */}
      <div
        className={`cursor-reticle-dot ${isClicking ? 'clicking' : ''} ${isHoveringInteractive ? 'active-hover' : ''}`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`
        }}
      >
        <span className="reticle-line reticle-top" />
        <span className="reticle-line reticle-right" />
        <span className="reticle-line reticle-bottom" />
        <span className="reticle-line reticle-left" />
      </div>

      {/* Outer Smooth Target Ring */}
      <div
        className={`cursor-target-ring ${isHoveringInteractive ? 'expanded' : ''} ${isClicking ? 'pulse-click' : ''}`}
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0)`
        }}
      >
        {hoverLabel && (
          <span className="cursor-tag-badge">
            [{hoverLabel}]
          </span>
        )}
      </div>
    </div>
  );
}
