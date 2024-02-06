<template>
    <!-- Page Banner Section Start -->
    <div
        class="section page-banner-section"
        style="background-image: url(assets/images/REGISTER.png)"
    >
        <div class="container">
            <!-- Page Banner Content End -->
            <div class="page-banner-content">
                <h2 class="title">Register</h2>

                <ul class="breadcrumb">
                    <li><router-link to="/">Home</router-link></li>
                    <li class="active">Register</li>
                </ul>
            </div>
            <!-- Page Banner Content End -->
        </div>
    </div>
    <!-- Page Banner Section End -->

    <!-- Register Section Start -->
    <div class="section section-padding mt-n1">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <!-- Login & Register Start -->
                    <div class="login-register-wrapper">
                        <h4 class="title">Create New Account</h4>
                        <p>
                            Already have an account?
                            <router-link to="/login"
                                >Log in instead!</router-link
                            >
                        </p>
                        <form action="#" @submit.prevent="onSubmit">
                            <div class="single-form">
                                <input
                                    type="text"
                                    placeholder="Enter Name *"
                                    v-model="user.name"
                                />
                                <p class="error" v-if="error && error.name">
                                    {{ error.name[0] }}
                                </p>
                            </div>
                            <div class="single-form">
                                <input
                                    type="text"
                                    placeholder="Email Address *"
                                    v-model="user.email"
                                />
                                <p class="error" v-if="error && error.email">
                                    {{ error.email[0] }}
                                </p>
                            </div>
                            <div class="single-form">
                                <input
                                    type="number"
                                    placeholder="Phone Number *"
                                    v-model="user.phone"
                                />
                                <p class="error" v-if="error && error.phone">
                                    {{ error.phone[0] }}
                                </p>
                            </div>
                            <div class="single-form">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    v-model="user.password"
                                />
                                <p class="error" v-if="error && error.password">
                                    {{ error.password[0] }}
                                </p>
                            </div>
                            <div class="single-form">
                                <input
                                    type="password"
                                    placeholder="Confirm Password"
                                    v-model="user.password_confirmation"
                                />
                            </div>
                            <div class="single-form">
                                <button
                                    type="submit"
                                    class="btn btn-primary btn-hover-dark"
                                    :disabled="loading"
                                >
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                    <!-- Login & Register End -->
                </div>
            </div>
        </div>
    </div>
    <!-- Register Section End -->
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const error = ref({});
let loading = ref(false);
const router = useRouter();
const store = useStore();
const user = ref({
    name: "",
    email: "",
    phone: "",
    password: "",
    password_confirmation: "",
});
function onSubmit() {
    loading.value = true;
    console.log(user.value);
    store
        .dispatch("signupUser", user.value)
        .then((res) => {
            console.log(res);
            loading.value = false;
            router.push({ name: "home" });
        })
        .catch((err) => {
            loading.value = false;
            error.value = err.response.data.errors;
            // console.log(error.value.name[0]);
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
</style>
