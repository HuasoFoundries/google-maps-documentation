[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/PlaceGeometry.html)

PlaceGeometry interface
-----------------------

google.maps.places.PlaceGeometry interface

Defines information about the geometry of a Place.

#### Library

places

Properties

[undefined](#PlaceGeometry.location)

**Type:**  [LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng) optional

The Place’s position.

[undefined](#PlaceGeometry.viewport)

**Type:**  [LatLngBounds](/maps/documentation/javascript/reference/3.40/coordinates#LatLngBounds) optional

The preferred viewport when displaying this Place on a map. This property will be null if the preferred viewport for the Place is not known. Only available with [PlacesService.getDetails](PlacesService.md).