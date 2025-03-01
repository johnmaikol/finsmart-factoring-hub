
import { useEffect, useRef, useState } from 'react';
import { cn } from "@/lib/utils";

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  hoverEffect?: 'lift' | 'glow' | 'none';
}

const AnimatedCard = ({
  children,
  className,
  delay = 0,
  hoverEffect = 'lift',
}: AnimatedCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Add a small delay before triggering the animation
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  const hoverEffects = {
    lift: "hover:-translate-y-2 hover:shadow-premium",
    glow: "hover:shadow-[0_0_20px_rgba(155,135,245,0.5)]",
    none: "",
  };

  return (
    <div
      ref={cardRef}
      className={cn(
        "bg-white rounded-2xl shadow-elegant p-6 transition-all duration-500 ease-out overflow-hidden",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        hoverEffect !== 'none' && "transform-gpu transition-all duration-300",
        isHovered && hoverEffects[hoverEffect],
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
  );
};

export default AnimatedCard;
