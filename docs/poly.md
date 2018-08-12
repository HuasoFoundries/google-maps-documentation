
<h2 id="poly">poly namespace</h2>
<p>
<code><span itemprop="path">google.maps.geometry</span>.<span itemprop="name">poly</span></code>
namespace
</p>
<p>Utility functions for computations involving polygons and polylines.</p>
<h4>Library</h4>
<p>geometry</p>
<div class="devsite-table-wrapper"><table class="methods responsive" summary="namespace poly - Static Methods">
<thead>
<tr><th colspan="2">Static Methods</th>
</tr></thead>
<tbody>
<tr id="poly.containsLocation">
<td itemprop="property"><code><a class="secret-link" href="#poly.containsLocation"><span>containsLocation</span></a></code></td>
<td><div><code>containsLocation(point, polygon)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>point</code>:&nbsp; <code><a href="LatLng.md">LatLng</a></code></li>
<li><code>polygon</code>:&nbsp; <code><a href="Polygon.md">Polygon</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">Computes whether the given point lies inside the specified polygon.</div></td>
</tr>
<tr id="poly.isLocationOnEdge">
<td itemprop="property"><code><a class="secret-link" href="#poly.isLocationOnEdge"><span>isLocationOnEdge</span></a></code></td>
<td><div><code>isLocationOnEdge(point, poly[, tolerance])</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>point</code>:&nbsp; <code><a href="LatLng.md">LatLng</a></code></li>
<li><code>poly</code>:&nbsp; <code><a href="Polygon.md">Polygon</a>|<a href="Polyline.md">Polyline</a></code></li>
<li><code>tolerance</code> (optional):&nbsp; <code>number</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">Computes whether the given point lies on or near to a polyline, or the edge of a polygon, within a specified tolerance. Returns <code>true</code> when the difference between the latitude and longitude of the supplied point, and the closest point on the edge, is less than the tolerance. The tolerance defaults to 10<sup>-9</sup> degrees.</div></td>
</tr>
</tbody>
</table></div>
