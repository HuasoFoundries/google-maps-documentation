<h2 id="DirectionsResult">
google.maps.DirectionsResult
object specification
</h2><p>The directions response retrieved from the directions server. You can render these using a <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.DirectionsRenderer.md">DirectionsRenderer</a></code> or parse this object and render it yourself. You must display the warnings and copyrights as noted in the <a href="/maps/terms">Maps API terms of service</a>. Note that though this result is "JSON-like," it is not strictly JSON, as it indirectly includes <code>LatLng</code> objects.</p><h3>Properties</h3><table summary="interface DirectionsResult - Properties" width="100%">
<thead>
<tr><th>Properties</th>
<th>Type</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>routes</code></td>
<td><code>Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.DirectionsRoute.md">DirectionsRoute</a>&gt;</code></td>
<td>An array of <code>DirectionsRoute</code>s, each of which contains information about the legs and steps of which it is composed. There will only be one route unless the <code>DirectionsRequest</code> was made with <code>provideRouteAlternatives</code> set to <code>true</code>.</td>
</tr>
</tbody>
</table>