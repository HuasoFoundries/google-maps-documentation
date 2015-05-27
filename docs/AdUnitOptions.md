<h2 id="AdUnitOptions">
AdUnitOptions
object specification
</h2><p>
<code><span itemprop="path">google.maps.adsense</span>.<span itemprop="name">AdUnitOptions</span></code>
object specification
</p><h4>Library</h4><p>adsense</p><table class="properties responsive" summary="interface AdUnitOptions - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr>
<td><code>backgroundColor</code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">The <code>AdUnit</code>'s background color. (Optional)</div></td>
</tr>
<tr>
<td><code>borderColor</code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">The <code>AdUnit</code>'s border color. (Optional)</div></td>
</tr>
<tr>
<td><code>channelNumber</code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">The AdSense For Content channel number for tracking the performance of this <code>AdUnit</code>. It must be stored as a string as it will typically be a large UINT64. (Optional)</div></td>
</tr>
<tr>
<td><code>format</code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/AdFormat.md">AdFormat</a></code></div>
<div class="desc">the Format of the <code>AdUnit</code>. See <a href="https://google.com/adsense/adformats">https://google.com/adsense/adformats</a>. (Optional)</div></td>
</tr>
<tr>
<td><code>map</code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Map.md">Map</a></code></div>
<div class="desc">The map associated with this <code>AdUnit</code>. Ads will be targeted to the location the map's viewport. (Required)</div></td>
</tr>
<tr>
<td><code>position</code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/ControlPosition.md">ControlPosition</a></code></div>
<div class="desc">The position of the <code>AdUnit</code>. If specified, the <code>AdUnit</code> will be displayed at this position. Otherwise, it will not be added to the map. (Optional)</div></td>
</tr>
<tr>
<td><code>publisherId</code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">Your AdSense for Content publisher ID. Required and must be set at the time of initialization. (Required)</div></td>
</tr>
<tr>
<td><code>textColor</code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">The <code>AdUnit</code>'s text color. (Optional)</div></td>
</tr>
<tr>
<td><code>titleColor</code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">The <code>AdUnit</code>'s title color. (Optional)</div></td>
</tr>
<tr>
<td><code>urlColor</code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">The <code>AdUnit</code>'s URL color. (Optional)</div></td>
</tr>
</tbody>
</table>