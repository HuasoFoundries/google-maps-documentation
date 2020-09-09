[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/KmlLayer.html)

KmlLayer class
--------------

google.maps.KmlLayer class

A KmlLayer adds geographic markup to the map from a KML, KMZ or GeoRSS file that is hosted on a publicly accessible web server. A KmlFeatureData object is provided for each feature when clicked.

This class extends [MVCObject](/maps/documentation/javascript/reference/3.40/event#MVCObject).

Constructor

[undefined](#KmlLayer.constructor)

KmlLayer(\[opts\])

**Parameters:** 

*   opts:  [KmlLayerOptions](/maps/documentation/javascript/reference/3.40/kml#KmlLayerOptions) optional

Creates a KmlLayer which renders the contents of the specified KML/KMZ file ([https://developers.google.com/kml/documentation/kmlreference](https://developers.google.com/kml/documentation/kmlreference)) or GeoRSS file ([http://www.georss.org](http://www.georss.org)).

Methods

[undefined](#KmlLayer.getDefaultViewport)

getDefaultViewport()

**Parameters:**  None

**Return Value:**  [LatLngBounds](/maps/documentation/javascript/reference/3.40/coordinates#LatLngBounds)

Get the default viewport for the layer being displayed.

[undefined](#KmlLayer.getMap)

getMap()

**Parameters:**  None

**Return Value:**  [Map](/maps/documentation/javascript/reference/3.40/map#Map)

Get the map on which the KML Layer is being rendered.

[undefined](#KmlLayer.getMetadata)

getMetadata()

**Parameters:**  None

**Return Value:**  [KmlLayerMetadata](/maps/documentation/javascript/reference/3.40/kml#KmlLayerMetadata)

Get the metadata associated with this layer, as specified in the layer markup.

[undefined](#KmlLayer.getStatus)

getStatus()

**Parameters:**  None

**Return Value:**  [KmlLayerStatus](/maps/documentation/javascript/reference/3.40/kml#KmlLayerStatus)

Get the status of the layer, set once the requested document has loaded.

[undefined](#KmlLayer.getUrl)

getUrl()

**Parameters:**  None

**Return Value:**  string

Gets the URL of the KML file being displayed.

[undefined](#KmlLayer.getZIndex)

getZIndex()

**Parameters:**  None

**Return Value:**  number

Gets the z-index of the KML Layer.

[undefined](#KmlLayer.setMap)

setMap(map)

**Parameters:** 

*   map:  [Map](/maps/documentation/javascript/reference/3.40/map#Map)

**Return Value:**  None

Renders the KML Layer on the specified map. If map is set to null, the layer is removed.

[undefined](#KmlLayer.setOptions)

setOptions(options)

**Parameters:** 

*   options:  [KmlLayerOptions](/maps/documentation/javascript/reference/3.40/kml#KmlLayerOptions)

**Return Value:**  None

[undefined](#KmlLayer.setUrl)

setUrl(url)

**Parameters:** 

*   url:  string

**Return Value:**  None

Sets the URL of the KML file to display.

[undefined](#KmlLayer.setZIndex)

setZIndex(zIndex)

**Parameters:** 

*   zIndex:  number

**Return Value:**  None

Sets the z-index of the KML Layer.

Events

[undefined](#KmlLayer.click)

function(kmlClickEvent)

**Arguments:** 

*   kmlClickEvent:  [KmlMouseEvent](/maps/documentation/javascript/reference/3.40/kml#KmlMouseEvent)

This event is fired when a feature in the layer is clicked.

[undefined](#KmlLayer.defaultviewport_changed)

function()

**Arguments:**  None

This event is fired when the KML layers default viewport has changed.

[undefined](#KmlLayer.status_changed)

function()

**Arguments:**  None

This event is fired when the KML layer has finished loading. At this point it is safe to read the status property to determine if the layer loaded successfully.