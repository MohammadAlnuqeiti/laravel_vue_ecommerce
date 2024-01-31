<template>
    <div class="bg-white p-4 rounded-lg shadow animate-fade-in-down">
        <div class="flex justify-between border-b-2 pb-3">
            <div class="flex items-center">
                <span class="whitespace-nowrap mr-3">Per Page</span>
                <select
                    class="appearance-none relative block w-24 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    @change="getProducts(null)"
                    v-model="perPage"
                >
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>
                <span class="ml-3">Found {{ products.total }} products</span>
            </div>
            <div>
                <input
                    class="appearance-none relative block w-48 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Type to Search products"
                    v-model="search"
                    @change="getProducts(null)"
                />
            </div>
        </div>

        <table class="table-auto w-full">
            <thead>
                <tr>
                    <th
                        @click="sortProducts('id')"
                        :class="'id' === sortField ? 'bg-blue-50' : ''"
                        class="border-b-2 p-2 text-left cursor-pointer bg-gray-100"
                    >
                        <div class="flex justify-between">
                            ID
                            <div class="ml-2" v-if="sortField === 'id'">
                                <!-- Sort Asc -->
                                <svg
                                    v-if="sortDirection === 'asc'"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="stroke-blue"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="2"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"
                                    />
                                </svg>
                                <!-- Sort Desc -->
                                <svg
                                    v-else
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="stroke-gray"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="2"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"
                                    />
                                </svg>
                            </div>
                        </div>
                    </th>
                    <th
                        :class="'image' === sortField ? 'bg-blue-50' : ''"
                        class="border-b-2 p-2 text-left cursor-pointer bg-gray-100"
                    >
                        <div class="flex justify-between">
                            Image
                            <div class="ml-2" v-if="sortField === 'image'">
                                <!-- Sort Asc -->
                                <svg
                                    v-if="sortDirection === 'asc'"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="stroke-blue"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="2"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"
                                    />
                                </svg>
                                <!-- Sort Desc -->
                                <svg
                                    v-else
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="stroke-gray"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="2"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"
                                    />
                                </svg>
                            </div>
                        </div>
                    </th>
                    <th
                        @click="sortProducts('title')"
                        :class="'title' === sortField ? 'bg-blue-50' : ''"
                        class="border-b-2 p-2 text-left cursor-pointer bg-gray-100"
                    >
                        <div class="flex justify-between">
                            Title
                            <div class="ml-2" v-if="sortField === 'title'">
                                <!-- Sort Asc -->
                                <svg
                                    v-if="sortDirection === 'asc'"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="stroke-blue"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="2"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"
                                    />
                                </svg>
                                <!-- Sort Desc -->
                                <svg
                                    v-else
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="stroke-gray"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="2"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"
                                    />
                                </svg>
                            </div>
                        </div>
                    </th>
                    <th
                        @click="sortProducts('price')"
                        :class="'price' === sortField ? 'bg-blue-50' : ''"
                        class="border-b-2 p-2 text-left cursor-pointer bg-gray-100"
                    >
                        <div class="flex justify-between">
                            Price
                            <div class="ml-2" v-if="sortField === 'price'">
                                <!-- Sort Asc -->
                                <svg
                                    v-if="sortDirection === 'asc'"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="stroke-blue"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="2"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"
                                    />
                                </svg>
                                <!-- Sort Desc -->
                                <svg
                                    v-else
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="stroke-gray"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="2"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"
                                    />
                                </svg>
                            </div>
                        </div>
                    </th>
                    <th
                        @click="sortProducts('updated_at')"
                        :class="'updated_at' === sortField ? 'bg-blue-50' : ''"
                        class="border-b-2 p-2 text-left cursor-pointer bg-gray-100"
                    >
                        <div class="flex justify-between">
                            Last Updated At
                            <div class="ml-2" v-if="sortField === 'updated_at'">
                                <!-- Sort Asc -->
                                <svg
                                    v-if="sortDirection === 'asc'"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="stroke-blue"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="2"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"
                                    />
                                </svg>
                                <!-- Sort Desc -->
                                <svg
                                    v-else
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="stroke-gray"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="2"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"
                                    />
                                </svg>
                            </div>
                        </div>
                    </th>
                    <th
                        :class="'actions' === sortField ? 'bg-blue-50' : ''"
                        class="border-b-2 p-2 text-left cursor-pointer bg-gray-100"
                    >
                        <div class="flex justify-between">Actions</div>
                    </th>
                </tr>
            </thead>
            <tbody v-if="products.loading || !products.data.length" >
                <tr>
                    <td colspan="7" >
                        <!-- <div class="flex flex-col items-center"> -->
                            <div
                                v-if="products.loading"
                                class="spinner-container"
                            >
                                <svg
                                    class="spinner"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        class="circle"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                    ></circle>
                                    <path
                                        class="path"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    ></path>
                                </svg>
                                <div class="message">Please Wait...</div>
                            </div>
                            <p v-else class="text-center py-8 text-gray-700" >
                                There are no products
                            </p>
                        <!-- </div> -->
                    </td>
                </tr>
            </tbody>
            <tbody v-else>
                <tr v-for="(product, index) of products.data">
                    <td>{{ product.id }}</td>
                    <td style="text-align: center">
                        <img
                            v-if="product.image_url"
                            :src="product.image_url"
                            :alt="product.title"
                            style="
                                width: 100px;
                                height: 100px;
                                object-fit: cover;
                            "
                        />
                        <img
                            v-else
                            style="
                                width: 100px;
                                height: 100px;
                                object-fit: cover;
                            "
                            src="../../assets/noimage.png"
                        />
                    </td>
                    <td>
                        {{ product.title }}
                    </td>
                    <td>
                        {{ product.price }}
                    </td>
                    <td>
                        {{ product.updated_at }}
                    </td>
                    <td>
                        <div class="px-1 py-1 action">
                            <RouterLink
                                :to="{
                                    name: 'products.update',
                                    params: { id: product.id },
                                }"

                            >
                                <button class="edit">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="{1.5}"
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                                        />
                                    </svg>
                                </button>
                            </RouterLink>
                            <button
                                class="delete"
                                @click="deleteProduct(product)"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="{1.5}"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                    />
                                </svg>
                            </button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>

        <div class="flex justify-between items-center mt-5">
            <div>Showing from 1 to 10</div>
            <nav
                class="relative z-0 inline-flex justify-center rounded-md shadow-sm -space-x-px"
                aria-label="Pagination"
            >
                <!-- ... Pagination links ... -->
            </nav>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { PRODUCTS_PER_PAGE } from "../../constants";
