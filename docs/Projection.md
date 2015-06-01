<h2 id="Projection"> Projection object specification </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">Projection</span></code>
object specification
</p><div class="devsite-table-wrapper"><table class="methods responsive" summary="interface Projection - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>fromLatLngToPoint(<wbr>latLng:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md"><span>LatLng</span></a><span>,<wbr> point?:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Point.md"><span>Point</span></a><span>)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Point.md">Point</a></code></div>
<div class="desc">Translates from the LatLng cylinder to the Point plane. This interface specifies a function which implements translation from given <code>LatLng</code> values to world coordinates on the map projection. The Maps API calls this method when it needs to plot locations on screen. <code>Projection</code> objects must implement this method.</div></td>
</tr>
<tr>
<td><code><span>fromPointToLatLng(<wbr>pixel:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Point.md"><span>Point</span></a><span>,<wbr> nowrap?:boolean)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLng.md">LatLng</a></code></div>
<div class="desc">This interface specifies a function which implements translation from world coordinates on a map projection to <code>LatLng</code> values. The Maps API calls this method when it needs to translate actions on screen to positions on the map. <code>Projection</code> objects must implement this method.</div></td>
</tr>
</tbody>
</table></div>