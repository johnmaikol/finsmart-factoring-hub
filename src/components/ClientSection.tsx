
import { useState, useEffect } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import CTAButton from './CTAButton';
import AnimatedCard from './AnimatedCard';

const ClientSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const tabs = [
    { label: "Para PyMEs", id: "pymes" },
    { label: "Para Corporaciones", id: "corporations" },
    { label: "Para Servicios", id: "services" }
  ];

  const benefits = [
    {
      title: "Liquidez inmediata",
      description: "Convierte tus facturas por cobrar en efectivo en 24-48 horas, sin afectar tu línea de crédito bancario."
    },
    {
      title: "Sin garantías adicionales",
      description: "Solo necesitas facturas válidas, sin necesidad de hipotecas o avales personales."
    },
    {
      title: "Proceso 100% digital",
      description: "Carga tus facturas desde cualquier dispositivo y firma electrónicamente."
    },
    {
      title: "Mejora tu flujo de caja",
      description: "Planifica mejor tus pagos y aprovecha oportunidades de crecimiento."
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

    const section = document.getElementById('client-section');
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
    <section id="client-section" className="premium-section bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className={`transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-finsmart-600/10 text-finsmart-600 mb-6">
              Para Empresas
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Financia tu empresa con el{" "}
              <span className="bg-gradient-to-r from-finsmart-600 to-finsmart-500 bg-clip-text text-transparent">
                poder de tus facturas
              </span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Obtén liquidez inmediata vendiendo tus facturas por cobrar a través de nuestra plataforma, 
              evitando largos plazos de pago y manteniendo una relación comercial óptima con tus clientes.
            </p>

            {/* Tabs Navigation */}
            <div className="flex space-x-2 mb-8 border-b border-gray-200">
              {tabs.map((tab, idx) => (
                <button
                  key={tab.id}
                  className={`px-4 py-2 font-medium text-sm transition-all duration-200 border-b-2 ${
                    activeTab === idx
                      ? "border-finsmart-600 text-finsmart-600"
                      : "border-transparent text-gray-500 hover:text-gray-900"
                  }`}
                  onClick={() => setActiveTab(idx)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Benefits List */}
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="text-finsmart-600" size={20} />
                  </div>
                  <div className="ml-3">
                    <h4 className="font-medium">{benefit.title}</h4>
                    <p className="text-gray-600 text-sm mt-1">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <CTAButton 
              href="/clients"
              icon={<ArrowRight size={18} />}
            >
              Registra tu empresa
            </CTAButton>
          </div>

          {/* Right Content - Client Dashboard Preview */}
          <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <AnimatedCard className="relative bg-white rounded-xl overflow-hidden shadow-premium p-0">
              <div className="bg-gradient-to-r from-finsmart-700 to-finsmart-500 text-white px-6 py-4">
                <h3 className="text-lg font-medium">Simulador</h3>
                <p className="text-white/70 text-sm">Simulador de factoring</p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="premium-card p-4">
                    <h4 className="text-sm font-medium text-gray-500 mb-1">Monto de la factura</h4>
                    <p className="text-2xl font-semibold">S/100,000 PEN</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="premium-card p-4">
                      <h4 className="text-sm font-medium text-gray-500 mb-1">Plazo</h4>
                      <p className="text-xl font-semibold">30 días</p>
                    </div>
                    <div className="premium-card p-4">
                      <h4 className="text-sm font-medium text-gray-500 mb-1">Tasa</h4>
                      <p className="text-xl font-semibold">2.5%</p>
                    </div>
                  </div>
                  <div className="premium-card bg-finsmart-50 border border-finsmart-100 p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-sm font-medium text-gray-500">Desembolso</h4>
                      <span className="text-xl font-semibold text-finsmart-600">S/95,000 PEN</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <h4 className="text-sm font-medium text-gray-500">Comisión</h4>
                      <span className="text-lg font-medium text-finsmart-600">S/2,500 PEN</span>
                    </div>
                  </div>
                  <button className="w-full bg-finsmart-600 text-white py-3 rounded-lg font-medium hover:bg-finsmart-500 transition-colors">
                    Solicitar financiamiento
                  </button>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
