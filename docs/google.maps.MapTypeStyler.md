<h2 id="MapTypeStyler">
google.maps.MapTypeStyler
object specification
</h2><p>A styler affects how a map's elements will be styled. Each <code>MapTypeStyler</code> should contain one and only one key. If more than one key is specified in a single <code>MapTypeStyler</code>, all but one will be ignored. For example: <code>var rule = {hue: '#ff0000'}</code>.</p><h3 id="devsite_header_174">Properties</h3><table summary="interface MapTypeStyler - Properties" width="100%">
<thead>
<tr><th>Properties</th>
<th>Type</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>color</code></td>
<td><code>string</code></td>
<td>Sets the color of the feature. Valid values: An RGB hex string, i.e. <code>'#ff0000'</code>.</td>
</tr>
<tr>
<td><code>gamma</code></td>
<td><code>number</code></td>
<td>Modifies the gamma by raising the lightness to the given power. Valid values: Floating point numbers, [0.01, 10], with 1.0 representing no change.</td>
</tr>
<tr>
<td><code>hue</code></td>
<td><code>string</code></td>
<td>Sets the hue of the feature to match the hue of the color supplied. Note that the saturation and lightness of the feature is conserved, which means that the feature will not match the color supplied exactly. Valid values: An RGB hex string, i.e. <code>'#ff0000'</code>.</td>
</tr>
<tr>
<td><code>invert_lightness</code></td>
<td><code>boolean</code></td>
<td>A value of <code>true</code> will invert the lightness of the feature while preserving the hue and saturation.</td>
</tr>
<tr>
<td><code>lightness</code></td>
<td><code>number</code></td>
<td>Shifts lightness of colors by a percentage of the original value if decreasing and a percentage of the remaining value if increasing. Valid values: [-100, 100].</td>
</tr>
<tr>
<td><code>saturation</code></td>
<td><code>number</code></td>
<td>Shifts the saturation of colors by a percentage of the original value if decreasing and a percentage of the remaining value if increasing. Valid values: [-100, 100].</td>
</tr>
<tr>
<td><code>visibility</code></td>
<td><code>string</code></td>
<td>Sets the visibility of the feature. Valid values: 'on', 'off' or 'simplifed'.</td>
</tr>
<tr>
<td><code>weight</code></td>
<td><code>number</code></td>
<td>Sets the weight of the feature, in pixels. Valid values: Integers greater than or equal to zero.</td>
</tr>
</tbody>
</table>