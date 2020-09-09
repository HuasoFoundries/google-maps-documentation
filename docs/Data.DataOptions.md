[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/Data.DataOptions.html)

Data.DataOptions interface
--------------------------

google.maps.Data.DataOptions interface

DataOptions object used to define the properties that a developer can set on a Data object.

Properties

[undefined](#Data.DataOptions.controlPosition)

**Type:**  [ControlPosition](/maps/documentation/javascript/reference/3.40/control#ControlPosition) optional

The position of the drawing controls on the map. The default position is TOP\_LEFT.

[undefined](#Data.DataOptions.controls)

**Type:**  Array<string> optional

Describes which drawing modes are available for the user to select, in the order they are displayed. This should not include the null drawing mode, which is added by default. If null, drawing controls are disabled and not displayed. Defaults to null. Possible drawing modes are "Point", "LineString" or "Polygon".

[undefined](#Data.DataOptions.drawingMode)

**Type:**  string optional

The current drawing mode of the given Data layer. A drawing mode of null means that the user can interact with the map as normal, and clicks do not draw anything. Defaults to null. Possible drawing modes are null, "Point", "LineString" or "Polygon".

[undefined](#Data.DataOptions.featureFactory)

**Type:**  function([Data.Geometry](Data.md)): [Data.Feature](Data.md) optional

When drawing is enabled and a user draws a Geometry (a Point, Line String or Polygon), this function is called with that Geometry and should return a Feature that is to be added to the Data layer. If a featureFactory is not supplied, a Feature with no id and no properties will be created from that Geometry instead. Defaults to null.

[undefined](#Data.DataOptions.map)

**Type:**  [Map](/maps/documentation/javascript/reference/3.40/map#Map)

Map on which to display the features in the collection.

[undefined](#Data.DataOptions.style)

**Type:**  [Data.StylingFunction](Data.md)|[Data.StyleOptions](Data.md) optional

Style for all features in the collection. For more details, see the [setStyle()](#Data) method above.