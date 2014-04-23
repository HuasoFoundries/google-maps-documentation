<h2 id="WeatherLayerOptions">
google.maps.weather.WeatherLayerOptions
object specification
</h2><p>This object defines the properties that can be set on a <code>WeatherLayer</code> object.</p><h3>Library</h3><p>weather</p><h3>Properties</h3><table summary="interface WeatherLayerOptions - Properties" width="100%">
<thead>
<tr><th>Properties</th>
<th>Type</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>clickable</code></td>
<td><code>boolean</code></td>
<td>If true, the layer receives mouse events. Default value is true.</td>
</tr>
<tr>
<td><code>labelColor</code></td>
<td><code><a href="#LabelColor">LabelColor</a></code></td>
<td>The color of labels on the weather layer. If this is not explicitly set, the label color is chosen automatically depending on the map type.</td>
</tr>
<tr>
<td><code>map</code></td>
<td><code><a href="#Map">Map</a></code></td>
<td>The map on which to display the layer.</td>
</tr>
<tr>
<td><code>suppressInfoWindows</code></td>
<td><code>boolean</code></td>
<td>Suppress the rendering of info windows when weather icons are clicked.</td>
</tr>
<tr>
<td><code>temperatureUnits</code></td>
<td><code><a href="#TemperatureUnit">TemperatureUnit</a></code></td>
<td>The units to use for temperature.</td>
</tr>
<tr>
<td><code>windSpeedUnits</code></td>
<td><code><a href="#WindSpeedUnit">WindSpeedUnit</a></code></td>
<td>The units to use for wind speed.</td>
</tr>
</tbody>
</table>