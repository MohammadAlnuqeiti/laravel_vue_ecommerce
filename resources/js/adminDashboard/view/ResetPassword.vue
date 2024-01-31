<template>
    <div class="body">
        <div class="my-alert">
            <div class="my-alert__unique1">
                <img
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&amp;shade=600"
                    alt="Your Company"
                />
                <h2>Set new password</h2>
            </div>

            <div class="my-alert__unique2">
                <form action="#" method="POST">
                    <div>
                        <div class="my-alert__unique4">
                            <label for="password">New Password</label>
                        </div>
                        <div class="my-alert__unique5">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autocomplete="current-password"
                            />
                        </div>
                    </div>
                    <div>
                        <div class="my-alert__unique4">
                            <label for="password">Repeat Password</label>
                        </div>
                        <div class="my-alert__unique5">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autocomplete="current-password"
                            />
                        </div>
                    </div>
                    <div class="go-back">
                        <div>
                            <router-link to="/">
                                Go back to Login
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
div.go-back {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

div.go-back > div {
  font-size: var(--tw-font-size-sm);
  line-height: var(--tw-line-height-5);
}

div.go-back > div > a {
  font-weight: var(--tw-font-weight-medium);
  --tw-text-opacity: 1;
  color: rgb(var(--tw-color-indigo-600) / var(--tw-text-opacity));
  text-decoration: none;
}

div.go-back > div > a:hover {
  --tw-text-opacity: 1;
  color: rgb(var(--tw-color-indigo-500) / var(--tw-text-opacity));
}
</style>
