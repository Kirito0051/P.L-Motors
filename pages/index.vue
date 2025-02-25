<template>
    <div class="bg-gray-100 text-gray-800">
        <!-- Hero Section (Carousel) -->
        <section id="home" class="relative h-[85vh] overflow-hidden bg-[#d7c8c1] bg-cover bg-center">
            <div class="absolute inset-0 bg-opacity-40 sm:bg-opacity-0"></div>
            <div class="container mx-auto text-center text-white relative z-10 p-20 md:p-40">
                <h1 class="text-4xl font-bold md:text-7xl">Find Your Perfect Ride</h1>
                <p class="mt-4 text-lg md:text-2xl">Explore the latest bikes, reviews, and buying guides</p>
                <div class="mt-6 flex justify-center gap-6 z-20">
                    <nuxt-link to="/bikes"
                        class="bg-blue-600 px-6 py-3 text-white rounded-lg hover:bg-blue-700 transition">
                        Explore Bikes
                    </nuxt-link>
                    <nuxt-link to="/contact"
                        class="bg-white text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-100 transition">
                        Contact Us
                    </nuxt-link>
                </div>
            </div>
            <div class="blur-[95px] hero-blur-circle "></div>
            <div class="blur-[100px] hero-blur-circle_2"></div>

            <!-- Carousel -->
            <div class="absolute inset-0 overflow-hidden flex justify-center items-center">
                <div class="carousel-slide flex justify-center items-center h-full">
                    <img src="/public/images/bike.png" alt="Bike Image 1" class="object-cover w-[50rem] h-[50rem]" />
                </div>
            </div>
        </section>

        <!-- Box Section -->
        <section class="py-16 bg-gray-200 mb-16">
            <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
                <!-- Big Container on the Left -->
                <div class="bg-white p-6 shadow-md rounded-lg flex flex-col items-start border border-gray-300">
                    <h2 class="text-xl font-bold mt-4 mb-8 px-2">
                        "Explore our latest bike models and experience unmatched performance.
                        Our expert team is here to guide you with personalized advice.
                        Exclusive offers and flexible financing options available.
                        Visit us for a test ride and find your perfect bike."
                    </h2>
                    <div class="w-full flex justify-center">
                        <img src="/public/images/bike_section.1.jpg" alt="Left Container Image"
                            class="object-cover w-full md:w-[26rem] h-auto" style="object-position: left;" />
                    </div>
                </div>

                <!-- Right Side Containers -->
                <div class="flex flex-col space-y-8">
                    <!-- Top Container -->
                    <div class="bg-white shadow-md rounded-lg overflow-hidden border border-gray-300">
                        <img src="/public/images/showroom.jpg" alt="Bike Image" class="object-cover w-full h-full" />
                    </div>

                    <!-- Bottom Container -->
                    <div class="bg-white p-6 shadow-md rounded-lg border border-gray-300">
                        <h2 class="text-xl font-bold mb-4">Why Choose This Bike & PL Motors?</h2>
                        <ul class="text-gray-600 space-y-2">
                            <li>✔ Precision-engineered for superior performance and agility</li>
                            <li>✔ Lightweight frame ensures maximum control and stability</li>
                            <li>✔ Advanced braking and suspension for a smooth, safe ride</li>
                            <li>✔ Available in multiple colors with exclusive showroom deals</li>
                            <li>✔ Visit PL Motors for expert guidance and flexible financing options</li>
                        </ul>
                        <div class="w-full flex justify-end mt-6">
                            <nuxt-link to="/contact#office-location"
                                class="text-gray-600 hover:text-black flex items-center font-bold">
                                Find Us Here
                                <img src="/images/arrow.png" alt="arrow" class="w-5 h-5 ml-2" />
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Featured_Bike -->
        <section id="Featured_Bike" class="bg-gray-50 py-16">
            <div class="container mx-auto px-4">
                <div class="text-center mb-12">
                    <h2 class="text-4xl font-bold text-gray-800 mb-2">Featured Bikes</h2>
                    <p class="text-gray-600 text-lg">Discover our handpicked selection of premium motorcycles</p>
                    <div class="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    <div v-for="bike in bikes" :key="bike.id"
                        class="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl">
                        <div class="relative overflow-hidden">
                            <img :src="bike.image" alt="Bike image"
                                class="w-full h-64 object-contain transform transition duration-500 group-hover:scale-110" />
                            <div v-if="bike.newTag"
                                class="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                New
                            </div>
                        </div>
                        <div class="p-6">
                            <div class="flex justify-between items-center mb-4">
                                <h3 class="text-xl font-bold text-gray-800">{{ bike.name }}</h3>
                                <span class="text-blue-600 font-bold">{{ bike.price }}</span>
                            </div>
                            <div class="flex items-center gap-4 mb-4 text-sm text-gray-600">
                                <div class="flex items-center">
                                    <i class="fas fa-tachometer-alt text-gray-500 mr-2"></i>{{ bike.cc }}
                                </div>
                                <div class="flex items-center">
                                    <i class="fas fa-gas-pump text-gray-500 mr-2"></i>{{ bike.kmpl }}
                                </div>
                            </div>
                            <p class="text-gray-600 text-sm mb-4">{{ bike.description }}</p>
                            <button @click="goToBookingPage(bike)"
                                class="mt-4 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>

                <div class="text-center mt-10">
                    <nuxt-link to="/bikes"
                        class="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        View All Bikes
                    </nuxt-link>
                </div>
            </div>
        </section>


        <!-- Reviews Section -->
        <section id="reviews" class="py-10 bg-white">
            <div class="container mx-auto text-center">
                <h2 class="text-4xl font-bold">Customer Reviews</h2>
                <p class="mt-4 text-gray-600">See what our customers are saying about our bikes</p>
                <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <!-- Customer Review 1 -->
                    <div
                        class="review-card p-6 bg-gray-50 shadow-md rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-xl border-2 border-[D3D3D3]">
                        <div class="flex items-center justify-center mb-4">
                            <img src="https://i.pinimg.com/736x/5c/78/a9/5c78a9de603836f792b91aefafb3ef01.jpg"
                                alt="John Doe" class="w-16 h-16 rounded-full mr-4">
                            <div>
                                <p class="font-semibold">John Doe</p>
                                <div class="flex">
                                    <!-- 4 stars filled out of 5 -->
                                    <span class="text-yellow-500">&#9733;</span>
                                    <span class="text-yellow-500">&#9733;</span>
                                    <span class="text-yellow-500">&#9733;</span>
                                    <span class="text-yellow-500">&#9733;</span>
                                    <span class="text-gray-400">&#9733;</span>
                                </div>
                            </div>
                        </div>
                        <p class="text-gray-600">"I absolutely love this bike! Smooth ride, great design, and amazing
                            features. Worth every penny!"</p>
                    </div>

                    <!-- Customer Review 2 -->
                    <div
                        class="review-card p-6 bg-gray-50 shadow-md rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-xl border-2 border-[D3D3D3]">
                        <div class="flex items-center justify-center mb-4">
                            <img src="https://i.pinimg.com/474x/59/5b/25/595b2574f1c791eb5db1721a2cf8ed49.jpg"
                                alt="Jane Smith" class="w-16 h-16 rounded-full mr-4">
                            <div>
                                <p class="font-semibold">Jane Smith</p>
                                <div class="flex">
                                    <!-- 5 stars filled out of 5 -->
                                    <span class="text-yellow-500">&#9733;</span>
                                    <span class="text-yellow-500">&#9733;</span>
                                    <span class="text-yellow-500">&#9733;</span>
                                    <span class="text-yellow-500">&#9733;</span>
                                    <span class="text-yellow-500">&#9733;</span>
                                </div>
                            </div>
                        </div>
                        <p class="text-gray-600">"A fantastic bike! The performance is top-notch, and it's super
                            comfortable for long rides. Highly recommend!"</p>
                    </div>

                    <!-- Customer Review 3 -->
                    <div
                        class="review-card p-6 bg-gray-50 shadow-md rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-xl border-2 border-[D3D3D3]">
                        <div class="flex items-center justify-center mb-4">
                            <img src="https://i.pinimg.com/474x/6f/e8/a9/6fe8a9ab1fea9e57e5a49f9d5d6731eb.jpg"
                                alt="Michael Brown" class="w-16 h-16 rounded-full mr-4">
                            <div>
                                <p class="font-semibold">Michael Brown</p>
                                <div class="flex">
                                    <!-- 3 stars filled out of 5 -->
                                    <span class="text-yellow-500">&#9733;</span>
                                    <span class="text-yellow-500">&#9733;</span>
                                    <span class="text-yellow-500">&#9733;</span>
                                    <span class="text-gray-400">&#9733;</span>
                                    <span class="text-gray-400">&#9733;</span>
                                </div>
                            </div>
                        </div>
                        <p class="text-gray-600">"Great bike overall. It's fast, sturdy, and looks amazing. Could use a
                            little more comfort though." </p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'custom'
})
import { ref } from "vue";
import { featuredBikes } from "@/data/featuredbikes"; // Import the data

