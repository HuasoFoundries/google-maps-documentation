<h2 id="Data.SetPropertyEvent"> Data.SetPropertyEvent interface </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">Data.SetPropertyEvent</span></code>
interface
</p><p>The properties of a <code>setproperty</code> event.</p><div class="devsite-table-wrapper"><table class="properties responsive" summary="interface Data.SetPropertyEvent - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="Data.SetPropertyEvent.feature">
<td><code><span>feature</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Data.Feature.md">Data.Feature</a></code></div>
<div class="desc">The feature whose property was set.</div></td>
</tr>
<tr id="Data.SetPropertyEvent.name">
<td><code><span>name</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">The property name.</div></td>
</tr>
<tr id="Data.SetPropertyEvent.newValue">
<td><code><span>newValue</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>*</code></div>
<div class="desc">The new value.</div></td>
</tr>
<tr id="Data.SetPropertyEvent.oldValue">
<td><code><span>oldValue</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>*</code></div>
<div class="desc">The previous value. Will be <code>undefined</code> if the property was added.</div></td>
</tr>
</tbody>
</table></div>