<h2 id="DirectionsWaypoint"> DirectionsWaypoint object specification </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">DirectionsWaypoint</span></code>
object specification
</p><p>A <code>DirectionsWaypoint</code> represents a location between origin and destination through which the trip should be routed.</p><div class="devsite-table-wrapper"><table class="properties responsive" summary="record DirectionsWaypoint - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>location</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Place.md">Place</a></code></div>
<div class="desc">Waypoint location. Can be an address string, a <code>LatLng</code>, or a <code>Place</code>. Optional.</div></td>
</tr>
<tr>
<td><code><span>stopover</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">If <code>true</code>, indicates that this waypoint is a stop between the origin and destination. This has the effect of splitting the route into two legs. If <code>false</code>, indicates that the route should be biased to go through this waypoint, but not split into two legs. This is useful if you want to create a route in response to the user dragging waypoints on a map. This value is <code>true</code> by default. Optional.</div></td>
</tr>
</tbody>
</table></div>