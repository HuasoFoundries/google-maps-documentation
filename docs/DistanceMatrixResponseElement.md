
<devsite-heading><h2 id="DistanceMatrixResponseElement" is-upgraded="">DistanceMatrixResponseElement interface</h2></devsite-heading>
<p>
<code translate="no" dir="ltr"><span itemprop="path">google.maps</span>.<span itemprop="name">DistanceMatrixResponseElement</span></code>
interface
</p>
<p>A single element of a response to a <code translate="no" dir="ltr">DistanceMatrixService</code> request, which contains the duration and distance from one origin to one destination.</p>
<div class="devsite-table-wrapper"><table class="properties responsive" summary="interface DistanceMatrixResponseElement - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="DistanceMatrixResponseElement.distance">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#DistanceMatrixResponseElement.distance"><span>distance</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr"><a href="Distance.md">Distance</a></code></div>
<div class="desc">The distance for this origin-destination pairing. This property may be undefined as the distance may be unknown.</div></td>
</tr>
<tr id="DistanceMatrixResponseElement.duration">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#DistanceMatrixResponseElement.duration"><span>duration</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr"><a href="Duration.md">Duration</a></code></div>
<div class="desc">The duration for this origin-destination pairing. This property may be undefined as the duration may be unknown.</div></td>
</tr>
<tr id="DistanceMatrixResponseElement.duration_in_traffic">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#DistanceMatrixResponseElement.duration_in_traffic"><span>duration_in_traffic</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr"><a href="Duration.md">Duration</a></code></div>
<div class="desc">The duration for this origin-destination pairing, taking into account the traffic conditions indicated by the <code translate="no" dir="ltr">trafficModel</code> property. This property may be undefined as the duration may be unknown. Only available to Premium Plan customers when <code translate="no" dir="ltr">drivingOptions</code> is defined when making the request.</div></td>
</tr>
<tr id="DistanceMatrixResponseElement.fare">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#DistanceMatrixResponseElement.fare"><span>fare</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr"><a href="TransitFare.md">TransitFare</a></code></div>
<div class="desc">The total fare for this origin-destination pairing. Only applicable to transit requests.</div></td>
</tr>
<tr id="DistanceMatrixResponseElement.status">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#DistanceMatrixResponseElement.status"><span>status</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr"><a href="DistanceMatrixElementStatus.md">DistanceMatrixElementStatus</a></code></div>
<div class="desc">The status of this particular origin-destination pairing.</div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
