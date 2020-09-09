[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/KmlLayerOptions.html)

KmlLayerOptions interface
-------------------------

google.maps.KmlLayerOptions interface

This object defines the properties that can be set on a KmlLayer object.

Properties

[undefined](#KmlLayerOptions.clickable)

**Type:**  boolean optional

If true, the layer receives mouse events. Default value is true.

[undefined](#KmlLayerOptions.map)

**Type:**  [Map](/maps/documentation/javascript/reference/3.40/map#Map) optional

The map on which to display the layer.

[undefined](#KmlLayerOptions.preserveViewport)

**Type:**  boolean optional

By default, the input map is centered and zoomed to the bounding box of the contents of the layer. If this option is set to true, the viewport is left unchanged, unless the map's center and zoom were never set.

[undefined](#KmlLayerOptions.screenOverlays)

**Type:**  boolean optional

Whether to render the screen overlays. Default true.

[undefined](#KmlLayerOptions.suppressInfoWindows)

**Type:**  boolean optional

Suppress the rendering of info windows when layer features are clicked.

[undefined](#KmlLayerOptions.url)

**Type:**  string optional

The URL of the KML document to display.

[undefined](#KmlLayerOptions.zIndex)

**Type:**  number optional

The z-index of the layer.