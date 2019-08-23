
<h2 id="LatLngBounds">LatLngBounds class</h2>
<p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">LatLngBounds</span></code>
class
</p>
<p>A <code><a href="LatLngBounds.md">LatLngBounds</a></code> instance represents a rectangle in geographical coordinates, including one that crosses the 180 degrees longitudinal meridian.</p>
<div class="devsite-table-wrapper"><table class="constructors responsive" summary="class LatLngBounds - Constructor">
<thead>
<tr><th colspan="2" id="LatLngBounds.constructor">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code><a class="secret-link" href="#LatLngBounds.constructor"><span>LatLngBounds</span></a></code></td>
<td><div><code>LatLngBounds([sw, ne])</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>sw</code>:&nbsp; <code><a href="LatLng.md">LatLng</a>|<a href="LatLngLiteral.md">LatLngLiteral</a> <span class="optional-type-annotation">optional</span></code></li>
<li><code>ne</code>:&nbsp; <code><a href="LatLng.md">LatLng</a>|<a href="LatLngLiteral.md">LatLngLiteral</a> <span class="optional-type-annotation">optional</span></code></li>
</ul></div>
<div class="desc">Constructs a rectangle from the points at its south-west and north-east corners.</div></td>
</tr>
</tbody>
</table></div>
<div class="devsite-table-wrapper"><table class="methods responsive" summary="class LatLngBounds - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr id="LatLngBounds.contains">
<td itemprop="property"><code><a class="secret-link" href="#LatLngBounds.contains"><span>contains</span></a></code></td>
<td><div><code>contains(latLng)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>latLng</code>:&nbsp; <code><a href="LatLng.md">LatLng</a>|<a href="LatLngLiteral.md">LatLngLiteral</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">Returns <code>true</code> if the given lat/lng is in this bounds.</div></td>
</tr>
<tr id="LatLngBounds.equals">
<td itemprop="property"><code><a class="secret-link" href="#LatLngBounds.equals"><span>equals</span></a></code></td>
<td><div><code>equals(other)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>other</code>:&nbsp; <code><a href="LatLngBounds.md">LatLngBounds</a>|<a href="LatLngBoundsLiteral.md">LatLngBoundsLiteral</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">Returns <code>true</code> if this bounds approximately equals the given bounds.</div></td>
</tr>
<tr id="LatLngBounds.extend">
<td itemprop="property"><code><a class="secret-link" href="#LatLngBounds.extend"><span>extend</span></a></code></td>
<td><div><code>extend(point)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>point</code>:&nbsp; <code><a href="LatLng.md">LatLng</a>|<a href="LatLngLiteral.md">LatLngLiteral</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="LatLngBounds.md">LatLngBounds</a></code></div>
<div class="desc">Extends this bounds to contain the given point.</div></td>
</tr>
<tr id="LatLngBounds.getCenter">
<td itemprop="property"><code><a class="secret-link" href="#LatLngBounds.getCenter"><span>getCenter</span></a></code></td>
<td><div><code>getCenter()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="LatLng.md">LatLng</a></code></div>
<div class="desc">Computes the center of this LatLngBounds</div></td>
</tr>
<tr id="LatLngBounds.getNorthEast">
<td itemprop="property"><code><a class="secret-link" href="#LatLngBounds.getNorthEast"><span>getNorthEast</span></a></code></td>
<td><div><code>getNorthEast()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="LatLng.md">LatLng</a></code></div>
<div class="desc">Returns the north-east corner of this bounds.</div></td>
</tr>
<tr id="LatLngBounds.getSouthWest">
<td itemprop="property"><code><a class="secret-link" href="#LatLngBounds.getSouthWest"><span>getSouthWest</span></a></code></td>
<td><div><code>getSouthWest()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="LatLng.md">LatLng</a></code></div>
<div class="desc">Returns the south-west corner of this bounds.</div></td>
</tr>
<tr id="LatLngBounds.intersects">
<td itemprop="property"><code><a class="secret-link" href="#LatLngBounds.intersects"><span>intersects</span></a></code></td>
<td><div><code>intersects(other)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>other</code>:&nbsp; <code><a href="LatLngBounds.md">LatLngBounds</a>|<a href="LatLngBoundsLiteral.md">LatLngBoundsLiteral</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">Returns <code>true</code> if this bounds shares any points with the other bounds.</div></td>
</tr>
<tr id="LatLngBounds.isEmpty">
<td itemprop="property"><code><a class="secret-link" href="#LatLngBounds.isEmpty"><span>isEmpty</span></a></code></td>
<td><div><code>isEmpty()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">Returns if the bounds are empty.</div></td>
</tr>
<tr id="LatLngBounds.toJSON">
<td itemprop="property"><code><a class="secret-link" href="#LatLngBounds.toJSON"><span>toJSON</span></a></code></td>
<td><div><code>toJSON()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="LatLngBoundsLiteral.md">LatLngBoundsLiteral</a></code></div>
<div class="desc">Converts to JSON representation. This function is intended to be used via <code>JSON.stringify</code>.</div></td>
</tr>
<tr id="LatLngBounds.toSpan">
<td itemprop="property"><code><a class="secret-link" href="#LatLngBounds.toSpan"><span>toSpan</span></a></code></td>
<td><div><code>toSpan()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="LatLng.md">LatLng</a></code></div>
<div class="desc">Converts the given map bounds to a lat/lng span.</div></td>
</tr>
<tr id="LatLngBounds.toString">
<td itemprop="property"><code><a class="secret-link" href="#LatLngBounds.toString"><span>toString</span></a></code></td>
<td><div><code>toString()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>string</code></div>
<div class="desc">Converts to string.</div></td>
</tr>
<tr id="LatLngBounds.toUrlValue">
<td itemprop="property"><code><a class="secret-link" href="#LatLngBounds.toUrlValue"><span>toUrlValue</span></a></code></td>
<td><div><code>toUrlValue([precision])</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>precision</code>:&nbsp; <code>number <span class="optional-type-annotation">optional</span></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>string</code></div>
<div class="desc">Returns a string of the form "lat_lo,lng_lo,lat_hi,lng_hi" for this bounds, where "lo" corresponds to the southwest corner of the bounding box, while "hi" corresponds to the northeast corner of that box.</div></td>
</tr>
<tr id="LatLngBounds.union">
<td itemprop="property"><code><a class="secret-link" href="#LatLngBounds.union"><span>union</span></a></code></td>
<td><div><code>union(other)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>other</code>:&nbsp; <code><a href="LatLngBounds.md">LatLngBounds</a>|<a href="LatLngBoundsLiteral.md">LatLngBoundsLiteral</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="LatLngBounds.md">LatLngBounds</a></code></div>
<div class="desc">Extends this bounds to contain the union of this and the given bounds.</div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
