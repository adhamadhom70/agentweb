import { useEffect, useRef } from 'react';

const ParticleSystem = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d')!;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Particle[] = [];
    const particleCount = 40;

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      life: number;
      maxLife: number;

      constructor() {
        this.x = Math.random() * (canvas?.width || window.innerWidth);
        this.y = Math.random() * (canvas?.height || window.innerHeight);
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = Math.random() * 0.3 + 0.1;
        this.opacity = Math.random() * 0.5 + 0.3;
        this.life = 0;
        this.maxLife = Math.random() * 200 + 200;
      }

      update() {
        this.x += this.speedX;
        this.y -= this.speedY;
        this.life++;

        if (this.life > this.maxLife) {
          this.life = 0;
          this.y = (canvas?.height || window.innerHeight) + 10;
          this.x = Math.random() * (canvas?.width || window.innerWidth);
        }

        const lifeRatio = this.life / this.maxLife;
        this.opacity = Math.sin(lifeRatio * Math.PI) * (Math.random() * 0.5 + 0.3);
      }

      draw() {
        ctx.fillStyle = `rgba(212, 175, 55, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = `rgba(229, 193, 88, ${this.opacity * 0.6})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-20"
      style={{ top: 0, left: 0 }}
    />
  );
};

export default ParticleSystem;
