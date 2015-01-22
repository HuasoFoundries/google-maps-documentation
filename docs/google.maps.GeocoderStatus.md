<h2 id="GeocoderStatus">
google.maps.GeocoderStatus
class
</h2><p>The status returned by the <code>Geocoder</code> on the completion of a call to <code>geocode()</code>.</p><h3 id="devsite_header_101">Constant</h3><table summary="class GeocoderStatus - Constants" width="100%">
<thead>
<tr><th>Constant</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>ERROR</code></td>
<td>There was a problem contacting the Google servers.</td>
</tr>
<tr>
<td><code>INVALID_REQUEST</code></td>
<td>This <code>GeocoderRequest</code> was invalid.</td>
</tr>
<tr>
<td><code>OK</code></td>
<td>The response contains a valid <code>GeocoderResponse</code>.</td>
</tr>
<tr>
<td><code>OVER_QUERY_LIMIT</code></td>
<td>The webpage has gone over the requests limit in too short a period of time.</td>
</tr>
<tr>
<td><code>REQUEST_DENIED</code></td>
<td>The webpage is not allowed to use the geocoder.</td>
</tr>
<tr>
<td><code>UNKNOWN_ERROR</code></td>
<td>A geocoding request could not be processed due to a server error. The request may succeed if you try again.</td>
</tr>
<tr>
<td><code>ZERO_RESULTS</code></td>
<td>No result was found for this <code>GeocoderRequest</code>.</td>
</tr>
</tbody>
</table>