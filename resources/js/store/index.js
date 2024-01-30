import axios from "axios";
import AuthModules from "./admin/AuthModules";
import ProductModules from "./admin/ProductModules";
import CategoryModules from "./admin/CategoryModules";
import UserModules from "./admin/UserModules";

import { createStore } from "vuex";
export default createStore({
    strict: true,
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        AuthModules,
        ProductModules,
        CategoryModules,
        UserModules,
    },
});
