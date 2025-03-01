
import { ArrowRight, Shield, Clock, BarChart4, RefreshCw, CheckCircle2, Wallet } from 'lucide-react';
import AnimatedCard from './AnimatedCard';
import CTAButton from './CTAButton';

const FeatureSection = () => {
  const features = [
    {
      icon: <Clock className="text-finsmart-600" size={24} />,
      title: "Aprobación Rápida",
      description: "Obtenga financiamiento en 24-48 horas, sin esperas ni complicaciones burocráticas."
    },
    {
      icon: <Shield className="text-finsmart-600" size={24} />,
      title: "Seguridad Garantizada",
      description: "Plataforma con la más alta seguridad para proteger sus datos y transacciones."
    },
    {
      icon: <BarChart4 className="text-finsmart-600" size={24} />,
      title: "Análisis Inteligente",
      description: "Algoritmos avanzados que optimizan los rendimientos y minimizan los riesgos."
    },
    {
      icon: <RefreshCw className="text-finsmart-600" size={24} />,
      title: "Proceso Transparente",
      description: "Seguimiento en tiempo real de todas las operaciones sin costos ocultos."
    },
    {
      icon: <CheckCircle2 className="text-finsmart-600" size={24} />,
      title: "Validación Automática",
      description: "Verificación de facturas y contrapartes mediante tecnología blockchain."
    },
    {
      icon: <Wallet className="text-finsmart-600" size={24} />,
      title: "Retiros Flexibles",
      description: "Acceda a sus fondos en cualquier momento con múltiples opciones de retiro."
    }
  ];

  return (
    <section className="premium-section relative" id="features">
      <div className="container-custom">
        <div className="section-heading">
          <h2>Características Principales</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Nuestra plataforma combina tecnología de punta con procesos financieros optimizados para ofrecer la mejor experiencia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {features.map((feature, index) => (
            <AnimatedCard 
              key={index} 
              className="h-full" 
              delay={100 + (index * 100)}
              hoverEffect="lift"
            >
              <div className="p-2 rounded-full bg-finsmart-600/10 w-fit mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </AnimatedCard>
          ))}
        </div>

        <div className="mt-16 text-center">
          <CTAButton 
            href="#process" 
            variant="secondary"
            icon={<ArrowRight size={18} />}
          >
            Conoce nuestro proceso
          </CTAButton>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
