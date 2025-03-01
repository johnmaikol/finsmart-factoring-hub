
import { useState, useEffect } from 'react';
import { TrendingUp, Shield, BarChart3, ArrowRight } from 'lucide-react';
import CTAButton from './CTAButton';
import AnimatedCard from './AnimatedCard';

const InvestorSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const investmentOptions = [
    {
      title: "Plan Conservador",
      return: "8-10%",
      risk: "Bajo",
      minInvestment: "$25,000",
      liquidity: "45 días",
      color: "bg-blue-500"
    },
    {
      title: "Plan Balanceado",
      return: "11-14%",
      risk: "Medio",
      minInvestment: "$50,000",
      liquidity: "30 días",
      color: "bg-finsmart-600",
      featured: true
    },
    {
      title: "Plan Crecimiento",
      return: "15-18%",
      risk: "Medio-Alto",
      minInvestment: "$100,000",
      liquidity: "60 días",
      color: "bg-purple-700"
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp size={24} />,
      title: "Rendimientos Atractivos",
      description: "Obtén retornos superiores a instrumentos tradicionales con menor volatilidad que la bolsa."
    },
    {
      icon: <Shield size={24} />,
      title: "Inversión Respaldada",
      description: "Todas las operaciones están respaldadas por facturas comerciales verificadas y validadas."
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Diversificación Inteligente",
      description: "Distribuye tu inversión en múltiples facturas de diferentes sectores e industrias."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('investor-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="investor-section" className="premium-section">
      <div className="container-custom">
        <div className="section-heading">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-finsmart-600/10 text-finsmart-600 mb-6">
            Para Inversionistas
          </div>
          <h2>
            Invierte en{" "}
            <span className="bg-gradient-to-r from-finsmart-600 to-finsmart-500 bg-clip-text text-transparent">
              facturas comerciales
            </span>{" "}
            con rendimientos superiores
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Diversifica tu portafolio con una alternativa de inversión estable, rentable y de corto plazo. 
            Financiamos facturas comerciales de empresas verificadas.
          </p>
        </div>

        {/* Investment Plans */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {investmentOptions.map((option, index) => (
            <AnimatedCard 
              key={index} 
              delay={100 + (index * 150)} 
              className={`${option.featured ? 'border-2 border-finsmart-600 transform-gpu md:-translate-y-4' : ''} relative h-full`}
              hoverEffect="glow"
            >
              {option.featured && (
                <div className="absolute -top-4 inset-x-0 flex justify-center">
                  <span className="bg-finsmart-600 text-white text-xs font-semibold py-1 px-3 rounded-full">
                    Más Popular
                  </span>
                </div>
              )}
              <div className={`w-full h-2 ${option.color} rounded-t-xl -mt-6`}></div>
              <h3 className="text-xl font-semibold mb-4">{option.title}</h3>
              <div className="mb-6 pb-6 border-b border-gray-100">
                <span className="text-3xl font-bold">{option.return}</span>
                <span className="text-gray-600 ml-1">anual</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex justify-between">
                  <span className="text-gray-600">Riesgo:</span>
                  <span className="font-medium">{option.risk}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Inversión mínima:</span>
                  <span className="font-medium">{option.minInvestment}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Liquidez:</span>
                  <span className="font-medium">{option.liquidity}</span>
                </li>
              </ul>
              <CTAButton 
                variant={option.featured ? "primary" : "outline"} 
                className="w-full justify-center"
                href="/investors"
              >
                Comenzar ahora
              </CTAButton>
            </AnimatedCard>
          ))}
        </div>

        {/* Benefits */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className={`transition-all duration-700 delay-${200 + (index * 150)} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="bg-finsmart-50 p-3 rounded-xl w-fit mb-4">
                <div className="text-finsmart-600">{benefit.icon}</div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <CTAButton 
            href="/investors" 
            variant="secondary"
            icon={<ArrowRight size={18} />}
          >
            Conoce más sobre invertir
          </CTAButton>
        </div>
      </div>
    </section>
  );
};

export default InvestorSection;
