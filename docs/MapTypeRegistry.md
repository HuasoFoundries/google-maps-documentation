
<devsite-heading text=" MapTypeRegistry class" for="MapTypeRegistry" level="h2" link="" toc="" back-to-top=""><h2 id="MapTypeRegistry" is-upgraded="">MapTypeRegistry class</h2></devsite-heading>
<p>
<code translate="no" dir="ltr"><span itemprop="path">google.maps</span>.<span itemprop="name">MapTypeRegistry</span></code>
class
</p>
<p>A registry for MapType instances, keyed by MapType id.</p>
<p>This class extends
<code translate="no" dir="ltr"><a href="MVCObject.md">MVCObject</a></code>.
</p>
<div class="devsite-table-wrapper"><table class="constructors responsive" summary="class MapTypeRegistry - Constructor">
<thead>
<tr><th colspan="2" id="MapTypeRegistry.constructor">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code translate="no" dir="ltr"><a class="secret-link" href="#MapTypeRegistry.constructor"><span>MapTypeRegistry</span></a></code></td>
<td><div><code translate="no" dir="ltr">MapTypeRegistry()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc">The <code translate="no" dir="ltr">MapTypeRegistry</code> holds the collection of custom map types available to the map for its use. The API consults this registry when providing the list of avaiable map types within controls, for example.</div></td>
</tr>
</tbody>
</table></div>
<div class="devsite-table-wrapper"><table class="methods responsive" summary="class MapTypeRegistry - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr id="MapTypeRegistry.set">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#MapTypeRegistry.set"><span>set</span></a></code></td>
<td><div><code translate="no" dir="ltr">set(id, mapType)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">id</code>:&nbsp; <code translate="no" dir="ltr">string</code></li>
<li><code translate="no" dir="ltr">mapType</code>:&nbsp; <code translate="no" dir="ltr"><a href="MapType.md">MapType</a>|*</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Sets the registry to associate the passed string identifier with the passed MapType.</div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
