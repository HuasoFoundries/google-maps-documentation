[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/DrawingManager.html)

DrawingManager class
--------------------

google.maps.drawing.DrawingManager class

Allows users to draw markers, polygons, polylines, rectangles, and circles on the map. The DrawingManager's drawing mode defines the type of overlay that will be created by the user. Adds a control to the map, allowing the user to switch drawing mode.

This class extends [MVCObject](/maps/documentation/javascript/reference/3.40/event#MVCObject).

#### Library

drawing

Constructor

[undefined](#DrawingManager.constructor)

DrawingManager(\[options\])

**Parameters:** 

*   options:  [DrawingManagerOptions](/maps/documentation/javascript/reference/3.40/drawing#DrawingManagerOptions) optional

Creates a DrawingManager that allows users to draw overlays on the map, and switch between the type of overlay to be drawn with a drawing control.

Methods

[undefined](#DrawingManager.getDrawingMode)

getDrawingMode()

**Parameters:**  None

**Return Value:**  [OverlayType](/maps/documentation/javascript/reference/3.40/drawing#OverlayType) optional

Returns the DrawingManager's drawing mode.

[undefined](#DrawingManager.getMap)

getMap()

**Parameters:**  None

**Return Value:**  [Map](/maps/documentation/javascript/reference/3.40/map#Map)

Returns the Map to which the DrawingManager is attached, which is the Map on which the overlays created will be placed.

[undefined](#DrawingManager.setDrawingMode)

setDrawingMode(drawingMode)

**Parameters:** 

*   drawingMode:  [OverlayType](/maps/documentation/javascript/reference/3.40/drawing#OverlayType) optional

**Return Value:**  None

Changes the DrawingManager's drawing mode, which defines the type of overlay to be added on the map. Accepted values are 'marker', 'polygon', 'polyline', 'rectangle', 'circle', or null. A drawing mode of null means that the user can interact with the map as normal, and clicks do not draw anything.

[undefined](#DrawingManager.setMap)

setMap(map)

**Parameters:** 

*   map:  [Map](/maps/documentation/javascript/reference/3.40/map#Map)

**Return Value:**  None

Attaches the DrawingManager object to the specified Map.

[undefined](#DrawingManager.setOptions)

setOptions(options)

**Parameters:** 

*   options:  [DrawingManagerOptions](/maps/documentation/javascript/reference/3.40/drawing#DrawingManagerOptions)

**Return Value:**  None

Sets the DrawingManager's options.

Events

[undefined](#DrawingManager.circlecomplete)

function(circle)

**Arguments:** 

*   circle:  [Circle](/maps/documentation/javascript/reference/3.40/polygon#Circle)

This event is fired when the user has finished drawing a circle.

[undefined](#DrawingManager.markercomplete)

function(marker)

**Arguments:** 

*   marker:  [Marker](/maps/documentation/javascript/reference/3.40/marker#Marker)

This event is fired when the user has finished drawing a marker.

[undefined](#DrawingManager.overlaycomplete)

function(event)

**Arguments:** 

*   event:  [OverlayCompleteEvent](/maps/documentation/javascript/reference/3.40/drawing#OverlayCompleteEvent)

This event is fired when the user has finished drawing an overlay of any type.

[undefined](#DrawingManager.polygoncomplete)

function(polygon)

**Arguments:** 

*   polygon:  [Polygon](/maps/documentation/javascript/reference/3.40/polygon#Polygon)

This event is fired when the user has finished drawing a polygon.

[undefined](#DrawingManager.polylinecomplete)

function(polyline)

**Arguments:** 

*   polyline:  [Polyline](/maps/documentation/javascript/reference/3.40/polygon#Polyline)

This event is fired when the user has finished drawing a polyline.

[undefined](#DrawingManager.rectanglecomplete)

function(rectangle)

**Arguments:** 

*   rectangle:  [Rectangle](/maps/documentation/javascript/reference/3.40/polygon#Rectangle)

This event is fired when the user has finished drawing a rectangle.