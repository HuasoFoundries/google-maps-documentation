[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/StreetViewLocationRequest.html)

StreetViewLocationRequest interface
-----------------------------------

google.maps.StreetViewLocationRequest interface

A Street View request to be sent with getPanorama. StreetViewLocationRequest lets you search for a Street View panoroma at a specified location.

Properties

[undefined](#StreetViewLocationRequest.location)

**Type:**  [LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng)|[LatLngLiteral](/maps/documentation/javascript/reference/3.40/coordinates#LatLngLiteral) optional

Specifies the location where to search for a Street View panorama.

[undefined](#StreetViewLocationRequest.preference)

**Type:**  [StreetViewPreference](/maps/documentation/javascript/reference/3.40/street-view-service#StreetViewPreference) optional

Sets a preference for which panorama should be found within the radius: the one nearest to the provided location, or the best one within the radius.

[undefined](#StreetViewLocationRequest.radius)

**Type:**  number optional

Sets a radius in meters in which to search for a panorama. Defaults to 50 when not supplied.

[undefined](#StreetViewLocationRequest.source)

**Type:**  [StreetViewSource](/maps/documentation/javascript/reference/3.40/street-view-service#StreetViewSource) optional

Specifies the source of panoramas to search. This allows a restriction to search for just outdoor panoramas for example. If not specified it is set to DEFAULT.