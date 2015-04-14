<h2 id="ImageMapType">
google.maps.ImageMapType
class
</h2><p>This class implements the MapType interface and is provided for rendering image tiles.</p><p>This class extends
<code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.MVCObject.md">MVCObject</a></code>.
</p><h3>Constructor</h3><table summary="class ImageMapType - Constructor" width="100%">
<thead>
<tr><th>Constructor</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>ImageMapType(opts:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.ImageMapTypeOptions.md"><em>ImageMapTypeOptions</em></a>)</code></td>
<td>Constructs an ImageMapType using the provided ImageMapTypeOptions</td>
</tr>
</tbody>
</table><h3>Methods</h3><table summary="class ImageMapType - Methods" width="100%">
<thead>
<tr><th>Methods</th>
<th>Return Value</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>getOpacity()</code></td>
<td><code>number</code></td>
<td>Returns the opacity level (<code>0</code> (transparent) to <code>1.0</code>) of the <code>ImageMapType</code> tiles.</td>
</tr>
<tr>
<td><code>getTile(tileCoord:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Point.md">Point</a>, zoom:number, ownerDocument:Document)</code></td>
<td><code>Node</code></td>
<td></td>
</tr>
<tr>
<td><code>releaseTile(tile:Node)</code></td>
<td><code>None</code></td>
<td></td>
</tr>
<tr>
<td><code>setOpacity(opacity:number)</code></td>
<td><code>None</code></td>
<td>Sets the opacity level (<code>0</code> (transparent) to <code>1.0</code>) of the <code>ImageMapType</code> tiles.</td>
</tr>
</tbody>
</table><h3>Properties</h3><table summary="class ImageMapType - Properties" width="100%">
<thead>
<tr><th>Properties</th>
<th>Type</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>alt</code></td>
<td><code>string</code></td>
<td></td>
</tr>
<tr>
<td><code>maxZoom</code></td>
<td><code>number</code></td>
<td></td>
</tr>
<tr>
<td><code>minZoom</code></td>
<td><code>number</code></td>
<td></td>
</tr>
<tr>
<td><code>name</code></td>
<td><code>string</code></td>
<td></td>
</tr>
<tr>
<td><code>projection</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Projection.md">Projection</a></code></td>
<td></td>
</tr>
<tr>
<td><code>radius</code></td>
<td><code>number</code></td>
<td></td>
</tr>
<tr>
<td><code>tileSize</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Size.md">Size</a></code></td>
<td></td>
</tr>
</tbody>
</table><h3>Events</h3><table summary="class ImageMapType - Events" width="100%">
<thead>
<tr><th>Events</th>
<th>Arguments</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>tilesloaded</code></td>
<td><code>None</code></td>
<td>This event is fired when the visible tiles have finished loading.</td>
</tr>
</tbody>
</table>