<template>
    <div>
        <!-- Main Content -->
        <main>
            <slot />
        </main>
        <!-- Footer -->
        <Footer />
    </div>
</template>

<script setup>
import Footer from '~/components/Footer.vue'
</script>
