<h2 id="Attribution">
google.maps.Attribution
object specification
</h2><h3 id="devsite_header_151">Properties</h3><table summary="interface Attribution - Properties" width="100%">
<thead>
<tr><th>Properties</th>
<th>Type</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>iosDeepLinkId</code></td>
<td><code>string</code></td>
<td>The iOS deep link to associate with this place when a user saves the place. When the user views the place in an iOS app, this URL will serve as the link on the <code>source</code> string. If there is no deep link or the app that handles the deep link is not present, the <code>webURL</code> will be used instead.</td>
</tr>
<tr>
<td><code>source</code></td>
<td><code>string</code></td>
<td>The source (origin) to associate with this place when it is saved by a user. For example, this could be the name of your website or application. The user who saved the place will see this source when they view the place in Google Maps. <code>source</code> is required for an <code>Attribution</code> to be considered valid. If it is not provided an error will be thrown.</td>
</tr>
<tr>
<td><code>webUrl</code></td>
<td><code>string</code></td>
<td>The URL (http or https) of the page to associate with this place when a user saves the place. When the user views the place in a desktop or Android app, this URL will serve as the link on the <code>source</code> string. When the user views the place in an iOS app, and there is no deep link provided or the app that handles the deep link is not present, this URL will serve as the link on the <code>source</code> string.</td>
</tr>
</tbody>
</table>