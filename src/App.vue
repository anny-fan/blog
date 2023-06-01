<template>
  <!-- <div id="app"> -->
  <v-layout>
    <v-app-bar :elevation="1" class="px-6 lg:px-12">
      <div class="flex items-center gap-4">
        <router-link to="/" class="text-2xl">Blog</router-link>
        <nav class="text-primary">
          <router-link to="/register">Register</router-link>
        </nav>
      </div>
    </v-app-bar>
    <v-main>
      <div
        class="flex align-center justify-center min-h-[300px] bg-stone-800 p-8 lg:w-10/12 mx-auto"
      >
        <router-view></router-view>
      </div>
    </v-main>
  </v-layout>
  <!-- </div> -->
</template>

<script setup></script>

<style lang="scss" scoped></style>
