<template>
  <!-- <div id="app"> -->
  <v-layout>
    <v-app-bar title="Blog" :elevation="1"></v-app-bar>
    <v-main>
      <v-container
        class="flex align-center justify-center min-h-[300px] bg-stone-800"
      >
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-layout>
  <!-- </div> -->
</template>

<script setup></script>

<style lang="scss" scoped></style>
