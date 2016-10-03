<h2 id="Autocomplete"> Autocomplete class </h2><p>
<code><span itemprop="path">google.maps.places</span>.<span itemprop="name">Autocomplete</span></code>
class
</p><p>A service to provide Place predictions based on a user's text input. It attaches to an input element of type <code>text</code>, and listens for text entry in that field. The list of predictions is presented as a drop-down list, and is updated as text is entered.</p><p>This class extends
<code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MVCObject.md">MVCObject</a></code>.
</p><h4>Library</h4><p>places</p><div class="devsite-table-wrapper"><table class="constructors responsive" summary="class Autocomplete - Constructor">
<thead>
<tr><th colspan="2">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>Autocomplete(<wbr>inputField:HTMLInputElement,<wbr> opts?:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/AutocompleteOptions.md"><span>AutocompleteOptions</span></a><span>)</span></code></td>
<td>Creates a new instance of <code><span>Autocomplete</span></code> that attaches to the specified input text field with the given options.</td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="methods responsive" summary="class Autocomplete - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>getBounds()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLngBounds.md">LatLngBounds</a></code></div>
<div class="desc">Returns the bounds to which predictions are biased.</div></td>
</tr>
<tr>
<td><code><span>getPlace()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PlaceResult.md">PlaceResult</a></code></div>
<div class="desc">Returns the details of the Place selected by user if the details were successfully&nbsp;retrieved. Otherwise returns a stub Place object, with the <code>name</code> property set to the current value of the input field.</div></td>
</tr>
<tr>
<td><code><span>setBounds(<wbr>bounds:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLngBounds.md"><span>LatLngBounds</span></a><span>|<wbr></span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/LatLngBoundsLiteral.md"><span>LatLngBoundsLiteral</span></a><span>)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Sets the preferred area within which to return Place results. Results are biased towards, but not restricted to, this area.</div></td>
</tr>
<tr>
<td><code><span>setComponentRestrictions(<wbr>restrictions:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/ComponentRestrictions.md"><em><span>ComponentRestrictions</span></em></a><span>)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Sets the component restrictions. Component restrictions are used to restrict predictions to only those within the parent component. E.g., the country.</div></td>
</tr>
<tr>
<td><code><span>setTypes(<wbr>types:Array&lt;string&gt;)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Sets the types of predictions to be returned. For a list of supported types, see the <a href="https://developers.google.com/places/supported_types#table3"> developer's guide</a>. If no type is specified, all types will be returned. The <code>setTypes</code> method accepts a single element array.</div></td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="details responsive" summary="class Autocomplete - Events">
<thead>
<tr><th colspan="2">Events</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>place_changed</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code>None</code></div>
<div class="desc">This event is fired when a <code>PlaceResult</code> is made available for a Place the user has selected. <br>If the user enters the name of a Place that was not suggested by the control and presses the Enter key, or if a Place detail request fails, a <code>place_changed</code> event will be fired that contains the user input in the <code>name</code> property, with no other properties defined.</div></td>
</tr>
</tbody>
</table></div>