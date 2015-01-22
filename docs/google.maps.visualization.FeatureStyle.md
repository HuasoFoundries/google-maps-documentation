<h2 id="FeatureStyle">
google.maps.visualization.FeatureStyle
object specification
</h2><h3 id="devsite_header_377">Library</h3><p>visualization</p><h3 id="devsite_header_378">Methods</h3><table summary="interface FeatureStyle - Methods" width="100%">
<thead>
<tr><th>Methods</th>
<th>Return Value</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>reset(property:string)</code></td>
<td><code>None</code></td>
<td>Resets the given style property to its original value.</td>
</tr>
<tr>
<td><code>resetAll()</code></td>
<td><code>None</code></td>
<td>Resets all style properties to their original values.</td>
</tr>
</tbody>
</table><h3 id="devsite_header_379">Properties</h3><table summary="interface FeatureStyle - Properties" width="100%">
<thead>
<tr><th>Properties</th>
<th>Type</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>fillColor</code></td>
<td><code>string</code></td>
<td>The feature's fill color. All CSS3 colors are supported except for extended named colors.</td>
</tr>
<tr>
<td><code>fillOpacity</code></td>
<td><code>string</code></td>
<td>Fill opacity, expressed as a decimal between 0 and 1 inclusive. This property may be set as a number, but it will always be returned as a string.</td>
</tr>
<tr>
<td><code>iconAnchor</code></td>
<td><code>string</code></td>
<td>The icon's anchor point is the pixel in the source image that is aligned with the point's geographical location, expressed as a whitespace-separated pair of numbers: <code>x y</code>. Defaults to the center of the icon.</td>
</tr>
<tr>
<td><code>iconClip</code></td>
<td><code>string</code></td>
<td>The rectangular region of the icon's image (in image pixel coordinates) to use, as a whitespace-separated 4-tuple of numbers: <code>x y width height</code>. For example, to use a 32x32 icon situated at (0, 64) in a sprite sheet, specify <code>0 64 32 32</code>.</td>
</tr>
<tr>
<td><code>iconImage</code></td>
<td><code>string</code></td>
<td>The image to render at the point. Currently, only <code>url(...)</code> is supported.</td>
</tr>
<tr>
<td><code>iconOpacity</code></td>
<td><code>string</code></td>
<td>Icon opacity, expressed as a decimal between 0 and 1 inclusive. This property may be set as a number, but it will always be returned as a string.</td>
</tr>
<tr>
<td><code>iconSize</code></td>
<td><code>string</code></td>
<td>Icon size, expressed as a string with two measurements (with pixel or percentage as unit) separated by whitespace.</td>
</tr>
<tr>
<td><code>strokeColor</code></td>
<td><code>string</code></td>
<td>The feature's stroke color. All CSS3 colors are supported except for extended named colors.</td>
</tr>
<tr>
<td><code>strokeOpacity</code></td>
<td><code>string</code></td>
<td>Stroke opacity, expressed as a decimal between 0 and 1 inclusive. This property may be set as a number, but it will always be returned as a string.</td>
</tr>
<tr>
<td><code>strokeWidth</code></td>
<td><code>string</code></td>
<td>Stroke width in pixels. This property may be set as a number, but it will always be returned as a string.</td>
</tr>
<tr>
<td><code>zIndex</code></td>
<td><code>string</code></td>
<td>Rendering order. Features with greater zIndex are rendered on top.</td>
</tr>
</tbody>
</table>