// Translations Object
const translations = {
    en: {
        'nav.logo': 'Villa Sera',
        'nav.about': 'About',
        'nav.gallery': 'Gallery',
        'nav.services': 'Services',
        'nav.booking': 'Booking',
        'nav.location': 'Location',
        'nav.reviews': 'Reviews',
        'hero.title': 'Villa Sera',
        'hero.subtitle': 'Luxury Redefined in Cabo San Lucas',
        'hero.location': 'Villa Serena Community',
        'hero.cta.primary': 'Check Availability',
        'hero.cta.secondary': 'Book via WhatsApp',
        'highlights.title': 'Luxury Highlights',
        'highlights.beach.title': 'Beachfront Access',
        'highlights.beach.desc': 'Private access to pristine beaches',
        'highlights.pool.title': 'Infinity Pool',
        'highlights.pool.desc': 'Stunning ocean-view infinity pool',
        'highlights.concierge.title': 'Concierge Service',
        'highlights.concierge.desc': '24/7 dedicated concierge support',
        'highlights.transport.title': 'Airport Transfer',
        'highlights.transport.desc': 'Complimentary airport transportation',
        'highlights.dining.title': 'Private Chef',
        'highlights.dining.desc': 'Available upon request',
        'highlights.views.title': 'Ocean Views',
        'highlights.views.desc': 'Panoramic views from every room',
        'gallery.title': 'Gallery',
        'gallery.subtitle': 'Experience the elegance of Villa Sera',
        'services.title': 'Premium Services',
        'services.subtitle': 'Elevate your stay with our concierge services',
        'services.transfer.title': 'Airport Transfer',
        'services.transfer.desc': 'Luxury vehicle pickup and drop-off service',
        'services.chef.title': 'Private Chef',
        'services.chef.desc': 'Gourmet meals prepared in your villa',
        'services.housekeeping.title': 'Daily Housekeeping',
        'services.housekeeping.desc': 'Professional cleaning and turndown service',
        'services.activities.title': 'Activity Planning',
        'services.activities.desc': 'Fishing, golf, spa, and adventure tours',
        'services.spa.title': 'In-Villa Spa',
        'services.spa.desc': 'Private massage and wellness treatments',
        'services.events.title': 'Event Planning',
        'services.events.desc': 'Weddings, celebrations, and corporate events',
        'booking.title': 'Reserve Your Luxury Escape',
        'booking.subtitle': 'Contact us directly to check availability and secure your dates',
        'booking.whatsapp': 'WhatsApp Us',
        'booking.form.name': 'Full Name',
        'booking.form.email': 'Email',
        'booking.form.checkin': 'Check-in',
        'booking.form.checkout': 'Check-out',
        'booking.form.guests': 'Number of Guests',
        'booking.form.message': 'Message',
        'booking.form.submit': 'Submit Inquiry',
        'hero.contact': 'WhatsApp: +52 624 217 5935 | Email: villasera@seraholding.com',
        'location.title': 'Prime Location',
        'location.description': 'Villa Sera is nestled in the exclusive Villa Serena community of Cabo San Lucas, offering unparalleled access to world-class beaches, championship golf courses, and the vibrant nightlife of downtown Cabo. Just minutes from the marina, fine dining, and luxury shopping.',
        'location.address.label': 'Address:',
        'location.address.value': 'Villa Serena Community, Cabo San Lucas, BCS, Mexico',
        'location.airport.label': 'Airport:',
        'location.airport.value': '30 minutes from Los Cabos International Airport',
        'location.map.privacy': 'Exact location shared after booking confirmation.',
        'location.map.link': 'View on Google Maps',
        'reviews.title': 'Guest Reviews',
        'reviews.subtitle': 'What our guests are saying',
        'reviews.review1.text': '"An absolutely stunning property. Every detail was perfect, from the infinity pool to the ocean views. The concierge service exceeded all expectations. We\'ll definitely be back!"',
        'reviews.review1.author': '— Sarah Mitchell, New York',
        'reviews.review2.text': '"Villa Sera is pure luxury. The attention to detail, the privacy, and the breathtaking location made our vacation unforgettable. The private chef service was exceptional."',
        'reviews.review2.author': '— James Anderson, Los Angeles',
        'reviews.review3.text': '"This is the most beautiful vacation rental we\'ve ever stayed in. The villa is immaculate, the views are incredible, and the staff went above and beyond. Highly recommend!"',
        'reviews.review3.author': '— Maria Rodriguez, Miami',
        'footer.logo': 'Villa Sera',
        'footer.tagline': 'Luxury Redefined in Cabo San Lucas',
        'footer.contact.title': 'Contact',
        'footer.contact.email': 'villasera@seraholding.com',
        'footer.contact.phone': '+52 624 217 5935',
        'footer.follow.title': 'Follow Us',
        'footer.social.facebook': 'Facebook',
        'footer.social.instagram': 'Instagram',
        'footer.rights': 'All rights reserved.'
    },
    es: {
        'nav.logo': 'Villa Sera',
        'nav.about': 'Acerca de',
        'nav.gallery': 'Galería',
        'nav.services': 'Servicios',
        'nav.booking': 'Reservas',
        'nav.location': 'Ubicación',
        'nav.reviews': 'Reseñas',
        'hero.title': 'Villa Sera',
        'hero.subtitle': 'Lujo Redefinido en Cabo San Lucas',
        'hero.location': 'Comunidad Villa Serena',
        'hero.cta.primary': 'Ver Disponibilidad',
        'hero.cta.secondary': 'Reservar por WhatsApp',
        'highlights.title': 'Destacados de Lujo',
        'highlights.beach.title': 'Acceso a la Playa',
        'highlights.beach.desc': 'Acceso privado a playas pristinas',
        'highlights.pool.title': 'Alberca Infinita',
        'highlights.pool.desc': 'Alberca infinita con vista al océano',
        'highlights.concierge.title': 'Servicio de Conserjería',
        'highlights.concierge.desc': 'Soporte de conserjería dedicado 24/7',
        'highlights.transport.title': 'Traslado al Aeropuerto',
        'highlights.transport.desc': 'Transporte gratuito al aeropuerto',
        'highlights.dining.title': 'Chef Privado',
        'highlights.dining.desc': 'Disponible bajo solicitud',
        'highlights.views.title': 'Vistas al Océano',
        'highlights.views.desc': 'Vistas panorámicas desde cada habitación',
        'gallery.title': 'Galería',
        'gallery.subtitle': 'Experimenta la elegancia de Villa Sera',
        'services.title': 'Servicios Premium',
        'services.subtitle': 'Eleva tu estancia con nuestros servicios de conserjería',
        'services.transfer.title': 'Traslado al Aeropuerto',
        'services.transfer.desc': 'Servicio de recogida y regreso en vehículo de lujo',
        'services.chef.title': 'Chef Privado',
        'services.chef.desc': 'Comidas gourmet preparadas en tu villa',
        'services.housekeeping.title': 'Limpieza Diaria',
        'services.housekeeping.desc': 'Limpieza profesional y servicio de turndown',
        'services.activities.title': 'Planificación de Actividades',
        'services.activities.desc': 'Pesca, golf, spa y tours de aventura',
        'services.spa.title': 'Spa en Villa',
        'services.spa.desc': 'Masajes privados y tratamientos de bienestar',
        'services.events.title': 'Planificación de Eventos',
        'services.events.desc': 'Bodas, celebraciones y eventos corporativos',
        'booking.title': 'Reserva Tu Escape de Lujo',
        'booking.subtitle': 'Contáctanos directamente para verificar disponibilidad y asegurar tus fechas',
        'booking.whatsapp': 'Escríbenos por WhatsApp',
        'booking.form.name': 'Nombre Completo',
        'booking.form.email': 'Correo Electrónico',
        'booking.form.checkin': 'Fecha de Entrada',
        'booking.form.checkout': 'Fecha de Salida',
        'booking.form.guests': 'Número de Huéspedes',
        'booking.form.message': 'Mensaje',
        'booking.form.submit': 'Enviar Consulta',
        'hero.contact': 'WhatsApp: +52 624 217 5935 | Correo: villasera@seraholding.com',
        'location.title': 'Ubicación Privilegiada',
        'location.description': 'Villa Sera está ubicada en la exclusiva comunidad Villa Serena de Cabo San Lucas, ofreciendo acceso sin igual a playas de clase mundial, campos de golf de campeonato y la vibrante vida nocturna del centro de Cabo. A solo minutos del muelle, restaurantes finos y compras de lujo.',
        'location.address.label': 'Dirección:',
        'location.address.value': 'Comunidad Villa Serena, Cabo San Lucas, BCS, México',
        'location.airport.label': 'Aeropuerto:',
        'location.airport.value': '30 minutos del Aeropuerto Internacional de Los Cabos',
        'location.map.privacy': 'La ubicación exacta se comparte después de confirmar la reserva.',
        'location.map.link': 'Ver en Google Maps',
        'reviews.title': 'Reseñas de Huéspedes',
        'reviews.subtitle': 'Lo que dicen nuestros huéspedes',
        'reviews.review1.text': '"Una propiedad absolutamente impresionante. Cada detalle fue perfecto, desde la alberca infinita hasta las vistas al océano. El servicio de conserjería superó todas las expectativas. ¡Definitivamente volveremos!"',
        'reviews.review1.author': '— Sarah Mitchell, Nueva York',
        'reviews.review2.text': '"Villa Sera es puro lujo. La atención al detalle, la privacidad y la ubicación impresionante hicieron nuestras vacaciones inolvidables. El servicio de chef privado fue excepcional."',
        'reviews.review2.author': '— James Anderson, Los Ángeles',
        'reviews.review3.text': '"Esta es la propiedad de vacaciones más hermosa en la que nos hemos hospedado. La villa está impecable, las vistas son increíbles y el personal fue más allá. ¡Altamente recomendado!"',
        'reviews.review3.author': '— María Rodríguez, Miami',
        'footer.logo': 'Villa Sera',
        'footer.tagline': 'Lujo Redefinido en Cabo San Lucas',
        'footer.contact.title': 'Contacto',
        'footer.contact.email': 'villasera@seraholding.com',
        'footer.contact.phone': '+52 624 217 5935',
        'footer.follow.title': 'Síguenos',
        'footer.social.facebook': 'Facebook',
        'footer.social.instagram': 'Instagram',
        'footer.rights': 'Todos los derechos reservados.'
    }
};

