<h2 id="PlacesService">
google.maps.places.PlacesService
class
</h2><p>Contains methods related to searching for Places and retrieving details about a Place.</p><h3>Library</h3><p>places</p><h3>Constructor</h3><table summary="class PlacesService - Constructor" width="100%">
<thead>
<tr><th>Constructor</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>PlacesService(attrContainer:HTMLDivElement|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Map.md">Map</a>)</code></td>
<td>Creates a new instance of the <code>PlacesService</code> that renders attributions in the specified container.</td>
</tr>
</tbody>
</table><h3>Methods</h3><table summary="class PlacesService - Methods" width="100%">
<thead>
<tr><th>Methods</th>
<th>Return Value</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>getDetails(request:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.places.PlaceDetailsRequest.md"><em>PlaceDetailsRequest</em></a>, callback:function(<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.places.PlaceResult.md">PlaceResult</a>, <a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.places.PlacesServiceStatus.md">PlacesServiceStatus</a>))</code></td>
<td><code>None</code></td>
<td>Retrieves details about the Place identified by the given <code>placeId</code>.</td>
</tr>
<tr>
<td><code>nearbySearch(request:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.places.PlaceSearchRequest.md"><em>PlaceSearchRequest</em></a>, callback:function(Array.&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.places.PlaceResult.md">PlaceResult</a>&gt;, <a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.places.PlacesServiceStatus.md">PlacesServiceStatus</a>,
<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.places.PlaceSearchPagination.md">PlaceSearchPagination</a>))</code></td>
<td><code>None</code></td>
<td>Retrieves a list of Places in a given area. The <code>PlaceResult</code>s passed to the callback are stripped-down versions of a full PlaceResult. A more detailed <code>PlaceResult</code> for each Place can be obtained by sending a Place Details request with the desired Place's <code>placeId</code> value.</td>
</tr>
<tr>
<td><code>radarSearch(request:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.places.RadarSearchRequest.md"><em>RadarSearchRequest</em></a>, callback:function(Array.&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.places.PlaceResult.md">PlaceResult</a>&gt;, <a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.places.PlacesServiceStatus.md">PlacesServiceStatus</a>))</code></td>
<td><code>None</code></td>
<td>Similar to the <code>nearbySearch</code> function, with the following differences: the search response will include up to 200 Places, identified only by their geographic coordinates and <code>place_id</code>.</td>
</tr>
<tr>
<td><code>textSearch(request:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.places.TextSearchRequest.md"><em>TextSearchRequest</em></a>, callback:function(Array.&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.places.PlaceResult.md">PlaceResult</a>&gt;, <a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.places.PlacesServiceStatus.md">PlacesServiceStatus</a>))</code></td>
<td><code>None</code></td>
<td>Similar to the <code>nearbySearch</code> function, with the following differences: it retrieves a list of Places based on the <code>query</code> attribute in the given request object; <code>bounds</code> or <code>location </code> + <code>radius</code> parameters are optional; and the region, when provided, will not restrict the results to places inside the area, only bias the response towards results near it.</td>
</tr>
</tbody>
</table>