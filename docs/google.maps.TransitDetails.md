<h2 id="TransitDetails">
google.maps.TransitDetails
object specification
</h2><h3 id="devsite_header_127">Properties</h3><table summary="interface TransitDetails - Properties" width="100%">
<thead>
<tr><th>Properties</th>
<th>Type</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>arrival_stop</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.TransitStop.md">TransitStop</a></code></td>
<td>The arrival stop of this transit step.</td>
</tr>
<tr>
<td><code>arrival_time</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Time.md">Time</a></code></td>
<td>The arrival time of this step, specified as a Time object.</td>
</tr>
<tr>
<td><code>departure_stop</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.TransitStop.md">TransitStop</a></code></td>
<td>The departure stop of this transit step.</td>
</tr>
<tr>
<td><code>departure_time</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Time.md">Time</a></code></td>
<td>The departure time of this step, specified as a Time object.</td>
</tr>
<tr>
<td><code>headsign</code></td>
<td><code>string</code></td>
<td>The direction in which to travel on this line, as it is marked on the vehicle or at the departure stop.</td>
</tr>
<tr>
<td><code>headway</code></td>
<td><code>number</code></td>
<td>The expected number of seconds between equivalent vehicles at this stop.</td>
</tr>
<tr>
<td><code>line</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.TransitLine.md">TransitLine</a></code></td>
<td>Details about the transit line used in this step.</td>
</tr>
<tr>
<td><code>num_stops</code></td>
<td><code>number</code></td>
<td>The number of stops on this step. Includes the arrival stop, but not the departure stop.</td>
</tr>
</tbody>
</table>