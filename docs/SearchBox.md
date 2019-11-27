
<devsite-heading text=" SearchBox class" for="SearchBox" level="h2" link="" toc="" back-to-top=""><h2 id="SearchBox" is-upgraded="">SearchBox class </h2></devsite-heading>
<p>
<code translate="no" dir="ltr"><span itemprop="path">google.maps.places</span>.<span itemprop="name">SearchBox</span></code>
class
</p>
<p>A widget that provides query predictions based on a user's text input. It attaches to an input element of type <code translate="no" dir="ltr">text</code>, and listens for text entry in that field. The list of predictions is presented as a drop-down list, and is updated as text is entered.</p>
<p>This class extends
<code translate="no" dir="ltr"><a href="MVCObject.md">MVCObject</a></code>.
</p>
<devsite-heading text="Library" for="library_2" level="h4" link=""><h4 is-upgraded="" id="library_2">Library<button role="button" class="devsite-heading-link button-flat material-icons" title="Copy link to this section"></button></h4></devsite-heading>
<p>places</p>
<div class="devsite-table-wrapper"><table class="constructors responsive" summary="class SearchBox - Constructor">
<thead>
<tr><th colspan="2" id="SearchBox.constructor">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code translate="no" dir="ltr"><a class="secret-link" href="#SearchBox.constructor"><span>SearchBox</span></a></code></td>
<td><div><code translate="no" dir="ltr">SearchBox(inputField[, opts])</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">inputField</code>:&nbsp; <code translate="no" dir="ltr">HTMLInputElement</code></li>
<li><code translate="no" dir="ltr">opts</code>:&nbsp; <code translate="no" dir="ltr"><a href="SearchBoxOptions.md">SearchBoxOptions</a> <span class="optional-type-annotation">optional</span></code></li>
</ul></div>
<div class="desc">Creates a new instance of <code translate="no" dir="ltr">SearchBox</code> that attaches to the specified input text field with the given options.</div></td>
</tr>
</tbody>
</table></div>
<div class="devsite-table-wrapper"><table class="methods responsive" summary="class SearchBox - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr id="SearchBox.getBounds">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#SearchBox.getBounds"><span>getBounds</span></a></code></td>
<td><div><code translate="no" dir="ltr">getBounds()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr"><a href="LatLngBounds.md">LatLngBounds</a></code></div>
<div class="desc">Returns the bounds to which query predictions are biased.</div></td>
</tr>
<tr id="SearchBox.getPlaces">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#SearchBox.getPlaces"><span>getPlaces</span></a></code></td>
<td><div><code translate="no" dir="ltr">getPlaces()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr">Array&lt;<a href="PlaceResult.md">PlaceResult</a>&gt;</code></div>
<div class="desc">Returns the query selected by the user, or <code translate="no" dir="ltr">null</code> if no places have been found yet, to be used with <code translate="no" dir="ltr">places_changed</code> event.</div></td>
</tr>
<tr id="SearchBox.setBounds">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#SearchBox.setBounds"><span>setBounds</span></a></code></td>
<td><div><code translate="no" dir="ltr">setBounds(bounds)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">bounds</code>:&nbsp; <code translate="no" dir="ltr"><a href="LatLngBounds.md">LatLngBounds</a>|<a href="LatLngBoundsLiteral.md">LatLngBoundsLiteral</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Sets the region to use for biasing query predictions. Results will only be biased towards this area and not be completely restricted to it.</div></td>
</tr>
</tbody>
</table></div>
<div class="devsite-table-wrapper"><table class="details responsive" summary="class SearchBox - Events">
<thead>
<tr><th colspan="2">Events</th>
</tr></thead>
<tbody>
<tr id="SearchBox.places_changed">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#SearchBox.places_changed"><span>places_changed</span></a></code></td>
<td><div><code translate="no" dir="ltr">function()</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; None</div>
<div class="desc">This event is fired when the user selects a query, <code translate="no" dir="ltr">getPlaces</code> should be used to get new places.</div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
