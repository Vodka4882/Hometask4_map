var map;

function initialize() {
      $.ajax({
      url: "coordinates.json",
      method: 'GET',
      'success': function(data){
        var mapOptions = {
          zoom: 13,
          mapTypeId: google.maps.MapTypeId.SATELLITE,
          center: new google.maps.LatLng(data.first, data.second) /* data.из_аякса */
        };
        map = new google.maps.Map(document.getElementById('satView'), mapOptions)
      }
    });
}

google.maps.event.addDomListener(window, 'load', initialize);
