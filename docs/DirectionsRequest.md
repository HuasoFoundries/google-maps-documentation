<h2 id="DirectionsRequest">
google.maps.DirectionsRequest
object specification
</h2><p>A directions query to be sent to the <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.DirectionsService.md">DirectionsService</a></code>.</p><h3>Properties</h3><table summary="interface DirectionsRequest - Properties" width="100%">
<thead>
<tr><th>Properties</th>
<th>Type</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>avoidFerries</code></td>
<td><code>boolean</code></td>
<td>If true, instructs the Directions service to avoid ferries where possible. Optional.</td>
</tr>
<tr>
<td><code>avoidHighways</code></td>
<td><code>boolean</code></td>
<td>If true, instructs the Directions service to avoid highways where possible. Optional.</td>
</tr>
<tr>
<td><code>avoidTolls</code></td>
<td><code>boolean</code></td>
<td>If true, instructs the Directions service to avoid toll roads where possible. Optional.</td>
</tr>
<tr>
<td><code>destination</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLng.md">LatLng</a>|string</code></td>
<td>Location of destination. This can be specified as either a string to be geocoded or a <code>LatLng</code>. Required.</td>
</tr>
<tr>
<td><code>durationInTraffic</code></td>
<td><code>boolean</code></td>
<td>Whether or not we should provide trip duration based on current traffic conditions. Only available to Maps API for Work customers.</td>
</tr>
<tr>
<td><code>optimizeWaypoints</code></td>
<td><code>boolean</code></td>
<td>If set to true, the <code>DirectionService</code> will attempt to re-order the supplied intermediate waypoints to minimize overall cost of the route. If waypoints are optimized, inspect <code>DirectionsRoute.waypoint_order</code> in the response to determine the new ordering.</td>
</tr>
<tr>
<td><code>origin</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLng.md">LatLng</a>|string</code></td>
<td>Location of origin. This can be specified as either a string to be geocoded or a <code>LatLng</code>. Required.</td>
</tr>
<tr>
<td><code>provideRouteAlternatives</code></td>
<td><code>boolean</code></td>
<td>Whether or not route alternatives should be provided. Optional.</td>
</tr>
<tr>
<td><code>region</code></td>
<td><code>string</code></td>
<td>Region code used as a bias for geocoding requests. Optional.</td>
</tr>
<tr>
<td><code>transitOptions</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.TransitOptions.md">TransitOptions</a></code></td>
<td>Settings that apply only to requests where <code>travelMode</code> is TRANSIT. This object will have no effect for other travel modes.</td>
</tr>
<tr>
<td><code>travelMode</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.TravelMode.md">TravelMode</a></code></td>
<td>Type of routing requested. Required.</td>
</tr>
<tr>
<td><code>unitSystem</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.UnitSystem.md">UnitSystem</a></code></td>
<td>Preferred unit system to use when displaying distance. Defaults to the unit system used in the country of origin.</td>
</tr>
<tr>
<td><code>waypoints</code></td>
<td><code>Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.DirectionsWaypoint.md">DirectionsWaypoint</a>&gt;</code></td>
<td>Array of intermediate waypoints. Directions will be calculated from the origin to the destination by way of each waypoint in this array. The maximum allowed waypoints is 8, plus the origin, and destination. Maps API for Business customers are allowed 23 waypoints, plus the origin, and destination. Waypoints are not supported for transit directions. Optional.</td>
</tr>
</tbody>
</table>