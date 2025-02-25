<template>

    <section id="reviews" class="py-10 bg-white overflow-hidden">
        <div class="container mx-auto text-center">
            <h2 class="text-4xl font-bold">Customer Reviews</h2>
            <p class="mt-4 text-gray-600">See what our customers are saying about our bikes</p>

            <div class="relative mt-8 w-full">
                <div class="flex w-[200%] animate-[scroll_15s_linear_infinite]">

                    <!-- Wrapper for duplicated content -->
                    <div class="flex space-x-8 w-full">
                        <!-- Original Reviews -->
                        <div
                            class="review-card p-6 bg-gray-50 shadow-md rounded-lg border-2 border-gray-300 w-80 shrink-0">
                            <div class="flex items-center mb-4">
                                <img src="https://i.pinimg.com/736x/5c/78/a9/5c78a9de603836f792b91aefafb3ef01.jpg"
                                    alt="John Doe" class="w-16 h-16 rounded-full mr-4">
                                <div>
                                    <p class="font-semibold">John Doe</p>
                                    <div class="flex">
                                        <span class="text-yellow-500">&#9733;</span>
                                        <span class="text-yellow-500">&#9733;</span>
                                        <span class="text-yellow-500">&#9733;</span>
                                        <span class="text-yellow-500">&#9733;</span>
                                        <span class="text-gray-400">&#9733;</span>
                                    </div>
                                </div>
                            </div>
                            <p class="text-gray-600">"I absolutely love this bike! Smooth ride, great design, and
                                amazing features. Worth every penny!"</p>
                        </div>

                        <div
                            class="review-card p-6 bg-gray-50 shadow-md rounded-lg border-2 border-gray-300 w-80 shrink-0">
                            <div class="flex items-center mb-4">
                                <img src="https://i.pinimg.com/474x/59/5b/25/595b2574f1c791eb5db1721a2cf8ed49.jpg"
                                    alt="Jane Smith" class="w-16 h-16 rounded-full mr-4">
                                <div>
                                    <p class="font-semibold">Jane Smith</p>
                                    <div class="flex">
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

                        <div
                            class="review-card p-6 bg-gray-50 shadow-md rounded-lg border-2 border-gray-300 w-80 shrink-0">
                            <div class="flex items-center mb-4">
                                <img src="https://i.pinimg.com/474x/6f/e8/a9/6fe8a9ab1fea9e57e5a49f9d5d6731eb.jpg"
                                    alt="Michael Brown" class="w-16 h-16 rounded-full mr-4">
                                <div>
                                    <p class="font-semibold">Michael Brown</p>
                                    <div class="flex">
                                        <span class="text-yellow-500">&#9733;</span>
                                        <span class="text-yellow-500">&#9733;</span>
                                        <span class="text-yellow-500">&#9733;</span>
                                        <span class="text-gray-400">&#9733;</span>
                                        <span class="text-gray-400">&#9733;</span>
                                    </div>
                                </div>
                            </div>
                            <p class="text-gray-600">"Great bike overall. It's fast, sturdy, and looks amazing.
                                Could use a little more comfort though." </p>
                        </div>

                        <!-- Duplicate the reviews to create infinite loop effect -->
                        <div
                            class="review-card p-6 bg-gray-50 shadow-md rounded-lg border-2 border-gray-300 w-80 shrink-0">
                            <div class="flex items-center mb-4">
                                <img src="https://i.pinimg.com/736x/5c/78/a9/5c78a9de603836f792b91aefafb3ef01.jpg"
                                    alt="John Doe" class="w-16 h-16 rounded-full mr-4">
                                <div>
                                    <p class="font-semibold">John Doe</p>
                                    <div class="flex">
                                        <span class="text-yellow-500">&#9733;</span>
                                        <span class="text-yellow-500">&#9733;</span>
                                        <span class="text-yellow-500">&#9733;</span>
                                        <span class="text-yellow-500">&#9733;</span>
                                        <span class="text-gray-400">&#9733;</span>
                                    </div>
                                </div>
                            </div>
                            <p class="text-gray-600">"I absolutely love this bike! Smooth ride, great design, and
                                amazing features. Worth every penny!"</p>
                        </div>

                        <div
                            class="review-card p-6 bg-gray-50 shadow-md rounded-lg border-2 border-gray-300 w-80 shrink-0">
                            <div class="flex items-center mb-4">
                                <img src="https://i.pinimg.com/474x/59/5b/25/595b2574f1c791eb5db1721a2cf8ed49.jpg"
                                    alt="Jane Smith" class="w-16 h-16 rounded-full mr-4">
                                <div>
                                    <p class="font-semibold">Jane Smith</p>
                                    <div class="flex">
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

                    </div>
                </div>
            </div>
        </div>
    </section>

</template>
<style>
@keyframes scroll {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(-100%);
    }
}
</style>