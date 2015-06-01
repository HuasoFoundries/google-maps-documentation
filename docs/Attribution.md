<h2 id="Attribution"> Attribution object specification </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">Attribution</span></code>
object specification
</p><div class="devsite-table-wrapper"><table class="properties responsive" summary="interface Attribution - Properties">
<thead>
<tr><th colspan="2">Properties</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>iosDeepLinkId</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">The iOS deep link to associate with this place when a user saves the place. When the user views the place in an iOS app, this URL will serve as the link on the <code>source</code> string. If there is no deep link or the app that handles the deep link is not present, the <code>webURL</code> will be used instead.</div></td>
</tr>
<tr>
<td><code><span>source</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">The source (origin) to associate with this place when it is saved by a user. For example, this could be the name of your website or application. The user who saved the place will see this source when they view the place in Google Maps. <code>source</code> is required for an <code>Attribution</code> to be considered valid. If it is not provided an error will be thrown.</div></td>
</tr>
<tr>
<td><code><span>webUrl</span></code></td>
<td><div><strong>Type:</strong>&nbsp; <code>string</code></div>
<div class="desc">The URL (http or https) of the page to associate with this place when a user saves the place. When the user views the place in a desktop or Android app, this URL will serve as the link on the <code>source</code> string. When the user views the place in an iOS app, and there is no deep link provided or the app that handles the deep link is not present, this URL will serve as the link on the <code>source</code> string.</div></td>
</tr>
</tbody>
</table></div>