<template>
  <div class="flex flex-col items-center gap-2 w-full">
    <h1 class="text-3xl mb-4">Login</h1>

    <v-form
      @submit.prevent="signIn"
      class="w-full lg:w-[400px] flex flex-col gap-2"
    >
      <v-text-field v-model="email" label="Email" required></v-text-field>
      <v-text-field v-model="password" label="Password" required></v-text-field>
      <v-btn type="submit" class="self-end"> Login </v-btn>
    </v-form>
    <p v-if="errMsg">{{ errMsg }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

const router = useRouter();
const email = ref("");
const password = ref("");
const errMsg = ref("");

const signIn = () => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
      console.log("Successfully signed!");
      console.log(auth.currentUser);
      router.push("/admin");
    })
    .catch((error) => {
      console.log(error.code);
      switch (error.code) {
        case "auth/invalid-email":
          errMsg.value = "Invalid email";
          break;
        case "auth/user-not-found":
          errMes.value = "No account with that email was found";
          break;
        case "auth/wrong-password":
          errMsg.value = "Incorrect password";
          break;
        default:
          errMsg.value = "Email or password was incorrect";
          break;
      }
    });
};
</script>

<style lang="scss" scoped></style>
