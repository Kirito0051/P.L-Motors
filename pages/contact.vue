<template>
    <div class="py-10 min-h-screen bg-gray-50 flex flex-col items-center px-4 sm:px-8 md:px-16 lg:px-20">
        <!-- Hero Section with Image or Map
        <section
            class="w-full h-56 md:h-80 relative bg-cover bg-center flex items-center justify-center bg-[url('https://media.istockphoto.com/id/1302364806/photo/the-blurred-motorcycle-showroom-interior-design-with-dark-tone-color-background-product-with.jpg?s=612x612&w=0&k=20&c=_Atd3IVYtiGnSg78nDIVGzzI8GsK_eMrl3Wl_qjiGww=')] rounded-3xl overflow-hidden">
            <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"></div>
        </section> -->

        <!-- Contact Section -->
        <section class="w-full max-w-6xl py-8 px-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
                <!-- Contact Information -->
                <div class="bg-white shadow-lg rounded-2xl p-6 md:p-8 border">
                    <h2 class="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-gray-800">Get in Touch</h2>
                    <p class="text-gray-600 mb-4 text-sm md:text-base leading-relaxed">
                        We’d love to hear from you! Whether you have a question, feedback, or need support, feel free to
                        reach out.
                    </p>
                    <ul class="space-y-3 text-sm md:text-base">
                        <li class="flex items-center">
                            <span class="text-blue-500 mr-3">
                                <i class="fas fa-phone"></i>
                            </span>
                            <p class="text-gray-700">0000000000</p>
                        </li>
                        <li class="flex items-center">
                            <span class="text-blue-500 mr-3">
                                <i class="fas fa-envelope"></i>
                            </span>
                            <p class="text-gray-700">contact@PL.com</p>
                        </li>
                        <li class="flex items-center">
                            <span class="text-blue-500 mr-3">
                                <i class="fas fa-map-marker-alt"></i>
                            </span>
                            <p class="text-gray-700">Ankur Cinema Hall, Agra Rd, Ghat Gate, Amratpuri, Pink City,
                                Jaipur, Rajasthan 302007
                            </p>
                        </li>
                    </ul>
                </div>

                <!-- Feedback Form -->
                <div class="bg-white shadow-lg rounded-2xl p-6 md:p-8 border">
                    <h2 class="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-gray-800">Send Us a Message</h2>
                    <form @submit.prevent="submitForm" class="space-y-4 md:space-y-6">
                        <div>
                            <label for="name" class="block text-sm font-medium text-gray-700">Your Name</label>
                            <input type="text" id="name" v-model="form.name" required
                                class="mt-1 block w-full px-3 py-2 border rounded-lg" />
                        </div>
                        <div>
                            <label for="email" class="block text-sm font-medium text-gray-700">Your Email</label>
                            <input type="email" id="email" v-model="form.email" required
                                class="mt-1 block w-full px-3 py-2 border rounded-lg" />
                        </div>
                        <div>
                            <label for="message" class="block text-sm font-medium text-gray-700">Your Message</label>
                            <textarea id="message" v-model="form.message" rows="4" required
                                class="mt-1 block w-full px-3 py-2 border rounded-lg"></textarea>
                        </div>
                        <button type="submit"
                            class="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
                            Send Message
                        </button>
                        <p v-if="successMessage" class="text-green-600 mt-4">{{ successMessage }}</p>
                    </form>
                </div>
            </div>
        </section>

        <!-- Office Location Section -->
        <section id="office-location" class="w-full max-w-6xl py-8 px-4">
            <div class="bg-white shadow-lg rounded-2xl p-4 md:p-10 border">
                <h2 class="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-gray-800">Our Location</h2>
                <div class="relative w-full h-64 md:h-72">
                    <iframe class="w-full h-full rounded-lg shadow-sm"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3418.72112768694!2d75.83607997543949!3d26.91321977664689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db7bec93029d5%3A0x2cb2a01eb8dec21f!2sJumma%20bajar!5e1!3m2!1sen!2sin!4v1740562943918!5m2!1sen!2sin"
                        style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </section>
    </div>
</template>


<script>
definePageMeta({
    layout: 'custom',
});
export default {
    data() {
        return {
            form: {
                name: '',
                email: '',
                message: '',
            },
        };
    },
    methods: {
        async submitForm() {
            try {
                const response = await fetch('https://formspree.io/f/xbldkdbv', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.form)
                });

                if (response.ok) {
                    this.successMessage = 'Thanks for your feedback! We appreciate your time.';
                    this.form = { name: '', email: '', message: '' }; // Reset form
                } else {
                    this.successMessage = 'Something went wrong. Please try again.';
                }
            } catch (error) {
                this.successMessage = 'Error sending message!';
            }
        }
    }
};
</script>

<style></style>