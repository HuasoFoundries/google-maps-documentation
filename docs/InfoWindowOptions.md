[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/InfoWindowOptions.html)

InfoWindowOptions interface
---------------------------

google.maps.InfoWindowOptions interface

InfoWindowOptions object used to define the properties that can be set on a InfoWindow.

Properties

[undefined](#InfoWindowOptions.content)

**Type:**  string|Node optional

Content to display in the InfoWindow. This can be an HTML element, a plain-text string, or a string containing HTML. The InfoWindow will be sized according to the content. To set an explicit size for the content, set content to be a HTML element with that size.

[undefined](#InfoWindowOptions.disableAutoPan)

**Type:**  boolean optional

Disable auto-pan on open. By default, the InfoWindow will pan the map so that it is fully visible when it opens.

[undefined](#InfoWindowOptions.maxWidth)

**Type:**  number optional

Maximum width of the InfoWindow, regardless of content's width. This value is only considered if it is set before a call to open. To change the maximum width when changing content, call close, setOptions, and then open.

[undefined](#InfoWindowOptions.pixelOffset)

**Type:**  [Size](/maps/documentation/javascript/reference/3.40/coordinates#Size) optional

The offset, in pixels, of the tip of the info window from the point on the map at whose geographical coordinates the info window is anchored. If an InfoWindow is opened with an anchor, the pixelOffset will be calculated from the anchor's anchorPoint property.

[undefined](#InfoWindowOptions.position)

**Type:**  [LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng)|[LatLngLiteral](/maps/documentation/javascript/reference/3.40/coordinates#LatLngLiteral) optional

The LatLng at which to display this InfoWindow. If the InfoWindow is opened with an anchor, the anchor's position will be used instead.

[undefined](#InfoWindowOptions.zIndex)

**Type:**  number optional

All InfoWindows are displayed on the map in order of their zIndex, with higher values displaying in front of InfoWindows with lower values. By default, InfoWindows are displayed according to their latitude, with InfoWindows of lower latitudes appearing in front of InfoWindows at higher latitudes. InfoWindows are always displayed in front of markers.