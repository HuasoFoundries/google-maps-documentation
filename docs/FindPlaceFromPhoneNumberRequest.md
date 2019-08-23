[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/FindPlaceFromPhoneNumberRequest.html)


FindPlaceFromPhoneNumberRequest interface
-----------------------------------------

google.maps.places.FindPlaceFromPhoneNumberRequest interface

A find place from text search request to be sent to [PlacesService.findPlaceFromPhoneNumber](https://developers.google.com/maps/documentation/javascript/reference/places-service#PlacesService.findPlaceFromPhoneNumber).

#### Library

places

Properties

[fields](#FindPlaceFromPhoneNumberRequest.fields)

**Type:**  Array<string>

Fields to be included in the response, [which will be billed for](https://developers.google.com/maps/billing/understanding-cost-of-use#places-product). If \['ALL'\] is passed in, all available fields will be returned and billed for (this is not recommended for production deployments). For a list of fields see [PlaceResult](PlaceResult.md). Nested fields can be specified with dot-paths (for example, "geometry.location").

[locationBias](#FindPlaceFromPhoneNumberRequest.locationBias)

**Type:**  [LocationBias](LocationBias.md) optional

The bias used when searching for Place. The result will be biased towards, but not restricted to, the given [LocationBias](LocationBias.md).

[phoneNumber](#FindPlaceFromPhoneNumberRequest.phoneNumber)

**Type:**  string

The phone number of the place to look up. Format must be [E.164](https://en.wikipedia.org/wiki/E.164).