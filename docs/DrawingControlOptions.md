[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/DrawingControlOptions.html)

DrawingControlOptions interface
-------------------------------

google.maps.drawing.DrawingControlOptions interface

Options for the rendering of the drawing control.

#### Library

drawing

Properties

[undefined](#DrawingControlOptions.drawingModes)

**Type:**  Array<[OverlayType](/maps/documentation/javascript/reference/3.40/drawing#OverlayType)\> optional

The drawing modes to display in the drawing control, in the order in which they are to be displayed. The hand icon (which corresponds to the null drawing mode) is always available and is not to be specified in this array. Defaults to \['marker', 'polyline', 'rectangle', 'circle', 'polygon'\].

[undefined](#DrawingControlOptions.position)

**Type:**  [ControlPosition](/maps/documentation/javascript/reference/3.40/control#ControlPosition) optional

Position id. Used to specify the position of the control on the map. The default position is TOP\_LEFT.