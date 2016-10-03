<h2 id="PathElevationRequest"> PathElevationRequest object specification </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">PathElevationRequest</span></code>
object specification
</p><p>An elevation query sent by the <code>ElevationService</code> containing the path along which to return sampled data. This request defines a continuous path along the earth along which elevation samples should be taken at evenly-spaced distances. All paths from vertex to vertex use segments of the great circle between those two points.</p><div class="devsite-table-wrapper"><table class="properties responsive" summary="record PathElevationRequest - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>path</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a>&gt;</code></div>
<div class="desc">The path along which to collect elevation values.</div></td>
</tr>
<tr>
<td><code><span>samples</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">Required. The number of equidistant points along the given path for which to retrieve elevation data, including the endpoints. The number of samples must be a value between 2 and 512 inclusive.</div></td>
</tr>
</tbody>
</table></div>