import axios from "axios";
import axiosClient from "../../adminDashboard/axios";

export default {
    state: {
        user: {
            token: sessionStorage.getItem("TOKEN"),
            data: sessionStorage.getItem("USER"),
        },
    },
    getters: {},
    mutations: {
        setUser(state, user) {
            state.user.data = user;
            if (user) {
                if(sessionStorage.getItem("USER")){
                    sessionStorage.removeItem("USER");
                    sessionStorage.setItem("USER", JSON.stringify(user));
                }else{
                    sessionStorage.setItem("USER", JSON.stringify(user));
                }
            } else {
                sessionStorage.removeItem("USER");
            }
        },
        setToken(state, token) {
            state.user.token = token;
            if (token) {
                sessionStorage.setItem("TOKEN", token);
            } else {
                sessionStorage.removeItem("TOKEN");
            }
        },
    },
    actions: {
        getCurrentUser({ commit }, data) {
            return axiosClient.get("/user", data).then(({ data }) => {
                commit("setUser", data);
                return data;
            });
        },
        login({ commit }, data) {
            return axiosClient.post("/login", data).then(({ data }) => {

                commit("setUser", data.user);
                commit("setToken", data.token);
                return data;
            });
        },
        logout({ commit }) {
            return axiosClient.post("/logout").then((response) => {
                commit("setToken", null);
                commit("setUser", null);

                return response;
            });
        },
        editProfile({commit} , user){
            const id = user.id;
            if (user.image) {
                const form = new FormData();
                form.append("id", user.id);
                form.append("name", user.name);
                form.append("image", user.image);
                form.append("email", user.email);
                form.append("phone", user.phone);
                form.append("_method", "PUT");
                user = form;
            } else {
                user._method = "PUT";
            }
            return axiosClient.post(`/editProfile/${id}`, user, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

        },
        changePassword({commit} , password){

            const id = password.id;
            password._method = "PUT";

            return axiosClient.post(`/changePassword/${id}`, password, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

        },
    },
};
