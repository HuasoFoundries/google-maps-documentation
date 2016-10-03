<h2 id="IconSequence"> IconSequence object specification </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">IconSequence</span></code>
object specification
</p><p>Describes how icons are to be rendered on a line. <br><br> If your polyline is geodesic, then the distances specified for both offset and repeat are calculated in meters by default. Setting either offset or repeat to a pixel value will cause the distances to be calculated in pixels on the screen.</p><div class="devsite-table-wrapper"><table class="properties responsive" summary="record IconSequence - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>fixedRotation</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">If <code>true</code>, each icon in the sequence has the same fixed rotation regardless of the angle of the edge on which it lies. Defaults to <code>false</code>, in which case each icon in the sequence is rotated to align with its edge.</div></td>
</tr>
<tr>
<td><code><span>icon</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Symbol.md">Symbol</a></code></div>
<div class="desc">The icon to render on the line.</div></td>
</tr>
<tr>
<td><code><span>offset</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">The distance from the start of the line at which an icon is to be rendered. This distance may be expressed as a percentage of line's length (e.g. '50%') or in pixels (e.g. '50px'). Defaults to '100%'.</div></td>
</tr>
<tr>
<td><code><span>repeat</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">The distance between consecutive icons on the line. This distance may be expressed as a percentage of the line's length (e.g. '50%') or in pixels (e.g. '50px'). To disable repeating of the icon, specify '0'. Defaults to '0'.</div></td>
</tr>
</tbody>
</table></div>