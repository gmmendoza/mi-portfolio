const translations = {
    es: {
        // Navbar
        "nav-inicio": "Inicio",
        "nav-sobre-mi": "Sobre Mí",
        "nav-stack": "Stack",
        "nav-proyectos": "Proyectos",
        "nav-contacto": "Contacto",
        
        // Hero
        "hero-role": "Full Stack Developer | Analista de Sistemas",
        "hero-meta-loc": "Misiones, Argentina",
        "hero-bio": "Estudiante avanzada de Licenciatura en Sistemas de Información. Especialista en construir soluciones <strong>Full Stack</strong> de alto impacto, integrando un análisis técnico riguroso con arquitecturas escalables en Java y React. Disponible para oportunidades como <strong>Full Stack Developer</strong> o <strong>Analista de Sistemas</strong>.",
        "btn-hire": "Contrátame",
        "btn-cv": "Ver CV",
        
        // Sobre Mí
        "about-title": "Sobre Mí",
        "about-p1": "Soy estudiante avanzada de Licenciatura en Sistemas de Información y Analista en Sistemas de Computación, con enfoque en el análisis, diseño y desarrollo de sistemas.",
        "about-p2": "Me especializo en desarrollo backend con <strong>Java y Spring Boot</strong>, creación de APIs REST y modelado de bases de datos relacionales, complementando con frontend en <strong>React</strong> para construir aplicaciones full stack.",
        "about-p3": "Mi formación como Analista me permite abordar el desarrollo desde una visión integral del ciclo de vida del software, diseñando soluciones escalables orientadas a procesos y alineadas con las necesidades del negocio.",
        "about-p4": "Me interesa desarrollarme profesionalmente como <strong>Analista de Sistemas</strong> o <strong>Full Stack Developer</strong>, con interés en arquitectura de software y ciberseguridad.",
        "about-interests": "Áreas de interés",
        "interest-backend": "Backend Development (Java / Spring Boot)",
        "interest-analysis": "Análisis y modelado de sistemas",
        "interest-arch": "Arquitectura de software",
        "interest-db": "Bases de datos relacionales",
        "interest-cyber": "Ciberseguridad",
        "about-lang": "Idiomas",
        "lang-es": "Español — Nativo",
        "lang-en": "Inglés — Técnico",

        // Proyectos
        "proj-title": "Experiencia Laboral & Proyectos",
        "badge-featured": "Destacado",
        "badge-robust": "Backend Robust",
        "saas-sub": "Sistema de Gestión Multi-tenant",
        "saas-li1": "<strong>Arquitecto Backend:</strong> Diseñé e implementé la lógica multi-tenant asegurando el aislamiento de datos por empresa.",
        "saas-li2": "Desarrollé un panel interactivo con <strong>Chart.js</strong> para alertas críticas de stock y métricas financieras.",
        "saas-li3": "Integré una terminal POS con facturación offline/online sincronizada mediante APIs REST específicas.",
        "agro-sub": "Plataforma Agropecuaria",
        "agro-li1": "<strong>Seguridad de APIs:</strong> Implementé autenticación robusta mediante <strong>JWT</strong> y control de accesos basado en roles (RBAC).",
        "agro-li2": "Optimicé el acceso a datos mediante <strong>Spring Data JPA</strong> y modelado relacional complejo en PostgreSQL.",
        "agro-li3": "Orquesté el despliegue del ecosistema completo usando <strong>Docker Compose</strong> para asegurar portabilidad.",
        "pan-sub": "Producción y Punto de Venta",
        "pan-li1": "<strong>Análisis Funcional:</strong> Modelé reglas de negocio críticas para la validación automática de mermas y producción diaria.",
        "pan-li2": "Desarrollé una interfaz SPA para agilizar el proceso de caja en el punto de venta local.",
        "pan-li3": "<strong>Logro:</strong> API REST para gestión de usuarios con autenticación JWT desarrollada con Spring Boot y PostgreSQL.",
        "sgt-sub": "Trabajo Final — Analista en Sistemas",
        "sgt-li1": "<strong>Analista Funcional:</strong> Digitalización de procesos operativos, gestión de pedidos y ventas online.",
        "sgt-li2": "Administración de inventario centralizada y actualización automática de precios.",
        "sgt-li3": "Registro y sincronización de facturación local y preventas digitales.",
        "sgt-live": "Sistema que está actualmente en funcionamiento",
        "btn-demo": "Ver Demo",

        // Stack
        "stack-title": "Stack Tecnológico",
        "stack-back": "Backend",
        "stack-db": "Bases de Datos",
        "stack-front": "Frontend",
        "stack-tools": "Herramientas / DevOps",

        // Diferencial
        "diff-title": "Diferencial & Especialidad",
        "diff-ans-title": "Análisis de Sistemas",
        "diff-ans-desc": "Sólida capacidad para entender requerimientos complejos y traducirlos en modelos técnicos viables (UML, DER).",
        "diff-api-title": "Seguridad & APIs",
        "diff-api-desc": "Enfoque en la protección de datos mediante JWT, OAuth2 y mejores prácticas en el diseño de arquitecturas REST.",
        "diff-eng-title": "Software Engineering",
        "diff-eng-desc": "Aplicación rigurosa de principios SOLID, Clean Code y Patrones de Diseño para software mantenible.",

        // Formación
        "edu-title": "Formación Académica",
        "cert-title": "Certificaciones",
        "cert-ds": "Fundamentos de Data Science",
        "cert-intro-ds": "Introducción a la Ciencia de Datos",
        "cert-cyber-silicon": "CIBERSEGURIDAD: Amenaza, Consejos y Buenas Prácticas",
        "cert-cyber-dev": "Ciberseguridad para Desarrolladores",
        "cert-cyber-devops": "Ciberseguridad & DevOps",

        // Contacto
        "contact-title": "¿Tenés un proyecto en mente?",
        "contact-p": "Buscando mi próxima oportunidad como <strong>Backend Developer</strong> o <strong>Analista</strong>.<br>Si te interesa mi perfil técnico y analítico, contactame.",
        "btn-email": "Enviar Email",
        "btn-cv-pdf": "Ver CV Digital",

        // Footer
        "footer-copy": "© 2025 Guadalupe Mendoza · Diseñado y desarrollado con 💙",
        
        // CV Específico
        "cv-title": "GUADALUPE M. MENDOZA",
        "cv-contact-h2": "📌 CONTACTO",
        "cv-stack-h2": "💻 STACK TÉCNICO",
        "cv-tools-h2": "⚙️ HERRAMIENTAS / DEVOPS",
        "cv-method-h2": "🧠 METODOLOGÍAS",
        "cv-langs-h2": "🌐 IDIOMAS",
        "cv-certs-h2": "🎓 CERTIFICACIONES",
        "cv-profile-h2": "PERFIL PROFESIONAL",
        "cv-edu-h2": "FORMACIÓN ACADÉMICA",
        "cv-exp-h2": "EXPERIENCIA LABORAL | PROYECTOS DESTACADOS",
        "cv-comp-h2": "COMPETENCIAS TÉCNICAS Y METODOLÓGICAS",
        "cv-profile-p": "Estudiante avanzada de Licenciatura en Sistemas de Información con formación en ingeniería de software y desarrollo Full Stack. Experiencia en desarrollo backend con Java y Spring Boot, diseño de APIs REST y modelado de bases de datos relacionales.<br><br>Interesada en roles de Backend Developer o Analista de Sistemas, aplicando principios de arquitectura en capas, patrones de diseño y buenas prácticas de desarrollo. También tengo interés en ciberseguridad aplicada al desarrollo de software y seguridad de APIs.",
        "cv-edu-lic": "LIC. EN SISTEMAS DE INFORMACIÓN",
        "cv-edu-analista": "ANALISTA EN SIST. DE COMPUTACIÓN",
        "cv-edu-secondary": "ANALISTA PERSONAL Y PROF. EN INFORMÁTICA",
        "cv-present": "Presente",
        "cv-edu-lic-desc": "Formación sólida en: Algoritmos I-II, Ingeniería de Software I-II-III, Base de Datos, Sistemas Operativos, Redes I-II, POO I-II.",
        "cv-edu-ana-desc": "Formación sólida en: Algoritmos I-II, Análisis de Sistemas, Base de Datos, Seminario de Lenguajes I-II, Sistemas Administrativos.",
        "cv-cert-cyber": "<strong>Ciberseguridad:</strong> Silicon Misiones",
        "cv-cert-ds": "<strong>Data Science:</strong> Santander",
        "cv-cert-cm": "<strong>Community Manager:</strong> Silicon Misiones",
        "cv-cert-scrum": "<strong>Scrum/Agile:</strong> Santander",
        "cv-cert-electro": "<strong>Electrónica:</strong> UNaM (FCEQyN)",
        "cv-comp-req": "Levantamiento de Requerimientos",
        "cv-comp-rel": "Modelado Relacional de Datos (DER)",
        "cv-comp-uml": "UML (Casos Uso, Secuencia, Clases)",
        "cv-comp-arch": "Arquitectura en Capas y MVC",
        "cv-comp-test": "Testing de APIs (Postman/Swagger)",
        "cv-btn-print": "Imprimir CV"
    },
    en: {
        // Navbar
        "nav-inicio": "Home",
        "nav-sobre-mi": "About Me",
        "nav-stack": "Stack",
        "nav-proyectos": "Projects",
        "nav-contacto": "Contact",
        
        // Hero
        "hero-role": "Full Stack Developer | Systems Analyst",
        "hero-meta-loc": "Misiones, Argentina",
        "hero-bio": "Advanced Information Systems undergraduate. Specialist in building high-impact <strong>Full Stack</strong> solutions, integrating rigorous technical analysis with scalable architectures in Java and React. Available for opportunities as a <strong>Full Stack Developer</strong> or <strong>Systems Analyst</strong>.",
        "btn-hire": "Contact Me",
        "btn-cv": "View CV",
        
        // Sobre Mí
        "about-title": "About Me",
        "about-p1": "I am an advanced undergraduate student in Information Systems and a Computer Systems Analyst, focusing on system analysis, design, and development.",
        "about-p2": "I specialize in backend development with <strong>Java and Spring Boot</strong>, REST API creation, and relational database modeling, complemented by <strong>React</strong> frontend to build full stack applications.",
        "about-p3": "My training as an Analyst allows me to approach development from an integral vision of the software lifecycle, designing scalable solutions oriented to processes and aligned with business needs.",
        "about-p4": "I am interested in developing professionally as a <strong>Systems Analyst</strong> or <strong>Full Stack Developer</strong>, with a secondary focus on software architecture and cybersecurity.",
        "about-interests": "Areas of Interest",
        "interest-backend": "Backend Development (Java / Spring Boot)",
        "interest-analysis": "Systems Analysis and Modeling",
        "interest-arch": "Software Architecture",
        "interest-db": "Relational Databases",
        "interest-cyber": "Cybersecurity",
        "about-lang": "Languages",
        "lang-es": "Spanish — Native",
        "lang-en": "English — Technical",

        // Proyectos
        "proj-title": "Work Experience & Projects",
        "badge-featured": "Featured",
        "badge-robust": "Robust Backend",
        "saas-sub": "Multi-tenant Management System",
        "saas-li1": "<strong>Backend Architect:</strong> Designed and implemented multi-tenant logic ensuring data isolation per company.",
        "saas-li2": "Developed an interactive dashboard with <strong>Chart.js</strong> for critical stock alerts and financial metrics.",
        "saas-li3": "Integrated a POS terminal with synced offline/online billing via specific REST APIs.",
        "agro-sub": "Agricultural Platform",
        "agro-li1": "<strong>API Security:</strong> Implemented robust authentication using <strong>JWT</strong> and role-based access control (RBAC).",
        "agro-li2": "Optimized data access using <strong>Spring Data JPA</strong> and complex relational modeling in PostgreSQL.",
        "agro-li3": "Orchestrated the deployment of the complete ecosystem using <strong>Docker Compose</strong> to ensure portability.",
        "pan-sub": "Production and Point of Sale",
        "pan-li1": "<strong>Functional Analysis:</strong> Modeled critical business rules for automatic validation of waste and daily production.",
        "pan-li2": "Developed a SPA interface to speed up the checkout process at the local point of sale.",
        "pan-li3": "<strong>Achievement:</strong> REST API for user management with JWT authentication developed with Spring Boot and PostgreSQL.",
        "sgt-sub": "Final Project — Systems Analyst",
        "sgt-li1": "<strong>Functional Analyst:</strong> Digitalization of operational processes, order management, and online sales.",
        "sgt-li2": "Centralized inventory management and automatic price updates.",
        "sgt-li3": "Registration and synchronization of local billing and digital pre-sales.",
        "sgt-live": "System currently in operation",
        "btn-demo": "View Demo",

        // Stack
        "stack-title": "Tech Stack",
        "stack-back": "Backend",
        "stack-db": "Databases",
        "stack-front": "Frontend",
        "stack-tools": "Tools / DevOps",

        // Diferencial
        "diff-title": "Differentiator & Specialty",
        "diff-ans-title": "Systems Analysis",
        "diff-ans-desc": "Solid ability to understand complex requirements and translate them into viable technical models (UML, DER).",
        "diff-api-title": "Security & APIs",
        "diff-api-desc": "Focus on data protection through JWT, OAuth2, and best practices in REST architecture design.",
        "diff-eng-title": "Software Engineering",
        "diff-eng-desc": "Rigorous application of SOLID principles, Clean Code, and Design Patterns for maintainable software.",

        // Formación
        "edu-title": "Academic Background",
        "cert-title": "Certifications",
        "cert-ds": "Data Science Fundamentals",
        "cert-intro-ds": "Introduction to Data Science",
        "cert-cyber-silicon": "CYBERSECURITY: Threats, Tips and Best Practices",
        "cert-cyber-dev": "Cybersecurity for Developers",
        "cert-cyber-devops": "Cybersecurity & DevOps",

        // Contacto
        "contact-title": "Have a project in mind?",
        "contact-p": "Looking for my next opportunity as a <strong>Backend Developer</strong> or <strong>Analyst</strong>.<br>If you are interested in my technical and analytical profile, contact me.",
        "btn-email": "Send Email",
        "btn-cv-pdf": "View Digital CV",

        // Footer
        "footer-copy": "© 2025 Guadalupe Mendoza · Designed and developed with 💙",

        // CV Específico
        "cv-title": "GUADALUPE M. MENDOZA",
        "cv-contact-h2": "📌 CONTACT",
        "cv-stack-h2": "💻 TECH STACK",
        "cv-tools-h2": "⚙️ TOOLS / DEVOPS",
        "cv-method-h2": "🧠 METHODOLOGIES",
        "cv-langs-h2": "🌐 LANGUAGES",
        "cv-certs-h2": "🎓 CERTIFICATIONS",
        "cv-profile-h2": "PROFESSIONAL PROFILE",
        "cv-edu-h2": "ACADEMIC BACKGROUND",
        "cv-exp-h2": "WORK EXPERIENCE | FEATURED PROJECTS",
        "cv-comp-h2": "TECHNICAL AND METHODOLOGICAL COMPETENCIES",
        "cv-profile-p": "Advanced Information Systems Undergraduate with training in software engineering and Full Stack development. Experience in backend development with Java and Spring Boot, REST API design, and relational database modeling.<br><br>Interested in Backend Developer or Systems Analyst roles, applying layered architecture principles, design patterns, and best development practices. I am also interested in cybersecurity applied to software development and API security.",
        "cv-edu-lic": "INFORMATION SYSTEMS DEGREE",
        "cv-edu-analista": "COMPUTER SYSTEMS ANALYST",
        "cv-edu-secondary": "PERSONAL AND PROF. ANALYST IN INFORMATICS",
        "cv-present": "Present",
        "cv-edu-lic-desc": "Solid training in: Algorithms I-II, Software Engineering I-II-III, Database, Operating Systems, Networks I-II, OOP I-II.",
        "cv-edu-ana-desc": "Solid training in: Algorithms I-II, Systems Analysis, Database, Language Seminar I-II, Administrative Systems.",
        "cv-cert-cyber": "<strong>Cybersecurity:</strong> Silicon Misiones",
        "cv-cert-ds": "<strong>Data Science:</strong> Santander",
        "cv-cert-cm": "<strong>Community Manager:</strong> Silicon Misiones",
        "cv-cert-scrum": "<strong>Scrum/Agile:</strong> Santander",
        "cv-cert-electro": "<strong>Electronics:</strong> UNaM (FCEQyN)",
        "cv-comp-req": "Requirements Gathering",
        "cv-comp-rel": "Relational Data Modeling (DER)",
        "cv-comp-uml": "UML (Use Cases, Sequence, Class Diagrams)",
        "cv-comp-arch": "Layered Architecture and MVC",
        "cv-comp-test": "API Testing (Postman/Swagger)",
        "cv-btn-print": "Print CV"
    }
};

function setLanguage(lang) {
    localStorage.setItem('language', lang);
    
    // Actualizar todos los elementos con data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[lang][key];
            } else {
                el.innerHTML = translations[lang][key];
            }
        }
    });

    // Actualizar el estado visual de los botones de idioma
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('onclick').includes(lang));
    });

    document.documentElement.lang = lang;
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('language') || 'es';
    setLanguage(savedLang);
});
