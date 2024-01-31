<template>
    <div class="body">
        <div class="my-alert">
            <div class="my-alert__unique1">
                <img
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&amp;shade=600"
                    alt="Your Company"
                />
                <h2>Request new password</h2>
            </div>

            <div class="my-alert__unique2">
                <form action="#" method="POST">
                    <div>
                        <label for="email">Email address</label>
                        <div class="my-alert__unique3">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autocomplete="email"
                            />
                        </div>
                    </div>
                    <div class="remember">
                        <div>
                            <router-link :to="{ name: 'AdminLogin' }">
                                Remember your password?
                            </router-link>
                        </div>
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>
div.remember {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

div.remember > div {
    font-size: var(--tw-font-size-sm);
    line-height: var(--tw-line-height-5);
}

div.remember > div > a {
    font-weight: var(--tw-font-weight-medium);
    --tw-text-opacity: 1;
    color: rgb(var(--tw-color-indigo-600) / var(--tw-text-opacity));
    text-decoration: none;
}

div.remember > div > a:hover {
    --tw-text-opacity: 1;
    color: rgb(var(--tw-color-indigo-500) / var(--tw-text-opacity));
}
</style>
