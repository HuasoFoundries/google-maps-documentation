
<h2 id="encoding">encoding namespace</h2>
<p>
<code><span itemprop="path">google.maps.geometry</span>.<span itemprop="name">encoding</span></code>
namespace
</p>
<p>Utilities for polyline encoding and decoding.</p>
<h4>Library</h4>
<p>geometry</p>
<div class="devsite-table-wrapper"><table class="methods responsive" summary="namespace encoding - Static Methods">
<thead>
<tr><th colspan="2">Static Methods</th>
</tr></thead>
<tbody>
<tr id="encoding.decodePath">
<td itemprop="property"><code><a class="secret-link" href="#encoding.decodePath"><span>decodePath</span></a></code></td>
<td><div><code>decodePath(encodedPath)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>encodedPath</code>:&nbsp; <code>string</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>Array&lt;<a href="LatLng.md">LatLng</a>&gt;</code></div>
<div class="desc">Decodes an encoded path string into a sequence of LatLngs.</div></td>
</tr>
<tr id="encoding.encodePath">
<td itemprop="property"><code><a class="secret-link" href="#encoding.encodePath"><span>encodePath</span></a></code></td>
<td><div><code>encodePath(path)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>path</code>:&nbsp; <code>Array&lt;<a href="LatLng.md">LatLng</a>&gt;|<a href="MVCArray.md">MVCArray</a>&lt;<a href="LatLng.md">LatLng</a>&gt;</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>string</code></div>
<div class="desc">Encodes a sequence of LatLngs into an encoded path string.</div></td>
</tr>
</tbody>
</table></div>
