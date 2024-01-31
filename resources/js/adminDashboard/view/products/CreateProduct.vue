<template>
    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div
            class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
        >
            <h1 class="h2" v-if="!route.params.id">Create Product</h1>
            <h1 class="h2" v-else>Update Product</h1>
        </div>

        <form @submit.prevent="onSubmit">
            <div class="mb-3">
                <label for="ProductTitle" class="form-label"
                    >Product Title</label
                >
                <input
                    type="text"
                    class="form-control"
                    id="ProductTitle"
                    aria-describedby="emailHelp"
                    v-model="product.title"
                />
                <div class="error" v-if="error && error.title">
                    {{ error.title[0] }}
                </div>
            </div>
            <div class="mb-3">
                <label for="Price" class="form-label">Price</label>
                <input
                    type="number"
                    class="form-control"
                    id="Price"
                    v-model="product.price"
                />
                <div class="error" v-if="error && error.price">
                    {{ error.price[0] }}
                </div>
            </div>
            <div class="mb-3">
                <label for="Description" class="form-label">Description</label>
                <textarea
                    class="form-control"
                    id="Description"
                    rows="3"
                    v-model="product.description"
                ></textarea>
                <div class="error" v-if="error && error.description">
                    {{ error.description[0] }}
                </div>
            </div>
            <div class="form-group">
                <label for="categories">Select Categories</label>
                <select
                    class="form-control"
                    id="categories"
                    v-model="product.category_id"
                >
                    <option
                        v-for="category in categories"
                        :key="category.id"
                        :value="category.id"
                        :selected="product.category_id === category.id"
                    >
                        {{ category.title }}
                    </option>
                </select>
                <div class="error" v-if="error && error.category_id">
                    {{ error.category_id[0] }}
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
                    id="published"
                    v-model="product.published"
                />
                <label class="form-check-label" for="published">
                    Published
                </label>
                <div class="error" v-if="error && error.published">
                    {{ error.published[0] }}
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
import axiosClient from "../../axios";
const store = useStore();
const product = ref({
    title: "",
    image: "",
    description: "",
    price: "",
    category_id:"",
    published: 0,
});
const error = ref({});
const router = useRouter();
const route = useRoute();
const categories = ref("");
function handleImageChange(event) {
    // Get the file from the event
    product.value.image = event.target.files[0];
}

onMounted(() => {
    if (route.params.id) {
        store.dispatch("getProduct", route.params.id).then((response) => {
            product.value = response.data;
        });
    }

    axiosClient.get("/category").then((result) => {
        categories.value = result.data;
    });
});
function onSubmit() {
    if (product.value.id) {
        store.dispatch("updateProduct", product.value).then((response) => {
            if (response.status === 200) {
                // TODO show notification
                store.dispatch('setNotification' , "Product updated successfully.")
                router.push({ name: "products.view" });
            }
        });
    } else {
        store
            .dispatch("createProduct", product.value)
            .then((response) => {
                if (response.status === 201) {
                    // TODO show notification
                    store.dispatch('setNotification' , "Product created successfully.")
                    router.push({ name: "products.view" });
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
