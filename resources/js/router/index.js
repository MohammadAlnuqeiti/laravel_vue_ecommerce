import { createRouter, createWebHistory } from "vue-router";
import store from "../store";

const routes = [
    {
        path: "/",
        name: "UserLayout",
        component: () => import("../publicUser/UserLayout.vue"),
        meta: {
            requiresUserAuth: true,
        },
        children: [
            {
                path: "/",
                name: "home",
                component: () => import("../publicUser/view/HomeView.vue"),
            },
        ],
    },
    {
        path: "/admin",
        name: "admin",
        component: () => import("../adminDashboard/AdminLayout.vue"),
        meta: {
            requiresAuth: true,
        },
        children: [
            {
                path: "",
                name: "dashboard",
                component: () =>
                    import("../adminDashboard/view/DoasboardView.vue"),
            },
            {
                path: "categories",
                name: "category.view",
                component: () =>
                    import("../adminDashboard/view/categories/CategoryView.vue"),
            },
            {
                path: "categories/create",
                name: "category.create",
                component: () =>
                    import("../adminDashboard/view/categories/CategoryForm.vue"),
            },
            {
                path: "categories/:id",
                name: "category.update",
                component: () =>
                    import("../adminDashboard/view/categories/CategoryForm.vue"),
            },
            {
                path: "products",
                name: "products.view",
                component: () =>
                    import("../adminDashboard/view/products/Products.vue"),
            },
            {
                path: "products/create",
                name: "products.create",
                component: () =>
                    import("../adminDashboard/view/products/CreateProduct.vue"),
            },
            {
                path: "products/:id",
                name: "products.update",
                component: () =>
                    import("../adminDashboard/view/products/CreateProduct.vue"),
            },
            {
                path: "users",
                name: "users.view",
                component: () =>
                    import("../adminDashboard/view/users/UserView.vue"),
            },
            {
                path: "users/create",
                name: "users.create",
                component: () =>
                    import("../adminDashboard/view/users/UsersForm.vue"),
            },
            {
                path: "users/:id",
                name: "users.update",
                component: () =>
                    import("../adminDashboard/view/users/UsersForm.vue"),
            },
            {
                path: "profile",
                name: "profile.view",
                component: () =>
                    import("../adminDashboard/view/profile/ProfileView.vue"),
            },
        ],
    },
    {
        path: "/",
        name: "admin.auth",
        component: () => import("../adminDashboard/AdminAuthLayout.vue"),
        meta: {
            requiresGuest: true,
        },
        children: [
            {
                path: "/admin-login",
                name: "AdminLogin",
                component: () => import("../adminDashboard/view/Login.vue"),
            },
            {
                path: "/admin-resetPassword",
                name: "ResetPassword",
                component: () =>
                    import("../adminDashboard/view/ResetPassword.vue"),
            },
            {
                path: "/admin-requestPassword",
                name: "RequestPassword",
                component: () =>
                    import("../adminDashboard/view/RequestPassword.vue"),
            },
        ],
    },
    {
        path: "/:pathMatch(.*)",
        name: "notfound",
        component: () => import("../adminDashboard/view/NotFound.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !store.state.AuthModules.user.token) {
        next({ name: "AdminLogin" });
    } else if (to.meta.requiresGuest && store.state.AuthModules.user.token) {
        next({ name: "dashboard" });
    } else {
        next();
    }
});
export default router;
