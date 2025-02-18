<template>
    <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
        <!-- Main Content -->
        <div class="flex flex-col md:flex-row gap-8">
            <!-- Sidebar (Filters) -->
            <aside class="w-full md:w-1/4 bg-white p-6 rounded-xl shadow-sm backdrop-blur-lg">
                <h2 class="text-xl font-bold mb-6">Categories</h2>
                <ul class="space-y-3">
                    <li v-for="category in categories" :key="category"
                        class="cursor-pointer px-4 py-2 rounded-lg hover:bg-blue-50 transition-all duration-300 flex items-center space-x-2"
                        @click="filterBikes(category)">
                        <span class="w-2 h-2 rounded-full bg-blue-500"></span>
                        <span>{{ category }}</span>
                    </li>
                </ul>
            </aside>

            <!-- Bike Grid -->
            <div class="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="bike in filteredBikes" :key="bike.id"
                    class="group bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 relative">
                    <div class="relative overflow-hidden rounded-lg mb-4">
                        <img :src="bike.image" :alt="bike.name"
                            class="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div class="absolute top-3 right-2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                        <!-- Heart Button -->
                        <button @click="toggleLike(bike)"
                            :class="{ 'text-gray-700': bike.liked, 'text-gray-400': !bike.liked }">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 21C12 21 7 16 4 12C2 9 2 6 4 4C5.5 3 7.7 3 9 4C10.4 5 12 7 12 7C12 7 13.6 5 15 4C16.3 3 18.5 3 20 4C22 6 22 9 20 12C17 16 12 21 12 21Z" />
                            </svg>
                        </button>
                    </div>
                    <h3 class="text-lg font-semibold">{{ bike.name }}</h3>
                    <span class="text-sm font-semibold text-gray-700">{{ bike.price }}</span>
                    <!-- Plus Button -->
                    <button
                        class="absolute bottom-3 right-3 w-12 h-12 bg-[#ffd387] text-black rounded-full flex items-center justify-center hover:bg-[#d6a343] active:bg-[#ffd077] transition-colors duration-300"
                        @click="goToBookingPage(bike)">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            stroke-width="2" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 5v14m7-7H5" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'custom'
})
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { bikesData } from '~/Data/bikesData'

const router = useRouter()
const categories = ref(['Sport Bikes', 'Cruisers', 'Adventure', 'Electric'])
const bikes = ref(bikesData)
const selectedCategory = ref('all')

// Filter bikes based on selected category
const filteredBikes = computed(() => {
    if (selectedCategory.value === 'all') {
        return bikes.value
    }
    return bikes.value.filter(bike => bike.category === selectedCategory.value)
})

// Change category
const filterBikes = (category: string) => {
    selectedCategory.value = category
}

// Toggle like status
const toggleLike = (bike: any) => {
    bike.liked = !bike.liked
}

// Navigate to booking page
const goToBookingPage = (bike: any) => {
    router.push({
        path: '/BookingPage',
        query: {
            id: bike.id,
            name: bike.name,
            price: bike.price,
            image: bike.image,
            category: bike.category,
            description: bike.description
        }
    })
}
</script>

<style scoped>
.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>
