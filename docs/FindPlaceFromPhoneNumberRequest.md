[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/FindPlaceFromPhoneNumberRequest.html)

FindPlaceFromPhoneNumberRequest interface
-----------------------------------------

google.maps.places.FindPlaceFromPhoneNumberRequest interface

A find place from text search request to be sent to [PlacesService.findPlaceFromPhoneNumber](PlacesService.md).

#### Library

places

Properties

[undefined](#FindPlaceFromPhoneNumberRequest.fields)

**Type:**  Array<string>

Fields to be included in the response, [which will be billed for](https://developers.google.com/maps/billing/understanding-cost-of-use#places-product). If \['ALL'\] is passed in, all available fields will be returned and billed for (this is not recommended for production deployments). For a list of fields see [PlaceResult](/maps/documentation/javascript/reference/3.40/places-service#PlaceResult). Nested fields can be specified with dot-paths (for example, "geometry.location").

[undefined](#FindPlaceFromPhoneNumberRequest.locationBias)

**Type:**  [LocationBias](/maps/documentation/javascript/reference/3.40/places-service#LocationBias) optional

The bias used when searching for Place. The result will be biased towards, but not restricted to, the given [LocationBias](/maps/documentation/javascript/reference/3.40/places-service#LocationBias).

[undefined](#FindPlaceFromPhoneNumberRequest.phoneNumber)

**Type:**  string

The phone number of the place to look up. Format must be [E.164](https://en.wikipedia.org/wiki/E.164).