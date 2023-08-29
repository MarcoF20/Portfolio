import htmlIcon from '../assets/icons/html-icon.svg'
import cssIcon from '../assets/icons/css-icon.svg'
import jsIcon from '../assets/icons/js-icon.svg'
import figmaIcon from '../assets/icons/figma-icon.svg'
import androidIcon from '../assets/icons/androidIcon.svg'
import javaIcon from '../assets/icons/javaIcon.svg'
import firebaseIcon from '../assets/icons/firebaseIcon.svg'
import materialIcon from '../assets/icons/materialIcon.svg'
import phpIcon from '../assets/icons/phpIcon.svg'
import bootstrapIcon from '../assets/icons/bootstrapIcon.svg'
import gitIcon from '../assets/icons/gitIcon.svg'
import stripeIcon from '../assets/icons/stripeIcon.svg'
import mysqlIcon from '../assets/icons/mysqlIcon.svg'
import reactIcon from '../assets/icons/reacticon.svg'
import muiIcon from '../assets/icons/muiIcon.svg'
import lifemedic from '../assets/mockups/lifemedic.webp'
import mascotienda from '../assets/mockups/mascotienda.webp'
import ppt from '../assets/mockups/ppt.webp'
import crud from '../assets/mockups/crud.webp'
import hangman from '../assets/mockups/hangman.webp'

export const projects = [
  {
    id: 1,
    image: lifemedic,
    title: 'Lifemedic',
    description: 'Android application built in Android Studio using Java, project uses authentication from firebase and registers appointments, adding it to your calendar',
    skills: [androidIcon, javaIcon, firebaseIcon, materialIcon, figmaIcon],
    repo: 'https://github.com/MarcoF20/Lifemedic',
    demo: false
  },
  {
    id: 2,
    image: hangman,
    title: 'Hangman',
    description: 'React-based Hangman game showcasing core concepts such as useState and useEffect for state management, API data retrieval, and integration of Material-UI components for enhanced user interface.',
    skills: [reactIcon, jsIcon, muiIcon, gitIcon],
    repo: 'https://github.com/MarcoF20/hangman-react',
    demo: 'https://francodev-hangman.netlify.app/'
  },
  {
    id: 3,
    image: mascotienda,
    title: 'MascoTienda',
    description: 'E-Commerce fundamentals (adding products, shopping cart, payment) built with Bootstrap and PHP for backend, Stripe as payment method',
    skills: [phpIcon, bootstrapIcon, stripeIcon, mysqlIcon, htmlIcon, cssIcon, jsIcon, gitIcon],
    repo: 'https://github.com/MarcoF20/MascoTienda',
    demo: 'https://abeyant-equivalents.000webhostapp.com/'
  },
  {
    id: 4,
    image: crud,
    title: 'School CRUD',
    description: 'Developed a PHP CRUD application for student management, featuring essential functionalities like adding, deleting, and searching for student data.',
    skills: [phpIcon, htmlIcon, cssIcon, mysqlIcon],
    repo: 'https://github.com/MarcoF20/CRUD-Alumnos',
    demo: false
  },
  {
    id: 5,
    image: ppt,
    title: 'Rock, papper, scissors',
    description: 'Crafted a dynamic Rock-Paper-Scissors game with HTML, CSS, and JavaScript. Employed conditional statements and setInterval for image transitions, showcasing fundamental coding and interactive web development skills.',
    skills: [jsIcon, htmlIcon, cssIcon],
    repo: 'https://github.com/MarcoF20/CRUD-Alumnos',
    demo: false
  }
]
