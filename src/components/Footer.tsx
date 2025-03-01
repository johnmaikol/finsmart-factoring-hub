
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: 'Para Empresas', path: '/clients' },
      { name: 'Para Inversionistas', path: '/investors' },
      { name: 'Tarifas y Comisiones', path: '#' },
      { name: 'Seguridad', path: '#' },
    ],
    company: [
      { name: 'Sobre Nosotros', path: '#' },
      { name: 'Blog', path: '#' },
      { name: 'Prensa', path: '#' },
      { name: 'Carreras', path: '#' },
    ],
    resources: [
      { name: 'Ayuda y Soporte', path: '#' },
      { name: 'FAQ', path: '#' },
      { name: 'Documentación', path: '#' },
      { name: 'Contacto', path: '#' },
    ],
    legal: [
      { name: 'Términos y Condiciones', path: '#' },
      { name: 'Política de Privacidad', path: '#' },
      { name: 'Compliance', path: '#' },
    ],
  };

  return (
    <footer className="bg-white border-t border-gray-100" id="contact">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Brand and Social */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center mb-6">
              <span className="text-2xl font-bold bg-gradient-to-r from-finsmart-600 to-finsmart-500 bg-clip-text text-transparent">
                Finsmart
              </span>
            </Link>
            <p className="text-gray-600 mb-6 max-w-sm">
              Transformando el factoring y la financiación de facturas a través de tecnología 
              e innovación para empresas e inversionistas.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-finsmart-600 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-finsmart-600 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-finsmart-600 transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-finsmart-600 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-4">Producto</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-600 hover:text-finsmart-600 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-4">Empresa</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-600 hover:text-finsmart-600 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-4 mt-8">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-600 hover:text-finsmart-600 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail size={18} className="text-finsmart-600 mt-0.5 flex-shrink-0" />
                <span className="ml-2 text-gray-600">info@finsmart.com</span>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="text-finsmart-600 mt-0.5 flex-shrink-0" />
                <span className="ml-2 text-gray-600">+52 (55) 1234-5678</span>
              </li>
            </ul>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-4 mt-8">Recursos</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-600 hover:text-finsmart-600 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Finsmart. Todos los derechos reservados.
          </p>
          <div className="mt-4 md:mt-0">
            <img 
              src="https://i.imgur.com/3zRWyAB.png" 
              alt="Secure Payments" 
              className="h-8" 
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
