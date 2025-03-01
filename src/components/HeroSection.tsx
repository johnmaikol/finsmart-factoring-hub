
import { useEffect, useState } from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import CTAButton from './CTAButton';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 right-0 h-full overflow-hidden -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-finsmart-600/10 rounded-full filter blur-3xl opacity-60 animate-soft-bounce" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-finsmart-500/10 rounded-full filter blur-3xl opacity-40 animate-soft-bounce" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Pill Badge */}
          <div 
            className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-finsmart-600/10 text-finsmart-600 mb-6 transition-all duration-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-finsmart-600 mr-2" />
            Financia tu crecimiento con factoring inteligente
          </div>

          {/* Headline */}
          <h1 
            className={`transition-all duration-700 delay-100 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="block">La plataforma de</span>
            <span className="bg-gradient-to-r from-finsmart-600 to-finsmart-500 bg-clip-text text-transparent">
              factoring e inversión
            </span>
            <span className="block">para el futuro de los negocios</span>
          </h1>

          {/* Subtitle */}
          <p 
            className={`mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-700 delay-200 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Finsmart conecta empresas que necesitan liquidez con inversionistas que buscan rendimientos atractivos, 
            a través de una plataforma digital segura y transparente.
          </p>

          {/* CTA Buttons */}
          <div 
            className={`mt-10 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 transition-all duration-700 delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <CTAButton
              size="lg"
              icon={<ArrowRight size={20} />}
              href="/clients"
            >
              Soy Empresa
            </CTAButton>
            <CTAButton
              variant="outline"
              size="lg"
              icon={<ArrowRight size={20} />}
              href="/investors"
            >
              Soy Inversionista
            </CTAButton>
          </div>

          {/* Optional Stats or Trust Badges */}
          <div 
            className={`mt-16 grid grid-cols-2 md:grid-cols-3 gap-6 text-center transition-all duration-700 delay-400 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="premium-card p-6">
              <p className="text-3xl font-bold text-finsmart-600">+1000</p>
              <p className="text-sm text-gray-600 mt-1">Empresas Financiadas</p>
            </div>
            <div className="premium-card p-6">
              <p className="text-3xl font-bold text-finsmart-600">98%</p>
              <p className="text-sm text-gray-600 mt-1">Satisfacción de Clientes</p>
            </div>
            <div className="premium-card p-6 col-span-2 md:col-span-1">
              <p className="text-3xl font-bold text-finsmart-600">$50M+</p>
              <p className="text-sm text-gray-600 mt-1">En Facturas Financiadas</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-80 hover:opacity-100 transition-opacity">
        <p className="text-sm font-medium mb-2">Descubre más</p>
        <ChevronRight size={24} className="transform rotate-90" />
      </div>
    </section>
  );
};

export default HeroSection;
