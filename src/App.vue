<template>
  <el-config-provider :theme-vars="themeVars">
    <div class="min-h-screen flex flex-col bg-[#F5F5F5]">
      <nav-bar />
      <main class="flex-grow">
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </main>
      <app-footer />
    </div>
  </el-config-provider>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import NavBar from './components/NavBar.vue'
import AppFooter from './components/AppFooter.vue'

const themeVars = ref({
  'el-color-primary': '#2ecc71',
  'el-color-success': '#27ae60',
  'el-color-warning': '#FFD700',
  'el-color-danger': '#e74c3c',
  'el-color-info': '#2C3E50',
  'el-border-radius-base': '8px',
})
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

html {
  font-family: 'Inter', sans-serif;
  color: #2C3E50;
}
</style>