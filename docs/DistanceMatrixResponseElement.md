<h2 id="DistanceMatrixResponseElement"> DistanceMatrixResponseElement object specification </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">DistanceMatrixResponseElement</span></code>
object specification
</p><p>A single element of a response to a <code>DistanceMatrixService</code> request, which contains the duration and distance from one origin to one destination.</p><div class="devsite-table-wrapper"><table class="properties responsive" summary="interface DistanceMatrixResponseElement - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>distance</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Distance.md">Distance</a></code></div>
<div class="desc">The distance for this origin-destination pairing. This property may be undefined as the distance may be unknown.</div></td>
</tr>
<tr>
<td><code><span>duration</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Duration.md">Duration</a></code></div>
<div class="desc">The duration for this origin-destination pairing. This property may be undefined as the duration may be unknown.</div></td>
</tr>
<tr>
<td><code><span>fare</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/TransitFare.md">TransitFare</a></code></div>
<div class="desc">The total fare for this origin-destination pairing. Only applicable to transit requests.</div></td>
</tr>
<tr>
<td><code><span>status</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/DistanceMatrixElementStatus.md">DistanceMatrixElementStatus</a></code></div>
<div class="desc">The status of this particular origin-destination pairing.</div></td>
</tr>
</tbody>
</table></div>