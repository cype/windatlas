var langsCat = ['de', 'fr', 'it', 'en'];
var permalinkCat = addPermalink();

// Load the language
var langCat = (langsCat.indexOf(permalinkCat.lang) != -1) ? permalinkCat.lang : langsCat[0];

var interactions = ol.interaction.defaults({
  DragRotate: false,
  DoubleClickZoom: false,
  DragPan: false,
  PinchRotate: false,
  PinchZoom: false,
  KeyboardPan: false,
  KeyboardZoom: false,
  MouseWheelZoom: false,
  DragZoom: false
});

// Create a GeoAdmin Map
var map = new ga.Map({
  
  // Define the div where the map is placed
  target: 'map',
  
  // Create a view
  view: new ol.View({
    
    // Define the default resolution
    // 10 means that one pixel is 10m width and height
    // List of resolution of the WMTS layers:
    // 650, 500, 250, 100, 50, 20, 10, 5, 2.5, 2, 1, 0.5, 0.25, 0.1
    resolution: 500,
    
    // Define a coordinate CH1903 (EPSG:21781) for the center of the view
    center: [660000, 185000],

    interactions: interactions

  })
});

map.getInteractions().forEach(function (interaction) {
  if(interaction instanceof ol.interaction.MouseWheelZoom) { interaction.setActive(false)}
});

// Create a background layer
var lyr1 = ga.layer.create('ch.swisstopo.pixelkarte-grau');

// Add the layers in the map
map.addLayer(lyr1);

//HOEHENSTUFEN

// Define content of catalog
var catalogConfig2 = [
  {layerBodId: 'ch.bfe.windenergie-geschwindigkeit_h150', labelDE: '150 m Höhe über Grund', labelFR: '150 m du sol', labelIT: '150 m sopra livello del terreno', labelEN: '150 metres above the ground', hoehenstufe: '150'},
  {layerBodId: 'ch.bfe.windenergie-geschwindigkeit_h125', labelDE: '125 m Höhe über Grund', labelFR: '125 m du sol', labelIT: '125 m sopra livello del terreno', labelEN: '125 metres above the ground', hoehenstufe: '125'},
  {layerBodId: 'ch.bfe.windenergie-geschwindigkeit_h100', labelDE: '100 m Höhe über Grund', labelFR: '100 m du sol', labelIT: '100 m sopra livello del terreno', labelEN: '100 metres above the ground', hoehenstufe: '100'},
  {layerBodId: 'ch.bfe.windenergie-geschwindigkeit_h75', labelDE: '75 m Höhe über Grund', labelFR: '75 m du sol', labelIT: '75 m sopra livello del terreno', labelEN: '75 metres above the ground', hoehenstufe: '75'},
  {layerBodId: 'ch.bfe.windenergie-geschwindigkeit_h50', labelDE: '50 m Höhe über Grund', labelFR: '50 m du sol', labelIT: '50 m sopra livello del terreno', labelEN: '50 metres above the ground', hoehenstufe: '50'}
];

// Create the layers
var layers2 = {};

catalogConfig2.forEach(function(item) {
  layers2[item.layerBodId] = ga.layer.create(item.layerBodId);
  layers2[item.layerBodId].setVisible(false);
  map.addLayer(layers2[item.layerBodId]);

  switch (langCat) {
      case "de":
        if (item.hoehenstufe == '125') {
        $('#mycatalog2').append(
          ('<div>' +
              '<input type="radio" name="myradiogroup" checked onclick="displayLayer2(\'{layerBodId}\', this.checked, ' + item.hoehenstufe + ')"/>{label}' +
          '</div>').replace(/{layerBodId}/g, item.layerBodId).replace('{label}', item.labelDE));
        } else {
        $('#mycatalog2').append(
          ('<div>' +
              '<input type="radio" name="myradiogroup" onclick="displayLayer2(\'{layerBodId}\', this.checked, ' + item.hoehenstufe + ')"/>{label}' +
          '</div>').replace(/{layerBodId}/g, item.layerBodId).replace('{label}', item.labelDE));
        }
        break;
      case "fr":
        if (item.hoehenstufe == '125') {
        $('#mycatalog2').append(
          ('<div>' +
              '<input type="radio" name="myradiogroup" checked onclick="displayLayer2(\'{layerBodId}\', this.checked, ' + item.hoehenstufe + ')"/>{label}' +
          '</div>').replace(/{layerBodId}/g, item.layerBodId).replace('{label}', item.labelFR));
        } else {
        $('#mycatalog2').append(
          ('<div>' +
              '<input type="radio" name="myradiogroup" onclick="displayLayer2(\'{layerBodId}\', this.checked, ' + item.hoehenstufe + ')"/>{label}' +
          '</div>').replace(/{layerBodId}/g, item.layerBodId).replace('{label}', item.labelFR));
        }
        break;
      case "it":
        if (item.hoehenstufe == '125') {
        $('#mycatalog2').append(
          ('<div>' +
              '<input type="radio" name="myradiogroup" checked onclick="displayLayer2(\'{layerBodId}\', this.checked, ' + item.hoehenstufe + ')"/>{label}' +
          '</div>').replace(/{layerBodId}/g, item.layerBodId).replace('{label}', item.labelIT));
        } else {
        $('#mycatalog2').append(
          ('<div>' +
              '<input type="radio" name="myradiogroup" onclick="displayLayer2(\'{layerBodId}\', this.checked, ' + item.hoehenstufe + ')"/>{label}' +
          '</div>').replace(/{layerBodId}/g, item.layerBodId).replace('{label}', item.labelIT));
        }
        break;
      case "en":
        if (item.hoehenstufe == '125') {
        $('#mycatalog2').append(
          ('<div>' +
              '<input type="radio" name="myradiogroup" checked onclick="displayLayer2(\'{layerBodId}\', this.checked, ' + item.hoehenstufe + ')"/>{label}' +
          '</div>').replace(/{layerBodId}/g, item.layerBodId).replace('{label}', item.labelEN));
        } else {
        $('#mycatalog2').append(
          ('<div>' +
              '<input type="radio" name="myradiogroup" onclick="displayLayer2(\'{layerBodId}\', this.checked, ' + item.hoehenstufe + ')"/>{label}' +
          '</div>').replace(/{layerBodId}/g, item.layerBodId).replace('{label}', item.labelEN));
        }
        break;
  }

});


