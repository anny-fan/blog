<template>
  <div>
    <h1 class="text-3xl mb-4 text-center">Admin</h1>
    <v-btn @click="handleSignOut" v-if="isLoggedIn"> Sign Out </v-btn>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "vue-router";

const router = useRouter();
const isLoggedIn = ref(false);

let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  });
});

function handleSignOut() {
  signOut(auth).then(() => {
    router.push("/");
  });
}
</script>

<style lang="scss" scoped></style>
