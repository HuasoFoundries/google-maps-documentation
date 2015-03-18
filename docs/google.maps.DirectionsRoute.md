<h2 id="DirectionsRoute">
google.maps.DirectionsRoute
object specification
</h2><p>A single route containing a set of legs in a <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.DirectionsResult.md">DirectionsResult</a></code>. Note that though this object is "JSON-like," it is not strictly JSON, as it directly and indirectly includes <code>LatLng</code> objects.</p><h3>Properties</h3><table summary="interface DirectionsRoute - Properties" width="100%">
<thead>
<tr><th>Properties</th>
<th>Type</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>bounds</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLngBounds.md">LatLngBounds</a></code></td>
<td>The bounds for this route.</td>
</tr>
<tr>
<td><code>copyrights</code></td>
<td><code>string</code></td>
<td>Copyrights text to be displayed for this route.</td>
</tr>
<tr>
<td><code>fare</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.TransitFare.md">TransitFare</a></code></td>
<td>The total fare for the whole transit trip. Only applicable to transit requests.</td>
</tr>
<tr>
<td><code>legs</code></td>
<td><code>Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.DirectionsLeg.md">DirectionsLeg</a>&gt;</code></td>
<td>An array of <code>DirectionsLeg</code>s, each of which contains information about the steps of which it is composed. There will be one leg for each waypoint or destination specified. So a route with no waypoints will contain one <code>DirectionsLeg</code> and a route with one waypoint will contain two.</td>
</tr>
<tr>
<td><code>overview_path</code></td>
<td><code>Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLng.md">LatLng</a>&gt;</code></td>
<td>An array of <code>LatLng</code>s representing the entire course of this route. The path is simplified in order to make it suitable in contexts where a small number of vertices is required (such as Static Maps API URLs).</td>
</tr>
<tr>
<td><code>overview_polyline</code></td>
<td><code>string</code></td>
<td>An <a href="/maps/documentation/utilities/polylinealgorithm">encoded polyline representation</a> of the route in overview_path. This polyline is an approximate (smoothed) path of the resulting directions.</td>
</tr>
<tr>
<td><code>warnings</code></td>
<td><code>Array&lt;string&gt;</code></td>
<td>Warnings to be displayed when showing these directions.</td>
</tr>
<tr>
<td><code>waypoint_order</code></td>
<td><code>Array&lt;number&gt;</code></td>
<td>If <code>optimizeWaypoints</code> was set to <code>true</code>, this field will contain the re-ordered permutation of the input waypoints. For example, if the input was:<br> &nbsp;&nbsp;Origin: Los Angeles<br> &nbsp;&nbsp;Waypoints: Dallas, Bangor, Phoenix<br> &nbsp;&nbsp;Destination: New York<br> and the optimized output was ordered as follows:<br> &nbsp;&nbsp;Origin: Los Angeles<br> &nbsp;&nbsp;Waypoints: Phoenix, Dallas, Bangor<br> &nbsp;&nbsp;Destination: New York<br> then this field will be an <code>Array</code> containing the values [2, 0, 1]. Note that the numbering of waypoints is zero-based.<br> If any of the input waypoints has <code>stopover</code> set to <code>false</code>, this field will be empty, since route optimization is not available for such queries.</td>
</tr>
</tbody>
</table>