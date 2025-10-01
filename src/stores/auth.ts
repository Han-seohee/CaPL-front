import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { User } from '@/types'

export const useAuthStore = defineStore('auth', () => {
    const user = ref<User | null>(null)
    const isAuthenticated = computed(() => !!user.value)
    const userRole = computed(() => user.value?.role || 'guest')

    const login = async (email: string, password: string) => {
        // Supabase 로그인 로직
    }

    const logout = async () => {
        user.value = null
        // Supabase 로그아웃 로직
    }

    const signup = async (userData: any) => {
        // Supabase 회원가입 로직
    }

    return {
        user,
        isAuthenticated,
        userRole,
        login,
        logout,
        signup
    }
})