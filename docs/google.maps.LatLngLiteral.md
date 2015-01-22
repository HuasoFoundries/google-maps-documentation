<h2 id="LatLngLiteral">
google.maps.LatLngLiteral
object specification
</h2><p>Object literals are accepted in place of <code>LatLng</code> objects, as a convenience, in many places. These are converted to <code>LatLng</code> objects when the Maps API encounters them. </p><p> Examples: </p><pre> map.setCenter({lat: -34, lng: 151});<br> new google.maps.Marker({position: {lat: -34, lng: 151}, map: map}); <br></pre><p class="note">LatLng object literals are not supported in the Geometry library.</p><p></p><h3 id="devsite_header_224">Properties</h3><table summary="interface LatLngLiteral - Properties" width="100%">
<thead>
<tr><th>Properties</th>
<th>Type</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>lat</code></td>
<td><code>number</code></td>
<td>Latitude in degrees. Values will be clamped to the range [-90, 90]. This means that if the value specified is less than -90, it will be set to -90. And if the value is greater than 90, it will be set to 90.</td>
</tr>
<tr>
<td><code>lng</code></td>
<td><code>number</code></td>
<td>Longitude in degrees. Values outside the range [-180, 180] will be wrapped so that they fall within the range. For example, a value of -190 will be converted to 170. A value of 190 will be converted to -170. This reflects the fact that longitudes wrap around the globe.</td>
</tr>
</tbody>
</table><p></p>