<h2 id="InfoWindow"> InfoWindow class </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">InfoWindow</span></code>
class
</p><p>An overlay that looks like a bubble and is often connected to a marker.</p><p>This class extends
<code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MVCObject.md">MVCObject</a></code>.
</p><div class="devsite-table-wrapper"><table class="constructors responsive" summary="class InfoWindow - Constructor">
<thead>
<tr><th colspan="2">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>InfoWindow(<wbr>opts?:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/InfoWindowOptions.md"><span>InfoWindowOptions</span></a><span>)</span></code></td>
<td>Creates an info window with the given options. An InfoWindow can be placed on a map at a particular position or above a marker, depending on what is specified in the options. Unless auto-pan is disabled, an InfoWindow will pan the map to make itself visible when it is opened. After constructing an InfoWindow, you must call open to display it on the map. The user can click the close button on the InfoWindow to remove it from the map, or the developer can call close() for the same effect.</td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="methods responsive" summary="class InfoWindow - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>close()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Closes this InfoWindow by removing it from the DOM structure.</div></td>
</tr>
<tr>
<td><code><span>getContent()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>string|Node</code></div>
<div class="desc"></div></td>
</tr>
<tr>
<td><code><span>getPosition()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a></code></div>
<div class="desc"></div></td>
</tr>
<tr>
<td><code><span>getZIndex()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>number</code></div>
<div class="desc"></div></td>
</tr>
<tr>
<td><code><span>open(<wbr>map?:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Map.md"><span>Map</span></a><span>|<wbr></span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/StreetViewPanorama.md"><span>StreetViewPanorama</span></a><span>,<wbr> anchor?:*)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Opens this InfoWindow on the given map. Optionally, an InfoWindow can be associated with an anchor. In the core API, the only anchor is the Marker class. However, an anchor can be any MVCObject that exposes a LatLng <code>position</code> property and optionally a Point <code>anchorPoint</code> property for calculating the <code>pixelOffset</code> (see InfoWindowOptions). The <code>anchorPoint</code> is the offset from the anchor's position to the tip of the InfoWindow.</div></td>
</tr>
<tr>
<td><code><span>setContent(<wbr>content:string|<wbr>Node)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc"></div></td>
</tr>
<tr>
<td><code><span>setOptions(<wbr>options:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/InfoWindowOptions.md"><span>InfoWindowOptions</span></a><span>)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc"></div></td>
</tr>
<tr>
<td><code><span>setPosition(<wbr>position:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md"><span>LatLng</span></a><span>|<wbr></span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLngLiteral.md"><span>LatLngLiteral</span></a><span>)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc"></div></td>
</tr>
<tr>
<td><code><span>setZIndex(<wbr>zIndex:number)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc"></div></td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="details responsive" summary="class InfoWindow - Events">
<thead>
<tr><th colspan="2">Events</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>closeclick</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code>None</code></div>
<div class="desc">This event is fired when the close button was clicked.</div></td>
</tr>
<tr>
<td><code><span>content_changed</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code>None</code></div>
<div class="desc">This event is fired when the content property changes.</div></td>
</tr>
<tr>
<td><code><span>domready</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code>None</code></div>
<div class="desc">This event is fired when the <code>&lt;div&gt;</code> containing the <b><code>InfoWindow</code></b>'s content is attached to the DOM. You may wish to monitor this event if you are building out your info window content dynamically.</div></td>
</tr>
<tr>
<td><code><span>position_changed</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code>None</code></div>
<div class="desc">This event is fired when the position property changes.</div></td>
</tr>
<tr>
<td><code><span>zindex_changed</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code>None</code></div>
<div class="desc">This event is fired when the InfoWindow's zIndex changes.</div></td>
</tr>
</tbody>
</table></div>