
<h2 id="PathElevationRequest">PathElevationRequest interface</h2>
<p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">PathElevationRequest</span></code>
interface
</p>
<p>An elevation query sent by the <code>ElevationService</code> containing the path along which to return sampled data. This request defines a continuous path along the earth along which elevation samples should be taken at evenly-spaced distances. All paths from vertex to vertex use segments of the great circle between those two points.</p>
<div class="devsite-table-wrapper"><table class="properties responsive" summary="interface PathElevationRequest - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="PathElevationRequest.path">
<td itemprop="property"><code><a class="secret-link" href="#PathElevationRequest.path"><span>path</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>Array&lt;<a href="LatLng.md">LatLng</a>&gt;</code></div>
<div class="desc">The path along which to collect elevation values.</div></td>
</tr>
<tr id="PathElevationRequest.samples">
<td itemprop="property"><code><a class="secret-link" href="#PathElevationRequest.samples"><span>samples</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">Required. The number of equidistant points along the given path for which to retrieve elevation data, including the endpoints. The number of samples must be a value between 2 and 512 inclusive.</div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
