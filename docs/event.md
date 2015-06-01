<h2 id="event"> event namespace </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">event</span></code>
namespace
</p><div class="devsite-table-wrapper"><table class="methods responsive" summary="namespace event - Static Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>addDomListener(<wbr>instance:Object,<wbr> eventName:string,<wbr> handler:function(<wbr>?),<wbr> capture?:boolean)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MapsEventListener.md">MapsEventListener</a></code></div>
<div class="desc">Cross browser event handler registration. This listener is removed by calling removeListener(handle) for the handle that is returned by this function.</div></td>
</tr>
<tr>
<td><code><span>addDomListenerOnce(<wbr>instance:Object,<wbr> eventName:string,<wbr> handler:function(<wbr>?),<wbr> capture?:boolean)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MapsEventListener.md">MapsEventListener</a></code></div>
<div class="desc">Wrapper around addDomListener that removes the listener after the first event.</div></td>
</tr>
<tr>
<td><code><span>addListener(<wbr>instance:Object,<wbr> eventName:string,<wbr> handler:function(<wbr>?))</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MapsEventListener.md">MapsEventListener</a></code></div>
<div class="desc">Adds the given listener function to the given event name for the given object instance. Returns an identifier for this listener that can be used with removeListener().</div></td>
</tr>
<tr>
<td><code><span>addListenerOnce(<wbr>instance:Object,<wbr> eventName:string,<wbr> handler:function(<wbr>?))</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MapsEventListener.md">MapsEventListener</a></code></div>
<div class="desc">Like addListener, but the handler removes itself after handling the first event.</div></td>
</tr>
<tr>
<td><code><span>clearInstanceListeners(<wbr>instance:Object)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Removes all listeners for all events for the given instance.</div></td>
</tr>
<tr>
<td><code><span>clearListeners(<wbr>instance:Object,<wbr> eventName:string)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Removes all listeners for the given event for the given instance.</div></td>
</tr>
<tr>
<td><code><span>removeListener(<wbr>listener:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MapsEventListener.md"><em><span>MapsEventListener</span></em></a><span>)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Removes the given listener, which should have been returned by addListener above.</div></td>
</tr>
<tr>
<td><code><span>trigger(<wbr>instance:Object,<wbr> eventName:string,<wbr> var_args:*)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Triggers the given event. All arguments after eventName are passed as arguments to the listeners.</div></td>
</tr>
</tbody>
</table></div>