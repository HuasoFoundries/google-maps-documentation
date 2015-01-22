<h2 id="IconSequence">
google.maps.IconSequence
object specification
</h2><p>Describes how icons are to be rendered on a line. <br><br> If your polyline is geodesic, then the distances specified for both offset and repeat are calculated in meters by default. Setting either offset or repeat to a pixel value will cause the distances to be calculated in pixels on the screen.<br><br></p><h3 id="devsite_header_74">Properties</h3><table summary="interface IconSequence - Properties" width="100%">
<thead>
<tr><th>Properties</th>
<th>Type</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>fixedRotation</code></td>
<td><code>boolean</code></td>
<td>If <code>true</code>, each icon in the sequence has the same fixed rotation regardless of the angle of the edge on which it lies. Defaults to <code>false</code>, in which case each icon in the sequence is rotated to align with its edge.</td>
</tr>
<tr>
<td><code>icon</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Symbol.md">Symbol</a></code></td>
<td>The icon to render on the line.</td>
</tr>
<tr>
<td><code>offset</code></td>
<td><code>string</code></td>
<td>The distance from the start of the line at which an icon is to be rendered. This distance may be expressed as a percentage of line's length (e.g. '50%') or in pixels (e.g. '50px'). Defaults to '100%'.</td>
</tr>
<tr>
<td><code>repeat</code></td>
<td><code>string</code></td>
<td>The distance between consecutive icons on the line. This distance may be expressed as a percentage of the line's length (e.g. '50%') or in pixels (e.g. '50px'). To disable repeating of the icon, specify '0'. Defaults to '0'.</td>
</tr>
</tbody>
</table>