<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel vue ecommerce</title>

        <meta name="robots" content="noindex, follow" />
        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />

        <!-- Icon Font CSS -->
        <link rel="stylesheet" href="../assets/css/plugins/pe-icon-7-stroke.css">
        <link rel="stylesheet" href="../assets/css/plugins/font-awesome.min.css">

        {{-- <link rel="stylesheet" href="{{asset('css/app.css')}}"> --}}
        @vite('resources/css/app.css')

    </head>
    <body>
        <div id="app"></div>

        @vite('resources/js/app.js')
        @vite('public/assets/js/main.js')

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
        <script src="../assets/js/plugins.min.js"></script>

        {{-- <script src="{{asset('assets/js/plugins.min.js')}}"></script> --}}

        <!-- Main JS -->
        {{-- <script src="../public/assets/js/main.js"></script> --}}

        {{-- <script src="{{asset('main.js')}}"></script> --}}
        {{-- <script src="{{asset('js/app,js')}}"></script> --}}
    </body>
</html>
