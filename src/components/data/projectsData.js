import { SiBootstrap, SiCsswizardry, SiHtml5, SiReact, SiRedux } from 'react-icons/si';

const projectsData = [
  {
    id: 1,
    name: 'E-commerce Pizza Restaurant',
    image: require('../images/pizza.png'),
    icon: <><SiReact /> <SiRedux /> <SiCsswizardry /></>,
    description: 'Online Ordering Pizza Delivery Site',
    github: 'https://github.com/ambrojessica/pizza',
    site: 'https://pizza-blush.vercel.app/',
  },
  {
    id: 2,
    name: 'Animal Crossing Art Work',
    image: require('../images/ac2.png'),
    icon: <><SiReact /><SiBootstrap /></>,
    description: 'Working with APIs and Bootstrap',
    github: 'https://github.com/ambrojessica/working-with-APIs',
    site: 'https://working-with-api-ji1oqbft2-ambrojessica.vercel.app/',
  },
  {
    id: 3,
    name: 'Flexbox Practice Portfolio',
    image: require('../images/practice.png'),
    icon: <><SiHtml5 /> <SiCsswizardry /></>,
    description: 'Practicing Flexbox and a Fake Portfolio',
    github: 'https://github.com/ambrojessica/practice-portfolio',
    site: 'https://ambrojessica.github.io/practice-portfolio/',
  },
];

export default projectsData;