// Current language (load from localStorage or default to English)
let currentLang = localStorage.getItem('villaSeraLang') || 'en';

// Cloudinary base URL
const CLOUDINARY_BASE = 'https://res.cloudinary.com/dpmozdkfh/image/upload';

// Helper function to build optimized Cloudinary URLs
function buildCloudinaryUrl(path, options = {}) {
    const { w, dpr } = options;
    let transformations = 'f_auto,q_auto';
    
    if (w) {
        transformations += `,w_${w}`;
    }
    if (dpr) {
        transformations += `,dpr_auto`;
    }
    
    return `${CLOUDINARY_BASE}/${transformations}/${path}`;
}

// Hero image paths
const HERO_IMAGES = [
    'v1770690187/exterior_1_lryo0k.jpg',
    'v1770690187/CasaSergio238_tlx1uh.jpg',
    'v1770690187/CasaSergio126_sgbiua.jpg'
];

// Language Toggle Functionality
function initLanguageToggle() {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    // Set initial active state based on saved language
    langButtons.forEach(btn => {
        if (btn.getAttribute('data-lang') === currentLang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Apply initial language
    switchLanguage(currentLang);
    
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            switchLanguage(lang);
            
            // Save to localStorage
            localStorage.setItem('villaSeraLang', lang);
            
            // Update active state
            langButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
}

// Switch Language Function
function switchLanguage(lang) {
    currentLang = lang;
    const elements = document.querySelectorAll('[data-translate]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Handle placeholder translations
    const placeholderElements = document.querySelectorAll('[data-translate-placeholder]');
    placeholderElements.forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

// Preload hero images
function preloadHeroImages() {
    HERO_IMAGES.forEach((path, index) => {
        const img = new Image();
        img.src = buildCloudinaryUrl(path, { w: 1920, dpr: true });
        img.onload = () => {
            // Set background image once loaded
            const slide = document.querySelector(`.hero-slide-${index + 1}`);
            if (slide) {
                slide.style.backgroundImage = `url('${img.src}')`;
            }
        };
    });
}

// Hero Image Rotation with smooth crossfade
function initHeroRotation() {
    const slides = document.querySelectorAll('.hero-slide');
    const indicators = document.querySelectorAll('.indicator');
    let currentSlide = 0;
    const totalSlides = slides.length;
    const rotationInterval = 3000; // 3 seconds
    let rotationTimer = null;
    
    function showSlide(index) {
        // Remove active class from all slides and indicators
        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));
        
        // Add active class to current slide and indicator
        slides[index].classList.add('active');
        indicators[index].classList.add('active');
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }
    
    // Preload images first
    preloadHeroImages();
    
    // Set initial slide background
    const firstSlide = document.querySelector('.hero-slide-1');
    if (firstSlide && !firstSlide.style.backgroundImage) {
        firstSlide.style.backgroundImage = `url('${buildCloudinaryUrl(HERO_IMAGES[0], { w: 1920, dpr: true })}')`;
    }
    
    // Auto-rotate every 3 seconds
    rotationTimer = setInterval(nextSlide, rotationInterval);
    
    // Click on indicators to jump to specific slide
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
            // Reset timer
            clearInterval(rotationTimer);
            rotationTimer = setInterval(nextSlide, rotationInterval);
        });
    });
}

