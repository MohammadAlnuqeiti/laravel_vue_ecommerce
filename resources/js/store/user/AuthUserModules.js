import axios from "axios";
import axiosClient from "../../adminDashboard/axios";

export default {
    state: {},
    getters: {},
    mutations: {},
    actions: {
        loginUser({ commit }, data) {
            return axiosClient.post("/login-user", data).then(({ data }) => {
                commit("setUser", data.user);
                commit("setToken", data.token);
                this.dispatch("moveCartItemsIntoDb");
                return data;
            });
        },
        signupUser({ commit }, data) {
            return axiosClient.post("/signup-user", data).then(({ data }) => {
                commit("setUser", data.user);
                commit("setToken", data.token);
                return data;
            });
        },
        logoutUser({ commit }) {
            return axiosClient.post("/logout-user").then((response) => {
                commit("setToken", null);
                commit("setUser", null);
                commit("removeCookieItem");
                return response;
            });
        },
        // editProfile({ commit }, user) {
        //     const id = user.id;
        //     if (user.image) {
        //         const form = new FormData();
        //         form.append("id", user.id);
        //         form.append("name", user.name);
        //         form.append("image", user.image);
        //         form.append("email", user.email);
        //         form.append("phone", user.phone);
        //         form.append("_method", "PUT");
        //         user = form;
        //     } else {
        //         user._method = "PUT";
        //     }
        //     return axiosClient.post(`/editProfile/${id}`, user, {
        //         headers: {
        //             "Content-Type": "multipart/form-data",
        //         },
        //     });
        // },
        // changePassword({ commit }, password) {
        //     const id = password.id;
        //     password._method = "PUT";

        //     return axiosClient.post(`/changePassword/${id}`, password, {
        //         headers: {
        //             "Content-Type": "multipart/form-data",
        //         },
        //     });
        // },
    },
};
