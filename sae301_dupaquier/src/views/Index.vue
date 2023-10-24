<script setup>
import HeaderView from '../components/HeaderView.vue';
import FooterView from '../components/FooterView.vue';
import CardView from '../components/CardView.vue';
</script>
<template>
  <HeaderView />

<div style="position: relative;">
  <img src="/images/index-img.webp" alt="Index-Img" style="width: 100%; height: auto;">
  <router-link to="'/personnaliser'">
    <button style="position: absolute; top: 75%; left: 75%; transform: translate(-50%, -50%); width: 30%; height: 10%; font-size: 1em; text-align: center; padding: 10px;">
    Personnaliser ses futures lunettes
  </button>
  </router-link>
</div>

<h1>Catalogue</h1>

<div class="flex space-x-5 m-10">
  <CardView />
  <CardView />
</div>


<FooterView/>
</template>

<style scoped>

</style>