// Optimize gallery images
function optimizeGalleryImages() {
    const galleryImages = document.querySelectorAll('.gallery-item img[data-src]');
    galleryImages.forEach(img => {
        const path = img.getAttribute('data-src');
        if (path) {
            img.src = buildCloudinaryUrl(path, { w: 900 });
            img.removeAttribute('data-src');
        }
    });
}

// Navigation functionality
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        if (navToggle) {
            navToggle.classList.remove('active');
        }
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') {
            e.preventDefault();
            return;
        }
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Gallery Lightbox
let galleryItems = [];
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');

let currentImageIndex = 0;
let images = [];

// Gallery image paths for lightbox
const GALLERY_PATHS = [
    'v1770690261/master_room_1_jvjnau.jpg',
    'v1770690262/bedroom_2_lozwto.jpg',
    'v1770690263/bedroom3_f4fvh8.jpg',
    'v1770690264/bedroom_4_wdr9hq.jpg',
    'v1770690261/diningroom1_hkoyi9.jpg',
    'v1770690187/CasaSergio238_tlx1uh.jpg',
    'v1770690264/bathroom1_qnezwl.jpg',
    'v1770690263/bathroom_2_zhl3mr.jpg',
    'v1770690264/closet1_fkpumz.jpg'
];

// Initialize gallery images array with optimized URLs for lightbox
function initGalleryImages() {
    images = GALLERY_PATHS.map(path => buildCloudinaryUrl(path, { w: 1600 }));
    
    // Set up click handlers
    galleryItems = document.querySelectorAll('.gallery-item img');
    galleryItems.forEach((img, index) => {
        img.addEventListener('click', () => {
            currentImageIndex = index;
            updateLightboxImage();
            if (lightbox) {
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });
}

// Close lightbox
if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
}

if (lightbox) {
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (lightbox && lightbox.classList.contains('active')) {
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowLeft') {
            previousImage();
        } else if (e.key === 'ArrowRight') {
            nextImage();
        }
    }
});

