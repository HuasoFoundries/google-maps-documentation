<h2 id="WeatherFeature">
google.maps.weather.WeatherFeature
object specification
</h2><p>Describes a single Weather feature.</p><h3>Library</h3><p>weather</p><h3>Properties</h3><table summary="interface WeatherFeature - Properties" width="100%">
<thead>
<tr><th>Properties</th>
<th>Type</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>current</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.weather.WeatherConditions.md">WeatherConditions</a></code></td>
<td>The current weather conditions at this location.</td>
</tr>
<tr>
<td><code>forecast</code></td>
<td><code>Array.&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.weather.WeatherForecast.md">WeatherForecast</a>&gt;</code></td>
<td>A forecast of weather conditions over the next four days. The forecast array is always in chronological order.</td>
</tr>
<tr>
<td><code>location</code></td>
<td><code>string</code></td>
<td>The location name of this feature, e.g. "San Francisco, California".</td>
</tr>
<tr>
<td><code>temperatureUnit</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.weather.TemperatureUnit.md">TemperatureUnit</a></code></td>
<td>The temperature units being used.</td>
</tr>
<tr>
<td><code>windSpeedUnit</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.weather.WindSpeedUnit.md">WindSpeedUnit</a></code></td>
<td>The wind speed units being used.</td>
</tr>
</tbody>
</table>