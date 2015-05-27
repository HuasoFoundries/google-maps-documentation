<h2 id="Data.SetPropertyEvent">
google.maps.Data.SetPropertyEvent
object specification
</h2><p>The properties of a <code>setproperty</code> event.</p><h3>Properties</h3><table summary="interface Data.SetPropertyEvent - Properties" width="100%">
<thead>
<tr><th>Properties</th>
<th>Type</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>feature</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Data.Feature.md">Data.Feature</a></code></td>
<td>The feature whose property was set.</td>
</tr>
<tr>
<td><code>name</code></td>
<td><code>string</code></td>
<td>The property name.</td>
</tr>
<tr>
<td><code>newValue</code></td>
<td><code>*</code></td>
<td>The new value.</td>
</tr>
<tr>
<td><code>oldValue</code></td>
<td><code>*</code></td>
<td>The previous value. Will be <code>undefined</code> if the property was added.</td>
</tr>
</tbody>
</table>