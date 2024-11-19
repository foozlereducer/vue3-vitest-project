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
.logo {
  width: 150px;
  margin-bottom: 20px;
}
</style>