<h2 id="DirectionsStatus"> DirectionsStatus constants </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">DirectionsStatus</span></code>
constants
</p><p>The status returned by the <code>DirectionsService</code> on the completion of a call to <code>route()</code>. Specify these by value, or by using the constant's name. For example, <code>'OK'</code> or <code>google.maps.DirectionsStatus.OK</code>.</p><div class="devsite-table-wrapper"><table class="constants responsive" summary="DirectionsStatus constants">
<thead>
<tr><th colspan="2">Constants</th>
</tr></thead>
<tbody>
<tr id="DirectionsStatus.INVALID_REQUEST">
<td><code><span>INVALID_REQUEST</span></code></td>
<td>The <code><span>DirectionsRequest</span></code> provided was invalid.</td>
</tr>
<tr id="DirectionsStatus.MAX_WAYPOINTS_EXCEEDED">
<td><code><span>MAX_WAYPOINTS_EXCEEDED</span></code></td>
<td>Too many <code><span>DirectionsWaypoint</span></code>s were provided in the <code><span>DirectionsRequest</span></code>. See the <a href="https://developers.google.com/maps/documentation/javascript/directions#UsageLimits"> developer's guide</a> for the maximum number of waypoints allowed.</td>
</tr>
<tr id="DirectionsStatus.NOT_FOUND">
<td><code><span>NOT_FOUND</span></code></td>
<td>At least one of the origin, destination, or waypoints could not be geocoded.</td>
</tr>
<tr id="DirectionsStatus.OK">
<td><code><span>OK</span></code></td>
<td>The response contains a valid <code><span>DirectionsResult</span></code>.</td>
</tr>
<tr id="DirectionsStatus.OVER_QUERY_LIMIT">
<td><code><span>OVER_QUERY_LIMIT</span></code></td>
<td>The webpage has gone over the requests limit in too short a period of time.</td>
</tr>
<tr id="DirectionsStatus.REQUEST_DENIED">
<td><code><span>REQUEST_DENIED</span></code></td>
<td>The webpage is not allowed to use the directions service.</td>
</tr>
<tr id="DirectionsStatus.UNKNOWN_ERROR">
<td><code><span>UNKNOWN_ERROR</span></code></td>
<td>A directions request could not be processed due to a server error. The request may succeed if you try again.</td>
</tr>
<tr id="DirectionsStatus.ZERO_RESULTS">
<td><code><span>ZERO_RESULTS</span></code></td>
<td>No route could be found between the origin and destination.</td>
</tr>
</tbody>
</table></div>