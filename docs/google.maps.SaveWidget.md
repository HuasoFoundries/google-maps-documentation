<h2 id="SaveWidget">
google.maps.SaveWidget
class
</h2><p>A control that users can use to save a place to Google Maps from your website. In this context, 'place' means a business, point of interest or geographic location. The <code>SaveWidget</code> has a fixed height of 22px. </p><p>The <code>SaveWidget</code> is only available when <code>signed-in=true</code> has been passed as a URL parameter in the bootstrap request.</p><p></p><h3>Constructor</h3><table summary="class SaveWidget - Constructor" width="100%">
<thead>
<tr><th>Constructor</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>SaveWidget(container:Node, opts?:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.SaveWidgetOptions.md">SaveWidgetOptions</a>)</code></td>
<td>Creates a new <code>SaveWidget</code>, and renders it in a given div.</td>
</tr>
</tbody>
</table><h3>Methods</h3><table summary="class SaveWidget - Methods" width="100%">
<thead>
<tr><th>Methods</th>
<th>Return Value</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>getAttribution()</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Attribution.md">Attribution</a></code></td>
<td>Returns the <code>Attribution</code> associated with this <code>SaveWidget</code>.</td>
</tr>
<tr>
<td><code>getPlace()</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Place.md">Place</a></code></td>
<td>Returns the <code>Place</code> associated with this <code>SaveWidget</code>.</td>
</tr>
<tr>
<td><code>setAttribution(attribution:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Attribution.md">Attribution</a>)</code></td>
<td><code>None</code></td>
<td>Sets the <code>Attribution</code> associated with this <code>SaveWidget</code>.</td>
</tr>
<tr>
<td><code>setOptions(opts:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.SaveWidgetOptions.md"><em>SaveWidgetOptions</em></a>)</code></td>
<td><code>None</code></td>
<td></td>
</tr>
<tr>
<td><code>setPlace(place:<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.Place.md">Place</a>)</code></td>
<td><code>None</code></td>
<td>Changes the <code>Place</code> associated with this <code>SaveWidget</code>.</td>
</tr>
</tbody>
</table>