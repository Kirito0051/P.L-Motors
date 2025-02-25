<template>
    <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 relative p-4 sm:p-6 md:p-8">
        <div class="flex flex-col md:flex-row">
            <!-- Left side with image -->
            <div class="w-full md:w-1/2 md:sticky top-0 h-64 md:h-[600px]">
                <img :src="$route.query.image" :alt="$route.query.name"
                    class="w-full h-full object-contain rounded-xl md:rounded-r-xl" />
            </div>


            <!-- Right side with details -->
            <div class="w-full md:w-1/2 p-6 md:p-8">
                <div class="bg-white rounded-xl shadow-sm p-4 md:p-6">
                    <div class="space-y-4">
                        <h2 class="text-2xl md:text-4xl text-center m-6 md:m-10 font-play font-bold">{{
                            $route.query.name }}</h2>
                        <p class="text-gray-600 text-center text-sm md:text-base">{{ $route.query.description }}</p>
                        <div class="py-8 md:py-16">
                            <p class="text-xl md:text-3xl font-play font-bold text-gray-700 text-center">
                                {{ $route.query.price }}
                            </p>
                        </div>
                        <p class="text-xs md:text-sm text-gray-500">Category: {{ $route.query.category }}</p>

                        <!-- Add your booking form here -->
                        <button @click="router.back()"
                            class="mt-4 md:mt-6 px-4 md:px-6 py-2 bg-[#ffd387] text-black rounded-full hover:bg-[#d6a343] ">
                            Book Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'custom'
})
import { useRoute } from 'vue-router'; // Use Vue Router to access query parameters

const route = useRoute();
const bike = {
    id: route.query.id,
    name: route.query.name,
    price: route.query.price,
    image: route.query.image,
    description: route.query.description,
};
</script>
