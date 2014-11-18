<h2 id="DistanceMatrixRequest">
google.maps.DistanceMatrixRequest
object specification
</h2><p>A distance matrix query sent by the <code>DistanceMatrixService</code> containing arrays of origin and destination locations, and various options for computing metrics.</p><h3>Properties</h3><table summary="interface DistanceMatrixRequest - Properties" width="100%">
<thead>
<tr><th>Properties</th>
<th>Type</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>avoidFerries</code></td>
<td><code>boolean</code></td>
<td>If true, instructs the Distance Matrix service to avoid ferries where possible. Optional.</td>
</tr>
<tr>
<td><code>avoidHighways</code></td>
<td><code>boolean</code></td>
<td>If true, instructs the Distance Matrix service to avoid highways where possible. Optional.</td>
</tr>
<tr>
<td><code>avoidTolls</code></td>
<td><code>boolean</code></td>
<td>If true, instructs the Distance Matrix service to avoid toll roads where possible. Optional.</td>
</tr>
<tr>
<td><code>destinations</code></td>
<td><code>Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLng.md">LatLng</a>&gt;|Array&lt;string&gt;</code></td>
<td>An array containing destination address strings and/or <code>LatLng</code>s, to which to calculate distance and time. Required.</td>
</tr>
<tr>
<td><code>durationInTraffic</code></td>
<td><code>boolean</code></td>
<td>Whether or not we should provide trip durations based on current traffic conditions. Only available to Maps API for Work customers.</td>
</tr>
<tr>
<td><code>origins</code></td>
<td><code>Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLng.md">LatLng</a>&gt;|Array&lt;string&gt;</code></td>
<td>An array containing origin address strings and/or <code>LatLng</code>s, from which to calculate distance and time. Required.</td>
</tr>
<tr>
<td><code>region</code></td>
<td><code>string</code></td>
<td>Region code used as a bias for geocoding requests. Optional.</td>
</tr>
<tr>
<td><code>travelMode</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.TravelMode.md">TravelMode</a></code></td>
<td>Type of routing requested. Required.</td>
</tr>
<tr>
<td><code>unitSystem</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.UnitSystem.md">UnitSystem</a></code></td>
<td>Preferred unit system to use when displaying distance. Optional; defaults to metric.</td>
</tr>
</tbody>
</table>