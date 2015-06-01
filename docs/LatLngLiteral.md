<h2 id="LatLngLiteral"> LatLngLiteral object specification </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">LatLngLiteral</span></code>
object specification
</p><p>Object literals are accepted in place of <code>LatLng</code> objects, as a convenience, in many places. These are converted to <code>LatLng</code> objects when the Maps API encounters them. </p><p> Examples: </p><pre> map.setCenter({lat: -34, lng: 151});<br> new google.maps.Marker({position: {lat: -34, lng: 151}, map: map}); </pre><p class="note">LatLng object literals are not supported in the Geometry library.</p><p></p><div class="devsite-table-wrapper"><table class="properties responsive" summary="interface LatLngLiteral - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>lat</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">Latitude in degrees. Values will be clamped to the range [-90, 90]. This means that if the value specified is less than -90, it will be set to -90. And if the value is greater than 90, it will be set to 90.</div></td>
</tr>
<tr>
<td><code><span>lng</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">Longitude in degrees. Values outside the range [-180, 180] will be wrapped so that they fall within the range. For example, a value of -190 will be converted to 170. A value of 190 will be converted to -170. This reflects the fact that longitudes wrap around the globe.</div></td>
</tr>
</tbody>
</table></div>