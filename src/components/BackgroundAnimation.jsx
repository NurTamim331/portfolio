import { useEffect, useRef } from 'react';

const BackgroundAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const prefersReducedMotion = mediaQuery.matches;

    // Responsive particle count (fewer on mobile for performance)
    const particleCount = Math.min(Math.floor((width * height) / 22000), 55);

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.radius = Math.random() * 1.5 + 0.8;
        this.vx = (Math.random() - 0.5) * (prefersReducedMotion ? 0.05 : 0.35);
        this.vy = (Math.random() - 0.5) * (prefersReducedMotion ? 0.05 : 0.35);
        this.alpha = Math.random() * 0.35 + 0.15;
        this.color = Math.random() > 0.4 ? '6, 182, 212' : '59, 130, 246'; // Cyan or Blue
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0) this.x = width;
        else if (this.x > width) this.x = 0;

        if (this.y < 0) this.y = height;
        else if (this.y > height) this.y = 0;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color}, ${this.alpha})`;
        ctx.fill();
      }
    }

    const particles = Array.from({ length: particleCount }, () => new Particle());

    // Track mouse coordinates for subtle interactive glow
    let mouse = { x: -1000, y: -1000, active: false };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      particles.forEach((p) => p.reset());
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    const maxDistance = 140;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Connect nearby particles
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.update();
        p1.draw();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const lineAlpha = (1 - dist / maxDistance) * 0.12;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(6, 182, 212, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Faint connection to mouse cursor
        if (mouse.active) {
          const mdx = p1.x - mouse.x;
          const mdy = p1.y - mouse.y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mdist < 160) {
            const mAlpha = (1 - mdist / 160) * 0.2;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${mAlpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      {/* Subtle modern ambient gradient backdrops */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-cyan-600/10 blur-[130px] -z-10 pointer-events-none" />
      <div className="absolute top-[40%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-blue-600/10 blur-[140px] -z-10 pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-indigo-600/8 blur-[150px] -z-10 pointer-events-none" />
      
      {/* Subtle grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] -z-10 pointer-events-none" 
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      {/* Canvas for dynamic particles */}
      <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full" />
    </div>
  );
};

export default BackgroundAnimation;
