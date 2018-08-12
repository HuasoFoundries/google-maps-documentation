
<h2 id="DirectionsGeocodedWaypoint">DirectionsGeocodedWaypoint interface</h2>
<p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">DirectionsGeocodedWaypoint</span></code>
interface
</p>
<p>A single geocoded waypoint.</p>
<div class="devsite-table-wrapper"><table class="properties responsive" summary="interface DirectionsGeocodedWaypoint - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="DirectionsGeocodedWaypoint.partial_match">
<td itemprop="property"><code><a class="secret-link" href="#DirectionsGeocodedWaypoint.partial_match"><span>partial_match</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">Whether the geocoder did not return an exact match for the original waypoint, though it was able to match part of the requested address.</div></td>
</tr>
<tr id="DirectionsGeocodedWaypoint.place_id">
<td itemprop="property"><code><a class="secret-link" href="#DirectionsGeocodedWaypoint.place_id"><span>place_id</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">The place ID associated with the waypoint. Place IDs uniquely identify a place in the Google Places database and on Google Maps. Learn more about <a href="https://developers.google.com/places/place-id">Place IDs</a> in the Places API developer guide.</div></td>
</tr>
<tr id="DirectionsGeocodedWaypoint.types">
<td itemprop="property"><code><a class="secret-link" href="#DirectionsGeocodedWaypoint.types"><span>types</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>Array&lt;string&gt;</code></div>
<div class="desc">An array of strings denoting the type of the returned geocoded element. For a list of possible strings, refer to the <a href="https://developers.google.com/maps/documentation/javascript/geocoding#GeocodingAddressTypes"> Address Component Types</a> section of the Developer's Guide.</div></td>
</tr>
</tbody>
</table></div>
