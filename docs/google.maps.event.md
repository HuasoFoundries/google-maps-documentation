<h2 id="event">
google.maps.event
namespace
</h2><h3>Static Methods</h3><table summary="namespace event - Static Methods" width="100%">
<thead>
<tr><th>Methods</th>
<th>Return Value</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>addDomListener(instance:Object, eventName:string, handler:Function, capture?:boolean)</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.MapsEventListener.md">MapsEventListener</a></code></td>
<td>Cross browser event handler registration. This listener is removed by calling removeListener(handle) for the handle that is returned by this function.</td>
</tr>
<tr>
<td><code>addDomListenerOnce(instance:Object, eventName:string, handler:Function, capture?:boolean)</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.MapsEventListener.md">MapsEventListener</a></code></td>
<td>Wrapper around addDomListener that removes the listener after the first event.</td>
</tr>
<tr>
<td><code>addListener(instance:Object, eventName:string, handler:Function)</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.MapsEventListener.md">MapsEventListener</a></code></td>
<td>Adds the given listener function to the given event name for the given object instance. Returns an identifier for this listener that can be used with removeListener().</td>
</tr>
<tr>
<td><code>addListenerOnce(instance:Object, eventName:string, handler:Function)</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.MapsEventListener.md">MapsEventListener</a></code></td>
<td>Like addListener, but the handler removes itself after handling the first event.</td>
</tr>
<tr>
<td><code>clearInstanceListeners(instance:Object)</code></td>
<td><code>None</code></td>
<td>Removes all listeners for all events for the given instance.</td>
</tr>
<tr>
<td><code>clearListeners(instance:Object, eventName:string)</code></td>
<td><code>None</code></td>
<td>Removes all listeners for the given event for the given instance.</td>
</tr>
<tr>
<td><code>removeListener(listener:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.MapsEventListener.md"><em>MapsEventListener</em></a>)</code></td>
<td><code>None</code></td>
<td>Removes the given listener, which should have been returned by addListener above.</td>
</tr>
<tr>
<td><code>trigger(instance:Object, eventName:string, var_args:*)</code></td>
<td><code>None</code></td>
<td>Triggers the given event. All arguments after eventName are passed as arguments to the listeners.</td>
</tr>
</tbody>
</table>