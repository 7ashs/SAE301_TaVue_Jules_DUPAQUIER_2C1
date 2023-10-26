<script setup>
  import { ref, onMounted } from 'vue';

  import PocketBase from 'pocketbase'
  const pb = new PocketBase("http://127.0.0.1:8090");

  

  let colors = ref([]);
  
  let CouleurMonture = ref('#B2B2B2');
  let CouleurBranch = ref('#DADADA');
  let CouleurGlass = ref('#1D1D1D');

  onMounted(() => {
    getColors()
  });

  const getColors = async () => {
    colors.value = await pb.collection("Couleur")
    .getFullList({ sort: "hex_couleur" });
    console.log(colors.value)
  };

  const CouleurChoisi = (type, item) => {
  if (type == "monture") {
    CouleurMonture.value = item.hex_couleur;
    console.log(CouleurMonture.value);
  } else if (type == "branch") {
    CouleurBranch.value = item.hex_couleur;
    console.log(CouleurBranch.value);
  } else if (type == "glass") {
    CouleurGlass.value = item.hex_couleur;
    console.log(CouleurGlass.value);
  }
};


</script>


<template>
    <div class="customize-container">
      <div class="customize-glasses">
        <!-- L'image/svg des lunettes devrait être ici -->
</div>

      <div class="color-options">
        <h3>BRANCHES</h3>
        <div class="colors">
          <div v-for="Couleur in colors" :key="Couleur.id" v-bind:style="{ background: Couleur.hex_couleur }" @click="CouleurChoisi('branch', Couleur)"></div>
        </div>

        <h3>MONTURE</h3>
        <div class="colors">
          <div v-for="Couleur in colors" :key="Couleur.id" v-bind:style="{ background: Couleur.hex_couleur }" @click="CouleurChoisi('monture', Couleur)"></div>
        </div>

        <h3>TEINTE DES VERRES</h3>
        <div class="colors">
            <h1 class="mr-4">Branches :</h1>
          <div class="">
            <button class="w-14 h-8 mr-4" v-for="Couleur in colors" :key="Couleur.id" v-bind:style="{ background: Couleur.hex_couleur }" @click="CouleurChoisi('branch', Couleur)"></button>
          </div>
        </div>

        <!-- Autres éléments comme le prix et le bouton Ajouter au panier -->
      </div>
    </div>
</template>

<style scoped>
  .customize-container {
    display: flex;
    justify-content: space-between;
  }

  .color-options h3 {
    margin-top: 1em;
  }

  .colors div {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 10px;
    cursor: pointer;
  }

  /* Ajoutez d'autres styles si nécessaire */
</style>