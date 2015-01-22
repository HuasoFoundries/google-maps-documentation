<h2 id="Autocomplete">
google.maps.places.Autocomplete
class
</h2><p>A service to provide Place predictions based on a user's text input. It attaches to an input element of type <code>text</code>, and listens for text entry in that field. The list of predictions is presented as a drop-down list, and is updated as text is entered.</p><p>This class extends
<code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.MVCObject.md">MVCObject</a></code>.
</p><h3 id="devsite_header_261">Library</h3><p>places</p><h3 id="devsite_header_262">Constructor</h3><table summary="class Autocomplete - Constructor" width="100%">
<thead>
<tr><th>Constructor</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>Autocomplete(inputField:HTMLInputElement, opts?:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.places.AutocompleteOptions.md"><em>AutocompleteOptions</em></a>)</code></td>
<td>Creates a new instance of <code>Autocomplete</code> that attaches to the specified input text field with the given options.</td>
</tr>
</tbody>
</table><h3 id="devsite_header_263">Methods</h3><table summary="class Autocomplete - Methods" width="100%">
<thead>
<tr><th>Methods</th>
<th>Return Value</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>getBounds()</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLngBounds.md">LatLngBounds</a></code></td>
<td>Returns the bounds to which predictions are biased.</td>
</tr>
<tr>
<td><code>getPlace()</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.places.PlaceResult.md">PlaceResult</a></code></td>
<td>Returns the details of the Place selected by user if the details were successfully&nbsp;retrieved. Otherwise returns a stub Place object, with the <code>name</code> property set to the current value of the input field.</td>
</tr>
<tr>
<td><code>setBounds(bounds:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.LatLngBounds.md">LatLngBounds</a>)</code></td>
<td><code>None</code></td>
<td>Sets the preferred area within which to return Place results. Results are biased towards, but not restricted to, this area.</td>
</tr>
<tr>
<td><code>setComponentRestrictions(restrictions:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.places.ComponentRestrictions.md"><em>ComponentRestrictions</em></a>)</code></td>
<td><code>None</code></td>
<td>Sets the component restrictions. Component restrictions are used to restrict predictions to only those within the parent component. E.g., the country.</td>
</tr>
<tr>
<td><code>setTypes(types:Array&lt;string&gt;)</code></td>
<td><code>None</code></td>
<td>Sets the types of predictions to be returned. Supported types are '<code>establishment</code>' for businesses and '<code>geocode</code>' for addresses. If no type is specified, both types will be returned. The <code>setTypes</code> method accepts a single element array.</td>
</tr>
</tbody>
</table><h3 id="devsite_header_264">Events</h3><table summary="class Autocomplete - Events" width="100%">
<thead>
<tr><th>Events</th>
<th>Arguments</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>place_changed</code></td>
<td><code>None</code></td>
<td>This event is fired when a <code>PlaceResult</code> is made available for a Place the user has selected. <br>If the user enters the name of a Place that was not suggested by the control and presses the Enter key, or if a Place detail request fails, a <code>place_changed</code> event will be fired that contains the user input in the <code>name</code> property, with no other properties defined.<br></td>
</tr>
</tbody>
</table>