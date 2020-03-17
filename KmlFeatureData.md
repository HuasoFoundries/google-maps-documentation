
<devsite-heading text=" KmlFeatureData interface" for="KmlFeatureData" level="h2" link="" toc="" back-to-top=""><h2 id="KmlFeatureData" is-upgraded="">KmlFeatureData interface</h2></devsite-heading>
<p>
<code translate="no" dir="ltr"><span itemprop="path">google.maps</span>.<span itemprop="name">KmlFeatureData</span></code>
interface
</p>
<p>Data for a single KML feature in JSON format, returned when a KML feature is clicked. The data contained in this object mirrors that associated with the feature in the KML or GeoRSS markup in which it is declared.</p>
<div class="devsite-table-wrapper"><table class="properties responsive" summary="interface KmlFeatureData - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="KmlFeatureData.author">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#KmlFeatureData.author"><span>author</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr"><a href="KmlAuthor.md">KmlAuthor</a></code></div>
<div class="desc">The feature's <code translate="no" dir="ltr">&lt;atom:author&gt;</code>, extracted from the layer markup (if specified).</div></td>
</tr>
<tr id="KmlFeatureData.description">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#KmlFeatureData.description"><span>description</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">string</code></div>
<div class="desc">The feature's <code translate="no" dir="ltr">&lt;description&gt;</code>, extracted from the layer markup.</div></td>
</tr>
<tr id="KmlFeatureData.id">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#KmlFeatureData.id"><span>id</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">string</code></div>
<div class="desc">The feature's <code translate="no" dir="ltr">&lt;id&gt;</code>, extracted from the layer markup. If no <code translate="no" dir="ltr">&lt;id&gt;</code> has been specified, a unique ID will be generated for this feature.</div></td>
</tr>
<tr id="KmlFeatureData.infoWindowHtml">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#KmlFeatureData.infoWindowHtml"><span>infoWindowHtml</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">string</code></div>
<div class="desc">The feature's balloon styled text, if set.</div></td>
</tr>
<tr id="KmlFeatureData.name">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#KmlFeatureData.name"><span>name</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">string</code></div>
<div class="desc">The feature's <code translate="no" dir="ltr">&lt;name&gt;</code>, extracted from the layer markup.</div></td>
</tr>
<tr id="KmlFeatureData.snippet">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#KmlFeatureData.snippet"><span>snippet</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">string</code></div>
<div class="desc">The feature's <code translate="no" dir="ltr">&lt;Snippet&gt;</code>, extracted from the layer markup.</div></td>
</tr>
</tbody>
</table></div>
