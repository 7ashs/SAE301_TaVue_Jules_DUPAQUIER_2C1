<template>
  <div class="header-container bg-blanc shadow-md p-4 md:flex items-center justify-between fixed top-0 w-full z-50">
    <!-- Logo (visible sur les écrans larges) -->
    <router-link to="/" class="hidden md:block">
      <img src="/images/logo.svg" alt="Logo" class="header-logo h-8 w-8" />
    </router-link>

    <!-- Logo (visible sur les écrans plus petits) -->
    <router-link to="/" class="md:hidden">
      <img @click="toggleMenu" src="/images/logo.svg" alt="Logo" class="header-logo h-8 w-8 cursor-pointer" />
    </router-link>

    <!-- Navigation Links (visible sur les écrans larges) -->
    <div class="md:flex space-x-4 hidden">
      <router-link to="/" class="nav-link text-noir hover:text-bleuclair font-michroma">Accueil</router-link>
      <router-link to="/catalogue" class="nav-link text-noir hover:text-bleuclair font-michroma">Catalogue</router-link>
      <router-link to="/personnaliser" class="nav-link text-noir hover:text-bleuclair font-michroma">Personnaliser</router-link>
      <router-link to="/nos-agences" class="nav-link text-noir hover:text-bleuclair font-michroma">Nos Agences</router-link>
      <router-link to="/contact" class="nav-link text-noir hover:text-bleuclair font-michroma">Contactez nous</router-link>
      <!-- ... Ajoutez d'autres liens au besoin -->
    </div>

    <!-- Overlay (visible sur les écrans plus petits lorsque le menu est ouvert) -->
    <div v-if="isMenuOpen" class="md:hidden fixed top-0 left-0 w-full h-full bg-blanc z-10 flex items-center justify-center p-4 bg-opacity-95 transition-opacity duration-300 ease-in-out" @click="toggleMenu">
      <!-- Croix pour fermer l'overlay -->
          <router-link to="/" class="absolute top-2 right-2 text-noir hover:text-bleuclair focus:outline-none" @click="fermerFormulaire">
            <img src="/images/croix.svg" alt="Fermer" class="h-8 w-8" />
          </router-link>
      <!-- Navigation Links (centrés et avec un fondu) -->
      <div class="flex flex-col space-y-8 justify-center text-center">
        <router-link to="/accueil" class="nav-link text-noir hover:text-noir font-michroma" style="opacity: 0; animation: fadeIn 0.3s ease-in-out forwards 0.5s">Accueil</router-link>
        <router-link to="/catalogue" class="nav-link text-noir hover:text-noir font-michroma" style="opacity: 0; animation: fadeIn 0.3s ease-in-out forwards 0.6s">Catalogue</router-link>
        <router-link to="/personnaliser" class="nav-link text-noir hover:text-noir font-michroma" style="opacity: 0; animation: fadeIn 0.3s ease-in-out forwards 0.7s">Personnaliser</router-link>
        <router-link to="/nos-agences" class="nav-link text-noir hover:text-noir font-michroma" style="opacity: 0; animation: fadeIn 0.3s ease-in-out forwards 0.8s">Nos Agences</router-link>
        <router-link to="/contact" class="nav-link text-noir hover:text-noir font-michroma" style="opacity: 0; animation: fadeIn 0.3s ease-in-out forwards 0.9s">Contactez nous</router-link>
        <!-- ... Ajoutez d'autres liens au besoin -->
      </div>
      <!-- Icônes Account et Cart (centrés et en bas) -->
      <div class="flex justify-center space-x-4 mt-auto">
        <router-link to="/panier" class="profile-icon">
          <img src="/images/cart.svg" alt="Cart" class="h-8 w-8" />
        </router-link>
        <router-link to="/connexion" class="profile-icon">
          <img src="/images/account.svg" alt="Profil" class="h-8 w-8" />
        </router-link>
      </div>
    </div>
    <!-- Icône Personnage (visible sur les écrans larges) -->
    <div class="md:flex space-x-8 hidden">
      <router-link to="/panier" class="profile-icon">
        <img src="/images/cart.svg" alt="Cart" class="h-8 w-8" />
      </router-link>
      <router-link to="/connexion" class="profile-icon">
        <img src="/images/account.svg" alt="Profil" class="h-8 w-8" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
}
</script>

<style>
@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

  /* Styles pour la ligne qui apparaît de gauche à droite sous le lien */
  .nav-link::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0; /* Largeur initiale de la ligne */
    height: 2px; /* Hauteur de la ligne */
    background-color: bleuclair; /* Couleur de la ligne */
    transition: width 0.3s; /* Animation de largeur */
  }

  /* Au survol, la ligne s'étire de gauche à droite */
  .nav-link:hover::before {
    width: 100%; /* Largeur maximale de la ligne */
  }

</style>
