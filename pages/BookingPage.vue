<template>
    <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 relative">
        <div class="flex">
            <!-- Left side with image -->
            <div class="w-1/2 sticky top-0 h-[600px]">
                <img :src="$route.query.image" :alt="$route.query.name"
                    class="w-full h-full object-cover rounded-r-xl" />
            </div>

            <!-- Right side with details -->
            <div class="w-1/2 p-8">
                <div class="bg-white rounded-xl shadow-sm p-6">
                    <div class="space-y-4">
                        <h2 class="text-4xl text-center m-10 font-play font-bold">{{ $route.query.name }}</h2>
                        <p class="text-gray-600 text-center">{{ $route.query.description }}</p>
                        <div class="py-16">
                            <p class="text-3xl font-play font-bold text-gray-700 text-center">
                                {{ $route.query.price }}
                            </p>
                        </div>
                        <p class="text-sm text-gray-500">Category: {{ $route.query.category }}</p>

                        <!-- Add your booking form here -->
                        <button @click="router.back()"
                            class="mt-6 px-6 py-2 bg-[#ffd387] text-black rounded-full hover:bg-[#d6a343] ">
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
