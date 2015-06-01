<h2 id="DirectionsRoute"> DirectionsRoute object specification </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">DirectionsRoute</span></code>
object specification
</p><p>A single route containing a set of legs in a <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/DirectionsResult.md">DirectionsResult</a></code>. Note that though this object is "JSON-like," it is not strictly JSON, as it directly and indirectly includes <code>LatLng</code> objects.</p><div class="devsite-table-wrapper"><table class="properties responsive" summary="interface DirectionsRoute - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>bounds</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLngBounds.md">LatLngBounds</a></code></div>
<div class="desc">The bounds for this route.</div></td>
</tr>
<tr>
<td><code><span>copyrights</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">Copyrights text to be displayed for this route.</div></td>
</tr>
<tr>
<td><code><span>fare</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/TransitFare.md">TransitFare</a></code></div>
<div class="desc">The total fare for the whole transit trip. Only applicable to transit requests.</div></td>
</tr>
<tr>
<td><code><span>legs</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/DirectionsLeg.md">DirectionsLeg</a>&gt;</code></div>
<div class="desc">An array of <code>DirectionsLeg</code>s, each of which contains information about the steps of which it is composed. There will be one leg for each waypoint or destination specified. So a route with no waypoints will contain one <code>DirectionsLeg</code> and a route with one waypoint will contain two.</div></td>
</tr>
<tr>
<td><code><span>overview_path</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a>&gt;</code></div>
<div class="desc">An array of <code>LatLng</code>s representing the entire course of this route. The path is simplified in order to make it suitable in contexts where a small number of vertices is required (such as Static Maps API URLs).</div></td>
</tr>
<tr>
<td><code><span>overview_polyline</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">An <a href="/maps/documentation/utilities/polylinealgorithm">encoded polyline representation</a> of the route in overview_path. This polyline is an approximate (smoothed) path of the resulting directions.</div></td>
</tr>
<tr>
<td><code><span>warnings</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>Array&lt;string&gt;</code></div>
<div class="desc">Warnings to be displayed when showing these directions.</div></td>
</tr>
<tr>
<td><code><span>waypoint_order</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>Array&lt;number&gt;</code></div>
<div class="desc">If <code>optimizeWaypoints</code> was set to <code>true</code>, this field will contain the re-ordered permutation of the input waypoints. For example, if the input was:<br> &nbsp;&nbsp;Origin: Los Angeles<br> &nbsp;&nbsp;Waypoints: Dallas, Bangor, Phoenix<br> &nbsp;&nbsp;Destination: New York<br> and the optimized output was ordered as follows:<br> &nbsp;&nbsp;Origin: Los Angeles<br> &nbsp;&nbsp;Waypoints: Phoenix, Dallas, Bangor<br> &nbsp;&nbsp;Destination: New York<br> then this field will be an <code>Array</code> containing the values [2, 0, 1]. Note that the numbering of waypoints is zero-based.<br> If any of the input waypoints has <code>stopover</code> set to <code>false</code>, this field will be empty, since route optimization is not available for such queries.</div></td>
</tr>
</tbody>
</table></div>