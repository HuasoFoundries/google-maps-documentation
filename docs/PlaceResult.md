<h2 id="PlaceResult"> PlaceResult object specification </h2><p>
<code><span itemprop="path">google.maps.places</span>.<span itemprop="name">PlaceResult</span></code>
object specification
</p><p>Defines information about a Place.</p><h4>Library</h4><p>places</p><div class="devsite-table-wrapper"><table class="properties responsive" summary="interface PlaceResult - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>address_components</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/GeocoderAddressComponent.md">GeocoderAddressComponent</a>&gt;</code></div>
<div class="desc">The collection of address components for this Place's location.</div></td>
</tr>
<tr>
<td><code><span>aspects</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PlaceAspectRating.md">PlaceAspectRating</a>&gt;</code></div>
<div class="desc">The rated aspects of this Place, based on Google and Zagat user reviews. The ratings are on a scale of 0 to 30.</div></td>
</tr>
<tr>
<td><code><span>formatted_address</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">The Place's full address.</div></td>
</tr>
<tr>
<td><code><span>formatted_phone_number</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">The Place's phone number, formatted according to the <a href="http://en.wikipedia.org/wiki/Local_conventions_for_writing_telephone_numbers"> number's regional convention</a>.</div></td>
</tr>
<tr>
<td><code><span>geometry</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PlaceGeometry.md">PlaceGeometry</a></code></div>
<div class="desc">The Place's geometry-related information.</div></td>
</tr>
<tr>
<td><code><span>html_attributions</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>Array&lt;string&gt;</code></div>
<div class="desc">Attribution text to be displayed for this Place result.</div></td>
</tr>
<tr>
<td><code><span>icon</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">URL to an image resource that can be used to represent this Place's category.</div></td>
</tr>
<tr>
<td><code><span>international_phone_number</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">The Place's phone number in international format. International format includes the country code, and is prefixed with the plus (+) sign.</div></td>
</tr>
<tr>
<td><code><span>name</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">The Place's name. Note: In the case of user entered Places, this is the raw text, as typed by the user. Please exercise caution when using this data, as malicious users may try to use it as a vector for code injection attacks (See <a href="http://en.wikipedia.org/wiki/Code_injection"> http://en.wikipedia.org/wiki/Code_injection</a>).</div></td>
</tr>
<tr>
<td><code><span>permanently_closed</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>boolean</code></div>
<div class="desc">A flag indicating whether the Place is permanently closed. If the place is not permanently closed, the flag is not present in search or details responses.</div></td>
</tr>
<tr>
<td><code><span>photos</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PlacePhoto.md">PlacePhoto</a>&gt;</code></div>
<div class="desc">Photos of this Place. The collection will contain up to ten <code>PlacePhoto</code> objects.</div></td>
</tr>
<tr>
<td><code><span>place_id</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">A unique identifier for a place.</div></td>
</tr>
<tr>
<td><code><span>price_level</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">The price level of the Place, on a scale of 0 to 4. Price levels are interpreted as follows: <ul style="list-style-type: none;"> <li><code>0</code>: Free </li><li><code>1</code>: Inexpensive </li><li><code>2</code>: Moderate </li><li><code>3</code>: Expensive </li><li><code>4</code>: Very Expensive </li></ul></div></td>
</tr>
<tr>
<td><code><span>rating</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">A rating, between 1.0 to 5.0, based on user reviews of this Place.</div></td>
</tr>
<tr>
<td><code><span>reviews</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>Array&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/PlaceReview.md">PlaceReview</a>&gt;</code></div>
<div class="desc">A list of reviews of this Place.</div></td>
</tr>
<tr>
<td><code><span>types</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>Array&lt;string&gt;</code></div>
<div class="desc">An array of <a href="https://developers.google.com/places/supported_types">types for this Place</a> (e.g., <code>["political", "locality"]</code> or <code>["restaurant", "establishment"]</code>).</div></td>
</tr>
<tr>
<td><code><span>url</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">URL of the official Google page for this place. This is the Google-owned page that contains the best available information about the place.</div></td>
</tr>
<tr>
<td><code><span>utc_offset</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>number</code></div>
<div class="desc">The offset from UTC of the Place's current timezone, in minutes. For example, Sydney, Australia in daylight savings is 11 hours ahead of UTC, so the utc_offset will be 660. For timezones behind UTC, the offset is negative. For example, utc_offest is -60 for Cape Verde.</div></td>
</tr>
<tr>
<td><code><span>vicinity</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">A fragment of the Place's address for disambiguation (usually street name and locality).</div></td>
</tr>
<tr>
<td><code><span>website</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">The authoritative website for this Place, such as a business' homepage.</div></td>
</tr>
</tbody>
</table></div>