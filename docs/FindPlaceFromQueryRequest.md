[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/FindPlaceFromQueryRequest.html)

FindPlaceFromQueryRequest interface
-----------------------------------

google.maps.places.FindPlaceFromQueryRequest interface

A find place from text search request to be sent to [PlacesService.findPlaceFromQuery](PlacesService.md).

#### Library

places

Properties

[undefined](#FindPlaceFromQueryRequest.fields)

**Type:**  Array<string>

Fields to be included in the response, [which will be billed for](https://developers.google.com/maps/billing/understanding-cost-of-use#places-product). If \['ALL'\] is passed in, all available fields will be returned and billed for (this is not recommended for production deployments). For a list of fields see [PlaceResult](/maps/documentation/javascript/reference/3.40/places-service#PlaceResult). Nested fields can be specified with dot-paths (for example, "geometry.location").

[undefined](#FindPlaceFromQueryRequest.locationBias)

**Type:**  [LocationBias](/maps/documentation/javascript/reference/3.40/places-service#LocationBias) optional

The bias used when searching for Place. The result will be biased towards, but not restricted to, the given [LocationBias](/maps/documentation/javascript/reference/3.40/places-service#LocationBias).

[undefined](#FindPlaceFromQueryRequest.query)

**Type:**  string

The request's query. For example, the name or address of a place.