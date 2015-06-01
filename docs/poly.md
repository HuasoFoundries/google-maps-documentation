<h2 id="poly"> poly namespace </h2><p>
<code><span itemprop="path">google.maps.geometry</span>.<span itemprop="name">poly</span></code>
namespace
</p><p>Utility functions for computations involving polygons and polylines.</p><h4>Library</h4><p>geometry</p><div class="devsite-table-wrapper"><table class="methods responsive" summary="namespace poly - Static Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>containsLocation(<wbr>point:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md"><span>LatLng</span></a><span>,<wbr> polygon:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Polygon.md"><span>Polygon</span></a><span>)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">Computes whether the given point lies inside the specified polygon.</div></td>
</tr>
<tr>
<td><code><span>isLocationOnEdge(<wbr>point:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md"><span>LatLng</span></a><span>,<wbr> poly:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Polygon.md"><span>Polygon</span></a><span>|<wbr></span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Polyline.md"><span>Polyline</span></a><span>,<wbr> tolerance?:number)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">Computes whether the given point lies on or near to a polyline, or the edge of a polygon, within a specified tolerance. Returns <code>true</code> when the difference between the latitude and longitude of the supplied point, and the closest point on the edge, is less than the tolerance. The tolerance defaults to 10<sup>-9</sup> degrees.</div></td>
</tr>
</tbody>
</table></div>