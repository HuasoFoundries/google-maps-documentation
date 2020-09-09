[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/PlaceSearchRequest.html)

PlaceSearchRequest interface
----------------------------

google.maps.places.PlaceSearchRequest interface

A Place search query to be sent to the PlacesService.

#### Library

places

Properties

[undefined](#PlaceSearchRequest.bounds)

**Type:**  [LatLngBounds](/maps/documentation/javascript/reference/3.40/coordinates#LatLngBounds)|[LatLngBoundsLiteral](/maps/documentation/javascript/reference/3.40/coordinates#LatLngBoundsLiteral) optional

The bounds within which to search for Places. Both location and radius will be ignored if bounds is set.

[undefined](#PlaceSearchRequest.keyword)

**Type:**  string optional

A term to be matched against all available fields, including but not limited to name, type, and address, as well as customer reviews and other third-party content.

[undefined](#PlaceSearchRequest.location)

**Type:**  [LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng)|[LatLngLiteral](/maps/documentation/javascript/reference/3.40/coordinates#LatLngLiteral) optional

The location around which to search for Places.

[undefined](#PlaceSearchRequest.maxPriceLevel)

**Type:**  number optional

Restricts results to only those places at the specified price level or lower. Valid values are in the range from 0 (most affordable) to 4 (most expensive), inclusive. Must be greater than or equal to minPrice , if specified.

[undefined](#PlaceSearchRequest.minPriceLevel)

**Type:**  number optional

Restricts results to only those places at the specified price level or higher. Valid values are in the range from 0 (most affordable) to 4 (most expensive), inclusive. Must be less than or equal to maxPrice, if specified.

[undefined](#PlaceSearchRequest.name)

**Type:**  string optional

Restricts the Place search results to Places that include this text in the name.

[undefined](#PlaceSearchRequest.openNow)

**Type:**  boolean optional

Restricts results to only those places that are open right now.

[undefined](#PlaceSearchRequest.radius)

**Type:**  number optional

The distance from the given location within which to search for Places, in meters. The maximum allowed value is 50 000.

[undefined](#PlaceSearchRequest.rankBy)

**Type:**  [RankBy](/maps/documentation/javascript/reference/3.40/places-service#RankBy) optional

Specifies the ranking method to use when returning results. Defaults to PROMINENCE. Note that when rankBy is set to DISTANCE, you must specify a location but you cannot specify a radius or bounds.

[undefined](#PlaceSearchRequest.type)

**Type:**  string optional

Searches for places of the given type. The type is translated to the local language of the request's target location and used as a query string. If a query is also provided, it is concatenated to the localized type string. Results of a different type are dropped from the response. Use this field to perform language and region independent categorical searches. Valid types are given [here](/maps/documentation/places/supported_types).