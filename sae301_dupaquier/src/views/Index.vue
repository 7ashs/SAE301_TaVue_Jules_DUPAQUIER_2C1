<script setup>
import CardView from '../components/CardView.vue';
</script>
<template>
<div style="position: relative;">
  <img src="/images/index-img.webp" alt="Index-Img" style="width: 100%; height: auto;">
  <router-link to="'/personnaliser">
    <button style="position: absolute; top: 75%; left: 75%; transform: translate(-50%, -50%); width: 30%; height: 10%; font-size: 1em; text-align: center; padding: 10px;">
    Personnaliser ses futures lunettes
  </button>
  </router-link>
</div>
<h1 class="text-3xl">Catalogue</h1>
<div class="flex space-x-5 ml-10 items-center">
  <div>
    <CardView />
    <div class="text-center mt-5 text-2xl ">199,99€</div> 
  </div>
  <div>
    <CardView />
    <div class="text-center mt-5 text-2xl ">199,99€</div> 
  </div>  <div>
    <CardView />
    <div class="text-center mt-5 text-2xl ">199,99€</div> 
  </div>  <div>
    <CardView />
    <div class="text-center mt-5 text-2xl ">199,99€</div> 
  </div>
</div>
<div class="flex justify-center mt-10 mb-10">
  <router-link to="/catalogue">
    <button class="mx-auto">
      Voir plus
    </button>
  </router-link>
</div>
<h1 class="text-3xl">Besoin d'informations</h1>
<div style="position: relative;" class="mt-10 mb-10">
  <img src="/images/infos.webp" alt="Index-Info" style="width: 100%; height: auto;">
  <router-link to="'/nos-agences'">
    <button style="position: absolute; top: 75%; left: 50%; transform: translate(-50%, -50%); width: 30%; height: 10%; font-size: 1em; text-align: center; padding: 10px;">
    Trouvez votre agence
  </button>
  </router-link>
</div>
<div style="position: relative;" class="mt-10 mb-10">
  <img src="/images/contact.webp" alt="Index-Info" style="width: 100%; height: auto;">
  <router-link to="'/contactez-nous'">
    <button style="position: absolute; top: 75%; left: 75%; transform: translate(-50%, -50%); width: 30%; height: 10%; font-size: 1em; text-align: center; padding: 10px;">
    Formulaire de contact
  </button>
  </router-link>
</div>
<h1 class="text-3xl">Vos lunettes personnalisés</h1>
<h2 class="font-bold">Créez des lunettes qui vous correspondent</h2>
<img src="/images/lunettes.svg" alt="Lunettes-XL" class="mx-auto my-auto mt-20 mb-20 w-96">
<div class="flex justify-center mt-10 mb-10">
  <router-link to="/personnaliser">
    <button class="mx-auto">
      Personnaliser mes futures lunettes
    </button>
  </router-link>
</div>
</template>

<style scoped>

</style>