<template>
  <div class="min-h-screen flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
    <div class="relative">
      <img src="/images/connexion.webp" alt="Connexion" class="blur">
      <div class="w-full max-w-md bg-blanc p-6 shadow-md space-y-8 absolute top-0 left-0 right-0 bottom-0 m-auto">
        <div v-if="currentUser">
          <h1 class="text-2xl font-semibold text-noir">Bienvenue {{ currentUser?.name }} !</h1>
          <div>
            <button @click="doLogout" class="w-full py-2 px-4 bg-bleu hover:bg-bleu text-blanc font-semibold">Se déconnecter</button>
          </div>
        </div>
      <div v-else>
        <h1 class="text-2xl font-semibold text-bleu text-center">
{{ loginMode ? "SE CONNECTER" : "CRÉER UN COMPTE" }}</h1>
        <div class="space-y-4">
          <div>
            <label for="username" class="block text-sm font-medium text-noir">Adresse mail</label>
            <input v-model="username" type="text" name="username" id="username" autocomplete="none" placeholder="Entrez votre adresse mail" class="w-full px-3 py-2 border placeholder-noir20">
          </div>
          <div>
            <label for="password" class="block text-sm font-medium text-noir">Mot de passe</label>
            <input v-model="password" type="password" name="password" id="password" autocomplete="none" placeholder="Saisissez votre mot de passe" class="w-full px-3 py-2 border placeholder-noir20">
          </div>
          <div v-if="loginMode" class="space-y-4">
            <button @click="doLogin" class="w-full py-2 px-4 bg-bleu hover:bg-blanc text-blanc font-semibold">Se Connecter</button>
            <button @click="loginMode = false" class="w-full py-2 px-4 bg-bleu hover:bg-blanc text-blanc font-semibold">Créer un Compte</button>
            
            <div>
              <button @click="login()" class="w-full py-2 px-4 bg-noir hover:bg-blanc text-blanc font-semibold border border-blanc hover:text-noir hover:border-noir flex items-center justify-center">
                <img src="/images/google-icon.svg" alt="Google" class="w-8 h-8 mr-4"> Connectez-vous avec Google
              </button>
            </div>

            <div>
              <button v-on:click="githublogin()" class="w-full py-2 px-4 bg-noir hover:bg-blanc text-blanc font-semibold border border-blanc hover:text-noir hover:border-noir flex items-center justify-center">
                <img src="/images/github-icon.svg" alt="GitHub" class="w-8 h-8 mr-4"> Connectez-vous avec GitHub
              </button>
            </div>

          </div>
          <div v-else class="space-y-4">
            <div>
              <label for="fullName" class="block text-sm font-medium text-noir">Nom</label>
              <input v-model="fullName" type="text" name="fullName" id="fullName" autocomplete="none" placeholder="Entrez votre nom" class="w-full px-3 py-2 border placeholder-noir20">
            </div>
            <div>
              <label for="Name" class="block text-sm font-medium text-noir">Prénom</label>
              <input v-model="fullName" type="text" name="Name" id="Name" autocomplete="none" placeholder="Entrez votre prénom" class="w-full px-3 py-2 border placeholder-noir20">
            </div>
            <button @click="doCreateAccount" class="w-full py-2 px-4 bg-bleu hover:bg-blanc text-blanc font-semibold">Inscrivez-vous</button>
            <button @click="loginMode = true" class="w-full py-2 px-4 bg-rouge hover:bg-rouge text-blanc font-semibold">Annuler</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import PocketBase from 'pocketbase';

let pb = null;
const currentUser = ref();
const username = ref("");
const password = ref("");
const fullName = ref("");

const loginMode = ref(true);

onMounted(async () => {
  var pocketbase_ip = "";
if (import.meta.env.MODE === "production")
  pocketbase_ip = "https://tavue.julesdupaquier.fr:443";
else pocketbase_ip = "http://127.0.0.1:8090";
const pb = new PocketBase(pocketbase_ip);
  
  pb.authStore.onChange(() => {
    currentUser.value = pb.authStore.model
  }, true)

});

const doLogout = () => {
  pb.authStore.clear();
  currentUser.value = null;
}

const doLogin = async () => {
  try {
    const authData = await pb.collection('users')
      .authWithPassword(username.value, password.value);

    // after the above you can also access the auth data from the authStore
    console.log(pb.authStore.isValid);
    console.log(pb.authStore.token);
    console.log(pb.authStore.model);
    // currentUser.value = pb.authStore.model
  } catch (error) {
    alert(error.message)
  }
}

const doCreateAccount = async () => {
  try {
    const data = {
      "username": `user_${self.crypto.randomUUID().split("-")[0]}`,
      "email": username.value,
      "emailVisibility": true,
      "password": password.value,
      "passwordConfirm": password.value,
      "name": fullName.value
    };

    const record = await pb.collection('users').create(data);

    await doLogin();
  } catch (error) {
    alert(error.message)
  }
}

const login = async () => {
  await pb.collection("users").authWithOAuth2({ provider: "google" });
  if (pb.authStore.isValid) {
    document.getElementById("status").innerHTML = "You are now logged in";
    connected.value = true;
    currentUser.value = pb.authStore.model;
  }
};

const githublogin = async () => {
  await pb.collection("users").authWithOAuth2({ provider: "github" });
  if (pb.authStore.isValid) {
    document.getElementById("status").innerHTML = "You are now logged in";
    connected.value = true;
    currentUser.value = pb.authStore.model;
    document.getElementById("signOut").style.visibility = "hidden";
  }
};

</script>

<style scoped>
</style>
