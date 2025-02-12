<template>
    <div class="bg-gray-100 text-gray-800">
        <!-- Hero Section (Carousel) -->
        <section id="home" class="relative h-[85vh] overflow-hidden bg-[#d7c8c1] bg-cover bg-center ">
            <div class=" absolute inset-0 bg-opacity-40 "></div>
            <div class=" container mx-auto text-center text-white relative z-10 p-40">
                <h1 class="text-5xl font-bold md:text-7xl">Find Your Perfect Ride</h1>
                <p class="mt-4 text-xl md:text-2xl">Explore the latest bikes, reviews, and buying guides</p>
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
            <div class="blur-[95px] hero-blur-circle"></div>
            <div class="blur-[100px] hero-blur-circle_2"></div>

            <!-- Carousel -->
            <div class="absolute inset-0 overflow-hidden flex justify-center items-center">
                <div class="carousel-slide flex justify-center items-center h-full">
                    <img src="/public/images/bike.png" alt="Bike Image 1" class="object-cover w-[50rem] h-[50rem]" />
                </div>
            </div>
        </section>

        <!-- Box Section -->
        <section class="py-16 bg-gray-200 h-[120vh] mb-16"> <!-- Added mb-16 for spacing -->
            <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
                <!-- Big Container on the Left -->
                <div
                    class="bg-white p-6 shadow-md rounded-lg flex flex-col items-start justify-start h-full border border-[D3D3D3]">
                    <h2 class="text-xl font-bold mt-4 mb-28  px-2">
                        "Explore our latest bike models and experience unmatched performance.
                        Our expert team is here to guide you with personalized advice.
                        Exclusive offers and flexible financing options available.
                        Visit us for a test ride and find your perfect bike."
                    </h2>
                    <div class="overflow-hidden w-full h-full">
                        <img src="/public/images/bike_section.1.jpg" alt="Left Container Image"
                            class="object-cover w-[26rem] h-auto" style="object-position: left;" />
                    </div>
                </div>

                <!-- Two Containers on the Right -->
                <div class="flex flex-col space-y-8 h-full">
                    <!-- Top Container with Image covering the whole container without overflowing -->
                    <div class="bg-white shadow-md rounded-lg flex flex-col items-start h-1/2 border border-[#D3D3D3]">
                        <img src="/public/images/showroom.jpg" alt="Bike Image"
                            class="object-cover w-full h-full rounded-lg" />
                    </div>

                    <!-- Bottom Container with Text -->
                    <div
                        class="bg-white p-6 shadow-md rounded-lg flex flex-col items-start h-1/2 border border-[#D3D3D3 ]">
                        <h2 class="text-xl font-bold mb-8">Why Choose This Bike & PL Motors?</h2>
                        <p class="text-gray-600">✔ Precision-engineered for superior performance and agility</p>
                        <p class="text-gray-600">✔ Lightweight frame ensures maximum control and stability</p>
                        <p class="text-gray-600">✔ Advanced braking and suspension for a smooth, safe ride</p>
                        <p class="text-gray-600">✔ Available in multiple colors with exclusive showroom deals</p>
                        <p class="text-gray-600">✔ Visit PL Motors for expert guidance and flexible financing options.
                        </p>
                        <div class="w-full flex justify-end mt-12 px-4 font-bold">
                            <nuxt-link to="/contact#office-location"
                                class="text-gray-600 hover:text-black flex items-center">
                                Find Us Here
                                <img src="/images/arrow.png" alt="arrow" class="w-5 h-5 ml-2" />
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Featured Bike Section -->
        <section id="Featured_Bike" class=" bg-gray-50">
            <div class="container mx-auto px-4">
                <div class="text-center mb-12">
                    <h2 class="text-4xl font-bold text-gray-800 mb-2">Featured Bikes</h2>
                    <p class="text-gray-600 text-lg">Discover our handpicked selection of premium motorcycles</p>
                    <div class="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
                </div>

                <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <!-- Bike Card 1 -->
                    <div
                        class="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl">
                        <div class="relative overflow-hidden">
                            <img src="https://i.pinimg.com/474x/1b/68/2d/1b682d76781cc2c32e4df57334b96d76.jpg"
                                alt="Bike 1"
                                class="w-full h-64 object-cover transform transition duration-500 group-hover:scale-110" />
                            <div
                                class="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                New
                            </div>
                        </div>
                        <div class="p-6">
                            <div class="flex justify-between items-center mb-4">
                                <h3 class="text-xl font-bold text-gray-800">Bike Model 1</h3>
                                <span class="text-blue-600 font-bold">₹1,50,000</span>
                            </div>
                            <div class="flex items-center gap-4 mb-4">
                                <div class="flex items-center">
                                    <i class="fas fa-tachometer-alt text-gray-500 mr-2"></i>
                                    <span class="text-sm text-gray-600">200 CC</span>
                                </div>
                                <div class="flex items-center">
                                    <i class="fas fa-gas-pump text-gray-500 mr-2"></i>
                                    <span class="text-sm text-gray-600">40 KMPL</span>
                                </div>
                            </div>
                            <p class="text-gray-600 text-sm mb-4">Ride with style and power, the ultimate bike for
                                adventure.</p>
                            <div class="flex justify-between items-center">
                                <button class="text-gray-500 hover:text-red-500 transition-colors">
                                    <i class="far fa-heart text-xl"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Bike Card 2 -->
                    <div
                        class="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl">
                        <div class="relative overflow-hidden">
                            <img src="https://i.pinimg.com/474x/1b/68/2d/1b682d76781cc2c32e4df57334b96d76.jpg"
                                alt="Bike 2"
                                class="w-full h-64 object-cover transform transition duration-500 group-hover:scale-110" />
                            <div
                                class="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                New
                            </div>
                        </div>
                        <div class="p-6">
                            <div class="flex justify-between items-center mb-4">
                                <h3 class="text-xl font-bold text-gray-800">Bike Model 2</h3>
                                <span class="text-blue-600 font-bold">₹1,20,000</span>
                            </div>
                            <div class="flex items-center gap-4 mb-4">
                                <div class="flex items-center">
                                    <i class="fas fa-tachometer-alt text-gray-500 mr-2"></i>
                                    <span class="text-sm text-gray-600">180 CC</span>
                                </div>
                                <div class="flex items-center">
                                    <i class="fas fa-gas-pump text-gray-500 mr-2"></i>
                                    <span class="text-sm text-gray-600">50 KMPL</span>
                                </div>
                            </div>
                            <p class="text-gray-600 text-sm mb-4">Perfect for city riding, offering great fuel
                                efficiency and comfort.</p>
                            <div class="flex justify-between items-center">
                                <button class="text-gray-500 hover:text-red-500 transition-colors">
                                    <i class="far fa-heart text-xl"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Bike Card 3 -->
                    <div
                        class="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl">
                        <div class="relative overflow-hidden">
                            <img src="https://i.pinimg.com/474x/1b/68/2d/1b682d76781cc2c32e4df57334b96d76.jpg"
                                alt="Bike 3"
                                class="w-full h-64 object-cover transform transition duration-500 group-hover:scale-110" />
                            <div
                                class="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                New
                            </div>
                        </div>
                        <div class="p-6">
                            <div class="flex justify-between items-center mb-4">
                                <h3 class="text-xl font-bold text-gray-800">Bike Model 3</h3>
                                <span class="text-blue-600 font-bold">₹1,80,000</span>
                            </div>
                            <div class="flex items-center gap-4 mb-4">
                                <div class="flex items-center">
                                    <i class="fas fa-tachometer-alt text-gray-500 mr-2"></i>
                                    <span class="text-sm text-gray-600">250 CC</span>
                                </div>
                                <div class="flex items-center">
                                    <i class="fas fa-gas-pump text-gray-500 mr-2"></i>
                                    <span class="text-sm text-gray-600">35 KMPL</span>
                                </div>
                            </div>
                            <p class="text-gray-600 text-sm mb-4">For those who seek raw power and performance on the
                                road.</p>
                            <div class="flex justify-between items-center">
                                <button class="text-gray-500 hover:text-red-500 transition-colors">
                                    <i class="far fa-heart text-xl"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Bike Card 4 -->
                    <div
                        class="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl">
                        <div class="relative overflow-hidden">
                            <img src="https://i.pinimg.com/474x/1b/68/2d/1b682d76781cc2c32e4df57334b96d76.jpg"
                                alt="Bike 4"
                                class="w-full h-64 object-cover transform transition duration-500 group-hover:scale-110" />
                            <div
                                class="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                New
                            </div>
                        </div>
                        <div class="p-6">
                            <div class="flex justify-between items-center mb-4">
                                <h3 class="text-xl font-bold text-gray-800">Bike Model 4</h3>
                                <span class="text-blue-600 font-bold">₹2,00,000</span>
                            </div>
                            <div class="flex items-center gap-4 mb-4">
                                <div class="flex items-center">
                                    <i class="fas fa-tachometer-alt text-gray-500 mr-2"></i>
                                    <span class="text-sm text-gray-600">300 CC</span>
                                </div>
                                <div class="flex items-center">
                                    <i class="fas fa-gas-pump text-gray-500 mr-2"></i>
                                    <span class="text-sm text-gray-600">30 KMPL</span>
                                </div>
                            </div>
                            <p class="text-gray-600 text-sm mb-4">Experience unrivaled speed and agility with this
                                premium model.</p>
                            <div class="flex justify-between items-center">
                                <button class="text-gray-500 hover:text-red-500 transition-colors">
                                    <i class="far fa-heart text-xl"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="text-center mt-12">
                    <nuxt-link to="/bikes"
                        class="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        View All Bikes
                    </nuxt-link>
                </div>
            </div>
        </section>


        <!-- Reviews Section -->
        <section id="reviews" class="py-16 bg-white">
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
</script>

<style>
/* Hero Section Circle */
.hero-blur-circle {
    position: absolute;
    top: 90%;
    right: -250px;
    transform: translateY(-50%);
    width: 550px;
    height: 500px;
    background-color: #4564ce;
    border-radius: 50%;
    z-index: 10;
}

.hero-blur-circle_2 {
    position: absolute;
    top: 65%;
    right: -50px;
    transform: translateX(-50%);
    width: 550px;
    height: 500px;
    background-color: #d88068;
    border-radius: 50%;
    z-index: 10;
}
</style>