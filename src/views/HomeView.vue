<template>
  <div class="min-h-screen bg-gradient-to-br from-primary-500 to-primary-600">
    <div class="container mx-auto px-4 py-20">
      <h1 class="text-6xl font-bold text-white text-center mb-8">
        CaPL
        <span class="text-gold">✦</span>
      </h1>
      <p class="text-xl text-white/90 text-center mb-12">
        당신의 꿈이 현실이 되는 곳
      </p>cs
      <div class="flex gap-4 justify-center">
        <router-link
            to="/login"
            class="px-8 py-4 bg-white text-primary-500 rounded-full font-semibold hover:scale-105 transition-transform"
        >
          로그인
        </router-link>
        <router-link
            to="/signup"
            class="px-8 py-4 bg-primary-700 text-white rounded-full font-semibold hover:scale-105 transition-transform"
        >
          회원가입
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 홈 페이지 로직
</script>