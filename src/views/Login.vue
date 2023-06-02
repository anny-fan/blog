<template>
  <div class="flex flex-col items-center gap-2 w-full">
    <h1 class="text-3xl mb-4">Login</h1>

    <v-form
      @submit.prevent="onSubmit"
      v-model="valid"
      class="w-full lg:w-[400px] flex flex-col gap-2"
    >
      <v-text-field
        v-model="Email"
        :rules="nameRules"
        label="Email or Username"
        required
        class="w-full"
      ></v-text-field>
      <v-text-field
        v-model="Password"
        :rules="nameRules"
        :counter="10"
        label="Password"
        required
        class="w-full"
      ></v-text-field>
      <v-btn type="submit" class="self-end" :disabled="isSubmitting">
        Login
      </v-btn>
      {{ isSubmitting }}
    </v-form>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const isSubmitting = computed(() => store.state.auth.isSubmitting);

function onSubmit() {
  console.log("start");
  store.dispatch("register");
}
</script>

<style lang="scss" scoped></style>
