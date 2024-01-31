<template>
    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div
            class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
        >
            <h1 class="h2" v-if="!route.params.id">Create Category</h1>
            <h1 class="h2" v-else>Update Category</h1>
        </div>
        <form @submit.prevent="onSubmit">
            <div class="mb-3">
                <label for="ProductTitle" class="form-label"
                    >Category Title</label
                >
                <input
                    type="text"
                    class="form-control"
                    id="CategoryTitle"
                    aria-describedby="emailHelp"
                    v-model="category.title"
                />
                <div class="error" v-if="error && error.title">
                    {{ error.title[0] }}
                </div>
            </div>
            <div class="mb-3">
                <label for="Description" class="form-label">Description</label>
                <textarea
                    class="form-control"
                    id="Description"
                    rows="3"
                    v-model="category.description"
                ></textarea>
                <div class="error" v-if="error && error.description">
                    {{ error.description[0] }}
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
            <button type="submit" class="btn btn-primary mt-3 bg-black">
                Submit
            </button>
        </form>
    </main>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";

const store = useStore();
const category = ref({
    title: "",
    image: "",
    description: "",
});
const error = ref({});
const router = useRouter();
const route = useRoute();

function handleImageChange(event) {
    // Get the file from the event
    category.value.image = event.target.files[0];
}

onMounted(() => {
    if (route.params.id) {
        store.dispatch("getCategory", route.params.id).then((response) => {
            category.value = response.data.data;
        });
    }
});
function onSubmit() {
    if (category.value.id) {
        store.dispatch("updateCategory", category.value).then((response) => {
            if (response.status === 200) {
                // TODO show notification
                store.dispatch('setNotification' , "Category updated successfully.")
                router.push({ name: "category.view" });
            }
        });
    } else {
        store
            .dispatch("createCategory", category.value)
            .then((response) => {
                if (response.status === 201) {
                    // TODO show notification
                    store.dispatch('setNotification' , "Category created successfully.")
                    router.push({ name: "category.view" });
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
