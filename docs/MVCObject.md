
<devsite-heading text=" MVCObject class" for="MVCObject" level="h2" link="" toc="" back-to-top=""><h2 id="MVCObject" is-upgraded="">MVCObject class </h2></devsite-heading>
<p>
<code translate="no" dir="ltr"><span itemprop="path">google.maps</span>.<span itemprop="name">MVCObject</span></code>
class
</p>
<p>Base class implementing KVO. <br><br>The <code translate="no" dir="ltr">MVCObject</code> constructor is guaranteed to be an empty function, and so you may inherit from <code translate="no" dir="ltr">MVCObject</code> by simply writing <code translate="no" dir="ltr">MySubclass.prototype = new google.maps.MVCObject();</code>. Unless otherwise noted, this is not true of other classes in the API, and inheriting from other classes in the API is not supported.</p>
<div class="devsite-table-wrapper"><table class="constructors responsive" summary="class MVCObject - Constructor">
<thead>
<tr><th colspan="2" id="MVCObject.constructor">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code translate="no" dir="ltr"><a class="secret-link" href="#MVCObject.constructor"><span>MVCObject</span></a></code></td>
<td><div><code translate="no" dir="ltr">MVCObject()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc">Creates an <code translate="no" dir="ltr">MVCObject</code>.</div></td>
</tr>
</tbody>
</table></div>
<div class="devsite-table-wrapper"><table class="methods responsive" summary="class MVCObject - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr id="MVCObject.addListener">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#MVCObject.addListener"><span>addListener</span></a></code></td>
<td><div><code translate="no" dir="ltr">addListener(eventName, handler)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">eventName</code>:&nbsp; <code translate="no" dir="ltr">string</code></li>
<li><code translate="no" dir="ltr">handler</code>:&nbsp; <code translate="no" dir="ltr">Function</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr"><a href="MapsEventListener.md">MapsEventListener</a></code></div>
<div class="desc">Adds the given listener function to the given event name. Returns an identifier for this listener that can be used with <code translate="no" dir="ltr">google.maps.event.removeListener</code>.</div></td>
</tr>
<tr id="MVCObject.bindTo">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#MVCObject.bindTo"><span>bindTo</span></a></code></td>
<td><div><code translate="no" dir="ltr">bindTo(key, target[, targetKey, noNotify])</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">key</code>:&nbsp; <code translate="no" dir="ltr">string</code></li>
<li><code translate="no" dir="ltr">target</code>:&nbsp; <code translate="no" dir="ltr"><a href="MVCObject.md">MVCObject</a></code></li>
<li><code translate="no" dir="ltr">targetKey</code>:&nbsp; <code translate="no" dir="ltr">string <span class="optional-type-annotation">optional</span></code></li>
<li><code translate="no" dir="ltr">noNotify</code>:&nbsp; <code translate="no" dir="ltr">boolean <span class="optional-type-annotation">optional</span></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Binds a View to a Model.</div></td>
</tr>
<tr id="MVCObject.get">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#MVCObject.get"><span>get</span></a></code></td>
<td><div><code translate="no" dir="ltr">get(key)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">key</code>:&nbsp; <code translate="no" dir="ltr">string</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr">?</code></div>
<div class="desc">Gets a value.</div></td>
</tr>
<tr id="MVCObject.notify">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#MVCObject.notify"><span>notify</span></a></code></td>
<td><div><code translate="no" dir="ltr">notify(key)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">key</code>:&nbsp; <code translate="no" dir="ltr">string</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Notify all observers of a change on this property. This notifies both objects that are bound to the object's property as well as the object that it is bound to.</div></td>
</tr>
<tr id="MVCObject.set">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#MVCObject.set"><span>set</span></a></code></td>
<td><div><code translate="no" dir="ltr">set(key, value)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">key</code>:&nbsp; <code translate="no" dir="ltr">string</code></li>
<li><code translate="no" dir="ltr">value</code>:&nbsp; <code translate="no" dir="ltr">*</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Sets a value.</div></td>
</tr>
<tr id="MVCObject.setValues">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#MVCObject.setValues"><span>setValues</span></a></code></td>
<td><div><code translate="no" dir="ltr">setValues([values])</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">values</code>:&nbsp; <code translate="no" dir="ltr">Object <span class="optional-type-annotation">optional</span></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Sets a collection of key-value pairs.</div></td>
</tr>
<tr id="MVCObject.unbind">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#MVCObject.unbind"><span>unbind</span></a></code></td>
<td><div><code translate="no" dir="ltr">unbind(key)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">key</code>:&nbsp; <code translate="no" dir="ltr">string</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Removes a binding. Unbinding will set the unbound property to the current value. The object will not be notified, as the value has not changed.</div></td>
</tr>
<tr id="MVCObject.unbindAll">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#MVCObject.unbindAll"><span>unbindAll</span></a></code></td>
<td><div><code translate="no" dir="ltr">unbindAll()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Removes all bindings.</div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
