[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/DistanceMatrixService.html)

DistanceMatrixService class
---------------------------

google.maps.DistanceMatrixService class

A service for computing distances between multiple origins and destinations.

Constructor

[undefined](#DistanceMatrixService.constructor)

DistanceMatrixService()

**Parameters:**  None

Creates a new instance of a DistanceMatrixService that sends distance matrix queries to Google servers.

Methods

[undefined](#DistanceMatrixService.getDistanceMatrix)

getDistanceMatrix(request, callback)

**Parameters:** 

*   request:  [DistanceMatrixRequest](/maps/documentation/javascript/reference/3.40/distance-matrix#DistanceMatrixRequest)
*   callback:  function([DistanceMatrixResponse](/maps/documentation/javascript/reference/3.40/distance-matrix#DistanceMatrixResponse), [DistanceMatrixStatus](/maps/documentation/javascript/reference/3.40/distance-matrix#DistanceMatrixStatus))

**Return Value:**  None

Issues a distance matrix request.