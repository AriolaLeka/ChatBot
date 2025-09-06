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
            cta: "Get Started"
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
            title: "Delight Customers Along the WhatsApp Journey"
        },
        testimonials: {
            title: "What Our Clients Say"
        },
        faq: {
            title: "Frequently Asked Questions"
        },
        contact: {
            title: "Ready to Transform Your Customer Service?",
            subtitle: "Contact us to learn more about our WhatsApp AI Receptionist solution"
        },
        secondaryCta: {
            title: "Ready to Transform Your Business?"
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
            cta: "Comenzar"
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
            title: "Encanta a los Clientes a lo Largo del Viaje de WhatsApp"
        },
        testimonials: {
            title: "Lo que Dicen Nuestros Clientes"
        },
        faq: {
            title: "Preguntas Frecuentes"
        },
        contact: {
            title: "¿Listo para Transformar tu Atención al Cliente?",
            subtitle: "Contáctanos para conocer más sobre nuestra solución de Recepcionista IA para WhatsApp"
        },
        secondaryCta: {
            title: "¿Listo para Transformar tu Negocio?"
        },
        footer: {
            tagline: "Tu Recepcionista IA 24/7",
            contact: "Contacto",
            rights: "Todos los derechos reservados."
        }
    }
};

// Safe text content setter with retry logic
function safeSetTextContent(element, text, retries = 3) {
    if (!element || !text) return false;
    
    try {
        element.textContent = text;
        return true;
    } catch (error) {
        console.warn(`Failed to set text content, retries left: ${retries}`, error);
        if (retries > 0) {
            setTimeout(() => safeSetTextContent(element, text, retries - 1), 50);
        }
        return false;
    }
}

// Get nested translation value by path
function getTranslationValue(translations, path) {
    return path.split('.').reduce((obj, key) => obj?.[key], translations);
}

