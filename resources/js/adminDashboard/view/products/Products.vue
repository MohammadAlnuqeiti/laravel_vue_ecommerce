<template>
    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div class="flex items-center justify-between mb-3">
            <h1 class="text-3xl font-semibold">Products</h1>
            <button
                type="button"
                @click="router.push({ name: 'products.create' })"
                class="py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                Add new Product
            </button>
        </div>
        <ProductsTable />
    </main>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

import ProductsTable from "./ProductView.vue";
const store = useStore();
const router = useRouter();

const DEFAULT_PRODUCT = {
    id: "",
    title: "",
    description: "",
    image: "",
    price: "",
};

</script>

<style scoped></style>
