
<devsite-heading text=" IconSequence interface" for="IconSequence" level="h2" link="" toc="" back-to-top=""><h2 id="IconSequence" is-upgraded="">IconSequence interface</h2></devsite-heading>
<p>
<code translate="no" dir="ltr"><span itemprop="path">google.maps</span>.<span itemprop="name">IconSequence</span></code>
interface
</p>
<p>Describes how icons are to be rendered on a line. <br><br> If your polyline is geodesic, then the distances specified for both offset and repeat are calculated in meters by default. Setting either offset or repeat to a pixel value will cause the distances to be calculated in pixels on the screen.</p>
<div class="devsite-table-wrapper"><table class="properties responsive" summary="interface IconSequence - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="IconSequence.fixedRotation">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#IconSequence.fixedRotation"><span>fixedRotation</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">boolean</code></div>
<div class="desc">If <code translate="no" dir="ltr">true</code>, each icon in the sequence has the same fixed rotation regardless of the angle of the edge on which it lies. Defaults to <code translate="no" dir="ltr">false</code>, in which case each icon in the sequence is rotated to align with its edge.</div></td>
</tr>
<tr id="IconSequence.icon">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#IconSequence.icon"><span>icon</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr"><a href="Symbol.md">Symbol</a></code></div>
<div class="desc">The icon to render on the line.</div></td>
</tr>
<tr id="IconSequence.offset">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#IconSequence.offset"><span>offset</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">string</code></div>
<div class="desc">The distance from the start of the line at which an icon is to be rendered. This distance may be expressed as a percentage of line's length (e.g. '50%') or in pixels (e.g. '50px'). Defaults to '100%'.</div></td>
</tr>
<tr id="IconSequence.repeat">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#IconSequence.repeat"><span>repeat</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">string</code></div>
<div class="desc">The distance between consecutive icons on the line. This distance may be expressed as a percentage of the line's length (e.g. '50%') or in pixels (e.g. '50px'). To disable repeating of the icon, specify '0'. Defaults to '0'.</div></td>
</tr>
</tbody>
</table></div>
