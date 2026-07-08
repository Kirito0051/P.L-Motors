<template>
    <div>
        <!-- Navbar -->
        <Navbar />

        <!-- Main Content -->
        <main>
            <slot />
        </main>

        <!-- Footer -->
        <Footer />
    </div>
</template>

<script setup>
import Navbar from '~/components/Navbar.vue';
import Footer from '~/components/Footer.vue';

import { onMounted } from "vue";
import { useCurrency } from "~/composables/useCurrency";

const { detectCountry } = useCurrency();

onMounted(() => {
  detectCountry();
});
</script>
