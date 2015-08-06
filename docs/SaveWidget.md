<h2 id="SaveWidget"> SaveWidget class </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">SaveWidget</span></code>
class
</p><p>A control that users can use to save a place to Google Maps from your website. In this context, 'place' means a business, point of interest or geographic location. The <code>SaveWidget</code> has a fixed height of 22px. </p><p>The <code>SaveWidget</code> is only available when <code>signed-in=true</code> has been passed as a URL parameter in the bootstrap request.</p><p></p><div class="devsite-table-wrapper"><table class="constructors responsive" summary="class SaveWidget - Constructor">
<thead>
<tr><th colspan="2">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>SaveWidget(<wbr>container:Node,<wbr> opts?:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/SaveWidgetOptions.md"><span>SaveWidgetOptions</span></a><span>)</span></code></td>
<td>Creates a new <code><span>SaveWidget</span></code>, and renders it in a given div.</td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="methods responsive" summary="class SaveWidget - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>getAttribution()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Attribution.md">Attribution</a></code></div>
<div class="desc">Returns the <code>Attribution</code> associated with this <code>SaveWidget</code>.</div></td>
</tr>
<tr>
<td><code><span>getPlace()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MarkerPlace.md">MarkerPlace</a></code></div>
<div class="desc">Returns the <code>Place</code> associated with this <code>SaveWidget</code>.</div></td>
</tr>
<tr>
<td><code><span>setAttribution(<wbr>attribution:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/Attribution.md"><em><span>Attribution</span></em></a><span>)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Sets the <code>Attribution</code> associated with this <code>SaveWidget</code>.</div></td>
</tr>
<tr>
<td><code><span>setOptions(<wbr>opts:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/SaveWidgetOptions.md"><em><span>SaveWidgetOptions</span></em></a><span>)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc"></div></td>
</tr>
<tr>
<td><code><span>setPlace(<wbr>place:</span><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MarkerPlace.md"><em><span>MarkerPlace</span></em></a><span>)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Changes the <code>Place</code> associated with this <code>SaveWidget</code>.</div></td>
</tr>
</tbody>
</table></div>