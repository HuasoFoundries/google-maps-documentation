<h2 id="WeatherFeature"> WeatherFeature object specification </h2><p>
<code><span itemprop="path">google.maps.weather</span>.<span itemprop="name">WeatherFeature</span></code>
object specification
</p><p>Describes a single Weather feature.</p><h4>Library</h4><p>weather</p><div class="devsite-table-wrapper"><table class="properties responsive" summary="interface WeatherFeature - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>current</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/WeatherConditions.md">WeatherConditions</a></code></div>
<div class="desc">The current weather conditions at this location.</div></td>
</tr>
<tr>
<td><code><span>forecast</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/WeatherForecast.md">WeatherForecast</a>&gt;</code></div>
<div class="desc">A forecast of weather conditions over the next four days. The forecast array is always in chronological order.</div></td>
</tr>
<tr>
<td><code><span>location</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">The location name of this feature, e.g. "San Francisco, California".</div></td>
</tr>
<tr>
<td><code><span>temperatureUnit</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/TemperatureUnit.md">TemperatureUnit</a></code></div>
<div class="desc">The temperature units being used.</div></td>
</tr>
<tr>
<td><code><span>windSpeedUnit</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/WindSpeedUnit.md">WindSpeedUnit</a></code></div>
<div class="desc">The wind speed units being used.</div></td>
</tr>
</tbody>
</table></div>