import { useStore } from "vuex";

const store = useStore();
const perPage = ref(PRODUCTS_PER_PAGE);
const search = ref("");
const products = computed(() => store.state.ProductModules.products);
const sortField = ref("updated_at");
const sortDirection = ref("desc");

onMounted(() => {
    getProducts();
});

function getForPage(ev, link) {
    ev.preventDefault();
    if (!link.url || link.active) {
        return;
    }

    getProducts(link.url);
}

function getProducts(url = null) {
    store.dispatch("getProducts", {
        url,
        search: search.value,
        per_page: perPage.value,
        sort_field: sortField.value,
        sort_direction: sortDirection.value,
    });
}

function sortProducts(field) {
    if (field === sortField.value) {
        if (sortDirection.value === "desc") {
            sortDirection.value = "asc";
        } else {
            sortDirection.value = "desc";
        }
    } else {
        sortField.value = field;
        sortDirection.value = "asc";
    }

    getProducts();
}

function deleteProduct(product) {
    if (!confirm(`Are you sure you want to delete the product?`)) {
        return;
    }
    store.dispatch("deleteProduct", product.id).then((res) => {
        // TODO Show notification
        store.dispatch('setNotification' , "Product deleted successfully.")
        store.dispatch("getProducts");
    });
}
</script>
<style scoped>

main {
    margin-top: 15px;
}
.flex {
    display: flex;
}

.items-center {
    align-items: center;
}

.justify-between {
    justify-content: space-between;
}

.mb-3 {
    margin-bottom: 1rem;
}

