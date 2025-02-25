<template>
    <div>
        <footer class="bg-gray-900 text-white py-8">
            <div
                class="container px-4 mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                <!-- Left side: Privacy Policy and Contact Us -->
                <div class="flex flex-col md:flex-row gap-2 md:gap-4">
                    <p class="text-white hover:text-blue-400 uppercase">© 2024 P.L Motors. All rights reserved</p>
                    <a href="#" class="text-white hover:text-blue-400 underline">Privacy Policy</a>
                    <a href="/contact" class="text-white hover:text-blue-400 underline">Contact Us</a>
                </div>

                <!-- Right side: Social media icons -->
                <div class="flex gap-4 mt-4 md:mt-0">
                    <a href="#" class="text-white hover:text-blue-400">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" class="text-white hover:text-blue-400">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href="#" class="text-white hover:text-blue-400">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#" class="text-white hover:text-blue-400">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                </div>
            </div>
        </footer>
    </div>
</template>

<style scoped>
footer {
    background: linear-gradient(135deg, #1f2937, #3b82f6);
    color: #fff;
}

a {
    transition: color 0.3s ease;
}

a:hover {
    color: #60a5fa;
}
</style>
