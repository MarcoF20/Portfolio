import wordpressIcon from '../assets/icons/wordpress-icon.svg'
import htmlIcon from '../assets/icons/html-icon.svg'
import cssIcon from '../assets/icons/css-icon.svg'
import jsIcon from '../assets/icons/js-icon.svg'
import figmaIcon from '../assets/icons/figma-icon.svg'
import androidIcon from '../assets/icons/androidIcon.svg'
import javaIcon from '../assets/icons/javaIcon.svg'
import firebaseIcon from '../assets/icons/firebaseIcon.svg'
import materialIcon from '../assets/icons/materialIcon.svg'
import lifemedic from '../assets/lifemedic.png'

export const projects = [
  {
    id: 1,
    image: lifemedic,
    title: 'Lifemedic',
    description: 'Android application built in Android Studio using Java, project uses authentication from firebase and registers appointments, adding it to your calendar',
    skills: [androidIcon, javaIcon, firebaseIcon, materialIcon, figmaIcon],
    repo: 'https://github.com/MarcoF20/Lifemedic',
    demo: false
  }
]
