[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/Data.Polygon.html)

Data.Polygon class
------------------

google.maps.Data.Polygon class

A Polygon geometry contains a number of Data.LinearRings. The first linear-ring must be the polygon exterior boundary and subsequent linear-rings must be interior boundaries, also known as holes. See the [sample polygon with a hole](/maps/documentation/javascript/examples/layer-data-polygon).

This class implements [Data.Geometry](Data.md).

Constructor

[undefined](#Data.Polygon.constructor)

Data.Polygon(elements)

**Parameters:** 

*   elements:  Array<[Data.LinearRing](Data.md)|Array<[LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng)|[LatLngLiteral](/maps/documentation/javascript/reference/3.40/coordinates#LatLngLiteral)\>>

Constructs a Data.Polygon from the given Data.LinearRings or arrays of positions.

Methods

[undefined](#Data.Polygon.forEachLatLng)

forEachLatLng(callback)

**Parameters:** 

*   callback:  function([LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng))

**Return Value:**  None

[undefined](#Data.Polygon.getArray)

getArray()

**Parameters:**  None

**Return Value:**  Array<[Data.LinearRing](Data.md)\>

Returns an array of the contained Data.LinearRings. A new array is returned each time getArray() is called.

[undefined](#Data.Polygon.getAt)

getAt(n)

**Parameters:** 

*   n:  number

**Return Value:**  [Data.LinearRing](Data.md)

Returns the n\-th contained Data.LinearRing.

[undefined](#Data.Polygon.getLength)

getLength()

**Parameters:**  None

**Return Value:**  number

Returns the number of contained Data.LinearRings.

[undefined](#Data.Polygon.getType)

getType()

**Parameters:**  None

**Return Value:**  string

Returns the string "Polygon".