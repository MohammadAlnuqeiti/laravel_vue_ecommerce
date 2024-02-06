<template>
    <!-- Header Start  -->
    <div class="header-area header-white header-sticky d-none d-lg-block">
        <div class="container position-relative">
            <div class="row align-items-center">
                <div class="col-lg-3">
                    <!-- Header Logo Start -->
                    <div class="header-logo">
                        <router-link to="/"
                            ><img
                                src="../../../../public/assets/images/logo.png"
                                alt="Logo"
                        /></router-link>
                    </div>
                    <!-- Header Logo End -->
                </div>
                <div class="col-lg-6">
                    <div class="header-menu">
                        <ul class="nav-menu">
                            <li>
                                <router-link to="/">Home</router-link>
                            </li>
                            <li>
                                <router-link to="/shop">Shop</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3">
                    <!-- Header Meta Start -->
                    <div class="header-meta">
                        <div class="dropdown">
                            <a
                                class="action"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                            >
                                <i class="pe-7s-search"></i>
                            </a>

                            <div class="dropdown-menu dropdown-search">
                                <!-- Header Search Start -->
                                <div class="header-search">
                                    <form action="#">
                                        <input
                                            type="text"
                                            placeholder="Enter your search key ... "
                                        />
                                        <button>
                                            <i class="pe-7s-search"></i>
                                        </button>
                                    </form>
                                </div>
                                <!-- Header Search End -->
                            </div>
                        </div>

                        <div class="dropdown">
                            <a
                                class="action"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                ><i class="pe-7s-user"></i
                            ></a>

                            <ul class="dropdown-menu dropdown-profile">
                                <li v-if="token">
                                    <router-link :to="{ name: 'profile' }"
                                        >My Account</router-link
                                    >
                                </li>
                                <li v-if="token">
                                    <a @click="logout" style="cursor: pointer"
                                        >Log out</a
                                    >
                                </li>
                                <li v-if="!token">
                                    <router-link to="login">Log In</router-link>
                                </li>
                                <li v-if="!token">
                                    <router-link to="signup"
                                        >Sign In</router-link
                                    >
                                </li>
                            </ul>
                        </div>

                        <div class="dropdown">
                            <a
                                class="action"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                            >
                                <i class="pe-7s-shopbag"></i>
                                <span class="number">{{
                                    store.state.CartModules.cart.count
                                }}</span>
                            </a>

                            <div class="dropdown-menu dropdown-cart">
                                <div class="cart-content" id="cart-content">
                                    <ul>
                                        <li>
                                            <!-- Single Cart Item Start -->
                                            <div class="single-cart-item">
                                                <div class="cart-thumb">
                                                    <img
                                                        src="../../../../public/assets/images/cart/cart-1.jpg"
                                                        alt="Cart"
                                                    />
                                                    <span
                                                        class="product-quantity"
                                                        >1x</span
                                                    >
                                                </div>
                                                <div class="cart-item-content">
                                                    <h6 class="product-name">
                                                        High quality vase bottle
                                                    </h6>
                                                    <span class="product-price"
                                                        >$19.12</span
                                                    >
                                                    <div
                                                        class="attributes-content"
                                                    >
                                                        <span
                                                            ><strong
                                                                >Color:</strong
                                                            >
                                                            White
                                                        </span>
                                                    </div>
                                                    <a
                                                        class="cart-remove"
                                                        href="#"
                                                        ><i
                                                            class="las la-times"
                                                        ></i
                                                    ></a>
                                                </div>
                                            </div>
                                            <!-- Single Cart Item End -->
                                        </li>
                                        <li>
                                            <!-- Single Cart Item Start -->
                                            <div class="single-cart-item">
                                                <div class="cart-thumb">
                                                    <img
                                                        src="../../../../public/assets/images/cart/cart-2.jpg"
                                                        alt="Cart"
                                                    />
                                                    <span
                                                        class="product-quantity"
                                                        >1x</span
                                                    >
                                                </div>
                                                <div class="cart-item-content">
                                                    <h6 class="product-name">
                                                        Living & Bedroom Chair
                                                    </h6>
                                                    <span class="product-price"
                                                        >$19.12</span
                                                    >
                                                    <div
                                                        class="attributes-content"
                                                    >
                                                        <span
                                                            ><strong
                                                                >Color:</strong
                                                            >
                                                            White
                                                        </span>
                                                    </div>
                                                    <a
                                                        class="cart-remove"
                                                        href="#"
                                                        ><i
                                                            class="las la-times"
                                                        ></i
                                                    ></a>
                                                </div>
                                            </div>
                                            <!-- Single Cart Item End -->
                                        </li>
                                        <li>
                                            <!-- Single Cart Item Start -->
                                            <div class="single-cart-item">
                                                <div class="cart-thumb">
                                                    <img
                                                        src="../../../../public/assets/images/cart/cart-3.jpg"
                                                        alt="Cart"
                                                    />
                                                    <span
                                                        class="product-quantity"
                                                        >1x</span
                                                    >
                                                </div>
                                                <div class="cart-item-content">
                                                    <h6 class="product-name">
                                                        Herman Arm Grey Chair
                                                    </h6>
                                                    <span class="product-price"
                                                        >$19.12</span
                                                    >
                                                    <div
                                                        class="attributes-content"
                                                    >
                                                        <span
                                                            ><strong
                                                                >Color:</strong
                                                            >
                                                            White
                                                        </span>
                                                    </div>
                                                    <a
                                                        class="cart-remove"
                                                        href="#"
                                                        ><i
                                                            class="las la-times"
                                                        ></i
                                                    ></a>
                                                </div>
                                            </div>
                                            <!-- Single Cart Item End -->
                                        </li>
                                    </ul>
                                </div>

                                <div class="cart-price">
                                    <div class="cart-subtotals">
                                        <div class="price-inline">
                                            <span class="label">Subtotal</span>
                                            <span class="value">$42.70</span>
                                        </div>
                                        <div class="price-inline">
                                            <span class="label">Shipping</span>
                                            <span class="value">$7.00</span>
                                        </div>
                                        <div class="price-inline">
                                            <span class="label">Taxes</span>
                                            <span class="value">$0.00</span>
                                        </div>
                                    </div>
                                    <div class="cart-total">
                                        <div class="price-inline">
                                            <span class="label">Total</span>
                                            <span class="value">$49.70</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="checkout-btn">
                                    <router-link
                                        to="/cart"
                                        class="btn btn-dark btn-hover-primary d-block"
                                        >Go To Cart</router-link
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Header Meta End -->
                </div>
            </div>
        </div>
    </div>
    <!-- Header End -->

    <!-- Header Mobile Start -->
    <div class="header-mobile section d-lg-none">
        <!-- Header Mobile top Start -->
        <div class="header-mobile-top header-sticky">
            <div class="container">
                <div class="row row-cols-3 gx-2 align-items-center">
                    <div class="col">
                        <!-- Header Toggle Start -->
                        <div class="header-toggle">
                            <button class="mobile-menu-open">
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                        </div>
                        <!-- Header Toggle End -->
                    </div>
                    <div class="col">
                        <!-- Header Logo Start -->
                        <div class="header-logo text-center">
                            <router-link to="/"
                                ><img
                                    src="../../../../public/assets/images/logo.png"
                                    alt="Logo"
                            /></router-link>
                        </div>
                        <!-- Header Logo End -->
                    </div>
                    <div class="col">
                        <!-- Header Action Start -->
                        <div class="header-meta">
                            <div class="dropdown">
                                <a
                                    class="action"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    ><i class="pe-7s-user"></i
                                ></a>

                                <ul class="dropdown-menu dropdown-profile">
                                    <li v-if="token">
                                        <router-link :to="{ name: 'profile' }"
                                            >My Account</router-link
                                        >
                                    </li>
                                    <li v-if="token">
                                        <a
                                            @click="logout"
                                            style="cursor: pointer"
                                            >Log out</a
                                        >
                                    </li>
                                    <li v-if="!token">
                                        <router-link to="login"
                                            >Log In</router-link
                                        >
                                    </li>
                                    <li v-if="!token">
                                        <router-link to="signup"
                                            >Sign In</router-link
                                        >
                                    </li>
                                </ul>
                            </div>
                            <router-link class="action" to="/cart">
                                <i class="pe-7s-shopbag"></i>
                                <span class="number">3</span>
                            </router-link>
                        </div>
                        <!-- Header Action End -->
                    </div>
                </div>
            </div>
        </div>
        <!-- Header Mobile top End -->

        <!-- Header Mobile Bottom End -->
        <div class="header-mobile-bottom">
            <div class="container">
                <!-- Header Search Start -->
                <div class="header-search">
                    <form action="#">
                        <input
                            type="text"
                            placeholder="Enter your search key ... "
                        />
                        <button><i class="pe-7s-search"></i></button>
                    </form>
                </div>
                <!-- Header Search End -->
            </div>
        </div>
        <!-- Header Mobile Bottom End -->
    </div>
    <!-- Header Mobile End -->

    <!-- off Canvas Start -->
    <div class="off-canvas-box">
        <!-- Canvas Action Start -->
        <div class="canvas-action">
            <a class="action" href="compare.html"
                ><i class="icon-sliders"></i> Compare
                <span class="action-num">(3)</span></a
            >
            <a class="action" href="wishlist.html"
                ><i class="icon-heart"></i> Wishlist
                <span class="action-num">(3)</span></a
            >
        </div>
        <!-- Canvas Action end -->

        <!-- Canvas Close bar Start -->
        <div class="canvas-close-bar">
            <span>Menu</span>
            <a class="menu-close" href="javascript:;"
                ><i class="pe-7s-angle-left"></i
            ></a>
        </div>
        <!-- Canvas Close bar End -->

        <!-- Canvas Menu Start -->
        <div class="canvas-menu">
            <nav>
                <ul class="nav-menu">
                    <li>
                        <a href="#">Home</a>
                        <ul class="sub-menu">
                            <li><a href="index.html">Home 01</a></li>
                            <li><a href="index-2.html">Home 02</a></li>
                        </ul>
                    </li>
                    <li><a href="about.html">About</a></li>
                    <li>
                        <a href="#">Shop</a>
                        <ul class="mega-sub-menu">
                            <li>
                                <a href="#" class="menu-title">Shop Grid</a>

                                <ul class="menu-item">
                                    <li>
                                        <a href="shop-grid-3-column.html"
                                            >Shop Grid 3 Column</a
                                        >
                                    </li>
                                    <li>
                                        <a href="shop-grid-4-column.html"
                                            >Shop Grid 4 Column</a
                                        >
                                    </li>
                                    <li>
                                        <a href="shop-grid-left-sidebar.html"
                                            >Shop Grid Left Sidebar</a
                                        >
                                    </li>
                                    <li>
                                        <a href="shop-grid-right-sidebar.html"
                                            >Shop Grid Right Sidebar</a
                                        >
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" class="menu-title">Shop List</a>

                                <ul class="menu-item">
                                    <li>
                                        <a href="shop-list.html">Shop List</a>
                                    </li>
                                    <li>
                                        <a href="shop-list-left-sidebar.html"
                                            >Shop List Left Sidebar</a
                                        >
                                    </li>
                                    <li>
                                        <a href="shop-list-right-sidebar.html"
                                            >Shop List Right Sidebar</a
                                        >
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" class="menu-title">Shop Single</a>

                                <ul class="menu-item">
                                    <li>
                                        <a href="product-details.html"
                                            >Product Details</a
                                        >
                                    </li>
                                    <li>
                                        <a href="product-details-affiliate.html"
                                            >Product Details Affiliate</a
                                        >
                                    </li>
                                    <li>
                                        <a href="product-details-gallery.html"
                                            >Product Details Gallery</a
                                        >
                                    </li>
                                    <li>
                                        <a href="product-details-group.html"
                                            >Product Details Group</a
                                        >
                                    </li>
                                    <li>
                                        <a href="product-details-sticky.html"
                                            >Product Details Sticky</a
                                        >
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" class="menu-title">Page</a>

                                <ul class="menu-item">
                                    <li><a href="about.html">About Us</a></li>
                                    <li><a href="cart.html">Cart</a></li>
                                    <li>
                                        <a href="wishlist.html">Wishlist</a>
                                    </li>
                                    <li>
                                        <a href="checkout.html">Checkout</a>
                                    </li>
                                    <li>
                                        <a href="my-account.html">My Account</a>
                                    </li>
                                </ul>
                            </li>

                            <li class="manu-banner">
                                <a href="#"
                                    ><img
                                        src="../../../../public/assets/images/banner-menu-01.jpg"
                                        alt=""
                                /></a>
                            </li>
                            <li class="manu-banner">
                                <a href="#"
                                    ><img
                                        src="../../../../public/assets/images/banner-menu-02.jpg"
                                        alt=""
                                /></a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Pages </a>
                        <ul class="sub-menu">
                            <li><a href="about.html">About Us</a></li>
                            <li><a href="cart.html">Cart</a></li>
                            <li><a href="compare.html">Compare</a></li>
                            <li><a href="wishlist.html">Wishlist</a></li>
                            <li><a href="empty-cart.html">Empty Cart</a></li>
                            <li><a href="checkout.html">Checkout</a></li>
                            <li><a href="my-account.html">My Account</a></li>
                            <li><a href="login.html">Login</a></li>
                            <li><a href="register.html">Register</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Blog</a>
                        <ul class="sub-menu">
                            <li>
                                <a href="#">Blog Grid</a>
                                <ul class="sub-menu">
                                    <li>
                                        <a href="blog-grid.html">Blog Grid</a>
                                    </li>
                                    <li>
                                        <a href="blog-grid-left-sidebar.html"
                                            >Blog Grid Left Sidebar</a
                                        >
                                    </li>
                                    <li>
                                        <a href="blog-grid-right-sidebar.html"
                                            >Blog Grid Right Sidebar</a
                                        >
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">Blog List</a>
                                <ul class="sub-menu">
                                    <li>
                                        <a href="blog-list-left-sidebar.html"
                                            >Blog List Left Sidebar</a
                                        >
                                    </li>
                                    <li>
                                        <a href="blog-list-right-sidebar.html"
                                            >Blog List Right Sidebar</a
                                        >
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">Blog Details</a>
                                <ul class="sub-menu">
                                    <li>
                                        <a href="blog-details-left-sidebar.html"
                                            >Blog details Left Sidebar</a
                                        >
                                    </li>
                                    <li>
                                        <a
                                            href="blog-details-right-sidebar.html"
                                            >Blog details Right Sidebar</a
                                        >
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </nav>
        </div>
        <!-- Canvas Menu End -->
    </div>
    <!-- off Canvas End -->

    <div class="menu-overlay"></div>
</template>

<script setup>
import { computed  , onMounted} from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();
const token = computed(() => store.state.AuthModules.user.token);
function logout() {
    store
        .dispatch("logoutUser")
        .then(() => {
            router.push({ name: "home" });
        })
        .catch((err) => {
            console.log(err);
        });
}

onMounted(() => {
    store.commit("getCartItemsCount");
});
</script>

<style scoped>
@import url(../../../../public/assets/css/style.css);

/* Plugins CSS */
@import url(../../../../public/assets/css/plugins/animate.min.css);
@import url(../../../../public/assets/css/plugins/swiper-bundle.min.css);
@import url(../../../../public/assets/css/plugins/odometer.min.css);
@import url(../../../../public/assets/css/plugins/nice-select.css);
@import url(../../../../public/assets/css/plugins/select2.min.css);
@import url(../../../../public/assets/css/plugins/ion.rangeSlider.min.css);
</style>
