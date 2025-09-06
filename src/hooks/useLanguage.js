import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    // Get saved language or detect browser language
    const savedLanguage = localStorage.getItem('preferredLanguage');
    const browserLanguage = navigator.language.split('-')[0];
    const initialLanguage = savedLanguage || (browserLanguage === 'es' ? 'es' : 'en');
    setLanguage(initialLanguage);
  }, []);

  const switchLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('preferredLanguage', lang);
    document.documentElement.lang = lang;
  };

  const translations = {
    en: {
      nav: {
        features: "Features",
        howItWorks: "How It Works",
        useCases: "Use Cases",
        testimonials: "Testimonials",
        faq: "FAQ",
        contact: "Contact Us"
      },
      hero: {
        title: "Transform Your Business with AI-Powered WhatsApp Receptionist",
        subtitle: "24/7 automated customer service, reservations, and support through WhatsApp",
        cta: "Get Started",
        stats: {
          businesses: {
            number: "100+",
            label: "BUSINESSES USING AI BOT"
          },
          availability: {
            number: "24/7",
            label: "AVAILABILITY"
          },
          languages: {
            number: "2+",
            label: "LANGUAGES"
          }
        }
      },
      features: {
        title: "Why Choose AtiendeBot?",
        availability: {
          title: "24/7 Availability",
          description: "Never miss a customer inquiry, even outside business hours"
        },
        automation: {
          title: "Smart Automation",
          description: "Handle reservations, orders, and FAQs automatically"
        },
        conversations: {
          title: "Natural Conversations",
          description: "AI-powered responses that feel human and professional"
        },
        growth: {
          title: "Business Growth",
          description: "Increase customer satisfaction and reduce operational costs"
        }
      },
      howItWorks: {
        title: "How It Works",
        setup: {
          title: "Setup",
          description: "We integrate our bot with your WhatsApp Business account"
        },
        customize: {
          title: "Customize",
          description: "We tailor the bot to your business needs and services"
        },
        launch: {
          title: "Launch",
          description: "Start handling customer inquiries automatically"
        }
      },
      useCases: {
        title: "Perfect For Your Business",
        restaurants: {
          title: "Restaurants",
          description: "Handle reservations, take orders, and answer menu questions"
        },
        hotels: {
          title: "Hotels",
          description: "Manage bookings, room service, and guest inquiries"
        },
        retail: {
          title: "Retail",
          description: "Process orders, check inventory, and provide product information"
        },
        services: {
          title: "Service Businesses",
          description: "Schedule appointments and answer service-related questions"
        }
      },
      customerJourney: {
        title: "Delight Customers Along the WhatsApp Journey",
        step1: {
          title: "Customer Inquiry",
          description: "Customer sends a message via WhatsApp"
        },
        step2: {
          title: "AI Response", 
          description: "AtiendeBot provides instant, helpful response"
        },
        step3: {
          title: "Happy Customer",
          description: "Customer gets the help they need, 24/7"
        }
      },
      testimonials: {
        title: "What Our Clients Say"
      },
      faq: {
        title: "Frequently Asked Questions",
        questions: [
          {
            question: "How quickly can AtiendeBot be set up?",
            answer: "AtiendeBot can be set up and running within 24-48 hours. Our team handles the entire integration process, including WhatsApp Business API setup and bot configuration."
          },
          {
            question: "Can the bot handle multiple languages?",
            answer: "Yes! AtiendeBot supports multiple languages including English, Spanish, Portuguese, and more. You can configure different languages for different customer segments."
          },
          {
            question: "What happens when the bot can't answer a question?",
            answer: "When AtiendeBot encounters a question it can't handle, it automatically escalates the conversation to a human agent. You'll receive a notification to take over the conversation."
          },
          {
            question: "Is there a contract or can I cancel anytime?",
            answer: "No long-term contracts required! You can cancel your subscription at any time. We also offer a 30-day money-back guarantee if you're not satisfied."
          }
        ]
      },
      contact: {
        title: "Ready to Transform Your Customer Service?",
        subtitle: "Contact us to learn more about our WhatsApp AI Receptionist solution",
        form: {
          name: "Full Name *",
          email: "Email Address *",
          phone: "Phone Number",
          business: "Business Type",
          businessPlaceholder: "Select your business type",
          businessOptions: {
            restaurant: "Restaurant",
            hotel: "Hotel", 
            retail: "Retail",
            services: "Services",
            other: "Other"
          },
          message: "Message *",
          messagePlaceholder: "Tell us about your business and how we can help...",
          submit: "Send Message"
        }
      },
      secondaryCta: {
        title: "Ready to Transform Your Business?",
        subtitle: "Join 100+ businesses already using AtiendeBot to automate their customer support",
        button: "Start Free Trial"
      },
      footer: {
        tagline: "Your 24/7 AI Receptionist",
        contact: "Contact",
        rights: "All rights reserved."
      }
    },
    es: {
      nav: {
        features: "Características",
        howItWorks: "Cómo Funciona",
        useCases: "Casos de Uso",
        testimonials: "Testimonios",
        faq: "Preguntas Frecuentes",
        contact: "Contáctanos"
      },
      hero: {
        title: "Transforma tu Negocio con un Recepcionista de WhatsApp con IA",
        subtitle: "Servicio al cliente, reservas y soporte automatizado 24/7 a través de WhatsApp",
        cta: "Comenzar",
        stats: {
          businesses: {
            number: "100+",
            label: "EMPRESAS USANDO BOT IA"
          },
          availability: {
            number: "24/7",
            label: "DISPONIBILIDAD"
          },
          languages: {
            number: "2+",
            label: "IDIOMAS"
          }
        }
      },
      features: {
        title: "¿Por qué elegir AtiendeBot?",
        availability: {
          title: "Disponibilidad 24/7",
          description: "Nunca pierdas una consulta de cliente, incluso fuera del horario comercial"
        },
        automation: {
          title: "Automatización Inteligente",
          description: "Gestiona reservas, pedidos y preguntas frecuentes automáticamente"
        },
        conversations: {
          title: "Conversaciones Naturales",
          description: "Respuestas con IA que se sienten humanas y profesionales"
        },
        growth: {
          title: "Crecimiento Empresarial",
          description: "Aumenta la satisfacción del cliente y reduce los costos operativos"
        }
      },
      howItWorks: {
        title: "Cómo Funciona",
        setup: {
          title: "Configuración",
          description: "Integramos nuestro bot con tu cuenta de WhatsApp Business"
        },
        customize: {
          title: "Personalización",
          description: "Adaptamos el bot a las necesidades y servicios de tu negocio"
        },
        launch: {
          title: "Lanzamiento",
          description: "Comienza a manejar consultas de clientes automáticamente"
        }
      },
      useCases: {
        title: "Perfecto para tu Negocio",
        restaurants: {
          title: "Restaurantes",
          description: "Gestiona reservas, toma pedidos y responde preguntas sobre el menú"
        },
        hotels: {
          title: "Hoteles",
          description: "Administra reservas, servicio a la habitación y consultas de huéspedes"
        },
        retail: {
          title: "Comercio Minorista",
          description: "Procesa pedidos, verifica inventario y proporciona información de productos"
        },
        services: {
          title: "Negocios de Servicios",
          description: "Programa citas y responde preguntas relacionadas con servicios"
        }
      },
      customerJourney: {
        title: "Encanta a los Clientes a lo Largo del Viaje de WhatsApp",
        step1: {
          title: "Consulta del Cliente",
          description: "El cliente envía un mensaje a través de WhatsApp"
        },
        step2: {
          title: "Respuesta de IA",
          description: "AtiendeBot proporciona una respuesta instantánea y útil"
        },
        step3: {
          title: "Cliente Satisfecho",
          description: "El cliente obtiene la ayuda que necesita, 24/7"
        }
      },
      testimonials: {
        title: "Lo que Dicen Nuestros Clientes"
      },
      faq: {
        title: "Preguntas Frecuentes",
        questions: [
          {
            question: "¿Qué tan rápido se puede configurar AtiendeBot?",
            answer: "AtiendeBot puede configurarse y estar funcionando en 24-48 horas. Nuestro equipo maneja todo el proceso de integración, incluyendo la configuración de la API de WhatsApp Business y la configuración del bot."
          },
          {
            question: "¿Puede el bot manejar múltiples idiomas?",
            answer: "¡Sí! AtiendeBot soporta múltiples idiomas incluyendo inglés, español, portugués y más. Puedes configurar diferentes idiomas para diferentes segmentos de clientes."
          },
          {
            question: "¿Qué pasa cuando el bot no puede responder una pregunta?",
            answer: "Cuando AtiendeBot encuentra una pregunta que no puede manejar, automáticamente escala la conversación a un agente humano. Recibirás una notificación para tomar el control de la conversación."
          },
          {
            question: "¿Hay contrato o puedo cancelar en cualquier momento?",
            answer: "¡No se requieren contratos a largo plazo! Puedes cancelar tu suscripción en cualquier momento. También ofrecemos una garantía de devolución de dinero de 30 días si no estás satisfecho."
          }
        ]
      },
      contact: {
        title: "¿Listo para Transformar tu Atención al Cliente?",
        subtitle: "Contáctanos para conocer más sobre nuestra solución de Recepcionista IA para WhatsApp",
        form: {
          name: "Nombre Completo *",
          email: "Dirección de Email *",
          phone: "Número de Teléfono",
          business: "Tipo de Negocio",
          businessPlaceholder: "Selecciona tu tipo de negocio",
          businessOptions: {
            restaurant: "Restaurante",
            hotel: "Hotel",
            retail: "Comercio Minorista", 
            services: "Servicios",
            other: "Otro"
          },
          message: "Mensaje *",
          messagePlaceholder: "Cuéntanos sobre tu negocio y cómo podemos ayudarte...",
          submit: "Enviar Mensaje"
        }
      },
      secondaryCta: {
        title: "¿Listo para Transformar tu Negocio?",
        subtitle: "Únete a más de 100 empresas que ya usan AtiendeBot para automatizar su atención al cliente",
        button: "Comenzar Prueba Gratuita"
      },
      footer: {
        tagline: "Tu Recepcionista IA 24/7",
        contact: "Contacto",
        rights: "Todos los derechos reservados."
      }
    }
  };

  const t = translations[language] || translations.en;

  return (
    <LanguageContext.Provider value={{ language, switchLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
