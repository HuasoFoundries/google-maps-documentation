[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/Icon.html)

Icon interface
--------------

google.maps.Icon interface

A structure representing a Marker icon image.

Properties

[undefined](#Icon.anchor)

**Type:**  [Point](/maps/documentation/javascript/reference/3.40/coordinates#Point)

The position at which to anchor an image in correspondence to the location of the marker on the map. By default, the anchor is located along the center point of the bottom of the image.

[undefined](#Icon.labelOrigin)

**Type:**  [Point](/maps/documentation/javascript/reference/3.40/coordinates#Point)

The origin of the label relative to the top-left corner of the icon image, if a label is supplied by the marker. By default, the origin is located in the center point of the image.

[undefined](#Icon.origin)

**Type:**  [Point](/maps/documentation/javascript/reference/3.40/coordinates#Point)

The position of the image within a sprite, if any. By default, the origin is located at the top left corner of the image (0, 0).

[undefined](#Icon.scaledSize)

**Type:**  [Size](/maps/documentation/javascript/reference/3.40/coordinates#Size)

The size of the entire image after scaling, if any. Use this property to stretch/shrink an image or a sprite.

[undefined](#Icon.size)

**Type:**  [Size](/maps/documentation/javascript/reference/3.40/coordinates#Size)

The display size of the sprite or image. When using sprites, you must specify the sprite size. If the size is not provided, it will be set when the image loads.

[undefined](#Icon.url)

**Type:**  string

The URL of the image or sprite sheet.