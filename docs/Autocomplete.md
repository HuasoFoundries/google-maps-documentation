
<devsite-heading text=" Autocomplete class" for="Autocomplete" level="h2" link="" toc="" back-to-top=""><h2 id="Autocomplete" is-upgraded="">Autocomplete class </h2></devsite-heading>
<p>
<code translate="no" dir="ltr"><span itemprop="path">google.maps.places</span>.<span itemprop="name">Autocomplete</span></code>
class
</p>
<p>A widget that provides Place predictions based on a user's text input. It attaches to an input element of type <code translate="no" dir="ltr">text</code>, and listens for text entry in that field. The list of predictions is presented as a drop-down list, and is updated as text is entered.</p>
<p>This class extends
<code translate="no" dir="ltr"><a href="MVCObject.md">MVCObject</a></code>.
</p>
<devsite-heading text="Library" for="library" level="h4" link=""><h4 is-upgraded="" id="library">Library<button role="button" class="devsite-heading-link button-flat material-icons" title="Copy link to this section"></button></h4></devsite-heading>
<p>places</p>
<div class="devsite-table-wrapper"><table class="constructors responsive" summary="class Autocomplete - Constructor">
<thead>
<tr><th colspan="2" id="Autocomplete.constructor">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code translate="no" dir="ltr"><a class="secret-link" href="#Autocomplete.constructor"><span>Autocomplete</span></a></code></td>
<td><div><code translate="no" dir="ltr">Autocomplete(inputField[, opts])</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">inputField</code>:&nbsp; <code translate="no" dir="ltr">HTMLInputElement</code></li>
<li><code translate="no" dir="ltr">opts</code>:&nbsp; <code translate="no" dir="ltr"><a href="AutocompleteOptions.md">AutocompleteOptions</a> <span class="optional-type-annotation">optional</span></code></li>
</ul></div>
<div class="desc">Creates a new instance of <code translate="no" dir="ltr">Autocomplete</code> that attaches to the specified input text field with the given options.</div></td>
</tr>
</tbody>
</table></div>
<div class="devsite-table-wrapper"><table class="methods responsive" summary="class Autocomplete - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr id="Autocomplete.getBounds">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Autocomplete.getBounds"><span>getBounds</span></a></code></td>
<td><div><code translate="no" dir="ltr">getBounds()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr"><a href="LatLngBounds.md">LatLngBounds</a> <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Returns the bounds to which predictions are biased.</div></td>
</tr>
<tr id="Autocomplete.getFields">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Autocomplete.getFields"><span>getFields</span></a></code></td>
<td><div><code translate="no" dir="ltr">getFields()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr">Array&lt;string&gt; <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Returns the fields to be included for the Place in the details response when the details are successfully retrieved. For a list of fields see <code translate="no" dir="ltr"><a href="PlaceResult.md">PlaceResult</a></code>.</div></td>
</tr>
<tr id="Autocomplete.getPlace">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Autocomplete.getPlace"><span>getPlace</span></a></code></td>
<td><div><code translate="no" dir="ltr">getPlace()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr"><a href="PlaceResult.md">PlaceResult</a></code></div>
<div class="desc">Returns the details of the Place selected by user if the details were successfully retrieved. Otherwise returns a stub Place object, with the <code translate="no" dir="ltr">name</code> property set to the current value of the input field.</div></td>
</tr>
<tr id="Autocomplete.setBounds">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Autocomplete.setBounds"><span>setBounds</span></a></code></td>
<td><div><code translate="no" dir="ltr">setBounds(bounds)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">bounds</code>:&nbsp; <code translate="no" dir="ltr"><a href="LatLngBounds.md">LatLngBounds</a>|<a href="LatLngBoundsLiteral.md">LatLngBoundsLiteral</a> <span class="optional-type-annotation">optional</span></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Sets the preferred area within which to return Place results. Results are biased towards, but not restricted to, this area.</div></td>
</tr>
<tr id="Autocomplete.setComponentRestrictions">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Autocomplete.setComponentRestrictions"><span>setComponentRestrictions</span></a></code></td>
<td><div><code translate="no" dir="ltr">setComponentRestrictions(restrictions)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">restrictions</code>:&nbsp; <code translate="no" dir="ltr"><a href="ComponentRestrictions.md">ComponentRestrictions</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Sets the component restrictions. Component restrictions are used to restrict predictions to only those within the parent component. For example, the country.</div></td>
</tr>
<tr id="Autocomplete.setFields">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Autocomplete.setFields"><span>setFields</span></a></code></td>
<td><div><code translate="no" dir="ltr">setFields(fields)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">fields</code>:&nbsp; <code translate="no" dir="ltr">Array&lt;string&gt; <span class="optional-type-annotation">optional</span></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Sets the fields to be included for the Place in the details response when the details are successfully retrieved. For a list of fields see <code translate="no" dir="ltr"><a href="PlaceResult.md">PlaceResult</a></code>.</div></td>
</tr>
<tr id="Autocomplete.setOptions">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Autocomplete.setOptions"><span>setOptions</span></a></code></td>
<td><div><code translate="no" dir="ltr">setOptions(options)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">options</code>:&nbsp; <code translate="no" dir="ltr"><a href="AutocompleteOptions.md">AutocompleteOptions</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc"></div></td>
</tr>
<tr id="Autocomplete.setTypes">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Autocomplete.setTypes"><span>setTypes</span></a></code></td>
<td><div><code translate="no" dir="ltr">setTypes(types)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">types</code>:&nbsp; <code translate="no" dir="ltr">Array&lt;string&gt;</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Sets the types of predictions to be returned. For a list of supported types, see the <a href="https://developers.google.com/places/supported_types#table3"> developer's guide</a>. If no type is specified, all types will be returned. The <code translate="no" dir="ltr">setTypes</code> method accepts a single element array.</div></td>
</tr>
</tbody>
</table></div>
<div class="devsite-table-wrapper"><table class="details responsive" summary="class Autocomplete - Events">
<thead>
<tr><th colspan="2">Events</th>
</tr></thead>
<tbody>
<tr id="Autocomplete.place_changed">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#Autocomplete.place_changed"><span>place_changed</span></a></code></td>
<td><div><code translate="no" dir="ltr">function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">This event is fired when a <code translate="no" dir="ltr">PlaceResult</code> is made available for a Place the user has selected. <br>If the user enters the name of a Place that was not suggested by the control and presses the Enter key, or if a Place Details request fails, the <code translate="no" dir="ltr">PlaceResult</code> contains the user input in the <code translate="no" dir="ltr">name</code> property, with no other properties defined.</div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
