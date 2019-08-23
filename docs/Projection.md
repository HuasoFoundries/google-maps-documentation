[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/Projection.html)


Projection interface
--------------------

google.maps.Projection interface

Methods

[fromLatLngToPoint](#Projection.fromLatLngToPoint)

fromLatLngToPoint(latLng\[, point\])

**Parameters:** 

*   latLng:  [LatLng](LatLng.md)
*   point:  [Point](Point.md) optional

**Return Value:**  [Point](Point.md) optional

Translates from the LatLng cylinder to the Point plane. This interface specifies a function which implements translation from given LatLng values to world coordinates on the map projection. The Maps API calls this method when it needs to plot locations on screen. Projection objects must implement this method, but may return null if the projection cannot calculate the Point.

[fromPointToLatLng](#Projection.fromPointToLatLng)

fromPointToLatLng(pixel\[, noWrap\])

**Parameters:** 

*   pixel:  [Point](Point.md)
*   noWrap:  boolean optional

**Return Value:**  [LatLng](LatLng.md) optional

This interface specifies a function which implements translation from world coordinates on a map projection to LatLng values. The Maps API calls this method when it needs to translate actions on screen to positions on the map. Projection objects must implement this method, but may return null if the projection cannot calculate the LatLng.