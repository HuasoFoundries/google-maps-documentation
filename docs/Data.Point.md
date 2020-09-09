[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/Data.Point.html)

Data.Point class
----------------

google.maps.Data.Point class

A Point geometry contains a single LatLng.

This class implements [Data.Geometry](Data.md).

Constructor

[undefined](#Data.Point.constructor)

Data.Point(latLng)

**Parameters:** 

*   latLng:  [LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng)|[LatLngLiteral](/maps/documentation/javascript/reference/3.40/coordinates#LatLngLiteral)

Constructs a Data.Point from the given LatLng or LatLngLiteral.

Methods

[undefined](#Data.Point.forEachLatLng)

forEachLatLng(callback)

**Parameters:** 

*   callback:  function([LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng))

**Return Value:**  None

[undefined](#Data.Point.get)

get()

**Parameters:**  None

**Return Value:**  [LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng)

Returns the contained LatLng.

[undefined](#Data.Point.getType)

getType()

**Parameters:**  None

**Return Value:**  string

Returns the string "Point".