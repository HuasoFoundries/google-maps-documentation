<h2 id="MVCObject">
MVCObject
class
</h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">MVCObject</span></code>
class
</p><p>Base class implementing KVO. <br><br>The <code>MVCObject</code> constructor is guaranteed to be an empty function, and so you may inherit from <code>MVCObject</code> by simply writing <code>MySubclass.prototype = new google.maps.MVCObject();</code>. Unless otherwise noted, this is not true of other classes in the API, and inheriting from other classes in the API is not supported.</p><table class="constructors responsive" summary="class MVCObject - Constructor">
<thead>
<tr><th colspan="2">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code>MVCObject()</code></td>
<td>Creates an <code>MVCObject</code>.</td>
</tr>
</tbody>
</table><table class="methods responsive" summary="class MVCObject - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr>
<td><code>addListener(eventName:string, handler:Function)</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MapsEventListener.md">MapsEventListener</a></code></div>
<div class="desc">Adds the given listener function to the given event name. Returns an identifier for this listener that can be used with <code>google.maps.event.removeListener</code>.</div></td>
</tr>
<tr>
<td><code>bindTo(key:string, target:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MVCObject.md">MVCObject</a>, targetKey?:string, noNotify?:boolean)</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Binds a View to a Model.</div></td>
</tr>
<tr>
<td><code>changed(key:string)</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Generic handler for state changes. Override this in derived classes to handle arbitrary state changes.</div></td>
</tr>
<tr>
<td><code>get(key:string)</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>*</code></div>
<div class="desc">Gets a value.</div></td>
</tr>
<tr>
<td><code>notify(key:string)</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Notify all observers of a change on this property. This notifies both objects that are bound to the object's property as well as the object that it is bound to.</div></td>
</tr>
<tr>
<td><code>set(key:string, value:*)</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Sets a value.</div></td>
</tr>
<tr>
<td><code>setValues(values:Object|undefined)</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Sets a collection of key-value pairs.</div></td>
</tr>
<tr>
<td><code>unbind(key:string)</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Removes a binding. Unbinding will set the unbound property to the current value. The object will not be notified, as the value has not changed.</div></td>
</tr>
<tr>
<td><code>unbindAll()</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Removes all bindings.</div></td>
</tr>
</tbody>
</table>