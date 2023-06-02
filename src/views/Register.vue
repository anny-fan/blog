<template>
  <div class="flex flex-col items-center gap-2 w-full">
    <!-- TODO: heading @apply style -->
    <h1 class="text-3xl mb-4">Sign Up</h1>
    <router-link to="/login" class="text-slate-300"
      >Have an acount?</router-link
    >
    <v-form
      @submit.prevent="register"
      v-model="valid"
      class="w-full lg:w-[400px] flex flex-col gap-2"
    >
      <!-- <v-text-field
        v-model="Username"
        :rules="nameRules"
        :counter="10"
        label="Username"
        required
      ></v-text-field> -->
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="Email"
        required
      ></v-text-field>
      <v-text-field
        v-model="password"
        :rules="passwordRules"
        :counter="10"
        label="Password"
        required
      ></v-text-field>
      <v-btn type="submit" class="self-end" :disabled="isSubmitting">
        Sign Up
      </v-btn>
      {{ isSubmitting }}
    </v-form>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

const router = useRouter();
const store = useStore();
const isSubmitting = computed(() => store.state.auth.isSubmitting);

function onSubmit() {
  console.log("start");
  store.dispatch("register");
}

const valid = ref("");
const email = ref("");
const password = ref("");
const passwordRules = ref([
  (value) => {
    if (value) return true;

    return "Password is requred.";
  },
  (value) => {
    if (value?.length >= 10) return true;

    return "Password must be more than 10 characters.";
  },
]);
const emailRules = ref([
  (value) => {
    if (value) return true;

    return "E-mail is requred.";
  },
  (value) => {
    if (/.+@.+\..+/.test(value)) return true;

    return "E-mail must be valid.";
  },
]);
function register() {
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log("Successfully registered!");
      router.push("/login");
    })
    .catch((error) => {
      console.log(error.code);
      alert(error.message);
      email.value = "";
      password.value = "";
    });
}
const signInWithGoogle = () => {};
</script>

<style lang="scss" scoped></style>
