[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/Data.MultiPolygon.html)

Data.MultiPolygon class
-----------------------

google.maps.Data.MultiPolygon class

A MultiPolygon geometry contains a number of Data.Polygons.

This class implements [Data.Geometry](Data.md).

Constructor

[undefined](#Data.MultiPolygon.constructor)

Data.MultiPolygon(elements)

**Parameters:** 

*   elements:  Array<[Data.Polygon](Data.md)|Array<[Data.LinearRing](Data.md)|Array<[LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng)|[LatLngLiteral](/maps/documentation/javascript/reference/3.40/coordinates#LatLngLiteral)\>>>

Constructs a Data.MultiPolygon from the given Data.Polygons or arrays of positions.

Methods

[undefined](#Data.MultiPolygon.forEachLatLng)

forEachLatLng(callback)

**Parameters:** 

*   callback:  function([LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng))

**Return Value:**  None

[undefined](#Data.MultiPolygon.getArray)

getArray()

**Parameters:**  None

**Return Value:**  Array<[Data.Polygon](Data.md)\>

Returns an array of the contained Data.Polygons. A new array is returned each time getArray() is called.

[undefined](#Data.MultiPolygon.getAt)

getAt(n)

**Parameters:** 

*   n:  number

**Return Value:**  [Data.Polygon](Data.md)

Returns the n\-th contained Data.Polygon.

[undefined](#Data.MultiPolygon.getLength)

getLength()

**Parameters:**  None

**Return Value:**  number

Returns the number of contained Data.Polygons.

[undefined](#Data.MultiPolygon.getType)

getType()

**Parameters:**  None

**Return Value:**  string

Returns the string "MultiPolygon".