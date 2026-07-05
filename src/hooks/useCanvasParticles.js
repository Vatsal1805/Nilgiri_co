import { useEffect } from 'react';

/**
 * Custom hook to run a slow-moving ambient warm-glow/steam particle loop on a canvas.
 * @param {React.RefObject} canvasRef - Reference to the HTML5 canvas element
 * @param {Object} options - Configuration options for the particle simulation
 */
export default function useCanvasParticles(canvasRef, options = {}) {
  const {
    particleCount = 45,
    color = '200, 169, 110', // RGB representation of --color-gold
    minRadius = 0.6,
    maxRadius = 2.4,
    minSpeedY = -0.35,
    maxSpeedY = -0.1,
    maxSpeedX = 0.08,
  } = options;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Initialize particles array
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * (maxRadius - minRadius) + minRadius,
        speedY: Math.random() * (maxSpeedY - minSpeedY) + minSpeedY,
        speedX: Math.random() * (maxSpeedX * 2) - maxSpeedX,
        opacity: Math.random() * 0.55 + 0.1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${p.opacity})`;
        ctx.shadowBlur = p.radius * 4;
        ctx.shadowColor = `rgba(${color}, 0.35)`;
        ctx.fill();
        ctx.shadowBlur = 0; // reset
        
        // Update positions
        p.y += p.speedY;
        p.x += p.speedX;
        
        // Gentle opacity fade out near top
        if (p.y < 80) {
          p.opacity -= 0.005;
        }
        
        // Reset particle if scrolled out of viewport bounds or fully faded
        if (p.y < 0 || p.opacity <= 0) {
          p.x = Math.random() * canvas.width;
          p.y = canvas.height + Math.random() * 30;
          p.radius = Math.random() * (maxRadius - minRadius) + minRadius;
          p.speedY = Math.random() * (maxSpeedY - minSpeedY) + minSpeedY;
          p.opacity = Math.random() * 0.55 + 0.1;
        }
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [canvasRef, particleCount, color, minRadius, maxRadius, minSpeedY, maxSpeedY, maxSpeedX]);
}
