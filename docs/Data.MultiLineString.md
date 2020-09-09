[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/Data.MultiLineString.html)

Data.MultiLineString class
--------------------------

google.maps.Data.MultiLineString class

A MultiLineString geometry contains a number of LineStrings.

This class implements [Data.Geometry](Data.md).

Constructor

[undefined](#Data.MultiLineString.constructor)

Data.MultiLineString(elements)

**Parameters:** 

*   elements:  Array<[Data.LineString](Data.md)|Array<[LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng)|[LatLngLiteral](/maps/documentation/javascript/reference/3.40/coordinates#LatLngLiteral)\>>

Constructs a Data.MultiLineString from the given Data.LineStrings or arrays of positions.

Methods

[undefined](#Data.MultiLineString.forEachLatLng)

forEachLatLng(callback)

**Parameters:** 

*   callback:  function([LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng))

**Return Value:**  None

[undefined](#Data.MultiLineString.getArray)

getArray()

**Parameters:**  None

**Return Value:**  Array<[Data.LineString](Data.md)\>

Returns an array of the contained Data.LineStrings. A new array is returned each time getArray() is called.

[undefined](#Data.MultiLineString.getAt)

getAt(n)

**Parameters:** 

*   n:  number

**Return Value:**  [Data.LineString](Data.md)

Returns the n\-th contained Data.LineString.

[undefined](#Data.MultiLineString.getLength)

getLength()

**Parameters:**  None

**Return Value:**  number

Returns the number of contained Data.LineStrings.

[undefined](#Data.MultiLineString.getType)

getType()

**Parameters:**  None

**Return Value:**  string

Returns the string "MultiLineString".