import axiosClient from "../../adminDashboard/axios";

export default {
    state: {
        users: {
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
        setUsers(state, [loading, data = null]) {
            state.users.loading = loading;
            if (data) {
                state.users = {
                    ...state.users,
                    data: data.data,
                    links: data.links,
                    page: data.current_page,
                    limit: data.per_page,
                    from: data.from,
                    to: data.to,
                    total: data.total,
                };
            }
        },
    },
    actions: {
        getUsers({ commit, state }) {
            commit("setUsers", [true]);

            return axiosClient
                .get("/users")
                .then((response) => {
                    commit("setUsers", [false, response.data]);
                })
                .catch(() => {
                    commit("setUsers", [false]);
                });
        },
        getUser({commit} , id){
            return axiosClient.get(`/users/${id}`);
        },
        createUser({commit} , user){
            if(user.image instanceof File){
                const form = new FormData();
                form.append("_method", "POST");
                form.append("name", user.name);
                form.append("email", user.email);
                form.append("image", user.image);
                form.append("is_admin", user.is_admin ? 1 : 0);
                form.append("password", user.password);
                form.append("phone", user.phone);
                user = form;
            }
            return axiosClient.post("/users", user, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
        },
        updateUser({commit} , user){
            const id = user.id;
            if (user.image) {
                const form = new FormData();
                form.append("id", user.id);
                form.append("name", user.name);
                form.append("image", user.image);
                form.append("email", user.email);
                form.append("phone", user.phone);
                form.append("is_admin", user.is_admin ? 1 : 0);
                form.append("_method", "PUT");
                user = form;
            } else {
                user._method = "PUT";
                user.is_admin = user.publis_adminished ? 1 : 0;
            }
            return axiosClient.post(`/users/${id}`, user, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
        },
        deleteUser({ commit },id){
            return axiosClient.delete(`/users/${id}`)
        }
    },
};
