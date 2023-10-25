<script setup>
</script>
<template>
    <div class="text-center text-5xl mt-24">
        <p class="font-michroma text-bleu inline-block">OUPS !</p>
        <p class="font-inter font-bold uppercase inline-block mx-4">Raté.</p>
    </div>

    <h2 class="font-bold">La page que vous tentez d'accéder n'existe pas ou n'a pas été terminé !</h2> 
    
<img src="/images/error.svg" alt="Error" class="w-32 h-32 mx-auto my-auto">
<div class="flex justify-center mt-20 mb-10">
  <router-link to="/">
    <button class="mx-auto">
      Retournez à l'accueil
    </button>
  </router-link>
</div>
</template>

<style scoped>

</style>