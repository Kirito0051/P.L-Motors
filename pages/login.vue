<template>
    <div class="bg-cover bg-center h-screen" style="background-image: url('/images/login-bg.jpg');">
        <div class="min-h-screen flex items-center justify-center p-4">
            <!-- Card Container -->
            <div
                class="bg-white rounded-lg shadow-lg overflow-hidden max-w-md w-full flex flex-col p-8 drop-shadow-2xl">
                <!-- Header Section -->
                <div class="text-center mb-6">
                    <h1 class="text-2xl font-bold text-gray-900">Welcome Back!</h1>
                    <p class="text-sm text-gray-600">Log in to your account</p>
                </div>

                <!-- Login Form -->
                <form @submit.prevent="submitLogin" class="space-y-4">
                    <!-- Email Input -->
                    <div>
                        <label for="email" class="block text-sm font-medium text-gray-700">Email Address</label>
                        <input type="email" id="email" v-model="form.email"
                            class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                            required />
                    </div>

                    <!-- Password Input -->
                    <div>
                        <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" id="password" v-model="form.password"
                            class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                            placeholder="••••••••" required />
                    </div>

                    <!-- Remember Me and Forgot Password -->
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <input type="checkbox" id="remember" v-model="form.remember"
                                class="h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                            <label for="remember" class="ml-2 block text-sm text-gray-600">Remember me</label>
                        </div>
                        <div>
                            <a href="#" class="text-sm text-indigo-600 hover:underline">Forgot your password?</a>
                        </div>
                    </div>

                    <!-- Submit Button -->
                    <div>
                        <button type="submit"
                            class="w-full py-2 bg-indigo-500 text-white rounded-lg shadow-md font-semibold hover:bg-indigo-600">
                            Log In
                        </button>
                    </div>
                </form>

                <!-- Divider -->
                <div class="flex items-center my-4">
                    <div class="flex-grow h-px bg-gray-300"></div>
                    <span class="mx-2 text-sm text-gray-500">OR</span>
                    <div class="flex-grow h-px bg-gray-300"></div>
                </div>

                <!-- Social Login Buttons -->
                <div class="space-y-2">
                    <button
                        class="w-full py-2 flex items-center justify-center border border-gray-300 text-gray-700 rounded-lg shadow-md hover:bg-gray-100">
                        <img src="/images/google.png" alt="Google" class="w-5 h-5 mr-2" />
                        Continue with Google
                    </button>
                    <button
                        class="w-full py-2 flex items-center justify-center border border-gray-300 text-gray-700 rounded-lg shadow-md hover:bg-gray-100">
                        <img src="/images/fb.png" alt="Facebook" class="w-5 h-5 mr-2" />
                        Continue with Facebook
                    </button>
                </div>

                <!-- Sign Up Link -->
                <p class="text-center text-sm text-gray-600 mt-6">
                    Don’t have an account? <NuxtLink to="/signup" class="text-indigo-600 hover:underline">Sign up
                    </NuxtLink>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                email: '',
                password: '',
                remember: false,
            },
        };
    },
    methods: {
        submitLogin() {
            // Simulate login logic
            console.log('Login form submitted:', this.form);

            // Perform validation or API call here
            if (!this.form.email || !this.form.password) {
                alert('Please fill in both email and password!');
                return;
            }

            // Example: Successful login message
            alert('Logged in successfully!');
        },
    },
};
</script>
