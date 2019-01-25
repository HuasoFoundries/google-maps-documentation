
<h2 id="DirectionsRequest">DirectionsRequest interface</h2>
<p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">DirectionsRequest</span></code>
interface
</p>
<p>A directions query to be sent to the <code><a href="DirectionsService.md">DirectionsService</a></code>.</p>
<div class="devsite-table-wrapper"><table class="properties responsive" summary="interface DirectionsRequest - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="DirectionsRequest.avoidFerries">
<td itemprop="property"><code><a class="secret-link" href="#DirectionsRequest.avoidFerries"><span>avoidFerries</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">If true, instructs the Directions service to avoid ferries where possible. Optional.</div></td>
</tr>
<tr id="DirectionsRequest.avoidHighways">
<td itemprop="property"><code><a class="secret-link" href="#DirectionsRequest.avoidHighways"><span>avoidHighways</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">If true, instructs the Directions service to avoid highways where possible. Optional.</div></td>
</tr>
<tr id="DirectionsRequest.avoidTolls">
<td itemprop="property"><code><a class="secret-link" href="#DirectionsRequest.avoidTolls"><span>avoidTolls</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">If true, instructs the Directions service to avoid toll roads where possible. Optional.</div></td>
</tr>
<tr id="DirectionsRequest.destination">
<td itemprop="property"><code><a class="secret-link" href="#DirectionsRequest.destination"><span>destination</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string|<a href="LatLng.md">LatLng</a>|<a href="Place.md">Place</a>|<a href="LatLngLiteral.md">LatLngLiteral</a></code></div>
<div class="desc">Location of destination. This can be specified as either a string to be geocoded, or a <code>LatLng</code>, or a <code>Place</code>. Required.</div></td>
</tr>
<tr id="DirectionsRequest.drivingOptions">
<td itemprop="property"><code><a class="secret-link" href="#DirectionsRequest.drivingOptions"><span>drivingOptions</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="DrivingOptions.md">DrivingOptions</a></code></div>
<div class="desc">Settings that apply only to requests where <code>travelMode</code> is <code>DRIVING</code>. This object will have no effect for other travel modes.</div></td>
</tr>
<tr id="DirectionsRequest.optimizeWaypoints">
<td itemprop="property"><code><a class="secret-link" href="#DirectionsRequest.optimizeWaypoints"><span>optimizeWaypoints</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">If set to true, the <code>DirectionsService</code> will attempt to re-order the supplied intermediate waypoints to minimize overall cost of the route. If waypoints are optimized, inspect <code>DirectionsRoute.waypoint_order</code> in the response to determine the new ordering.</div></td>
</tr>
<tr id="DirectionsRequest.origin">
<td itemprop="property"><code><a class="secret-link" href="#DirectionsRequest.origin"><span>origin</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string|<a href="LatLng.md">LatLng</a>|<a href="Place.md">Place</a>|<a href="LatLngLiteral.md">LatLngLiteral</a></code></div>
<div class="desc">Location of origin. This can be specified as either a string to be geocoded, or a <code>LatLng</code>, or a <code>Place</code>. Required.</div></td>
</tr>
<tr id="DirectionsRequest.provideRouteAlternatives">
<td itemprop="property"><code><a class="secret-link" href="#DirectionsRequest.provideRouteAlternatives"><span>provideRouteAlternatives</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">Whether or not route alternatives should be provided. Optional.</div></td>
</tr>
<tr id="DirectionsRequest.region">
<td itemprop="property"><code><a class="secret-link" href="#DirectionsRequest.region"><span>region</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">Region code used as a bias for geocoding requests. Optional.</div></td>
</tr>
<tr id="DirectionsRequest.transitOptions">
<td itemprop="property"><code><a class="secret-link" href="#DirectionsRequest.transitOptions"><span>transitOptions</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="TransitOptions.md">TransitOptions</a></code></div>
<div class="desc">Settings that apply only to requests where <code>travelMode</code> is TRANSIT. This object will have no effect for other travel modes.</div></td>
</tr>
<tr id="DirectionsRequest.travelMode">
<td itemprop="property"><code><a class="secret-link" href="#DirectionsRequest.travelMode"><span>travelMode</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="TravelMode.md">TravelMode</a></code></div>
<div class="desc">Type of routing requested. Required.</div></td>
</tr>
<tr id="DirectionsRequest.unitSystem">
<td itemprop="property"><code><a class="secret-link" href="#DirectionsRequest.unitSystem"><span>unitSystem</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="UnitSystem.md">UnitSystem</a></code></div>
<div class="desc">Preferred unit system to use when displaying distance. Defaults to the unit system used in the country of origin.</div></td>
</tr>
<tr id="DirectionsRequest.waypoints">
<td itemprop="property"><code><a class="secret-link" href="#DirectionsRequest.waypoints"><span>waypoints</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>Array&lt;<a href="DirectionsWaypoint.md">DirectionsWaypoint</a>&gt;</code></div>
<div class="desc">Array of intermediate waypoints. Directions are calculated from the origin to the destination by way of each waypoint in this array. See the <a href="https://developers.google.com/maps/documentation/javascript/directions#UsageLimits"> developer's guide</a> for the maximum number of waypoints allowed. Waypoints are not supported for transit directions. Optional.</div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
