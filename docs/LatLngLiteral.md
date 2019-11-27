
<devsite-heading text=" LatLngLiteral interface" for="LatLngLiteral" level="h2" link="" toc="" back-to-top=""><h2 id="LatLngLiteral" is-upgraded="">LatLngLiteral interface </h2></devsite-heading>
<p>
<code translate="no" dir="ltr"><span itemprop="path">google.maps</span>.<span itemprop="name">LatLngLiteral</span></code>
interface
</p>
<p>Object literals are accepted in place of <code translate="no" dir="ltr">LatLng</code> objects, as a convenience, in many places. These are converted to <code translate="no" dir="ltr">LatLng</code> objects when the Maps API encounters them. </p><p> Examples: </p><devsite-code no-copy=""><pre translate="no" dir="ltr" is-upgraded=""> map.setCenter({lat: -34, lng: 151});<br> new google.maps.Marker({position: {lat: -34, lng: 151}, map: map}); </pre><div class="devsite-code-buttons-container"><button class="gc-analytics-event material-icons devsite-icon-code-dark devsite-toggle-dark" data-category="Site-Wide Custom Events" data-label="Dark Code Toggle" track-type="exampleCode" track-name="darkCodeToggle" title="Dark code theme"></button><button class="gc-analytics-event material-icons devsite-icon-code-light devsite-toggle-light" data-category="Site-Wide Custom Events" data-label="Light Code Toggle" track-type="exampleCode" track-name="lightCodeToggle" title="Light code theme"></button></div></devsite-code> <p class="note">LatLng object literals are not supported in the Geometry library.</p><p></p>
<div class="devsite-table-wrapper"><table class="properties responsive" summary="interface LatLngLiteral - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="LatLngLiteral.lat">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#LatLngLiteral.lat"><span>lat</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">number</code></div>
<div class="desc">Latitude in degrees. Values will be clamped to the range [-90, 90]. This means that if the value specified is less than -90, it will be set to -90. And if the value is greater than 90, it will be set to 90.</div></td>
</tr>
<tr id="LatLngLiteral.lng">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#LatLngLiteral.lng"><span>lng</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">number</code></div>
<div class="desc">Longitude in degrees. Values outside the range [-180, 180] will be wrapped so that they fall within the range. For example, a value of -190 will be converted to 170. A value of 190 will be converted to -170. This reflects the fact that longitudes wrap around the globe.</div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
