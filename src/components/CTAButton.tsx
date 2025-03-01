
import { useState } from 'react';
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  href?: string;
  disabled?: boolean;
}

const CTAButton = ({
  children,
  onClick,
  className,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  href,
  disabled = false,
}: CTAButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const baseStyles = "font-medium rounded-full inline-flex items-center justify-center transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-primary text-primary-foreground shadow-md hover:shadow-xl focus:ring-primary/50",
    secondary: "bg-secondary text-secondary-foreground shadow-md hover:shadow-xl focus:ring-secondary/50",
    outline: "bg-transparent border-2 border-primary text-foreground hover:bg-primary/5 focus:ring-primary/50",
    ghost: "bg-transparent text-foreground hover:bg-muted focus:ring-muted",
  };

  const sizes = {
    sm: "text-sm px-4 py-2",
    md: "text-base px-6 py-3",
    lg: "text-lg px-8 py-4",
  };

  const buttonContent = (
    <>
      {icon && iconPosition === 'left' && (
        <span className={cn("inline-block transition-transform duration-300", isHovered && "transform -translate-x-1")}>{icon}</span>
      )}
      <span className="mx-2">{children}</span>
      {icon && iconPosition === 'right' && (
        <span className={cn("inline-block transition-transform duration-300", isHovered && "transform translate-x-1")}>{icon}</span>
      )}
    </>
  );

  const buttonClassName = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <a
        href={href}
        className={buttonClassName}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={buttonClassName}
      disabled={disabled}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {buttonContent}
    </button>
  );
};

export default CTAButton;
