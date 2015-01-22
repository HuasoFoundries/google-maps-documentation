<h2 id="ElevationResult">
google.maps.ElevationResult
object specification
</h2><p>The result of an <code>ElevationService</code> request, consisting of the set of elevation coordinates and their elevation values. Note that a single request may produce multiple <code>ElevationResult</code>s.</p><h3 id="devsite_header_137">Properties</h3><table summary="interface ElevationResult - Properties" width="100%">
<thead>
<tr><th>Properties</th>
<th>Type</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>elevation</code></td>
<td><code>number</code></td>
<td>The elevation of this point on Earth, in meters above sea level.</td>
</tr>
<tr>
<td><code>location</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLng.md">LatLng</a></code></td>
<td>The location of this elevation result.</td>
</tr>
<tr>
<td><code>resolution</code></td>
<td><code>number</code></td>
<td>The distance, in meters, between sample points from which the elevation was interpolated. This property will be missing if the resolution is not known. Note that elevation data becomes more coarse (larger <code>resolution</code> values) when multiple points are passed. To obtain the most accurate elevation value for a point, it should be queried independently.</td>
</tr>
</tbody>
</table>