<h2 id="InfoWindow"> InfoWindow class </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">InfoWindow</span></code>
class
</p><p>An overlay that looks like a bubble and is often connected to a marker.</p><p>This class extends
<code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MVCObject.md">MVCObject</a></code>.
</p><div class="devsite-table-wrapper"><table class="constructors responsive" summary="class InfoWindow - Constructor">
<thead>
<tr><th colspan="2" id="InfoWindow.constructor">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>InfoWindow</span></code></td>
<td><div><code>InfoWindow([opts])</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>opts</code> (optional):&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/InfoWindowOptions.md">InfoWindowOptions</a></code></li>
</ul></div>
<div class="desc">Creates an info window with the given options. An InfoWindow can be placed on a map at a particular position or above a marker, depending on what is specified in the options. Unless auto-pan is disabled, an InfoWindow will pan the map to make itself visible when it is opened. After constructing an InfoWindow, you must call open to display it on the map. The user can click the close button on the InfoWindow to remove it from the map, or the developer can call close() for the same effect.</div></td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="methods responsive" summary="class InfoWindow - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr id="InfoWindow.close">
<td><code><span>close</span></code></td>
<td><div><code>close()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Closes this InfoWindow by removing it from the DOM structure.</div></td>
</tr>
<tr id="InfoWindow.getContent">
<td><code><span>getContent</span></code></td>
<td><div><code>getContent()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>string|Node</code></div>
<div class="desc"></div></td>
</tr>
<tr id="InfoWindow.getPosition">
<td><code><span>getPosition</span></code></td>
<td><div><code>getPosition()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a></code></div>
<div class="desc"></div></td>
</tr>
<tr id="InfoWindow.getZIndex">
<td><code><span>getZIndex</span></code></td>
<td><div><code>getZIndex()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>number</code></div>
<div class="desc"></div></td>
</tr>
<tr id="InfoWindow.open">
<td><code><span>open</span></code></td>
<td><div><code>open([map, anchor])</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>map</code> (optional):&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Map.md">Map</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/StreetViewPanorama.md">StreetViewPanorama</a></code></li>
<li><code>anchor</code> (optional):&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MVCObject.md">MVCObject</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Opens this InfoWindow on the given map. Optionally, an InfoWindow can be associated with an anchor. In the core API, the only anchor is the Marker class. However, an anchor can be any MVCObject that exposes a LatLng <code>position</code> property and optionally a Point <code>anchorPoint</code> property for calculating the <code>pixelOffset</code> (see InfoWindowOptions). The <code>anchorPoint</code> is the offset from the anchor's position to the tip of the InfoWindow.</div></td>
</tr>
<tr id="InfoWindow.setContent">
<td><code><span>setContent</span></code></td>
<td><div><code>setContent(content)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>content</code>:&nbsp; <code>string|Node</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc"></div></td>
</tr>
<tr id="InfoWindow.setOptions">
<td><code><span>setOptions</span></code></td>
<td><div><code>setOptions(options)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>options</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/InfoWindowOptions.md">InfoWindowOptions</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc"></div></td>
</tr>
<tr id="InfoWindow.setPosition">
<td><code><span>setPosition</span></code></td>
<td><div><code>setPosition(position)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>position</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLngLiteral.md">LatLngLiteral</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc"></div></td>
</tr>
<tr id="InfoWindow.setZIndex">
<td><code><span>setZIndex</span></code></td>
<td><div><code>setZIndex(zIndex)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>zIndex</code>:&nbsp; <code>number</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc"></div></td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="details responsive" summary="class InfoWindow - Events">
<thead>
<tr><th colspan="2">Events</th>
</tr></thead>
<tbody>
<tr id="InfoWindow.closeclick">
<td><code><span>closeclick</span></code></td>
<td><div><code>function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">This event is fired when the close button was clicked.</div></td>
</tr>
<tr id="InfoWindow.content_changed">
<td><code><span>content_changed</span></code></td>
<td><div><code>function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">This event is fired when the content property changes.</div></td>
</tr>
<tr id="InfoWindow.domready">
<td><code><span>domready</span></code></td>
<td><div><code>function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">This event is fired when the <code>&lt;div&gt;</code> containing the <b><code>InfoWindow</code></b>'s content is attached to the DOM. You may wish to monitor this event if you are building out your info window content dynamically.</div></td>
</tr>
<tr id="InfoWindow.position_changed">
<td><code><span>position_changed</span></code></td>
<td><div><code>function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">This event is fired when the position property changes.</div></td>
</tr>
<tr id="InfoWindow.zindex_changed">
<td><code><span>zindex_changed</span></code></td>
<td><div><code>function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">This event is fired when the InfoWindow's zIndex changes.</div></td>
</tr>
</tbody>
</table></div>