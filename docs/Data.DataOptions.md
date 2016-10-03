<h2 id="Data.DataOptions"> Data.DataOptions object specification </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">Data.DataOptions</span></code>
object specification
</p><p>DataOptions object used to define the properties that a developer can set on a <code>Data</code> object.</p><div class="devsite-table-wrapper"><table class="properties responsive" summary="record Data.DataOptions - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>controlPosition</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/ControlPosition.md">ControlPosition</a></code></div>
<div class="desc">The position of the drawing controls on the map. The default position is TOP_LEFT.</div></td>
</tr>
<tr>
<td><code><span>controls</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>Array&lt;string&gt;</code></div>
<div class="desc">Describes which drawing modes are available for the user to select, in the order they are displayed. This should not include the null drawing mode, which is added by default. If null, drawing controls are disabled and not displayed. Defaults to null. Possible drawing modes are <code>"Point"</code>, <code>"LineString"</code> or <code>"Polygon"</code>.</div></td>
</tr>
<tr>
<td><code><span>drawingMode</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">The current drawing mode of the given Data layer. A drawing mode of null means that the user can interact with the map as normal, and clicks do not draw anything. Defaults to null. Possible drawing modes are null, <code>"Point"</code>, <code>"LineString"</code> or <code>"Polygon"</code>.</div></td>
</tr>
<tr>
<td><code><span>featureFactory</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>function(<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Data.Geometry.md">Data.Geometry</a>): <a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Data.Feature.md">Data.Feature</a></code></div>
<div class="desc">When drawing is enabled and a user draws a Geometry (a Point, Line String or Polygon), this function is called with that Geometry and should return a Feature that is to be added to the Data layer. If a featureFactory is not supplied, a Feature with no id and no properties will be created from that Geometry instead. Defaults to null.</div></td>
</tr>
<tr>
<td><code><span>map</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Map.md">Map</a></code></div>
<div class="desc">Map on which to display the features in the collection.</div></td>
</tr>
<tr>
<td><code><span>style</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Data.StylingFunction.md">Data.StylingFunction</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Data.StyleOptions.md">Data.StyleOptions</a></code></div>
<div class="desc">Style for all features in the collection. For more details, see the <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Data.md">setStyle()</a></code> method above.</div></td>
</tr>
</tbody>
</table></div>