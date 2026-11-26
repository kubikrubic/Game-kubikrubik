<script setup lang="ts">
import { useNavigationStore } from '../stores/navigation'

const navigation = useNavigationStore()
</script>

<template>
  <main class="main-menu">
    <h1>ENDLOCK</h1>
    <p class="subtitle">Survive the darkness</p>

    <div class="menu-buttons">
      <button @click="navigation.navigateTo('level-select')">
        Играть
      </button>

      <button @click="navigation.navigateTo('leaderboard')">
        Таблица лидеров
      </button>

      <button @click="navigation.navigateTo('login')">
        Войти в аккаунт
      </button>
    </div>
    <p class="version">Prototype · v0.1</p>
  </main>
</template>

<style scoped>
.main-menu {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: radial-gradient(
    ellipse at center,
    #352027,
    #0b0b10 80%
  );
}

h1 {
  margin: 0;
  font-family: Georgia, serif;
  font-size: 80px;
  letter-spacing: 12px;
  color: #e6d9c5;
  text-shadow: 0 0 30px #873e48;
}

.subtitle {
  margin: 12px 0 40px;
  color: #a99288;
  letter-spacing: 4px;
  text-transform: uppercase;
}

.menu-buttons {
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 300px;
}

.menu-buttons button {
  padding: 16px;
  border: 1px solid #60444b;
  border-radius: 4px;

  background: #261c23;
  color: #e6d9c5;

  font-size: 18px;
  transition: 0.2s;
}

.menu-buttons button:first-child {
  background: #693039;
  border-color: #a25b62;
}

.menu-buttons button:hover {
  background: #873e48;
  border-color: #c47b82;
  transform: translateY(-2px);
}

.menu-buttons button:active {
  transform: translateY(0);
}

.version {
  position: absolute;
  bottom: 20px;
  margin: 0;
  color: #75666b;
  font-size: 12px;
  letter-spacing: 3px;
  text-transform: uppercase;
}
</style>