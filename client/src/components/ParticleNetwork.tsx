// ParticleNetwork — Canvas 2D animated background
// Green-only neon glowing particles with connection lines — floating in space effect
import { useEffect, useRef, useState } from "react";

interface Particle {
  x: number; y: number; vx: number; vy: number;
  radius: number; color: string; glowColor: string;
  pulseTimer: number; baseRadius: number;
  driftAngle: number; driftSpeed: number;
}

export function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [canvasSupported, setCanvasSupported] = useState(true);

  useEffect(() => {
    // Check reduced motion preference
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCanvasSupported(false);
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) {
      setCanvasSupported(false);
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      setCanvasSupported(false);
      return;
    }

    let animId: number;
    let particles: Particle[] = [];
    const isMobile = window.innerWidth < 768;
    // More particles for a richer look
    const PARTICLE_COUNT = isMobile ? 50 : 80;
    const MAX_DIST = isMobile ? 140 : 180;

    // Mithaq navy palette — multiple shades for variety, all navy.
    // Source: docs/MITHAQ_SPEC.docx §1.4. Animation structure, particle
    // count, drift physics, and pulse timing are unchanged — only the
    // hex values that fill / stroke / glow each particle.
    const NAVY_DARK = ["#2E5A9E", "#2C74B3", "#144272", "#0A2647", "#3B6BB8", "#1A4A8F"];
    const NAVY_LIGHT = ["#0A2647", "#041C40", "#144272", "#2C74B3", "#1A3F7A", "#0F2F5C"];

    function getThemeColors() {
      const isDark = document.documentElement.classList.contains('dark');
      const navys = isDark ? NAVY_DARK : NAVY_LIGHT;
      const glowBase = isDark ? "#2E5A9E" : "#0A2647";
      const connectionColor = isDark ? "rgba(46,90,158," : "rgba(10,38,71,";
      // More visible connection lines — 2.5x previous opacity
      const connectionBaseOpacity = isDark ? 0.35 : 0.3;
      return { navys, glowBase, connectionColor, connectionBaseOpacity };
    }

    function resize() {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
    }

    function initParticles() {
      const { navys, glowBase } = getThemeColors();
      particles = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const color = navys[Math.floor(Math.random() * navys.length)];
        const baseRadius = 2 + Math.random() * 2.5;
        particles.push({
          x: Math.random() * canvas!.width,
          y: Math.random() * canvas!.height,
          // Slower floating — space-like drift (0.08 to 0.18)
          vx: (Math.random() - 0.5) * 0.18,
          vy: (Math.random() - 0.5) * 0.18,
          radius: baseRadius,
          baseRadius,
          color,
          glowColor: glowBase,
          pulseTimer: Math.random() * 400,
          // Gentle sinusoidal drift for organic floating feel
          driftAngle: Math.random() * Math.PI * 2,
          driftSpeed: 0.002 + Math.random() * 0.004,
        });
      }
    }

    function draw() {
      const { connectionColor, connectionBaseOpacity } = getThemeColors();
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);

      // Reset shadow before connection lines
      ctx!.shadowBlur = 0;
      ctx!.shadowColor = "transparent";

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Organic floating — sinusoidal drift overlaid on linear velocity
        p.driftAngle += p.driftSpeed;
        const driftX = Math.sin(p.driftAngle) * 0.15;
        const driftY = Math.cos(p.driftAngle * 0.7) * 0.12;

        p.x += p.vx + driftX;
        p.y += p.vy + driftY;
        p.pulseTimer++;

        // Wrap around edges smoothly (space-like — no bouncing)
        if (p.x < -20) p.x = canvas!.width + 20;
        if (p.x > canvas!.width + 20) p.x = -20;
        if (p.y < -20) p.y = canvas!.height + 20;
        if (p.y > canvas!.height + 20) p.y = -20;

        // Gentle pulse — slower cycle, subtle breathing
        if (p.pulseTimer > 400 && Math.random() < 0.002) {
          p.pulseTimer = 0;
        }
        if (p.pulseTimer < 60) {
          const scale = 1 + Math.sin((p.pulseTimer / 60) * Math.PI) * 0.5;
          p.radius = p.baseRadius * scale;
        } else {
          p.radius = p.baseRadius;
        }

        // Draw connection lines — more visible
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const opacity = (1 - dist / MAX_DIST) * connectionBaseOpacity;
            ctx!.strokeStyle = `${connectionColor}${opacity.toFixed(3)})`;
            ctx!.lineWidth = 0.8;
            ctx!.beginPath();
            ctx!.moveTo(p.x, p.y);
            ctx!.lineTo(q.x, q.y);
            ctx!.stroke();
          }
        }

        // Draw particle with enhanced neon glow
        ctx!.save();
        ctx!.shadowBlur = p.radius * 8;
        ctx!.shadowColor = p.glowColor;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx!.fillStyle = p.color;
        ctx!.globalAlpha = 0.9;
        ctx!.fill();

        // Second glow pass — brighter center
        ctx!.shadowBlur = p.radius * 3;
        ctx!.globalAlpha = 0.55;
        ctx!.fill();
        ctx!.restore();

        ctx!.globalAlpha = 1;
      }

      animId = requestAnimationFrame(draw);
    }

    // Set explicit canvas dimensions immediately
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Delay animation start to ensure browser has completed layout
    const startTimeout = setTimeout(() => {
      resize();
      initParticles();
      animId = requestAnimationFrame(draw);
    }, 100);

    const handleResize = () => {
      resize();
      for (const p of particles) {
        if (p.x > canvas!.width) p.x = Math.random() * canvas!.width;
        if (p.y > canvas!.height) p.y = Math.random() * canvas!.height;
      }
    };

    window.addEventListener("resize", handleResize, { passive: true });

    // Watch for theme changes — reinit particles with new colors
    const observer = new MutationObserver(() => {
      const { navys, glowBase } = getThemeColors();
      for (const p of particles) {
        p.color = navys[Math.floor(Math.random() * navys.length)];
        p.glowColor = glowBase;
      }
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => {
      clearTimeout(startTimeout);
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, []);

  // Fallback: static gradient if canvas not supported
  if (!canvasSupported) {
    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 0,
          pointerEvents: "none",
          background: "linear-gradient(135deg, #041C40 0%, #0A2647 50%, #144272 100%)",
        }}
      />
    );
  }

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}
