
<devsite-heading text=" LatLngBoundsLiteral interface" for="LatLngBoundsLiteral" level="h2" link="" toc="" back-to-top=""><h2 id="LatLngBoundsLiteral" is-upgraded="">LatLngBoundsLiteral interface </h2></devsite-heading>
<p>
<code translate="no" dir="ltr"><span itemprop="path">google.maps</span>.<span itemprop="name">LatLngBoundsLiteral</span></code>
interface
</p>
<p>Object literals are accepted in place of <code translate="no" dir="ltr">LatLngBounds</code> objects throughout the API. These are automatically converted to <code translate="no" dir="ltr">LatLngBounds</code> objects. All <code translate="no" dir="ltr">south</code>, <code translate="no" dir="ltr">west</code>, <code translate="no" dir="ltr">north</code> and <code translate="no" dir="ltr">east</code> must be set, otherwise an exception is thrown.</p>
<div class="devsite-table-wrapper"><table class="properties responsive" summary="interface LatLngBoundsLiteral - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="LatLngBoundsLiteral.east">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#LatLngBoundsLiteral.east"><span>east</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">number</code></div>
<div class="desc">East longitude in degrees. Values outside the range [-180, 180] will be wrapped to the range [-180, 180). For example, a value of -190 will be converted to 170. A value of 190 will be converted to -170. This reflects the fact that longitudes wrap around the globe.</div></td>
</tr>
<tr id="LatLngBoundsLiteral.north">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#LatLngBoundsLiteral.north"><span>north</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">number</code></div>
<div class="desc">North latitude in degrees. Values will be clamped to the range [-90, 90]. This means that if the value specified is less than -90, it will be set to -90. And if the value is greater than 90, it will be set to 90.</div></td>
</tr>
<tr id="LatLngBoundsLiteral.south">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#LatLngBoundsLiteral.south"><span>south</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">number</code></div>
<div class="desc">South latitude in degrees. Values will be clamped to the range [-90, 90]. This means that if the value specified is less than -90, it will be set to -90. And if the value is greater than 90, it will be set to 90.</div></td>
</tr>
<tr id="LatLngBoundsLiteral.west">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#LatLngBoundsLiteral.west"><span>west</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">number</code></div>
<div class="desc">West longitude in degrees. Values outside the range [-180, 180] will be wrapped to the range [-180, 180). For example, a value of -190 will be converted to 170. A value of 190 will be converted to -170. This reflects the fact that longitudes wrap around the globe.</div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
