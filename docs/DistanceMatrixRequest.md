<h2 id="DistanceMatrixRequest">
DistanceMatrixRequest
object specification
</h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">DistanceMatrixRequest</span></code>
object specification
</p><p>A distance matrix query sent by the <code>DistanceMatrixService</code> containing arrays of origin and destination locations, and various options for computing metrics.</p><table class="properties responsive" summary="interface DistanceMatrixRequest - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr>
<td><code>avoidFerries</code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">If true, instructs the Distance Matrix service to avoid ferries where possible. Optional.</div></td>
</tr>
<tr>
<td><code>avoidHighways</code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">If true, instructs the Distance Matrix service to avoid highways where possible. Optional.</div></td>
</tr>
<tr>
<td><code>avoidTolls</code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">If true, instructs the Distance Matrix service to avoid toll roads where possible. Optional.</div></td>
</tr>
<tr>
<td><code>destinations</code></td>
<td><div><strong>Type:</strong>&nbsp; <code>Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a>&gt;|Array&lt;string&gt;</code></div>
<div class="desc">An array containing destination address strings and/or <code>LatLng</code>s, to which to calculate distance and time. Required.</div></td>
</tr>
<tr>
<td><code>durationInTraffic</code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">Whether or not we should provide trip durations based on current traffic conditions. Only available to Maps API for Work customers.</div></td>
</tr>
<tr>
<td><code>origins</code></td>
<td><div><strong>Type:</strong>&nbsp; <code>Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a>&gt;|Array&lt;string&gt;</code></div>
<div class="desc">An array containing origin address strings and/or <code>LatLng</code>s, from which to calculate distance and time. Required.</div></td>
</tr>
<tr>
<td><code>region</code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">Region code used as a bias for geocoding requests. Optional.</div></td>
</tr>
<tr>
<td><code>transitOptions</code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/TransitOptions.md">TransitOptions</a></code></div>
<div class="desc">Settings that apply only to requests where <code>travelMode</code> is TRANSIT. This object will have no effect for other travel modes.</div></td>
</tr>
<tr>
<td><code>travelMode</code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/TravelMode.md">TravelMode</a></code></div>
<div class="desc">Type of routing requested. Required.</div></td>
</tr>
<tr>
<td><code>unitSystem</code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/UnitSystem.md">UnitSystem</a></code></div>
<div class="desc">Preferred unit system to use when displaying distance. Optional; defaults to metric.</div></td>
</tr>
</tbody>
</table>