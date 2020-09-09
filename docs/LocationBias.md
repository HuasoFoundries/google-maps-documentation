[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/LocationBias.html)

LocationBias typedef
--------------------

google.maps.places.LocationBias typedef

A LocationBias represents a soft boundary or hint to use when searching for Places. Results may come from outside the specified area. To use the current user's IP address as a bias, the string "IP\_BIAS" can be specified. Note: if using a [Circle](/maps/documentation/javascript/reference/3.40/polygon#Circle) the center and radius must be defined.

#### Library

places

[LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng)|[LatLngLiteral](/maps/documentation/javascript/reference/3.40/coordinates#LatLngLiteral)|[LatLngBounds](/maps/documentation/javascript/reference/3.40/coordinates#LatLngBounds)|[LatLngBoundsLiteral](/maps/documentation/javascript/reference/3.40/coordinates#LatLngBoundsLiteral)|[Circle](/maps/documentation/javascript/reference/3.40/polygon#Circle)|[CircleLiteral](/maps/documentation/javascript/reference/3.40/coordinates#CircleLiteral)|string