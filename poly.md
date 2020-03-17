
<devsite-heading text=" poly namespace" for="poly" level="h2" link="" toc="" back-to-top=""><h2 id="poly" is-upgraded="">poly namespace</h2></devsite-heading>
<p>
<code translate="no" dir="ltr"><span itemprop="path">google.maps.geometry</span>.<span itemprop="name">poly</span></code>
namespace
</p>
<p>Utility functions for computations involving polygons and polylines.</p>
<devsite-heading text="Library" for="library_2" level="h4" link=""><h4 is-upgraded="" id="library_2">Library</h4></devsite-heading>
<p>geometry</p>
<div class="devsite-table-wrapper"><table class="methods responsive" summary="namespace poly - Static Methods">
<thead>
<tr><th colspan="2">Static Methods</th>
</tr></thead>
<tbody>
<tr id="poly.containsLocation">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#poly.containsLocation"><span>containsLocation</span></a></code></td>
<td><div><code translate="no" dir="ltr">containsLocation(point, polygon)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">point</code>:&nbsp; <code translate="no" dir="ltr"><a href="LatLng.md">LatLng</a></code></li>
<li><code translate="no" dir="ltr">polygon</code>:&nbsp; <code translate="no" dir="ltr"><a href="Polygon.md">Polygon</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr">boolean</code></div>
<div class="desc">Computes whether the given point lies inside the specified polygon.</div></td>
</tr>
<tr id="poly.isLocationOnEdge">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#poly.isLocationOnEdge"><span>isLocationOnEdge</span></a></code></td>
<td><div><code translate="no" dir="ltr">isLocationOnEdge(point, poly[, tolerance])</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">point</code>:&nbsp; <code translate="no" dir="ltr"><a href="LatLng.md">LatLng</a></code></li>
<li><code translate="no" dir="ltr">poly</code>:&nbsp; <code translate="no" dir="ltr"><a href="Polygon.md">Polygon</a>|<a href="Polyline.md">Polyline</a></code></li>
<li><code translate="no" dir="ltr">tolerance</code>:&nbsp; <code translate="no" dir="ltr">number <span class="optional-type-annotation">optional</span></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr">boolean</code></div>
<div class="desc">Computes whether the given point lies on or near to a polyline, or the edge of a polygon, within a specified tolerance. Returns <code translate="no" dir="ltr">true</code> when the difference between the latitude and longitude of the supplied point, and the closest point on the edge, is less than the tolerance. The tolerance defaults to 10<sup>-9</sup> degrees.</div></td>
</tr>
</tbody>
</table></div>
