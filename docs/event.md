<h2 id="event"> event namespace </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">event</span></code>
namespace
</p><div class="devsite-table-wrapper"><table class="methods responsive" summary="namespace event - Static Methods">
<thead>
<tr><th colspan="2">Static Methods</th>
</tr></thead>
<tbody>
<tr id="event.addDomListener">
<td><code><span>addDomListener</span></code></td>
<td><div><code>addDomListener(instance, eventName, handler[, capture])</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>instance</code>:&nbsp; <code>Object</code></li>
<li><code>eventName</code>:&nbsp; <code>string</code></li>
<li><code>handler</code>:&nbsp; <code>Function</code></li>
<li><code>capture</code> (optional):&nbsp; <code>boolean</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MapsEventListener.md">MapsEventListener</a></code></div>
<div class="desc">Cross browser event handler registration. This listener is removed by calling removeListener(handle) for the handle that is returned by this function.</div></td>
</tr>
<tr id="event.addDomListenerOnce">
<td><code><span>addDomListenerOnce</span></code></td>
<td><div><code>addDomListenerOnce(instance, eventName, handler[, capture])</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>instance</code>:&nbsp; <code>Object</code></li>
<li><code>eventName</code>:&nbsp; <code>string</code></li>
<li><code>handler</code>:&nbsp; <code>Function</code></li>
<li><code>capture</code> (optional):&nbsp; <code>boolean</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MapsEventListener.md">MapsEventListener</a></code></div>
<div class="desc">Wrapper around addDomListener that removes the listener after the first event.</div></td>
</tr>
<tr id="event.addListener">
<td><code><span>addListener</span></code></td>
<td><div><code>addListener(instance, eventName, handler)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>instance</code>:&nbsp; <code>Object</code></li>
<li><code>eventName</code>:&nbsp; <code>string</code></li>
<li><code>handler</code>:&nbsp; <code>Function</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MapsEventListener.md">MapsEventListener</a></code></div>
<div class="desc">Adds the given listener function to the given event name for the given object instance. Returns an identifier for this listener that can be used with removeListener().</div></td>
</tr>
<tr id="event.addListenerOnce">
<td><code><span>addListenerOnce</span></code></td>
<td><div><code>addListenerOnce(instance, eventName, handler)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>instance</code>:&nbsp; <code>Object</code></li>
<li><code>eventName</code>:&nbsp; <code>string</code></li>
<li><code>handler</code>:&nbsp; <code>Function</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MapsEventListener.md">MapsEventListener</a></code></div>
<div class="desc">Like addListener, but the handler removes itself after handling the first event.</div></td>
</tr>
<tr id="event.clearInstanceListeners">
<td><code><span>clearInstanceListeners</span></code></td>
<td><div><code>clearInstanceListeners(instance)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>instance</code>:&nbsp; <code>Object</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Removes all listeners for all events for the given instance.</div></td>
</tr>
<tr id="event.clearListeners">
<td><code><span>clearListeners</span></code></td>
<td><div><code>clearListeners(instance, eventName)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>instance</code>:&nbsp; <code>Object</code></li>
<li><code>eventName</code>:&nbsp; <code>string</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Removes all listeners for the given event for the given instance.</div></td>
</tr>
<tr id="event.removeListener">
<td><code><span>removeListener</span></code></td>
<td><div><code>removeListener(listener)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>listener</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MapsEventListener.md">MapsEventListener</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Removes the given listener, which should have been returned by addListener above. Equivalent to calling <code>listener.remove()</code>.</div></td>
</tr>
<tr id="event.trigger">
<td><code><span>trigger</span></code></td>
<td><div><code>trigger(instance, eventName, var_args)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>instance</code>:&nbsp; <code>Object</code></li>
<li><code>eventName</code>:&nbsp; <code>string</code></li>
<li><code>var_args</code>:&nbsp; <code>...*</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Triggers the given event. All arguments after eventName are passed as arguments to the listeners.</div></td>
</tr>
</tbody>
</table></div>