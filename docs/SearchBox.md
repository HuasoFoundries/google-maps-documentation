<h2 id="SearchBox"> SearchBox class </h2><p>
<code><span itemprop="path">google.maps.places</span>.<span itemprop="name">SearchBox</span></code>
class
</p><p>A service to provide query predictions based on a user's text input. It attaches to an input element of type <code>text</code>, and listens for text entry in that field. The list of predictions is presented as a drop-down list, and is updated as text is entered.</p><p>This class extends
<code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MVCObject.md">MVCObject</a></code>.
</p><h4>Library</h4><p>places</p><div class="devsite-table-wrapper"><table class="constructors responsive" summary="class SearchBox - Constructor">
<thead>
<tr><th colspan="2" id="SearchBox.constructor">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>SearchBox</span></code></td>
<td><div><code>SearchBox(inputField[, opts])</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>inputField</code>:&nbsp; <code>HTMLInputElement</code></li>
<li><code>opts</code> (optional):&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/SearchBoxOptions.md">SearchBoxOptions</a></code></li>
</ul></div>
<div class="desc">Creates a new instance of <code>SearchBox</code> that attaches to the specified input text field with the given options.</div></td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="methods responsive" summary="class SearchBox - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr id="SearchBox.getBounds">
<td><code><span>getBounds</span></code></td>
<td><div><code>getBounds()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLngBounds.md">LatLngBounds</a></code></div>
<div class="desc">Returns the bounds to which query predictions are biased.</div></td>
</tr>
<tr id="SearchBox.getPlaces">
<td><code><span>getPlaces</span></code></td>
<td><div><code>getPlaces()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PlaceResult.md">PlaceResult</a>&gt;</code></div>
<div class="desc">Returns the query selected by the user, or <code>null</code> if no places have been found yet, to be used with <code>places_changed</code> event.</div></td>
</tr>
<tr id="SearchBox.setBounds">
<td><code><span>setBounds</span></code></td>
<td><div><code>setBounds(bounds)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>bounds</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLngBounds.md">LatLngBounds</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLngBoundsLiteral.md">LatLngBoundsLiteral</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Sets the region to use for biasing query predictions. Results will only be biased towards this area and not be completely restricted to it.</div></td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="details responsive" summary="class SearchBox - Events">
<thead>
<tr><th colspan="2">Events</th>
</tr></thead>
<tbody>
<tr id="SearchBox.places_changed">
<td><code><span>places_changed</span></code></td>
<td><div><code>function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">This event is fired when the user selects a query, <code>getPlaces</code> should be used to get new places.</div></td>
</tr>
</tbody>
</table></div>