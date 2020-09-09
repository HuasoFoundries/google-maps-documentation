[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/StyledMapType.html)

StyledMapType class
-------------------

google.maps.StyledMapType class

Creates a MapType with a custom style.

This class extends [MVCObject](/maps/documentation/javascript/reference/3.40/event#MVCObject).

This class implements [MapType](/maps/documentation/javascript/reference/3.40/image-overlay#MapType).

Constructor

[undefined](#StyledMapType.constructor)

StyledMapType(styles\[, options\])

**Parameters:** 

*   styles:  Array<[MapTypeStyle](/maps/documentation/javascript/reference/3.40/map#MapTypeStyle)\>
*   options:  [StyledMapTypeOptions](/maps/documentation/javascript/reference/3.40/image-overlay#StyledMapTypeOptions) optional

Creates a styled MapType with the specified options. The StyledMapType takes an array of MapTypeStyles, where each MapTypeStyle is applied to the map consecutively. A later MapTypeStyle that applies the same MapTypeStylers to the same selectors as an earlier MapTypeStyle will override the earlier MapTypeStyle.

Methods

[undefined](#StyledMapType.getTile)

getTile(tileCoord, zoom, ownerDocument)

**Parameters:** 

*   tileCoord:  [Point](/maps/documentation/javascript/reference/3.40/coordinates#Point)
*   zoom:  number
*   ownerDocument:  Document

**Return Value:**  Node

[undefined](#StyledMapType.releaseTile)

releaseTile(tile)

**Parameters:** 

*   tile:  Node

**Return Value:**  None

Properties

[undefined](#StyledMapType.alt)

**Type:**  string

[undefined](#StyledMapType.maxZoom)

**Type:**  number

[undefined](#StyledMapType.minZoom)

**Type:**  number

[undefined](#StyledMapType.name)

**Type:**  string

[undefined](#StyledMapType.projection)

**Type:**  [Projection](/maps/documentation/javascript/reference/3.40/image-overlay#Projection)

[undefined](#StyledMapType.radius)

**Type:**  number

[undefined](#StyledMapType.tileSize)

**Type:**  [Size](/maps/documentation/javascript/reference/3.40/coordinates#Size)