<template>
    <div style="margin: 100px;">
        <button @click="setCookie">Set Cookie</button>
        <button @click="getCookie">Get Cookie</button>
        <button @click="removeCookie">Remove Cookie</button>
    </div>
</template>

<script>
import Cookies from "js-cookie";

export default {
    methods: {
        setCookie() {
            // Set a cookie with key 'myCookie' and value 'exampleValue'
            Cookies.set("myCookie", "exampleValue");
        },
        getCookie() {
            // Retrieve the value of the cookie with key 'myCookie'
            const value = Cookies.get("myCookie");
            console.log(value);
        },
        removeCookie() {
            // Remove the cookie with key 'myCookie'
            Cookies.remove("myCookie");
        },
    },
};
</script>
