<h2 id="PathElevationRequest">
google.maps.PathElevationRequest
object specification
</h2><p>An elevation query sent by the <code>ElevationService</code> containing the path along which to return sampled data. This request defines a continuous path along the earth along which elevation samples should be taken at evenly-spaced distances. All paths from vertex to vertex use segments of the great circle between those two points.</p><h3 id="devsite_header_136">Properties</h3><table summary="interface PathElevationRequest - Properties" width="100%">
<thead>
<tr><th>Properties</th>
<th>Type</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>path</code></td>
<td><code>Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLng.md">LatLng</a>&gt;</code></td>
<td>The path along which to collect elevation values.</td>
</tr>
<tr>
<td><code>samples</code></td>
<td><code>number</code></td>
<td>Required. The number of equidistant points along the given path for which to retrieve elevation data, including the endpoints. The number of samples must be a value between 2 and 512 inclusive.</td>
</tr>
</tbody>
</table>