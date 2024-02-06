<template>
    <nav-bar></nav-bar>
    <router-view></router-view>
    <Footer />
</template>

<script setup>
import NavBar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>

<style scoped>
@import url(../../../public/assets/css/style.css);

/* Plugins CSS */
@import url(../../../public/assets/css/plugins/animate.min.css);
@import url(../../../public/assets/css/plugins/swiper-bundle.min.css);
@import url(../../../public/assets/css/plugins/odometer.min.css);
@import url(../../../public/assets/css/plugins/nice-select.css);
@import url(../../../public/assets/css/plugins/select2.min.css);
@import url(../../../public/assets/css/plugins/ion.rangeSlider.min.css);
</style>
