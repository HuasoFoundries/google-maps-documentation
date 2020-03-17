
<devsite-heading text=" DirectionsWaypoint interface" for="DirectionsWaypoint" level="h2" link="" toc="" back-to-top=""><h2 id="DirectionsWaypoint" is-upgraded="">DirectionsWaypoint interface</h2></devsite-heading>
<p>
<code translate="no" dir="ltr"><span itemprop="path">google.maps</span>.<span itemprop="name">DirectionsWaypoint</span></code>
interface
</p>
<p>A <code translate="no" dir="ltr">DirectionsWaypoint</code> represents a location between origin and destination through which the trip should be routed.</p>
<div class="devsite-table-wrapper"><table class="properties responsive" summary="interface DirectionsWaypoint - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="DirectionsWaypoint.location">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#DirectionsWaypoint.location"><span>location</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">string|<a href="LatLng.md">LatLng</a>|<a href="Place.md">Place</a> <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Waypoint location. Can be an address string, a <code translate="no" dir="ltr">LatLng</code>, or a <code translate="no" dir="ltr">Place</code>. Optional.</div></td>
</tr>
<tr id="DirectionsWaypoint.stopover">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#DirectionsWaypoint.stopover"><span>stopover</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">boolean <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">If <code translate="no" dir="ltr">true</code>, indicates that this waypoint is a stop between the origin and destination. This has the effect of splitting the route into two legs. If <code translate="no" dir="ltr">false</code>, indicates that the route should be biased to go through this waypoint, but not split into two legs. This is useful if you want to create a route in response to the user dragging waypoints on a map. This value is <code translate="no" dir="ltr">true</code> by default. Optional.</div></td>
</tr>
</tbody>
</table></div>
