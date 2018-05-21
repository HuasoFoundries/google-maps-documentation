<h2 id="MVCObject"> MVCObject class </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">MVCObject</span></code>
class
</p><p>Base class implementing KVO. <br><br>The <code>MVCObject</code> constructor is guaranteed to be an empty function, and so you may inherit from <code>MVCObject</code> by simply writing <code>MySubclass.prototype = new google.maps.MVCObject();</code>. Unless otherwise noted, this is not true of other classes in the API, and inheriting from other classes in the API is not supported.</p><div class="devsite-table-wrapper"><table class="constructors responsive" summary="class MVCObject - Constructor">
<thead>
<tr><th colspan="2" id="MVCObject.constructor">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>MVCObject</span></code></td>
<td><div><code>MVCObject()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc">Creates an <code>MVCObject</code>.</div></td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="methods responsive" summary="class MVCObject - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr id="MVCObject.addListener">
<td><code><span>addListener</span></code></td>
<td><div><code>addListener(eventName, handler)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>eventName</code>:&nbsp; <code>string</code></li>
<li><code>handler</code>:&nbsp; <code>Function</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MapsEventListener.md">MapsEventListener</a></code></div>
<div class="desc">Adds the given listener function to the given event name. Returns an identifier for this listener that can be used with <code>google.maps.event.removeListener</code>.</div></td>
</tr>
<tr id="MVCObject.bindTo">
<td><code><span>bindTo</span></code></td>
<td><div><code>bindTo(key, target[, targetKey, noNotify])</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>key</code>:&nbsp; <code>string</code></li>
<li><code>target</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MVCObject.md#user-content-MVCObject">MVCObject</a></code></li>
<li><code>targetKey</code> (optional):&nbsp; <code>string</code></li>
<li><code>noNotify</code> (optional):&nbsp; <code>boolean</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Binds a View to a Model.</div></td>
</tr>
<tr id="MVCObject.get">
<td><code><span>get</span></code></td>
<td><div><code>get(key)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>key</code>:&nbsp; <code>string</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>?</code></div>
<div class="desc">Gets a value.</div></td>
</tr>
<tr id="MVCObject.notify">
<td><code><span>notify</span></code></td>
<td><div><code>notify(key)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>key</code>:&nbsp; <code>string</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Notify all observers of a change on this property. This notifies both objects that are bound to the object's property as well as the object that it is bound to.</div></td>
</tr>
<tr id="MVCObject.set">
<td><code><span>set</span></code></td>
<td><div><code>set(key, value)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>key</code>:&nbsp; <code>string</code></li>
<li><code>value</code>:&nbsp; <code>*</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Sets a value.</div></td>
</tr>
<tr id="MVCObject.setValues">
<td><code><span>setValues</span></code></td>
<td><div><code>setValues([values])</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>values</code> (optional):&nbsp; <code>Object</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Sets a collection of key-value pairs.</div></td>
</tr>
<tr id="MVCObject.unbind">
<td><code><span>unbind</span></code></td>
<td><div><code>unbind(key)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>key</code>:&nbsp; <code>string</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Removes a binding. Unbinding will set the unbound property to the current value. The object will not be notified, as the value has not changed.</div></td>
</tr>
<tr id="MVCObject.unbindAll">
<td><code><span>unbindAll</span></code></td>
<td><div><code>unbindAll()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Removes all bindings.</div></td>
</tr>
</tbody>
</table></div>