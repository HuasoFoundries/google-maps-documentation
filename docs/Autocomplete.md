<h2 id="Autocomplete">
Autocomplete
class
</h2><p>
<code><span itemprop="path">google.maps.places</span>.<span itemprop="name">Autocomplete</span></code>
class
</p><p>A service to provide Place predictions based on a user's text input. It attaches to an input element of type <code>text</code>, and listens for text entry in that field. The list of predictions is presented as a drop-down list, and is updated as text is entered.</p><p>This class extends
<code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MVCObject.md">MVCObject</a></code>.
</p><h4>Library</h4><p>places</p><table class="constructors responsive" summary="class Autocomplete - Constructor">
<thead>
<tr><th colspan="2">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code>Autocomplete(inputField:HTMLInputElement, opts?:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/AutocompleteOptions.md"><em>AutocompleteOptions</em></a>)</code></td>
<td>Creates a new instance of <code>Autocomplete</code> that attaches to the specified input text field with the given options.</td>
</tr>
</tbody>
</table><table class="methods responsive" summary="class Autocomplete - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr>
<td><code>getBounds()</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLngBounds.md">LatLngBounds</a></code></div>
<div class="desc">Returns the bounds to which predictions are biased.</div></td>
</tr>
<tr>
<td><code>getPlace()</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PlaceResult.md">PlaceResult</a></code></div>
<div class="desc">Returns the details of the Place selected by user if the details were successfully&nbsp;retrieved. Otherwise returns a stub Place object, with the <code>name</code> property set to the current value of the input field.</div></td>
</tr>
<tr>
<td><code>setBounds(bounds:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLngBounds.md">LatLngBounds</a>)</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Sets the preferred area within which to return Place results. Results are biased towards, but not restricted to, this area.</div></td>
</tr>
<tr>
<td><code>setComponentRestrictions(restrictions:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/ComponentRestrictions.md"><em>ComponentRestrictions</em></a>)</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Sets the component restrictions. Component restrictions are used to restrict predictions to only those within the parent component. E.g., the country.</div></td>
</tr>
<tr>
<td><code>setTypes(types:Array&lt;string&gt;)</code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Sets the types of predictions to be returned. Supported types are '<code>establishment</code>' for businesses and '<code>geocode</code>' for addresses. If no type is specified, both types will be returned. The <code>setTypes</code> method accepts a single element array.</div></td>
</tr>
</tbody>
</table><table class="details responsive" summary="class Autocomplete - Events">
<thead>
<tr><th colspan="2">Events</th>
</tr></thead>
<tbody>
<tr>
<td><code>place_changed</code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code>None</code></div>
<div class="desc">This event is fired when a <code>PlaceResult</code> is made available for a Place the user has selected. <br>If the user enters the name of a Place that was not suggested by the control and presses the Enter key, or if a Place detail request fails, a <code>place_changed</code> event will be fired that contains the user input in the <code>name</code> property, with no other properties defined.</div></td>
</tr>
</tbody>
</table>