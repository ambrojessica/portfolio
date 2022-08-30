import { SiBootstrap, SiCsswizardry, SiHtml5, SiReact, SiRedux } from 'react-icons/si';

const projectsData = [
  {
    id: 5,
    name: 'Fitness E-commerce',
    image: require('../images/fitness.png'),
    icon: <><SiReact /> <SiRedux /> <SiCsswizardry /></>,
    description: 'Mockup Fitness Site',
    github: 'https://github.com/Fitness-Corp/FitnessCorp-FE',
    site: 'https://fitness-corp-fe.vercel.app/',
  },
  {
    id: 4,
    name: 'E-commerce Pizza Restaurant',
    image: require('../images/pizza2.png'),
    icon: <><SiReact /> <SiRedux /> <SiCsswizardry /></>,
    description: 'Online Ordering Pizza Delivery Site',
    github: 'https://github.com/ambrojessica/pizza',
    site: 'https://pizza-blush.vercel.app/',
  },
  {
    id: 3,
    name: 'Animal Crossing Art Work',
    image: require('../images/ac2.png'),
    icon: <><SiReact /><SiBootstrap /></>,
    description: 'Working with APIs and Bootstrap',
    github: 'https://github.com/ambrojessica/working-with-APIs',
    site: 'https://working-with-api-ji1oqbft2-ambrojessica.vercel.app/',
  },
  {
    id: 2,
    name: 'Flexbox Practice Portfolio',
    image: require('../images/practice.png'),
    icon: <><SiHtml5 /> <SiCsswizardry /></>,
    description: 'Practicing Flexbox and a Fake Portfolio',
    github: 'https://github.com/ambrojessica/practice-portfolio',
    site: 'https://ambrojessica.github.io/practice-portfolio/',
  },
  {
    id: 1,
    name: 'Faux Car Product Services',
    image: require('../images/car.png'),
    icon: <><SiHtml5 /> <SiCsswizardry /></>,
    description: 'Faux Product, Practicing Flexbox and CSS Animations',
    github: 'https://github.com/ambrojessica/car-product',
    site: 'https://ambrojessica.github.io/car-product/',
  },
];

export default projectsData;