"use strict";

// The English HTML also provides a complete fallback without JavaScript.
const translations = {
  "aiNode": { "en": "AI", "es": "IA" },
  "aiNodeLabel": { "en": "AI across every stage", "es": "IA en todas las etapas" },
  "aiDetailTitle": { "en": "05 / AI · ACROSS EVERY STAGE", "es": "05 / IA · EN TODAS LAS ETAPAS" },
  "aiDescription": {
    "en": "AI connects every stage: exploring architecture options, supporting development, sharing knowledge and strengthening DevSecOps, with human judgment at the center.",
    "es": "La IA conecta todas las etapas: explorar alternativas de arquitectura, acompañar el desarrollo, compartir conocimiento y fortalecer DevSecOps, con el criterio humano en el centro."
  },
  "cloudNode": { "en": "Cloud architecture", "es": "Arquitectura cloud" },
  "engineeringNode": { "en": "Engineering", "es": "Ingeniería" },
  "leadershipNode": { "en": "Leadership", "es": "Liderazgo" },
  "skip": {
    "en": "Skip to content",
    "es": "Saltar al contenido"
  },
  "homeLabel": {
    "en": "Facundo Báez, home",
    "es": "Facundo Báez, inicio"
  },
  "navLabel": {
    "en": "Main navigation",
    "es": "Navegación principal"
  },
  "profile": {
    "en": "Profile",
    "es": "Perfil"
  },
  "background": {
    "en": "Background",
    "es": "Trayectoria"
  },
  "certifications": {
    "en": "Certifications",
    "es": "Certificaciones"
  },
  "connect": {
    "en": "Let’s connect",
    "es": "Conectemos"
  },
  "heroFirst": {
    "en": "Turning vision",
    "es": "La visión se"
  },
  "heroSecond": {
    "en": "into",
    "es": "convierte en"
  },
  "heroAccent": {
    "en": "architecture.",
    "es": "arquitectura."
  },
  "heroDescription": {
    "en": "I connect strategy, technology and people to build software that goes beyond code.",
    "es": "Conecto estrategia, tecnología y personas para construir software que trascienda el código."
  },
  "explore": {
    "en": "Explore my profile",
    "es": "Explorá mi perfil"
  },
  "downloadCV": {
    "en": "Download CV (PDF)",
    "es": "Descargar CV (PDF)"
  },
  "experienceFirst": {
    "en": "years of experience in",
    "es": "años de experiencia en"
  },
  "experienceSecond": {
    "en": "engineering and cloud transformation",
    "es": "ingeniería y transformación cloud"
  },
  "diagramLabel": {
    "en": "Interactive diagram of my areas of expertise",
    "es": "Diagrama interactivo de mis áreas de trabajo"
  },
  "cloudDescription": {
    "en": "Azure and multicloud architectures with an integrated approach to security and infrastructure.",
    "es": "Arquitecturas en Azure y entornos multicloud, con una visión integral de seguridad e infraestructura."
  },
  "engineeringDescription": {
    "en": "Enterprise software development with .NET, React, SQL Server and Cosmos DB. From architecture to implementation.",
    "es": "Desarrollo de software empresarial con .NET, React, SQL Server y Cosmos DB. De la arquitectura a la implementación."
  },
  "leadershipDescription": {
    "en": "Technical strategy, architecture design and mentoring distributed teams. Technology and people moving forward together.",
    "es": "Estrategia técnica, diseño de arquitectura y mentoría de equipos distribuidos. Tecnología y personas avanzando juntas."
  },
  "securityDescription": {
    "en": "Infrastructure as code with Terraform and Bicep, CI/CD and cloud security integrated into the development process.",
    "es": "Infraestructura como código con Terraform y Bicep, CI/CD y seguridad cloud integrada en el proceso de desarrollo."
  },
  "diagramFooter": {
    "en": "ONE PROFILE. MULTIPLE CONNECTIONS.",
    "es": "UN PERFIL. MÚLTIPLES CONEXIONES."
  },
  "diagramHint": {
    "en": "Select a node ↗",
    "es": "Seleccioná un nodo ↗"
  },
  "profileLabel": {
    "en": "01 / PROFILE",
    "es": "01 / PERFIL"
  },
  "aboutFirst": {
    "en": "A broader perspective.",
    "es": "Una mirada integral."
  },
  "aboutSecond": {
    "en": "From challenge to solution.",
    "es": "Del desafío a la solución."
  },
  "aboutIntro": {
    "en": "I’m Facundo, a software engineer and cloud architect. For over 15 years, I’ve led enterprise software development and cloud transformation projects.",
    "es": "Soy Facundo, ingeniero de software y arquitecto cloud. A lo largo de más de 15 años, lideré el desarrollo de software empresarial y proyectos de transformación en la nube."
  },
  "aboutApproach": {
    "en": "My work combines technical depth, architectural vision and people leadership. I care about designing the solution and supporting the teams who make it happen.",
    "es": "Mi trabajo combina profundidad técnica, visión arquitectónica y liderazgo de personas. Me interesa tanto diseñar la solución como acompañar a los equipos que la hacen posible."
  },
  "aboutNote": {
    "en": "Technical strategy. Architecture. Distributed teams.",
    "es": "Estrategia técnica. Arquitectura. Equipos distribuidos."
  },
  "expertiseFirst": {
    "en": "Connecting the dots.",
    "es": "Conectar las piezas."
  },
  "expertiseSecond": {
    "en": "Building with purpose.",
    "es": "Construir con criterio."
  },
  "expertiseIntroFirst": {
    "en": "Four dimensions of one approach",
    "es": "Cuatro dimensiones de una misma forma"
  },
  "expertiseIntroSecond": {
    "en": "to thinking about technology.",
    "es": "de pensar la tecnología."
  },
  "cloudTitle": {
    "en": "Cloud & architecture",
    "es": "Cloud & arquitectura"
  },
  "cloudCard": {
    "en": "Solution design and cloud transformation informed by distributed systems and security.",
    "es": "Diseño de soluciones y transformación cloud con una perspectiva de sistemas distribuidos y seguridad."
  },
  "cloudTags": {
    "en": "Cloud technologies",
    "es": "Tecnologías cloud"
  },
  "engineeringTitle": {
    "en": "Software engineering",
    "es": "Ingeniería de software"
  },
  "engineeringCard": {
    "en": "Enterprise development experience spanning services, data and web experiences.",
    "es": "Experiencia en desarrollo empresarial, desde los servicios y los datos hasta la experiencia web."
  },
  "engineeringTags": {
    "en": "Development technologies",
    "es": "Tecnologías de desarrollo"
  },
  "securityCard": {
    "en": "Infrastructure as code, continuous integration and security as part of the development process.",
    "es": "Infraestructura como código, integración continua y seguridad como parte del proceso de desarrollo."
  },
  "securityTags": {
    "en": "Infrastructure tools",
    "es": "Herramientas de infraestructura"
  },
  "leadershipTitle": {
    "en": "Technical leadership",
    "es": "Liderazgo técnico"
  },
  "leadershipCard": {
    "en": "Technical strategy and mentoring for distributed teams. A shared vision to move forward together.",
    "es": "Estrategia técnica y mentoría de equipos distribuidos. Una visión compartida para avanzar juntos."
  },
  "leadershipTags": {
    "en": "Leadership skills",
    "es": "Habilidades de liderazgo"
  },
  "educationLabel": {
    "en": "03 / EDUCATION",
    "es": "03 / FORMACIÓN"
  },
  "educationFirst": {
    "en": "Experience builds.",
    "es": "La experiencia se construye."
  },
  "educationSecond": {
    "en": "Curiosity continues.",
    "es": "La curiosidad continúa."
  },
  "educationIntro": {
    "en": "A foundation in engineering, a management perspective and a commitment to learning along the way.",
    "es": "Una base en ingeniería, una perspectiva de gestión y el aprendizaje como parte del camino."
  },
  "languagesLabel": {
    "en": "LANGUAGES / WITHOUT BARRIERS",
    "es": "IDIOMAS / SIN BARRERAS"
  },
  "spanish": {
    "en": "Spanish",
    "es": "Español"
  },
  "native": {
    "en": "Native",
    "es": "Nativo"
  },
  "english": {
    "en": "English",
    "es": "Inglés"
  },
  "proficiency": {
    "en": "Full professional proficiency",
    "es": "Full professional proficiency"
  },
  "postgraduate": {
    "en": "Postgraduate in Project Management (PMI)",
    "es": "Posgrado en Gestión de Proyectos (PMI)"
  },
  "engineerDegree": {
    "en": "Systems Engineering",
    "es": "Ingeniería en Sistemas"
  },
  "analystDegree": {
    "en": "Systems Analyst",
    "es": "Analista de Sistemas"
  },
  "bachelorDegree": {
    "en": "Bachelor in Computers",
    "es": "Bachiller en Computación"
  },
  "certificationsLabel": {
    "en": "04 / CERTIFICATIONS",
    "es": "04 / CERTIFICACIONES"
  },
  "certificationsFirst": {
    "en": "Continuous learning.",
    "es": "Aprendizaje continuo."
  },
  "certificationsSecond": {
    "en": "Certified knowledge.",
    "es": "Conocimiento acreditado."
  },
  "certificationsIntroFirst": {
    "en": "Data and artificial intelligence applied",
    "es": "Datos e inteligencia artificial aplicada"
  },
  "certificationsIntroSecond": {
    "en": "to software development.",
    "es": "al desarrollo de software."
  },
  "issued": {
    "en": "Issued:",
    "es": "Expedición:"
  },
  "september": {
    "en": "September 2026",
    "es": "septiembre de 2026"
  },
  "june": {
    "en": "June 2026",
    "es": "junio de 2026"
  },
  "credential": {
    "en": "View credential",
    "es": "Ver credencial"
  },
  "fabricLabel": {
    "en": "View Microsoft Certified: Fabric Analytics Engineer Associate credential (opens in a new tab)",
    "es": "Ver credencial de Microsoft Certified: Fabric Analytics Engineer Associate (abre en una nueva pestaña)"
  },
  "copilotLabel": {
    "en": "View GH-300 - GitHub Copilot Associate Certification credential (opens in a new tab)",
    "es": "Ver credencial de GH-300 - GitHub Copilot Associate Certification (abre en una nueva pestaña)"
  },
  "contactLabel": {
    "en": "05 / NEXT CONNECTION",
    "es": "05 / PRÓXIMA CONEXIÓN"
  },
  "contactFirst": {
    "en": "Be part of the team.",
    "es": "Ser parte del equipo."
  },
  "contactSecond": {
    "en": "Help shape",
    "es": "Potenciar"
  },
  "contactAccent": {
    "en": "what’s next.",
    "es": "lo que viene."
  },
  "contactIntroFirst": {
    "en": "Let’s talk about technology, architecture",
    "es": "Hablemos de tecnología, arquitectura"
  },
  "contactIntroSecond": {
    "en": "and the next challenge.",
    "es": "y del próximo desafío."
  },
  "linkedinContact": {
    "en": "Connect on LinkedIn",
    "es": "Conectemos en LinkedIn"
  },
  "github": {
    "en": "My GitHub",
    "es": "Mi GitHub"
  },
  "backLabel": {
    "en": "Back to top",
    "es": "Volver al inicio"
  },
  "footer": {
    "en": "Human vision. Technical solutions.",
    "es": "Visión humana. Soluciones técnicas."
  },
  "back": {
    "en": "Back to top ↑",
    "es": "Volver arriba ↑"
  },
  "description": {
    "en": "Facundo Báez — Principal Software Engineer and Cloud Architect. Over 15 years connecting strategy, architecture and teams to turn ideas into software.",
    "es": "Facundo Báez — Principal Software Engineer y Cloud Architect. Más de 15 años conectando estrategia, arquitectura y equipos para transformar ideas en software."
  },
  "ogDescription": {
    "en": "Cloud architecture, software engineering and technical leadership. Explore my profile and expertise.",
    "es": "Arquitectura cloud, ingeniería de software y liderazgo técnico. Conocé mi perfil y mis especialidades."
  }
};
let currentLanguage = "en";

function setLanguage(language) {
  if (language !== "en" && language !== "es") return;
  currentLanguage = language;
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = translations[element.dataset.i18n][language];
  });
  ["aria-label", "content"].forEach((attribute) => {
    document.querySelectorAll(`[data-i18n-${attribute}]`).forEach((element) => {
      const key = element.getAttribute(`data-i18n-${attribute}`);
      element.setAttribute(attribute, translations[key][language]);
    });
  });
  document.querySelectorAll("[data-language]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.language === language));
  });
}

document.querySelectorAll("[data-language]").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});
setLanguage("en");
document.querySelector(".language-switch").hidden = false;
