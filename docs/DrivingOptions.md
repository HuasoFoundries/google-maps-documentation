<h2 id="DrivingOptions"> DrivingOptions object specification </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">DrivingOptions</span></code>
object specification
</p><p>Configures the <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/DirectionsRequest.md">DirectionsRequest</a></code> when the travel mode is set to <code>DRIVING</code>.</p><div class="devsite-table-wrapper"><table class="properties responsive" summary="interface DrivingOptions - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>departureTime</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>Date</code></div>
<div class="desc">The desired departure time for the route, specified as a <code>Date</code> object. The <code>Date</code> object measures time in milliseconds since 1 January 1970. This must be specified for a <code>DrivingOptions</code> to be valid. The departure time must be set to the current time or some time in the future. It cannot be in the past.</div></td>
</tr>
<tr>
<td><code><span>trafficModel</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/TrafficModel.md">TrafficModel</a></code></div>
<div class="desc">The preferred assumption to use when predicting duration in traffic. The default is <code>BEST_GUESS</code>.</div></td>
</tr>
</tbody>
</table></div>