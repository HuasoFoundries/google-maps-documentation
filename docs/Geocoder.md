[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/Geocoder.html)

Geocoder class
--------------

google.maps.Geocoder class

A service for converting between an address and a LatLng.

Constructor

[undefined](#Geocoder.constructor)

Geocoder()

**Parameters:**  None

Creates a new instance of a Geocoder that sends geocode requests to Google servers.

Methods

[undefined](#Geocoder.geocode)

geocode(request, callback)

**Parameters:** 

*   request:  [GeocoderRequest](/maps/documentation/javascript/reference/3.40/geocoder#GeocoderRequest)
*   callback:  function(Array<[GeocoderResult](/maps/documentation/javascript/reference/3.40/geocoder#GeocoderResult)\>, [GeocoderStatus](/maps/documentation/javascript/reference/3.40/geocoder#GeocoderStatus))

**Return Value:**  None

Geocode a request.