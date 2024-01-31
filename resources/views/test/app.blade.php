<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta name="robots" content="noindex, follow" />
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- Favicon -->
        <link rel="shortcut icon" type="image/x-icon" href="../assets/images/favicon.png">
        <title>Laravel vue ecommerce</title>

        <!-- CSS ============================================ -->

        <!-- Icon Font CSS -->
        <link rel="stylesheet" href="../assets/css/plugins/pe-icon-7-stroke.css">
        <link rel="stylesheet" href="../assets/css/plugins/font-awesome.min.css">

        <!-- Plugins CSS -->
        {{-- <link rel="stylesheet" href="../assets/css/plugins/animate.min.css">
        <link rel="stylesheet" href="../assets/css/plugins/swiper-bundle.min.css">
        <link rel="stylesheet" href="../assets/css/plugins/odometer.min.css">
        <link rel="stylesheet" href="../assets/css/plugins/nice-select.css">
        <link rel="stylesheet" href="../assets/css/plugins/select2.min.css">
        <link rel="stylesheet" href="../assets/css/plugins/ion.rangeSlider.min.css"> --}}

        <!-- Main Style CSS -->
        {{-- <link rel="stylesheet" href="../assets/css/style.css"> --}}


        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />

        {{-- <link rel="stylesheet" href="{{asset('css/app.css')}}"> --}}
        @vite('resources/css/app.css')

    </head>
    <body class="antialiased">
        <div id="appqq"></div>

        @vite('resources/js/app.js')

        {{-- <script src="{{asset('js/app,js')}}"></script> --}}
        <!-- JS
            ============================================ -->

        <!-- Modernizer & jQuery JS -->
        <script src="../assets/js/vendor/modernizr-3.11.2.min.js"></script>
        <script src="../assets/js/vendor/jquery-3.5.1.min.js"></script>

        <!-- Bootstrap JS -->
        <script src="../assets/js/plugins/popper.min.js"></script>
        <script src="../assets/js/plugins/bootstrap.min.js"></script>

        <!-- Plugins JS -->
        <script src="../assets/js/plugins/swiper-bundle.min.js"></script>
        <script src="../assets/js/plugins/ajax-contact.js"></script>
        <script src="../assets/js/plugins/appear.js"></script>
        <script src="../assets/js/plugins/odometer.min.js"></script>
        <script src="../assets/js/plugins/jquery.nice-select.min.js"></script>
        <script src="../assets/js/plugins/select2.min.js"></script>
        <script src="../assets/js/plugins/ion.rangeSlider.min.js"></script>
        <script src="../assets/js/plugins/jquery.zoom.min.js"></script>

        <!--====== Use the minified version files listed below for better performance and remove the files listed above ======-->
        <!-- <script src="../assets/js/plugins.min.js"></script> -->


        <!-- Main JS -->
        <script src="../assets/js/main.js"></script>
    </body>
</html>