switch (langCat) {
    case "de":
      $('#mycatalog2').append(
        ('<div>' +
            '<input type="radio" name="myradiogroup" onclick="hideLayer2(\'{layerBodId}\', this.checked)"/>{label}' +
        '</div>').replace('{label}', 'ausblenden'));
      break;
    case "fr":
      $('#mycatalog2').append(
        ('<div>' +
            '<input type="radio" name="myradiogroup" onclick="hideLayer2(\'{layerBodId}\', this.checked)"/>{label}' +
        '</div>').replace('{label}', 'balayer'));
      break;
    case "it":
      $('#mycatalog2').append(
        ('<div>' +
            '<input type="radio" name="myradiogroup" onclick="hideLayer2(\'{layerBodId}\', this.checked)"/>{label}' +
        '</div>').replace('{label}', 'dissolvenza'));
      break;
    case "en":
      $('#mycatalog2').append(
        ('<div>' +
            '<input type="radio" name="myradiogroup" onclick="hideLayer2(\'{layerBodId}\', this.checked)"/>{label}' +
        '</div>').replace('{label}', 'hide'));
      break;
}


var displayLayer2 = function(layerBodId, visible, hoehenstufe) {

  catalogConfig2.forEach(function(item) {
    layers2[item.layerBodId].setVisible(false);
  }
  );

  layers2[layerBodId].setVisible(visible);

  document.getElementById("hoehenstufe").innerHTML = '<strong>' + hoehenstufe + '</strong>';

};

var hideLayer2 = function(layerBodId, visible) {

  catalogConfig2.forEach(function(item) {
    layers2[item.layerBodId].setVisible(false);
  }
  );

};

//Start-Layer einblenden, 125 m
layers2['ch.bfe.windenergie-geschwindigkeit_h125'].setVisible(true);



// Define content of catalog
var catalogConfig = [
  {layerBodId: 'ch.bafu.bundesinventare-bln', labelDE: 'BLN Inventar', labelFR: 'Inventaire IFP', labelIT: 'Inentario IFP', labelEN: 'ILNM inventory'},
  {layerBodId: 'ch.bafu.ren-feuchtgebiete', labelDE: 'Feuchtgebiete', labelFR: 'Zones humides', labelIT: 'Zona umida', labelEN: 'Wetland site'},
  {layerBodId: 'ch.bafu.ren-fliessgewaesser_seen', labelDE: 'Fliessgewässer / Seen', labelFR: 'Zones aquatiques', labelIT: 'Corsi d acqua / laghi', labelEN: 'Watercourses / lakes'},
  {layerBodId: 'ch.bafu.bundesinventare-jagdbanngebiete', labelDE: 'Jagdbanngebiete', labelFR: 'Districts francs', labelIT: 'Bandite federali di caccia', labelEN: 'Swiss game reserves'},
  {layerBodId: 'ch.bak.bundesinventar-schuetzenswerte-ortsbilder', labelDE: 'Bundesinventar ISOS', labelFR: 'Inventaire fédéral ISOS', labelIT: 'Inventario federale ISOS', labelEN: 'Federal Inventory ISOS'},
  {layerBodId: 'ch.bafu.schutzgebiete-paerke_nationaler_bedeutung_perimeter', labelDE: 'Pärke (Perimeter)', labelFR: 'Parcs (Perimetre)', labelIT: 'Parchi (Perimetro)', labelEN: 'Parks (Perimeter)'},
  {layerBodId: 'ch.bafu.bundesinventare-trockenwiesen_trockenweiden', labelDE: 'Trockenwiesen und -weiden', labelFR: 'Prairies et pâturages secs', labelIT: 'Prati e pascoli secchi', labelEN: 'Dry grasslands'},
  {layerBodId: 'ch.bfe.abgeltung-wasserkraftnutzung', labelDE: 'Verzicht Wasserkraftnutzung', labelFR: 'Renonciation force hydraulique', labelIT: 'Abbandono dell&apos;drolettricitá', labelEN: 'Abandonment of hydropower'},
  {layerBodId: 'ch.swisstopo.vec200-landcover-wald', labelDE: 'Wald', labelFR: 'Forêts', labelIT: 'Bosco', labelEN: 'Forest'},
  {layerBodId: 'ch.bafu.bundesinventare-vogelreservate', labelDE: 'Wasser- und Zugvogelreservate', labelFR: 'Réserves d&apos;oiseaux d&apos;eau', labelIT: 'Riserve di uccelli acquatici', labelEN: 'Water & migrant bird reserves'}
];

