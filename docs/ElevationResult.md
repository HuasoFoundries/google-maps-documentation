<h2 id="ElevationResult"> ElevationResult object specification </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">ElevationResult</span></code>
object specification
</p><p>The result of an <code>ElevationService</code> request, consisting of the set of elevation coordinates and their elevation values. Note that a single request may produce multiple <code>ElevationResult</code>s.</p><div class="devsite-table-wrapper"><table class="properties responsive" summary="interface ElevationResult - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>elevation</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">The elevation of this point on Earth, in meters above sea level.</div></td>
</tr>
<tr>
<td><code><span>location</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a></code></div>
<div class="desc">The location of this elevation result.</div></td>
</tr>
<tr>
<td><code><span>resolution</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">The distance, in meters, between sample points from which the elevation was interpolated. This property will be missing if the resolution is not known. Note that elevation data becomes more coarse (larger <code>resolution</code> values) when multiple points are passed. To obtain the most accurate elevation value for a point, it should be queried independently.</div></td>
</tr>
</tbody>
</table></div>