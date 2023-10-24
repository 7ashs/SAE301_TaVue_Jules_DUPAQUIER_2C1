<script setup>
</script>

<template>
    <header class="bg-black h-[130px]">
        <RouterLink class="text-black" to="/accueil">Accueil</RouterLink>
    </header>

    <header class="bg-gray-200 py-2 md:py-4">
    <nav class="container px-4 mx-auto md:flex md:items-center">
      <div class="flex justify-between items-center">
        <RouterLink class="text-black" to="/accueil">Accueil</RouterLink>
        <a href="#" class="font-bold text-xl text-gray-800">Mon site</a>
        <div class="flex items-center">
          <a href="#" class="text-gray-600">À propos</a>
          <a href="#" class="text-gray-600">Contact</a>
        </div>
      </div>
    </nav>
  </header>
    <RouterView />
</template>

<style scoped>
</style>
