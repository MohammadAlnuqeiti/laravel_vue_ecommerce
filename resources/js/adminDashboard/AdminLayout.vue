<template>
    <NavBar />
    <SideBar />
    <router-view></router-view>
</template>

<script setup>
import SideBar from "../adminDashboard/components/SideBar.vue";
import NavBar from "../adminDashboard/components/navbar.vue";
import { useStore } from "vuex";
import { onMounted } from "vue";

</script>

<style>
.router-link-exact-active {
    color: #b00000 !important;
}
button {
    border: none !important;
}
</style>
