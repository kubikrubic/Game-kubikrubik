import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Screen } from '../types/navigation'

export const useNavigationStore = defineStore('navigation', () => {
    const currentScreen = ref<Screen>('menu')

    function navigateTo(screen: Screen): void {
        currentScreen.value = screen
    }

    return {
        currentScreen,
        navigateTo
    }
})