<h2 id="LatLngBounds">
LatLngBounds
class
</h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">LatLngBounds</span></code>
class
</p><p>A <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLngBounds.md">LatLngBounds</a></code> instance represents a rectangle in geographical coordinates, including one that crosses the 180 degrees longitudinal meridian.</p><table class="constructors responsive" summary="class LatLngBounds - Constructor">
<thead>
<tr><th colspan="2">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code>LatLngBounds(sw?:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a>, ne?:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a>)</code></td>
<td>Constructs a rectangle from the points at its south-west and north-east corners.</td>
</tr>
</tbody>
</table><table class="methods responsive" summary="class LatLngBounds - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr>
<td><code>contains(latLng:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a>)</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">Returns <code>true</code> if the given lat/lng is in this bounds.</div></td>
</tr>
<tr>
<td><code>equals(other:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLngBounds.md">LatLngBounds</a>)</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">Returns <code>true</code> if this bounds approximately equals the given bounds.</div></td>
</tr>
<tr>
<td><code>extend(point:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a>)</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLngBounds.md">LatLngBounds</a></code></div>
<div class="desc">Extends this bounds to contain the given point.</div></td>
</tr>
<tr>
<td><code>getCenter()</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a></code></div>
<div class="desc">Computes the center of this LatLngBounds</div></td>
</tr>
<tr>
<td><code>getNorthEast()</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a></code></div>
<div class="desc">Returns the north-east corner of this bounds.</div></td>
</tr>
<tr>
<td><code>getSouthWest()</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a></code></div>
<div class="desc">Returns the south-west corner of this bounds.</div></td>
</tr>
<tr>
<td><code>intersects(other:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLngBounds.md">LatLngBounds</a>)</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">Returns <code>true</code> if this bounds shares any points with this bounds.</div></td>
</tr>
<tr>
<td><code>isEmpty()</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">Returns if the bounds are empty.</div></td>
</tr>
<tr>
<td><code>toSpan()</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a></code></div>
<div class="desc">Converts the given map bounds to a lat/lng span.</div></td>
</tr>
<tr>
<td><code>toString()</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>string</code></div>
<div class="desc">Converts to string.</div></td>
</tr>
<tr>
<td><code>toUrlValue(precision?:number)</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>string</code></div>
<div class="desc">Returns a string of the form "lat_lo,lng_lo,lat_hi,lng_hi" for this bounds, where "lo" corresponds to the southwest corner of the bounding box, while "hi" corresponds to the northeast corner of that box.</div></td>
</tr>
<tr>
<td><code>union(other:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLngBounds.md">LatLngBounds</a>)</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLngBounds.md">LatLngBounds</a></code></div>
<div class="desc">Extends this bounds to contain the union of this and the given bounds.</div></td>
</tr>
</tbody>
</table>