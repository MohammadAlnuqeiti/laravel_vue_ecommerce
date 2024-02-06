import axios from "axios";
import axiosClient from "../../adminDashboard/axios";

export default {
    state: {
        categories: {
            loading: false,
            data: [],
            links: [],
            from: null,
            to: null,
            page: 1,
            limit: null,
            total: null,
        },
    },
    getters: {},
    mutations: {
        setCategories(state, [loading, data = null]) {
            if (data) {
                state.categories = {
                    ...state.categories,
                    data: data.data,
                    links: data.meta?.links,
                    page: data.meta.current_page,
                    limit: data.meta.per_page,
                    from: data.meta.from,
                    to: data.meta.to,
                    total: data.meta.total,
                };
            }
            state.categories.loading = loading;
        },
    },
    actions: {
        getCategories(
            { commit, state },
            {
                url = null,
                search = "",
                per_page,
                sort_field,
                sort_direction,
            } = {}
        ) {
            commit("setCategories", [true]);
            url = url || "/categories";
            const params = {
                per_page: state.categories.limit,
            };
            return axiosClient
                .get(url, {
                    params: {
                        ...params,
                        search,
                        per_page,
                        sort_field,
                        sort_direction,
                    },
                })
                .then((response) => {
                    commit("setCategories", [false, response.data]);
                })
                .catch(() => {
                    commit("setCategories", [false]);
                });
        },

        getCategory({ commit }, id) {
            return axiosClient.get(`/categories/${id}`);
        },

        createCategory({ commit }, category) {
            if (category.image instanceof File) {
                const form = new FormData();
                form.append("_method", "POST");
                form.append("title", category.title);
                form.append("image", category.image);
                form.append("description", category.description || "");
                category = form;
            }
            return axiosClient.post("/categories", category, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
        },
        updateCategory({ commit }, category) {
            const id = category.id;
            if (category.image) {
                const form = new FormData();
                form.append("id", category.id);
                form.append("title", category.title);
                form.append("image", category.image);
                form.append("description", category.description || "");
                form.append("published", category.published ? 1 : 0);
                form.append("price", category.price);
                form.append("_method", "PUT");
                category = form;
            } else {
                category._method = "PUT";
            }
            return axiosClient.post(`/categories/${id}`, category, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
        },
        deleteCategory({ commit }, id) {
            return axiosClient.delete(`/categories/${id}`);
        },
    },
};
