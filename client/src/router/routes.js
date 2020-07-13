import Home from '../components/home/home.vue';
import ResearchProjectSDR from '../components/research-projects/sdr.vue';

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home,
    display: 'Home',
    meta: { title: 'tanvirmislam' },
  },
  {
    name: 'Research Project',
    path: '/research/sdr',
    component: ResearchProjectSDR,
    display:
    'Research Project - SDR',
    meta: { title: 'Research Projects' },
  },
  {
    path: '*',
    redirect: '/',
  },
];

export default routes;
