[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/ImageMapTypeOptions.html)

ImageMapTypeOptions interface
-----------------------------

google.maps.ImageMapTypeOptions interface

This class is used to create a MapType that renders image tiles.

Properties

[undefined](#ImageMapTypeOptions.alt)

**Type:**  string optional

Alt text to display when this MapType's button is hovered over in the MapTypeControl.

[undefined](#ImageMapTypeOptions.getTileUrl)

**Type:**  function([Point](/maps/documentation/javascript/reference/3.40/coordinates#Point), number): string optional

Returns a string (URL) for given tile coordinate (x, y) and zoom level.

[undefined](#ImageMapTypeOptions.maxZoom)

**Type:**  number optional

The maximum zoom level for the map when displaying this MapType.

[undefined](#ImageMapTypeOptions.minZoom)

**Type:**  number optional

The minimum zoom level for the map when displaying this MapType. Optional.

[undefined](#ImageMapTypeOptions.name)

**Type:**  string optional

Name to display in the MapTypeControl.

[undefined](#ImageMapTypeOptions.opacity)

**Type:**  number optional

The opacity to apply to the tiles. The opacity should be specified as a float value between 0 and 1.0, where 0 is fully transparent and 1 is fully opaque.

[undefined](#ImageMapTypeOptions.tileSize)

**Type:**  [Size](/maps/documentation/javascript/reference/3.40/coordinates#Size) optional

The tile size.