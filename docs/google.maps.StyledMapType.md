<h2 id="StyledMapType">
google.maps.StyledMapType
class
</h2><p>Creates a <code>MapType</code> with a custom style.</p><p>This class extends
<code><a href="#MVCObject">MVCObject</a></code>.
</p><h3>Constructor</h3><table summary="class StyledMapType - Constructor" width="100%">
<thead>
<tr><th>Constructor</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>StyledMapType(styles:Array.&lt;<a href="#MapTypeStyle">MapTypeStyle</a>&gt;, options?:<a href="#StyledMapTypeOptions"><em>StyledMapTypeOptions</em></a>)</code></td>
<td>Creates a styled <code>MapType</code> with the specified options. The <code>StyledMapType</code> takes an array of <code>MapTypeStyle</code>s, where each <code>MapTypeStyle</code> is applied to the map consecutively. A later <code>MapTypeStyle</code> that applies the same <code>MapTypeStyler</code>s to the same selectors as an earlier <code>MapTypeStyle</code> will override the earlier <code>MapTypeStyle</code>.</td>
</tr>
</tbody>
</table><h3>Methods</h3><table summary="class StyledMapType - Methods" width="100%">
<thead>
<tr><th>Methods</th>
<th>Return Value</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>getTile(tileCoord:<a href="#Point">Point</a>, zoom:number, ownerDocument:Document)</code></td>
<td><code>Node</code></td>
<td></td>
</tr>
<tr>
<td><code>releaseTile(tile:Node)</code></td>
<td><code>None</code></td>
<td></td>
</tr>
</tbody>
</table><h3>Properties</h3><table summary="class StyledMapType - Properties" width="100%">
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
<td><code><a href="#Projection">Projection</a></code></td>
<td></td>
</tr>
<tr>
<td><code>radius</code></td>
<td><code>number</code></td>
<td></td>
</tr>
<tr>
<td><code>tileSize</code></td>
<td><code><a href="#Size">Size</a></code></td>
<td></td>
</tr>
</tbody>
</table>