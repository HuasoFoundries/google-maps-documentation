
<devsite-heading text=" DirectionsGeocodedWaypoint interface" for="DirectionsGeocodedWaypoint" level="h2" link="" toc="" back-to-top=""><h2 id="DirectionsGeocodedWaypoint" is-upgraded="">DirectionsGeocodedWaypoint interface</h2></devsite-heading>
<p>
<code translate="no" dir="ltr"><span itemprop="path">google.maps</span>.<span itemprop="name">DirectionsGeocodedWaypoint</span></code>
interface
</p>
<p>A single geocoded waypoint.</p>
<div class="devsite-table-wrapper"><table class="properties responsive" summary="interface DirectionsGeocodedWaypoint - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="DirectionsGeocodedWaypoint.partial_match">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#DirectionsGeocodedWaypoint.partial_match"><span>partial_match</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">boolean</code></div>
<div class="desc">Whether the geocoder did not return an exact match for the original waypoint, though it was able to match part of the requested address.</div></td>
</tr>
<tr id="DirectionsGeocodedWaypoint.place_id">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#DirectionsGeocodedWaypoint.place_id"><span>place_id</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">string</code></div>
<div class="desc">The place ID associated with the waypoint. Place IDs uniquely identify a place in the Google Places database and on Google Maps. Learn more about <a href="/places/place-id">Place IDs</a> in the Places API developer guide.</div></td>
</tr>
<tr id="DirectionsGeocodedWaypoint.types">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#DirectionsGeocodedWaypoint.types"><span>types</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">Array&lt;string&gt;</code></div>
<div class="desc">An array of strings denoting the type of the returned geocoded element. For a list of possible strings, refer to the <a href="/maps/documentation/javascript/geocoding#GeocodingAddressTypes"> Address Component Types</a> section of the Developer's Guide.</div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
