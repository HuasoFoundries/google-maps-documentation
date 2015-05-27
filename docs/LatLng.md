<h2 id="LatLng">
LatLng
class
</h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">LatLng</span></code>
class
</p><p>A <code>LatLng</code> is a point in geographical coordinates: latitude and longitude.<br> </p><ul> <li>Latitude ranges between -90 and 90 degrees, inclusive. Values above or below this range will be clamped to the range [-90, 90]. This means that if the value specified is less than -90, it will be set to -90. And if the value is greater than 90, it will be set to 90.</li> <li>Longitude ranges between -180 and 180 degrees, inclusive. Values above or below this range will be wrapped so that they fall within the range. For example, a value of -190 will be converted to 170. A value of 190 will be converted to -170. This reflects the fact that longitudes wrap around the globe.</li> </ul><em>first</em><br><code>LatLng</code><br><p></p><table class="constructors responsive" summary="class LatLng - Constructor">
<thead>
<tr><th colspan="2">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code>LatLng(lat:number, lng:number, noWrap?:boolean)</code></td>
<td>Creates a <code>LatLng</code> object representing a geographic point. Latitude is specified in degrees within the range [-90, 90]. Longitude is specified in degrees within the range [-180, 180]. Set <code>noWrap</code> to <code>true</code> to enable values outside of this range. Note the ordering of latitude and longitude.</td>
</tr>
</tbody>
</table><table class="methods responsive" summary="class LatLng - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr>
<td><code>equals(other:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a>)</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">Comparison function.</div></td>
</tr>
<tr>
<td><code>lat()</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>number</code></div>
<div class="desc">Returns the latitude in degrees.</div></td>
</tr>
<tr>
<td><code>lng()</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>number</code></div>
<div class="desc">Returns the longitude in degrees.</div></td>
</tr>
<tr>
<td><code>toString()</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>string</code></div>
<div class="desc">Converts to string representation.</div></td>
</tr>
<tr>
<td><code>toUrlValue(precision?:number)</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>string</code></div>
<div class="desc">Returns a string of the form "lat,lng" for this LatLng. We round the lat/lng values to 6 decimal places by default.</div></td>
</tr>
</tbody>
</table>