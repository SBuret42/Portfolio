<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { computed } from 'vue'
import router from '../router';

// Imports d'images
import projetImg from '../assets/img/iconProjet.png';
import projetColor from '../assets/img/iconProjetB.png';

const route = useRoute()

interface MenuItem {
  label: string;
  link: string;
  action?: string;
  imgDefault: string;
  imgHover: string;
}


const menuItems: MenuItem[] = [
  {
    label: 'Mes projets',
    link: '/projets',
    imgDefault: projetImg,
    imgHover: projetColor,
  }
];

const isActive = (link: string) => {
  return route.path === link;
};
</script>

<template>
  <div class="app-container">
    <header class="header">
      <div class="header-content">
        <RouterLink to="/" class="router">
          <div class="logo-container">
            <h1 class="logo-text">Portfolio - Sylvain Buret</h1>
          </div>
        </RouterLink>

        <nav class="desktop-nav">
          <RouterLink
            v-for="(item, index) in menuItems"
            :key="index"
            :to="item.link"
            class="menu-item desktop-item router"
            :class="{ 'current-page': isActive(item.link) }"
          >
            <div class="icon-circle">
              <img :src="item.imgDefault" alt="icon" class="item-img img-default" />
              <img :src="item.imgHover" alt="icon active" class="item-img img-active" />
            </div>
            <div class="item-text">
              {{ item.label }}
            </div>
          </RouterLink>
        </nav>
      </div>
    </header>
  </div>
</template>

<style scoped>
.app-container {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #334155;
  padding-top: 80px;
}

.header {
  background-color: #f8fbfb;
  border-bottom: 1px solid rgb(17, 1, 37);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  height: 80px;
}

.router {
  text-decoration: none;
}

.header-content {
  margin: 0;
  padding: 0 1.5rem;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(45deg, #093857, rgb(48, 1, 110));
}

.logo-text {
  font-size: 2rem;
  font-weight: 600;
  color: white;
  margin: 0;
  letter-spacing: -0.5px;
  text-decoration: none;
}

.menu-item {
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: background-color 0.2s;
  cursor: pointer;
  position: relative;
}

.icon-circle {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 2px solid #36128A;
  margin-right: 1rem;
  background-color: #645097;
  overflow: hidden;
  position: relative;
  transition: background-color 0.2s ease, border-color 0.2s ease;
  flex-shrink: 0;
}



.item-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: opacity 0.3s ease, transform 0.3s ease;
  position: absolute;
  top: 0;
  left: 0;
}

.img-default {
  opacity: 1;
}
.img-active {
  opacity: 0;
}

.menu-item:hover .img-default {
  opacity: 0;
}
.menu-item:hover .img-active {
  opacity: 1;
}

.item-text {
  font-size: 1rem;
  font-weight: 500;
  color: white;
  white-space: nowrap;
}

.menu-item:hover .icon-circle  {
  background-color: #1D0A49;
  border-color: #4d3d74;
  
}

@media (max-width: 570px) {
  
  .item-text {
    display: none;
  }
  
}
</style>
