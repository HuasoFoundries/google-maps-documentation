
<devsite-heading text=" HeatmapLayerOptions interface" for="HeatmapLayerOptions" level="h2" link="" toc="" back-to-top=""><h2 id="HeatmapLayerOptions" is-upgraded="">HeatmapLayerOptions interface</h2></devsite-heading>
<p>
<code translate="no" dir="ltr"><span itemprop="path">google.maps.visualization</span>.<span itemprop="name">HeatmapLayerOptions</span></code>
interface
</p>
<p>This object defines the properties that can be set on a <code translate="no" dir="ltr">HeatmapLayer</code> object.</p>
<devsite-heading text="Library" for="library_1" level="h4" link=""><h4 is-upgraded="" id="library_1">Library</h4></devsite-heading>
<p>visualization</p>
<div class="devsite-table-wrapper"><table class="properties responsive" summary="interface HeatmapLayerOptions - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="HeatmapLayerOptions.data">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#HeatmapLayerOptions.data"><span>data</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr"><a href="MVCArray.md">MVCArray</a>&lt;<a href="LatLng.md">LatLng</a>|<a href="WeightedLocation.md">WeightedLocation</a>&gt;|Array&lt;<a href="LatLng.md">LatLng</a>|<a href="WeightedLocation.md">WeightedLocation</a>&gt; <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The data points to display. Required.</div></td>
</tr>
<tr id="HeatmapLayerOptions.dissipating">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#HeatmapLayerOptions.dissipating"><span>dissipating</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">boolean <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">Specifies whether heatmaps dissipate on zoom. By default, the radius of influence of a data point is specified by the radius option only. When dissipating is disabled, the radius option is interpreted as a radius at zoom level 0.</div></td>
</tr>
<tr id="HeatmapLayerOptions.gradient">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#HeatmapLayerOptions.gradient"><span>gradient</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">Array&lt;string&gt; <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The color gradient of the heatmap, specified as an array of CSS color strings. All CSS3 colors are supported except for extended named colors.</div></td>
</tr>
<tr id="HeatmapLayerOptions.map">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#HeatmapLayerOptions.map"><span>map</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr"><a href="Map.md">Map</a> <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The map on which to display the layer.</div></td>
</tr>
<tr id="HeatmapLayerOptions.maxIntensity">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#HeatmapLayerOptions.maxIntensity"><span>maxIntensity</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">number <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The maximum intensity of the heatmap. By default, heatmap colors are dynamically scaled according to the greatest concentration of points at any particular pixel on the map. This property allows you to specify a fixed maximum.</div></td>
</tr>
<tr id="HeatmapLayerOptions.opacity">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#HeatmapLayerOptions.opacity"><span>opacity</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">number <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The opacity of the heatmap, expressed as a number between 0 and 1. Defaults to 0.6.</div></td>
</tr>
<tr id="HeatmapLayerOptions.radius">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#HeatmapLayerOptions.radius"><span>radius</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">number <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">The radius of influence for each data point, in pixels.</div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
