<h2 id="PlaceResult">
google.maps.places.PlaceResult
object specification
</h2><p>Defines information about a Place.</p><h3>Library</h3><p>places</p><h3>Properties</h3><table summary="interface PlaceResult - Properties" width="100%">
<thead>
<tr><th>Properties</th>
<th>Type</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>address_components</code></td>
<td><code>Array.&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.GeocoderAddressComponent.md">GeocoderAddressComponent</a>&gt;</code></td>
<td>The collection of address components for this Place's location.</td>
</tr>
<tr>
<td><code>aspects</code></td>
<td><code>Array.&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.places.PlaceAspectRating.md">PlaceAspectRating</a>&gt;</code></td>
<td>The rated aspects of this Place, based on Google and Zagat user reviews. The ratings are on a scale of 0 to 30.</td>
</tr>
<tr>
<td><code>formatted_address</code></td>
<td><code>string</code></td>
<td>The Place's full address.</td>
</tr>
<tr>
<td><code>formatted_phone_number</code></td>
<td><code>string</code></td>
<td>The Place's phone number, formatted according to the <a href="http://en.wikipedia.org/wiki/Local_conventions_for_writing_telephone_numbers"> number's regional convention</a>.</td>
</tr>
<tr>
<td><code>geometry</code></td>
<td><code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.places.PlaceGeometry.md">PlaceGeometry</a></code></td>
<td>The Place's geometry-related information.</td>
</tr>
<tr>
<td><code>html_attributions</code></td>
<td><code>Array.&lt;string&gt;</code></td>
<td>Attribution text to be displayed for this Place result.</td>
</tr>
<tr>
<td><code>icon</code></td>
<td><code>string</code></td>
<td>URL to an image resource that can be used to represent this Place's category.</td>
</tr>
<tr>
<td><code>id</code></td>
<td><code>string</code></td>
<td>A unique identifier denoting this Place. This identifier may not be used to retrieve information about this Place, and to verify the identity of a Place across separate searches. As <code>id</code>s can occasionally change, it is recommended that the stored <code>id</code> for a Place be compared with the <code>id</code> returned in later Details requests for the same Place, and updated if necessary.</td>
</tr>
<tr>
<td><code>international_phone_number</code></td>
<td><code>string</code></td>
<td>The Place's phone number in international format. International format includes the country code, and is prefixed with the plus (+) sign.</td>
</tr>
<tr>
<td><code>name</code></td>
<td><code>string</code></td>
<td>The Place's name. Note: In the case of user entered Places, this is the raw text, as typed by the user. Please exercise caution when using this data, as malicious users may try to use it as a vector for code injection attacks (See <a href="http://en.wikipedia.org/wiki/Code_injection"> http://en.wikipedia.org/wiki/Code_injection</a>).</td>
</tr>
<tr>
<td><code>permanently_closed</code></td>
<td><code>boolean</code></td>
<td>A flag indicating whether the Place is permanently closed. If the place is not permanently closed, the flag is not present in search or details responses.</td>
</tr>
<tr>
<td><code>photos</code></td>
<td><code>Array.&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.places.PlacePhoto.md">PlacePhoto</a>&gt;</code></td>
<td>Photos of this Place. The collection will contain up to ten <code>PlacePhoto</code> objects.</td>
</tr>
<tr>
<td><code>price_level</code></td>
<td><code>number</code></td>
<td>The price level of the Place, on a scale of 0 to 4. Price levels are interpreted as follows: <table> <tbody><tr> <th>Value</th> <th>Description</th> </tr> <tr> <td>0</td> <td>Free</td> </tr> <tr> <td>1</td> <td>Inexpensive</td> </tr> <tr> <td>2</td> <td>Moderate</td> </tr> <tr> <td>3</td> <td>Expensive</td> </tr> <tr> <td>4</td> <td>Very Expensive</td> </tr> </tbody></table></td>
</tr>
<tr>
<td><code>rating</code></td>
<td><code>number</code></td>
<td>A rating, between 1.0 to 5.0, based on user reviews of this Place.</td>
</tr>
<tr>
<td><code>reference</code></td>
<td><code>string</code></td>
<td>An opaque string that may be used to retrieve up-to-date information about this Place (via <code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.places.PlacesService.md"> PlacesService</a>.getDetails()</code>). <code>reference</code> contains a unique token that you can use to retrieve additional information about this Place in a Place Details request. You can store this token and use it at any time in future to refresh cached data about this Place, but the same token is not guaranteed to be returned for any given Place across different searches.</td>
</tr>
<tr>
<td><code>reviews</code></td>
<td><code>Array.&lt;<a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.places.PlaceReview.md">PlaceReview</a>&gt;</code></td>
<td>A list of reviews of this Place.</td>
</tr>
<tr>
<td><code>types</code></td>
<td><code>Array.&lt;string&gt;</code></td>
<td>An array of types for this Place (e.g., <code>["political",&nbsp; "locality"]</code> or <code>["restaurant", "establishment"]</code>).</td>
</tr>
<tr>
<td><code>url</code></td>
<td><code>string</code></td>
<td>URL of the associated Google Place Page.</td>
</tr>
<tr>
<td><code>vicinity</code></td>
<td><code>string</code></td>
<td>A fragment of the Place's address for disambiguation (usually street name and locality).</td>
</tr>
<tr>
<td><code>website</code></td>
<td><code>string</code></td>
<td>The authoritative website for this Place, such as a business' homepage.</td>
</tr>
</tbody>
</table>