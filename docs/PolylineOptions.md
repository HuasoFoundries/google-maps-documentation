
<devsite-heading text=" PolylineOptions interface" for="PolylineOptions" level="h2" link="" toc="" back-to-top=""><h2 id="PolylineOptions" is-upgraded="">PolylineOptions interface</h2></devsite-heading>
<p>
<code translate="no" dir="ltr"><span itemprop="path">google.maps</span>.<span itemprop="name">PolylineOptions</span></code>
interface
</p>
<p>PolylineOptions object used to define the properties that can be set on a Polyline.</p>
<div class="devsite-table-wrapper"><table class="properties responsive" summary="interface PolylineOptions - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="PolylineOptions.clickable">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#PolylineOptions.clickable"><span>clickable</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">boolean <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Indicates whether this <code translate="no" dir="ltr">Polyline</code> handles mouse events. Defaults to <code translate="no" dir="ltr">true</code>.</div></td>
</tr>
<tr id="PolylineOptions.draggable">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#PolylineOptions.draggable"><span>draggable</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">boolean <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">If set to true, the user can drag this shape over the map. The <code translate="no" dir="ltr">geodesic</code> property defines the mode of dragging. Defaults to <code translate="no" dir="ltr">false</code>.</div></td>
</tr>
<tr id="PolylineOptions.editable">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#PolylineOptions.editable"><span>editable</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">boolean <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">If set to true, the user can edit this shape by dragging the control points shown at the vertices and on each segment. Defaults to <code translate="no" dir="ltr">false</code>.</div></td>
</tr>
<tr id="PolylineOptions.geodesic">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#PolylineOptions.geodesic"><span>geodesic</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">boolean <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">When true, edges of the polygon are interpreted as geodesic and will follow the curvature of the Earth. When false, edges of the polygon are rendered as straight lines in screen space. Note that the shape of a geodesic polygon may appear to change when dragged, as the dimensions are maintained relative to the surface of the earth. Defaults to <code translate="no" dir="ltr">false</code>.</div></td>
</tr>
<tr id="PolylineOptions.icons">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#PolylineOptions.icons"><span>icons</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">Array&lt;<a href="IconSequence.md">IconSequence</a>&gt; <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The icons to be rendered along the polyline.</div></td>
</tr>
<tr id="PolylineOptions.map">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#PolylineOptions.map"><span>map</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr"><a href="Map.md">Map</a> <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Map on which to display Polyline.</div></td>
</tr>
<tr id="PolylineOptions.path">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#PolylineOptions.path"><span>path</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr"><a href="MVCArray.md">MVCArray</a>&lt;<a href="LatLng.md">LatLng</a>&gt;|Array&lt;<a href="LatLng.md">LatLng</a>|<a href="LatLngLiteral.md">LatLngLiteral</a>&gt; <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The ordered sequence of coordinates of the Polyline. This path may be specified using either a simple array of <code translate="no" dir="ltr">LatLng</code>s, or an <code translate="no" dir="ltr">MVCArray</code> of <code translate="no" dir="ltr">LatLng</code>s. Note that if you pass a simple array, it will be converted to an <code translate="no" dir="ltr">MVCArray</code> Inserting or removing LatLngs in the <code translate="no" dir="ltr">MVCArray</code> will automatically update the polyline on the map.</div></td>
</tr>
<tr id="PolylineOptions.strokeColor">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#PolylineOptions.strokeColor"><span>strokeColor</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">string <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The stroke color. All CSS3 colors are supported except for extended named colors.</div></td>
</tr>
<tr id="PolylineOptions.strokeOpacity">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#PolylineOptions.strokeOpacity"><span>strokeOpacity</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">number <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The stroke opacity between 0.0 and 1.0.</div></td>
</tr>
<tr id="PolylineOptions.strokeWeight">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#PolylineOptions.strokeWeight"><span>strokeWeight</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">number <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The stroke width in pixels.</div></td>
</tr>
<tr id="PolylineOptions.visible">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#PolylineOptions.visible"><span>visible</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">boolean <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Whether this polyline is visible on the map. Defaults to <code translate="no" dir="ltr">true</code>.</div></td>
</tr>
<tr id="PolylineOptions.zIndex">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#PolylineOptions.zIndex"><span>zIndex</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">number <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The zIndex compared to other polys.</div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
