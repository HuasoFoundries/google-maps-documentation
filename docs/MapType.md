[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/MapType.html)

MapType interface
-----------------

google.maps.MapType interface

This interface defines the map type, and is typically used for custom map types. Immutable.

Methods

[undefined](#MapType.getTile)

getTile(tileCoord, zoom, ownerDocument)

**Parameters:** 

*   tileCoord:  [Point](/maps/documentation/javascript/reference/3.40/coordinates#Point)
*   zoom:  number
*   ownerDocument:  Document

**Return Value:**  Node

Returns a tile for the given tile coordinate (x, y) and zoom level. This tile will be appended to the given ownerDocument. Not available for base map types.

[undefined](#MapType.releaseTile)

releaseTile(tile)

**Parameters:** 

*   tile:  Node

**Return Value:**  None

Releases the given tile, performing any necessary cleanup. The provided tile will have already been removed from the document. Optional.

Properties

[undefined](#MapType.alt)

**Type:**  string optional

Alt text to display when this MapType's button is hovered over in the MapTypeControl. Optional.

[undefined](#MapType.maxZoom)

**Type:**  number

The maximum zoom level for the map when displaying this MapType. Required for base MapTypes, ignored for overlay MapTypes.

[undefined](#MapType.minZoom)

**Type:**  number

The minimum zoom level for the map when displaying this MapType. Optional; defaults to 0.

[undefined](#MapType.name)

**Type:**  string optional

Name to display in the MapTypeControl. Optional.

[undefined](#MapType.projection)

**Type:**  [Projection](/maps/documentation/javascript/reference/3.40/image-overlay#Projection) optional

The Projection used to render this MapType. Optional; defaults to Mercator.

[undefined](#MapType.radius)

**Type:**  number

Radius of the planet for the map, in meters. Optional; defaults to Earth's equatorial radius of 6378137 meters.

[undefined](#MapType.tileSize)

**Type:**  [Size](/maps/documentation/javascript/reference/3.40/coordinates#Size)

The dimensions of each tile. Required.