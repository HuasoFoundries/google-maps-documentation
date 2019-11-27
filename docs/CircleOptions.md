
<devsite-heading text=" CircleOptions interface" for="CircleOptions" level="h2" link="" toc="" back-to-top=""><h2 id="CircleOptions" is-upgraded="">CircleOptions interface </h2></devsite-heading>
<p>
<code translate="no" dir="ltr"><span itemprop="path">google.maps</span>.<span itemprop="name">CircleOptions</span></code>
interface
</p>
<p>CircleOptions object used to define the properties that can be set on a Circle.</p>
<div class="devsite-table-wrapper"><table class="properties responsive" summary="interface CircleOptions - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="CircleOptions.center">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#CircleOptions.center"><span>center</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr"><a href="LatLng.md">LatLng</a>|<a href="LatLngLiteral.md">LatLngLiteral</a> <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The center of the Circle.</div></td>
</tr>
<tr id="CircleOptions.clickable">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#CircleOptions.clickable"><span>clickable</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">boolean <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Indicates whether this <code translate="no" dir="ltr">Circle</code> handles mouse events. Defaults to <code translate="no" dir="ltr">true</code>.</div></td>
</tr>
<tr id="CircleOptions.draggable">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#CircleOptions.draggable"><span>draggable</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">boolean <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">If set to true, the user can drag this circle over the map. Defaults to <code translate="no" dir="ltr">false</code>.</div></td>
</tr>
<tr id="CircleOptions.editable">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#CircleOptions.editable"><span>editable</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">boolean <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">If set to true, the user can edit this circle by dragging the control points shown at the center and around the circumference of the circle. Defaults to <code translate="no" dir="ltr">false</code>.</div></td>
</tr>
<tr id="CircleOptions.fillColor">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#CircleOptions.fillColor"><span>fillColor</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">string <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The fill color. All CSS3 colors are supported except for extended named colors.</div></td>
</tr>
<tr id="CircleOptions.fillOpacity">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#CircleOptions.fillOpacity"><span>fillOpacity</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">number <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The fill opacity between 0.0 and 1.0.</div></td>
</tr>
<tr id="CircleOptions.map">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#CircleOptions.map"><span>map</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr"><a href="Map.md">Map</a> <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Map on which to display the Circle.</div></td>
</tr>
<tr id="CircleOptions.radius">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#CircleOptions.radius"><span>radius</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">number <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The radius in meters on the Earth's surface.</div></td>
</tr>
<tr id="CircleOptions.strokeColor">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#CircleOptions.strokeColor"><span>strokeColor</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">string <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The stroke color. All CSS3 colors are supported except for extended named colors.</div></td>
</tr>
<tr id="CircleOptions.strokeOpacity">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#CircleOptions.strokeOpacity"><span>strokeOpacity</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">number <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The stroke opacity between 0.0 and 1.0.</div></td>
</tr>
<tr id="CircleOptions.strokePosition">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#CircleOptions.strokePosition"><span>strokePosition</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr"><a href="StrokePosition.md">StrokePosition</a> <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The stroke position. Defaults to CENTER. This property is not supported on Internet Explorer 8 and earlier.</div></td>
</tr>
<tr id="CircleOptions.strokeWeight">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#CircleOptions.strokeWeight"><span>strokeWeight</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">number <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The stroke width in pixels.</div></td>
</tr>
<tr id="CircleOptions.visible">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#CircleOptions.visible"><span>visible</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">boolean <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Whether this circle is visible on the map. Defaults to <code translate="no" dir="ltr">true</code>.</div></td>
</tr>
<tr id="CircleOptions.zIndex">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#CircleOptions.zIndex"><span>zIndex</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">number <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The zIndex compared to other polys.</div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
