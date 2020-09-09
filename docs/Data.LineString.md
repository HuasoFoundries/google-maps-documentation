[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/Data.LineString.html)

Data.LineString class
---------------------

google.maps.Data.LineString class

A LineString geometry contains a number of LatLngs.

This class implements [Data.Geometry](Data.md).

Constructor

[undefined](#Data.LineString.constructor)

Data.LineString(elements)

**Parameters:** 

*   elements:  Array<[LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng)|[LatLngLiteral](/maps/documentation/javascript/reference/3.40/coordinates#LatLngLiteral)\>

Constructs a Data.LineString from the given LatLngs or LatLngLiterals.

Methods

[undefined](#Data.LineString.forEachLatLng)

forEachLatLng(callback)

**Parameters:** 

*   callback:  function([LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng))

**Return Value:**  None

[undefined](#Data.LineString.getArray)

getArray()

**Parameters:**  None

**Return Value:**  Array<[LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng)\>

Returns an array of the contained LatLngs. A new array is returned each time getArray() is called.

[undefined](#Data.LineString.getAt)

getAt(n)

**Parameters:** 

*   n:  number

**Return Value:**  [LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng)

Returns the n\-th contained LatLng.

[undefined](#Data.LineString.getLength)

getLength()

**Parameters:**  None

**Return Value:**  number

Returns the number of contained LatLngs.

[undefined](#Data.LineString.getType)

getType()

**Parameters:**  None

**Return Value:**  string

Returns the string "LineString".