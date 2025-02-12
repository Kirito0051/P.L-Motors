<template>
    <div class="bg-gray-100 text-gray-800">

        <header class="bg-white shadow-md py-4 sticky top-0 z-50">
            <div class="container mx-auto flex justify-between items-center">
                <div class="text-3xl font-bold text-[#2D3748] cursor-pointer">P.L Motors</div>
                <div class="flex items-center space-x-8">
                    <a href="#home" class="hover:text-blue-500">Home</a>
                    <a href="#bikes" class="hover:text-blue-500">Bikes</a>
                    <a href="#reviews" class="hover:text-blue-500">Reviews</a>
                    <a href="#contact" class="hover:text-blue-500">Contact</a>
                </div>
                <div class="relative">
                    <input type="text" placeholder="Search Bikes..."
                        class="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none w-80 transition" />
                    <span class="absolute right-3 top-2 text-gray-500 cursor-pointer">&#128269;</span>
                </div>
            </div>
        </header>


        <!-- Hero Section (Carousel) -->
        <section id="home" class="relative h-[85vh] overflow-hidden bg-[#d7c8c1] bg-cover bg-center ">
            <div class=" absolute inset-0 bg-opacity-40 "></div>
            <div class=" container mx-auto text-center text-white relative z-10 p-40">
                <h1 class="text-5xl font-bold md:text-7xl">Find Your Perfect Ride</h1>
                <p class="mt-4 text-xl md:text-2xl">Explore the latest bikes, reviews, and buying guides</p>
                <div class="mt-6 flex justify-center gap-6 z-20">
                    <button class="bg-blue-600 px-6 py-3 text-white rounded-lg hover:bg-blue-700 transition ">Explore
                        Bikes</button>
                    <button class="bg-white text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-100 transition ">Contact
                        Us</button>
                </div>
            </div>

            <div class=" blur-[95px] hero-blur-circle"></div>
            <div class=" blur-[100px] hero-blur-circle_2"></div>


            <!-- Carousel -->
            <div class="absolute inset-0 overflow-hidden flex justify-center items-center">
                <div class="carousel-slide flex justify-center items-center h-full">
                    <img src="/images/—Pngtree—motorcycle modif classic custom vector_9145927.png" alt="Bike Image 1"
                        class="object-cover w-[50rem] h-[50rem]" />
                </div>
            </div>
        </section>

        <!-- Featured Bikes Section -->
        <section id="bikes" class="py-16 bg-gray-50">
            <div class="container mx-auto text-center">
                <h2 class="text-4xl font-bold">Featured Bikes</h2>
                <p class="mt-4 text-gray-600">Find your next bike with detailed reviews and specifications</p>
                <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <!-- Bike Card 1 -->
                    <div
                        class="bike-card p-6 bg-white shadow-md rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-xl">
                        <img src="" alt="Bike 1" class="w-full h-48 object-cover rounded-md mb-4" />
                        <h3 class="text-xl font-semibold">Bike Model 1</h3>
                        <p class="text-gray-600">₹1,00,000</p>
                        <button
                            class="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">View
                            Details</button>
                    </div>

                    <!-- Bike Card 2 -->
                    <div
                        class="bike-card p-6 bg-white shadow-md rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-xl">
                        <img src="" alt="Bike 2" class="w-full h-48 object-cover rounded-md mb-4" />
                        <h3 class="text-xl font-semibold">Bike Model 2</h3>
                        <p class="text-gray-600">₹1,20,000</p>
                        <button
                            class="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">View
                            Details</button>
                    </div>

                    <!-- Bike Card 3 -->
                    <div
                        class="bike-card p-6 bg-white shadow-md rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-xl">
                        <img src="" alt="Bike 3" class="w-full h-48 object-cover rounded-md mb-4" />
                        <h3 class="text-xl font-semibold">Bike Model 3</h3>
                        <p class="text-gray-600">₹80,000</p>
                        <button
                            class="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">View
                            Details</button>
                    </div>
                    <!-- Add more bikes here -->
                </div>
            </div>
        </section>

        <!-- Reviews Section -->
        <section id="reviews" class="py-16 bg-white">
            <div class="container mx-auto text-center">
                <h2 class="text-4xl font-bold">Latest Reviews</h2>
                <p class="mt-4 text-gray-600">Check out our expert reviews on the latest bikes</p>
                <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <!-- Review Card 1 -->
                    <div
                        class="review-card p-6 bg-gray-50 shadow-md rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-xl">
                        <h3 class="text-xl font-semibold">Bike Model 1 Review</h3>
                        <p class="mt-2 text-gray-600">Detailed review of the latest bike model...</p>
                        <button
                            class="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Read
                            More</button>
                    </div>

                    <!-- Review Card 2 -->
                    <div
                        class="review-card p-6 bg-gray-50 shadow-md rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-xl">
                        <h3 class="text-xl font-semibold">Bike Model 2 Review</h3>
                        <p class="mt-2 text-gray-600">Detailed review of the latest bike model...</p>
                        <button
                            class="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Read
                            More</button>
                    </div>

                    <!-- Review Card 3 -->
                    <div
                        class="review-card p-6 bg-gray-50 shadow-md rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-xl">
                        <h3 class="text-xl font-semibold">Bike Model 3 Review</h3>
                        <p class="mt-2 text-gray-600">Detailed review of the latest bike model...</p>
                        <button
                            class="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Read
                            More</button>
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
    /* Centers it vertically in the hero section */
    right: -250px;
    /* Moves it partially out of the right edge */
    transform: translateY(-50%);
    /* Fine-tune the vertical centering */
    width: 550px;
    /* Size of the circle */
    height: 500px;
    /* Size of the circle */
    background-color: #4564ce;
    /* Light color with transparency */
    border-radius: 50%;
    /* Makes it a circle */
    z-index: 10;
    /* Keeps it behind text and buttons */
}

.hero-blur-circle_2 {
    position: absolute;
    top: 65%;
    /* Adjust this to control how far from the bottom */
    right: -50px;
    /* Center the circle horizontally */
    transform: translateX(-50%);
    /* Align the circle to the center */
    width: 550px;
    /* Size of the circle */
    height: 500px;
    /* Size of the circle */
    background-color: #d88068;
    /* Light color with transparency */
    border-radius: 50%;
    /* Makes it a circle */
    z-index: 10;
    /* Keeps it behind text and buttons */
}
</style>