// Lightbox navigation
if (lightboxPrev) {
    lightboxPrev.addEventListener('click', (e) => {
        e.stopPropagation();
        previousImage();
    });
}

if (lightboxNext) {
    lightboxNext.addEventListener('click', (e) => {
        e.stopPropagation();
        nextImage();
    });
}

function updateLightboxImage() {
    if (lightboxImage && images.length > 0) {
        lightboxImage.src = images[currentImageIndex];
        lightboxImage.alt = `Image ${currentImageIndex + 1} of ${images.length}`;
    }
}

function previousImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateLightboxImage();
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateLightboxImage();
}

function closeLightbox() {
    if (lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Inquiry Form
const inquiryForm = document.getElementById('inquiryForm');

if (inquiryForm) {
    // Add real-time validation
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const checkinInput = document.getElementById('checkin');
    const checkoutInput = document.getElementById('checkout');
    const guestsInput = document.getElementById('guests');
    
    // Email validation
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    // Form validation
    function validateForm() {
        let isValid = true;
        
        // Validate name
        if (!nameInput.value.trim()) {
            nameInput.setCustomValidity(currentLang === 'en' ? 'Name is required' : 'El nombre es requerido');
            isValid = false;
        } else {
            nameInput.setCustomValidity('');
        }
        
        // Validate email
        if (!emailInput.value.trim()) {
            emailInput.setCustomValidity(currentLang === 'en' ? 'Email is required' : 'El correo es requerido');
            isValid = false;
        } else if (!validateEmail(emailInput.value)) {
            emailInput.setCustomValidity(currentLang === 'en' ? 'Please enter a valid email' : 'Por favor ingrese un correo válido');
            isValid = false;
        } else {
            emailInput.setCustomValidity('');
        }
        
        // Validate dates
        if (!checkinInput.value) {
            checkinInput.setCustomValidity(currentLang === 'en' ? 'Check-in date is required' : 'La fecha de entrada es requerida');
            isValid = false;
        } else {
            checkinInput.setCustomValidity('');
        }
        
        if (!checkoutInput.value) {
            checkoutInput.setCustomValidity(currentLang === 'en' ? 'Check-out date is required' : 'La fecha de salida es requerida');
            isValid = false;
        } else if (checkinInput.value && checkoutInput.value && checkoutInput.value <= checkinInput.value) {
            checkoutInput.setCustomValidity(currentLang === 'en' ? 'Check-out must be after check-in' : 'La fecha de salida debe ser después de la entrada');
            isValid = false;
        } else {
            checkoutInput.setCustomValidity('');
        }
        
        // Validate guests
        if (!guestsInput.value || parseInt(guestsInput.value) < 1) {
            guestsInput.setCustomValidity(currentLang === 'en' ? 'Number of guests is required' : 'El número de huéspedes es requerido');
            isValid = false;
        } else {
            guestsInput.setCustomValidity('');
        }
        
        return isValid;
    }
    
    // Add validation on input
    [nameInput, emailInput, checkinInput, checkoutInput, guestsInput].forEach(input => {
        if (input) {
            input.addEventListener('input', () => {
                input.setCustomValidity('');
            });
        }
    });
    
    inquiryForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Validate form
        if (!validateForm()) {
            inquiryForm.reportValidity();
            return;
        }
        
        // Get form data
        const formData = {
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
            checkin: checkinInput.value,
            checkout: checkoutInput.value,
            guests: guestsInput.value,
            message: document.getElementById('message').value.trim()
        };
        
        // Create email body
        const emailBody = `Name: ${formData.name}\n` +
            `Email: ${formData.email}\n` +
            `Check-in: ${formData.checkin}\n` +
            `Check-out: ${formData.checkout}\n` +
            `Guests: ${formData.guests}\n` +
            `Message: ${formData.message || 'N/A'}`;
        
        // Create mailto link
        const mailtoLink = `mailto:villasera@seraholding.com?subject=${encodeURIComponent('Villa Sera — Availability Request')}&body=${encodeURIComponent(emailBody)}`;
        
        // Open email client
        window.location.href = mailtoLink;
        
        // Reset form after a short delay
        setTimeout(() => {
            inquiryForm.reset();
        }, 500);
    });
}

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -80px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections for animation
const sections = document.querySelectorAll('section:not(.hero)');
sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(40px)';
    section.style.transition = 'opacity 1s cubic-bezier(0.4, 0, 0.2, 1), transform 1s cubic-bezier(0.4, 0, 0.2, 1)';
    observer.observe(section);
});

