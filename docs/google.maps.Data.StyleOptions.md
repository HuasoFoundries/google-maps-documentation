<h2 id="Data.StyleOptions">
google.maps.Data.StyleOptions
object specification
</h2><p>These options specify the way a Feature should appear when displayed on a map.</p><h3>Properties</h3><table summary="interface Data.StyleOptions - Properties" width="100%">
<thead>
<tr><th>Properties</th>
<th>Type</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>clickable</code></td>
<td><code>boolean</code></td>
<td>If <code>true</code>, the marker receives mouse and touch events. Default value is <code>true</code>.</td>
</tr>
<tr>
<td><code>cursor</code></td>
<td><code>string</code></td>
<td>Mouse cursor to show on hover. Only applies to point geometries.</td>
</tr>
<tr>
<td><code>draggable</code></td>
<td><code>boolean</code></td>
<td>If <code>true</code>, the object can be dragged across the map and the underlying feature will have its geometry updated. Default value is <code>false</code>.</td>
</tr>
<tr>
<td><code>editable</code></td>
<td><code>boolean</code></td>
<td>If <code>true</code>, the object can be edited by dragging control points and the underlying feature will have its geometry updated. Only applies to LineString and Polygon geometries. Default value is <code>false</code>.</td>
</tr>
<tr>
<td><code>fillColor</code></td>
<td><code>string</code></td>
<td>The fill color. All CSS3 colors are supported except for extended named colors. Only applies to polygon geometries.</td>
</tr>
<tr>
<td><code>fillOpacity</code></td>
<td><code>number</code></td>
<td>The fill opacity between 0.0 and 1.0. Only applies to polygon geometries.</td>
</tr>
<tr>
<td><code>icon</code></td>
<td><code>string|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Icon.md">Icon</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Symbol.md">Symbol</a></code></td>
<td>Icon for the foreground. If a string is provided, it is treated as though it were an <code>Icon</code> with the string as <code>url</code>. Only applies to point geometries.</td>
</tr>
<tr>
<td><code>shape</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.MarkerShape.md">MarkerShape</a></code></td>
<td>Defines the image map used for hit detection. Only applies to point geometries.</td>
</tr>
<tr>
<td><code>strokeColor</code></td>
<td><code>string</code></td>
<td>The stroke color. All CSS3 colors are supported except for extended named colors. Only applies to line and polygon geometries.</td>
</tr>
<tr>
<td><code>strokeOpacity</code></td>
<td><code>number</code></td>
<td>The stroke opacity between 0.0 and 1.0. Only applies to line and polygon geometries.</td>
</tr>
<tr>
<td><code>strokeWeight</code></td>
<td><code>number</code></td>
<td>The stroke width in pixels. Only applies to line and polygon geometries.</td>
</tr>
<tr>
<td><code>title</code></td>
<td><code>string</code></td>
<td>Rollover text. Only applies to point geometries.</td>
</tr>
<tr>
<td><code>visible</code></td>
<td><code>boolean</code></td>
<td>Whether the feature is visible. Defaults to <code>true</code>.</td>
</tr>
<tr>
<td><code>zIndex</code></td>
<td><code>number</code></td>
<td>All features are displayed on the map in order of their zIndex, with higher values displaying in front of features with lower values. Markers are always displayed in front of line-strings and polygons.</td>
</tr>
</tbody>
</table>