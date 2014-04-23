<h2 id="TransitOptions">
google.maps.TransitOptions
object specification
</h2><p>The TransitOptions object to be included in a <code><a href="#DirectionsRequest">DirectionsRequest</a></code> when the travel mode is set to TRANSIT.</p><h3>Properties</h3><table summary="interface TransitOptions - Properties" width="100%">
<thead>
<tr><th>Properties</th>
<th>Type</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>arrivalTime</code></td>
<td><code>Date</code></td>
<td>The desired arrival time for the route, specified as a Date object. The Date object measures time in milliseconds since 1 January 1970. If arrival time is specified, departure time is ignored.</td>
</tr>
<tr>
<td><code>departureTime</code></td>
<td><code>Date</code></td>
<td>The desired departure time for the route, specified as a Date object. The Date object measures time in milliseconds since 1 January 1970. If neither departure time nor arrival time is specified, the time is assumed to be "now".</td>
</tr>
</tbody>
</table>