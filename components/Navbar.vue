<template>
    <header class="bg-white shadow-md py-4 sticky top-0 z-50 w-full">
        <div class="flex justify-between items-center mx-auto max-w-screen-xl px-8">
            <!-- Navbar -->
            <nav class="flex items-center space-x-8 justify-center flex-grow ml-20  ">
                <!-- Added ml-4 to push navbar slightly to the right -->
                <nuxt-link to="/" class="nav-link" @click.prevent="handleNavigation('home')">
                    Home
                </nuxt-link>
                <nuxt-link to="/#Featured_Bike" class="nav-link" @click.prevent="handleNavigation('Featured_Bike')">
                    Bikes
                </nuxt-link>
                <nuxt-link to="/" class="text-3xl font-bold text-gray-800 cursor-pointer">
                    P.L Motors
                </nuxt-link>
                <nuxt-link to="/#reviews" class="nav-link" @click.prevent="handleNavigation('reviews')">
                    Reviews
                </nuxt-link>
                <nuxt-link to="/contact" class="nav-link">
                    Contact
                </nuxt-link>
            </nav>

            <button class="bg-white text-white w-10 h-10 rounded-full flex items-center justify-center relative group">
                <img src="/images/login_icon.png" alt="Login Icon" class="w-8 h-8" />
                <!-- Hidden text that appears on hover with a background -->
                <span
                    class="absolute top-full left-1/2 transform -translate-x-1/2 mb-2 bg-gray-700 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 py-2 px-4 rounded">
                    Login
                </span>
            </button>

        </div>
    </header>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();
const router = useRouter();
const isHomePage = computed(() => route.path === "/" || route.path === "");

const handleNavigation = async (section) => {
    if (section === 'home') {
        await router.push('/');
        return;
    }

    if (isHomePage.value) {
        const element = document.getElementById(section);
        if (element) {
            window.scrollTo({ top: element.offsetTop, behavior: "smooth" });
        }
    } else {
        await router.push('/');
        setTimeout(() => {
            const element = document.getElementById(section);
            if (element) {
                window.scrollTo({ top: element.offsetTop, behavior: "smooth" });
            }
        }, 100);
    }
};
</script>
