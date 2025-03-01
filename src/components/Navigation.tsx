
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import CTAButton from './CTAButton';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Empresas', path: '/clients' },
    { name: 'Inversionistas', path: '/investors' },
    { name: 'Proceso', path: '#process' },
    { name: 'Contacto', path: '#contact' }
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when navigating
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-white/90 dark:bg-finsmart-900/90 backdrop-blur-md shadow-sm' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="container-custom mx-auto">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center"
          >
            <span className="text-2xl font-bold bg-gradient-to-r from-finsmart-600 to-finsmart-500 bg-clip-text text-transparent">
              Finsmart
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  location.pathname === link.path
                    ? 'text-finsmart-600 font-semibold'
                    : 'text-gray-600 hover:text-finsmart-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <CTAButton 
              variant="outline" 
              size="sm" 
              href="/login"
            >
              Iniciar sesión
            </CTAButton>
            <CTAButton 
              size="sm" 
              href="/register"
              icon={<ChevronDown size={18} />}
            >
              Registrarse
            </CTAButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-finsmart-600 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-6 animate-fade-in">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-3 rounded-lg text-base font-medium ${
                    location.pathname === link.path
                      ? 'text-finsmart-600 bg-finsmart-50'
                      : 'text-gray-600 hover:text-finsmart-600 hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-3 pt-4 mt-2 border-t border-gray-100">
                <CTAButton 
                  variant="outline"
                  href="/login"
                  className="w-full justify-center"
                >
                  Iniciar sesión
                </CTAButton>
                <CTAButton 
                  href="/register"
                  className="w-full justify-center"
                  icon={<ChevronDown size={18} />}
                >
                  Registrarse
                </CTAButton>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;
