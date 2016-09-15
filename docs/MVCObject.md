<h2 id="MVCObject"> MVCObject class </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">MVCObject</span></code>
class
</p><p>Base class implementing KVO. <br><br>The <code>MVCObject</code> constructor is guaranteed to be an empty function, and so you may inherit from <code>MVCObject</code> by simply writing <code>MySubclass.prototype = new google.maps.MVCObject();</code>. Unless otherwise noted, this is not true of other classes in the API, and inheriting from other classes in the API is not supported.</p><div class="devsite-table-wrapper"><table class="constructors responsive" summary="class MVCObject - Constructor">
<thead>
<tr><th colspan="2">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>MVCObject()</span></code></td>
<td>Creates an <code><span>MVCObject</span></code>.</td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="methods responsive" summary="class MVCObject - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>addListener(<wbr>eventName:string,<wbr> handler:Function)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MapsEventListener.md">MapsEventListener</a></code></div>
<div class="desc">Adds the given listener function to the given event name. Returns an identifier for this listener that can be used with <code>google.maps.event.removeListener</code>.</div></td>
</tr>
<tr>
<td><code><span>bindTo(<wbr>key:string,<wbr> target:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MVCObject.md"><span>MVCObject</span></a><span>,<wbr> targetKey?:string,<wbr> noNotify?:boolean)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Binds a View to a Model.</div></td>
</tr>
<tr>
<td><code><span>get(<wbr>key:string)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>*</code></div>
<div class="desc">Gets a value.</div></td>
</tr>
<tr>
<td><code><span>notify(<wbr>key:string)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Notify all observers of a change on this property. This notifies both objects that are bound to the object's property as well as the object that it is bound to.</div></td>
</tr>
<tr>
<td><code><span>set(<wbr>key:string,<wbr> value:*)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Sets a value.</div></td>
</tr>
<tr>
<td><code><span>setValues(<wbr>values:Object|<wbr>undefined)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Sets a collection of key-value pairs.</div></td>
</tr>
<tr>
<td><code><span>unbind(<wbr>key:string)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Removes a binding. Unbinding will set the unbound property to the current value. The object will not be notified, as the value has not changed.</div></td>
</tr>
<tr>
<td><code><span>unbindAll()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Removes all bindings.</div></td>
</tr>
</tbody>
</table></div>