const bikes = ref(featuredBikes); // Store bikes data

const goToBookingPage = (bike) => {
    // When "Book Now" button is clicked, navigate to booking page with bike data
    navigateTo({
        path: "/BookingPage",
        query: {
            id: bike.id,
            name: bike.name,
            price: bike.price,
            image: bike.image,
            description: bike.description,
            category: bike.category,
        },
    });
};
</script>


<style>
/* Hero Section Circle */
/* Hero Section Circle */
.hero-blur-circle {
    position: absolute;
    top: 90%;
    right: -20vw;
    transform: translateY(-50%);
    width: 40vw;
    height: 35vw;
    max-width: 550px;
    max-height: 500px;
    background-color: #4e71e1;
    border-radius: 50%;
    z-index: 10;
}

.hero-blur-circle_2 {
    position: absolute;
    top: 65%;
    right: -10vw;
    transform: translateX(-50%);
    width: 40vw;
    height: 35vw;
    max-width: 550px;
    max-height: 500px;
    background-color: #e68c73;
    border-radius: 50%;
    z-index: 10;
}

/* Responsive adjustments
@media (max-width: 1024px) {

    .hero-blur-circle,
    .hero-blur-circle_2 {
        width: 30vw;
        height: 30vw;
    }
}

@media (max-width: 768px) {
    .hero-blur-circle {
        top: 85%;
        right: -15vw;
        width: 50vw;
        height: 45vw;
    }

    .hero-blur-circle_2 {
        top: 60%;
        right: -5vw;
        width: 50vw;
        height: 45vw;
    }
}

@media (max-width: 480px) {

    .hero-blur-circle,
    .hero-blur-circle_2 {
        width: 60vw;
        height: 55vw;
        right: -5vw;
    }

    .hero-blur-circle {
        top: 80%;
    }

    .hero-blur-circle_2 {
        top: 50%;
    }
} */
</style>