.text-3xl {
    font-size: 1.875rem; /* 30px */
}

.font-semibold {
    font-weight: 600;
}

.py-2 {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
}

.px-4 {
    padding-left: 1rem;
    padding-right: 1rem;
}

.border {
    border: 1px solid #e5e7eb;
}

.rounded-md {
    border-radius: 0.375rem; /* 6px */
}

.text-white {
    color: #fff;
}

.bg-indigo-600 {
    background-color: #4f46e5;
}

.hover\:bg-indigo-700:hover {
    background-color: #4338ca;
}

.focus\:outline-none:focus {
    outline: none;
}

.focus\:ring-2:focus {
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
}

.focus\:ring-offset-2:focus {
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.5);
}

.focus\:ring-indigo-500:focus {
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
}

.bg-white {
    background-color: #fff;
}

.p-4 {
    padding: 1rem;
}

.border-b-2 {
    border-bottom-width: 2px;
}

.pb-3 {
    padding-bottom: 0.75rem;
}

.flex.justify-between.border-b-2.pb-3 {
    border-bottom-width: 2px;
    padding-bottom: 0.75rem;
    display: flex;
    justify-content: space-between;
}

.flex.items-center.span.whitespace-nowrap.mr-3 {
    display: flex;
    align-items: center;
    white-space: nowrap;
    margin-right: 0.75rem;
}

.ml-3 {
    margin-left: 0.75rem;
}

.select.appearance-none.relative.block.w-24.px-3.py-2.border.border-gray-300.placeholder-gray-500.text-gray-900.rounded-md.focus\:outline-none.focus\:ring-indigo-500.focus\:border-indigo-500.focus\:z-10.sm\:text-sm {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    display: block;
    width: 6rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    border: 1px solid #e5e7eb;
    border-radius: 0.375rem;
    color: #1f2937;
    background-color: #fff;
    line-height: 1.25rem;
    font-size: 0.875rem;
}

.appearance-none.relative.block.w-48.px-3.py-2.border.border-gray-300.placeholder-gray-500.text-gray-900.rounded-md.focus\:outline-none.focus\:ring-indigo-500.focus\:border-indigo-500.focus\:z-10.sm\:text-sm {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    display: block;
    width: 12rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    border: 1px solid #e5e7eb;
    border-radius: 0.375rem;
    color: #1f2937;
    background-color: #fff;
    line-height: 1.25rem;
    font-size: 0.875rem;
}

.table-auto {
    width: 100%;
}

.table-auto th,
.table-auto td {
    border: 1px solid #e5e7eb;
    padding: 0.5rem;
    text-align: left;
}

.table-auto th {
    background-color: #f3f4f6;
}

.animate-fade-in-down {
    animation: fadeInDown 0.5s ease-in-out;
}

@keyframes fadeInDown {
    0% {
        opacity: 0;
        transform: translateY(-20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

th {
    border-bottom: 2px solid #e5e7eb;
    padding: 8px;
    text-align: left;
    cursor: pointer;
    background-color: #f3f4f6;
}

th:hover {
    background-color: #dbe4ff;
}

.flex {
    display: flex;
    justify-content: space-between;
}

.ml-2 {
    margin-left: 8px;
}

svg {
    height: 24px;
    width: 24px;
}

.stroke-blue {
    stroke: #3b82f6;
}

.stroke-gray {
    stroke: #6b7280;
}

.spinner-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 2rem;
}

.spinner {
    animation: spin 1s linear infinite;
    margin-left: -1rem;
    height: 8px;
    width: 8px;
    color: #6b7280;
}

.circle {
    opacity: 0.25;
    stroke: currentColor;
    stroke-width: 4;
    fill: none;
}

.path {
    opacity: 0.75;
    fill: currentColor;
}

.message {
    margin-top: 0.5rem;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

.action button {
    background: none;
    border: none;
}
.action {
    display: flex;
    gap: 5px;
    justify-content: center;
    align-items: center;
}
.action .delete:hover {
    color: red;
}
.action .edit:hover {
    color: green;
}
/* Add more styles for the remaining elements based on your design */
</style>
