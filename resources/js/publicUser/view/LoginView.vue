<template>
    <!-- Page Banner Section Start -->
    <div
        class="section page-banner-section"
        style="background-image: url(assets/images/Login.png)"
    >
        <div class="container">
            <!-- Page Banner Content End -->
            <div class="page-banner-content">
                <h2 class="title">Login</h2>

                <ul class="breadcrumb">
                    <li><router-link to="/">Home</router-link></li>
                    <li class="active">Login</li>
                </ul>
            </div>
            <!-- Page Banner Content End -->
        </div>
    </div>
    <!-- Page Banner Section End -->

    <!-- Login Section Start -->
    <div class="section section-padding mt-n1">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <!-- Login & Register Start -->
                    <div class="login-register-wrapper">
                        <h4 class="title">Login to Your Account</h4>
                        <form action="#" @submit.prevent="login">
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
                            <div class="single-form">
                                <input
                                    type="email"
                                    placeholder="email *"
                                    v-model="user.email"
                                />
                            </div>
                            <div class="single-form">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    v-model="user.password"
                                />
                            </div>
                            <div class="single-form">
                                <input
                                    type="checkbox"
                                    id="remember"
                                    v-model="user.remember"
                                />
                                <label for="remember"
                                    ><span></span> Remember me</label
                                >
                            </div>
                            <div class="single-form">
                                <button
                                    type="submit"
                                    class="btn btn-primary btn-hover-dark"
                                    :disabled="loading"
                                >
                                    Login
                                </button>
                            </div>
                        </form>
                        <!-- <p><a href="#">Lost your password?</a></p> -->
                        <p>
                            No account?
                            <router-link to="/signup"
                                >Create one here.</router-link
                            >
                        </p>
                    </div>
                    <!-- Login & Register End -->
                </div>
            </div>
        </div>
    </div>
    <!-- Login Section End -->
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

let loading = ref(false);
let errorMsg = ref("");
const store = useStore();
const router = useRouter();
const user = ref({
    email: "",
    password: "",
    remember: false,
});

function login() {
    loading.value = true;
    store
        .dispatch("loginUser", user.value)
        .then(() => {
            loading.value = false;
            router.push({ name: "home" });
        })
        .catch(({ response }) => {
            loading.value = false;
            errorMsg.value = response.data.message;
        });
}
</script>

<style scoped>
@import url(../../../../public/assets/css/style.css);

/* Plugins CSS */
@import url(../../../../public/assets/css/plugins/animate.min.css);
@import url(../../../../public/assets/css/plugins/swiper-bundle.min.css);
@import url(../../../../public/assets/css/plugins/odometer.min.css);
@import url(../../../../public/assets/css/plugins/nice-select.css);
@import url(../../../../public/assets/css/plugins/select2.min.css);
@import url(../../../../public/assets/css/plugins/ion.rangeSlider.min.css);

.error {
    color: red;
    margin-left: 7px;
    margin-top: 1px !important;
}

div.errorMsg {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  --tw-bg-opacity: 1;
  background-color: rgb(239 68 68 / 1);
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / 1);
  border-radius: 0.25rem;
}

div.errorMsg > span {
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  transition-property: color, background-color, border-color, fill, stroke,
    -webkit-text-decoration-color;
  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke;
  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke, -webkit-text-decoration-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  cursor: pointer;
}

div.errorMsg > span:hover {
  background-color: rgba(0, 0, 0, 0.2);
}

div.errorMsg > span > svg {
  height: 1.5rem;
  width: 1.5rem;
}
</style>
