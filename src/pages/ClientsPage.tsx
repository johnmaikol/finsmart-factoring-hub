
import { useEffect } from 'react';
import { CheckCircle, FileText, DollarSign, ArrowRight, CreditCard, Briefcase, RefreshCw } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import AnimatedCard from '../components/AnimatedCard';
import CTAButton from '../components/CTAButton';

const ClientsPage = () => {
  useEffect(() => {
    // Scroll to top when the page loads
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      icon: <DollarSign size={24} />,
      title: "Liquidez inmediata",
      description: "Transforma tus facturas por cobrar en efectivo disponible en 24-48 horas"
    },
    {
      icon: <CreditCard size={24} />,
      title: "Sin deuda adicional",
      description: "No es un préstamo, por lo que no afecta tu capacidad de endeudamiento"
    },
    {
      icon: <Briefcase size={24} />,
      title: "Sin requisitos complejos",
      description: "Proceso sencillo sin garantías personales ni avales"
    },
    {
      icon: <RefreshCw size={24} />,
      title: "Flexibilidad total",
      description: "Decide qué facturas financiar y cuándo hacerlo según tus necesidades"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Registro y verificación",
      description: "Regístrate como empresa, completa tu perfil y sube la documentación requerida para verificación."
    },
    {
      number: "02",
      title: "Selecciona y carga facturas",
      description: "Elige qué facturas deseas convertir en efectivo y súbelas a nuestra plataforma."
    },
    {
      number: "03",
      title: "Recibe oferta y aprobación",
      description: "Te presentamos las condiciones de financiamiento según el perfil de tu factura."
    },
    {
      number: "04",
      title: "Recibe fondos en 24-48 horas",
      description: "Tras la aprobación, los fondos se transfieren a tu cuenta bancaria de forma segura."
    }
  ];

  const requirements = [
    "Empresa legalmente constituida en México",
    "Facturación electrónica (CFDI)",
    "Al menos 6 meses de operación",
    "Historial crediticio aceptable",
    "Documentación legal y fiscal en regla"
  ];

  const faqs = [
    {
      question: "¿Qué tipos de facturas puedo financiar?",
      answer: "Puedes financiar facturas emitidas a clientes corporativos y entidades gubernamentales con buena reputación crediticia. Las facturas deben estar dentro de su periodo de vencimiento y cumplir con los requisitos fiscales vigentes."
    },
    {
      question: "¿Cuál es la tasa que aplican al financiamiento?",
      answer: "Las tasas varían entre el 1.5% y el 3% mensual, dependiendo del perfil de riesgo del deudor, el monto de la factura y el plazo de vencimiento. Podrás ver una cotización exacta antes de aceptar la operación."
    },
    {
      question: "¿Qué sucede si mi cliente no paga la factura?",
      answer: "Ofrecemos dos modalidades: factoring con recurso y sin recurso. En el factoring con recurso, si tu cliente no paga, tú serías responsable del pago. En el factoring sin recurso, nosotros asumimos el riesgo de impago."
    },
    {
      question: "¿Cuánto tiempo demora la aprobación de una operación?",
      answer: "Una vez verificada tu empresa, las nuevas operaciones se aprueban generalmente en menos de 24 horas, y los fondos se depositan el mismo día o al día siguiente de la aprobación."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-finsmart-50 to-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-finsmart-600/10 text-finsmart-600 mb-6">
                Soluciones para Empresas
              </div>
              <h1 className="mb-6">
                <span className="block">Convierte tus facturas</span>
                <span className="bg-gradient-to-r from-finsmart-600 to-finsmart-500 bg-clip-text text-transparent">
                  en capital de trabajo
                </span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-lg">
                Obtén liquidez inmediata para tu empresa sin endeudarte. Nuestro proceso simple, 
                seguro y transparente te permite recibir efectivo por tus facturas por cobrar en menos de 48 horas.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <CTAButton 
                  size="lg"
                  icon={<ArrowRight size={20} />}
                  href="/register"
                >
                  Registrar mi empresa
                </CTAButton>
                <CTAButton 
                  variant="outline"
                  size="lg"
                  href="#calculator"
                >
                  Calcular mi financiamiento
                </CTAButton>
              </div>
            </div>
            <div className="relative animate-fade-in ml-auto">
              <AnimatedCard className="lg:max-w-md">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&ixlib=rb-4.0.3" 
                  alt="Finsmart para empresas" 
                  className="w-full h-auto rounded-lg object-cover"
                />
                <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-elegant p-4 border border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 text-green-600">
                      <CheckCircle size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Financiamiento aprobado</p>
                      <p className="text-lg font-semibold">$250,000 MXN</p>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-4">
              Beneficios de nuestro
              <span className="bg-gradient-to-r from-finsmart-600 to-finsmart-500 bg-clip-text text-transparent ml-2">
                factoring
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              Nuestra solución financiera está diseñada para adaptarse a tus necesidades, 
              brindándote el apoyo que tu empresa requiere para crecer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <AnimatedCard 
                key={index} 
                delay={index * 100}
                className="h-full"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-finsmart-50 text-finsmart-600 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-16 md:py-24 bg-finsmart-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-4">¿Cómo funciona?</h2>
            <p className="text-lg text-gray-600">
              Financiar tus facturas con Finsmart es un proceso sencillo, rápido y transparente. 
              Así es como trabajamos juntos:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <AnimatedCard 
                key={index}
                delay={index * 100}
                className="relative pl-16"
              >
                <div className="absolute top-0 left-0 w-12 h-12 flex items-center justify-center rounded-full bg-finsmart-600 text-white font-semibold">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Section Placeholder */}
      <section id="calculator" className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-finsmart-600/10 text-finsmart-600 mb-6">
                Simulador
              </div>
              <h2 className="mb-4">Calcula tu financiamiento</h2>
              <p className="text-lg text-gray-600 mb-6">
                Utiliza nuestra calculadora para estimar cuánto podrías recibir al financiar tus facturas 
                y conocer las condiciones aproximadas.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <div className="mt-1 flex-shrink-0">
                    <FileText className="text-finsmart-600" size={20} />
                  </div>
                  <div className="ml-3">
                    <h4 className="font-medium">Facturas de cualquier monto</h4>
                    <p className="text-gray-600 text-sm">Desde $10,000 hasta varios millones de pesos</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 flex-shrink-0">
                    <CheckCircle className="text-finsmart-600" size={20} />
                  </div>
                  <div className="ml-3">
                    <h4 className="font-medium">Respuesta inmediata</h4>
                    <p className="text-gray-600 text-sm">Cotización transparente en segundos</p>
                  </div>
                </div>
              </div>
              <CTAButton href="/register">
                Comenzar ahora
              </CTAButton>
            </div>

            <div>
              <AnimatedCard className="bg-white rounded-xl overflow-hidden shadow-premium">
                <div className="bg-gradient-to-r from-finsmart-700 to-finsmart-500 text-white p-6">
                  <h3 className="text-xl font-semibold mb-1">Simulador de Factoring</h3>
                  <p className="text-white/80 text-sm">Calcula cuánto puedes recibir por tus facturas</p>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Monto de la factura (MXN)
                      </label>
                      <input
                        type="text"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-finsmart-600 focus:border-transparent"
                        placeholder="$100,000"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Plazo de la factura (días)
                      </label>
                      <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-finsmart-600 focus:border-transparent">
                        <option>30 días</option>
                        <option>60 días</option>
                        <option>90 días</option>
                        <option>120 días</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Tipo de empresa deudora
                      </label>
                      <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-finsmart-600 focus:border-transparent">
                        <option>Empresa AAA</option>
                        <option>Gran Empresa</option>
                        <option>Empresa Mediana</option>
                        <option>Gobierno</option>
                      </select>
                    </div>
                    <button className="w-full bg-finsmart-600 text-white py-3 rounded-lg font-medium hover:bg-finsmart-500 transition-colors mt-4">
                      Calcular financiamiento
                    </button>
                  </div>

                  <div className="mt-6 p-4 bg-finsmart-50 rounded-lg border border-finsmart-100">
                    <h4 className="font-medium mb-3">Resultados estimados:</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Anticipo inmediato:</span>
                        <span className="font-semibold">$95,000 MXN</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Comisión:</span>
                        <span className="font-semibold">$2,500 MXN</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Tasa efectiva:</span>
                        <span className="font-semibold">2.5%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements and FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Requirements */}
            <div>
              <h2 className="mb-6">Requisitos</h2>
              <p className="text-gray-600 mb-8">
                Para poder acceder a nuestros servicios de factoring, tu empresa necesita cumplir 
                con los siguientes requisitos básicos:
              </p>
              <ul className="space-y-4">
                {requirements.map((req, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="text-finsmart-600" size={20} />
                    </div>
                    <p className="ml-3 text-gray-800">{req}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <CTAButton 
                  href="/register"
                  icon={<ArrowRight size={18} />}
                >
                  Registrar mi empresa
                </CTAButton>
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="mb-6">Preguntas Frecuentes</h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <AnimatedCard 
                    key={index}
                    delay={index * 100}
                    className="bg-white"
                  >
                    <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </AnimatedCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-finsmart-700 to-finsmart-500 text-white">
        <div className="container-custom text-center">
          <h2 className="text-white mb-6 max-w-3xl mx-auto">
            ¿Listo para impulsar el crecimiento de tu empresa?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Únete a las más de 1,000 empresas que ya están financiando su crecimiento con Finsmart.
          </p>
          <CTAButton 
            href="/register"
            className="bg-white text-finsmart-600 hover:bg-gray-100"
            size="lg"
          >
            Comenzar ahora
          </CTAButton>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ClientsPage;
