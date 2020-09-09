[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/encoding.html)

encoding namespace
------------------

google.maps.geometry.encoding namespace

Utilities for polyline encoding and decoding.

#### Library

geometry

Static Methods

[undefined](#encoding.decodePath)

decodePath(encodedPath)

**Parameters:** 

*   encodedPath:  string

**Return Value:**  Array<[LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng)\>

Decodes an encoded path string into a sequence of LatLngs.

[undefined](#encoding.encodePath)

encodePath(path)

**Parameters:** 

*   path:  Array<[LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng)\>|[MVCArray](/maps/documentation/javascript/reference/3.40/event#MVCArray)<[LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng)\>

**Return Value:**  string

Encodes a sequence of LatLngs into an encoded path string.