[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/PlaceSearchRequest.html)


PlaceSearchRequest interface
----------------------------

google.maps.places.PlaceSearchRequest interface

A Place search query to be sent to the PlacesService.

#### Library

places

Properties

[bounds](#PlaceSearchRequest.bounds)

**Type:**  [LatLngBounds](LatLngBounds.md)|[LatLngBoundsLiteral](LatLngBoundsLiteral.md) optional

The bounds within which to search for Places. Both location and radius will be ignored if bounds is set.

[keyword](#PlaceSearchRequest.keyword)

**Type:**  string optional

A term to be matched against all available fields, including but not limited to name, type, and address, as well as customer reviews and other third-party content.

[location](#PlaceSearchRequest.location)

**Type:**  [LatLng](LatLng.md)|[LatLngLiteral](LatLngLiteral.md) optional

The location around which to search for Places.

[maxPriceLevel](#PlaceSearchRequest.maxPriceLevel)

**Type:**  number optional

Restricts results to only those places at the specified price level or lower. Valid values are in the range from 0 (most affordable) to 4 (most expensive), inclusive. Must be greater than or equal to minPrice , if specified.

[minPriceLevel](#PlaceSearchRequest.minPriceLevel)

**Type:**  number optional

Restricts results to only those places at the specified price level or higher. Valid values are in the range from 0 (most affordable) to 4 (most expensive), inclusive. Must be less than or equal to maxPrice, if specified.

[name](#PlaceSearchRequest.name)

**Type:**  string optional

Restricts the Place search results to Places that include this text in the name.

[openNow](#PlaceSearchRequest.openNow)

**Type:**  boolean optional

Restricts results to only those places that are open right now.

[radius](#PlaceSearchRequest.radius)

**Type:**  number optional

The distance from the given location within which to search for Places, in meters. The maximum allowed value is 50 000.

[rankBy](#PlaceSearchRequest.rankBy)

**Type:**  [RankBy](RankBy.md) optional

Specifies the ranking method to use when returning results. Defaults to PROMINENCE. Note that when rankBy is set to DISTANCE, you must specify a location but you cannot specify a radius or bounds.

[type](#PlaceSearchRequest.type)

**Type:**  string optional

Searches for places of the given type. The type is translated to the local language of the request's target location and used as a query string. If a query is also provided, it is concatenated to the localized type string. Results of a different type are dropped from the response. Use this field to perform language and region independent categorical searches. Valid types are given [here](/maps/documentation/places/supported_types).