<h2 id="Data.Geometry"> Data.Geometry interface </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">Data.Geometry</span></code>
interface
</p><p>A superclass for the various geometry objects.</p><div class="devsite-table-wrapper"><table class="methods responsive" summary="interface Data.Geometry - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr id="Data.Geometry.forEachLatLng">
<td><code><span>forEachLatLng</span></code></td>
<td><div><code>forEachLatLng(callback)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>callback</code>:&nbsp; <code>function(<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a>)</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Repeatedly invokes the given function, passing a point from the geometry to the function on each invocation.</div></td>
</tr>
<tr id="Data.Geometry.getType">
<td><code><span>getType</span></code></td>
<td><div><code>getType()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>string</code></div>
<div class="desc">Returns the type of the geometry object. Possibilities are <code>"Point"</code>, <code>"MultiPoint"</code>, <code>"LineString"</code>, <code>"MultiLineString"</code>, <code>"LinearRing"</code>, <code>"Polygon"</code>, <code>"MultiPolygon"</code>, or <code>"GeometryCollection"</code>.</div></td>
</tr>
</tbody>
</table></div>