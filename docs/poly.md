[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/poly.html)

poly namespace
--------------

google.maps.geometry.poly namespace

Utility functions for computations involving polygons and polylines.

#### Library

geometry

Static Methods

[undefined](#poly.containsLocation)

containsLocation(point, polygon)

**Parameters:** 

*   point:  [LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng)
*   polygon:  [Polygon](/maps/documentation/javascript/reference/3.40/polygon#Polygon)

**Return Value:**  boolean

Computes whether the given point lies inside the specified polygon.

[undefined](#poly.isLocationOnEdge)

isLocationOnEdge(point, poly\[, tolerance\])

**Parameters:** 

*   point:  [LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng)
*   poly:  [Polygon](/maps/documentation/javascript/reference/3.40/polygon#Polygon)|[Polyline](/maps/documentation/javascript/reference/3.40/polygon#Polyline)
*   tolerance:  number optional

**Return Value:**  boolean

Computes whether the given point lies on or near to a polyline, or the edge of a polygon, within a specified tolerance. Returns true when the difference between the latitude and longitude of the supplied point, and the closest point on the edge, is less than the tolerance. The tolerance defaults to 10\-9 degrees.