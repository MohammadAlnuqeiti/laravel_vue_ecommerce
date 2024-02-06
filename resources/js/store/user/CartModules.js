import axios from "axios";
import axiosClient from "../../adminDashboard/axios";
import Cookies from "js-cookie";

export default {
    state: {
        cart: {
            cartItems: [],
            productsCart: [],
            total: "",
            count: 0,
            getCountFromItems: "",
        },
    },
    getters: {},
    mutations: {
        setData(state, data) {
            state.cart.cartItems = data.cartItems;
            state.cart.productsCart = data.products;
            state.cart.total = data.total;
        },
        setCount(state, countNumber) {
            state.cart.count = countNumber;
        },
        getCountFromItems(state, data) {
            const totalQuantity = data.reduce(
                (carry, item) => carry + item.quantity,
                0
            );
            state.cart.count = totalQuantity;
        },
        getCartItemsCount(state) {
            const authToken = sessionStorage.getItem("TOKEN");
            if (authToken) {
                return axiosClient
                    .post("cart/count", {
                        headers: {
                            Authorization: `Bearer ${authToken}`,
                        },
                    })
                    .then((res) => {
                        // state.cart.count = res.data.count ;
                        this.commit("setCount", res.data.count);
                    });
            } else {
                const cookieCartItems = Cookies.get("cartItems")
                    ? JSON.parse(Cookies.get("cartItems"))
                    : [];

                const totalQuantity = cookieCartItems.reduce(
                    (carry, item) => carry + item.quantity,
                    0
                );
                state.cart.count = totalQuantity;
            }
        },
        removeCookieItem(state) {
            Cookies.remove("cartItems");
            this.commit("getCartItemsCount");
        },
    },
    actions: {
        addToCart({ commit }, product) {
            const authToken = sessionStorage.getItem("TOKEN");
            const user = JSON.parse(sessionStorage.getItem("USER"));
            const quantity = product.quantity || 1;
            if (authToken) {
                return axiosClient
                    .post(`cart/add/${product.id}`, product, {
                        headers: {
                            Authorization: `Bearer ${authToken}`,
                        },
                    })
                    .then((res) => {
                        const cookieCartItems = Cookies.get("cartItems")
                            ? JSON.parse(Cookies.get("cartItems"))
                            : [];

                        let productFound = false;

                        if (
                            Array.isArray(cookieCartItems) &&
                            cookieCartItems.length > 0
                        ) {
                            cookieCartItems.some((value, key) => {
                                if (value["product_id"] === product.id) {
                                    value["quantity"] += quantity;
                                    productFound = true;
                                    return true; // This terminates the loop
                                }
                                return false;
                            });
                        }

                        if (!productFound) {
                            cookieCartItems.push({
                                user_id: user.id,
                                product_id: product.id,
                                quantity: quantity,
                                // price: product.price,
                            });
                        }
                        Cookies.set(
                            "cartItems",
                            JSON.stringify(cookieCartItems),
                            {
                                expires: 30,
                            }
                        ); // expires in 1 day
                        commit("getCartItemsCount");
                    });
            } else {
                const cookieCartItems = Cookies.get("cartItems")
                    ? JSON.parse(Cookies.get("cartItems"))
                    : [];

                let productFound = false;

                if (
                    Array.isArray(cookieCartItems) &&
                    cookieCartItems.length > 0
                ) {
                    cookieCartItems.some((value, key) => {
                        if (value["product_id"] === product.id) {
                            value["quantity"] += quantity;
                            productFound = true;
                            return true; // This terminates the loop
                        }
                        return false;
                    });
                }

                if (!productFound) {
                    cookieCartItems.push({
                        user_id: null,
                        product_id: product.id,
                        quantity: quantity,
                        // price: product.price,
                    });
                }
                Cookies.set("cartItems", JSON.stringify(cookieCartItems), {
                    expires: 30,
                }); // expires in 1 day

                commit("getCountFromItems", cookieCartItems);
            }
        },
        moveCartItemsIntoDb({ commit }) {
            const authToken = sessionStorage.getItem("TOKEN");
            if (authToken) {
                const cookieCartItems = Cookies.get("cartItems")
                    ? JSON.parse(Cookies.get("cartItems"))
                    : [];

                return axiosClient
                    .post("cart/moveDb", cookieCartItems, {
                        headers: {
                            Authorization: `Bearer ${authToken}`,
                        },
                    })
                    .then((res) => {
                        Cookies.remove("cartItems");
                        Cookies.set(
                            "cartItems",
                            JSON.stringify(res.data.cartProduct),
                            {
                                expires: 30,
                            }
                        ); // expires in 1 day
                        commit("getCountFromItems", res.data.cartProduct);
                    });
            }
        },
        getProductsAndCartItems({ commit }) {
            const authToken = sessionStorage.getItem("TOKEN");

            if (authToken) {
                return axiosClient
                    .get("/cart", {
                        headers: {
                            Authorization: `Bearer ${authToken}`,
                        },
                    })
                    .then((res) => {
                        commit("setData", res.data);
                    });
            } else {
                const cookieCartItems = Cookies.get("cartItems")
                    ? JSON.parse(Cookies.get("cartItems"))
                    : [];

                // const ids = cookieCartItems.map((item) => item.product_id);

                return axiosClient
                    .post("cart/products", cookieCartItems, {
                        headers: {
                            Authorization: `Bearer ${authToken}`,
                        },
                    })
                    .then((res) => {
                        commit("setData", res.data);
                    });
            }
        },
    },
};
