// This example displays a marker at the center of Australia.
// When the user clicks the marker, an info window opens.

function initMap() {
    
  var rostov = {
    position: { lat: 47.2247093, lng: 39.7283837 },
    zoom: 14
  };

  var tooltip = {
    width: 500,
    height: 400
  }

  var markers = [
    {
      position: { lat: 47.2247093, lng: 39.7283837 },
      title: 'Главный корпус ЮФУ',
      panorana: '!1m0!3m2!1sru!2sru!4v1480967643877!6m8!1m7!1sqwk1360SXdwAAAQvPGGJsA!2m2!1d47.22470929672553!2d39.72838366510337!3f134!4f0!5f0.7820865974627469'
    },
    {       
      position: { lat: 47.226778, lng: 39.7267817 },
      title: 'Институт филологии журналистики и межкультурной коммуникации ЮФУ',
      panorana: '!1m0!3m2!1sru!2sru!4v1480966916664!6m8!1m7!1s8-axNTfRjLgAAAQvPGgYpg!2m2!1d47.22677795222104!2d39.72678173872873!3f69.63!4f-0.9399999999999977!5f0.7820865974627469'
    },
    {      
      position: { lat: 47.2271368, lng: 39.7258221 },
      title: "Институт филологии журналистики и межкультурной коммуникации (корпус на Пушкинской) ЮФУ",
      panorana: "!1m0!3m2!1sru!2sru!4v1480971103704!6m8!1m7!1s9wIl4QgBBjoAAAQvPGgYsg!2m2!1d47.22713680202239!2d39.72582207193307!3f68.62!4f-1.269999999999996!5f0.7820865974627469"
    },
    {
      position: { lat: 47.2277134, lng: 39.7281206 },
      title: "Институт социологии и регионоведения ЮФУ",
      panorana: "!1m0!3m2!1sru!2sru!4v1480971279192!6m8!1m7!1sZJlgNEsFaJMAAAQvPGuZSg!2m2!1d47.22771343803903!2d39.72812060274885!3f276.18!4f-1.3799999999999955!5f0.7820865974627469"
    },
    {
      position: { lat: 47.2227468, lng: 39.7188637 },
      title: "Открытый институт современных образовательных технологий ЮФУ «Буревестник»",
      panorana: "!1m0!3m2!1sru!2sru!4v1480971516869!6m8!1m7!1sKGj38jK_QFIAAAQvPGvbuA!2m2!1d47.22274680913279!2d39.71886368953847!3f80.21!4f3.8799999999999955!5f0.7820865974627469"
    }
  ];

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: rostov.zoom,
    center: rostov.position
  });

  markers.forEach(function(mark) {
    var panoranaContent = '<iframe src="https://www.google.com/maps/embed?pb=' + mark.panorana +
      '" width=' + tooltip.width + ' height='+ tooltip.height +' frameborder="0" style="border:0" allowfullscreen></iframe>';

    var infowindow = new google.maps.InfoWindow({
      content: panoranaContent
    });

    var marker = new google.maps.Marker({
        position: mark.position,
        map: map,
        title: mark.title
    });

    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
  })

}