[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/Data.GeometryCollection.html)

Data.GeometryCollection class
-----------------------------

google.maps.Data.GeometryCollection class

A GeometryCollection contains a number of geometry objects. Any LatLng or LatLngLiteral objects are automatically converted to Data.Point geometry objects.

This class implements [Data.Geometry](Data.md).

Constructor

[undefined](#Data.GeometryCollection.constructor)

Data.GeometryCollection(elements)

**Parameters:** 

*   elements:  Array<[Data.Geometry](Data.md)|[LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng)|[LatLngLiteral](/maps/documentation/javascript/reference/3.40/coordinates#LatLngLiteral)\>

Constructs a Data.GeometryCollection from the given geometry objects or LatLngs.

Methods

[undefined](#Data.GeometryCollection.forEachLatLng)

forEachLatLng(callback)

**Parameters:** 

*   callback:  function([LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng))

**Return Value:**  None

[undefined](#Data.GeometryCollection.getArray)

getArray()

**Parameters:**  None

**Return Value:**  Array<[Data.Geometry](Data.md)\>

Returns an array of the contained geometry objects. A new array is returned each time getArray() is called.

[undefined](#Data.GeometryCollection.getAt)

getAt(n)

**Parameters:** 

*   n:  number

**Return Value:**  [Data.Geometry](Data.md)

Returns the n\-th contained geometry object.

[undefined](#Data.GeometryCollection.getLength)

getLength()

**Parameters:**  None

**Return Value:**  number

Returns the number of contained geometry objects.

[undefined](#Data.GeometryCollection.getType)

getType()

**Parameters:**  None

**Return Value:**  string

Returns the string "GeometryCollection".