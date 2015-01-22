<h2 id="DirectionsStatus">
google.maps.DirectionsStatus
class
</h2><p>The status returned by the <code>DirectionsService</code> on the completion of a call to <code>route()</code>.</p><h3 id="devsite_header_119">Constant</h3><table summary="class DirectionsStatus - Constants" width="100%">
<thead>
<tr><th>Constant</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>INVALID_REQUEST</code></td>
<td>The <code>DirectionsRequest</code> provided was invalid.</td>
</tr>
<tr>
<td><code>MAX_WAYPOINTS_EXCEEDED</code></td>
<td>Too many <code>DirectionsWaypoint</code>s were provided in the <code>DirectionsRequest</code>. The total allowed waypoints is 8, plus the origin and destination. Maps API for Work customers are allowed 23 waypoints, plus the origin, and destination.</td>
</tr>
<tr>
<td><code>NOT_FOUND</code></td>
<td>At least one of the origin, destination, or waypoints could not be geocoded.</td>
</tr>
<tr>
<td><code>OK</code></td>
<td>The response contains a valid <code>DirectionsResult</code>.</td>
</tr>
<tr>
<td><code>OVER_QUERY_LIMIT</code></td>
<td>The webpage has gone over the requests limit in too short a period of time.</td>
</tr>
<tr>
<td><code>REQUEST_DENIED</code></td>
<td>The webpage is not allowed to use the directions service.</td>
</tr>
<tr>
<td><code>UNKNOWN_ERROR</code></td>
<td>A directions request could not be processed due to a server error. The request may succeed if you try again.</td>
</tr>
<tr>
<td><code>ZERO_RESULTS</code></td>
<td>No route could be found between the origin and destination.</td>
</tr>
</tbody>
</table>