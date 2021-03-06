<!DOCTYPE HTML>

<html>
	<head>
		<title></title>
		<meta charset="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no, minimal-ui"/>
    <meta name="apple-mobile-web-app-capable" content="yes"/>
    <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
    <meta name="application-name" content="sonnendach"/>
    
    <!-- Application icons -->
    <meta name="msapplication-TileImage" content="images/touch-icon-bund-144x144.png"/>
    <meta name="msapplication-TileColor" content="#ffffff"/>
    <meta name="msapplication-square70x70logo" content="images/touch-icon-bund-70x70.png"/>
    <meta name="msapplication-square150x150logo" content="images/touch-icon-bund-150x150.png"/>
    <meta name="msapplication-square310x310logo" content="images/touch-icon-bund-310x310.png"/>
    <link rel="apple-touch-icon" sizes="76x76" href="images/touch-icon-bund-76x76.png"/>
    <link rel="apple-touch-icon" sizes="120x120" href="images/touch-icon-bund-120x120.png"/>
    <link rel="apple-touch-icon" sizes="152x152" href="images/touch-icon-bund-152x152.png"/>
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <link rel="icon" href="favicon.ico" type="image/x-icon">

    <meta name="description" content="Der Windatlas Schweiz gibt Auskunft über Jahresmittel der modellierten Windgeschwindigkeit und Windrichtung auf fünf Höhenstufen über Grund: 50, 75, 100, 125 oder 150m.">
    <meta name="keywords" content="Windatlas, Windatlas Schweiz, Windgeschwindigkeit, Windrichtung, Windrose, Weibull, Weibullverteilung, Windatlas Switzerland, Energy, Geoinformation, Map, Karte, Erneuerbare Energie, Windenergie, Windenergy, renewable energy, BFE, GIS, Geodata">
    <meta name="news_keywords" content="Windatlas, Windatlas Schweiz, Windgeschwindigkeit, Windrichtung, Windrose, Weibull, Weibullverteilung, Windatlas Switzerland, Energy, Geoinformation, Map, Karte, Erneuerbare Energie, Windenergie, Windenergy, renewable energy, BFE, GIS, Geodata">
    <meta name="author" content="Bundesamt für Energie BFE">

    <meta property="og:site_name" content="Windatlas Schweiz">
    <meta property="og:title" content="Der Windatlas Schweiz gibt Auskunft über Jahresmittel der modellierten Windgeschwindigkeit und Windrichtung auf fünf Höhenstufen über Grund: 50, 75, 100, 125 oder 150m.">
    <meta property="og:description" content="Der Windatlas Schweiz gibt Auskunft über Jahresmittel der modellierten Windgeschwindigkeit und Windrichtung auf fünf Höhenstufen über Grund: 50, 75, 100, 125 oder 150m.">
    <meta property="og:type" content="WebApplication">
    <meta property="og:url" content="http://www.windatlas.ch">
    <meta property="og:image" content="http://www.bfe-gis.admin.ch/storymaps/EE_Windatlas/images/appSonnendachCH.png">
    <meta property="og:locale" content="de_CH" />

    <meta name="twitter:card" content="summary">
    <meta name="twitter:site" content="@EnergieSchweiz">
		<meta name="twitter:creator" content="@EnergieSchweiz">
    <meta name="twitter:title" content="Windatlas.ch">
    <meta name="twitter:description" content="Der Windatlas Schweiz gibt Auskunft über Jahresmittel der modellierten Windgeschwindigkeit und Windrichtung auf fünf Höhenstufen über Grund: 50, 75, 100, 125 oder 150m.">
    <meta name="twitter:image" content="http://www.bfe-gis.admin.ch/storymaps/EE_Windatlas/images/appSonnendachCH.png">
    <meta name="twitter:url" content="http://www.windatlas.ch">


    <!-- CSS -->
    
    <link rel="stylesheet" href="assets/css/tooltip.css"/>
    <!--[if lte IE 8]><script src="assets/js/ie/html5shiv.js"></script><![endif]-->
		<link rel="stylesheet" href="assets/css/main.css" />
		<!--[if lte IE 8]><link rel="stylesheet" href="assets/css/ie8.css" /><![endif]-->
		<!--[if lte IE 9]><link rel="stylesheet" href="assets/css/ie9.css" /><![endif]-->
    <link rel="stylesheet" href="assets/css/map.css"/>



	</head>

	<body>
	  
    <!-- Hidden links to navigate smoothly in the page using scrolly plugin -->
    <div style="display: none;">
      <a id="goToEig" href="#eig" class="scrolly"></a>
      <a id="goToHeader" href="#header" class="scrolly"></a>
      <a id="goToOne" href="#one" class="scrolly"></a>
      <a id="goToTwo" href="#two" class="scrolly"></a>
      <a id="goToThree" href="#three" class="scrolly"></a>
      <a id="goToFour" href="#four" class="scrolly"></a>
      <a id="goToFive" href="#five" class="scrolly"></a>
      <a id="goToSix" href="#six" class="scrolly"></a>
      <a id="goToSeven" href="#seven" class="scrolly"></a>
      <a id="goToEight" href="#eight" class="scrolly"></a>
      <a id="goToNine" href="#nine" class="scrolly"></a>
      <a id="goToTen" href="#ten" class="scrolly"></a>
      <a id="goToEleven" href="#eleven" class="scrolly"></a>
    </div>

	  <!-- eid -->
    <section id="eig" class="main style1 special" style="padding: 0 !important">
      <div class="container">
        <div class="100%">
          <div class="logo"></div>
          <div class="amts">
            <div class="amt trn">bfe</div>
            <div class="amt-abbr">
              <span class="trn">bfeAbbr</span>
            </div>
          </div>
          <div id="lang">
            <a href="?lang=de" class="langde">D</a>|<a href="?lang=fr" class="langfr">F</a>|<a href="?lang=it" class="langfr">I</a>|<a href="?lang=en" class="langfr">E</a>
          </div>
        </div>
      </div>
    </section>	
	
	  <!-- red -->
    <section id="red" style="background-color: red; height: 5px; line-height: 5px;">
      <div class="container">
        <div class="row 150%">
          <div class="12u 12u$(medium)">
          </div>
        </div>
      </div>
    </section>

    <!-- One: Graph -->
      <section id="one" class="main style1 special" style="padding-bottom: 0px;">
        <div class="container">
          <header class="major" id="titelHeader">
            <h2><span class="trn">storymapTitel</span></h2>
          </header>
          <p style="padding-bottom: 0px;"><span class="trn">storymapText</span>&nbsp;
            <a href="#five" class="scrolly icon major fa-info-circle" style="font-size:0.2em;cursor: pointer;"></a></p>
        </div>
      </section>

    <!-- Two: Map -->
      <section id="two" class="main style1 special" style="padding-top: 0px; padding-bottom: 0px;">
        <div id="search-container">
          <input class="typeahead" id="search" type="text" data-provide="typeahead" placeholder="Ort suchen / Rechercher un lieu">
        </div><br>

        <div class="container" style="width: 90%;">
          <div id="map" style="width: 100%; height: 600px;"></div>
        </div>

        <img src="images/legende2.png">
        <img class="smallscreen" src="images/legende1.png">

      </section>

    <!-- Four: Kataloge -->
      <section id="four" class="main style1 special">
        <div class="container">

          <div class="row 150%">
          
            <div class="6u 12u$(small)">
              <div><strong><span class="trn">hoehenstufen</span></strong></div>
              <div id="mycatalog2"></div>
            </div>

            <div class="6u 12u$(small)">
              <div><strong><span class="trn">zusatzinfo</span></strong></strong></div>
              <div id="mycatalog"></div>
            </div>
          
          </div>

        </div>
      </section>
          
    <!-- Five: Text -->
      <section id="five" class="main style1 special">
        <div class="container">
          <p><span class="trn">storymapText2</span></p>
        </div>
      </section>

		<!-- Footer -->
    <section id="footer">
      <ul class="icons">
        <li><a id="socialTwitter" href="" class="icon alt fa-twitter" target="_blank"><span class="label">Twitter</span></a></li>
        <li><a id="socialFB" href="" class="icon alt fa-facebook" target="_blank"><span class="label">Facebook</span></a></li>
        <li><a id="socialMail" href="" class="icon alt fa-envelope"><span class="label">Email</span></a></li>
      </ul>
      <ul class="copyright">
        <li><span class="trn">copyrightMain</span></li>
        <li>v 1.0.1</li>
        <li><span class="trn">impressumAnalyse</span></li>
        <li><span class="trn">contact</span></li>
      </ul>
    </section>

		<!-- Scripts -->

