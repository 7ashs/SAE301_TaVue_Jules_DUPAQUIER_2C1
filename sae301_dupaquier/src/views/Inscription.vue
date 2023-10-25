<script setup>

</script>
<template>
    <div class="relative">
      <img src="/images/connexion.webp" alt="Connexion" class="blur">
      <div class="absolute inset-0 flex items-center justify-center">
        <!-- Formulaire d'inscription -->
        <form class="bg-blanc p-4 md:p-8 shadow-md relative">
          <!-- Bouton de fermeture en haut à droite -->
          <router-link to="/" class="absolute top-2 right-2 text-noir hover:text-bleuclair focus:outline-none" @click="fermerFormulaire">
            <img src="/images/croix.svg" alt="Fermer" class="h-8 w-8" />
          </router-link>
  
          <h1 class="text-3xl text-bleu mb-4">S'INSCRIRE</h1>
          <!-- Texte pour s'inscrire -->
          <p class="text-noir text-sm mt-4 mb-4">
            Déjà inscrit sur notre site ? <router-link to="/connexion" class="text-bleu hover:underline">Connectez vous</router-link> !
          </p>
          <div class="mb-4">
            <label for="nom" class="block text-noir font-michroma">Nom</label>
            <input
              type="text"
              id="nom"
              class="w-full px-3 py-2 border border-noir"
              placeholder="Votre nom"
            />
          </div>
          <div class="mb-4">
            <label for="prenom" class="block text-noir font-michroma">Prénom</label>
            <input
              type="text"
              id="prenom"
              class="w-full px-3 py-2 border border-noir"
              placeholder="Votre prénom"
            />
          </div>
          <div class="mb-4">
            <label for="email" class="block text-noir font-michroma">Adresse e-mail</label>
            <input
              type="email"
              id="email"
              class="w-full px-3 py-2 border border-noir"
              placeholder="Votre adresse e-mail"
            />
          </div>
          <div class="mb-4">
            <label for="password" class="block text-noir font-michroma">Mot de passe</label>
            <input
              type="password"
              id="password"
              class="w-full px-3 py-2 border border-noir"
              placeholder="Mot de passe"
            />
          </div>
          <button
          class="w-full bg-bleu text-blanc p-3 rounded font-inter font-bold text-xl"
        >
          S'inscrire
        </button>
        <!-- Texte pour les connexions alternatives -->
        <p class="text-noir text-sm mt-4 text-center">Ou s'inscrire avec</p>
        <!-- Bouton Google pour inscription -->
        <router-link to="/" class="flex items-center mt-2">
          <img src="/images/google-icon.svg" alt="Google" class="h-8 w-8 mr-2" />
          S'inscrire avec Google
        </router-link>
        <!-- Bouton GitHub pour inscription -->
        <router-link to="/" class="flex items-center mt-2">
          <img src="/images/github-icon.svg" alt="GitHub" class="h-8 w-8 mr-2" />
          S'inscrire avec GitHub
        </router-link>
      </form>
    </div>
  </div>
</template>
  
  <script>
  export default {
    methods: {
      fermerFormulaire() {
        // Ajoutez ici la logique pour fermer le formulaire
      },
    },
  };
  </script>

<style scoped>
/* Si vous avez besoin d'ajouter des styles personnalisés, vous pouvez le faire ici */
</style>