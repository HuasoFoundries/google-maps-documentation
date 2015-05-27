<h2 id="PanoramioLayer">
PanoramioLayer
class
</h2><p>
<code><span itemprop="path">google.maps.panoramio</span>.<span itemprop="name">PanoramioLayer</span></code>
class
</p><p>A <code>PanoramioLayer</code> displays photos from Panoramio as a rendered layer.</p><p>This class extends
<code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MVCObject.md">MVCObject</a></code>.
</p><h4>Library</h4><p>panoramio</p><table class="constructors responsive" summary="class PanoramioLayer - Constructor">
<thead>
<tr><th colspan="2">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code>PanoramioLayer(opts?:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PanoramioLayerOptions.md"><em>PanoramioLayerOptions</em></a>)</code></td>
<td>A layer that displays data from Panoramio.</td>
</tr>
</tbody>
</table><table class="methods responsive" summary="class PanoramioLayer - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr>
<td><code>getMap()</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Map.md">Map</a></code></div>
<div class="desc">Returns the map on which this layer is displayed.</div></td>
</tr>
<tr>
<td><code>getTag()</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>string</code></div>
<div class="desc"></div></td>
</tr>
<tr>
<td><code>getUserId()</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>string</code></div>
<div class="desc"></div></td>
</tr>
<tr>
<td><code>setMap(map:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Map.md">Map</a>)</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Renders the layer on the specified map. If map is set to null, the layer will be removed.</div></td>
</tr>
<tr>
<td><code>setOptions(options:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PanoramioLayerOptions.md"><em>PanoramioLayerOptions</em></a>)</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc"></div></td>
</tr>
<tr>
<td><code>setTag(tag:string)</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc"></div></td>
</tr>
<tr>
<td><code>setUserId(userId:string)</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc"></div></td>
</tr>
</tbody>
</table><table class="details responsive" summary="class PanoramioLayer - Events">
<thead>
<tr><th colspan="2">Events</th>
</tr></thead>
<tbody>
<tr>
<td><code>click</code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PanoramioMouseEvent.md"><em>PanoramioMouseEvent</em></a></code></div>
<div class="desc">This event is fired when a feature in the layer is clicked.</div></td>
</tr>
</tbody>
</table>