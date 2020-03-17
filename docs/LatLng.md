
<devsite-heading text=" LatLng class" for="LatLng" level="h2" link="" toc="" back-to-top=""><h2 id="LatLng" is-upgraded="">LatLng class</h2></devsite-heading>
<p>
<code translate="no" dir="ltr"><span itemprop="path">google.maps</span>.<span itemprop="name">LatLng</span></code>
class
</p>
<p>A <code translate="no" dir="ltr">LatLng</code> is a point in geographical coordinates: latitude and longitude.<br> </p><ul> <li>Latitude ranges between -90 and 90 degrees, inclusive. Values above or below this range will be clamped to the range [-90, 90]. This means that if the value specified is less than -90, it will be set to -90. And if the value is greater than 90, it will be set to 90.</li> <li>Longitude ranges between -180 and 180 degrees, inclusive. Values above or below this range will be wrapped so that they fall within the range. For example, a value of -190 will be converted to 170. A value of 190 will be converted to -170. This reflects the fact that longitudes wrap around the globe.</li> </ul> Although the default map projection associates longitude with the x-coordinate of the map, and latitude with the y-coordinate, the latitude coordinate is always written <em>first</em>, followed by the longitude.<br> Notice that you cannot modify the coordinates of a <code translate="no" dir="ltr">LatLng</code>. If you want to compute another point, you have to create a new one.<br> <p> Most methods that accept <code translate="no" dir="ltr">LatLng</code> objects also accept a <code translate="no" dir="ltr"><a href="LatLngLiteral.md">LatLngLiteral</a></code> object, so that the following are equivalent: </p><devsite-code no-copy=""><pre translate="no" dir="ltr" is-upgraded=""> map.setCenter(new google.maps.LatLng(-34, 151));<br> map.setCenter({lat: -34, lng: 151}); </pre></devsite-code> <p> The constructor also accepts literal objects, and converts them to instances of <code translate="no" dir="ltr">LatLng</code>: </p><devsite-code no-copy=""><pre translate="no" dir="ltr" is-upgraded=""> myLatLng = new google.maps.LatLng({lat: -34, lng: 151}); </pre></devsite-code><p></p>
<div class="devsite-table-wrapper"><table class="constructors responsive" summary="class LatLng - Constructor">
<thead>
<tr><th colspan="2" id="LatLng.constructor">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code translate="no" dir="ltr"><a class="secret-link" href="#LatLng.constructor"><span>LatLng</span></a></code></td>
<td><div><code translate="no" dir="ltr">LatLng(lat, lng[, noWrap])</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">lat</code>:&nbsp; <code translate="no" dir="ltr">number</code></li>
<li><code translate="no" dir="ltr">lng</code>:&nbsp; <code translate="no" dir="ltr">number</code></li>
<li><code translate="no" dir="ltr">noWrap</code>:&nbsp; <code translate="no" dir="ltr">boolean <span class="optional-type-annotation">optional</span></code></li>
</ul></div>
<div class="desc">Creates a <code translate="no" dir="ltr">LatLng</code> object representing a geographic point. Latitude is specified in degrees within the range [-90, 90]. Longitude is specified in degrees within the range [-180, 180]. Set <code translate="no" dir="ltr">noWrap</code> to <code translate="no" dir="ltr">true</code> to enable values outside of this range. Note the ordering of latitude and longitude.</div></td>
</tr>
</tbody>
</table></div>
<div class="devsite-table-wrapper"><table class="methods responsive" summary="class LatLng - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr id="LatLng.equals">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#LatLng.equals"><span>equals</span></a></code></td>
<td><div><code translate="no" dir="ltr">equals(other)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">other</code>:&nbsp; <code translate="no" dir="ltr"><a href="LatLng.md">LatLng</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr">boolean</code></div>
<div class="desc">Comparison function.</div></td>
</tr>
<tr id="LatLng.lat">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#LatLng.lat"><span>lat</span></a></code></td>
<td><div><code translate="no" dir="ltr">lat()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr">number</code></div>
<div class="desc">Returns the latitude in degrees.</div></td>
</tr>
<tr id="LatLng.lng">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#LatLng.lng"><span>lng</span></a></code></td>
<td><div><code translate="no" dir="ltr">lng()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr">number</code></div>
<div class="desc">Returns the longitude in degrees.</div></td>
</tr>
<tr id="LatLng.toJSON">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#LatLng.toJSON"><span>toJSON</span></a></code></td>
<td><div><code translate="no" dir="ltr">toJSON()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr"><a href="LatLngLiteral.md">LatLngLiteral</a></code></div>
<div class="desc">Converts to JSON representation. This function is intended to be used via <code translate="no" dir="ltr">JSON.stringify</code>.</div></td>
</tr>
<tr id="LatLng.toString">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#LatLng.toString"><span>toString</span></a></code></td>
<td><div><code translate="no" dir="ltr">toString()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr">string</code></div>
<div class="desc">Converts to string representation.</div></td>
</tr>
<tr id="LatLng.toUrlValue">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#LatLng.toUrlValue"><span>toUrlValue</span></a></code></td>
<td><div><code translate="no" dir="ltr">toUrlValue([precision])</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">precision</code>:&nbsp; <code translate="no" dir="ltr">number <span class="optional-type-annotation">optional</span></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr">string</code></div>
<div class="desc">Returns a string of the form "lat,lng" for this LatLng. We round the lat/lng values to 6 decimal places by default.</div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
