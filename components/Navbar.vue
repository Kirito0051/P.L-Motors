<template>
    <header class="bg-white shadow-md py-4 sticky top-0 z-40 w-full">
        <div class="flex items-center justify-between max-w-screen-xl px-8 mx-auto relative">
            <!-- Mobile: Logo on the left -->
            <nuxt-link to="/" class="text-3xl font-bold text-gray-800 cursor-pointer md:hidden">
                P.L Motors
            </nuxt-link>

            <!-- Desktop Navbar (Center-Aligned) -->
            <nav class="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
                <nuxt-link to="/" class="nav-link" @click.prevent="handleNavigation('home')">
                    Home
                </nuxt-link>
                <nuxt-link to="/#Featured_Bike" class="nav-link" @click.prevent="handleNavigation('Featured_Bike')">
                    Bikes
                </nuxt-link>

                <!-- Centered Logo (Only on Desktop) -->
                <nuxt-link to="/" class="text-3xl font-bold text-gray-800 cursor-pointer hidden md:block">
                    P.L Motors
                </nuxt-link>

                <nuxt-link to="/#reviews" class="nav-link" @click.prevent="handleNavigation('reviews')">
                    Reviews
                </nuxt-link>
                <nuxt-link to="/contact" class="nav-link">
                    Contact
                </nuxt-link>
            </nav>

            <!-- Mobile: Hamburger Menu on the right -->
            <button @click="toggleMenu" class="md:hidden focus:outline-none absolute right-8 z-50">
                <svg class="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7">
                    </path>
                </svg>
            </button>

            <!-- Login Button (Only on Desktop, Right-Aligned) -->
            <button
                class="hidden md:flex bg-white text-white w-10 h-10 rounded-full items-center justify-center relative group ml-auto">
                <img src="/images/login_icon.png" alt="Login Icon" class="w-8 h-8" />
                <span
                    class="absolute top-full left-1/2 transform -translate-x-1/2 mb-2 bg-gray-700 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 py-2 px-4 rounded">
                    Login
                </span>
            </button>
        </div>

        <!-- Mobile Sliding Menu (From Left) -->
        <div v-if="isMenuOpen" class="fixed inset-0 bg-black bg-opacity-50 z-40" @click="closeMenu"></div>
        <div class="fixed top-0 left-0 h-full w-64 bg-white shadow-md transform transition-transform duration-300 z-50"
            :class="isMenuOpen ? 'translate-x-0' : '-translate-x-full'">
            <nav class="flex flex-col items-start space-y-4 py-6 px-6">
                <button @click="closeMenu" class="self-end text-gray-800 text-2xl">&times;</button>
                <nuxt-link to="/" class="nav-link" @click="closeMenu">Home</nuxt-link>
                <nuxt-link to="/#Featured_Bike" class="nav-link" @click="closeMenu">Bikes</nuxt-link>
                <nuxt-link to="/#reviews" class="nav-link" @click="closeMenu">Reviews</nuxt-link>
                <nuxt-link to="/contact" class="nav-link" @click="closeMenu">Contact</nuxt-link>
                <button class="bg-gray-800 text-white px-4 py-2 rounded w-full mt-4" @click="closeMenu">Login</button>
            </nav>
        </div>
    </header>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const isHomePage = ref(route.path === "/" || route.path === "");

const isMenuOpen = ref(false);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
    isMenuOpen.value = false;
};

const handleNavigation = async (section) => {
    closeMenu(); // Close menu when a link is clicked
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

<style scoped>
.nav-link {
    @apply text-gray-800 hover:text-blue-500 transition duration-300;
}
</style>
