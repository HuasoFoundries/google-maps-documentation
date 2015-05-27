<h2 id="LatLng">
google.maps.LatLng
class
</h2><p>A <code>LatLng</code> is a point in geographical coordinates: latitude and longitude.<br> </p><ul> <li>Latitude ranges between -90 and 90 degrees, inclusive. Values above or below this range will be clamped to the range [-90, 90]. This means that if the value specified is less than -90, it will be set to -90. And if the value is greater than 90, it will be set to 90.</li> <li>Longitude ranges between -180 and 180 degrees, inclusive. Values above or below this range will be wrapped so that they fall within the range. For example, a value of -190 will be converted to 170. A value of 190 will be converted to -170. This reflects the fact that longitudes wrap around the globe.</li> </ul><em>first</em><br><code>LatLng</code><br><p></p><h3>Constructor</h3><table summary="class LatLng - Constructor" width="100%">
<thead>
<tr><th>Constructor</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>LatLng(lat:number, lng:number, noWrap?:boolean)</code></td>
<td>Creates a <code>LatLng</code> object representing a geographic point. Latitude is specified in degrees within the range [-90, 90]. Longitude is specified in degrees within the range [-180, 180]. Set <code>noWrap</code> to <code>true</code> to enable values outside of this range. Note the ordering of latitude and longitude.</td>
</tr>
</tbody>
</table><h3>Methods</h3><table summary="class LatLng - Methods" width="100%">
<thead>
<tr><th>Methods</th>
<th>Return Value</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>equals(other:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLng.md">LatLng</a>)</code></td>
<td><code>boolean</code></td>
<td>Comparison function.</td>
</tr>
<tr>
<td><code>lat()</code></td>
<td><code>number</code></td>
<td>Returns the latitude in degrees.</td>
</tr>
<tr>
<td><code>lng()</code></td>
<td><code>number</code></td>
<td>Returns the longitude in degrees.</td>
</tr>
<tr>
<td><code>toString()</code></td>
<td><code>string</code></td>
<td>Converts to string representation.</td>
</tr>
<tr>
<td><code>toUrlValue(precision?:number)</code></td>
<td><code>string</code></td>
<td>Returns a string of the form "lat,lng" for this LatLng. We round the lat/lng values to 6 decimal places by default.</td>
</tr>
</tbody>
</table>