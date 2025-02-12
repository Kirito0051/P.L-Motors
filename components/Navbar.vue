<template>
    <header class="bg-white shadow-md py-4 sticky top-0 z-50">
        <div class="container mx-auto flex justify-center items-center">
            <nav class="flex items-center space-x-8">
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