// Observe individual cards and items for staggered animation
const animatedItems = document.querySelectorAll('.highlight-item, .service-card, .review-card, .gallery-item');
animatedItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = `opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s, transform 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`;
    
    const itemObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    });
    
    itemObserver.observe(item);
});

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initLanguageToggle();
    optimizeGalleryImages();
    initHeroRotation();
    initGalleryImages();
    
    // Set minimum date for check-in to today
    const today = new Date().toISOString().split('T')[0];
    const checkinInput = document.getElementById('checkin');
    const checkoutInput = document.getElementById('checkout');
    
    if (checkinInput) {
        checkinInput.setAttribute('min', today);
        checkinInput.addEventListener('change', () => {
            if (checkoutInput && checkinInput.value) {
                const checkinDate = new Date(checkinInput.value);
                checkinDate.setDate(checkinDate.getDate() + 1);
                checkoutInput.setAttribute('min', checkinDate.toISOString().split('T')[0]);
            }
        });
    }
    
    // Ensure all WhatsApp links are correct (already set in HTML, but double-check)
    const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');
    whatsappLinks.forEach(link => {
        if (!link.href.includes('526242175935')) {
            link.href = 'https://wa.me/526242175935?text=Hi%20Villa%20Sera%20team!%20I\'d%20love%20to%20check%20availability.%20My%20dates%20are%20____%20to%20____%20and%20we%20are%20____%20guests.';
        }
    });
});