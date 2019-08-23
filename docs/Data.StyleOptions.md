[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/Data.StyleOptions.html)


Data.StyleOptions interface
---------------------------

google.maps.Data.StyleOptions interface

These options specify the way a Feature should appear when displayed on a map.

Properties

[clickable](#Data.StyleOptions.clickable)

**Type:**  boolean optional

If true, the marker receives mouse and touch events. Default value is true.

[cursor](#Data.StyleOptions.cursor)

**Type:**  string optional

Mouse cursor to show on hover. Only applies to point geometries.

[draggable](#Data.StyleOptions.draggable)

**Type:**  boolean optional

If true, the object can be dragged across the map and the underlying feature will have its geometry updated. Default value is false.

[editable](#Data.StyleOptions.editable)

**Type:**  boolean optional

If true, the object can be edited by dragging control points and the underlying feature will have its geometry updated. Only applies to LineString and Polygon geometries. Default value is false.

[fillColor](#Data.StyleOptions.fillColor)

**Type:**  string optional

The fill color. All CSS3 colors are supported except for extended named colors. Only applies to polygon geometries.

[fillOpacity](#Data.StyleOptions.fillOpacity)

**Type:**  number optional

The fill opacity between 0.0 and 1.0. Only applies to polygon geometries.

[icon](#Data.StyleOptions.icon)

**Type:**  string|[Icon](Icon.md)|[Symbol](Symbol.md) optional

Icon for the foreground. If a string is provided, it is treated as though it were an Icon with the string as url. Only applies to point geometries.

[shape](#Data.StyleOptions.shape)

**Type:**  [MarkerShape](MarkerShape.md) optional

Defines the image map used for hit detection. Only applies to point geometries.

[strokeColor](#Data.StyleOptions.strokeColor)

**Type:**  string optional

The stroke color. All CSS3 colors are supported except for extended named colors. Only applies to line and polygon geometries.

[strokeOpacity](#Data.StyleOptions.strokeOpacity)

**Type:**  number optional

The stroke opacity between 0.0 and 1.0. Only applies to line and polygon geometries.

[strokeWeight](#Data.StyleOptions.strokeWeight)

**Type:**  number optional

The stroke width in pixels. Only applies to line and polygon geometries.

[title](#Data.StyleOptions.title)

**Type:**  string optional

Rollover text. Only applies to point geometries.

[visible](#Data.StyleOptions.visible)

**Type:**  boolean optional

Whether the feature is visible. Defaults to true.

[zIndex](#Data.StyleOptions.zIndex)

**Type:**  number optional

All features are displayed on the map in order of their zIndex, with higher values displaying in front of features with lower values. Markers are always displayed in front of line-strings and polygons.