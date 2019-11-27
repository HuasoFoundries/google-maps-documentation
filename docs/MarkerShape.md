
<devsite-heading text=" MarkerShape interface" for="MarkerShape" level="h2" link="" toc="" back-to-top=""><h2 id="MarkerShape" is-upgraded="">MarkerShape interface </h2></devsite-heading>
<p>
<code translate="no" dir="ltr"><span itemprop="path">google.maps</span>.<span itemprop="name">MarkerShape</span></code>
interface
</p>
<p>This object defines the clickable region of a marker image. The shape consists of two properties — <code translate="no" dir="ltr">type</code> and <code translate="no" dir="ltr">coord</code> — which define the non-transparent region of an image.</p>
<div class="devsite-table-wrapper"><table class="properties responsive" summary="interface MarkerShape - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="MarkerShape.coords">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#MarkerShape.coords"><span>coords</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">Array&lt;number&gt;</code></div>
<div class="desc">The format of this attribute depends on the value of the <code translate="no" dir="ltr">type</code> and follows the w3 AREA <code translate="no" dir="ltr">coords</code> specification found at <a href="http://www.w3.org/TR/REC-html40/struct/objects.html#adef-coords"> http://www.w3.org/TR/REC-html40/struct/objects.html#adef-coords</a>. <br>The <code translate="no" dir="ltr">coords</code> attribute is an array of integers that specify the pixel position of the shape relative to the top-left corner of the target image. The coordinates depend on the value of <code translate="no" dir="ltr">type</code> as follows: <br>&nbsp;&nbsp;- <code translate="no" dir="ltr">circle</code>: coords is <code translate="no" dir="ltr">[x1,y1,r]</code> where x1,y2 are the coordinates of the center of the circle, and r is the radius of the circle. <br>&nbsp;&nbsp;- <code translate="no" dir="ltr">poly</code>: coords is <code translate="no" dir="ltr">[x1,y1,x2,y2...xn,yn]</code> where each x,y pair contains the coordinates of one vertex of the polygon. <br>&nbsp;&nbsp;- <code translate="no" dir="ltr">rect</code>: coords is <code translate="no" dir="ltr">[x1,y1,x2,y2]</code> where x1,y1 are the coordinates of the upper-left corner of the rectangle and x2,y2 are the coordinates of the lower-right coordinates of the rectangle.</div></td>
</tr>
<tr id="MarkerShape.type">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#MarkerShape.type"><span>type</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">string</code></div>
<div class="desc">Describes the shape's type and can be <code translate="no" dir="ltr">circle</code>, <code translate="no" dir="ltr">poly</code> or <code translate="no" dir="ltr">rect</code>.</div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
