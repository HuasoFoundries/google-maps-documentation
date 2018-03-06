<h2 id="TransitOptions"> TransitOptions interface </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">TransitOptions</span></code>
interface
</p><p>The TransitOptions object to be included in a <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/DirectionsRequest.md">DirectionsRequest</a></code> when the travel mode is set to TRANSIT.</p><div class="devsite-table-wrapper"><table class="properties responsive" summary="interface TransitOptions - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="TransitOptions.arrivalTime">
<td><code><span>arrivalTime</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>Date</code></div>
<div class="desc">The desired arrival time for the route, specified as a Date object. The Date object measures time in milliseconds since 1 January 1970. If arrival time is specified, departure time is ignored.</div></td>
</tr>
<tr id="TransitOptions.departureTime">
<td><code><span>departureTime</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>Date</code></div>
<div class="desc">The desired departure time for the route, specified as a Date object. The Date object measures time in milliseconds since 1 January 1970. If neither departure time nor arrival time is specified, the time is assumed to be "now".</div></td>
</tr>
<tr id="TransitOptions.modes">
<td><code><span>modes</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/TransitMode.md">TransitMode</a>&gt;</code></div>
<div class="desc">One or more preferred modes of transit, such as bus or train. If no preference is given, the API returns the default best route.</div></td>
</tr>
<tr id="TransitOptions.routingPreference">
<td><code><span>routingPreference</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/TransitRoutePreference.md">TransitRoutePreference</a></code></div>
<div class="desc">A preference that can bias the choice of transit route, such as less walking. If no preference is given, the API returns the default best route.</div></td>
</tr>
</tbody>
</table></div>