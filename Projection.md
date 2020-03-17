
<devsite-heading text=" Projection interface" for="Projection" level="h2" link="" toc="" back-to-top=""><h2 id="Projection" is-upgraded="">Projection interface</h2></devsite-heading>
<p>
<code translate="no" dir="ltr"><span itemprop="path">google.maps</span>.<span itemprop="name">Projection</span></code>
interface
</p>
<div class="devsite-table-wrapper"><table class="methods responsive" summary="interface Projection - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr id="Projection.fromLatLngToPoint">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Projection.fromLatLngToPoint"><span>fromLatLngToPoint</span></a></code></td>
<td><div><code translate="no" dir="ltr">fromLatLngToPoint(latLng[, point])</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">latLng</code>:&nbsp; <code translate="no" dir="ltr"><a href="LatLng.md">LatLng</a></code></li>
<li><code translate="no" dir="ltr">point</code>:&nbsp; <code translate="no" dir="ltr"><a href="Point.md">Point</a> <span class="optional-type-annotation">optional</span></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr"><a href="Point.md">Point</a> <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Translates from the LatLng cylinder to the Point plane. This interface specifies a function which implements translation from given <code translate="no" dir="ltr">LatLng</code> values to world coordinates on the map projection. The Maps API calls this method when it needs to plot locations on screen. <code translate="no" dir="ltr">Projection</code> objects must implement this method, but may return <code translate="no" dir="ltr">null</code> if the projection cannot calculate the <code translate="no" dir="ltr">Point</code>.</div></td>
</tr>
<tr id="Projection.fromPointToLatLng">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Projection.fromPointToLatLng"><span>fromPointToLatLng</span></a></code></td>
<td><div><code translate="no" dir="ltr">fromPointToLatLng(pixel[, noWrap])</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">pixel</code>:&nbsp; <code translate="no" dir="ltr"><a href="Point.md">Point</a></code></li>
<li><code translate="no" dir="ltr">noWrap</code>:&nbsp; <code translate="no" dir="ltr">boolean <span class="optional-type-annotation">optional</span></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr"><a href="LatLng.md">LatLng</a> <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">This interface specifies a function which implements translation from world coordinates on a map projection to <code translate="no" dir="ltr">LatLng</code> values. The Maps API calls this method when it needs to translate actions on screen to positions on the map. <code translate="no" dir="ltr">Projection</code> objects must implement this method, but may return <code translate="no" dir="ltr">null</code> if the projection cannot calculate the <code translate="no" dir="ltr">LatLng</code>.</div></td>
</tr>
</tbody>
</table></div>
