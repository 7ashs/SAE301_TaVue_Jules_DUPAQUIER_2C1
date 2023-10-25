<script setup>
import HeaderView from '../components/HeaderView.vue';
import FooterView from '../components/FooterView.vue';
</script>
<template>
<HeaderView />
<div>
    <div class="text-center text-5xl mt-24">
        <p class="font-michroma text-bleu inline-block">100%</p>
        <p class="font-inter font-bold uppercase inline-block mx-4">Personnalisée.</p>
    </div>
    <div class="text-center text-5xl mb-24">
        <p class="font-michroma text-bleu inline-block">100%</p>
        <p class="font-inter font-bold uppercase inline-block mx-4">Vous.</p>
    </div>
</div>

<!-- CUSTOMISATION DES LUNETTES A INSERER ICI -->

<div class="flex justify-end mr-36 mt-10 mb-10">
  <router-link to="/panier">
    <button class="mx-auto">
      Ajouter au panier
    </button>
  </router-link>
</div>

<div class="article1 mt-10">
    <div class="flex flex-col lg:flex-row">
        <!-- Partie texte à gauche (large écran) -->
        <div class="lg:w-1/2">
            <h1 class="text-2xl mb-4 m-5">À propos de la montre Unica</h1>
            <p class="text-noir m-10 text-justify">
                Avec plus de 200 combinaisons de personnalisation, la montre Unica est véritablement 100% personnalisable, en vous offrant l'opportunité de créer une montre qui est authentiquement et 100% vous.
                Notre gamme d'options pour les branches, la monture et la teinte des verres vous permet de jouer avec la couleur et de faire vibrer votre propre style pour trouver la combinaison parfaite qui reflète votre personnalité.

                Que vous soyez attiré par un design épuré et minimaliste ou que vous préfériez les détails sophistiqués, Unica a tout ce qu'il vous faut.
            </p>
        </div>

         <!-- Image à droite (large écran) -->
        <div class="lg:w-1/2">
            <img src="/images/article1.webp" alt="Article1" class="w-auto h-auto p-10">
        </div>
    </div>
</div>

<div class="article2 mb-10">
    <div class="flex flex-col lg:flex-row-reverse">
        <!-- Partie texte à droite (large écran) -->
        <div class="lg:w-1/2">
            <h1 class="text-2xl mb-4 m-5">Des branches à la monture, entièrement recyclables</h1>
            <p class="text-noir m-10 text-justify">
                Chez TaVue, nous nous sommes engagés à repousser les limites de la créativité et de l'innovation, tout en préservant notre planète. C'est pourquoi nous sommes fiers de vous présenter notre dernière création, une paire de lunettes qui redéfinit le style, le confort et l'éco-responsabilité.
                Nos montures et branches sont conçues avec des matériaux de haute qualité qui ont un impact minimal sur l'environnement. Mais ce qui distingue vraiment notre paire de lunettes, c'est qu'elle est entièrement recyclable. Une fois que vous avez profité pleinement de votre paire, vous pouvez la retourner pour qu'elle soit transformée en de nouvelles lunettes, réduisant ainsi la production de déchets et préservant nos ressources naturelles.
                Notre paire de lunettes recyclable est un témoignage de notre engagement à réduire notre empreinte carbone, à minimiser les déchets plastiques et à préserver la beauté de notre planète pour les générations futures.
            </p>
        </div>

         <!-- Image à gauche (large écran) -->
        <div class="lg:w-1/2">
            <img src="/images/article2.webp" alt="Article2" class="w-auto h-auto p-10">
        </div>
    </div>
</div>


<FooterView/>
</template>

<style scoped>

</style>