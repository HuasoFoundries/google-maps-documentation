<h2 id="AdUnit">
AdUnit
class
</h2><p>
<code><span itemprop="path">google.maps.adsense</span>.<span itemprop="name">AdUnit</span></code>
class
</p><p>Implements AdSense for Content advertising on an associated map. To use an <code>AdUnit</code>, you must obtain and specify an AdSense for Content publisher ID within the <code>AdUnit</code>'s constructor options.</p><p>This class extends
<code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MVCObject.md">MVCObject</a></code>.
</p><h4>Library</h4><p>adsense</p><table class="constructors responsive" summary="class AdUnit - Constructor">
<thead>
<tr><th colspan="2">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code>AdUnit(container:Node, opts:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/AdUnitOptions.md"><em>AdUnitOptions</em></a>)</code></td>
<td>Creates an AdSense for Content display ad on the associated map.</td>
</tr>
</tbody>
</table><table class="methods responsive" summary="class AdUnit - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr>
<td><code>getBackgroundColor()</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>string</code></div>
<div class="desc">Returns the <code>AdUnit</code>'s background color.</div></td>
</tr>
<tr>
<td><code>getBorderColor()</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>string</code></div>
<div class="desc">Returns the <code>AdUnit</code>'s border color.</div></td>
</tr>
<tr>
<td><code>getChannelNumber()</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>string</code></div>
<div class="desc">Returns the channel number in use by this <code>AdUnit</code>.</div></td>
</tr>
<tr>
<td><code>getContainer()</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>Node</code></div>
<div class="desc">Returns the containing element of the AdUnit.</div></td>
</tr>
<tr>
<td><code>getFormat()</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/AdFormat.md">AdFormat</a></code></div>
<div class="desc">Returns the format in use by this <code>AdUnit</code>.</div></td>
</tr>
<tr>
<td><code>getMap()</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Map.md">Map</a></code></div>
<div class="desc">Returns the map to which this <code>AdUnit</code>'s ads are targeted.</div></td>
</tr>
<tr>
<td><code>getPosition()</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/ControlPosition.md">ControlPosition</a></code></div>
<div class="desc">Returns the <code>ControlPosition</code> at which this <code>AdUnit</code> is displayed on the map.</div></td>
</tr>
<tr>
<td><code>getPublisherId()</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>string</code></div>
<div class="desc">Returns the specified AdSense For Content publisher ID.</div></td>
</tr>
<tr>
<td><code>getTextColor()</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>string</code></div>
<div class="desc">Returns the <code>AdUnit</code>'s text color.</div></td>
</tr>
<tr>
<td><code>getTitleColor()</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>string</code></div>
<div class="desc">Returns the <code>AdUnit</code>'s title color.</div></td>
</tr>
<tr>
<td><code>getUrlColor()</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>string</code></div>
<div class="desc">Returns the <code>AdUnit</code>'s URL color.</div></td>
</tr>
<tr>
<td><code>setBackgroundColor(backgroundColor:string)</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Sets the <code>AdUnit</code>'s background color.</div></td>
</tr>
<tr>
<td><code>setBorderColor(borderColor:string)</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Sets the <code>AdUnit</code>'s border color.</div></td>
</tr>
<tr>
<td><code>setChannelNumber(channelNumber:string)</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Specifies the channel number for this <code>AdUnit</code>. Channel numbers are optional and can be created for Google AdSense tracking.</div></td>
</tr>
<tr>
<td><code>setFormat(format:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/AdFormat.md">AdFormat</a>)</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Specifies the display format for this <code>AdUnit</code>.</div></td>
</tr>
<tr>
<td><code>setMap(map:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Map.md">Map</a>)</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Associates this <code>AdUnit</code> with the specified map. Ads will be targeted to the map's viewport. The map must be specified in order to display ads.</div></td>
</tr>
<tr>
<td><code>setPosition(position:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/ControlPosition.md">ControlPosition</a>)</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Sets the <code>ControlPosition</code> at which to display the <code>AdUnit</code> on the map. If the position is set to null, the <code>AdUnit</code> is removed from the map.</div></td>
</tr>
<tr>
<td><code>setTextColor(textColor:string)</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Sets the <code>AdUnit</code>'s text color.</div></td>
</tr>
<tr>
<td><code>setTitleColor(titleColor:string)</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Sets the <code>AdUnit</code>'s title color.</div></td>
</tr>
<tr>
<td><code>setUrlColor(urlColor:string)</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Sets the <code>AdUnit</code>'s URL color.</div></td>
</tr>
</tbody>
</table>