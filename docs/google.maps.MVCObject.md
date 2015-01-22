<h2 id="MVCObject">
google.maps.MVCObject
class
</h2><p>Base class implementing KVO. <br><br>The <code>MVCObject</code> constructor is guaranteed to be an empty function, and so you may inherit from <code>MVCObject</code> by simply writing <code>MySubclass.prototype = new google.maps.MVCObject();</code>. Unless otherwise noted, this is not true of other classes in the API, and inheriting from other classes in the API is not supported.<br><br></p><h3 id="devsite_header_233">Constructor</h3><table summary="class MVCObject - Constructor" width="100%">
<thead>
<tr><th>Constructor</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>MVCObject()</code></td>
<td>Creates an <code>MVCObject</code>.</td>
</tr>
</tbody>
</table><h3 id="devsite_header_234">Methods</h3><table summary="class MVCObject - Methods" width="100%">
<thead>
<tr><th>Methods</th>
<th>Return Value</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>addListener(eventName:string, handler:Function)</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.MapsEventListener.md">MapsEventListener</a></code></td>
<td>Adds the given listener function to the given event name. Returns an identifier for this listener that can be used with <code>google.maps.event.removeListener</code>.</td>
</tr>
<tr>
<td><code>bindTo(key:string, target:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.MVCObject.md">MVCObject</a>, targetKey?:string, noNotify?:boolean)</code></td>
<td><code>None</code></td>
<td>Binds a View to a Model.</td>
</tr>
<tr>
<td><code>changed(key:string)</code></td>
<td><code>None</code></td>
<td>Generic handler for state changes. Override this in derived classes to handle arbitrary state changes.</td>
</tr>
<tr>
<td><code>get(key:string)</code></td>
<td><code>*</code></td>
<td>Gets a value.</td>
</tr>
<tr>
<td><code>notify(key:string)</code></td>
<td><code>None</code></td>
<td>Notify all observers of a change on this property. This notifies both objects that are bound to the object's property as well as the object that it is bound to.</td>
</tr>
<tr>
<td><code>set(key:string, value:*)</code></td>
<td><code>None</code></td>
<td>Sets a value.</td>
</tr>
<tr>
<td><code>setValues(values:Object|undefined)</code></td>
<td><code>None</code></td>
<td>Sets a collection of key-value pairs.</td>
</tr>
<tr>
<td><code>unbind(key:string)</code></td>
<td><code>None</code></td>
<td>Removes a binding. Unbinding will set the unbound property to the current value. The object will not be notified, as the value has not changed.</td>
</tr>
<tr>
<td><code>unbindAll()</code></td>
<td><code>None</code></td>
<td>Removes all bindings.</td>
</tr>
</tbody>
</table>