<template>
    <div>
      <p>Count: {{ count }}</p>
      <button class="increment" @click="increment">Increment</button>
      <button class="decrement" @click="decrement">Decrement</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const count = ref(0);
  
  function increment() {
    count.value++;
  }
  
  function decrement() {
    count.value--;
  }
  </script>
  
  <style scoped>
  button {
    margin: 0 5px;
    padding: 5px 10px;
  }
  </style>