var map;

var data = [
    { i: "i0", name: "Mur Chiñski", lat: 40.4318605, lng: 116.5685754 },
    { i: "i1", name: "Wielki Kanion", lat: 36.1252569, lng: -114.0652265 },
    { i: "i2", name: "Piramidy Egipskie", lat: 29.9772962, lng: 31.1324955 }
];

function init() {


    for (var i in data) {
        var el = data[i];

        var itemTemplate = document.getElementById("item").innerHTML;
        Mustache.parse(itemTemplate);
        var itemData = { i: el.i, name: el.name, lat: el.lat, lng: el.lng };
        var gen = Mustache.render(itemTemplate, itemData);
        var container = document.getElementById('container');
        container.insertAdjacentHTML('beforeend', gen);
    }

    $('.kar').flickity({
        wrapAround: true,
        contain: true
    });

    $(".kar").on("select.flickity", function (e, i) {
        var item = $("#i" + i);
        var lat = parseFloat(item.attr("data_lat"));
        var lng = parseFloat(item.attr("data_lng"));
        var pos = { lat: lat, lng: lng };
        console.log(pos);

        map = new google.maps.Map(document.getElementById('map'), {
            center: pos,
            zoom: 8
        });

        var marker = new google.maps.Marker({ position: pos, map: map });
    });
}

function initMap() {

    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: data[0].lat, lng: data[0].lng },
        zoom: 8
    });

    var marker = new google.maps.Marker({ position: { lat: data[0].lat, lng: data[0].lng }, map: map });

    var pos1 = { lat: 40.4318605, lng: 116.5685754 };
    var pos2 = { lat: 40.8, lng: 116.8 };
    var pos3 = { lat: 40.2, lng: 116.2 };

    map = new google.maps.Map(document.getElementById('map'), {
        center: pos1,
        zoom: 8
    });

    var marker1 = new google.maps.Marker({ position: pos1, map: map });
    var marker2 = new google.maps.Marker({ position: pos2, map: map });
    var marker3 = new google.maps.Marker({ position: pos3, map: map });

    var infos = document.getElementById("infos");

    marker1.addListener('click', function () {
        infos.innerHTML = 'You clicked marker 1';
    });		

    marker2.addListener('click', function () {
        infos.innerHTML = 'You clicked marker 2';
    });	

    marker3.addListener('click', function () {
        infos.innerHTML = 'You clicked marker 3';
    });	
}