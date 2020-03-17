
<devsite-heading text=" InfoWindow class" for="InfoWindow" level="h2" link="" toc="" back-to-top=""><h2 id="InfoWindow" is-upgraded="">InfoWindow class</h2></devsite-heading>
<p>
<code translate="no" dir="ltr"><span itemprop="path">google.maps</span>.<span itemprop="name">InfoWindow</span></code>
class
</p>
<p>An overlay that looks like a bubble and is often connected to a marker.</p>
<p>This class extends
<code translate="no" dir="ltr"><a href="MVCObject.md">MVCObject</a></code>.
</p>
<div class="devsite-table-wrapper"><table class="constructors responsive" summary="class InfoWindow - Constructor">
<thead>
<tr><th colspan="2" id="InfoWindow.constructor">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code translate="no" dir="ltr"><a class="secret-link" href="#InfoWindow.constructor"><span>InfoWindow</span></a></code></td>
<td><div><code translate="no" dir="ltr">InfoWindow([opts])</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">opts</code>:&nbsp; <code translate="no" dir="ltr"><a href="InfoWindowOptions.md">InfoWindowOptions</a> <span class="optional-type-annotation">optional</span></code></li>
</ul></div>
<div class="desc">Creates an info window with the given options. An InfoWindow can be placed on a map at a particular position or above a marker, depending on what is specified in the options. Unless auto-pan is disabled, an InfoWindow will pan the map to make itself visible when it is opened. After constructing an InfoWindow, you must call open to display it on the map. The user can click the close button on the InfoWindow to remove it from the map, or the developer can call close() for the same effect.</div></td>
</tr>
</tbody>
</table></div>
<div class="devsite-table-wrapper"><table class="methods responsive" summary="class InfoWindow - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr id="InfoWindow.close">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#InfoWindow.close"><span>close</span></a></code></td>
<td><div><code translate="no" dir="ltr">close()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Closes this InfoWindow by removing it from the DOM structure.</div></td>
</tr>
<tr id="InfoWindow.getContent">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#InfoWindow.getContent"><span>getContent</span></a></code></td>
<td><div><code translate="no" dir="ltr">getContent()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr">string|Node</code></div>
<div class="desc"></div></td>
</tr>
<tr id="InfoWindow.getPosition">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#InfoWindow.getPosition"><span>getPosition</span></a></code></td>
<td><div><code translate="no" dir="ltr">getPosition()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr"><a href="LatLng.md">LatLng</a></code></div>
<div class="desc"></div></td>
</tr>
<tr id="InfoWindow.getZIndex">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#InfoWindow.getZIndex"><span>getZIndex</span></a></code></td>
<td><div><code translate="no" dir="ltr">getZIndex()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr">number</code></div>
<div class="desc"></div></td>
</tr>
<tr id="InfoWindow.open">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#InfoWindow.open"><span>open</span></a></code></td>
<td><div><code translate="no" dir="ltr">open([map, anchor])</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">map</code>:&nbsp; <code translate="no" dir="ltr"><a href="Map.md">Map</a>|<a href="StreetViewPanorama.md">StreetViewPanorama</a> <span class="optional-type-annotation">optional</span></code></li>
<li><code translate="no" dir="ltr">anchor</code>:&nbsp; <code translate="no" dir="ltr"><a href="MVCObject.md">MVCObject</a> <span class="optional-type-annotation">optional</span></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Opens this InfoWindow on the given map. Optionally, an InfoWindow can be associated with an anchor. In the core API, the only anchor is the Marker class. However, an anchor can be any MVCObject that exposes a LatLng <code translate="no" dir="ltr">position</code> property and optionally a Point <code translate="no" dir="ltr">anchorPoint</code> property for calculating the <code translate="no" dir="ltr">pixelOffset</code> (see InfoWindowOptions). The <code translate="no" dir="ltr">anchorPoint</code> is the offset from the anchor's position to the tip of the InfoWindow.</div></td>
</tr>
<tr id="InfoWindow.setContent">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#InfoWindow.setContent"><span>setContent</span></a></code></td>
<td><div><code translate="no" dir="ltr">setContent(content)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">content</code>:&nbsp; <code translate="no" dir="ltr">string|Node</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc"></div></td>
</tr>
<tr id="InfoWindow.setOptions">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#InfoWindow.setOptions"><span>setOptions</span></a></code></td>
<td><div><code translate="no" dir="ltr">setOptions(options)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">options</code>:&nbsp; <code translate="no" dir="ltr"><a href="InfoWindowOptions.md">InfoWindowOptions</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc"></div></td>
</tr>
<tr id="InfoWindow.setPosition">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#InfoWindow.setPosition"><span>setPosition</span></a></code></td>
<td><div><code translate="no" dir="ltr">setPosition(position)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">position</code>:&nbsp; <code translate="no" dir="ltr"><a href="LatLng.md">LatLng</a>|<a href="LatLngLiteral.md">LatLngLiteral</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc"></div></td>
</tr>
<tr id="InfoWindow.setZIndex">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#InfoWindow.setZIndex"><span>setZIndex</span></a></code></td>
<td><div><code translate="no" dir="ltr">setZIndex(zIndex)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">zIndex</code>:&nbsp; <code translate="no" dir="ltr">number</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc"></div></td>
</tr>
</tbody>
</table></div>
<div class="devsite-table-wrapper"><table class="details responsive" summary="class InfoWindow - Events">
<thead>
<tr><th colspan="2">Events</th>
</tr></thead>
<tbody>
<tr id="InfoWindow.closeclick">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#InfoWindow.closeclick"><span>closeclick</span></a></code></td>
<td><div><code translate="no" dir="ltr">function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">This event is fired when the close button was clicked.</div></td>
</tr>
<tr id="InfoWindow.content_changed">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#InfoWindow.content_changed"><span>content_changed</span></a></code></td>
<td><div><code translate="no" dir="ltr">function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">This event is fired when the content property changes.</div></td>
</tr>
<tr id="InfoWindow.domready">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#InfoWindow.domready"><span>domready</span></a></code></td>
<td><div><code translate="no" dir="ltr">function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">This event is fired when the <code translate="no" dir="ltr">&lt;div&gt;</code> containing the <b><code translate="no" dir="ltr">InfoWindow</code></b>'s content is attached to the DOM. You may wish to monitor this event if you are building out your info window content dynamically.</div></td>
</tr>
<tr id="InfoWindow.position_changed">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#InfoWindow.position_changed"><span>position_changed</span></a></code></td>
<td><div><code translate="no" dir="ltr">function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">This event is fired when the position property changes.</div></td>
</tr>
<tr id="InfoWindow.zindex_changed">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#InfoWindow.zindex_changed"><span>zindex_changed</span></a></code></td>
<td><div><code translate="no" dir="ltr">function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">This event is fired when the InfoWindow's zIndex changes.</div></td>
</tr>
</tbody>
</table></div>
