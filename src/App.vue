<template>
  <div id="app">
    <img alt="ACTO Logo" src="../src/assets/acto-logo.png" class="logo" />
    <Counter v-if="showCounter" />
    <router-view />
  </div>
</template>

<script setup>
import Counter from './components/Counter.vue';
import { ref } from 'vue';

const showCounter = ref(true);
</script>

<style scoped>
@keyframes neonGlow {
  0% {
    filter: drop-shadow(0 0 20px #0ff) drop-shadow(0 0 40px #0ff) drop-shadow(0 0 60px #0ff);
  }
  100% {
    filter: drop-shadow(0 0 0 #0ff);
  }
}

.logo {
  width: 150px;
  margin-bottom: 20px;
  animation: neonGlow 2s ease-in-out forwards;
}



</style>