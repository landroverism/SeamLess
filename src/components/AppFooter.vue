<template>
  <footer class="bg-[#2ecc71] text-white py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
            <scissors-icon :size="24" />
            Seamless
          </h3>
          <p class="text-sm opacity-80 mb-4">
            Revolutionizing the tailoring industry through technology and connecting customers with expert tailors worldwide.
          </p>
          <div class="flex gap-4">
            <el-button 
              v-for="icon in socialIcons"
              :key="icon.name"
              circle
              class="!bg-white/10 hover:!bg-white/20"
            >
              <component :is="icon.component" :size="18" />
            </el-button>
          </div>
        </div>

        <div>
          <h4 class="font-bold mb-4">Quick Links</h4>
          <div class="flex flex-col gap-2">
            <router-link 
              v-for="link in quickLinks"
              :key="link.path"
              :to="link.path"
              class="text-sm opacity-80 hover:opacity-100"
            >
              {{ link.label }}
            </router-link>
          </div>
        </div>

        <div>
          <h4 class="font-bold mb-4">Services</h4>
          <div class="flex flex-col gap-2">
            <span 
              v-for="service in services"
              :key="service"
              class="text-sm opacity-80"
            >
              {{ service }}
            </span>
          </div>
        </div>

        <div>
          <h4 class="font-bold mb-4">Contact Us</h4>
          <div class="flex flex-col gap-4">
            <div v-for="contact in contactInfo" :key="contact.label" class="flex items-center gap-2">
              <component :is="contact.icon" :size="18" />
              <span class="text-sm opacity-80">{{ contact.label }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4">
        <p class="text-sm opacity-80">
          © {{ new Date().getFullYear() }} Seamless. All rights reserved.
        </p>
        <div class="flex gap-6">
          <a 
            v-for="link in legalLinks"
            :key="link"
            href="#"
            class="text-sm opacity-80 hover:opacity-100"
          >
            {{ link }}
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { 
  ScissorsIcon, 
  FacebookIcon, 
  TwitterIcon, 
  InstagramIcon,
  MapPinIcon,
  PhoneIcon,
  MailIcon
} from 'lucide-vue-next'

const socialIcons = [
  { name: 'facebook', component: FacebookIcon },
  { name: 'twitter', component: TwitterIcon },
  { name: 'instagram', component: InstagramIcon },
]

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'Measurements', path: '/measurements' },
  { label: 'Find Tailors', path: '/tailors' },
  { label: 'Login', path: '/login' },
]

const services = [
  'Custom Tailoring',
  'Alterations',
  'Wedding Attire',
  'Corporate Uniforms',
  'Style Consultation',
]

const contactInfo = [
  { icon: MapPinIcon, label: 'Kenyatta Avenue, Nakuru West' },
  { icon: PhoneIcon, label: '+254 713 593401' },
  { icon: MailIcon, label: 'contact seamless@gmail.com' },
]

const legalLinks = [
  'Privacy Policy',
  'Terms of Service',
  'Cookie Policy',
]
</script>