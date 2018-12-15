[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/LatLngLiteral.html)


LatLngLiteral interface
-----------------------

google.maps.LatLngLiteral interface

Object literals are accepted in place of LatLng objects, as a convenience, in many places. These are converted to LatLng objects when the Maps API encounters them.

Examples:

 map.setCenter({lat: -34, lng: 151});  
 new google.maps.Marker({position: {lat: -34, lng: 151}, map: map}); 

LatLng object literals are not supported in the Geometry library.

Properties

[lat](#LatLngLiteral.lat)

**Type:**  number

Latitude in degrees. Values will be clamped to the range \[-90, 90\]. This means that if the value specified is less than -90, it will be set to -90. And if the value is greater than 90, it will be set to 90.

[lng](#LatLngLiteral.lng)

**Type:**  number

Longitude in degrees. Values outside the range \[-180, 180\] will be wrapped so that they fall within the range. For example, a value of -190 will be converted to 170. A value of 190 will be converted to -170. This reflects the fact that longitudes wrap around the globe.