<h2 id="SearchBox">
SearchBox
class
</h2><p>
<code><span itemprop="path">google.maps.places</span>.<span itemprop="name">SearchBox</span></code>
class
</p><p>A service to provide query predictions based on a user's text input. It attaches to an input element of type <code>text</code>, and listens for text entry in that field. The list of predictions is presented as a drop-down list, and is updated as text is entered.</p><p>This class extends
<code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MVCObject.md">MVCObject</a></code>.
</p><h4>Library</h4><p>places</p><table class="constructors responsive" summary="class SearchBox - Constructor">
<thead>
<tr><th colspan="2">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code>SearchBox(inputField:HTMLInputElement, opts?:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/SearchBoxOptions.md"><em>SearchBoxOptions</em></a>)</code></td>
<td>Creates a new instance of <code>SearchBox</code> that attaches to the specified input text field with the given options.</td>
</tr>
</tbody>
</table><table class="methods responsive" summary="class SearchBox - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr>
<td><code>getBounds()</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLngBounds.md">LatLngBounds</a></code></div>
<div class="desc">Returns the bounds to which query predictions are biased.</div></td>
</tr>
<tr>
<td><code>getPlaces()</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PlaceResult.md">PlaceResult</a>&gt;</code></div>
<div class="desc">Returns the query selected by the user, or <code>null</code> if no places have been found yet, to be used with <code>places_changed</code> event.</div></td>
</tr>
<tr>
<td><code>setBounds(bounds:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLngBounds.md">LatLngBounds</a>)</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Sets the region to use for biasing query predictions. Results will only be biased towards this area and not be completely restricted to it.</div></td>
</tr>
</tbody>
</table><table class="details responsive" summary="class SearchBox - Events">
<thead>
<tr><th colspan="2">Events</th>
</tr></thead>
<tbody>
<tr>
<td><code>places_changed</code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code>None</code></div>
<div class="desc">This event is fired when the user selects a query, <code>getPlaces</code> should be used to get new places.</div></td>
</tr>
</tbody>
</table>