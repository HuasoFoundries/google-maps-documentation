<h2 id="SearchBox">
google.maps.places.SearchBox
class
</h2><p>A service to provide query predictions based on a user's text input. It attaches to an input element of type <code>text</code>, and listens for text entry in that field. The list of predictions is presented as a drop-down list, and is updated as text is entered.</p><p>This class extends
<code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.MVCObject.md">MVCObject</a></code>.
</p><h3>Library</h3><p>places</p><h3>Constructor</h3><table summary="class SearchBox - Constructor" width="100%">
<thead>
<tr><th>Constructor</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>SearchBox(inputField:HTMLInputElement, opts?:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.places.SearchBoxOptions.md"><em>SearchBoxOptions</em></a>)</code></td>
<td>Creates a new instance of <code>SearchBox</code> that attaches to the specified input text field with the given options.</td>
</tr>
</tbody>
</table><h3>Methods</h3><table summary="class SearchBox - Methods" width="100%">
<thead>
<tr><th>Methods</th>
<th>Return Value</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>getBounds()</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLngBounds.md">LatLngBounds</a></code></td>
<td>Returns the bounds to which query predictions are biased.</td>
</tr>
<tr>
<td><code>getPlaces()</code></td>
<td><code>Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.places.PlaceResult.md">PlaceResult</a>&gt;</code></td>
<td>Returns the query selected by the user, or <code>null</code> if no places have been found yet, to be used with <code>places_changed</code> event.</td>
</tr>
<tr>
<td><code>setBounds(bounds:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLngBounds.md">LatLngBounds</a>)</code></td>
<td><code>None</code></td>
<td>Sets the region to use for biasing query predictions. Results will only be biased towards this area and not be completely restricted to it.</td>
</tr>
</tbody>
</table><h3>Events</h3><table summary="class SearchBox - Events" width="100%">
<thead>
<tr><th>Events</th>
<th>Arguments</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>places_changed</code></td>
<td><code>None</code></td>
<td>This event is fired when the user selects a query, <code>getPlaces</code> should be used to get new places.</td>
</tr>
</tbody>
</table>