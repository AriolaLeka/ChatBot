const translations = {
    en: {
        nav: {
            features: "Features",
            howItWorks: "How It Works",
            useCases: "Use Cases",
            contact: "Contact Us"
        },
        hero: {
            title: "Transform Your Business with AI-Powered WhatsApp Receptionist",
            subtitle: "24/7 automated customer service, reservations, and support through WhatsApp",
            cta: "Get Started"
        },
        features: {
            title: "Why Choose Our WhatsApp Bot?",
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
        contact: {
            title: "Ready to Transform Your Business?",
            subtitle: "Contact us to learn more about our WhatsApp AI Receptionist solution"
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
            contact: "Contáctanos"
        },
        hero: {
            title: "Transforma tu Negocio con un Recepcionista de WhatsApp con IA",
            subtitle: "Servicio al cliente, reservas y soporte automatizado 24/7 a través de WhatsApp",
            cta: "Comenzar"
        },
        features: {
            title: "¿Por qué elegir nuestro Bot de WhatsApp?",
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
        contact: {
            title: "¿Listo para Transformar tu Negocio?",
            subtitle: "Contáctanos para conocer más sobre nuestra solución de Recepcionista IA para WhatsApp"
        },
        footer: {
            tagline: "Tu Recepcionista IA 24/7",
            contact: "Contacto",
            rights: "Todos los derechos reservados."
        }
    }
};

// Function to switch language
function switchLanguage(lang) {
    document.documentElement.lang = lang;
    localStorage.setItem('preferredLanguage', lang);
    updateContent(lang);
}

// Function to update content based on language
function updateContent(lang) {
    const t = translations[lang];
    
    // Update navigation
    document.querySelector('a[href="#features"]').textContent = t.nav.features;
    document.querySelector('a[href="#how-it-works"]').textContent = t.nav.howItWorks;
    document.querySelector('a[href="#use-cases"]').textContent = t.nav.useCases;
    document.querySelector('a[href="#contact"]').textContent = t.nav.contact;

    // Update hero section
    document.querySelector('.hero h1').textContent = t.hero.title;
    document.querySelector('.hero p').textContent = t.hero.subtitle;
    document.querySelector('.hero .cta-button').textContent = t.hero.cta;

    // Update features section
    document.querySelector('.features h2').textContent = t.features.title;
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards[0].querySelector('h3').textContent = t.features.availability.title;
    featureCards[0].querySelector('p').textContent = t.features.availability.description;
    featureCards[1].querySelector('h3').textContent = t.features.automation.title;
    featureCards[1].querySelector('p').textContent = t.features.automation.description;
    featureCards[2].querySelector('h3').textContent = t.features.conversations.title;
    featureCards[2].querySelector('p').textContent = t.features.conversations.description;
    featureCards[3].querySelector('h3').textContent = t.features.growth.title;
    featureCards[3].querySelector('p').textContent = t.features.growth.description;

    // Update how it works section
    document.querySelector('.how-it-works h2').textContent = t.howItWorks.title;
    const steps = document.querySelectorAll('.step');
    steps[0].querySelector('h3').textContent = t.howItWorks.setup.title;
    steps[0].querySelector('p').textContent = t.howItWorks.setup.description;
    steps[1].querySelector('h3').textContent = t.howItWorks.customize.title;
    steps[1].querySelector('p').textContent = t.howItWorks.customize.description;
    steps[2].querySelector('h3').textContent = t.howItWorks.launch.title;
    steps[2].querySelector('p').textContent = t.howItWorks.launch.description;

    // Update use cases section
    document.querySelector('.use-cases h2').textContent = t.useCases.title;
    const useCases = document.querySelectorAll('.use-case');
    useCases[0].querySelector('h3').textContent = t.useCases.restaurants.title;
    useCases[0].querySelector('p').textContent = t.useCases.restaurants.description;
    useCases[1].querySelector('h3').textContent = t.useCases.hotels.title;
    useCases[1].querySelector('p').textContent = t.useCases.hotels.description;
    useCases[2].querySelector('h3').textContent = t.useCases.retail.title;
    useCases[2].querySelector('p').textContent = t.useCases.retail.description;
    useCases[3].querySelector('h3').textContent = t.useCases.services.title;
    useCases[3].querySelector('p').textContent = t.useCases.services.description;

    // Update contact section
    document.querySelector('.contact h2').textContent = t.contact.title;
    document.querySelector('.contact p').textContent = t.contact.subtitle;

    // Update footer
    document.querySelector('.footer-section p').textContent = t.footer.tagline;
    document.querySelector('.footer-section h4').textContent = t.footer.contact;
    document.querySelector('.footer-bottom p').textContent = `© 2024 WhatsBot. ${t.footer.rights}`;
}

// Initialize language based on user preference or browser language
document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    const browserLanguage = navigator.language.split('-')[0];
    const initialLanguage = savedLanguage || (browserLanguage === 'es' ? 'es' : 'en');
    switchLanguage(initialLanguage);
}); 