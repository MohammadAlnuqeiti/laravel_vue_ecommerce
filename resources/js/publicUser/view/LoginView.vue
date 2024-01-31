<template>
    <!-- Page Banner Section Start -->
    <div
        class="section page-banner-section"
        style="background-image: url(assets/images/page-banner.jpg)"
    >
        <div class="container">
            <!-- Page Banner Content End -->
            <div class="page-banner-content">
                <h2 class="title">Login</h2>

                <ul class="breadcrumb">
                    <li><a href="index.html">Home</a></li>
                    <li class="active">Login</li>
                </ul>
            </div>
            <!-- Page Banner Content End -->
        </div>
    </div>
    <!-- Page Banner Section End -->

    <!-- Login Section Start -->
    <div class="section section-padding mt-n1">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <!-- Login & Register Start -->
                    <div class="login-register-wrapper">
                        <h4 class="title">Login to Your Account</h4>
                        <form action="#">
                            <div class="single-form">
                                <input
                                    type="text"
                                    placeholder="Username or email *"
                                />
                            </div>
                            <div class="single-form">
                                <input type="password" placeholder="Password" />
                            </div>
                            <div class="single-form">
                                <input type="checkbox" id="remember" />
                                <label for="remember"
                                    ><span></span> Remember me</label
                                >
                            </div>
                            <div class="single-form">
                                <button class="btn btn-primary btn-hover-dark">
                                    Login
                                </button>
                            </div>
                        </form>
                        <p><a href="#">Lost your password?</a></p>
                        <p>
                            No account?
                            <a href="register.html">Create one here.</a>
                        </p>
                    </div>
                    <!-- Login & Register End -->
                </div>
            </div>
        </div>
    </div>
    <!-- Login Section End -->
</template>
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
