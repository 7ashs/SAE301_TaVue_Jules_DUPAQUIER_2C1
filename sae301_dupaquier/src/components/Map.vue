<script setup>
import { onMounted, ref } from 'vue'

import * as Leaflet from 'leaflet'

import 'leaflet/dist/leaflet.css'


let tileLayer = Leaflet.tileLayer

let map = ref()


let coordMe = ref({
    latitude : 0,
    longitude : 0
})

onMounted( async ()=> {

    tileLayer = Leaflet.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }
  );

  map = Leaflet.map('map',
    {
        zoomControl: true,
        layers: [tileLayer], 
        maxZoom: 18,       
        minZoom: 6      
    })

    .setView([47.495328, 6.8044455], 15)


    let myIcon = Leaflet.icon({
        iconUrl:    'images/marker.svg',            // Image de l'icone
    //  shadowUrl:  'images/marker-shadow.png',     // Ombre de l'icone
        iconSize:   [64, 64],                       // Taille de l'icone
    //  shadowSize: [25, 41],                       // Taille de l'ombre de l'icone
        iconAnchor: [-10,-10],                      // Ancrage de l'icone
    //  shadowAnchor: [-10,-10],                    // Ancrage de l'ombre de l'icone
        popupAnchor: [0, 0]                         // Point de position de la popup si elle existe
    })


    let marker = Leaflet.marker([47.509839836496006, 6.79936597599405], {icon: myIcon}).addTo(map)
  
    marker.bindPopup('Notre boutique de Montbéliard')

    // Ajout nouveau marker
    // à la position de recentrage
    let marker2 = Leaflet.marker([47.32262578450792, 5.036228114742021], {icon: myIcon}).addTo(map)

    // Ajouter une popup / infobulle
    marker2.bindPopup('Notre boutique de Dijon')

    // Ajout nouveau marker
    // à la position de recentrage
    let marker3 = Leaflet.marker([48.85848172984823, 2.2944952228408875], {icon: myIcon}).addTo(map)

    // Ajouter une popup / infobulle
    marker3.bindPopup('Notre nouvelle boutique à Paris ! Venez la découvrir !')
  
    setTimeout(
        function() {
            map.panTo([47.50133850064826, 6.807621746718467])
        }, 5000
    )

})

const locMe = () => {

    navigator.geolocation.getCurrentPosition(showLocation)
}
const showLocation = (position) => {
console.log("postion", position)        

    coordMe.value.latitude = position.coords.latitude
    coordMe.value.longitude = position.coords.longitude

    map.panTo([coordMe.value.latitude, coordMe.value.longitude])

    let markerMe = Leaflet.marker([coordMe.value.latitude, coordMe.value.longitude]).addTo(map) 

    markerMe.bindPopup('Vous êtes ici')
}
</script>
<template>
<section class="p-10">
    <div class="">
        <div class="text-center text-5xl mt-12 mb-12">
            <p class="font-michroma text-bleu inline-block">Trouvez</p>
            <p class="font-inter font-bold uppercase inline-block mx-4">nos Agences</p>
        </div>
        <div class="container mx-auto px-1 py-1 bg-bleu rounded-lg">
            <div id="map"> 
            </div>
        </div>
    </div>
  </section>
</template>

<style scoped>
#map{
    width:100%;
    height: 70vh;
}
</style>
