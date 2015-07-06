<h2 id="DirectionsWaypoint"> DirectionsWaypoint object specification </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">DirectionsWaypoint</span></code>
object specification
</p><p>A <code>DirectionsWaypoint</code> represents a location between origin and destination through which the trip should be routed.</p><div class="devsite-table-wrapper"><table class="properties responsive" summary="interface DirectionsWaypoint - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>location</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a>|string</code></div>
<div class="desc">Waypoint location. Can be an address string or <code>LatLng</code>. Optional.</div></td>
</tr>
<tr>
<td><code><span>stopover</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">If <code>true</code>, indicates that this waypoint is a stop between the origin and destination. This has the effect of splitting the route into two. This value is <code>true</code> by default. Optional.</div></td>
</tr>
</tbody>
</table></div>