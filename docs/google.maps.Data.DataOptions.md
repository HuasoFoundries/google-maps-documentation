<h2 id="Data.DataOptions">
google.maps.Data.DataOptions
object specification
</h2><p>DataOptions object used to define the properties that a developer can set on a <code>Data</code> object.</p><h3>Properties</h3><table summary="interface Data.DataOptions - Properties" width="100%">
<thead>
<tr><th>Properties</th>
<th>Type</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>controlPosition</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.ControlPosition.md">ControlPosition</a></code></td>
<td>The position of the drawing controls on the map. The default position is TOP_LEFT.</td>
</tr>
<tr>
<td><code>controls</code></td>
<td><code>Array&lt;string&gt;</code></td>
<td>Describes which drawing modes are available for the user to select, in the order they are displayed. This should not include the null drawing mode, which is added by default. If null, drawing controls are disabled and not displayed. Defaults to null. Possible drawing modes are <code>"Point"</code>, <code>"LineString"</code> or <code>"Polygon"</code>.</td>
</tr>
<tr>
<td><code>drawingMode</code></td>
<td><code>string</code></td>
<td>The current drawing mode of the given Data layer. A drawing mode of null means that the user can interact with the map as normal, and clicks do not draw anything. Defaults to null. Possible drawing modes are null, <code>"Point"</code>, <code>"LineString"</code> or <code>"Polygon"</code>.</td>
</tr>
<tr>
<td><code>featureFactory</code></td>
<td><code>function(<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Data.Geometry.md">Data.Geometry</a>): <a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Data.Feature.md">Data.Feature</a></code></td>
<td>When drawing is enabled and a user draws a Geometry (a Point, Line String or Polygon), this function is called with that Geometry and should return a Feature that is to be added to the Data layer. If a featureFactory is not supplied, a Feature with no id and no properties will be created from that Geometry instead. Defaults to null.</td>
</tr>
<tr>
<td><code>map</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Map.md">Map</a></code></td>
<td>Map on which to display the features in the collection.</td>
</tr>
<tr>
<td><code>style</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Data.StylingFunction.md">Data.StylingFunction</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Data.StyleOptions.md">Data.StyleOptions</a></code></td>
<td>Style for all features in the collection. For more details, see the <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Data.md">setStyle()</a></code> method above.</td>
</tr>
</tbody>
</table>