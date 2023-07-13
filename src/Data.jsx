import Project1 from './assets/project1.jpg';
import Project2 from './assets/project2.jpg';
import Project3 from './assets/project3.jpg';
import Project4 from './assets/project4.jpg';
import Project5 from './assets/project5.jpg';
import Project6 from './assets/project6.jpg';
import Project7 from './assets/github-API.jpg';
import Project8 from './assets/mywallet.png';
import Project9 from './assets/fast-food-page.jpg';
import Project10 from './assets/login-animated.jpg';
import Project11 from './assets/WebStore.png';



export const links = [
  {
    name: 'Home',
    path: 'home',
  },
  {
    name: 'Services',
    path: 'services',
  },
  {
    name: 'Skills',
    path: 'skills',
  },
  {
    name: 'Projects',
    path: 'work',
  },
  {
    name: 'Contact',
    path: 'contact',
  },
  {
    name: 'Footer',
    path: 'footer',
  },
];

export const services = [
  {
    id: 1,
    name: 'Web Design',
    title: 'Web Design UI UX',
    description:
    'Crear una interfaz atractiva, fácil de usar y que brinde una experiencia satisfactoria al usuario puede mejorar la eficiencia del sitio web o la aplicación, aumentar la retención del usuario y mejorar la percepción de la marca.',
  },
  {
    id: 2,
    name: ' Webs & Apps Development ',
    title: ' Responsive Website ',
    description:
    'Un sitio web diseñado para adaptarse automáticamente al tamaño de la pantalla del dispositivo en el que se está visualizando, ya sea una computadora de escritorio, una tableta o un teléfono móvil.',
  },
  {
    id: 3,
    name: ' APIs integration ',
    title: ' APIs ',
    description:
    'Integración de APIs para agregar servicios de terceros, mejorar la funcionalidad y la interacción con el usuario.',
  },
  {
    id: 4,
    name: ' Maintenance ',
    title: ' Maintenance & Upgrades',
    description:
    'Mantenimiento y actualización de sitios web existentes.',
  },
  {
    id: 5,
    name: ' Components ',
    title: ' Component Development',
    description:
    'Desarrollo de componentes de interfaz de usuario personalizados, como menús, botones y formularios reutilizables.',
  },
];

export const skills = [
  {
    id: 1,
    name: 'HTML & CSS',
    percentage: 80,
  },

  {
    id: 2,
    name: 'JavaScript',
    percentage: 75,
  },

  {
    id: 3,
    name: 'Git / Github',
    percentage: 75,
  },

  {
    id: 4,
    name: 'Figma',
    percentage: 79,
  },

  {
    id: 5,
    name: 'React',
    percentage: 60,
  },

  {
    id: 6,
    name: 'My SQL Workbench y PostgreSQL',
    percentage: 60,
  },
];

export const projects = [
  {
    id: 1,
    img: Project1,
    category: 'Responsive Design',
    title: 'Navbar Responsive Design',
    description:
      'Barra de navegación que se adapta automáticamente a diferentes tamaños de pantalla que icluye enlaces a diferentes secciones de la página ',
    enlace: 'https://github.com/NicolasOriglia/ProyectsJs/tree/main/responsive-navbar',
    },
  {
    id: 2,
    img: Project2,
    category: 'API`s',
    title: 'API Wheather',
    description:
      'Una página web con una API integrada que muestra información meteorológica actualizada y en tiempo real.',
    enlace: 'https://github.com/NicolasOriglia/ProyectsJs/tree/main/Wheather-app',
    },
  {
    id: 3,
    img: Project3,
    category: 'Development',
    title: 'To do list',
    description:
      'Sistema de gestión de tareas que permite a los usuarios hacer un seguimiento de las tareas que deben completarse.',
    enlace: 'https://github.com/NicolasOriglia/ProyectsJs/tree/main/to-do-list'
  },
  {
    id: 4,
    img: Project4,
    category: 'Development',
    title: 'Ecommerce',
    description:
      'Ecommerce Responsive, con carrito de compras integrado, detalles de los productos, precio total, busquedas avanzadas y por categoria.',
    enlace: 'https://github.com/NicolasOriglia/ProyectsJs/tree/main/Ecommerce%20Website'
  },
  {
    id: 5,
    img: Project5,
    category: 'API`s',
    title: 'API Text to Speech',
    description:
      'Un proyecto con una API integrada de Text-to-Speech (TTS) es un sistema que convierte texto escrito en voz humana.',
    enlace: 'https://github.com/NicolasOriglia/ProyectsJs/tree/main/Text-To-Speech'
  },
  {
    id: 6,
    img: Project6,
    category: 'Development',
    title: 'Personal Portfolio JS',
    description:
      'Personal Portfolio, hecho con JS (JavaScript), CSS (Cascading Style Sheets) y HTML (Hypertext Markup Language).',
    enlace: 'https://github.com/NicolasOriglia/Personal-Portfolio.github.io',
  },
  {
    id: 7,
    img: Project7,
    category: 'API`s',
    title: 'API github',
    description:
      'API que recupera y muestra la información de un perfil de github',
    enlace: 'https://github.com/NicolasOriglia/ProyectsJs/tree/main/GitHub-Api',
  },
  {
    id: 8,
    img: Project8,
    category: 'UI UX Design',
    title: 'Wallet Design',
    description:
      'Diseño de billetera virtual a traves de Fingma',
    enlace: 'https://drive.google.com/drive/folders/17fhfbt-oez2GaS39b6agmHcttaCXP5ZC?usp=sharing',
  },
  {
    id: 9,
    img: Project9,
    category: 'Responsive Design',
    title: 'Web Fast Food',
    description:
      'Pagina de restaurante Fast Food con un diseño responsive y creativo',
    enlace: 'https://github.com/NicolasOriglia/ProyectsJs/tree/main/Responsive-fast-food',
  },
  {
    id: 10,
    img: Project10,
    category: 'UI UX Design',
    title: 'Login Animated',
    description:
      'Login animado, UI Design',
    enlace: 'https://github.com/NicolasOriglia/ProyectsJs/tree/main/animated-login',
  },
  {
    id: 11,
    img: Project11,
    category: 'UI UX Design',
    title: 'Web Store',
    description:
      'Tienda web para la compra de productos de jardin y plantas de interior/ exterior',
    enlace: 'https://drive.google.com/drive/folders/17fhfbt-oez2GaS39b6agmHcttaCXP5ZC?usp=sharing',
  },
  
];



