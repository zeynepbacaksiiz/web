/*
Yıldız Teknik Üniversitesi Davutpaşa Kampüsü 41.025295, 28.890500
İstanbul Teknik Üniversitesi Ayazağa Kampüsü 41.104702, 29.022899
İGA Dış Hatlar Terminali 41.262990, 28.737381
İGA İç Hatlar Terminali 41.260151, 28.748088
Üsküdar 41.026776, 29.015008
Fatih 41.016331, 28.941331
*/

function initMap(){
    const coordinates={
        yildizTeknikUni:{lat:41.025295, lng: 28.890500},
        istanbulTeknikUni:{lat:41.104702, lng: 29.022899},
        IgaDisHatlar:{lat:41.262990, lng: 28.737381},
        IgaIcHatlar:{lat:41.260151, lng: 28.748088},
        Uskudar:{lat:41.026776, lng: 29.015008},
        Fatih:{lat:41.016331, lng: 28.941331},
        sogutlucesmeMarmaray: { lat: 40.990715, lng: 29.037931},
        erenkoyMarmaray: { lat: 40.970975, lng: 29.076289},
        bostanciMarmaray: { lat: 40.953403, lng: 29.095325},
        akasyaavmmetrocikisi: { lat: 41.001679, lng: 29.054665},
    }
    const icon = {
        url: 'https://digitalexchange.com.tr/img/map-icons/binbin.png',
    };
    let map = new google.maps.Map(document.getElementById('map'), {
        center: coordinates.merkez,
        zoom: 20,
        disableDefaultUI: true,
        styles:[
            {
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "saturation": 36
                    },
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 40
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 17
                    },
                    {
                        "weight": 1.2
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 21
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "saturation": "-10"
                    },
                    {
                        "lightness": "0"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 17
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 29
                    },
                    {
                        "weight": 0.2
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 18
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 19
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 17
                    }
                ]
            }
        ]
    });


    addMarker(coordinates.yildizTeknikUni);
    addMarker(coordinates.istanbulTeknikUni);
    addMarker(coordinates.IgaDisHatlar);
    addMarker(coordinates.IgaIcHatlar);
    addMarker(coordinates.Uskudar);
    addMarker(coordinates.Fatih);
        
        
    function addMarker(coordinate) {
        var marker = new google.maps.Marker({
            position: coordinate,
            map: map,
            icon: icon,
            animation: google.maps.Animation.DROP,
        });

    }
    function focus(coordinates,zoom) {
        map.setCenter(coordinates);
        map.setZoom(zoom)
    }

    $('select[name="station"]').on('change', function() {
        mapSelect($(this).val())
    });
    
    mapSelect('yildizTeknikUni', 10)
    
    function mapSelect(val, customZoom = 15){
        focus(coordinates[val], customZoom)
    }


}
