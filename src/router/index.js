import { createRouter, createWebHashHistory } from 'vue-router' 
import launchPage from '../components/launchPage.vue';
import LdbPage from '../components/LdbPage.vue';
import PadPage from '../components/PadPage.vue';
import ReportPage from '../components/ReportPage.vue';

const routes = [
    {
        path: '/launchPage',
        name: 'launchPage',
        component: launchPage
  },

  {
    path: '/LdbPage',
    name: 'LdbPage',
    component: LdbPage
  },

  {
    path: '/PadPage',
    name: 'PadPage',
    component: PadPage
  },

  {
    path: '/ReportPage',
    name: 'ReportPage',
    component: ReportPage
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
