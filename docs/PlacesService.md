[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/PlacesService.html)

PlacesService class
-------------------

google.maps.places.PlacesService class

Contains methods related to searching for places and retrieving details about a place.

#### Library

places

Constructor

[undefined](#PlacesService.constructor)

PlacesService(attrContainer)

**Parameters:** 

*   attrContainer:  HTMLDivElement|[Map](/maps/documentation/javascript/reference/3.40/map#Map)

Creates a new instance of the PlacesService that renders attributions in the specified container.

Methods

[undefined](#PlacesService.findPlaceFromPhoneNumber)

findPlaceFromPhoneNumber(request, callback)

**Parameters:** 

*   request:  [FindPlaceFromPhoneNumberRequest](/maps/documentation/javascript/reference/3.40/places-service#FindPlaceFromPhoneNumberRequest)
*   callback:  function(Array<[PlaceResult](/maps/documentation/javascript/reference/3.40/places-service#PlaceResult)\> optional, [PlacesServiceStatus](/maps/documentation/javascript/reference/3.40/places-service#PlacesServiceStatus))

**Return Value:**  None

Retrieves a list of places based on a phone number. In most cases there should be just one item in the result list, however if the request is ambiguous more than one result may be returned. The [PlaceResult](/maps/documentation/javascript/reference/3.40/places-service#PlaceResult)s passed to the callback are subsets of a full [PlaceResult](/maps/documentation/javascript/reference/3.40/places-service#PlaceResult). Your app can get a more detailed [PlaceResult](/maps/documentation/javascript/reference/3.40/places-service#PlaceResult) for each place by calling [PlacesService.getDetails](PlacesService.md) and passing the [PlaceResult.place\_id](PlaceResult.md) for the desired place.

[undefined](#PlacesService.findPlaceFromQuery)

findPlaceFromQuery(request, callback)

**Parameters:** 

*   request:  [FindPlaceFromQueryRequest](/maps/documentation/javascript/reference/3.40/places-service#FindPlaceFromQueryRequest)
*   callback:  function(Array<[PlaceResult](/maps/documentation/javascript/reference/3.40/places-service#PlaceResult)\> optional, [PlacesServiceStatus](/maps/documentation/javascript/reference/3.40/places-service#PlacesServiceStatus))

**Return Value:**  None

Retrieves a list of places based on a query string. In most cases there should be just one item in the result list, however if the request is ambiguous more than one result may be returned. The [PlaceResult](/maps/documentation/javascript/reference/3.40/places-service#PlaceResult)s passed to the callback are subsets of a full [PlaceResult](/maps/documentation/javascript/reference/3.40/places-service#PlaceResult). Your app can get a more detailed [PlaceResult](/maps/documentation/javascript/reference/3.40/places-service#PlaceResult) for each place by calling [PlacesService.getDetails](PlacesService.md) and passing the [PlaceResult.place\_id](PlaceResult.md) for the desired place.

[undefined](#PlacesService.getDetails)

getDetails(request, callback)

**Parameters:** 

*   request:  [PlaceDetailsRequest](/maps/documentation/javascript/reference/3.40/places-service#PlaceDetailsRequest)
*   callback:  function([PlaceResult](/maps/documentation/javascript/reference/3.40/places-service#PlaceResult) optional, [PlacesServiceStatus](/maps/documentation/javascript/reference/3.40/places-service#PlacesServiceStatus))

**Return Value:**  None

Retrieves details about the place identified by the given placeId.

[undefined](#PlacesService.nearbySearch)

nearbySearch(request, callback)

**Parameters:** 

*   request:  [PlaceSearchRequest](/maps/documentation/javascript/reference/3.40/places-service#PlaceSearchRequest)
*   callback:  function(Array<[PlaceResult](/maps/documentation/javascript/reference/3.40/places-service#PlaceResult)\> optional, [PlacesServiceStatus](/maps/documentation/javascript/reference/3.40/places-service#PlacesServiceStatus), [PlaceSearchPagination](/maps/documentation/javascript/reference/3.40/places-service#PlaceSearchPagination) optional)

**Return Value:**  None

Retrieves a list of places near a particular location, based on keyword or type. Location must always be specified, either by passing a LatLngBounds, or location and radius parameters. The [PlaceResult](/maps/documentation/javascript/reference/3.40/places-service#PlaceResult)s passed to the callback are subsets of the full [PlaceResult](/maps/documentation/javascript/reference/3.40/places-service#PlaceResult). Your app can get a more detailed [PlaceResult](/maps/documentation/javascript/reference/3.40/places-service#PlaceResult) for each place by sending a [Place Details request](/maps/documentation/javascript/places#place_details_requests) passing the [PlaceResult.place\_id](PlaceResult.md) for the desired place. The [PlaceSearchPagination](/maps/documentation/javascript/reference/3.40/places-service#PlaceSearchPagination) object can be used to fetch additional pages of results (null if this is the last page of results or if there is only one page of results).

[undefined](#PlacesService.textSearch)

textSearch(request, callback)

**Parameters:** 

*   request:  [TextSearchRequest](/maps/documentation/javascript/reference/3.40/places-service#TextSearchRequest)
*   callback:  function(Array<[PlaceResult](/maps/documentation/javascript/reference/3.40/places-service#PlaceResult)\> optional, [PlacesServiceStatus](/maps/documentation/javascript/reference/3.40/places-service#PlacesServiceStatus), [PlaceSearchPagination](/maps/documentation/javascript/reference/3.40/places-service#PlaceSearchPagination) optional)

**Return Value:**  None

Retrieves a list of places based on a query string (for example, "pizza in New York", or "shoe stores near Ottawa"). Location parameters are optional; when the location is specified, results are only biased toward nearby results rather than restricted to places inside the area. Use textSearch when you want to search for places using an arbitrary string, and in cases where you may not want to restrict search results to a particular location. The PlaceSearchPagination object can be used to fetch additional pages of results (null if this is the last page of results or if there is only one page of results).