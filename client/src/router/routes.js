import Home from '../components/home/home'

export const routes = [
  { name: 'Home', path: '/', component: Home, display: 'Home', meta: { title: 'tanvirmislam' } },
  { path: '*', redirect: '/' }
]
