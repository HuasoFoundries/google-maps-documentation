<h2 id="AdUnitOptions">
google.maps.adsense.AdUnitOptions
object specification
</h2><h3>Library</h3><p>adsense</p><h3>Properties</h3><table summary="interface AdUnitOptions - Properties" width="100%">
<thead>
<tr><th>Properties</th>
<th>Type</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>backgroundColor</code></td>
<td><code>string</code></td>
<td>The <code>AdUnit</code>'s background color. (Optional)</td>
</tr>
<tr>
<td><code>borderColor</code></td>
<td><code>string</code></td>
<td>The <code>AdUnit</code>'s border color. (Optional)</td>
</tr>
<tr>
<td><code>channelNumber</code></td>
<td><code>string</code></td>
<td>The AdSense For Content channel number for tracking the performance of this <code>AdUnit</code>. It must be stored as a string as it will typically be a large UINT64. (Optional)</td>
</tr>
<tr>
<td><code>format</code></td>
<td><code><a href="#AdFormat">AdFormat</a></code></td>
<td>the Format of the <code>AdUnit</code>. See <a href="https://google.com/adsense/adformats">https://google.com/adsense/adformats</a>. (Optional)</td>
</tr>
<tr>
<td><code>map</code></td>
<td><code><a href="#Map">Map</a></code></td>
<td>The map associated with this <code>AdUnit</code>. Ads will be targeted to the location the map's viewport. (Required)</td>
</tr>
<tr>
<td><code>position</code></td>
<td><code><a href="#ControlPosition">ControlPosition</a></code></td>
<td>The position of the <code>AdUnit</code>. If specified, the <code>AdUnit</code> will be displayed at this position. Otherwise, it will not be added to the map. (Optional)</td>
</tr>
<tr>
<td><code>publisherId</code></td>
<td><code>string</code></td>
<td>Your AdSense for Content publisher ID. Required and must be set at the time of initialization. (Required)</td>
</tr>
<tr>
<td><code>textColor</code></td>
<td><code>string</code></td>
<td>The <code>AdUnit</code>'s text color. (Optional)</td>
</tr>
<tr>
<td><code>titleColor</code></td>
<td><code>string</code></td>
<td>The <code>AdUnit</code>'s title color. (Optional)</td>
</tr>
<tr>
<td><code>urlColor</code></td>
<td><code>string</code></td>
<td>The <code>AdUnit</code>'s URL color. (Optional)</td>
</tr>
</tbody>
</table>