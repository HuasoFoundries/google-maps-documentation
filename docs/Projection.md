[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/Projection.html)

Projection interface
--------------------

google.maps.Projection interface

Methods

[undefined](#Projection.fromLatLngToPoint)

fromLatLngToPoint(latLng\[, point\])

**Parameters:** 

*   latLng:  [LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng)
*   point:  [Point](/maps/documentation/javascript/reference/3.40/coordinates#Point) optional

**Return Value:**  [Point](/maps/documentation/javascript/reference/3.40/coordinates#Point) optional

Translates from the LatLng cylinder to the Point plane. This interface specifies a function which implements translation from given LatLng values to world coordinates on the map projection. The Maps API calls this method when it needs to plot locations on screen. Projection objects must implement this method, but may return null if the projection cannot calculate the Point.

[undefined](#Projection.fromPointToLatLng)

fromPointToLatLng(pixel\[, noWrap\])

**Parameters:** 

*   pixel:  [Point](/maps/documentation/javascript/reference/3.40/coordinates#Point)
*   noWrap:  boolean optional

**Return Value:**  [LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng) optional

This interface specifies a function which implements translation from world coordinates on a map projection to LatLng values. The Maps API calls this method when it needs to translate actions on screen to positions on the map. Projection objects must implement this method, but may return null if the projection cannot calculate the LatLng.