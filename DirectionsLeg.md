
<devsite-heading text=" DirectionsLeg interface" for="DirectionsLeg" level="h2" link="" toc="" back-to-top=""><h2 id="DirectionsLeg" is-upgraded="">DirectionsLeg interface</h2></devsite-heading>
<p>
<code translate="no" dir="ltr"><span itemprop="path">google.maps</span>.<span itemprop="name">DirectionsLeg</span></code>
interface
</p>
<p>A single leg consisting of a set of steps in a <code translate="no" dir="ltr"><a href="DirectionsResult.md">DirectionsResult</a></code>. Some fields in the leg may not be returned for all requests. Note that though this result is "JSON-like," it is not strictly JSON, as it directly and indirectly includes <code translate="no" dir="ltr">LatLng</code> objects.</p>
<div class="devsite-table-wrapper"><table class="properties responsive" summary="interface DirectionsLeg - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="DirectionsLeg.arrival_time">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#DirectionsLeg.arrival_time"><span>arrival_time</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr"><a href="Time.md">Time</a></code></div>
<div class="desc">An estimated arrival time for this leg. Only applicable for TRANSIT requests.</div></td>
</tr>
<tr id="DirectionsLeg.departure_time">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#DirectionsLeg.departure_time"><span>departure_time</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr"><a href="Time.md">Time</a></code></div>
<div class="desc">An estimated departure time for this leg. Only applicable for TRANSIT requests.</div></td>
</tr>
<tr id="DirectionsLeg.distance">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#DirectionsLeg.distance"><span>distance</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr"><a href="Distance.md">Distance</a></code></div>
<div class="desc">The total distance covered by this leg. This property may be undefined as the distance may be unknown.</div></td>
</tr>
<tr id="DirectionsLeg.duration">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#DirectionsLeg.duration"><span>duration</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr"><a href="Duration.md">Duration</a></code></div>
<div class="desc">The total duration of this leg. This property may be undefined as the duration may be unknown.</div></td>
</tr>
<tr id="DirectionsLeg.duration_in_traffic">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#DirectionsLeg.duration_in_traffic"><span>duration_in_traffic</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr"><a href="Duration.md">Duration</a></code></div>
<div class="desc">The total duration of this leg, taking into account the traffic conditions indicated by the <code translate="no" dir="ltr">trafficModel</code> property. This property may be undefined as the duration may be unknown. Only available to Premium Plan customers when <code translate="no" dir="ltr">drivingOptions</code> is defined when making the request.</div></td>
</tr>
<tr id="DirectionsLeg.end_address">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#DirectionsLeg.end_address"><span>end_address</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">string</code></div>
<div class="desc">The address of the destination of this leg.</div></td>
</tr>
<tr id="DirectionsLeg.end_location">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#DirectionsLeg.end_location"><span>end_location</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr"><a href="LatLng.md">LatLng</a></code></div>
<div class="desc">The <code translate="no" dir="ltr">DirectionsService</code> calculates directions between locations by using the nearest transportation option (usually a road) at the start and end locations. <code translate="no" dir="ltr">end_location</code> indicates the actual geocoded destination, which may be different than the <code translate="no" dir="ltr">end_location</code> of the last step if, for example, the road is not near the destination of this leg.</div></td>
</tr>
<tr id="DirectionsLeg.start_address">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#DirectionsLeg.start_address"><span>start_address</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">string</code></div>
<div class="desc">The address of the origin of this leg.</div></td>
</tr>
<tr id="DirectionsLeg.start_location">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#DirectionsLeg.start_location"><span>start_location</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr"><a href="LatLng.md">LatLng</a></code></div>
<div class="desc">The <code translate="no" dir="ltr">DirectionsService</code> calculates directions between locations by using the nearest transportation option (usually a road) at the start and end locations. <code translate="no" dir="ltr">start_location</code> indicates the actual geocoded origin, which may be different than the <code translate="no" dir="ltr">start_location</code> of the first step if, for example, the road is not near the origin of this leg.</div></td>
</tr>
<tr id="DirectionsLeg.steps">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#DirectionsLeg.steps"><span>steps</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">Array&lt;<a href="DirectionsStep.md">DirectionsStep</a>&gt;</code></div>
<div class="desc">An array of <code translate="no" dir="ltr">DirectionsStep</code>s, each of which contains information about the individual steps in this leg.</div></td>
</tr>
<tr id="DirectionsLeg.via_waypoints">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#DirectionsLeg.via_waypoints"><span>via_waypoints</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">Array&lt;<a href="LatLng.md">LatLng</a>&gt;</code></div>
<div class="desc">An array of non-stopover waypoints along this leg, which were specified in the original request. <p> <strong>Deprecated in alternative routes</strong>. Version 3.27 will be the last version of the API that adds extra <code translate="no" dir="ltr">via_waypoints</code> in alternative routes. </p><p> When using the Directions Service to implement draggable directions, it is recommended to disable dragging of alternative routes. Only the main route should be draggable. Users can drag the main route until it matches an alternative route.</p></div></td>
</tr>
</tbody>
</table></div>
