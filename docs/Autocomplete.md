
<h2 id="Autocomplete">Autocomplete class</h2>
<p>
<code><span itemprop="path">google.maps.places</span>.<span itemprop="name">Autocomplete</span></code>
class
</p>
<p>A widget that provides Place predictions based on a user's text input. It attaches to an input element of type <code>text</code>, and listens for text entry in that field. The list of predictions is presented as a drop-down list, and is updated as text is entered.</p>
<p>This class extends
<code><a href="MVCObject.md">MVCObject</a></code>.
</p>
<h4>Library</h4>
<p>places</p>
<div class="devsite-table-wrapper"><table class="constructors responsive" summary="class Autocomplete - Constructor">
<thead>
<tr><th colspan="2" id="Autocomplete.constructor">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code><a class="secret-link" href="#Autocomplete.constructor"><span>Autocomplete</span></a></code></td>
<td><div><code>Autocomplete(inputField[, opts])</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>inputField</code>:&nbsp; <code>HTMLInputElement</code></li>
<li><code>opts</code> (optional):&nbsp; <code><a href="AutocompleteOptions.md">AutocompleteOptions</a></code></li>
</ul></div>
<div class="desc">Creates a new instance of <code>Autocomplete</code> that attaches to the specified input text field with the given options.</div></td>
</tr>
</tbody>
</table></div>
<div class="devsite-table-wrapper"><table class="methods responsive" summary="class Autocomplete - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr id="Autocomplete.getBounds">
<td itemprop="property"><code><a class="secret-link" href="#Autocomplete.getBounds"><span>getBounds</span></a></code></td>
<td><div><code>getBounds()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="LatLngBounds.md">LatLngBounds</a>|undefined</code></div>
<div class="desc">Returns the bounds to which predictions are biased.</div></td>
</tr>
<tr id="Autocomplete.getFields">
<td itemprop="property"><code><a class="secret-link" href="#Autocomplete.getFields"><span>getFields</span></a></code></td>
<td><div><code>getFields()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>Array&lt;string&gt;|undefined</code></div>
<div class="desc">Returns the fields to be included for the Place in the details response when the details are successfully retrieved. For a list of fields see <code><a href="PlaceResult.md">PlaceResult</a></code>.</div></td>
</tr>
<tr id="Autocomplete.getPlace">
<td itemprop="property"><code><a class="secret-link" href="#Autocomplete.getPlace"><span>getPlace</span></a></code></td>
<td><div><code>getPlace()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="PlaceResult.md">PlaceResult</a></code></div>
<div class="desc">Returns the details of the Place selected by user if the details were successfully retrieved. Otherwise returns a stub Place object, with the <code>name</code> property set to the current value of the input field.</div></td>
</tr>
<tr id="Autocomplete.setBounds">
<td itemprop="property"><code><a class="secret-link" href="#Autocomplete.setBounds"><span>setBounds</span></a></code></td>
<td><div><code>setBounds(bounds)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>bounds</code>:&nbsp; <code><a href="LatLngBounds.md">LatLngBounds</a>|<a href="LatLngBoundsLiteral.md">LatLngBoundsLiteral</a>|undefined</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Sets the preferred area within which to return Place results. Results are biased towards, but not restricted to, this area.</div></td>
</tr>
<tr id="Autocomplete.setComponentRestrictions">
<td itemprop="property"><code><a class="secret-link" href="#Autocomplete.setComponentRestrictions"><span>setComponentRestrictions</span></a></code></td>
<td><div><code>setComponentRestrictions(restrictions)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>restrictions</code>:&nbsp; <code><a href="ComponentRestrictions.md">ComponentRestrictions</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Sets the component restrictions. Component restrictions are used to restrict predictions to only those within the parent component. For example, the country.</div></td>
</tr>
<tr id="Autocomplete.setFields">
<td itemprop="property"><code><a class="secret-link" href="#Autocomplete.setFields"><span>setFields</span></a></code></td>
<td><div><code>setFields(fields)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>fields</code>:&nbsp; <code>Array&lt;string&gt;|undefined</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Sets the fields to be included for the Place in the details response when the details are successfully retrieved. For a list of fields see <code><a href="PlaceResult.md">PlaceResult</a></code>.</div></td>
</tr>
<tr id="Autocomplete.setOptions">
<td itemprop="property"><code><a class="secret-link" href="#Autocomplete.setOptions"><span>setOptions</span></a></code></td>
<td><div><code>setOptions(options)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>options</code>:&nbsp; <code><a href="AutocompleteOptions.md">AutocompleteOptions</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc"></div></td>
</tr>
<tr id="Autocomplete.setTypes">
<td itemprop="property"><code><a class="secret-link" href="#Autocomplete.setTypes"><span>setTypes</span></a></code></td>
<td><div><code>setTypes(types)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>types</code>:&nbsp; <code>Array&lt;string&gt;</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Sets the types of predictions to be returned. For a list of supported types, see the <a href="https://developers.google.com/places/supported_types#table3"> developer's guide</a>. If no type is specified, all types will be returned. The <code>setTypes</code> method accepts a single element array.</div></td>
</tr>
</tbody>
</table></div>
<div class="devsite-table-wrapper"><table class="details responsive" summary="class Autocomplete - Events">
<thead>
<tr><th colspan="2">Events</th>
</tr></thead>
<tbody>
<tr id="Autocomplete.place_changed">
<td itemprop="property"><code><a class="secret-link" href="#Autocomplete.place_changed"><span>place_changed</span></a></code></td>
<td><div><code>function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">This event is fired when a <code>PlaceResult</code> is made available for a Place the user has selected. <br>If the user enters the name of a Place that was not suggested by the control and presses the Enter key, or if a Place Details request fails, the <code>PlaceResult</code> contains the user input in the <code>name</code> property, with no other properties defined.</div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
