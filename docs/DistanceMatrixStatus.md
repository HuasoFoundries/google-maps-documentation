[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/DistanceMatrixStatus.html)

DistanceMatrixStatus constants
------------------------------

google.maps.DistanceMatrixStatus constants

The top-level status about the request in general returned by the DistanceMatrixService upon completion of a distance matrix request. Specify these by value, or by using the constant's name. For example, 'OK' or google.maps.DistanceMatrixStatus.OK.

Constants

[undefined](#DistanceMatrixStatus.INVALID_REQUEST)

The provided request was invalid.

[undefined](#DistanceMatrixStatus.MAX_DIMENSIONS_EXCEEDED)

The request contains more than 25 origins, or more than 25 destinations.

[undefined](#DistanceMatrixStatus.MAX_ELEMENTS_EXCEEDED)

The product of origins and destinations exceeds the per-query limit.

[undefined](#DistanceMatrixStatus.OK)

The response contains a valid result.

[undefined](#DistanceMatrixStatus.OVER_QUERY_LIMIT)

Too many elements have been requested within the allowed time period. The request should succeed if you try again after a reasonable amount of time.

[undefined](#DistanceMatrixStatus.REQUEST_DENIED)

The service denied use of the Distance Matrix service by your web page.

[undefined](#DistanceMatrixStatus.UNKNOWN_ERROR)

A Distance Matrix request could not be processed due to a server error. The request may succeed if you try again.