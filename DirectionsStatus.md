
<devsite-heading text=" DirectionsStatus constants" for="DirectionsStatus" level="h2" link="" toc="" back-to-top=""><h2 id="DirectionsStatus" is-upgraded="">DirectionsStatus constants</h2></devsite-heading>
<p>
<code translate="no" dir="ltr"><span itemprop="path">google.maps</span>.<span itemprop="name">DirectionsStatus</span></code>
constants
</p>
<p>The status returned by the <code translate="no" dir="ltr">DirectionsService</code> on the completion of a call to <code translate="no" dir="ltr">route()</code>. Specify these by value, or by using the constant's name. For example, <code translate="no" dir="ltr">'OK'</code> or <code translate="no" dir="ltr">google.maps.DirectionsStatus.OK</code>.</p>
<div class="devsite-table-wrapper"><table class="constants responsive" summary="DirectionsStatus constants">
<thead>
<tr><th colspan="2">Constants</th>
</tr></thead>
<tbody>
<tr id="DirectionsStatus.INVALID_REQUEST">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#DirectionsStatus.INVALID_REQUEST"><span>INVALID_REQUEST</span></a></code></td>
<td>The <code translate="no" dir="ltr"><span>DirectionsRequest</span></code> provided was invalid.</td>
</tr>
<tr id="DirectionsStatus.MAX_WAYPOINTS_EXCEEDED">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#DirectionsStatus.MAX_WAYPOINTS_EXCEEDED"><span>MAX_WAYPOINTS_EXCEEDED</span></a></code></td>
<td>Too many <code translate="no" dir="ltr"><span>DirectionsWaypoint</span></code>s were provided in the <code translate="no" dir="ltr"><span>DirectionsRequest</span></code>. See the <a href="/maps/documentation/javascript/directions#UsageLimits"> developer's guide</a> for the maximum number of waypoints allowed.</td>
</tr>
<tr id="DirectionsStatus.NOT_FOUND">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#DirectionsStatus.NOT_FOUND"><span>NOT_FOUND</span></a></code></td>
<td>At least one of the origin, destination, or waypoints could not be geocoded.</td>
</tr>
<tr id="DirectionsStatus.OK">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#DirectionsStatus.OK"><span>OK</span></a></code></td>
<td>The response contains a valid <code translate="no" dir="ltr"><span>DirectionsResult</span></code>.</td>
</tr>
<tr id="DirectionsStatus.OVER_QUERY_LIMIT">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#DirectionsStatus.OVER_QUERY_LIMIT"><span>OVER_QUERY_LIMIT</span></a></code></td>
<td>The webpage has gone over the requests limit in too short a period of time.</td>
</tr>
<tr id="DirectionsStatus.REQUEST_DENIED">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#DirectionsStatus.REQUEST_DENIED"><span>REQUEST_DENIED</span></a></code></td>
<td>The webpage is not allowed to use the directions service.</td>
</tr>
<tr id="DirectionsStatus.UNKNOWN_ERROR">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#DirectionsStatus.UNKNOWN_ERROR"><span>UNKNOWN_ERROR</span></a></code></td>
<td>A directions request could not be processed due to a server error. The request may succeed if you try again.</td>
</tr>
<tr id="DirectionsStatus.ZERO_RESULTS">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#DirectionsStatus.ZERO_RESULTS"><span>ZERO_RESULTS</span></a></code></td>
<td>No route could be found between the origin and destination.</td>
</tr>
</tbody>
</table></div>
