<template>
  <!-- <div id="app"> -->
  <v-layout>
    <v-app-bar :elevation="1">
      <div class="flex items-center gap-4 w-full">
        <router-link to="/" class="flex-none text-2xl">Blog</router-link>
        <nav class="grow flex items-center gap-2"></nav>
        <div class="flex-none flex gap-2 text-primary">
          <template v-if="true">
            <router-link to="/register">Sign Up</router-link>
            <router-link to="/login">Login</router-link>
          </template>
          <router-link v-else to="/admin" class="flex-none"
            ><div class="w-[35px] h-[35px] rounded-full bg-violet-800">
              <img src="" alt="" class="avatar" /></div
          ></router-link>
        </div>
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

<style lang="scss" scoped>
:deep {
  .v-toolbar__content {
    padding: 0 20px;
  }
}
</style>
