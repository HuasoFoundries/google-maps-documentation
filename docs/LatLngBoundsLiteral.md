<h2 id="LatLngBoundsLiteral"> LatLngBoundsLiteral object specification </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">LatLngBoundsLiteral</span></code>
object specification
</p><p>Object literals are accepted in place of <code>LatLngBounds</code> objects throughout the API. These are automatically converted to <code>LatLngBounds</code> objects. All <code>south</code>, <code>west</code>, <code>north</code> and <code>east</code> must be set, otherwise an exception is thrown.</p><div class="devsite-table-wrapper"><table class="properties responsive" summary="interface LatLngBoundsLiteral - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>east</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">East longitude in degrees. Values outside the range [-180, 180] will be wrapped to the range [-180, 180). For example, a value of -190 will be converted to 170. A value of 190 will be converted to -170. This reflects the fact that longitudes wrap around the globe.</div></td>
</tr>
<tr>
<td><code><span>north</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">North latitude in degrees. Values will be clamped to the range [-90, 90]. This means that if the value specified is less than -90, it will be set to -90. And if the value is greater than 90, it will be set to 90.</div></td>
</tr>
<tr>
<td><code><span>south</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">South latitude in degrees. Values will be clamped to the range [-90, 90]. This means that if the value specified is less than -90, it will be set to -90. And if the value is greater than 90, it will be set to 90.</div></td>
</tr>
<tr>
<td><code><span>west</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">West longitude in degrees. Values outside the range [-180, 180] will be wrapped to the range [-180, 180). For example, a value of -190 will be converted to 170. A value of 190 will be converted to -170. This reflects the fact that longitudes wrap around the globe.</div></td>
</tr>
</tbody>
</table></div>