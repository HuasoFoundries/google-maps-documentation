<h2 id="DirectionsLeg">
google.maps.DirectionsLeg
object specification
</h2><p>A single leg consisting of a set of steps in a <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.DirectionsResult.md">DirectionsResult</a></code>. Some fields in the leg may not be returned for all requests. Note that though this result is "JSON-like," it is not strictly JSON, as it directly and indirectly includes <code>LatLng</code> objects.</p><h3 id="devsite_header_122">Properties</h3><table summary="interface DirectionsLeg - Properties" width="100%">
<thead>
<tr><th>Properties</th>
<th>Type</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>arrival_time</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Time.md">Time</a></code></td>
<td>An estimated arrival time for this leg. Only applicable for TRANSIT requests.</td>
</tr>
<tr>
<td><code>departure_time</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Time.md">Time</a></code></td>
<td>An estimated departure time for this leg. Only applicable for TRANSIT requests.</td>
</tr>
<tr>
<td><code>distance</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Distance.md">Distance</a></code></td>
<td>The total distance covered by this leg. This property may be undefined as the distance may be unknown.</td>
</tr>
<tr>
<td><code>duration</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Duration.md">Duration</a></code></td>
<td>The total duration of this leg. This property may be undefined as the duration may be unknown.</td>
</tr>
<tr>
<td><code>duration_in_traffic</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Duration.md">Duration</a></code></td>
<td>The total duration of this leg, taking into account current traffic conditions. This property may be undefined as the duration may be unknown. Only available to Maps API for Work customers when <code>durationInTraffic</code> is set to <code>true</code> when making the request.</td>
</tr>
<tr>
<td><code>end_address</code></td>
<td><code>string</code></td>
<td>The address of the destination of this leg.</td>
</tr>
<tr>
<td><code>end_location</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLng.md">LatLng</a></code></td>
<td>The <code>DirectionsService</code> calculates directions between locations by using the nearest transportation option (usually a road) at the start and end locations. <code>end_location</code> indicates the actual geocoded destination, which may be different than the <code>end_location</code> of the last step if, for example, the road is not near the destination of this leg.</td>
</tr>
<tr>
<td><code>start_address</code></td>
<td><code>string</code></td>
<td>The address of the origin of this leg.</td>
</tr>
<tr>
<td><code>start_location</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLng.md">LatLng</a></code></td>
<td>The <code>DirectionsService</code> calculates directions between locations by using the nearest transportation option (usually a road) at the start and end locations. <code>start_location</code> indicates the actual geocoded origin, which may be different than the <code>start_location</code> of the first step if, for example, the road is not near the origin of this leg.</td>
</tr>
<tr>
<td><code>steps</code></td>
<td><code>Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.DirectionsStep.md">DirectionsStep</a>&gt;</code></td>
<td>An array of <code>DirectionsStep</code>s, each of which contains information about the individual steps in this leg.</td>
</tr>
<tr>
<td><code>via_waypoints</code></td>
<td><code>Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLng.md">LatLng</a>&gt;</code></td>
<td>An array of waypoints along this leg that were not specified in the original request, either as a result of a user dragging the polyline or selecting an alternate route.</td>
</tr>
</tbody>
</table>