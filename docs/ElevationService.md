[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/ElevationService.html)

ElevationService class
----------------------

google.maps.ElevationService class

Defines a service class that talks directly to Google servers for requesting elevation data.

Constructor

[undefined](#ElevationService.constructor)

ElevationService()

**Parameters:**  None

Creates a new instance of a ElevationService that sends elevation queries to Google servers.

Methods

[undefined](#ElevationService.getElevationAlongPath)

getElevationAlongPath(request, callback)

**Parameters:** 

*   request:  [PathElevationRequest](/maps/documentation/javascript/reference/3.40/elevation#PathElevationRequest)
*   callback:  function(Array<[ElevationResult](/maps/documentation/javascript/reference/3.40/elevation#ElevationResult)\> optional, [ElevationStatus](/maps/documentation/javascript/reference/3.40/elevation#ElevationStatus))

**Return Value:**  None

Makes an elevation request along a path, where the elevation data are returned as distance-based samples along that path.

[undefined](#ElevationService.getElevationForLocations)

getElevationForLocations(request, callback)

**Parameters:** 

*   request:  [LocationElevationRequest](/maps/documentation/javascript/reference/3.40/elevation#LocationElevationRequest)
*   callback:  function(Array<[ElevationResult](/maps/documentation/javascript/reference/3.40/elevation#ElevationResult)\> optional, [ElevationStatus](/maps/documentation/javascript/reference/3.40/elevation#ElevationStatus))

**Return Value:**  None

Makes an elevation request for a list of discrete locations.