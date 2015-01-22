<h2 id="AdUnit">
google.maps.adsense.AdUnit
class
</h2><p>Implements AdSense for Content advertising on an associated map. To use an <code>AdUnit</code>, you must obtain and specify an AdSense for Content publisher ID within the <code>AdUnit</code>'s constructor options.</p><p>This class extends
<code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.MVCObject.md">MVCObject</a></code>.
</p><h3 id="devsite_header_244">Library</h3><p>adsense</p><h3 id="devsite_header_245">Constructor</h3><table summary="class AdUnit - Constructor" width="100%">
<thead>
<tr><th>Constructor</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>AdUnit(container:Node, opts:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.adsense.AdUnitOptions.md"><em>AdUnitOptions</em></a>)</code></td>
<td>Creates an AdSense for Content display ad on the associated map.</td>
</tr>
</tbody>
</table><h3 id="devsite_header_246">Methods</h3><table summary="class AdUnit - Methods" width="100%">
<thead>
<tr><th>Methods</th>
<th>Return Value</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>getBackgroundColor()</code></td>
<td><code>string</code></td>
<td>Returns the <code>AdUnit</code>'s background color.</td>
</tr>
<tr>
<td><code>getBorderColor()</code></td>
<td><code>string</code></td>
<td>Returns the <code>AdUnit</code>'s border color.</td>
</tr>
<tr>
<td><code>getChannelNumber()</code></td>
<td><code>string</code></td>
<td>Returns the channel number in use by this <code>AdUnit</code>.</td>
</tr>
<tr>
<td><code>getContainer()</code></td>
<td><code>Node</code></td>
<td>Returns the containing element of the AdUnit.</td>
</tr>
<tr>
<td><code>getFormat()</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.adsense.AdFormat.md">AdFormat</a></code></td>
<td>Returns the format in use by this <code>AdUnit</code>.</td>
</tr>
<tr>
<td><code>getMap()</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Map.md">Map</a></code></td>
<td>Returns the map to which this <code>AdUnit</code>'s ads are targeted.</td>
</tr>
<tr>
<td><code>getPosition()</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.ControlPosition.md">ControlPosition</a></code></td>
<td>Returns the <code>ControlPosition</code> at which this <code>AdUnit</code> is displayed on the map.</td>
</tr>
<tr>
<td><code>getPublisherId()</code></td>
<td><code>string</code></td>
<td>Returns the specified AdSense For Content publisher ID.</td>
</tr>
<tr>
<td><code>getTextColor()</code></td>
<td><code>string</code></td>
<td>Returns the <code>AdUnit</code>'s text color.</td>
</tr>
<tr>
<td><code>getTitleColor()</code></td>
<td><code>string</code></td>
<td>Returns the <code>AdUnit</code>'s title color.</td>
</tr>
<tr>
<td><code>getUrlColor()</code></td>
<td><code>string</code></td>
<td>Returns the <code>AdUnit</code>'s URL color.</td>
</tr>
<tr>
<td><code>setBackgroundColor(backgroundColor:string)</code></td>
<td><code>None</code></td>
<td>Sets the <code>AdUnit</code>'s background color.</td>
</tr>
<tr>
<td><code>setBorderColor(borderColor:string)</code></td>
<td><code>None</code></td>
<td>Sets the <code>AdUnit</code>'s border color.</td>
</tr>
<tr>
<td><code>setChannelNumber(channelNumber:string)</code></td>
<td><code>None</code></td>
<td>Specifies the channel number for this <code>AdUnit</code>. Channel numbers are optional and can be created for Google AdSense tracking.</td>
</tr>
<tr>
<td><code>setFormat(format:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.adsense.AdFormat.md">AdFormat</a>)</code></td>
<td><code>None</code></td>
<td>Specifies the display format for this <code>AdUnit</code>.</td>
</tr>
<tr>
<td><code>setMap(map:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Map.md">Map</a>)</code></td>
<td><code>None</code></td>
<td>Associates this <code>AdUnit</code> with the specified map. Ads will be targeted to the map's viewport. The map must be specified in order to display ads.</td>
</tr>
<tr>
<td><code>setPosition(position:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.ControlPosition.md">ControlPosition</a>)</code></td>
<td><code>None</code></td>
<td>Sets the <code>ControlPosition</code> at which to display the <code>AdUnit</code> on the map. If the position is set to null, the <code>AdUnit</code> is removed from the map.</td>
</tr>
<tr>
<td><code>setTextColor(textColor:string)</code></td>
<td><code>None</code></td>
<td>Sets the <code>AdUnit</code>'s text color.</td>
</tr>
<tr>
<td><code>setTitleColor(titleColor:string)</code></td>
<td><code>None</code></td>
<td>Sets the <code>AdUnit</code>'s title color.</td>
</tr>
<tr>
<td><code>setUrlColor(urlColor:string)</code></td>
<td><code>None</code></td>
<td>Sets the <code>AdUnit</code>'s URL color.</td>
</tr>
</tbody>
</table>