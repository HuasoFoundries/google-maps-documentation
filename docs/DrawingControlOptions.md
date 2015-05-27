<h2 id="DrawingControlOptions">
google.maps.drawing.DrawingControlOptions
object specification
</h2><p>Options for the rendering of the drawing control.</p><h3>Library</h3><p>drawing</p><h3>Properties</h3><table summary="interface DrawingControlOptions - Properties" width="100%">
<thead>
<tr><th>Properties</th>
<th>Type</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>drawingModes</code></td>
<td><code>Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.drawing.OverlayType.md">OverlayType</a>&gt;</code></td>
<td>The drawing modes to display in the drawing control, in the order in which they are to be displayed. The hand icon (which corresponds to the null drawing mode) is always available and is not to be specified in this array. Defaults to <code>[MARKER, POLYLINE, RECTANGLE, CIRCLE, POLYGON]</code>.</td>
</tr>
<tr>
<td><code>position</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.ControlPosition.md">ControlPosition</a></code></td>
<td>Position id. Used to specify the position of the control on the map. The default position is <code>TOP_LEFT</code>.</td>
</tr>
</tbody>
</table>