
<devsite-heading text=" LatLngBounds class" for="LatLngBounds" level="h2" link="" toc="" back-to-top=""><h2 id="LatLngBounds" is-upgraded="">LatLngBounds class </h2></devsite-heading>
<p>
<code translate="no" dir="ltr"><span itemprop="path">google.maps</span>.<span itemprop="name">LatLngBounds</span></code>
class
</p>
<p>A <code translate="no" dir="ltr"><a href="LatLngBounds.md">LatLngBounds</a></code> instance represents a rectangle in geographical coordinates, including one that crosses the 180 degrees longitudinal meridian.</p>
<div class="devsite-table-wrapper"><table class="constructors responsive" summary="class LatLngBounds - Constructor">
<thead>
<tr><th colspan="2" id="LatLngBounds.constructor">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code translate="no" dir="ltr"><a class="secret-link" href="#LatLngBounds.constructor"><span>LatLngBounds</span></a></code></td>
<td><div><code translate="no" dir="ltr">LatLngBounds([sw, ne])</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">sw</code>:&nbsp; <code translate="no" dir="ltr"><a href="LatLng.md">LatLng</a>|<a href="LatLngLiteral.md">LatLngLiteral</a> <span class="optional-type-annotation">optional</span></code></li>
<li><code translate="no" dir="ltr">ne</code>:&nbsp; <code translate="no" dir="ltr"><a href="LatLng.md">LatLng</a>|<a href="LatLngLiteral.md">LatLngLiteral</a> <span class="optional-type-annotation">optional</span></code></li>
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
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#LatLngBounds.contains"><span>contains</span></a></code></td>
<td><div><code translate="no" dir="ltr">contains(latLng)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">latLng</code>:&nbsp; <code translate="no" dir="ltr"><a href="LatLng.md">LatLng</a>|<a href="LatLngLiteral.md">LatLngLiteral</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr">boolean</code></div>
<div class="desc">Returns <code translate="no" dir="ltr">true</code> if the given lat/lng is in this bounds.</div></td>
</tr>
<tr id="LatLngBounds.equals">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#LatLngBounds.equals"><span>equals</span></a></code></td>
<td><div><code translate="no" dir="ltr">equals(other)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">other</code>:&nbsp; <code translate="no" dir="ltr"><a href="LatLngBounds.md">LatLngBounds</a>|<a href="LatLngBoundsLiteral.md">LatLngBoundsLiteral</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr">boolean</code></div>
<div class="desc">Returns <code translate="no" dir="ltr">true</code> if this bounds approximately equals the given bounds.</div></td>
</tr>
<tr id="LatLngBounds.extend">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#LatLngBounds.extend"><span>extend</span></a></code></td>
<td><div><code translate="no" dir="ltr">extend(point)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">point</code>:&nbsp; <code translate="no" dir="ltr"><a href="LatLng.md">LatLng</a>|<a href="LatLngLiteral.md">LatLngLiteral</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr"><a href="LatLngBounds.md">LatLngBounds</a></code></div>
<div class="desc">Extends this bounds to contain the given point.</div></td>
</tr>
<tr id="LatLngBounds.getCenter">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#LatLngBounds.getCenter"><span>getCenter</span></a></code></td>
<td><div><code translate="no" dir="ltr">getCenter()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr"><a href="LatLng.md">LatLng</a></code></div>
<div class="desc">Computes the center of this LatLngBounds</div></td>
</tr>
<tr id="LatLngBounds.getNorthEast">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#LatLngBounds.getNorthEast"><span>getNorthEast</span></a></code></td>
<td><div><code translate="no" dir="ltr">getNorthEast()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr"><a href="LatLng.md">LatLng</a></code></div>
<div class="desc">Returns the north-east corner of this bounds.</div></td>
</tr>
<tr id="LatLngBounds.getSouthWest">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#LatLngBounds.getSouthWest"><span>getSouthWest</span></a></code></td>
<td><div><code translate="no" dir="ltr">getSouthWest()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr"><a href="LatLng.md">LatLng</a></code></div>
<div class="desc">Returns the south-west corner of this bounds.</div></td>
</tr>
<tr id="LatLngBounds.intersects">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#LatLngBounds.intersects"><span>intersects</span></a></code></td>
<td><div><code translate="no" dir="ltr">intersects(other)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">other</code>:&nbsp; <code translate="no" dir="ltr"><a href="LatLngBounds.md">LatLngBounds</a>|<a href="LatLngBoundsLiteral.md">LatLngBoundsLiteral</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr">boolean</code></div>
<div class="desc">Returns <code translate="no" dir="ltr">true</code> if this bounds shares any points with the other bounds.</div></td>
</tr>
<tr id="LatLngBounds.isEmpty">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#LatLngBounds.isEmpty"><span>isEmpty</span></a></code></td>
<td><div><code translate="no" dir="ltr">isEmpty()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr">boolean</code></div>
<div class="desc">Returns if the bounds are empty.</div></td>
</tr>
<tr id="LatLngBounds.toJSON">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#LatLngBounds.toJSON"><span>toJSON</span></a></code></td>
<td><div><code translate="no" dir="ltr">toJSON()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr"><a href="LatLngBoundsLiteral.md">LatLngBoundsLiteral</a></code></div>
<div class="desc">Converts to JSON representation. This function is intended to be used via <code translate="no" dir="ltr">JSON.stringify</code>.</div></td>
</tr>
<tr id="LatLngBounds.toSpan">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#LatLngBounds.toSpan"><span>toSpan</span></a></code></td>
<td><div><code translate="no" dir="ltr">toSpan()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr"><a href="LatLng.md">LatLng</a></code></div>
<div class="desc">Converts the given map bounds to a lat/lng span.</div></td>
</tr>
<tr id="LatLngBounds.toString">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#LatLngBounds.toString"><span>toString</span></a></code></td>
<td><div><code translate="no" dir="ltr">toString()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr">string</code></div>
<div class="desc">Converts to string.</div></td>
</tr>
<tr id="LatLngBounds.toUrlValue">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#LatLngBounds.toUrlValue"><span>toUrlValue</span></a></code></td>
<td><div><code translate="no" dir="ltr">toUrlValue([precision])</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">precision</code>:&nbsp; <code translate="no" dir="ltr">number <span class="optional-type-annotation">optional</span></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr">string</code></div>
<div class="desc">Returns a string of the form "lat_lo,lng_lo,lat_hi,lng_hi" for this bounds, where "lo" corresponds to the southwest corner of the bounding box, while "hi" corresponds to the northeast corner of that box.</div></td>
</tr>
<tr id="LatLngBounds.union">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#LatLngBounds.union"><span>union</span></a></code></td>
<td><div><code translate="no" dir="ltr">union(other)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">other</code>:&nbsp; <code translate="no" dir="ltr"><a href="LatLngBounds.md">LatLngBounds</a>|<a href="LatLngBoundsLiteral.md">LatLngBoundsLiteral</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr"><a href="LatLngBounds.md">LatLngBounds</a></code></div>
<div class="desc">Extends this bounds to contain the union of this and the given bounds.</div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
