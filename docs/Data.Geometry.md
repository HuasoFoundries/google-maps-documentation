<h2 id="Data.Geometry"> Data.Geometry class </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">Data.Geometry</span></code>
class
</p><p>A superclass for the various geometry objects.</p><div class="devsite-table-wrapper"><table class="methods responsive" summary="class Data.Geometry - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>forEachLatLng(<wbr>callback:function(<wbr></span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md"><span>LatLng</span></a><span>))</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Repeatedly invokes the given function, passing a point from the geometry to the function on each invocation.</div></td>
</tr>
<tr>
<td><code><span>getType()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>string</code></div>
<div class="desc">Returns the type of the geometry object. Possibilities are <code>"Point"</code>, <code>"MultiPoint"</code>, <code>"LineString"</code>, <code>"MultiLineString"</code>, <code>"LinearRing"</code>, <code>"Polygon"</code>, <code>"MultiPolygon"</code>, or <code>"GeometryCollection"</code>.</div></td>
</tr>
</tbody>
</table></div>