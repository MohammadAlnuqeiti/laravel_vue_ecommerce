<template>
    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div
            class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
        >
            <h1 class="h2">Users</h1>
            <button
                type="button"
                @click="router.push({ name: 'users.create' })"
                class="py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                Add new User
            </button>
        </div>
        <div class="table-responsive">
            <table class="table">
                <caption>
                    List of users
                </caption>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody v-if="users.loading || !users.data.length">
                    <tr>
                        <td colspan="6">
                            <div v-if="users.loading" class="spinner-container">
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
                            <p v-else class="text-center py-8 text-gray-700">
                                There are no users
                            </p>
                        </td>
                    </tr>
                </tbody>
                <tbody v-else>
                    <tr v-for="(user, index) of users.data">
                        <td>{{ user.id }}</td>
                        <td style="text-align: center">
                            <img
                                v-if="user.image"
                                :src="
                                    'http://localhost:8000/storage/images/users/' +
                                    user.image
                                "
                                :alt="user.name"
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
                        <td>{{ user.name }}</td>
                        <td>{{ user.email }}</td>
                        <td>{{ user.phone }}</td>
                        <td>
                            <div class="px-1 py-1 action">
                                <RouterLink
                                    :to="{
                                        name: 'users.update',
                                        params: { id: user.id },
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
                                    @click="deleteUser(user)"
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
        </div>
    </main>
</template>

<script setup>
import { useRouter } from "vue-router";
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";

const router = useRouter();
const store = useStore();
const users = computed(() => store.state.UserModules.users);

onMounted(() => {
    getUsers();
});

const getUsers = () => {
    store.dispatch("getUsers");
};
const deleteUser = (user) => {
    if (!confirm(`Are you sure you want to delete the user?`)) {
        return;
    }
    store.dispatch("deleteUser", user.id).then((res) => {
        // TODO Show notification
        store.dispatch('setNotification' , "User deleted successfully.")
        store.dispatch("getUsers");
    });};
</script>

<style scoped>

.bg-indigo-600 {
    background-color: #4f46e5;
    border-radius: 5px;
}
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
