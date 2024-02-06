<template>
    <!-- Slider Section Start -->
    <div class="section slider-section-02">
        <div class="slider-active">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <!-- Single Slider Start  -->
                    <div
                        class="single-slider slider-02 swiper-slide animation-style-01"
                        style="
                            background-image: url('../../assets/images/HOME.png');
                        "
                    >
                        <div class="container">
                            <!-- Slider Content Start -->
                            <div class="slider-content-02 text-center">
                                <h2 class="title">Stylish Kitchen Furniture</h2>
                                <p>
                                    Unique Furniture Style Design for Your
                                    Family and Welcome <br />
                                    Our Shop, 30% Offer All Stylish Kitchen
                                    Furniture
                                </p>
                                <a
                                    href="shop-grid-4-column.html"
                                    class="btn btn-primary btn-hover-dark"
                                    >purchase now</a
                                >
                            </div>
                            <!-- Slider Content End -->
                        </div>
                    </div>
                    <!-- Single Slider End  -->

                    <!-- Single Slider Start  -->
                    <div
                        class="single-slider slider-02 swiper-slide animation-style-01"
                        style="
                            background-image: url(assets/images/slider/slider-02.jpg);
                        "
                    >
                        <div class="container">
                            <!-- Slider Content Start -->
                            <div class="slider-content-02 text-center">
                                <h2 class="title">Stylish Kitchen Furniture</h2>
                                <p>
                                    Unique Furniture Style Design for Your
                                    Family and Welcome <br />
                                    Our Shop, 30% Offer All Stylish Kitchen
                                    Furniture
                                </p>
                                <a
                                    href="shop-grid-4-column.html"
                                    class="btn btn-primary btn-hover-dark"
                                    >purchase now</a
                                >
                            </div>
                            <!-- Slider Content End -->
                        </div>
                    </div>
                    <!-- Single Slider End  -->

                    <!-- Add Arrows -->
                    <div class="swiper-button-next">Next</div>
                    <div class="swiper-button-prev">Prev</div>
                </div>
            </div>
        </div>
    </div>
    <!-- Slider Section End -->

    <!-- Benefit Section Start -->
    <div class="section section-padding-02 mt-n6">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-6">
                    <!-- Single Benefit Start -->
                    <div class="single-benefit">
                        <img
                            src="../../../../public/assets/images/icon/icon-1.png"
                            alt="Icon"
                        />
                        <h3 class="title">Free Shipping</h3>
                        <p>
                            Get 10% cash back, free shipping, free returns, and
                            more at 1000+ top retailers!
                        </p>
                    </div>
                    <!-- Single Benefit End -->
                </div>
                <div class="col-lg-4 col-md-6">
                    <!-- Single Benefit Start -->
                    <div class="single-benefit">
                        <img
                            src="../../../../public/assets/images/icon/icon-2.png"
                            alt="Icon"
                        />
                        <h3 class="title">Safe Payment</h3>
                        <p>
                            Get 10% cash back, free shipping, free returns, and
                            more at 1000+ top retailers!
                        </p>
                    </div>
                    <!-- Single Benefit End -->
                </div>
                <div class="col-lg-4 col-md-6">
                    <!-- Single Benefit Start -->
                    <div class="single-benefit">
                        <img
                            src="../../../../public/assets/images/icon/icon-3.png"
                            alt="Icon"
                        />
                        <h3 class="title">Online Support</h3>
                        <p>
                            Get 10% cash back, free shipping, free returns, and
                            more at 1000+ top retailers!
                        </p>
                    </div>
                    <!-- Single Benefit End -->
                </div>
            </div>
        </div>
    </div>
    <!-- Benefit Section End -->

    <!-- New Product Section Start -->
    <div class="section section-padding-02 mt-n2 mb-5">
        <div class="container">
            <!-- Section Title Start -->
            <div class="section-title-02 text-center">
                <h2 class="title">New Products</h2>
            </div>
            <!-- Section Title End -->

            <!-- Product Wrapper 02 Start -->
            <div class="product-wrapper-02">
                <!-- Product Menu Start -->
                <div class="product-menu">
                    <ul class="nav justify-content-center">
                        <li>
                            <button
                                class="active"
                                data-bs-toggle="tab"
                                data-bs-target="#tab1"
                            >
                                All
                            </button>
                        </li>
                        <li v-for="category in categories" :key="category.id">
                            <button
                                data-bs-toggle="tab"
                                :data-bs-target="'#tab2_' + category.id"
                            >
                                {{ category.title }}
                            </button>
                        </li>
                    </ul>
                </div>
                <!-- Product Menu End -->

                <!-- Product Tabs Content Start -->
                <div class="product-tabs-content">
                    <div class="tab-content">
                        <div class="tab-pane fade show active" id="tab1">
                            <div class="row">
                                <div
                                    class="col-lg-3 col-sm-6"
                                    v-for="product in products"
                                    :key="product.id"
                                >
                                    <!-- Single Product Start -->
                                    <div class="single-product-02">
                                        <div class="product-images">
                                            <RouterLink :to="{name:'productDetails' , params: { id: product.id }}"
                                                ><img
                                                    :src="product.image"
                                                    :alt="product.title"
                                            /></RouterLink>

                                            <ul class="product-meta">
                                                <li>
                                                    <RouterLink
                                                        class="action"
                                                        :to="{name:'productDetails' , params: { id: product.id }}"
                                                        ><i
                                                            class="pe-7s-search"
                                                        ></i
                                                    ></RouterLink>
                                                </li>
                                                <li>
                                                    <button class="action" href="#" title="Add to cart" @click="store.dispatch('addToCart', product)"
                                                        ><i
                                                            class="pe-7s-shopbag"
                                                        ></i
                                                    ></button>
                                                </li>
                                                <li>
                                                    <a class="action" href="#"
                                                        ><i
                                                            class="pe-7s-like"
                                                        ></i
                                                    ></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="product-content">
                                            <h4 class="title">
                                                <RouterLink
                                                :to="{name:'productDetails' , params: { id: product.id }}"
                                                    >{{ product.title }}</RouterLink
                                                >
                                            </h4>
                                            <div class="price">
                                                <span class="sale-price"
                                                    >${{ product.price }}</span
                                                >
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Single Product End -->
                                </div>
                            </div>
                        </div>
                        <div
                            class="tab-pane fade"
                            v-for="category in categories"
                            :key="category.id"
                            :id="'tab2_' + category.id"
                        >
                            <div class="row">
                                <template
                                    v-for="product in products"
                                    :key="product.id"
                                >
                                    <div
                                        class="col-lg-3 col-sm-6"
                                        v-if="
                                            product.category_id === category.id
                                        "
                                    >
                                        <!-- Single Product Start -->
                                        <div class="single-product-02">
                                            <div class="product-images">
                                                <RouterLink :to="{name:'productDetails' , params: { id: product.id }}"
                                                    ><img
                                                        :src="product.image"
                                                        :alt="product.title"
                                                /></RouterLink>

                                                <ul class="product-meta">
                                                    <li>
                                                        <RouterLink
                                                            class="action"
                                                            :to="{name:'productDetails' , params: { id: product.id }}"
                                                            ><i
                                                                class="pe-7s-search"
                                                            ></i
                                                        ></RouterLink>
                                                    </li>
                                                    <li>
                                                        <button
                                                            class="action"
                                                            title="Add to cart" @click="store.dispatch('addToCart', product)"
                                                            ><i
                                                                class="pe-7s-shopbag"
                                                            ></i
                                                        ></button>
                                                    </li>
                                                    <li>
                                                        <a
                                                            class="action"
                                                            href="#"
                                                            ><i
                                                                class="pe-7s-like"
                                                            ></i
                                                        ></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="product-content">
                                                <h4 class="title">
                                                    <RouterLink
                                                    :to="{name:'productDetails' , params: { id: product.id }}"
                                                        >{{ product.title }}</RouterLink
                                                    >
                                                </h4>
                                                <div class="price">
                                                    <span class="sale-price"
                                                        >${{
                                                            product.price
                                                        }}</span
                                                    >
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Single Product End -->
                                    </div>
                                </template>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Product Tabs Content End -->
            </div>
            <!-- Product Wrapper 02 End -->
        </div>
    </div>
    <!-- New Product Section End -->
</template>

<script setup>
import { useRouter } from "vue-router";
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";

const router = useRouter();
const store = useStore();
const products = computed(
    () => store.state.ProductUserModules.productsHome.data
);
const categories = computed(
    () => store.state.ProductUserModules.categories.data
);

onMounted(() => {
    // store.dispatch("moveCartItemsIntoDb");
    getProducts();
});

const getProducts = () => {
    store.dispatch("getProductsHome");
};
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