<?php

$lang = 'de';
if (isset($_GET['lang'])) {
  $lang = $_GET['lang'];
}

echo '<script src="//api3.geo.admin.ch/loader.js?lang=' . $lang . '"></script>';

?>

    <script src="assets/js/jquery-2.1.4.min.js"></script>
    <script src="assets/js/jquery.xdomainrequest.1.0.2.min.js"></script>
    <script src="assets/js/jquery.placeholder.2.0.7.min.js"></script>
    <!-- <script src="assets/js/typeahead.bundle.0.11.1.js"></script> -->
    <script src='assets/js/typeahead.bundle.0.10.4.js'></script>
    <script src="assets/js/jquery.translate.0.9.1.js"></script>
	  <script src="assets/js/jquery.scrolly.min.js"></script>

		<script src="assets/js/skel.min.js"></script>
		<script src="assets/js/util.js"></script>
		<!--[if lte IE 8]><script src="assets/js/ie/respond.min.js"></script><![endif]-->
		<script src="assets/js/main.js"></script>
    <script src="assets/js/translations.js"></script>
    <script src="assets/js/permalink.js"></script>
    <script src="assets/js/init.js"></script>
    <script src="assets/js/map.js"></script>

    <script>

      $(document).ready(function() {
        init(false);
      });

      //var doResize = function(evt) {
      //  init(false);
      //};

      //window.addEventListener('resize', doResize);

    </script>    

	</body>
</html>
