
<devsite-heading text=" TransitDetails interface" for="TransitDetails" level="h2" link="" toc="" back-to-top=""><h2 id="TransitDetails" is-upgraded="">TransitDetails interface </h2></devsite-heading>
<p>
<code translate="no" dir="ltr"><span itemprop="path">google.maps</span>.<span itemprop="name">TransitDetails</span></code>
interface
</p>
<p>Details about the departure, arrival, and mode of transit used in this step.</p>
<div class="devsite-table-wrapper"><table class="properties responsive" summary="interface TransitDetails - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="TransitDetails.arrival_stop">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#TransitDetails.arrival_stop"><span>arrival_stop</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr"><a href="TransitStop.md">TransitStop</a></code></div>
<div class="desc">The arrival stop of this transit step.</div></td>
</tr>
<tr id="TransitDetails.arrival_time">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#TransitDetails.arrival_time"><span>arrival_time</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr"><a href="Time.md">Time</a></code></div>
<div class="desc">The arrival time of this step, specified as a Time object.</div></td>
</tr>
<tr id="TransitDetails.departure_stop">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#TransitDetails.departure_stop"><span>departure_stop</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr"><a href="TransitStop.md">TransitStop</a></code></div>
<div class="desc">The departure stop of this transit step.</div></td>
</tr>
<tr id="TransitDetails.departure_time">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#TransitDetails.departure_time"><span>departure_time</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr"><a href="Time.md">Time</a></code></div>
<div class="desc">The departure time of this step, specified as a Time object.</div></td>
</tr>
<tr id="TransitDetails.headsign">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#TransitDetails.headsign"><span>headsign</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">string</code></div>
<div class="desc">The direction in which to travel on this line, as it is marked on the vehicle or at the departure stop.</div></td>
</tr>
<tr id="TransitDetails.headway">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#TransitDetails.headway"><span>headway</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">number</code></div>
<div class="desc">The expected number of seconds between equivalent vehicles at this stop.</div></td>
</tr>
<tr id="TransitDetails.line">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#TransitDetails.line"><span>line</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr"><a href="TransitLine.md">TransitLine</a></code></div>
<div class="desc">Details about the transit line used in this step.</div></td>
</tr>
<tr id="TransitDetails.num_stops">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#TransitDetails.num_stops"><span>num_stops</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">number</code></div>
<div class="desc">The number of stops on this step. Includes the arrival stop, but not the departure stop.</div></td>
</tr>
<tr id="TransitDetails.trip_short_name">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#TransitDetails.trip_short_name"><span>trip_short_name</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">string</code></div>
<div class="desc">The text that appears in schedules and sign boards to identify a transit trip to passengers, for example, to identify train numbers for commuter rail trips. The text uniquely identifies a trip within a service day.</div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
