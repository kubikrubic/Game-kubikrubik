<script setup lang="ts">
import { useNavigationStore } from './stores/navigation'
import MainMenuView from './views/MainMenuView.vue'

const navigation = useNavigationStore()
</script>

<template>
  <MainMenuView v-if="navigation.currentScreen === 'menu'" />

  <main v-else>
    <h2>{{ navigation.currentScreen }}</h2>

    <button @click="navigation.navigateTo('menu')">
      Назад
    </button>
  </main>
</template>