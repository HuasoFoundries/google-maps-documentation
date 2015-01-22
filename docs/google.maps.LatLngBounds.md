<h2 id="LatLngBounds">
google.maps.LatLngBounds
class
</h2><p>A <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLngBounds.md">LatLngBounds</a></code> instance represents a rectangle in geographical coordinates, including one that crosses the 180 degrees longitudinal meridian.</p><h3 id="devsite_header_225">Constructor</h3><table summary="class LatLngBounds - Constructor" width="100%">
<thead>
<tr><th>Constructor</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>LatLngBounds(sw?:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLng.md">LatLng</a>, ne?:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLng.md">LatLng</a>)</code></td>
<td>Constructs a rectangle from the points at its south-west and north-east corners.</td>
</tr>
</tbody>
</table><h3 id="devsite_header_226">Methods</h3><table summary="class LatLngBounds - Methods" width="100%">
<thead>
<tr><th>Methods</th>
<th>Return Value</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>contains(latLng:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLng.md">LatLng</a>)</code></td>
<td><code>boolean</code></td>
<td>Returns <code>true</code> if the given lat/lng is in this bounds.</td>
</tr>
<tr>
<td><code>equals(other:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLngBounds.md">LatLngBounds</a>)</code></td>
<td><code>boolean</code></td>
<td>Returns <code>true</code> if this bounds approximately equals the given bounds.</td>
</tr>
<tr>
<td><code>extend(point:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLng.md">LatLng</a>)</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLngBounds.md">LatLngBounds</a></code></td>
<td>Extends this bounds to contain the given point.</td>
</tr>
<tr>
<td><code>getCenter()</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLng.md">LatLng</a></code></td>
<td>Computes the center of this LatLngBounds</td>
</tr>
<tr>
<td><code>getNorthEast()</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLng.md">LatLng</a></code></td>
<td>Returns the north-east corner of this bounds.</td>
</tr>
<tr>
<td><code>getSouthWest()</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLng.md">LatLng</a></code></td>
<td>Returns the south-west corner of this bounds.</td>
</tr>
<tr>
<td><code>intersects(other:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLngBounds.md">LatLngBounds</a>)</code></td>
<td><code>boolean</code></td>
<td>Returns <code>true</code> if this bounds shares any points with this bounds.</td>
</tr>
<tr>
<td><code>isEmpty()</code></td>
<td><code>boolean</code></td>
<td>Returns if the bounds are empty.</td>
</tr>
<tr>
<td><code>toSpan()</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLng.md">LatLng</a></code></td>
<td>Converts the given map bounds to a lat/lng span.</td>
</tr>
<tr>
<td><code>toString()</code></td>
<td><code>string</code></td>
<td>Converts to string.</td>
</tr>
<tr>
<td><code>toUrlValue(precision?:number)</code></td>
<td><code>string</code></td>
<td>Returns a string of the form "lat_lo,lng_lo,lat_hi,lng_hi" for this bounds, where "lo" corresponds to the southwest corner of the bounding box, while "hi" corresponds to the northeast corner of that box.</td>
</tr>
<tr>
<td><code>union(other:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLngBounds.md">LatLngBounds</a>)</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLngBounds.md">LatLngBounds</a></code></td>
<td>Extends this bounds to contain the union of this and the given bounds.</td>
</tr>
</tbody>
</table>