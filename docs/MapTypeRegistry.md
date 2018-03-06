<h2 id="MapTypeRegistry"> MapTypeRegistry class </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">MapTypeRegistry</span></code>
class
</p><p>A registry for MapType instances, keyed by MapType id.</p><p>This class extends
<code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MVCObject.md">MVCObject</a></code>.
</p><div class="devsite-table-wrapper"><table class="constructors responsive" summary="class MapTypeRegistry - Constructor">
<thead>
<tr><th colspan="2" id="MapTypeRegistry.constructor">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>MapTypeRegistry</span></code></td>
<td><div><code>MapTypeRegistry()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc">The <code>MapTypeRegistry</code> holds the collection of custom map types available to the map for its use. The API consults this registry when providing the list of avaiable map types within controls, for example.</div></td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="methods responsive" summary="class MapTypeRegistry - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr id="MapTypeRegistry.set">
<td><code><span>set</span></code></td>
<td><div><code>set(id, mapType)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>id</code>:&nbsp; <code>string</code></li>
<li><code>mapType</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MapType.md">MapType</a>|*</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Sets the registry to associate the passed string identifier with the passed MapType.</div></td>
</tr>
</tbody>
</table></div>