// Create the layers
var layers = {};
catalogConfig.forEach(function(item) {
  layers[item.layerBodId] = ga.layer.create(item.layerBodId);
  layers[item.layerBodId].setVisible(false);
  map.addLayer(layers[item.layerBodId]);

  switch (langCat) {
      case "de":
        $('#mycatalog').append(
            ('<div>' +
                '<input type="checkbox" onclick="displayLayer(\'{layerBodId}\', this.checked)"/><img style="vertical-align:middle" src="images/{layerBodId}.png">{label}' +
            '</div>').replace(/{layerBodId}/g, item.layerBodId).replace('{label}', item.labelDE));
        break;
      case "fr":
        $('#mycatalog').append(
            ('<div>' +
                '<input type="checkbox" onclick="displayLayer(\'{layerBodId}\', this.checked)"/><img style="vertical-align:middle" src="images/{layerBodId}.png">{label}' +
            '</div>').replace(/{layerBodId}/g, item.layerBodId).replace('{label}', item.labelFR));
        break;
      case "it":
        $('#mycatalog').append(
            ('<div>' +
                '<input type="checkbox" onclick="displayLayer(\'{layerBodId}\', this.checked)"/><img style="vertical-align:middle" src="images/{layerBodId}.png">{label}' +
            '</div>').replace(/{layerBodId}/g, item.layerBodId).replace('{label}', item.labelIT));
        break;
      case "en":
        $('#mycatalog').append(
            ('<div>' +
                '<input type="checkbox" onclick="displayLayer(\'{layerBodId}\', this.checked)"/><img style="vertical-align:middle" src="images/{layerBodId}.png">{label}' +
            '</div>').replace(/{layerBodId}/g, item.layerBodId).replace('{label}', item.labelEN));
        break;
  }

});

var displayLayer = function(layerBodId, visible) {
  layers[layerBodId].setVisible(visible);
};




//SEARCH

// Initialize the location marker
var element = $('<div class="marker"></div>');
var popup = new ol.Overlay({
  positioning:'bottom-center',
  element: element 
});
map.addOverlay(popup);

// Initialize the suggestion engine
var mySource = new Bloodhound({
  limit: 30,
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  remote: {
    url: '//api3.geo.admin.ch/rest/services/api/SearchServer?searchText=%QUERY&type=locations',
    filter: function(locations) {   
      return locations.results;
    }
  }
});

// This kicks off the loading and processing of local and prefetch data,
// the suggestion engine will be useless until it is initialized
mySource.initialize();

// Initialize typeahead input
$('#search').typeahead(null, {
  name: 'locations',
  displayKey: function(location) {
    return location.attrs.label.replace('<b>', '').replace('</b>', '');
  },
  source: mySource.ttAdapter(),
  templates: {
    suggestion: function(location) {
      return '<p>' + location.attrs.label + '</p>' ;
    } 
  }                                      
});

var parseExtent = function(stringBox2D) {
  var extent = stringBox2D.replace('BOX(', '').replace(')', '').replace(',', ' ').split(' ');
  return $.map(extent, parseFloat);
};

// When a result is selected.
$('#search').on('typeahead:selected', function(evt, location, suggName) {
  var originZoom = {
    address: 10,
    parcel: 10,
    sn25: 8,
    feature: 7
  };
  if (!(location.attrs.geom_st_box2d || location.attrs.x || location.attrs.y)) {
    alert("GeoAdmin's addresses service is protected. The Swiss cantons only allow websites of the federal government to use the addresses search service. Please try a LESS DETAILED LOCATION or contact us: geodata@swisstopo.ch");
    return;
  }
  var view = map.getView();
  var origin = location.attrs.origin;
  var extent = [0,0,0,0];
  if(location.attrs.geom_st_box2d) {
    extent = parseExtent(location.attrs.geom_st_box2d);
  } else if (location.attrs.x && location.attrs.y) {
    var x = location.attrs.y;
    var y = location.attrs.x
    extent = [x,y,x,y]; 
  }

  if(originZoom.hasOwnProperty(origin)) {
    var zoom = originZoom[origin];
    var center = [(extent[0] + extent[2]) / 2, (extent[1] + extent[3]) / 2];
    view.setZoom(zoom);
    view.setCenter(center);
    popup.setPosition(center);
  } else {
    popup.setPosition([0,0]);
    view.fitExtent(extent, map.getSize());
  }
});