<h2 id="DirectionsWaypoint">
google.maps.DirectionsWaypoint
object specification
</h2><p>A <code>DirectionsWaypoint</code> represents a location between origin and destination through which the trip should be routed.</p><h3>Properties</h3><table summary="interface DirectionsWaypoint - Properties" width="100%">
<thead>
<tr><th>Properties</th>
<th>Type</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>location</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLng.md">LatLng</a>|string</code></td>
<td>Waypoint location. Can be an address string or <code>LatLng</code>. Optional.</td>
</tr>
<tr>
<td><code>stopover</code></td>
<td><code>boolean</code></td>
<td>If <code>true</code>, indicates that this waypoint is a stop between the origin and destination. This has the effect of splitting the route into two. This value is <code>true</code> by default. Optional.</td>
</tr>
</tbody>
</table>