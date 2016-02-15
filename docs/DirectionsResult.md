<h2 id="DirectionsResult"> DirectionsResult object specification </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">DirectionsResult</span></code>
object specification
</p><p>The directions response retrieved from the directions server. You can render these using a <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/DirectionsRenderer.md">DirectionsRenderer</a></code> or parse this object and render it yourself. You must display the warnings and copyrights as noted in the <a href="https://developers.google.com/maps/terms">Maps API terms of service</a>. Note that though this result is "JSON-like," it is not strictly JSON, as it indirectly includes <code>LatLng</code> objects.</p><div class="devsite-table-wrapper"><table class="properties responsive" summary="interface DirectionsResult - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>geocoded_waypoints</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/DirectionsGeocodedWaypoint.md">DirectionsGeocodedWaypoint</a>&gt;</code></div>
<div class="desc">An array of <code>DirectionsGeocodedWaypoint</code>s, each of which contains information about the geocoding of origin, destination and waypoints.</div></td>
</tr>
<tr>
<td><code><span>routes</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/DirectionsRoute.md">DirectionsRoute</a>&gt;</code></div>
<div class="desc">An array of <code>DirectionsRoute</code>s, each of which contains information about the legs and steps of which it is composed. There will only be one route unless the <code>DirectionsRequest</code> was made with <code>provideRouteAlternatives</code> set to <code>true</code>.</div></td>
</tr>
</tbody>
</table></div>