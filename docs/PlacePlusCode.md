
<devsite-heading text=" PlacePlusCode interface" for="PlacePlusCode" level="h2" link="" toc="" back-to-top=""><h2 id="PlacePlusCode" is-upgraded="">PlacePlusCode interface </h2></devsite-heading>
<p>
<code translate="no" dir="ltr"><span itemprop="path">google.maps.places</span>.<span itemprop="name">PlacePlusCode</span></code>
interface
</p>
<p>Defines Open Location Codes or "<a href="https://plus.codes/">plus codes</a>" for a Place. Plus codes can be used as a replacement for street addresses in places where they do not exist (where buildings are not numbered or streets are not named).</p>
<devsite-heading text="Library" for="library_16" level="h4" link=""><h4 is-upgraded="" id="library_16">Library<button role="button" class="devsite-heading-link button-flat material-icons" data-title="Copy link to this section"></button></h4></devsite-heading>
<p>places</p>
<div class="devsite-table-wrapper"><table class="properties responsive" summary="interface PlacePlusCode - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr id="PlacePlusCode.compound_code">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#PlacePlusCode.compound_code"><span>compound_code</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">string <span class="optional-type-annotation">optional</span></code></div>
<div class="desc">A <a href="https://plus.codes/">plus code</a> with a 1/8000th of a degree by 1/8000th of a degree area where the first four characters (the area code) are dropped and replaced with a locality description. For example, <code translate="no" dir="ltr">"9G8F+5W Zurich, Switzerland"</code>. If no suitable locality that can be found to shorten the code then this field is omitted.</div></td>
</tr>
<tr id="PlacePlusCode.global_code">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#PlacePlusCode.global_code"><span>global_code</span></a></code></td>
<td><div><strong>Type:</strong>&nbsp; <code translate="no" dir="ltr">string</code></div>
<div class="desc">A <a href="https://plus.codes/">plus code</a> with a 1/8000th of a degree by 1/8000th of a degree area. For example, <code translate="no" dir="ltr">"8FVC9G8F+5W"</code>.</div></td>
</tr>
</tbody>
</table></div>
<script src="replace_links.js"></script>
