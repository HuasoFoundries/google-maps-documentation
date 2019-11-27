
<devsite-heading text=" event namespace" for="event" level="h2" link="" toc="" back-to-top=""><h2 id="event" is-upgraded="">event namespace </h2></devsite-heading>
<p>
<code translate="no" dir="ltr"><span itemprop="path">google.maps</span>.<span itemprop="name">event</span></code>
namespace
</p>
<div class="devsite-table-wrapper"><table class="methods responsive" summary="namespace event - Static Methods">
<thead>
<tr><th colspan="2">Static Methods</th>
</tr></thead>
<tbody>
<tr id="event.addDomListener">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#event.addDomListener"><span>addDomListener</span></a></code></td>
<td><div><code translate="no" dir="ltr">addDomListener(instance, eventName, handler[, capture])</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">instance</code>:&nbsp; <code translate="no" dir="ltr">Object</code></li>
<li><code translate="no" dir="ltr">eventName</code>:&nbsp; <code translate="no" dir="ltr">string</code></li>
<li><code translate="no" dir="ltr">handler</code>:&nbsp; <code translate="no" dir="ltr">Function</code></li>
<li><code translate="no" dir="ltr">capture</code>:&nbsp; <code translate="no" dir="ltr">boolean <span class="optional-type-annotation">optional</span></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr"><a href="MapsEventListener.md">MapsEventListener</a></code></div>
<div class="desc">Cross browser event handler registration. This listener is removed by calling removeListener(handle) for the handle that is returned by this function.</div></td>
</tr>
<tr id="event.addDomListenerOnce">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#event.addDomListenerOnce"><span>addDomListenerOnce</span></a></code></td>
<td><div><code translate="no" dir="ltr">addDomListenerOnce(instance, eventName, handler[, capture])</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">instance</code>:&nbsp; <code translate="no" dir="ltr">Object</code></li>
<li><code translate="no" dir="ltr">eventName</code>:&nbsp; <code translate="no" dir="ltr">string</code></li>
<li><code translate="no" dir="ltr">handler</code>:&nbsp; <code translate="no" dir="ltr">Function</code></li>
<li><code translate="no" dir="ltr">capture</code>:&nbsp; <code translate="no" dir="ltr">boolean <span class="optional-type-annotation">optional</span></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr"><a href="MapsEventListener.md">MapsEventListener</a></code></div>
<div class="desc">Wrapper around addDomListener that removes the listener after the first event.</div></td>
</tr>
<tr id="event.addListener">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#event.addListener"><span>addListener</span></a></code></td>
<td><div><code translate="no" dir="ltr">addListener(instance, eventName, handler)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">instance</code>:&nbsp; <code translate="no" dir="ltr">Object</code></li>
<li><code translate="no" dir="ltr">eventName</code>:&nbsp; <code translate="no" dir="ltr">string</code></li>
<li><code translate="no" dir="ltr">handler</code>:&nbsp; <code translate="no" dir="ltr">Function</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr"><a href="MapsEventListener.md">MapsEventListener</a></code></div>
<div class="desc">Adds the given listener function to the given event name for the given object instance. Returns an identifier for this listener that can be used with removeListener().</div></td>
</tr>
<tr id="event.addListenerOnce">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#event.addListenerOnce"><span>addListenerOnce</span></a></code></td>
<td><div><code translate="no" dir="ltr">addListenerOnce(instance, eventName, handler)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">instance</code>:&nbsp; <code translate="no" dir="ltr">Object</code></li>
<li><code translate="no" dir="ltr">eventName</code>:&nbsp; <code translate="no" dir="ltr">string</code></li>
<li><code translate="no" dir="ltr">handler</code>:&nbsp; <code translate="no" dir="ltr">Function</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr"><a href="MapsEventListener.md">MapsEventListener</a></code></div>
<div class="desc">Like addListener, but the handler removes itself after handling the first event.</div></td>
</tr>
<tr id="event.clearInstanceListeners">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#event.clearInstanceListeners"><span>clearInstanceListeners</span></a></code></td>
<td><div><code translate="no" dir="ltr">clearInstanceListeners(instance)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">instance</code>:&nbsp; <code translate="no" dir="ltr">Object</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Removes all listeners for all events for the given instance.</div></td>
</tr>
<tr id="event.clearListeners">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#event.clearListeners"><span>clearListeners</span></a></code></td>
<td><div><code translate="no" dir="ltr">clearListeners(instance, eventName)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">instance</code>:&nbsp; <code translate="no" dir="ltr">Object</code></li>
<li><code translate="no" dir="ltr">eventName</code>:&nbsp; <code translate="no" dir="ltr">string</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Removes all listeners for the given event for the given instance.</div></td>
</tr>
<tr id="event.removeListener">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#event.removeListener"><span>removeListener</span></a></code></td>
<td><div><code translate="no" dir="ltr">removeListener(listener)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">listener</code>:&nbsp; <code translate="no" dir="ltr"><a href="MapsEventListener.md">MapsEventListener</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Removes the given listener, which should have been returned by addListener above. Equivalent to calling <code translate="no" dir="ltr">listener.remove()</code>.</div></td>
</tr>
<tr id="event.trigger">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#event.trigger"><span>trigger</span></a></code></td>
<td><div><code translate="no" dir="ltr">trigger(instance, eventName, eventArgs)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">instance</code>:&nbsp; <code translate="no" dir="ltr">Object</code></li>
<li><code translate="no" dir="ltr">eventName</code>:&nbsp; <code translate="no" dir="ltr">string</code></li>
<li><code translate="no" dir="ltr">eventArgs</code>:&nbsp; <code translate="no" dir="ltr">...*</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Triggers the given event. All arguments after eventName are passed as arguments to the listeners.</div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
