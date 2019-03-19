<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Subscribers App</title>
    </head>
    <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="app"></div>

        <script src="/js/manifest.js"></script>
        <script src="/js/vendor.js"></script>
        <script src="/js/app.js?v=<?php echo uniqid(); ?>"></script>
    </body>
</html>
