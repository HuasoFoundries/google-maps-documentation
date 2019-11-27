
<devsite-heading text=" GroundOverlay class" for="GroundOverlay" level="h2" link="" toc="" back-to-top=""><h2 id="GroundOverlay" is-upgraded="">GroundOverlay class </h2></devsite-heading>
<p>
<code translate="no" dir="ltr"><span itemprop="path">google.maps</span>.<span itemprop="name">GroundOverlay</span></code>
class
</p>
<p>A rectangular image overlay on the map.</p>
<p>This class extends
<code translate="no" dir="ltr"><a href="MVCObject.md">MVCObject</a></code>.
</p>
<div class="devsite-table-wrapper"><table class="constructors responsive" summary="class GroundOverlay - Constructor">
<thead>
<tr><th colspan="2" id="GroundOverlay.constructor">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code translate="no" dir="ltr"><a class="secret-link" href="#GroundOverlay.constructor"><span>GroundOverlay</span></a></code></td>
<td><div><code translate="no" dir="ltr">GroundOverlay(url, bounds[, opts])</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">url</code>:&nbsp; <code translate="no" dir="ltr">string</code></li>
<li><code translate="no" dir="ltr">bounds</code>:&nbsp; <code translate="no" dir="ltr"><a href="LatLngBounds.md">LatLngBounds</a>|<a href="LatLngBoundsLiteral.md">LatLngBoundsLiteral</a></code></li>
<li><code translate="no" dir="ltr">opts</code>:&nbsp; <code translate="no" dir="ltr"><a href="GroundOverlayOptions.md">GroundOverlayOptions</a> <span class="optional-type-annotation">optional</span></code></li>
</ul></div>
<div class="desc">Creates a ground overlay from the provided image URL and its <code translate="no" dir="ltr">LatLngBounds</code>. The image is scaled to fit the current bounds, and projected using the current map projection.</div></td>
</tr>
</tbody>
</table></div>
<div class="devsite-table-wrapper"><table class="methods responsive" summary="class GroundOverlay - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr id="GroundOverlay.getBounds">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#GroundOverlay.getBounds"><span>getBounds</span></a></code></td>
<td><div><code translate="no" dir="ltr">getBounds()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr"><a href="LatLngBounds.md">LatLngBounds</a></code></div>
<div class="desc">Gets the <code translate="no" dir="ltr">LatLngBounds</code> of this overlay.</div></td>
</tr>
<tr id="GroundOverlay.getMap">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#GroundOverlay.getMap"><span>getMap</span></a></code></td>
<td><div><code translate="no" dir="ltr">getMap()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr"><a href="Map.md">Map</a></code></div>
<div class="desc">Returns the map on which this ground overlay is displayed.</div></td>
</tr>
<tr id="GroundOverlay.getOpacity">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#GroundOverlay.getOpacity"><span>getOpacity</span></a></code></td>
<td><div><code translate="no" dir="ltr">getOpacity()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr">number</code></div>
<div class="desc">Returns the opacity of this ground overlay.</div></td>
</tr>
<tr id="GroundOverlay.getUrl">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#GroundOverlay.getUrl"><span>getUrl</span></a></code></td>
<td><div><code translate="no" dir="ltr">getUrl()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr">string</code></div>
<div class="desc">Gets the url of the projected image.</div></td>
</tr>
<tr id="GroundOverlay.setMap">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#GroundOverlay.setMap"><span>setMap</span></a></code></td>
<td><div><code translate="no" dir="ltr">setMap(map)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">map</code>:&nbsp; <code translate="no" dir="ltr"><a href="Map.md">Map</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Renders the ground overlay on the specified map. If map is set to null, the overlay is removed.</div></td>
</tr>
<tr id="GroundOverlay.setOpacity">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#GroundOverlay.setOpacity"><span>setOpacity</span></a></code></td>
<td><div><code translate="no" dir="ltr">setOpacity(opacity)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">opacity</code>:&nbsp; <code translate="no" dir="ltr">number</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Sets the opacity of this ground overlay.</div></td>
</tr>
</tbody>
</table></div>
<div class="devsite-table-wrapper"><table class="details responsive" summary="class GroundOverlay - Events">
<thead>
<tr><th colspan="2">Events</th>
</tr></thead>
<tbody>
<tr id="GroundOverlay.click">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#GroundOverlay.click"><span>click</span></a></code></td>
<td><div><code translate="no" dir="ltr">function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">event</code>:&nbsp; <code translate="no" dir="ltr"><a href="MouseEvent.md">MouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when the DOM click event is fired on the <code translate="no" dir="ltr">GroundOverlay</code>.</div></td>
</tr>
<tr id="GroundOverlay.dblclick">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#GroundOverlay.dblclick"><span>dblclick</span></a></code></td>
<td><div><code translate="no" dir="ltr">function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">event</code>:&nbsp; <code translate="no" dir="ltr"><a href="MouseEvent.md">MouseEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when the DOM dblclick event is fired on the <code translate="no" dir="ltr">GroundOverlay</code>.</div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
