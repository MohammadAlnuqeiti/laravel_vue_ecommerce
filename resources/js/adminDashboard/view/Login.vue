<template>
    <div class="body">
        <div class="my-alert">
            <div class="my-alert__unique1">
                <img
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&amp;shade=600"
                    alt="Your Company"
                />
                <h2>Sign in to your account</h2>
            </div>

            <div class="my-alert__unique2">
                <form method="POST" @submit.prevent="login">
                    <div v-if="errorMsg" class="errorMsg">
                        {{ errorMsg }}
                        <span @click="errorMsg = ''">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12"
                                ></path>
                            </svg>
                        </span>
                    </div>
                    <input type="hidden" name="remember" value="true" />
                    <div>
                        <label for="email">Email address</label>
                        <div class="my-alert__unique3">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autocomplete="email"
                                v-model="user.email"
                            />
                        </div>
                    </div>

                    <div>
                        <div class="my-alert__unique4">
                            <label for="password">Password</label>
                            <div>
                                <router-link :to="{ name: 'RequestPassword' }"
                                    >Forgot password?</router-link
                                >
                            </div>
                        </div>
                        <div class="my-alert__unique5">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autocomplete="current-password"
                                v-model="user.password"
                            />
                        </div>
                    </div>

                    <div class="form-check">
                        <input
                            type="checkbox"
                            class="form-check-input"
                            id="remember-me"
                            name="remember-me"
                            v-model="user.remember"
                        />
                        <label class="form-check-label" for="remember-me"
                            >Remember me</label
                        >
                    </div>
                    <div>
                        <button
                            type="submit"
                            :disabled="loading"
                            :class="{
                                'cursor-not-allowed': loading,
                                'hover:bg-indigo-500': loading,
                            }"
                        >
                            <!-- <svg
                                v-if="loading"
                                class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    class="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    stroke-width="4"
                                ></circle>
                                <path
                                    class="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                            </svg> -->
                            <!-- <span class="lockclosedicon">
                                <LockClosedIcon aria-hidden="true">
                                </LockClosedIcon
                            ></span> -->
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from 'vuex'
import { useRouter } from "vue-router";
// import { LockClosedIcon } from "@heroicons/vue";

let loading = ref(false);
let errorMsg = ref("");
const store = useStore();
const router = useRouter();
const user = {
    email: "",
    password: "",
    remember: false,
};

function login() {
    loading.value = true;
    store
        .dispatch("login", user)
        .then(() => {
            loading.value = false;
            router.push({ name: "dashboard" });
        })
        .catch(({ response }) => {
            loading.value = false;
            errorMsg.value = response.data.message;
        });
}
</script>
