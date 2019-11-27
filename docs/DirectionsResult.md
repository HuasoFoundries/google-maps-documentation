
<devsite-heading text=" DirectionsResult interface" for="DirectionsResult" level="h2" link="" toc="" back-to-top=""><h2 id="DirectionsResult" is-upgraded="">DirectionsResult interface </h2></devsite-heading>
<p>
<code translate="no" dir="ltr"><span itemprop="path">google.maps</span>.<span itemprop="name">DirectionsResult</span></code>
interface
</p>
<p>The directions response retrieved from the directions server. You can render these using a <code translate="no" dir="ltr"><a href="DirectionsRenderer.md">DirectionsRenderer</a></code> or parse this object and render it yourself. You must display the warnings and copyrights as noted in the <a href="/maps/terms">Google Maps Platform Terms of Service</a>. Note that though this result is "JSON-like," it is not strictly JSON, as it indirectly includes <code translate="no" dir="ltr">LatLng</code> objects.</p>
<div class="devsite-table-wrapper"><table class="properties responsive" summary="interface DirectionsResult - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="DirectionsResult.geocoded_waypoints">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#DirectionsResult.geocoded_waypoints"><span>geocoded_waypoints</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">Array&lt;<a href="DirectionsGeocodedWaypoint.md">DirectionsGeocodedWaypoint</a>&gt;</code></div>
<div class="desc">An array of <code translate="no" dir="ltr">DirectionsGeocodedWaypoint</code>s, each of which contains information about the geocoding of origin, destination and waypoints.</div></td>
</tr>
<tr id="DirectionsResult.routes">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#DirectionsResult.routes"><span>routes</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">Array&lt;<a href="DirectionsRoute.md">DirectionsRoute</a>&gt;</code></div>
<div class="desc">An array of <code translate="no" dir="ltr">DirectionsRoute</code>s, each of which contains information about the legs and steps of which it is composed. There will only be one route unless the <code translate="no" dir="ltr">DirectionsRequest</code> was made with <code translate="no" dir="ltr">provideRouteAlternatives</code> set to <code translate="no" dir="ltr">true</code>.</div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
