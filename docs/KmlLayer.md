
<devsite-heading text=" KmlLayer class" for="KmlLayer" level="h2" link="" toc="" back-to-top=""><h2 id="KmlLayer" is-upgraded="">KmlLayer class </h2></devsite-heading>
<p>
<code translate="no" dir="ltr"><span itemprop="path">google.maps</span>.<span itemprop="name">KmlLayer</span></code>
class
</p>
<p>A <code translate="no" dir="ltr">KmlLayer</code> adds geographic markup to the map from a KML, KMZ or GeoRSS file that is hosted on a publicly accessible web server. A <code translate="no" dir="ltr">KmlFeatureData</code> object is provided for each feature when clicked.</p>
<p>This class extends
<code translate="no" dir="ltr"><a href="MVCObject.md">MVCObject</a></code>.
</p>
<div class="devsite-table-wrapper"><table class="constructors responsive" summary="class KmlLayer - Constructor">
<thead>
<tr><th colspan="2" id="KmlLayer.constructor">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code translate="no" dir="ltr"><a class="secret-link" href="#KmlLayer.constructor"><span>KmlLayer</span></a></code></td>
<td><div><code translate="no" dir="ltr">KmlLayer([opts])</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">opts</code>:&nbsp; <code translate="no" dir="ltr"><a href="KmlLayerOptions.md">KmlLayerOptions</a> <span class="optional-type-annotation">optional</span></code></li>
</ul></div>
<div class="desc">Creates a <code translate="no" dir="ltr">KmlLayer</code> which renders the contents of the specified KML/KMZ file (<a href="https://developers.google.com/kml/documentation/kmlreference">https://developers.google.com/kml/documentation/kmlreference</a>) or GeoRSS file (<a href="http://www.georss.org">http://www.georss.org</a>).</div></td>
</tr>
</tbody>
</table></div>
<div class="devsite-table-wrapper"><table class="methods responsive" summary="class KmlLayer - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr id="KmlLayer.getDefaultViewport">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#KmlLayer.getDefaultViewport"><span>getDefaultViewport</span></a></code></td>
<td><div><code translate="no" dir="ltr">getDefaultViewport()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr"><a href="LatLngBounds.md">LatLngBounds</a></code></div>
<div class="desc">Get the default viewport for the layer being displayed.</div></td>
</tr>
<tr id="KmlLayer.getMap">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#KmlLayer.getMap"><span>getMap</span></a></code></td>
<td><div><code translate="no" dir="ltr">getMap()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr"><a href="Map.md">Map</a></code></div>
<div class="desc">Get the map on which the KML Layer is being rendered.</div></td>
</tr>
<tr id="KmlLayer.getMetadata">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#KmlLayer.getMetadata"><span>getMetadata</span></a></code></td>
<td><div><code translate="no" dir="ltr">getMetadata()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr"><a href="KmlLayerMetadata.md">KmlLayerMetadata</a></code></div>
<div class="desc">Get the metadata associated with this layer, as specified in the layer markup.</div></td>
</tr>
<tr id="KmlLayer.getStatus">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#KmlLayer.getStatus"><span>getStatus</span></a></code></td>
<td><div><code translate="no" dir="ltr">getStatus()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr"><a href="KmlLayerStatus.md">KmlLayerStatus</a></code></div>
<div class="desc">Get the status of the layer, set once the requested document has loaded.</div></td>
</tr>
<tr id="KmlLayer.getUrl">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#KmlLayer.getUrl"><span>getUrl</span></a></code></td>
<td><div><code translate="no" dir="ltr">getUrl()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr">string</code></div>
<div class="desc">Gets the URL of the KML file being displayed.</div></td>
</tr>
<tr id="KmlLayer.getZIndex">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#KmlLayer.getZIndex"><span>getZIndex</span></a></code></td>
<td><div><code translate="no" dir="ltr">getZIndex()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr">number</code></div>
<div class="desc">Gets the z-index of the KML Layer.</div></td>
</tr>
<tr id="KmlLayer.setMap">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#KmlLayer.setMap"><span>setMap</span></a></code></td>
<td><div><code translate="no" dir="ltr">setMap(map)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">map</code>:&nbsp; <code translate="no" dir="ltr"><a href="Map.md">Map</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Renders the KML Layer on the specified map. If map is set to null, the layer is removed.</div></td>
</tr>
<tr id="KmlLayer.setOptions">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#KmlLayer.setOptions"><span>setOptions</span></a></code></td>
<td><div><code translate="no" dir="ltr">setOptions(options)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">options</code>:&nbsp; <code translate="no" dir="ltr"><a href="KmlLayerOptions.md">KmlLayerOptions</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc"></div></td>
</tr>
<tr id="KmlLayer.setUrl">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#KmlLayer.setUrl"><span>setUrl</span></a></code></td>
<td><div><code translate="no" dir="ltr">setUrl(url)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">url</code>:&nbsp; <code translate="no" dir="ltr">string</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Sets the URL of the KML file to display.</div></td>
</tr>
<tr id="KmlLayer.setZIndex">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#KmlLayer.setZIndex"><span>setZIndex</span></a></code></td>
<td><div><code translate="no" dir="ltr">setZIndex(zIndex)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">zIndex</code>:&nbsp; <code translate="no" dir="ltr">number</code></li>
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
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#KmlLayer.click"><span>click</span></a></code></td>
<td><div><code translate="no" dir="ltr">function(kmlClickEvent)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">kmlClickEvent</code>:&nbsp; <code translate="no" dir="ltr"><a href="KmlMouseEvent.md">KmlMouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when a feature in the layer is clicked.</div></td>
</tr>
<tr id="KmlLayer.defaultviewport_changed">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#KmlLayer.defaultviewport_changed"><span>defaultviewport_changed</span></a></code></td>
<td><div><code translate="no" dir="ltr">function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">This event is fired when the KML layers default viewport has changed.</div></td>
</tr>
<tr id="KmlLayer.status_changed">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#KmlLayer.status_changed"><span>status_changed</span></a></code></td>
<td><div><code translate="no" dir="ltr">function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">This event is fired when the KML layer has finished loading. At this point it is safe to read the status property to determine if the layer loaded successfully.</div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
