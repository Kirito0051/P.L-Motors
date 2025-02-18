<template>
    <div>
        <footer class="bg-gray-900 text-white py-8">
            <div class="container mx-14  flex justify-between items-center">
                <!-- Left side: Privacy Policy and Contact Us -->
                <div class="flex gap-4">
                    <p class="text-white hover:text-blue-400 uppercase">© 2024 P.L Motors. All rights reserved</p>
                    <a href="#" class="text-white hover:text-blue-400 underline">Privacy Policy</a>
                    <a href="/contact" class="text-white hover:text-blue-400 underline">Contact Us</a>
                </div>

                <!-- Right side: Social media icons -->
                <div class="flex gap-6">
                    <a href="#" class="text-white hover:text-blue-400">
                        <!-- Facebook Icon (using Font Awesome) -->
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" class="text-white hover:text-blue-400">
                        <!-- Instagram Icon (using Font Awesome) -->
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href="#" class="text-white hover:text-blue-400">
                        <!-- Twitter Icon (using Font Awesome) -->
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#" class="text-white hover:text-blue-400">
                        <!-- LinkedIn Icon (using Font Awesome) -->
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