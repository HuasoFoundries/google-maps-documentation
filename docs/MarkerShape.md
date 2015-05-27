<h2 id="MarkerShape">
google.maps.MarkerShape
object specification
</h2><p>This object defines the clickable region of a marker image for browsers other than Internet Explorer. The shape consists of two properties — <code>type</code> and <code>coord</code> — which define the non-transparent region of an image. A <code>MarkerShape</code> object is not required on Internet Explorer since the browser does not fire events on the transparent region of an image by default.</p><h3>Properties</h3><table summary="interface MarkerShape - Properties" width="100%">
<thead>
<tr><th>Properties</th>
<th>Type</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>coords</code></td>
<td><code>Array&lt;number&gt;</code></td>
<td>The format of this attribute depends on the value of the <code>type</code> and follows the w3 AREA <code>coords</code> specification found at <a href="http://www.w3.org/TR/REC-html40/struct/objects.html#adef-coords"> http://www.w3.org/TR/REC-html40/struct/objects.html#adef-coords</a>. <br>The <code>coords</code> attribute is an array of integers that specify the pixel position of the shape relative to the top-left corner of the target image. The coordinates depend on the value of <code>type</code> as follows: <br>&nbsp;&nbsp;- <code>circle</code>: coords is <code>[x1,y1,r]</code> where x1,y2 are the coordinates of the center of the circle, and r is the radius of the circle. <br>&nbsp;&nbsp;- <code>poly</code>: coords is <code>[x1,y1,x2,y2...xn,yn]</code> where each x,y pair contains the coordinates of one vertex of the polygon. <br>&nbsp;&nbsp;- <code>rect</code>: coords is <code>[x1,y1,x2,y2]</code> where x1,y1 are the coordinates of the upper-left corner of the rectangle and x2,y2 are the coordinates of the lower-right coordinates of the rectangle.</td>
</tr>
<tr>
<td><code>type</code></td>
<td><code>string</code></td>
<td>Describes the shape's type and can be <code>circle</code>, <code>poly</code> or <code>rect</code>.</td>
</tr>
</tbody>
</table>