<template>
  <header class="bg-gray-900 text-white">
    <div class="container mx-auto p-4 flex items-center justify-between">
      <div class="flex items-center">
        <img src="/images/logo.svg" alt="TaVue-Logo" class="h-10 w-10" />
        <nav class="hidden md:flex space-x-4 ml-4">
          <router-link to="/">Accueil</router-link>
          <router-link to="/catalogue">Catalogue</router-link>
          <router-link to="/personnaliser">Personnaliser</router-link>
          <router-link to="/agences">Nos agences</router-link>
          <router-link to="/contact">Contactez-nous</router-link>
          <!-- Ajoutez d'autres liens ici -->
        </nav>
      </div>
      <div class="flex items-center space-x-4">
        <router-link to="/compte">
          <i class="fas fa-user"></i>
        </router-link>
        <router-link to="/panier">
          <i class="fas fa-shopping-cart"></i>
        </router-link>
        <button @click="toggleMobileMenu" class="md:hidden">
          <i class="fas fa-bars"></i>
        </button>
      </div>
    </div>
    <!-- Menu hamburger pour mobile -->
    <div v-if="mobileMenuOpen" class="bg-gray-900">
      <nav class="flex flex-col items-center space-y-2 p-4">
        <router-link to="/">Accueil</router-link>
        <router-link to="/catalogue">Catalogue</router-link>
        <router-link to="/personnaliser">Personnaliser</router-link>
        <router-link to="/agences">Nos agences</router-link>
        <router-link to="/contact">Contactez-nous</router-link>
        <!-- Ajoutez d'autres liens ici -->
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      mobileMenuOpen: false,
    };
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
  },
};
</script>
