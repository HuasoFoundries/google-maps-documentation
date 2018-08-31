
<h2 id="KmlLayer">KmlLayer class</h2>
<p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">KmlLayer</span></code>
class
</p>
<p>A <code>KmlLayer</code> adds geographic markup to the map from a KML, KMZ or GeoRSS file that is hosted on a publicly accessible web server. A <code>KmlFeatureData</code> object is provided for each feature when clicked.</p>
<p>This class extends
<code><a href="MVCObject.md">MVCObject</a></code>.
</p>
<div class="devsite-table-wrapper"><table class="constructors responsive" summary="class KmlLayer - Constructor">
<thead>
<tr><th colspan="2" id="KmlLayer.constructor">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code><a class="secret-link" href="#KmlLayer.constructor"><span>KmlLayer</span></a></code></td>
<td><div><code>KmlLayer([opts])</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>opts</code> (optional):&nbsp; <code><a href="KmlLayerOptions.md">KmlLayerOptions</a></code></li>
</ul></div>
<div class="desc">Creates a <code>KmlLayer</code> which renders the contents of the specified KML/KMZ file (<a href="https://developers.google.com/kml/documentation/kmlreference">https://developers.google.com/kml/documentation/kmlreference</a>) or GeoRSS file (<a href="http://www.georss.org">http://www.georss.org</a>).</div></td>
</tr>
</tbody>
</table></div>
<div class="devsite-table-wrapper"><table class="methods responsive" summary="class KmlLayer - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr id="KmlLayer.getDefaultViewport">
<td itemprop="property"><code><a class="secret-link" href="#KmlLayer.getDefaultViewport"><span>getDefaultViewport</span></a></code></td>
<td><div><code>getDefaultViewport()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="LatLngBounds.md">LatLngBounds</a></code></div>
<div class="desc">Get the default viewport for the layer being displayed.</div></td>
</tr>
<tr id="KmlLayer.getMap">
<td itemprop="property"><code><a class="secret-link" href="#KmlLayer.getMap"><span>getMap</span></a></code></td>
<td><div><code>getMap()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="Map.md">Map</a></code></div>
<div class="desc">Get the map on which the KML Layer is being rendered.</div></td>
</tr>
<tr id="KmlLayer.getMetadata">
<td itemprop="property"><code><a class="secret-link" href="#KmlLayer.getMetadata"><span>getMetadata</span></a></code></td>
<td><div><code>getMetadata()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="KmlLayerMetadata.md">KmlLayerMetadata</a></code></div>
<div class="desc">Get the metadata associated with this layer, as specified in the layer markup.</div></td>
</tr>
<tr id="KmlLayer.getStatus">
<td itemprop="property"><code><a class="secret-link" href="#KmlLayer.getStatus"><span>getStatus</span></a></code></td>
<td><div><code>getStatus()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="KmlLayerStatus.md">KmlLayerStatus</a></code></div>
<div class="desc">Get the status of the layer, set once the requested document has loaded.</div></td>
</tr>
<tr id="KmlLayer.getUrl">
<td itemprop="property"><code><a class="secret-link" href="#KmlLayer.getUrl"><span>getUrl</span></a></code></td>
<td><div><code>getUrl()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>string</code></div>
<div class="desc">Gets the URL of the KML file being displayed.</div></td>
</tr>
<tr id="KmlLayer.getZIndex">
<td itemprop="property"><code><a class="secret-link" href="#KmlLayer.getZIndex"><span>getZIndex</span></a></code></td>
<td><div><code>getZIndex()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>number</code></div>
<div class="desc">Gets the z-index of the KML Layer.</div></td>
</tr>
<tr id="KmlLayer.setMap">
<td itemprop="property"><code><a class="secret-link" href="#KmlLayer.setMap"><span>setMap</span></a></code></td>
<td><div><code>setMap(map)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>map</code>:&nbsp; <code><a href="Map.md">Map</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Renders the KML Layer on the specified map. If map is set to null, the layer is removed.</div></td>
</tr>
<tr id="KmlLayer.setOptions">
<td itemprop="property"><code><a class="secret-link" href="#KmlLayer.setOptions"><span>setOptions</span></a></code></td>
<td><div><code>setOptions(options)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>options</code>:&nbsp; <code><a href="KmlLayerOptions.md">KmlLayerOptions</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc"></div></td>
</tr>
<tr id="KmlLayer.setUrl">
<td itemprop="property"><code><a class="secret-link" href="#KmlLayer.setUrl"><span>setUrl</span></a></code></td>
<td><div><code>setUrl(url)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>url</code>:&nbsp; <code>string</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Sets the URL of the KML file to display.</div></td>
</tr>
<tr id="KmlLayer.setZIndex">
<td itemprop="property"><code><a class="secret-link" href="#KmlLayer.setZIndex"><span>setZIndex</span></a></code></td>
<td><div><code>setZIndex(zIndex)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>zIndex</code>:&nbsp; <code>number</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Sets the z-index of the KML Layer.</div></td>
</tr>
</tbody>
</table></div>
<div class="devsite-table-wrapper"><table class="details responsive" summary="class KmlLayer - Events">
<thead>
<tr><th colspan="2">Events</th>
</tr></thead>
<tbody>
<tr id="KmlLayer.click">
<td itemprop="property"><code><a class="secret-link" href="#KmlLayer.click"><span>click</span></a></code></td>
<td><div><code>function(kmlClickEvent)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>kmlClickEvent</code>:&nbsp; <code><a href="KmlMouseEvent.md">KmlMouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when a feature in the layer is clicked.</div></td>
</tr>
<tr id="KmlLayer.defaultviewport_changed">
<td itemprop="property"><code><a class="secret-link" href="#KmlLayer.defaultviewport_changed"><span>defaultviewport_changed</span></a></code></td>
<td><div><code>function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">This event is fired when the KML layers default viewport has changed.</div></td>
</tr>
<tr id="KmlLayer.status_changed">
<td itemprop="property"><code><a class="secret-link" href="#KmlLayer.status_changed"><span>status_changed</span></a></code></td>
<td><div><code>function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">This event is fired when the KML layer has finished loading. At this point it is safe to read the status property to determine if the layer loaded successfully.</div></td>
</tr>
</tbody>
</table></div>
