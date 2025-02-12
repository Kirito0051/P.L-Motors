<template>
    <div class="h-screen flex flex-col lg:flex-row">
        <!-- Left Side: Card Container -->
        <div class="w-full lg:w-1/2 flex items-center justify-center p-4" style="background-color: #FEF3E2;">
            <div
                class="bg-white rounded-lg shadow-lg overflow-hidden max-w-md w-full flex flex-col p-8 drop-shadow-2xl">
                <!-- Header Section -->
                <div class="text-center mb-6">
                    <h1 class="text-2xl font-bold text-gray-900">Create an Account</h1>
                    <p class="text-sm text-gray-600">Sign up to get started</p>
                </div>

                <!-- Sign Up Form -->
                <form @submit.prevent="submitForm" class="space-y-4">
                    <!-- Full Name Input -->
                    <div>
                        <label for="fullname" class="block text-sm font-medium text-gray-700">Full Name</label>
                        <input type="text" id="fullname" v-model="form.fullName"
                            class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                            aria-label="Full Name" required />
                    </div>

                    <!-- Email Input -->
                    <div>
                        <label for="email" class="block text-sm font-medium text-gray-700">Email Address</label>
                        <input type="email" id="email" v-model="form.email"
                            class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                            aria-label="Email Address" required />
                    </div>

                    <!-- Password Input -->
                    <div>
                        <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" id="password" v-model="form.password"
                            class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                            placeholder="••••••••" aria-label="Password" required />
                    </div>

                    <!-- Confirm Password Input -->
                    <div>
                        <label for="confirm-password" class="block text-sm font-medium text-gray-700">Confirm
                            Password</label>
                        <input type="password" id="confirm-password" v-model="form.confirmPassword"
                            class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                            placeholder="••••••••" aria-label="Confirm Password" required />
                    </div>

                    <!-- Submit Button -->
                    <div>
                        <button type="submit"
                            class="w-full py-2 bg-indigo-500 text-white rounded-lg shadow-md font-semibold hover:bg-indigo-600"
                            aria-label="Sign Up">
                            Sign Up
                        </button>
                    </div>
                </form>

                <!-- Divider -->
                <div class="flex items-center my-4">
                    <div class="flex-grow h-px bg-gray-300"></div>
                    <span class="mx-2 text-sm text-gray-500">OR</span>
                    <div class="flex-grow h-px bg-gray-300"></div>
                </div>

                <!-- Social Sign Up Buttons -->
                <div class="space-y-2">
                    <button
                        class="w-full py-2 flex items-center justify-center border border-gray-300 text-gray-700 rounded-lg shadow-md hover:bg-gray-100"
                        aria-label="Sign up with Google">
                        <img src="/images/google.png" alt="Google" class="w-5 h-5 mr-2" />
                        Sign up with Google
                    </button>
                    <button
                        class="w-full py-2 flex items-center justify-center border border-gray-300 text-gray-700 rounded-lg shadow-md hover:bg-gray-100"
                        aria-label="Sign up with Facebook">
                        <img src="/images/fb.png" alt="Facebook" class="w-5 h-5 mr-2" />
                        Sign up with Facebook
                    </button>
                </div>

                <!-- Log In Link -->
                <p class="text-center text-sm text-gray-600 mt-6">
                    Already have an account? <NuxtLink to="/login" class="text-indigo-600 hover:underline">Log in
                    </NuxtLink>
                </p>
            </div>
        </div>

        <!-- Right Side: Image -->
        <div class="w-full lg:w-1/2 h-64 lg:h-full">
            <img src="/images/s_up.jpg" alt="Signup" class="w-full h-full object-cover" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                fullName: '',
                email: '',
                password: '',
                confirmPassword: '',
            },
        };
    },
    methods: {
        submitForm() {
            // Validate Passwords Match
            if (this.form.password !== this.form.confirmPassword) {
                alert('Passwords do not match!');
                return;
            }

            // Simulate form submission
            console.log('Form submitted:', this.form);

            // You can add an API call or any logic here
        },
    },
};
</script>
