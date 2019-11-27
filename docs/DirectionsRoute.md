
<devsite-heading text=" DirectionsRoute interface" for="DirectionsRoute" level="h2" link="" toc="" back-to-top=""><h2 id="DirectionsRoute" is-upgraded="">DirectionsRoute interface </h2></devsite-heading>
<p>
<code translate="no" dir="ltr"><span itemprop="path">google.maps</span>.<span itemprop="name">DirectionsRoute</span></code>
interface
</p>
<p>A single route containing a set of legs in a <code translate="no" dir="ltr"><a href="DirectionsResult.md">DirectionsResult</a></code>. Note that though this object is "JSON-like," it is not strictly JSON, as it directly and indirectly includes <code translate="no" dir="ltr">LatLng</code> objects.</p>
<div class="devsite-table-wrapper"><table class="properties responsive" summary="interface DirectionsRoute - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="DirectionsRoute.bounds">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#DirectionsRoute.bounds"><span>bounds</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr"><a href="LatLngBounds.md">LatLngBounds</a></code></div>
<div class="desc">The bounds for this route.</div></td>
</tr>
<tr id="DirectionsRoute.copyrights">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#DirectionsRoute.copyrights"><span>copyrights</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">string</code></div>
<div class="desc">Copyrights text to be displayed for this route.</div></td>
</tr>
<tr id="DirectionsRoute.fare">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#DirectionsRoute.fare"><span>fare</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr"><a href="TransitFare.md">TransitFare</a></code></div>
<div class="desc">The total fare for the whole transit trip. Only applicable to transit requests.</div></td>
</tr>
<tr id="DirectionsRoute.legs">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#DirectionsRoute.legs"><span>legs</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">Array&lt;<a href="DirectionsLeg.md">DirectionsLeg</a>&gt;</code></div>
<div class="desc">An array of <code translate="no" dir="ltr">DirectionsLeg</code>s, each of which contains information about the steps of which it is composed. There will be one leg for each stopover waypoint or destination specified. So a route with no stopover waypoints will contain one <code translate="no" dir="ltr">DirectionsLeg</code> and a route with one stopover waypoint will contain two.</div></td>
</tr>
<tr id="DirectionsRoute.overview_path">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#DirectionsRoute.overview_path"><span>overview_path</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">Array&lt;<a href="LatLng.md">LatLng</a>&gt;</code></div>
<div class="desc">An array of <code translate="no" dir="ltr">LatLng</code>s representing the entire course of this route. The path is simplified in order to make it suitable in contexts where a small number of vertices is required (such as Static Maps API URLs).</div></td>
</tr>
<tr id="DirectionsRoute.overview_polyline">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#DirectionsRoute.overview_polyline"><span>overview_polyline</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">string</code></div>
<div class="desc">An <a href="/maps/documentation/utilities/polylinealgorithm">encoded polyline representation</a> of the route in overview_path. This polyline is an approximate (smoothed) path of the resulting directions.</div></td>
</tr>
<tr id="DirectionsRoute.warnings">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#DirectionsRoute.warnings"><span>warnings</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">Array&lt;string&gt;</code></div>
<div class="desc">Warnings to be displayed when showing these directions.</div></td>
</tr>
<tr id="DirectionsRoute.waypoint_order">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#DirectionsRoute.waypoint_order"><span>waypoint_order</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">Array&lt;number&gt;</code></div>
<div class="desc">If <code translate="no" dir="ltr">optimizeWaypoints</code> was set to <code translate="no" dir="ltr">true</code>, this field will contain the re-ordered permutation of the input waypoints. For example, if the input was:<br> &nbsp;&nbsp;Origin: Los Angeles<br> &nbsp;&nbsp;Waypoints: Dallas, Bangor, Phoenix<br> &nbsp;&nbsp;Destination: New York<br> and the optimized output was ordered as follows:<br> &nbsp;&nbsp;Origin: Los Angeles<br> &nbsp;&nbsp;Waypoints: Phoenix, Dallas, Bangor<br> &nbsp;&nbsp;Destination: New York<br> then this field will be an <code translate="no" dir="ltr">Array</code> containing the values [2, 0, 1]. Note that the numbering of waypoints is zero-based.<br> If any of the input waypoints has <code translate="no" dir="ltr">stopover</code> set to <code translate="no" dir="ltr">false</code>, this field will be empty, since route optimization is not available for such queries.</div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
