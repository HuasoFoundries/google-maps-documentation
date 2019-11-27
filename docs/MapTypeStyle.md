
<devsite-heading text=" MapTypeStyle interface" for="MapTypeStyle" level="h2" link="" toc="" back-to-top=""><h2 id="MapTypeStyle" is-upgraded="">MapTypeStyle interface </h2></devsite-heading>
<p>
<code translate="no" dir="ltr"><span itemprop="path">google.maps</span>.<span itemprop="name">MapTypeStyle</span></code>
interface
</p>
<p>The <code translate="no" dir="ltr">MapTypeStyle</code> is a collection of selectors and stylers that define how the map should be styled. Selectors specify the map features and/or elements that should be affected, and stylers specify how those features and elements should be modified. For details, see the <a href="/maps/documentation/javascript/style-reference">style reference</a>.</p>
<div class="devsite-table-wrapper"><table class="properties responsive" summary="interface MapTypeStyle - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="MapTypeStyle.elementType">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#MapTypeStyle.elementType"><span>elementType</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">string <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The element to which a styler should be applied. An element is a visual aspect of a feature on the map. Example: a label, an icon, the stroke or fill applied to the geometry, and more. Optional. If <code translate="no" dir="ltr">elementType</code> is not specified, the value is assumed to be <code translate="no" dir="ltr">'all'</code>. For details of usage and allowed values, see the <a href="/maps/documentation/javascript/style-reference#style-elements">style reference</a>.</div></td>
</tr>
<tr id="MapTypeStyle.featureType">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#MapTypeStyle.featureType"><span>featureType</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">string <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The feature, or group of features, to which a styler should be applied. Optional. If <code translate="no" dir="ltr">featureType</code> is not specified, the value is assumed to be <code translate="no" dir="ltr">'all'</code>. For details of usage and allowed values, see the <a href="/maps/documentation/javascript/style-reference#style-features">style reference</a>.</div></td>
</tr>
<tr id="MapTypeStyle.stylers">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#MapTypeStyle.stylers"><span>stylers</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">Array&lt;Object&gt;</code></div>
<div class="desc">The style rules to apply to the selected map features and elements. The rules are applied in the order that you specify in this array. For guidelines on usage and allowed values, see the <a href="/maps/documentation/javascript/style-reference#stylers">style reference</a>.</div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
