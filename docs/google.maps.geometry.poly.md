<h2 id="poly">
google.maps.geometry.poly
namespace
</h2><p>Utility functions for computations involving polygons and polylines.</p><h3>Library</h3><p>geometry</p><h3>Static Methods</h3><table summary="namespace poly - Static Methods" width="100%">
<thead>
<tr><th>Methods</th>
<th>Return Value</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>containsLocation(point:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLng.md">LatLng</a>, polygon:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Polygon.md">Polygon</a>)</code></td>
<td><code>boolean</code></td>
<td>Computes whether the given point lies inside the specified polygon.</td>
</tr>
<tr>
<td><code>isLocationOnEdge(point:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLng.md">LatLng</a>, poly:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Polygon.md">Polygon</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Polyline.md">Polyline</a>, tolerance?:number)</code></td>
<td><code>boolean</code></td>
<td>Computes whether the given point lies on or near to a polyline, or the edge of a polygon, within a specified tolerance. Returns <code>true</code> when the difference between the latitude and longitude of the supplied point, and the closest point on the edge, is less than the tolerance. The tolerance defaults to 10<sup>-9</sup> degrees.</td>
</tr>
</tbody>
</table>