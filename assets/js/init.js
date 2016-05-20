/**
 * Initialize the element of the app: map, search box, localizaton
 */
var init = function(nointeraction) {

  window.API3_URL = 'https://api3.geo.admin.ch';
  
  var langs = ['de', 'fr', 'it', 'en'];
  var headers = ['1', '0'];
  var body = $(document.body);
  var permalink = addPermalink();
  var markerElt = $('<div id="mymaker" class="marker ga-crosshair"></div>');

  // Load the language
  var lang = (langs.indexOf(permalink.lang) != -1) ? permalink.lang : langs[0]; 
  window.translator = $('html').translate({
    lang: lang,
    t: sdTranslations // Object defined in tranlations.js
  });

  // Load header
  var header = (headers.indexOf(permalink.header) != -1) ? permalink.header : headers[0];

  if (header == '0') {
    $('#eig').addClass('hide');
    $('#red').addClass('hide');
    $('#titelHeader').addClass('hide');
  }  


  if ($.contains(document.body, document.getElementById("socialTwitter"))) {
    document.getElementById("socialTwitter").href = 
    'https://twitter.com/intent/tweet?text=' + translator.get('pagetitle').replace(" ","%20") + '&url=' + translator.get('domain') + '&related=mhertach,BFEenergeia,EnergieSchweiz&hashtags=windenergie&via=EnergieSchweiz';
  }

  if ($.contains(document.body, document.getElementById("socialFB"))) {
    document.getElementById("socialFB").href = 
    'http://www.facebook.com/sharer.php?u=' + translator.get('domain').replace(" ","%20");
  }

  if ($.contains(document.body, document.getElementById("socialMail"))) {
    document.getElementById("socialMail").href = 
    'mailto:?subject=' + translator.get('pagetitle') + ' ' + translator.get('domain');
  }

  $(document).ready(function ()
  {
      document.title = translator.get('pagetitle');
  });
  
}