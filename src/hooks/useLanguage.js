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
        customerJourney: "Customer Journey",
        testimonials: "Testimonials",
        faq: "FAQ",
        contact: "Contact Us"
      },
      hero: {
        title: "Transform Your Business with AI-Powered WhatsApp Receptionist",
        subtitle: "24/7 automated customer service, reservations, and support through WhatsApp",
        cta: "Get Started",
        seeHowItWorks: "See How It Works",
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
            answer: "Yes! AtiendeBot handles Spanish and English by default, but can be configured for other languages upon request. We can set up different languages for different customer segments as needed."
          },
          {
            question: "How customizable is AtiendeBot for my business?",
            answer: "AtiendeBot is highly customizable to match your business needs. We can configure the bot's responses, integrate with your existing systems, and tailor the conversation flow to your specific requirements and industry."
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
          submit: "Send Message",
          submitting: "Sending...",
          successMessage: "Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.",
          errorMessage: "Sorry, there was an error sending your message. Please try again or contact us directly at atiendebot@gmail.com"
        }
      },
      secondaryCta: {
        title: "Ready to Transform Your Business?",
        subtitle: "Join 100+ businesses already using AtiendeBot to automate their customer support",
        button: "Start Free Trial"
      },
      footer: {
        tagline: "Your 24/7 AI Receptionist",
        contact: "Contact Us",
        navigation: "Navigation",
        legal: "Legal",
        terms: "Terms and Conditions",
        privacy: "Privacy Policy",
        cookies: "Cookie Policy",
        rights: "All rights reserved."
      },
      cookies: {
        banner: {
          title: "We use cookies",
          description: "We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking 'Accept All', you consent to our use of cookies.",
          accept: "Accept All",
          decline: "Decline All",
          preferences: "Cookie Preferences",
          learnMore: "Learn more about our cookies"
        },
        preferences: {
          title: "Cookie Preferences",
          description: "Manage your cookie preferences. You can enable or disable different types of cookies below. Note that some cookies are essential for the website to function properly.",
          savePreferences: "Save Preferences",
          declineAll: "Decline All"
        },
        categories: {
          essential: {
            title: "Essential Cookies",
            description: "These cookies are necessary for the website to function and cannot be switched off. They are usually only set in response to actions made by you which amount to a request for services."
          },
          analytics: {
            title: "Analytics Cookies",
            description: "These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular."
          },
          marketing: {
            title: "Marketing Cookies",
            description: "These cookies may be set through our site by our advertising partners to build a profile of your interests and show you relevant adverts on other sites."
          },
          functional: {
            title: "Functional Cookies",
            description: "These cookies enable the website to provide enhanced functionality and personalisation. They may be set by us or by third party providers whose services we have added to our pages."
          }
        },
        alwaysActive: "Always Active"
      }
    },
    es: {
      nav: {
        features: "Características",
        howItWorks: "Cómo Funciona",
        useCases: "Casos de Uso",
        customerJourney: "Viaje del Cliente",
        testimonials: "Testimonios",
        faq: "Preguntas Frecuentes",
        contact: "Contáctanos"
      },
      hero: {
        title: "Transforma tu Negocio con un Recepcionista de WhatsApp con IA",
        subtitle: "Servicio al cliente, reservas y soporte automatizado 24/7 a través de WhatsApp",
        cta: "Comenzar",
        seeHowItWorks: "Ver Cómo Funciona",
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
            answer: "¡Sí! AtiendeBot maneja español e inglés por defecto, pero puede configurarse para otros idiomas bajo solicitud. Podemos configurar diferentes idiomas para diferentes segmentos de clientes según sea necesario."
          },
          {
            question: "¿Qué tan personalizable es AtiendeBot para mi negocio?",
            answer: "AtiendeBot es altamente personalizable para adaptarse a las necesidades de tu negocio. Podemos configurar las respuestas del bot, integrarlo con tus sistemas existentes y adaptar el flujo de conversación a tus requisitos específicos e industria."
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
          submit: "Enviar Mensaje",
          submitting: "Enviando...",
          successMessage: "¡Gracias! Tu mensaje ha sido enviado exitosamente. Te responderemos dentro de 24 horas.",
          errorMessage: "Lo sentimos, hubo un error al enviar tu mensaje. Por favor intenta de nuevo o contáctanos directamente a atiendebot@gmail.com"
        }
      },
      secondaryCta: {
        title: "¿Listo para Transformar tu Negocio?",
        subtitle: "Únete a más de 100 empresas que ya usan AtiendeBot para automatizar su atención al cliente",
        button: "Comenzar Prueba Gratuita"
      },
      footer: {
        tagline: "Tu Recepcionista IA 24/7",
        contact: "Contáctanos",
        navigation: "Navegación",
        legal: "Legal",
        terms: "Términos y Condiciones",
        privacy: "Política de Privacidad",
        cookies: "Política de Cookies",
        rights: "Todos los derechos reservados."
      },
      cookies: {
        banner: {
          title: "Utilizamos cookies",
          description: "Utilizamos cookies para mejorar tu experiencia de navegación, ofrecer contenido personalizado y analizar nuestro tráfico. Al hacer clic en 'Aceptar Todo', consientes nuestro uso de cookies.",
          accept: "Aceptar Todo",
          decline: "Rechazar Todo",
          preferences: "Preferencias de Cookies",
          learnMore: "Aprende más sobre nuestras cookies"
        },
        preferences: {
          title: "Preferencias de Cookies",
          description: "Gestiona tus preferencias de cookies. Puedes habilitar o deshabilitar diferentes tipos de cookies a continuación. Ten en cuenta que algunas cookies son esenciales para el funcionamiento del sitio web.",
          savePreferences: "Guardar Preferencias",
          declineAll: "Rechazar Todo"
        },
        categories: {
          essential: {
            title: "Cookies Esenciales",
            description: "Estas cookies son necesarias para el funcionamiento del sitio web y no se pueden desactivar. Normalmente solo se establecen en respuesta a acciones realizadas por ti que equivalen a una solicitud de servicios."
          },
          analytics: {
            title: "Cookies de Análisis",
            description: "Estas cookies nos permiten contar las visitas y las fuentes de tráfico para que podamos medir y mejorar el rendimiento de nuestro sitio. Nos ayudan a saber qué páginas son las más y menos populares."
          },
          marketing: {
            title: "Cookies de Marketing",
            description: "Estas cookies pueden ser establecidas en nuestro sitio por nuestros socios publicitarios para crear un perfil de tus intereses y mostrarte anuncios relevantes en otros sitios."
          },
          functional: {
            title: "Cookies Funcionales",
            description: "Estas cookies permiten que el sitio web proporcione funcionalidad mejorada y personalización. Pueden ser establecidas por nosotros o por proveedores de terceros cuyos servicios hemos añadido a nuestras páginas."
          }
        },
        alwaysActive: "Siempre Activo"
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
