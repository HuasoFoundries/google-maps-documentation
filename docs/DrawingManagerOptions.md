[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/DrawingManagerOptions.html)

DrawingManagerOptions interface
-------------------------------

google.maps.drawing.DrawingManagerOptions interface

Options for the drawing manager.

#### Library

drawing

Properties

[undefined](#DrawingManagerOptions.circleOptions)

**Type:**  [CircleOptions](/maps/documentation/javascript/reference/3.40/polygon#CircleOptions) optional

Options to apply to any new circles created with this DrawingManager. The center and radius properties are ignored, and the map property of a new circle is always set to the DrawingManager's map.

[undefined](#DrawingManagerOptions.drawingControl)

**Type:**  boolean optional

The enabled/disabled state of the drawing control. Defaults to true.

[undefined](#DrawingManagerOptions.drawingControlOptions)

**Type:**  [DrawingControlOptions](/maps/documentation/javascript/reference/3.40/drawing#DrawingControlOptions) optional

The display options for the drawing control.

[undefined](#DrawingManagerOptions.drawingMode)

**Type:**  [OverlayType](/maps/documentation/javascript/reference/3.40/drawing#OverlayType) optional

The DrawingManager's drawing mode, which defines the type of overlay to be added on the map. Accepted values are 'marker', 'polygon', 'polyline', 'rectangle', 'circle', or null. A drawing mode of null means that the user can interact with the map as normal, and clicks do not draw anything.

[undefined](#DrawingManagerOptions.map)

**Type:**  [Map](/maps/documentation/javascript/reference/3.40/map#Map) optional

The Map to which the DrawingManager is attached, which is the Map on which the overlays created will be placed.

[undefined](#DrawingManagerOptions.markerOptions)

**Type:**  [MarkerOptions](/maps/documentation/javascript/reference/3.40/marker#MarkerOptions) optional

Options to apply to any new markers created with this DrawingManager. The position property is ignored, and the map property of a new marker is always set to the DrawingManager's map.

[undefined](#DrawingManagerOptions.polygonOptions)

**Type:**  [PolygonOptions](/maps/documentation/javascript/reference/3.40/polygon#PolygonOptions) optional

Options to apply to any new polygons created with this DrawingManager. The paths property is ignored, and the map property of a new polygon is always set to the DrawingManager's map.

[undefined](#DrawingManagerOptions.polylineOptions)

**Type:**  [PolylineOptions](/maps/documentation/javascript/reference/3.40/polygon#PolylineOptions) optional

Options to apply to any new polylines created with this DrawingManager. The path property is ignored, and the map property of a new polyline is always set to the DrawingManager's map.

[undefined](#DrawingManagerOptions.rectangleOptions)

**Type:**  [RectangleOptions](/maps/documentation/javascript/reference/3.40/polygon#RectangleOptions) optional

Options to apply to any new rectangles created with this DrawingManager. The bounds property is ignored, and the map property of a new rectangle is always set to the DrawingManager's map.