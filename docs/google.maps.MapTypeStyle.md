<h2 id="MapTypeStyle">
google.maps.MapTypeStyle
object specification
</h2><p>The <code>MapTypeStyle</code> is a collection of selectors and stylers that define how the map should be styled. Selectors specify what map elements should be affected and stylers specify how those elements should be modified.</p><h3>Properties</h3><table summary="interface MapTypeStyle - Properties" width="100%">
<thead>
<tr><th>Properties</th>
<th>Type</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>elementType</code></td>
<td><code><a href="#MapTypeStyleElementType">MapTypeStyleElementType</a></code></td>
<td>Selects the element type to which a styler should be applied. An element type distinguishes between the different representations of a feature. Optional; if <code>elementType</code> is not specified, the value is assumed to be <code>'all'</code>.</td>
</tr>
<tr>
<td><code>featureType</code></td>
<td><code><a href="#MapTypeStyleFeatureType">MapTypeStyleFeatureType</a></code></td>
<td>Selects the feature, or group of features, to which a styler should be applied. Optional; if <code>featureType</code> is not specified, the value is assumed to be <code>'all'</code>.</td>
</tr>
<tr>
<td><code>stylers</code></td>
<td><code>Array.&lt;<a href="#MapTypeStyler">MapTypeStyler</a>&gt;</code></td>
<td>The style rules to apply to the selectors. The rules are applied to the map's elements in the order they are listed in this array.</td>
</tr>
</tbody>
</table>