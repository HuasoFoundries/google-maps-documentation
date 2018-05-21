<h2 id="Autocomplete"> Autocomplete class </h2><p>
<code><span itemprop="path">google.maps.places</span>.<span itemprop="name">Autocomplete</span></code>
class
</p><p>A widget that provides Place predictions based on a user's text input. It attaches to an input element of type <code>text</code>, and listens for text entry in that field. The list of predictions is presented as a drop-down list, and is updated as text is entered.</p><p>This class extends
<code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MVCObject.md">MVCObject</a></code>.
</p><h4>Library</h4><p>places</p><div class="devsite-table-wrapper"><table class="constructors responsive" summary="class Autocomplete - Constructor">
<thead>
<tr><th colspan="2" id="Autocomplete.constructor">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>Autocomplete</span></code></td>
<td><div><code>Autocomplete(inputField[, opts])</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>inputField</code>:&nbsp; <code>HTMLInputElement</code></li>
<li><code>opts</code> (optional):&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/AutocompleteOptions.md">AutocompleteOptions</a></code></li>
</ul></div>
<div class="desc">Creates a new instance of <code>Autocomplete</code> that attaches to the specified input text field with the given options.</div></td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="methods responsive" summary="class Autocomplete - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr id="Autocomplete.getBounds">
<td><code><span>getBounds</span></code></td>
<td><div><code>getBounds()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLngBounds.md">LatLngBounds</a>|undefined</code></div>
<div class="desc">Returns the bounds to which predictions are biased.</div></td>
</tr>
<tr id="Autocomplete.getPlace">
<td><code><span>getPlace</span></code></td>
<td><div><code>getPlace()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PlaceResult.md">PlaceResult</a></code></div>
<div class="desc">Returns the details of the Place selected by user if the details were successfully retrieved. Otherwise returns a stub Place object, with the <code>name</code> property set to the current value of the input field.</div></td>
</tr>
<tr id="Autocomplete.setBounds">
<td><code><span>setBounds</span></code></td>
<td><div><code>setBounds(bounds)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>bounds</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLngBounds.md">LatLngBounds</a>|<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLngBoundsLiteral.md">LatLngBoundsLiteral</a>|undefined</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Sets the preferred area within which to return Place results. Results are biased towards, but not restricted to, this area.</div></td>
</tr>
<tr id="Autocomplete.setComponentRestrictions">
<td><code><span>setComponentRestrictions</span></code></td>
<td><div><code>setComponentRestrictions(restrictions)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>restrictions</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/ComponentRestrictions.md">ComponentRestrictions</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Sets the component restrictions. Component restrictions are used to restrict predictions to only those within the parent component. E.g., the country.</div></td>
</tr>
<tr id="Autocomplete.setOptions">
<td><code><span>setOptions</span></code></td>
<td><div><code>setOptions(options)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>options</code>:&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/AutocompleteOptions.md">AutocompleteOptions</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc"></div></td>
</tr>
<tr id="Autocomplete.setTypes">
<td><code><span>setTypes</span></code></td>
<td><div><code>setTypes(types)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>types</code>:&nbsp; <code>Array&lt;string&gt;</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Sets the types of predictions to be returned. For a list of supported types, see the <a href="https://developers.google.com/places/supported_types#table3"> developer's guide</a>. If no type is specified, all types will be returned. The <code>setTypes</code> method accepts a single element array.</div></td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="details responsive" summary="class Autocomplete - Events">
<thead>
<tr><th colspan="2">Events</th>
</tr></thead>
<tbody>
<tr id="Autocomplete.place_changed">
<td><code><span>place_changed</span></code></td>
<td><div><code>function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">This event is fired when a <code>PlaceResult</code> is made available for a Place the user has selected. <br>If the user enters the name of a Place that was not suggested by the control and presses the Enter key, or if a Place Details request fails, the <code>PlaceResult</code> contains the user input in the <code>name</code> property, with no other properties defined.</div></td>
</tr>
</tbody>
</table></div>