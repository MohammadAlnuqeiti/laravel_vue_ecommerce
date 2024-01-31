<template>
    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div
            class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
        >
            <h1 class="h2" v-if="!route.params.id">Create User</h1>
            <h1 class="h2" v-else>Update User</h1>
        </div>

        <form @submit.prevent="onSubmit">
            <div class="mb-3">
                <label for="Name" class="form-label">Name</label>
                <input
                    type="text"
                    class="form-control"
                    id="Name"
                    aria-describedby="emailHelp"
                    v-model="user.name"
                />
                <div class="error" v-if="error && error.name">
                    {{ error.name[0] }}
                </div>
            </div>
            <div class="mb-3">
                <label for="phone" class="form-label">Phone Number</label>
                <input
                    type="number"
                    class="form-control"
                    id="phone"
                    aria-describedby="emailHelp"
                    v-model="user.phone"
                />
                <div class="error" v-if="error && error.phone">
                    {{ error.phone[0] }}
                </div>
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input
                    type="email"
                    class="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    v-model="user.email"
                />
                <div class="error" v-if="error && error.email">
                    {{ error.email[0] }}
                </div>
            </div>
            <div class="mb-3" v-if="!route.params.id">
                <label for="password" class="form-label">Password</label>
                <input
                    type="password"
                    class="form-control"
                    id="password"
                    aria-describedby="emailHelp"
                    v-model="user.password"
                />
                <div class="error" v-if="error && error.password">
                    {{ error.password[0] }}
                </div>
            </div>
            <div class="mb-3">
                <label for="image" class="form-label">Image</label>
                <input
                    class="form-control"
                    type="file"
                    id="image"
                    @change="handleImageChange"
                />
                <div class="error" v-if="error && error.image">
                    {{ error.image[0] }}
                </div>
            </div>
            <div class="form-check">
                <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="is_admin"
                    v-model="user.is_admin"
                />
                <label class="form-check-label" for="is_admin">
                    Is Admin
                </label>
                <div class="error" v-if="error && error.is_admin">
                    {{ error.is_admin[0] }}
                </div>
            </div>
            <button type="submit" class="btn btn-primary mt-3 bg-black">
                Submit
            </button>
        </form>
    </main>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";

const user = ref({
    id: "",
    name: "",
    email: "",
    phone: "",
    is_admin: false,
    password: "",
    image: "",
});

const error = ref({});
const store = useStore();
const router = useRouter();
const route = useRoute();

function handleImageChange(event) {
    // Get the file from the event
    user.value.image = event.target.files[0];
}

onMounted(() => {
    if (route.params.id) {
        store.dispatch("getUser", route.params.id).then((response) => {
            user.value = response.data.data;
        });
    }
});
function onSubmit() {
    if (user.value.id) {
        store
            .dispatch("updateUser", user.value)
            .then((response) => {
                if (response.status === 201) {
                    // TODO show notification
                    store.dispatch('setNotification' , "User updated successfully.")
                    router.push({ name: "users.view" });
                }
            })
            .catch((err) => {
                error.value = err.response.data.errors;
                // debugger;
            });
    } else {
        store
            .dispatch("createUser", user.value)
            .then((response) => {
                if (response.status === 201) {
                    // TODO show notification
                    store.dispatch('setNotification' , "User created successfully.")
                    router.push({ name: "users.view" });
                }
            })
            .catch((err) => {
                error.value = err.response.data.errors;
                // debugger;
            });
    }
}
</script>

<style scoped>

form {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: 20px;
    border-radius: 5px;
    margin-top: 10px;
}
.error {
    color: red;
    margin-left: 7px;
}
</style>
