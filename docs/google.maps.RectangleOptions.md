<h2 id="RectangleOptions">
google.maps.RectangleOptions
object specification
</h2><h3>Properties</h3><table summary="interface RectangleOptions - Properties" width="100%">
<thead>
<tr><th>Properties</th>
<th>Type</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>bounds</code></td>
<td><code><a href="#LatLngBounds">LatLngBounds</a></code></td>
<td>The bounds.</td>
</tr>
<tr>
<td><code>clickable</code></td>
<td><code>boolean</code></td>
<td>Indicates whether this <code>Rectangle</code> handles mouse events. Defaults to <code>true</code>.</td>
</tr>
<tr>
<td><code>draggable</code></td>
<td><code>boolean</code></td>
<td>If set to true, the user can drag this rectangle over the map. Defaults to <code>false</code>.</td>
</tr>
<tr>
<td><code>editable</code></td>
<td><code>boolean</code></td>
<td>If set to true, the user can edit this rectangle by dragging the control points shown at the corners and on each edge. Defaults to <code>false</code>.</td>
</tr>
<tr>
<td><code>fillColor</code></td>
<td><code>string</code></td>
<td>The fill color. All CSS3 colors are supported except for extended named colors.</td>
</tr>
<tr>
<td><code>fillOpacity</code></td>
<td><code>number</code></td>
<td>The fill opacity between 0.0 and 1.0</td>
</tr>
<tr>
<td><code>map</code></td>
<td><code><a href="#Map">Map</a></code></td>
<td>Map on which to display Rectangle.</td>
</tr>
<tr>
<td><code>strokeColor</code></td>
<td><code>string</code></td>
<td>The stroke color. All CSS3 colors are supported except for extended named colors.</td>
</tr>
<tr>
<td><code>strokeOpacity</code></td>
<td><code>number</code></td>
<td>The stroke opacity between 0.0 and 1.0</td>
</tr>
<tr>
<td><code>strokePosition</code></td>
<td><code><a href="#StrokePosition">StrokePosition</a></code></td>
<td>The stroke position. Defaults to CENTER. This property is not supported on Internet Explorer 8 and earlier.</td>
</tr>
<tr>
<td><code>strokeWeight</code></td>
<td><code>number</code></td>
<td>The stroke width in pixels.</td>
</tr>
<tr>
<td><code>visible</code></td>
<td><code>boolean</code></td>
<td>Whether this rectangle is visible on the map. Defaults to <code>true</code>.</td>
</tr>
<tr>
<td><code>zIndex</code></td>
<td><code>number</code></td>
<td>The zIndex compared to other polys.</td>
</tr>
</tbody>
</table>