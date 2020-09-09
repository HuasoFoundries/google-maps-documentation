[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/Place.html)

Place interface
---------------

google.maps.Place interface

Contains information needed to locate, identify, or describe a place for a [DirectionsRequest](/maps/documentation/javascript/reference/3.40/directions#DirectionsRequest) or [DistanceMatrixRequest](/maps/documentation/javascript/reference/3.40/distance-matrix#DistanceMatrixRequest). In this context, "place" means a business, point of interest, or geographic location. For fetching information about a place, see [PlacesService](/maps/documentation/javascript/reference/3.40/places-service#PlacesService).

Properties

[undefined](#Place.location)

**Type:**  [LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng)|[LatLngLiteral](/maps/documentation/javascript/reference/3.40/coordinates#LatLngLiteral) optional

The LatLng of the entity described by this place.

[undefined](#Place.placeId)

**Type:**  string optional

The place ID of the place (such as a business or point of interest). The place ID is a unique identifier of a place in the Google Maps database. Note that the placeId is the most accurate way of identifying a place. If possible, you should specify the placeId rather than a query. A place ID can be retrieved from any request to the Places API, such as a [TextSearch](/places/webservice/search). Place IDs can also be retrieved from requests to the Geocoding API. For more information, see the [overview of place IDs](/places/place-id).

[undefined](#Place.query)

**Type:**  string optional

A search query describing the place (such as a business or point of interest). An example query is "Quay, Upper Level, Overseas Passenger Terminal 5 Hickson Road, The Rocks NSW". If possible, you should specify the placeId rather than a query. The API does not guarantee the accuracy of resolving the query string to a place. If both the placeId and query are provided, an error occurs.