<script setup>
import Map from '../components/Map.vue';
</script>
<template>
<Map />
<div class="flex justify-center mt-5 mb-10">
  <router-link to="/liste-agences">
    <button class="mx-auto">
      Voir la liste de nos Agences
    </button>
  </router-link>
</div>
</template>

<style scoped>

</style>