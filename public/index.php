<?php
  $TEMPLATE_PATH = parse_url(get_template_directory_uri(), PHP_URL_PATH);
?>
<!DOCTYPE html>
<html>
<?php 
$Name = "";
$Greeting = "";
$Date = date("l");
?>

<head>
<meta charset="utf-8" />
    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Wellborn Demo"
    />
    <!-- <script type="text/javascript">var userName = <?php echo ($userName); ?>;</script> -->
    <link rel="manifest" href="<?php echo $TEMPLATE_PATH; ?>/manifest.json" />
    <title>WCI</title>
</head>
    <body>
        <?php
            $url="http://api.openweathermap.org/data/2.5/forecast?q=Birmingham,usl&APPID=5099c5feb579c7a17b030de0d009282f&units=imperial";
            $json=file_get_contents($url);
            $data=json_decode($json);
            $City= "Ashland, Alabama";
        echo "<div id='topHeader'>";
            echo '<div>', $City, '</div>';
            echo '<div><strong>Current:</strong> ', $data->list[0]->main->temp, '&deg; F</div>';
            ?>

        <div id="welcomeBox">
    <?php
echo 
date("l") . "<br>";
$dt = new DateTime("now", new DateTimeZone('America/Chicago'));
echo $dt->format('jS \of F Y, H:i:s A');
echo "</div>";
?>
</div>
<noscript>
        You need to enable JavaScript to run this app.
    </noscript>

    <div id="root">

</div>
</body>
<footer>
</footer>
    </html>
