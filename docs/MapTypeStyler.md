<h2 id="MapTypeStyler"> MapTypeStyler object specification </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">MapTypeStyler</span></code>
object specification
</p><p>A styler affects how a map's elements will be styled. Each <code>MapTypeStyler</code> should contain one and only one key. If more than one key is specified in a single <code>MapTypeStyler</code>, all but one will be ignored. For example: <code>var rule = {hue: '#ff0000'}</code>.</p><div class="devsite-table-wrapper"><table class="properties responsive" summary="interface MapTypeStyler - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>color</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">Sets the color of the feature. Valid values: An RGB hex string, i.e. <code>'#ff0000'</code>.</div></td>
</tr>
<tr>
<td><code><span>gamma</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">Modifies the gamma by raising the lightness to the given power. Valid values: Floating point numbers, [0.01, 10], with 1.0 representing no change.</div></td>
</tr>
<tr>
<td><code><span>hue</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">Sets the hue of the feature to match the hue of the color supplied. Note that the saturation and lightness of the feature is conserved, which means that the feature will not match the color supplied exactly. Valid values: An RGB hex string, i.e. <code>'#ff0000'</code>.</div></td>
</tr>
<tr>
<td><code><span>invert_lightness</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">A value of <code>true</code> will invert the lightness of the feature while preserving the hue and saturation.</div></td>
</tr>
<tr>
<td><code><span>lightness</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">Shifts lightness of colors by a percentage of the original value if decreasing and a percentage of the remaining value if increasing. Valid values: [-100, 100].</div></td>
</tr>
<tr>
<td><code><span>saturation</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">Shifts the saturation of colors by a percentage of the original value if decreasing and a percentage of the remaining value if increasing. Valid values: [-100, 100].</div></td>
</tr>
<tr>
<td><code><span>visibility</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">Sets the visibility of the feature. Valid values: 'on', 'off' or 'simplifed'.</div></td>
</tr>
<tr>
<td><code><span>weight</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">Sets the weight of the feature, in pixels. Valid values: Integers greater than or equal to zero.</div></td>
</tr>
</tbody>
</table></div>