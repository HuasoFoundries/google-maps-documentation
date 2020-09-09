[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/Data.LinearRing.html)

Data.LinearRing class
---------------------

google.maps.Data.LinearRing class

A LinearRing geometry contains a number of LatLngs, representing a closed LineString. There is no need to make the first LatLng equal to the last LatLng. The LinearRing is closed implicitly.

This class implements [Data.Geometry](Data.md).

Constructor

[undefined](#Data.LinearRing.constructor)

Data.LinearRing(elements)

**Parameters:** 

*   elements:  Array<[LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng)|[LatLngLiteral](/maps/documentation/javascript/reference/3.40/coordinates#LatLngLiteral)\>

Constructs a Data.LinearRing from the given LatLngs or LatLngLiterals.

Methods

[undefined](#Data.LinearRing.forEachLatLng)

forEachLatLng(callback)

**Parameters:** 

*   callback:  function([LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng))

**Return Value:**  None

[undefined](#Data.LinearRing.getArray)

getArray()

**Parameters:**  None

**Return Value:**  Array<[LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng)\>

Returns an array of the contained LatLngs. A new array is returned each time getArray() is called.

[undefined](#Data.LinearRing.getAt)

getAt(n)

**Parameters:** 

*   n:  number

**Return Value:**  [LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng)

Returns the n\-th contained LatLng.

[undefined](#Data.LinearRing.getLength)

getLength()

**Parameters:**  None

**Return Value:**  number

Returns the number of contained LatLngs.

[undefined](#Data.LinearRing.getType)

getType()

**Parameters:**  None

**Return Value:**  string

Returns the string "LinearRing".