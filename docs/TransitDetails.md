<h2 id="TransitDetails"> TransitDetails interface </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">TransitDetails</span></code>
interface
</p><p>Details about the departure, arrival, and mode of transit used in this step.</p><div class="devsite-table-wrapper"><table class="properties responsive" summary="interface TransitDetails - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="TransitDetails.arrival_stop">
<td><code><span>arrival_stop</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/TransitStop.md">TransitStop</a></code></div>
<div class="desc">The arrival stop of this transit step.</div></td>
</tr>
<tr id="TransitDetails.arrival_time">
<td><code><span>arrival_time</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Time.md">Time</a></code></div>
<div class="desc">The arrival time of this step, specified as a Time object.</div></td>
</tr>
<tr id="TransitDetails.departure_stop">
<td><code><span>departure_stop</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/TransitStop.md">TransitStop</a></code></div>
<div class="desc">The departure stop of this transit step.</div></td>
</tr>
<tr id="TransitDetails.departure_time">
<td><code><span>departure_time</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Time.md">Time</a></code></div>
<div class="desc">The departure time of this step, specified as a Time object.</div></td>
</tr>
<tr id="TransitDetails.headsign">
<td><code><span>headsign</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">The direction in which to travel on this line, as it is marked on the vehicle or at the departure stop.</div></td>
</tr>
<tr id="TransitDetails.headway">
<td><code><span>headway</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">The expected number of seconds between equivalent vehicles at this stop.</div></td>
</tr>
<tr id="TransitDetails.line">
<td><code><span>line</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/TransitLine.md">TransitLine</a></code></div>
<div class="desc">Details about the transit line used in this step.</div></td>
</tr>
<tr id="TransitDetails.num_stops">
<td><code><span>num_stops</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">The number of stops on this step. Includes the arrival stop, but not the departure stop.</div></td>
</tr>
</tbody>
</table></div>