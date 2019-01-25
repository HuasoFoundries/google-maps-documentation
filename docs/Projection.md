
<h2 id="Projection">Projection interface</h2>
<p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">Projection</span></code>
interface
</p>
<div class="devsite-table-wrapper"><table class="methods responsive" summary="interface Projection - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr id="Projection.fromLatLngToPoint">
<td itemprop="property"><code><a class="secret-link" href="#Projection.fromLatLngToPoint"><span>fromLatLngToPoint</span></a></code></td>
<td><div><code>fromLatLngToPoint(latLng[, point])</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>latLng</code>:&nbsp; <code><a href="LatLng.md">LatLng</a></code></li>
<li><code>point</code> (optional):&nbsp; <code><a href="Point.md">Point</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="Point.md">Point</a></code></div>
<div class="desc">Translates from the LatLng cylinder to the Point plane. This interface specifies a function which implements translation from given <code>LatLng</code> values to world coordinates on the map projection. The Maps API calls this method when it needs to plot locations on screen. <code>Projection</code> objects must implement this method.</div></td>
</tr>
<tr id="Projection.fromPointToLatLng">
<td itemprop="property"><code><a class="secret-link" href="#Projection.fromPointToLatLng"><span>fromPointToLatLng</span></a></code></td>
<td><div><code>fromPointToLatLng(pixel[, nowrap])</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>pixel</code>:&nbsp; <code><a href="Point.md">Point</a></code></li>
<li><code>nowrap</code> (optional):&nbsp; <code>boolean</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="LatLng.md">LatLng</a></code></div>
<div class="desc">This interface specifies a function which implements translation from world coordinates on a map projection to <code>LatLng</code> values. The Maps API calls this method when it needs to translate actions on screen to positions on the map. <code>Projection</code> objects must implement this method.</div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
