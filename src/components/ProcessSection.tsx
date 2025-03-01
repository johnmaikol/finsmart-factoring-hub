
import { useState, useEffect } from 'react';
import { FileText, CreditCard, CheckCircle, Users, Clock, Wallet } from 'lucide-react';

const ProcessSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const tabs = [
    { title: "Para Empresas", id: "client" },
    { title: "Para Inversionistas", id: "investor" }
  ];

  const clientProcess = [
    {
      icon: <FileText size={28} />,
      title: "Registro y verificación",
      description: "Crea tu cuenta, sube la documentación básica de tu empresa y completa la verificación en minutos."
    },
    {
      icon: <CreditCard size={28} />,
      title: "Carga tus facturas",
      description: "Selecciona las facturas que deseas financiar y súbelas a la plataforma para su validación."
    },
    {
      icon: <CheckCircle size={28} />,
      title: "Aprobación rápida",
      description: "Nuestro sistema analiza y aprueba tus facturas, asignándoles una calificación de riesgo."
    },
    {
      icon: <Clock size={28} />,
      title: "Recibe financiamiento",
      description: "Recibe los fondos en tu cuenta en 24-48 horas tras la aprobación."
    }
  ];

  const investorProcess = [
    {
      icon: <Users size={28} />,
      title: "Registro como inversionista",
      description: "Crea tu cuenta, verifica tu identidad y selecciona tu estrategia de inversión."
    },
    {
      icon: <CreditCard size={28} />,
      title: "Fondea tu cuenta",
      description: "Agrega fondos a tu cuenta de Finsmart mediante transferencia o depósito."
    },
    {
      icon: <CheckCircle size={28} />,
      title: "Selecciona oportunidades",
      description: "Explora facturas disponibles filtradas por riesgo, plazo y rendimiento esperado."
    },
    {
      icon: <Wallet size={28} />,
      title: "Administra tu portafolio",
      description: "Monitorea tus inversiones y cobra tus rendimientos al vencimiento de las facturas."
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

    const section = document.getElementById('process');
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
    <section id="process" className="premium-section bg-finsmart-50">
      <div className="container-custom">
        <div className="section-heading">
          <h2>¿Cómo funciona?</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Finsmart facilita el proceso de factoring para empresas e inversionistas con un sistema 
            transparente, seguro y eficiente.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mt-8 mb-12">
          <div className="inline-flex p-1 bg-white rounded-full shadow-sm">
            {tabs.map((tab, idx) => (
              <button
                key={tab.id}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === idx
                    ? "bg-finsmart-600 text-white shadow-md"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                onClick={() => setActiveTab(idx)}
              >
                {tab.title}
              </button>
            ))}
          </div>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connector Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-12 relative">
            {(activeTab === 0 ? clientProcess : investorProcess).map((step, idx) => (
              <div 
                key={idx}
                className={`flex flex-col md:flex-row items-center transition-all duration-700 delay-${150 * idx} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <div className={`md:w-1/2 ${idx % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:order-last md:pl-16'}`}>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                <div className="flex items-center justify-center my-4 md:my-0 z-10">
                  <div className="bg-white rounded-full p-4 shadow-elegant text-finsmart-600 border-2 border-finsmart-600/20">
                    {step.icon}
                  </div>
                </div>
                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
