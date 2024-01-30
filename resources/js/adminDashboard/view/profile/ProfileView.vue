<template>
    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div
            class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
        >
            <h1 class="h2">Profile</h1>
        </div>
        <div class="container rounded bg-white mt-5 mb-5">
            <div class="row">
                <div class="col-md-3 border-right">
                    <div
                        class="d-flex flex-column align-items-center text-center p-3 py-5"
                    >
                        <img
                            class="rounded-circle mt-5"
                            width="150px"
                            :src="
                                'http://localhost:8000/storage/images/users/' +
                                user.image
                            "
                        /><span class="font-weight-bold">{{ user.name }}</span
                        ><span class="text-black-50">{{ user.email }}</span
                        ><span> </span>
                    </div>
                </div>
                <div class="col-md-5 border-right">
                    <form action="" @submit.prevent="onSubmit">
                        <div class="p-3 py-5">
                            <div
                                class="d-flex justify-content-between align-items-center mb-3"
                            >
                                <h4 class="text-right">Profile Settings</h4>
                            </div>
                            <div class="row mt-2">
                                <div class="col-md-12">
                                    <label class="labels">Name</label
                                    ><input
                                        type="text"
                                        class="form-control"
                                        placeholder="first name"
                                        v-model="user.name"
                                    />
                                    <div
                                        class="error"
                                        v-if="error && error.name"
                                    >
                                        {{ error.name[0] }}
                                    </div>
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-md-12">
                                    <label class="labels">Mobile Number</label
                                    ><input
                                        type="text"
                                        class="form-control"
                                        placeholder="enter phone number"
                                        value=""
                                        v-model="user.phone"
                                    />
                                    <div
                                        class="error"
                                        v-if="error && error.phone"
                                    >
                                        {{ error.phone[0] }}
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <label class="labels">Email ID</label
                                    ><input
                                        type="text"
                                        class="form-control"
                                        placeholder="enter email id"
                                        v-model="user.email"
                                    />
                                    <div
                                        class="error"
                                        v-if="error && error.email"
                                    >
                                        {{ error.email[0] }}
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <label for="image" class="labels"
                                        >Image</label
                                    >
                                    <input
                                        type="file"
                                        class="form-control"
                                        id="image"
                                        @change="handleImageChange"
                                    />
                                    <div
                                        class="error"
                                        v-if="error && error.image"
                                    >
                                        {{ error.image[0] }}
                                    </div>
                                </div>
                                <!-- <div class="col-md-12">
                                    <label class="labels">Education</label
                                    ><input
                                        type="text"
                                        class="form-control"
                                        placeholder="education"
                                        value=""
                                    />
                                </div> -->
                            </div>
                            <div class="mt-5 text-center">
                                <button
                                    class="btn btn-primary profile-button"
                                    type="submit"
                                >
                                    Save Profile
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="col-md-4">
                    <form @submit.prevent="changePassword">
                        <div class="p-3 py-5">
                            <div
                                class="d-flex justify-content-between align-items-center experience"
                            >
                                <span>Edit Password</span
                                ><span class="border px-3 p-1 add-experience"
                                    ><i class="fa fa-plus"></i
                                    >&nbsp;Password</span
                                >
                            </div>
                            <div class="col-md-12">
                                <label class="labels">Old password</label
                                ><input
                                    type="password"
                                    class="form-control"
                                    placeholder="Old password"
                                    v-model="password.old_password"
                                />
                                <div
                                    class="error"
                                    v-if="error && error.old_password"
                                >
                                    {{ error.old_password[0] }}
                                </div>
                            </div>
                            <hr />
                            <div class="col-md-12">
                                <label class="labels">New password</label
                                ><input
                                    type="password"
                                    class="form-control"
                                    placeholder="New password"
                                    v-model="password.password"
                                />
                                <div
                                    class="error"
                                    v-if="error && error.password"
                                >
                                    {{ error.password[0] }}
                                </div>
                            </div>
                            <br />
                            <div class="col-md-12">
                                <label class="labels">Confirm new passord</label
                                ><input
                                    type="password"
                                    class="form-control"
                                    placeholder="Confirm new passord"
                                    v-model="password.password_confirmation"
                                />
                                <div
                                    class="error"
                                    v-if="error && error.password_confirmation"
                                >
                                    {{ error.password_confirmation[0] }}
                                </div>
                            </div>
                            <div class="mt-5 text-center">
                                <button
                                    class="btn btn-primary profile-button"
                                    type="submit"
                                >
                                    Change passord
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import { useStore } from "vuex";
import { computed, onMounted, ref } from "vue";
const store = useStore();

const error = ref({});
const user = ref({
    id: "",
    name: "",
    email: "",
    phone: "",
    created_at: "",
    image: "",
});

const password = ref({
    old_password: "",
    password: "",
    password_confirmation: "",
});

onMounted(() => {
    user.value = JSON.parse(sessionStorage.getItem("USER"));
});

function handleImageChange(event) {
    // Get the file from the event
    user.value.image = event.target.files[0];
}

function onSubmit() {
    store
        .dispatch("editProfile", user.value)
        .then((response) => {
            if (response.status === 201) {
                // TODO show notification
                store.commit("setUser", response.data);
                router.push({ name: "profile.view" });
            }
        })
        .catch((err) => {
            error.value = err.response.data.errors;
        });
}

function changePassword() {
    password.value.id = user.value.id;
    store
        .dispatch("changePassword", password.value)
        .then((response) => {
            if (response.status === 201) {
                // TODO show notification
                router.push({ name: "profile.view" });
            }
            if (response.data.status === 400) {
                error.value= {'old_password' : [response.data.message]}
            }
        })
        .catch((err) => {
            error.value = err.response.data.errors;
        });
}
</script>
<style scoped>
body {
    background: rgb(99, 39, 120);
}

.form-control:focus {
    box-shadow: none;
    border-color: #524e53;
}

.profile-button {
    background: black;
    box-shadow: none;
    border: none;
}

.profile-button:hover {
    background: #524e53;
}

.profile-button:focus {
    background: #524e53;
    box-shadow: none;
}

.profile-button:active {
    background: #682773;
    box-shadow: none;
}

.back:hover {
    color: #682773;
    cursor: pointer;
}

.labels {
    font-size: 11px;
}

.add-experience:hover {
    background: #ba68c8;
    color: #fff;
    cursor: pointer;
    border: solid 1px #ba68c8;
}

.error {
    color: red;
    margin-left: 7px;
    font-size: 13px;
}
</style>
