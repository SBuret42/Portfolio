<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <div>

    <main>
      <RouterView/>
    </main>

  </div>
</template>

<style>
html {
    background: #00072b;
    background: linear-gradient(43deg, rgba(0, 7, 43, 1) 0%, rgba(54, 0, 74, 1) 100%);
    min-height: 100vh;
    color: white;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
</style>
