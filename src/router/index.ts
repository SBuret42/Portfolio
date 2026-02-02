import { createRouter, createWebHistory } from 'vue-router';
import landingView from '../views/landingView.vue';
import projetView from '../views/projetView.vue';
import projetFractalesView from '../views/projetFractalesView.vue';
import projetRobotView from '../views/projetRobotView.vue';
import projetClassificateurView from '../views/projetClassificateurView.vue';
import projetSiteInstitutionnelView from '../views/projetSiteInstitutionnelView.vue';
import projetAnalyseBDView from '../views/projetAnalyseBDView.vue';
import NotFoundView from '../views/NotFoundView.vue'

const routes = [
  {
    path: '/',
    name: 'landing',
    component: landingView,
  },{
    path: '/projets',
    name: 'projets',
    component: projetView,
  },{
    path: '/projetFractales',
    name: 'projetFractales',
    component: projetFractalesView,
  },{
    path: '/projetRobot',
    name: 'projetRobot',
    component: projetRobotView,
  },{
    path: '/projetClassificateur',
    name: 'projetClassificateur',
    component: projetClassificateurView,
  },{
    path: '/projetSiteInstitutionnel',
    name: 'projetSiteInstitutionnel',
    component: projetSiteInstitutionnelView,
  },{
    path: '/projetAnalyseBD',
    name: 'projetAnalyseBD',
    component: projetAnalyseBDView,
  },
  {
      path: '/NotFound',
      name: 'NotFound',
      component: NotFoundView
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  }
});

export default router;
