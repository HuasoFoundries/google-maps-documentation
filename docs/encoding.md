
<devsite-heading text=" encoding namespace" for="encoding" level="h2" link="" toc="" back-to-top=""><h2 id="encoding" is-upgraded="">encoding namespace </h2></devsite-heading>
<p>
<code translate="no" dir="ltr"><span itemprop="path">google.maps.geometry</span>.<span itemprop="name">encoding</span></code>
namespace
</p>
<p>Utilities for polyline encoding and decoding.</p>
<devsite-heading text="Library" for="library" level="h4" link=""><h4 is-upgraded="" id="library">Library<button role="button" class="devsite-heading-link button-flat material-icons" title="Copy link to this section"></button></h4></devsite-heading>
<p>geometry</p>
<div class="devsite-table-wrapper"><table class="methods responsive" summary="namespace encoding - Static Methods">
<thead>
<tr><th colspan="2">Static Methods</th>
</tr></thead>
<tbody>
<tr id="encoding.decodePath">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#encoding.decodePath"><span>decodePath</span></a></code></td>
<td><div><code translate="no" dir="ltr">decodePath(encodedPath)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">encodedPath</code>:&nbsp; <code translate="no" dir="ltr">string</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr">Array&lt;<a href="LatLng.md">LatLng</a>&gt;</code></div>
<div class="desc">Decodes an encoded path string into a sequence of LatLngs.</div></td>
</tr>
<tr id="encoding.encodePath">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#encoding.encodePath"><span>encodePath</span></a></code></td>
<td><div><code translate="no" dir="ltr">encodePath(path)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">path</code>:&nbsp; <code translate="no" dir="ltr">Array&lt;<a href="LatLng.md">LatLng</a>&gt;|<a href="MVCArray.md">MVCArray</a>&lt;<a href="LatLng.md">LatLng</a>&gt;</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr">string</code></div>
<div class="desc">Encodes a sequence of LatLngs into an encoded path string.</div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
