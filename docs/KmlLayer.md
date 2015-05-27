<h2 id="KmlLayer">
KmlLayer
class
</h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">KmlLayer</span></code>
class
</p><p>A <code>KmlLayer</code> adds geographic markup to the map from a KML, KMZ or GeoRSS file that is hosted on a publicly accessible web server. A <code>KmlFeatureData</code> object is provided for each feature when clicked.</p><p>This class extends
<code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MVCObject.md">MVCObject</a></code>.
</p><table class="constructors responsive" summary="class KmlLayer - Constructor">
<thead>
<tr><th colspan="2">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code>KmlLayer(opts?:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/KmlLayerOptions.md"><em>KmlLayerOptions</em></a>)</code></td>
<td>Creates a <code>KmlLayer</code> which renders the contents of the specified KML/KMZ file (<a href="https://developers.google.com/kml/documentation/kmlreference">https://developers.google.com/kml/documentation/kmlreference</a>) or GeoRSS file (<a href="http://www.georss.org">http://www.georss.org</a>).</td>
</tr>
</tbody>
</table><table class="methods responsive" summary="class KmlLayer - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr>
<td><code>getDefaultViewport()</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLngBounds.md">LatLngBounds</a></code></div>
<div class="desc">Get the default viewport for the layer being displayed.</div></td>
</tr>
<tr>
<td><code>getMap()</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Map.md">Map</a></code></div>
<div class="desc">Get the map on which the KML Layer is being rendered.</div></td>
</tr>
<tr>
<td><code>getMetadata()</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/KmlLayerMetadata.md">KmlLayerMetadata</a></code></div>
<div class="desc">Get the metadata associated with this layer, as specified in the layer markup.</div></td>
</tr>
<tr>
<td><code>getStatus()</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/KmlLayerStatus.md">KmlLayerStatus</a></code></div>
<div class="desc">Get the status of the layer, set once the requested document has loaded.</div></td>
</tr>
<tr>
<td><code>getUrl()</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>string</code></div>
<div class="desc">Gets the URL of the KML file being displayed.</div></td>
</tr>
<tr>
<td><code>getZIndex()</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>number</code></div>
<div class="desc">Gets the z-index of the KML Layer.</div></td>
</tr>
<tr>
<td><code>setMap(map:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Map.md">Map</a>)</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Renders the KML Layer on the specified map. If map is set to null, the layer is removed.</div></td>
</tr>
<tr>
<td><code>setUrl(url:string)</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Sets the URL of the KML file to display.</div></td>
</tr>
<tr>
<td><code>setZIndex(zIndex:number)</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Sets the z-index of the KML Layer.</div></td>
</tr>
</tbody>
</table><table class="details responsive" summary="class KmlLayer - Events">
<thead>
<tr><th colspan="2">Events</th>
</tr></thead>
<tbody>
<tr>
<td><code>click</code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/KmlMouseEvent.md"><em>KmlMouseEvent</em></a></code></div>
<div class="desc">This event is fired when a feature in the layer is clicked.</div></td>
</tr>
<tr>
<td><code>defaultviewport_changed</code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code>None</code></div>
<div class="desc">This event is fired when the KML layers default viewport has changed.</div></td>
</tr>
<tr>
<td><code>status_changed</code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code>None</code></div>
<div class="desc">This event is fired when the KML layer has finished loading. At this point it is safe to read the status property to determine if the layer loaded successfully.</div></td>
</tr>
</tbody>
</table>