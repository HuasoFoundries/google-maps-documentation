
<h2 id="Data.DataOptions">Data.DataOptions interface</h2>
<p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">Data.DataOptions</span></code>
interface
</p>
<p>DataOptions object used to define the properties that a developer can set on a <code>Data</code> object.</p>
<div class="devsite-table-wrapper"><table class="properties responsive" summary="interface Data.DataOptions - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="Data.DataOptions.controlPosition">
<td itemprop="property"><code><a class="secret-link" href="#Data.DataOptions.controlPosition"><span>controlPosition</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="ControlPosition.md">ControlPosition</a> <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The position of the drawing controls on the map. The default position is TOP_LEFT.</div></td>
</tr>
<tr id="Data.DataOptions.controls">
<td itemprop="property"><code><a class="secret-link" href="#Data.DataOptions.controls"><span>controls</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>Array&lt;string&gt; <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Describes which drawing modes are available for the user to select, in the order they are displayed. This should not include the null drawing mode, which is added by default. If null, drawing controls are disabled and not displayed. Defaults to null. Possible drawing modes are <code>"Point"</code>, <code>"LineString"</code> or <code>"Polygon"</code>.</div></td>
</tr>
<tr id="Data.DataOptions.drawingMode">
<td itemprop="property"><code><a class="secret-link" href="#Data.DataOptions.drawingMode"><span>drawingMode</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The current drawing mode of the given Data layer. A drawing mode of null means that the user can interact with the map as normal, and clicks do not draw anything. Defaults to null. Possible drawing modes are null, <code>"Point"</code>, <code>"LineString"</code> or <code>"Polygon"</code>.</div></td>
</tr>
<tr id="Data.DataOptions.featureFactory">
<td itemprop="property"><code><a class="secret-link" href="#Data.DataOptions.featureFactory"><span>featureFactory</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>function(<a href="Data.Geometry.md">Data.Geometry</a>): <a href="Data.Feature.md">Data.Feature</a> <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">When drawing is enabled and a user draws a Geometry (a Point, Line String or Polygon), this function is called with that Geometry and should return a Feature that is to be added to the Data layer. If a featureFactory is not supplied, a Feature with no id and no properties will be created from that Geometry instead. Defaults to null.</div></td>
</tr>
<tr id="Data.DataOptions.map">
<td itemprop="property"><code><a class="secret-link" href="#Data.DataOptions.map"><span>map</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="Map.md">Map</a></code></div>
<div class="desc">Map on which to display the features in the collection.</div></td>
</tr>
<tr id="Data.DataOptions.style">
<td itemprop="property"><code><a class="secret-link" href="#Data.DataOptions.style"><span>style</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="Data.StylingFunction.md">Data.StylingFunction</a>|<a href="Data.StyleOptions.md">Data.StyleOptions</a> <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Style for all features in the collection. For more details, see the <code><a href="Data.md">setStyle()</a></code> method above.</div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
