import axios from "axios";
import axiosClient from "../../adminDashboard/axios";

export default {
    state: {
        products: {
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
        setProducts(state, [loading, data = null]) {
            if (data) {
                state.products = {
                    ...state.products,
                    data: data.data,
                    links: data.meta?.links,
                    page: data.meta.current_page,
                    limit: data.meta.per_page,
                    from: data.meta.from,
                    to: data.meta.to,
                    total: data.meta.total,
                };
            }
            state.products.loading = loading;
        },
    },
    actions: {
        getProducts(
            { commit, state },
            {
                url = null,
                search = "",
                per_page,
                sort_field,
                sort_direction,
            } = {}
        ) {
            commit("setProducts", [true]);
            url = url || "/products";
            const params = {
                per_page: state.products.limit,
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
                    commit("setProducts", [false, response.data]);
                })
                .catch(() => {
                    commit("setProducts", [false]);
                });
        },

        getProduct({ commit }, id) {
            return axiosClient.get(`/products/${id}`);
        },

        createProduct({ commit }, product) {
            if (product.image instanceof File) {
                const form = new FormData();
                form.append("_method", "POST");
                form.append("title", product.title);
                form.append("image", product.image);
                form.append("description", product.description || "");
                form.append("published", product.published ? 1 : 0);
                form.append("price", product.price);
                form.append("category_id", product.category_id);
                product = form;
            }
            return axiosClient.post("/products", product, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
        },
        updateProduct({ commit }, product) {
            const id = product.id;
            if (product.image) {
                const form = new FormData();
                form.append("id", product.id);
                form.append("title", product.title);
                form.append("image", product.image);
                form.append("description", product.description || "");
                form.append("published", product.published ? 1 : 0);
                form.append("price", product.price);
                form.append("category_id", product.category_id);
                form.append("_method", "PUT");
                product = form;
            } else {
                product._method = "PUT";
                product.published = product.published ? 1 : 0;
            }
            return axiosClient.post(`/products/${id}`, product, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
        },
        deleteProduct({ commit }, id) {
            return axiosClient.delete(`/products/${id}`);
        },
    },
};
