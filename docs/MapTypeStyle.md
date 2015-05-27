<h2 id="MapTypeStyle">
MapTypeStyle
object specification
</h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">MapTypeStyle</span></code>
object specification
</p><p>The <code>MapTypeStyle</code> is a collection of selectors and stylers that define how the map should be styled. Selectors specify what map elements should be affected and stylers specify how those elements should be modified.</p><table class="properties responsive" summary="interface MapTypeStyle - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr>
<td><code>elementType</code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MapTypeStyleElementType.md">MapTypeStyleElementType</a></code></div>
<div class="desc">Selects the element type to which a styler should be applied. An element type distinguishes between the different representations of a feature. Optional; if <code>elementType</code> is not specified, the value is assumed to be <code>'all'</code>.</div></td>
</tr>
<tr>
<td><code>featureType</code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MapTypeStyleFeatureType.md">MapTypeStyleFeatureType</a></code></div>
<div class="desc">Selects the feature, or group of features, to which a styler should be applied. Optional; if <code>featureType</code> is not specified, the value is assumed to be <code>'all'</code>.</div></td>
</tr>
<tr>
<td><code>stylers</code></td>
<td><div><strong>Type:</strong>&nbsp; <code>Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MapTypeStyler.md">MapTypeStyler</a>&gt;</code></div>
<div class="desc">The style rules to apply to the selectors. The rules are applied to the map's elements in the order they are listed in this array.</div></td>
</tr>
</tbody>
</table>