// Bulletproof translation function with data attributes
function switchLanguage(lang) {
    console.log('🔄 Switching to language:', lang);
    
    // Set language attributes
    document.documentElement.lang = lang;
    localStorage.setItem('preferredLanguage', lang);

    // Get translations
    const t = translations[lang];
    if (!t) {
        console.error('❌ No translations found for:', lang);
        return;
    }
    
    // Update elements with data-i18n attributes (preferred method)
    const i18nElements = document.querySelectorAll('[data-i18n]');
    i18nElements.forEach(element => {
        const path = element.getAttribute('data-i18n');
        const text = getTranslationValue(t, path);
        if (text) {
            safeSetTextContent(element, text);
            console.log(`✅ Updated [data-i18n="${path}"]: ${text}`);
        } else {
            console.warn(`⚠️ No translation found for path: ${path}`);
        }
    });
    
    // Fallback: Update elements with CSS selectors (legacy support)
    const fallbackUpdates = [
        // Navigation
        { selector: 'a[href="#features"]', path: 'nav.features', name: 'Features Link' },
        { selector: 'a[href="#how-it-works"]', path: 'nav.howItWorks', name: 'How It Works Link' },
        { selector: 'a[href="#use-cases"]', path: 'nav.useCases', name: 'Use Cases Link' },
        { selector: 'a[href="#testimonials"]', path: 'nav.testimonials', name: 'Testimonials Link' },
        { selector: 'a[href="#faq"]', path: 'nav.faq', name: 'FAQ Link' },
        { selector: 'a[href="#contact"]', path: 'nav.contact', name: 'Contact Link' },
        
        // Hero Section
        { selector: '.hero h1', path: 'hero.title', name: 'Hero Title' },
        { selector: '.hero-subtitle', path: 'hero.subtitle', name: 'Hero Subtitle' },
        { selector: '.hero .cta-primary', path: 'hero.cta', name: 'Hero CTA' },
        
        // Section Titles
        { selector: '.features h2', path: 'features.title', name: 'Features Title' },
        { selector: '.how-it-works h2', path: 'howItWorks.title', name: 'How It Works Title' },
        { selector: '.use-cases h2', path: 'useCases.title', name: 'Use Cases Title' },
        { selector: '.customer-journey h2', path: 'customerJourney.title', name: 'Customer Journey Title' },
        { selector: '#testimonials h2', path: 'testimonials.title', name: 'Testimonials Title' },
        { selector: '#faq h2', path: 'faq.title', name: 'FAQ Title' },
        { selector: '.secondary-cta h2', path: 'secondaryCta.title', name: 'Secondary CTA Title' },
        { selector: '#contact h2', path: 'contact.title', name: 'Contact Title' },
        { selector: '#contact p', path: 'contact.subtitle', name: 'Contact Subtitle' },
        
        // Footer
        { selector: '.footer-section:first-child p', path: 'footer.tagline', name: 'Footer Tagline' },
        { selector: '.footer-section:nth-child(2) h4', path: 'footer.contact', name: 'Footer Contact' },
        { selector: '.footer-bottom p', path: 'footer.rights', name: 'Footer Bottom', transform: (text) => `© 2024 WhatsBot. ${text}` }
    ];
    
    // Process fallback updates
    fallbackUpdates.forEach(update => {
        const element = document.querySelector(update.selector);
        if (element) {
            const text = getTranslationValue(t, update.path);
            if (text) {
                const finalText = update.transform ? update.transform(text) : text;
                safeSetTextContent(element, finalText);
                console.log(`✅ ${update.name}: ${finalText}`);
            } else {
                console.warn(`⚠️ No translation found for ${update.name}: ${update.path}`);
            }
        } else {
            console.warn(`⚠️ Element not found: ${update.selector}`);
        }
    });
    
    // Update feature cards with data attributes
    const featureCards = document.querySelectorAll('.feature-card');
    const featurePaths = [
        { title: 'features.availability.title', desc: 'features.availability.description' },
        { title: 'features.automation.title', desc: 'features.automation.description' },
        { title: 'features.conversations.title', desc: 'features.conversations.description' },
        { title: 'features.growth.title', desc: 'features.growth.description' }
    ];
    
    featureCards.forEach((card, index) => {
        if (featurePaths[index]) {
            const titleEl = card.querySelector('h3');
            const descEl = card.querySelector('p');
            const titleText = getTranslationValue(t, featurePaths[index].title);
            const descText = getTranslationValue(t, featurePaths[index].desc);
            
            if (titleEl && titleText) safeSetTextContent(titleEl, titleText);
            if (descEl && descText) safeSetTextContent(descEl, descText);
        }
    });
    
    // Update use case cards
    const useCases = document.querySelectorAll('.use-case');
    const useCasePaths = [
        { title: 'useCases.restaurants.title', desc: 'useCases.restaurants.description' },
        { title: 'useCases.hotels.title', desc: 'useCases.hotels.description' },
        { title: 'useCases.retail.title', desc: 'useCases.retail.description' },
        { title: 'useCases.services.title', desc: 'useCases.services.description' }
    ];
    
    useCases.forEach((useCase, index) => {
        if (useCasePaths[index]) {
            const titleEl = useCase.querySelector('h3');
            const descEl = useCase.querySelector('p');
            const titleText = getTranslationValue(t, useCasePaths[index].title);
            const descText = getTranslationValue(t, useCasePaths[index].desc);
            
            if (titleEl && titleText) safeSetTextContent(titleEl, titleText);
            if (descEl && descText) safeSetTextContent(descEl, descText);
        }
    });
    
    // Update steps
    const steps = document.querySelectorAll('.step');
    const stepPaths = [
        { title: 'howItWorks.setup.title', desc: 'howItWorks.setup.description' },
        { title: 'howItWorks.customize.title', desc: 'howItWorks.customize.description' },
        { title: 'howItWorks.launch.title', desc: 'howItWorks.launch.description' }
    ];
    
    steps.forEach((step, index) => {
        if (stepPaths[index]) {
            const titleEl = step.querySelector('h3');
            const descEl = step.querySelector('p');
            const titleText = getTranslationValue(t, stepPaths[index].title);
            const descText = getTranslationValue(t, stepPaths[index].desc);
            
            if (titleEl && titleText) safeSetTextContent(titleEl, titleText);
            if (descEl && descText) safeSetTextContent(descEl, descText);
        }
    });
    
    console.log('✅ Translation completed for:', lang);
}

// Initialize with retry logic
function initializeTranslations(retries = 5) {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    const browserLanguage = navigator.language.split('-')[0];
    const initialLanguage = savedLanguage || (browserLanguage === 'es' ? 'es' : 'en');
    
    console.log(`🌍 Initializing translations (attempt ${6 - retries}/5):`, initialLanguage);
    
    try {
    switchLanguage(initialLanguage);
        
        // Verify translation worked by checking if any elements were updated
        const hasTranslatedElements = document.querySelectorAll('[data-i18n]').length > 0 || 
                                    document.querySelector('.hero h1')?.textContent !== 'AtiendeBot: Automate Customer Support with Ease';
        
        if (hasTranslatedElements || retries <= 1) {
            console.log('✅ Translations initialized successfully');
        } else {
            throw new Error('Translation verification failed');
        }
    } catch (error) {
        console.warn(`⚠️ Translation initialization failed, retries left: ${retries - 1}`, error);
        if (retries > 1) {
            setTimeout(() => initializeTranslations(retries - 1), 200 * (6 - retries));
        } else {
            console.error('❌ Failed to initialize translations after all retries');
        }
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 DOM loaded, initializing translations...');
    initializeTranslations();
}); 