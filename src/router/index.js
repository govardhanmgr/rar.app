import { createRouter, createWebHashHistory } from 'vue-router' 
import launchPage from '../components/launchPage.vue';
import LDBPage from '../components/LDBPage.vue';
import PadPage from '../components/PadPage.vue';
import ReportPage from '../components/ReportPage.vue';
import DashPage from '../components/DashPage.vue' ;
import amdPage from '../components/amdPage.vue' ;
import activeEmplydata from '../components/activeEmplydata.vue' ;
import employeeData from '../components/employeeData.vue' ;
import orgnData from '../components/orgnData.vue' ;

const routes = [
  {
    path: '/amdPage',
    name: 'amdPage',
    component: amdPage
},
{
  path: '/activeEmplydata',
  name: 'activeEmplydata',
  component: activeEmplydata
},
{
  path: '/employeeData',
  name: 'employeeData',
  component: employeeData
},
{
  path: '/orgnData',
  name: 'orgnData',
  component: orgnData
},
  {
    path: '/DashPage',
    name: 'DashPage',
    component: DashPage
},
    {
        path: '/launchPage',
        name: 'launchPage',
        component: launchPage
  },

  {
    path: '/LDBPage',
    name: 'LDBPage',
    component: LDBPage
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
  routes : routes
})

export default router
