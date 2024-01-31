<template>
    <NavBar />
    <SideBar />
    <router-view></router-view>
    <div className="notification" v-if="notification">{{ notification }}</div>
</template>

<script setup>
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import SideBar from "../adminDashboard/components/SideBar.vue";
import NavBar from "../adminDashboard/components/navbar.vue";
import { useStore } from "vuex";
import { computed, onMounted } from "vue";

const store = useStore();

const notification = computed(() => store.state.AuthModules.notification);
</script>

<style scoped>
.router-link-exact-active {
    color: #b00000 !important;
}

button {
    border: none !important;
}

.notification {
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    z-index: 100;
    padding: 1rem 1.5rem;
    background-color: rgb(0, 146, 34);
    color: white;
    border-radius: 0.5rem;
}
</style>
