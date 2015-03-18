<h2 id="WeatherLayer">
google.maps.weather.WeatherLayer
class
</h2><p>A layer that displays weather icons.</p><p>This class extends
<code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.MVCObject.md">MVCObject</a></code>.
</p><h3>Library</h3><p>weather</p><h3>Constructor</h3><table summary="class WeatherLayer - Constructor" width="100%">
<thead>
<tr><th>Constructor</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>WeatherLayer(opts?:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.weather.WeatherLayerOptions.md"><em>WeatherLayerOptions</em></a>)</code></td>
<td>Creates a new <code>WeatherLayer</code> instance that displays weather icons.</td>
</tr>
</tbody>
</table><h3>Methods</h3><table summary="class WeatherLayer - Methods" width="100%">
<thead>
<tr><th>Methods</th>
<th>Return Value</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>getMap()</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Map.md">Map</a></code></td>
<td>Returns the map on which this layer is displayed.</td>
</tr>
<tr>
<td><code>setMap(map:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Map.md">Map</a>)</code></td>
<td><code>None</code></td>
<td>Renders the layer on the specified map. If map is set to null, the layer will be removed.</td>
</tr>
<tr>
<td><code>setOptions(options:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.weather.WeatherLayerOptions.md"><em>WeatherLayerOptions</em></a>)</code></td>
<td><code>None</code></td>
<td>Sets the <code>WeatherLayer</code>'s options.</td>
</tr>
</tbody>
</table><h3>Events</h3><table summary="class WeatherLayer - Events" width="100%">
<thead>
<tr><th>Events</th>
<th>Arguments</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>click</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.weather.WeatherMouseEvent.md"><em>WeatherMouseEvent</em></a></code></td>
<td>This event is fired when a feature in the weather layer is clicked.</td>
</tr>
</tbody>
</table>