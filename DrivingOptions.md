
<devsite-heading text=" DrivingOptions interface" for="DrivingOptions" level="h2" link="" toc="" back-to-top=""><h2 id="DrivingOptions" is-upgraded="">DrivingOptions interface</h2></devsite-heading>
<p>
<code translate="no" dir="ltr"><span itemprop="path">google.maps</span>.<span itemprop="name">DrivingOptions</span></code>
interface
</p>
<p>Configures the <code translate="no" dir="ltr"><a href="DirectionsRequest.md">DirectionsRequest</a></code> when the travel mode is set to <code translate="no" dir="ltr">DRIVING</code>.</p>
<div class="devsite-table-wrapper"><table class="properties responsive" summary="interface DrivingOptions - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="DrivingOptions.departureTime">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#DrivingOptions.departureTime"><span>departureTime</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">Date</code></div>
<div class="desc">The desired departure time for the route, specified as a <code translate="no" dir="ltr">Date</code> object. The <code translate="no" dir="ltr">Date</code> object measures time in milliseconds since 1 January 1970. This must be specified for a <code translate="no" dir="ltr">DrivingOptions</code> to be valid. The departure time must be set to the current time or some time in the future. It cannot be in the past.</div></td>
</tr>
<tr id="DrivingOptions.trafficModel">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#DrivingOptions.trafficModel"><span>trafficModel</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr"><a href="TrafficModel.md">TrafficModel</a> <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The preferred assumption to use when predicting duration in traffic. The default is <code translate="no" dir="ltr">BEST_GUESS</code>.</div></td>
</tr>
</tbody>
</table></div>
