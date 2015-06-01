<h2 id="FeatureStyle"> FeatureStyle object specification </h2><p>
<code><span itemprop="path">google.maps.visualization</span>.<span itemprop="name">FeatureStyle</span></code>
object specification
</p><h4>Library</h4><p>visualization</p><div class="devsite-table-wrapper"><table class="methods responsive" summary="interface FeatureStyle - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>reset(<wbr>property:string)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Resets the given style property to its original value.</div></td>
</tr>
<tr>
<td><code><span>resetAll()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Resets all style properties to their original values.</div></td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="properties responsive" summary="interface FeatureStyle - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>fillColor</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">The feature's fill color. All CSS3 colors are supported except for extended named colors.</div></td>
</tr>
<tr>
<td><code><span>fillOpacity</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">Fill opacity, expressed as a decimal between 0 and 1 inclusive. This property may be set as a number, but it will always be returned as a string.</div></td>
</tr>
<tr>
<td><code><span>iconAnchor</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">The icon's anchor point is the pixel in the source image that is aligned with the point's geographical location, expressed as a whitespace-separated pair of numbers: <code>x y</code>. Defaults to the center of the icon.</div></td>
</tr>
<tr>
<td><code><span>iconClip</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">The rectangular region of the icon's image (in image pixel coordinates) to use, as a whitespace-separated 4-tuple of numbers: <code>x y width height</code>. For example, to use a 32x32 icon situated at (0, 64) in a sprite sheet, specify <code>0 64 32 32</code>.</div></td>
</tr>
<tr>
<td><code><span>iconImage</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">The image to render at the point. Currently, only <code>url(...)</code> is supported.</div></td>
</tr>
<tr>
<td><code><span>iconOpacity</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">Icon opacity, expressed as a decimal between 0 and 1 inclusive. This property may be set as a number, but it will always be returned as a string.</div></td>
</tr>
<tr>
<td><code><span>iconSize</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">Icon size, expressed as a string with two measurements (with pixel or percentage as unit) separated by whitespace.</div></td>
</tr>
<tr>
<td><code><span>strokeColor</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">The feature's stroke color. All CSS3 colors are supported except for extended named colors.</div></td>
</tr>
<tr>
<td><code><span>strokeOpacity</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">Stroke opacity, expressed as a decimal between 0 and 1 inclusive. This property may be set as a number, but it will always be returned as a string.</div></td>
</tr>
<tr>
<td><code><span>strokeWidth</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">Stroke width in pixels. This property may be set as a number, but it will always be returned as a string.</div></td>
</tr>
<tr>
<td><code><span>zIndex</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">Rendering order. Features with greater zIndex are rendered on top.</div></td>
</tr>
</tbody>
</table></div>