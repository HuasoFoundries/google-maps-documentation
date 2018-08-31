
<h2 id="GeocoderStatus">GeocoderStatus constants</h2>
<p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">GeocoderStatus</span></code>
constants
</p>
<p>The status returned by the <code>Geocoder</code> on the completion of a call to <code>geocode()</code>. Specify these by value, or by using the constant's name. For example, <code>'OK'</code> or <code>google.maps.GeocoderStatus.OK</code>.</p>
<div class="devsite-table-wrapper"><table class="constants responsive" summary="GeocoderStatus constants">
<thead>
<tr><th colspan="2">Constants</th>
</tr></thead>
<tbody>
<tr id="GeocoderStatus.ERROR">
<td itemprop="property"><code><a class="secret-link" href="#GeocoderStatus.ERROR"><span>ERROR</span></a></code></td>
<td>There was a problem contacting the Google servers.</td>
</tr>
<tr id="GeocoderStatus.INVALID_REQUEST">
<td itemprop="property"><code><a class="secret-link" href="#GeocoderStatus.INVALID_REQUEST"><span>INVALID_REQUEST</span></a></code></td>
<td>This <code><span>GeocoderRequest</span></code> was invalid.</td>
</tr>
<tr id="GeocoderStatus.OK">
<td itemprop="property"><code><a class="secret-link" href="#GeocoderStatus.OK"><span>OK</span></a></code></td>
<td>The response contains a valid <code><span>GeocoderResponse</span></code>.</td>
</tr>
<tr id="GeocoderStatus.OVER_QUERY_LIMIT">
<td itemprop="property"><code><a class="secret-link" href="#GeocoderStatus.OVER_QUERY_LIMIT"><span>OVER_QUERY_LIMIT</span></a></code></td>
<td>The webpage has gone over the requests limit in too short a period of time.</td>
</tr>
<tr id="GeocoderStatus.REQUEST_DENIED">
<td itemprop="property"><code><a class="secret-link" href="#GeocoderStatus.REQUEST_DENIED"><span>REQUEST_DENIED</span></a></code></td>
<td>The webpage is not allowed to use the geocoder.</td>
</tr>
<tr id="GeocoderStatus.UNKNOWN_ERROR">
<td itemprop="property"><code><a class="secret-link" href="#GeocoderStatus.UNKNOWN_ERROR"><span>UNKNOWN_ERROR</span></a></code></td>
<td>A geocoding request could not be processed due to a server error. The request may succeed if you try again.</td>
</tr>
<tr id="GeocoderStatus.ZERO_RESULTS">
<td itemprop="property"><code><a class="secret-link" href="#GeocoderStatus.ZERO_RESULTS"><span>ZERO_RESULTS</span></a></code></td>
<td>No result was found for this <code><span>GeocoderRequest</span></code>.</td>
</tr>
</tbody>
</table></div>
