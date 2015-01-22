<h2 id="DynamicMapsEngineMouseEvent">
google.maps.visualization.DynamicMapsEngineMouseEvent
object specification
</h2><p>The properties of a mouse event on a <code>DynamicMapsEngineLayer</code>.</p><h3 id="devsite_header_374">Library</h3><p>visualization</p><h3 id="devsite_header_375">Methods</h3><table summary="interface DynamicMapsEngineMouseEvent - Methods" width="100%">
<thead>
<tr><th>Methods</th>
<th>Return Value</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>getDetails(callback:function(<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.visualization.MapsEngineMouseEvent.md">MapsEngineMouseEvent</a>))</code></td>
<td><code>None</code></td>
<td>Takes a callback that will be called with details about the feature that may be used to render an info window.</td>
</tr>
</tbody>
</table><h3 id="devsite_header_376">Properties</h3><table summary="interface DynamicMapsEngineMouseEvent - Properties" width="100%">
<thead>
<tr><th>Properties</th>
<th>Type</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>featureId</code></td>
<td><code>string</code></td>
<td>The feature ID, guaranteed to be unique within the layer.</td>
</tr>
<tr>
<td><code>latLng</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLng.md">LatLng</a></code></td>
<td>The latitude/longitude that was below the cursor when the event occurred.</td>
</tr>
</tbody>
</table>