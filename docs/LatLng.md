
<h2 id="LatLng">LatLng class</h2>
<p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">LatLng</span></code>
class
</p>
<p>A <code>LatLng</code> is a point in geographical coordinates: latitude and longitude.<br> </p><ul> <li>Latitude ranges between -90 and 90 degrees, inclusive. Values above or below this range will be clamped to the range [-90, 90]. This means that if the value specified is less than -90, it will be set to -90. And if the value is greater than 90, it will be set to 90.</li> <li>Longitude ranges between -180 and 180 degrees, inclusive. Values above or below this range will be wrapped so that they fall within the range. For example, a value of -190 will be converted to 170. A value of 190 will be converted to -170. This reflects the fact that longitudes wrap around the globe.</li> </ul> Although the default map projection associates longitude with the x-coordinate of the map, and latitude with the y-coordinate, the latitude coordinate is always written <em>first</em>, followed by the longitude.<br> Notice that you cannot modify the coordinates of a <code>LatLng</code>. If you want to compute another point, you have to create a new one.<br> <p> Most methods that accept <code>LatLng</code> objects also accept a <code><a href="LatLngLiteral.md">LatLngLiteral</a></code> object, so that the following are equivalent: </p><pre><div class="devsite-code-button-wrapper"><div class="devsite-code-button gc-analytics-event material-icons devsite-dark-code-button" data-category="Site-Wide Custom Events" data-label="Dark Code Toggle" track-type="exampleCode" track-name="darkCodeToggle" data-tooltip-align="b,c" data-tooltip="Dark code theme" aria-label="Dark code theme" data-title="Dark code theme"></div></div> map.setCenter(new google.maps.LatLng(-34, 151));<br> map.setCenter({lat: -34, lng: 151}); </pre> <p> The constructor also accepts literal objects, and converts them to instances of <code>LatLng</code>: </p><pre><div class="devsite-code-button-wrapper"><div class="devsite-code-button gc-analytics-event material-icons devsite-dark-code-button" data-category="Site-Wide Custom Events" data-label="Dark Code Toggle" track-type="exampleCode" track-name="darkCodeToggle" data-tooltip-align="b,c" data-tooltip="Dark code theme" aria-label="Dark code theme" data-title="Dark code theme"></div></div> myLatLng = new google.maps.LatLng({lat: -34, lng: 151}); </pre><p></p>
<div class="devsite-table-wrapper"><table class="constructors responsive" summary="class LatLng - Constructor">
<thead>
<tr><th colspan="2" id="LatLng.constructor">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code><a class="secret-link" href="#LatLng.constructor"><span>LatLng</span></a></code></td>
<td><div><code>LatLng(lat, lng[, noWrap])</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>lat</code>:&nbsp; <code>number</code></li>
<li><code>lng</code>:&nbsp; <code>number</code></li>
<li><code>noWrap</code> (optional):&nbsp; <code>boolean</code></li>
</ul></div>
<div class="desc">Creates a <code>LatLng</code> object representing a geographic point. Latitude is specified in degrees within the range [-90, 90]. Longitude is specified in degrees within the range [-180, 180]. Set <code>noWrap</code> to <code>true</code> to enable values outside of this range. Note the ordering of latitude and longitude.</div></td>
</tr>
</tbody>
</table></div>
<div class="devsite-table-wrapper"><table class="methods responsive" summary="class LatLng - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr id="LatLng.equals">
<td itemprop="property"><code><a class="secret-link" href="#LatLng.equals"><span>equals</span></a></code></td>
<td><div><code>equals(other)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>other</code>:&nbsp; <code><a href="LatLng.md">LatLng</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">Comparison function.</div></td>
</tr>
<tr id="LatLng.lat">
<td itemprop="property"><code><a class="secret-link" href="#LatLng.lat"><span>lat</span></a></code></td>
<td><div><code>lat()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>number</code></div>
<div class="desc">Returns the latitude in degrees.</div></td>
</tr>
<tr id="LatLng.lng">
<td itemprop="property"><code><a class="secret-link" href="#LatLng.lng"><span>lng</span></a></code></td>
<td><div><code>lng()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>number</code></div>
<div class="desc">Returns the longitude in degrees.</div></td>
</tr>
<tr id="LatLng.toJSON">
<td itemprop="property"><code><a class="secret-link" href="#LatLng.toJSON"><span>toJSON</span></a></code></td>
<td><div><code>toJSON()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="LatLngLiteral.md">LatLngLiteral</a></code></div>
<div class="desc">Converts to JSON representation. This function is intended to be used via <code>JSON.stringify</code>.</div></td>
</tr>
<tr id="LatLng.toString">
<td itemprop="property"><code><a class="secret-link" href="#LatLng.toString"><span>toString</span></a></code></td>
<td><div><code>toString()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>string</code></div>
<div class="desc">Converts to string representation.</div></td>
</tr>
<tr id="LatLng.toUrlValue">
<td itemprop="property"><code><a class="secret-link" href="#LatLng.toUrlValue"><span>toUrlValue</span></a></code></td>
<td><div><code>toUrlValue([precision])</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>precision</code> (optional):&nbsp; <code>number</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>string</code></div>
<div class="desc">Returns a string of the form "lat,lng" for this LatLng. We round the lat/lng values to 6 decimal places by default.</div></td>
</tr>
</tbody>
</table></div>
