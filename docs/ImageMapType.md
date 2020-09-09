[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/ImageMapType.html)

ImageMapType class
------------------

google.maps.ImageMapType class

This class implements the MapType interface and is provided for rendering image tiles.

This class extends [MVCObject](/maps/documentation/javascript/reference/3.40/event#MVCObject).

This class implements [MapType](/maps/documentation/javascript/reference/3.40/image-overlay#MapType).

Constructor

[undefined](#ImageMapType.constructor)

ImageMapType(opts)

**Parameters:** 

*   opts:  [ImageMapTypeOptions](/maps/documentation/javascript/reference/3.40/image-overlay#ImageMapTypeOptions)

Constructs an ImageMapType using the provided ImageMapTypeOptions

Methods

[undefined](#ImageMapType.getOpacity)

getOpacity()

**Parameters:**  None

**Return Value:**  number

Returns the opacity level (0 (transparent) to 1.0) of the ImageMapType tiles.

[undefined](#ImageMapType.getTile)

getTile(tileCoord, zoom, ownerDocument)

**Parameters:** 

*   tileCoord:  [Point](/maps/documentation/javascript/reference/3.40/coordinates#Point)
*   zoom:  number
*   ownerDocument:  Document

**Return Value:**  Node

[undefined](#ImageMapType.releaseTile)

releaseTile(tileDiv)

**Parameters:** 

*   tileDiv:  Node

**Return Value:**  None

[undefined](#ImageMapType.setOpacity)

setOpacity(opacity)

**Parameters:** 

*   opacity:  number

**Return Value:**  None

Sets the opacity level (0 (transparent) to 1.0) of the ImageMapType tiles.

Properties

[undefined](#ImageMapType.alt)

**Type:**  string optional

[undefined](#ImageMapType.maxZoom)

**Type:**  number

[undefined](#ImageMapType.minZoom)

**Type:**  number

[undefined](#ImageMapType.name)

**Type:**  string optional

[undefined](#ImageMapType.projection)

**Type:**  [Projection](/maps/documentation/javascript/reference/3.40/image-overlay#Projection)

[undefined](#ImageMapType.radius)

**Type:**  number

[undefined](#ImageMapType.tileSize)

**Type:**  [Size](/maps/documentation/javascript/reference/3.40/coordinates#Size)

Events

[undefined](#ImageMapType.tilesloaded)

function()

**Arguments:**  None

This event is fired when the visible tiles have finished loading.