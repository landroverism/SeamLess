<template>
  <el-header class="bg-[#2ecc71] text-white shadow-md">
    <div class="container mx-auto px-4 h-16 flex items-center justify-between">
      <router-link to="/" class="flex items-center gap-2 text-xl font-bold">
        <scissors-icon :size="24" />
        <span>Seamless</span>
      </router-link>

      <div class="hidden md:flex items-center gap-6">
        <router-link 
          v-for="item in menuItems" 
          :key="item.path"
          :to="item.path"
          class="text-white hover:text-[#FFD700] transition-colors"
        >
          {{ item.label }}
        </router-link>
        
        <el-button 
          type="#ba3ae0" 
          @click="$router.push('/login')"
        >
          Login
        </el-button>
      </div>

      <el-button 
        class="md:hidden"
        @click="drawer = true"
        text
      >
        <menu-icon class="text-white" :size="24" />
      </el-button>
    </div>

    <el-drawer
      v-model="drawer"
      direction="rtl"
      size="80%"
    >
      <template #header>
        <div class="flex items-center gap-2">
          <scissors-icon :size="24" class="text-[#2ecc71]" />
          <span class="text-xl font-bold">Seamless</span>
        </div>
      </template>

      <div class="flex flex-col gap-4 p-4">
        <router-link 
          v-for="item in menuItems" 
          :key="item.path"
          :to="item.path"
          class="text-[#2C3E50] hover:text-[#2ecc71] py-2 transition-colors"
          @click="drawer = false"
        >
          {{ item.label }}
        </router-link>
        
        <el-button 
          type="primary" 
          @click="$router.push('/login')"
        >
          Login
        </el-button>
      </div>
    </el-drawer>
  </el-header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ScissorsIcon, MenuIcon } from 'lucide-vue-next'

const drawer = ref(false)

const menuItems = [
  { label: 'Measurements', path: '/measurements' },
  { label: 'Find Tailors', path: '/tailors' },
]
</script>