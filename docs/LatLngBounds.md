[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/LatLngBounds.html)

LatLngBounds class
------------------

google.maps.LatLngBounds class

A [LatLngBounds](#LatLngBounds) instance represents a rectangle in geographical coordinates, including one that crosses the 180 degrees longitudinal meridian.

Constructor

[undefined](#LatLngBounds.constructor)

LatLngBounds(\[sw, ne\])

**Parameters:** 

*   sw:  [LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng)|[LatLngLiteral](/maps/documentation/javascript/reference/3.40/coordinates#LatLngLiteral) optional
*   ne:  [LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng)|[LatLngLiteral](/maps/documentation/javascript/reference/3.40/coordinates#LatLngLiteral) optional

Constructs a rectangle from the points at its south-west and north-east corners.

Methods

[undefined](#LatLngBounds.contains)

contains(latLng)

**Parameters:** 

*   latLng:  [LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng)|[LatLngLiteral](/maps/documentation/javascript/reference/3.40/coordinates#LatLngLiteral)

**Return Value:**  boolean

Returns true if the given lat/lng is in this bounds.

[undefined](#LatLngBounds.equals)

equals(other)

**Parameters:** 

*   other:  [LatLngBounds](/maps/documentation/javascript/reference/3.40/coordinates#LatLngBounds)|[LatLngBoundsLiteral](/maps/documentation/javascript/reference/3.40/coordinates#LatLngBoundsLiteral)

**Return Value:**  boolean

Returns true if this bounds approximately equals the given bounds.

[undefined](#LatLngBounds.extend)

extend(point)

**Parameters:** 

*   point:  [LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng)|[LatLngLiteral](/maps/documentation/javascript/reference/3.40/coordinates#LatLngLiteral)

**Return Value:**  [LatLngBounds](/maps/documentation/javascript/reference/3.40/coordinates#LatLngBounds)

Extends this bounds to contain the given point.

[undefined](#LatLngBounds.getCenter)

getCenter()

**Parameters:**  None

**Return Value:**  [LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng)

Computes the center of this LatLngBounds

[undefined](#LatLngBounds.getNorthEast)

getNorthEast()

**Parameters:**  None

**Return Value:**  [LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng)

Returns the north-east corner of this bounds.

[undefined](#LatLngBounds.getSouthWest)

getSouthWest()

**Parameters:**  None

**Return Value:**  [LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng)

Returns the south-west corner of this bounds.

[undefined](#LatLngBounds.intersects)

intersects(other)

**Parameters:** 

*   other:  [LatLngBounds](/maps/documentation/javascript/reference/3.40/coordinates#LatLngBounds)|[LatLngBoundsLiteral](/maps/documentation/javascript/reference/3.40/coordinates#LatLngBoundsLiteral)

**Return Value:**  boolean

Returns true if this bounds shares any points with the other bounds.

[undefined](#LatLngBounds.isEmpty)

isEmpty()

**Parameters:**  None

**Return Value:**  boolean

Returns if the bounds are empty.

[undefined](#LatLngBounds.toJSON)

toJSON()

**Parameters:**  None

**Return Value:**  [LatLngBoundsLiteral](/maps/documentation/javascript/reference/3.40/coordinates#LatLngBoundsLiteral)

Converts to JSON representation. This function is intended to be used via JSON.stringify.

[undefined](#LatLngBounds.toSpan)

toSpan()

**Parameters:**  None

**Return Value:**  [LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng)

Converts the given map bounds to a lat/lng span.

[undefined](#LatLngBounds.toString)

toString()

**Parameters:**  None

**Return Value:**  string

Converts to string.

[undefined](#LatLngBounds.toUrlValue)

toUrlValue(\[precision\])

**Parameters:** 

*   precision:  number optional

**Return Value:**  string

Returns a string of the form "lat\_lo,lng\_lo,lat\_hi,lng\_hi" for this bounds, where "lo" corresponds to the southwest corner of the bounding box, while "hi" corresponds to the northeast corner of that box.

[undefined](#LatLngBounds.union)

union(other)

**Parameters:** 

*   other:  [LatLngBounds](/maps/documentation/javascript/reference/3.40/coordinates#LatLngBounds)|[LatLngBoundsLiteral](/maps/documentation/javascript/reference/3.40/coordinates#LatLngBoundsLiteral)

**Return Value:**  [LatLngBounds](/maps/documentation/javascript/reference/3.40/coordinates#LatLngBounds)

Extends this bounds to contain the union of this and the given bounds.