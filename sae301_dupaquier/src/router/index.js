import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue';
import Personnaliser from '../views/Personnaliser.vue';
import NosAgences from '../views/NosAgences.vue';
import Connexion from '../views/Connexion.vue';

// Import pocketbase
import PocketBase from 'pocketbase'
// Objet pocketBase
const pb = new PocketBase("http://127.0.0.1:8090");

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/',                           name: 'Index',                  component: Index },
    { path: '/personnaliser',              name: 'Personnaliser',          component: Personnaliser},
    { path: '/nos-agences',                name: 'Nos-Agences',            component: NosAgences},
    { path: '/connexion',                  name: 'Connexion',              component: Connexion},
  ]
})

// Vérification de route demandée
// to : où il veut aller
// from : d'où il vient 
// next : s'il peut y aller
router.beforeEach( (to, from, next) =>{
  if(to.name == "IndexView"){ // Si page d'accueil demandée, on autorise
    next()
  }else{  // Si une autre route est demandée, on vérifie si l'utilisateur est connecté        
    if(pb.authStore.model != null){ // Utilisateur connecté => OK
      next()
    }else{ // Utilisateur non connecté, redirection sur la page d'acceuil
      router.push({name:"IndexView"})
    }
  }
})

export default router
