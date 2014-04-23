<h2 id="MapTypeRegistry">
google.maps.MapTypeRegistry
class
</h2><p>This class extends
<code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.MVCObject.md">MVCObject</a></code>.
</p><h3>Constructor</h3><table summary="class MapTypeRegistry - Constructor" width="100%">
<thead>
<tr><th>Constructor</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>MapTypeRegistry()</code></td>
<td>The <code>MapTypeRegistry</code> holds the collection of custom map types available to the map for its use. The API consults this registry when providing the list of avaiable map types within controls, for example.</td>
</tr>
</tbody>
</table><h3>Methods</h3><table summary="class MapTypeRegistry - Methods" width="100%">
<thead>
<tr><th>Methods</th>
<th>Return Value</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>set(id:string, mapType:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.MapType.md"><em>MapType</em></a>)</code></td>
<td><code>None</code></td>
<td>Sets the registry to associate the passed string identifier with the passed MapType.</td>
</tr>
</tbody>
</table>