<h2 id="WeatherMouseEvent">
google.maps.weather.WeatherMouseEvent
object specification
</h2><p>The properties of a mouse event on a <code>WeatherLayer</code>.</p><h3>Library</h3><p>weather</p><h3>Properties</h3><table summary="interface WeatherMouseEvent - Properties" width="100%">
<thead>
<tr><th>Properties</th>
<th>Type</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>featureDetails</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.weather.WeatherFeature.md">WeatherFeature</a></code></td>
<td>A <code>WeatherFeature</code> object containing information about the clicked feature.</td>
</tr>
<tr>
<td><code>infoWindowHtml</code></td>
<td><code>string</code></td>
<td>Pre-rendered HTML content to display within a feature's <code>InfoWindow</code> when clicked.</td>
</tr>
<tr>
<td><code>latLng</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLng.md">LatLng</a></code></td>
<td>The position at which to anchor an info window on the clicked feature.</td>
</tr>
<tr>
<td><code>pixelOffset</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Size.md">Size</a></code></td>
<td>The offset to apply to an info window anchored on the clicked feature.</td>
</tr>
</tbody>
</table>