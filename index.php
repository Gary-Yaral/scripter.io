<?php
    require_once "config.php";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link data-id="app" rel="stylesheet" href="src/index.css">
    <title>Index | App</title>
</head>
<body>
    <main id ="app" class="app"></main>
    <!-- Call your views from here -->
    <?php require "src/views/index/index.php" ?>
</body>
</html>