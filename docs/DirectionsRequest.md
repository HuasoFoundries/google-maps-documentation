<h2 id="DirectionsRequest"> DirectionsRequest object specification </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">DirectionsRequest</span></code>
object specification
</p><p>A directions query to be sent to the <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/DirectionsService.md">DirectionsService</a></code>.</p><div class="devsite-table-wrapper"><table class="properties responsive" summary="interface DirectionsRequest - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>avoidFerries</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">If true, instructs the Directions service to avoid ferries where possible. Optional.</div></td>
</tr>
<tr>
<td><code><span>avoidHighways</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">If true, instructs the Directions service to avoid highways where possible. Optional.</div></td>
</tr>
<tr>
<td><code><span>avoidTolls</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">If true, instructs the Directions service to avoid toll roads where possible. Optional.</div></td>
</tr>
<tr>
<td><code><span>destination</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Place.md">Place</a></code></div>
<div class="desc">Location of destination. This can be specified as either a string to be geocoded, or a <code>LatLng</code>, or a <code>Place</code>. Required.</div></td>
</tr>
<tr>
<td><code><span>durationInTraffic</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">Whether or not the API should use current traffic conditions when calculating the route and trip durations. Only available to Maps API for Work customers.</div></td>
</tr>
<tr>
<td><code><span>optimizeWaypoints</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">If set to true, the <code>DirectionService</code> will attempt to re-order the supplied intermediate waypoints to minimize overall cost of the route. If waypoints are optimized, inspect <code>DirectionsRoute.waypoint_order</code> in the response to determine the new ordering.</div></td>
</tr>
<tr>
<td><code><span>origin</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Place.md">Place</a></code></div>
<div class="desc">Location of origin. This can be specified as either a string to be geocoded, or a <code>LatLng</code>, or a <code>Place</code>. Required.</div></td>
</tr>
<tr>
<td><code><span>provideRouteAlternatives</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">Whether or not route alternatives should be provided. Optional.</div></td>
</tr>
<tr>
<td><code><span>region</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">Region code used as a bias for geocoding requests. Optional.</div></td>
</tr>
<tr>
<td><code><span>transitOptions</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/TransitOptions.md">TransitOptions</a></code></div>
<div class="desc">Settings that apply only to requests where <code>travelMode</code> is TRANSIT. This object will have no effect for other travel modes.</div></td>
</tr>
<tr>
<td><code><span>travelMode</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/TravelMode.md">TravelMode</a></code></div>
<div class="desc">Type of routing requested. Required.</div></td>
</tr>
<tr>
<td><code><span>unitSystem</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/UnitSystem.md">UnitSystem</a></code></div>
<div class="desc">Preferred unit system to use when displaying distance. Defaults to the unit system used in the country of origin.</div></td>
</tr>
<tr>
<td><code><span>waypoints</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/DirectionsWaypoint.md">DirectionsWaypoint</a>&gt;</code></div>
<div class="desc">Array of intermediate waypoints. Directions will be calculated from the origin to the destination by way of each waypoint in this array. The maximum allowed waypoints is 8, plus the origin, and destination. Maps API for Work customers are allowed 23 waypoints, plus the origin, and destination. Waypoints are not supported for transit directions. Optional.</div></td>
</tr>
</tbody>
</table></div>