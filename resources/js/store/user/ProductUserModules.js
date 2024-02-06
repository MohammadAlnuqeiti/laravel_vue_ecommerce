import axios from "axios";
import axiosClient from "../../adminDashboard/axios";

export default {
    state: {
        categories: {
            data: [],
        },
        productsHome: {
            data: [],
        },
    },
    getters: {},
    mutations: {
        setCategoriesHome(state, data) {
            state.categories.data = data.categories;
        },
        setProductsHome(state, data) {
            state.productsHome.data = data.products;
        },
    },
    actions: {
        getProductsHome({ commit }) {
            return axiosClient
                .get("/products-home")
                .then((response) => {
                    commit("setCategoriesHome", response.data);
                    commit("setProductsHome", response.data);
                })
                .catch(() => {
                });
        },
    },
};
