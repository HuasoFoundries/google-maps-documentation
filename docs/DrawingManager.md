
<h2 id="DrawingManager">DrawingManager class</h2>
<p>
<code><span itemprop="path">google.maps.drawing</span>.<span itemprop="name">DrawingManager</span></code>
class
</p>
<p>Allows users to draw markers, polygons, polylines, rectangles, and circles on the map. The <code>DrawingManager</code>'s drawing mode defines the type of overlay that will be created by the user. Adds a control to the map, allowing the user to switch drawing mode.</p>
<p>This class extends
<code><a href="MVCObject.md">MVCObject</a></code>.
</p>
<h4>Library</h4>
<p>drawing</p>
<div class="devsite-table-wrapper"><table class="constructors responsive" summary="class DrawingManager - Constructor">
<thead>
<tr><th colspan="2" id="DrawingManager.constructor">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code><a class="secret-link" href="#DrawingManager.constructor"><span>DrawingManager</span></a></code></td>
<td><div><code>DrawingManager([options])</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>options</code> (optional):&nbsp; <code><a href="DrawingManagerOptions.md">DrawingManagerOptions</a></code></li>
</ul></div>
<div class="desc">Creates a <code>DrawingManager</code> that allows users to draw overlays on the map, and switch between the type of overlay to be drawn with a drawing control.</div></td>
</tr>
</tbody>
</table></div>
<div class="devsite-table-wrapper"><table class="methods responsive" summary="class DrawingManager - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr id="DrawingManager.getDrawingMode">
<td itemprop="property"><code><a class="secret-link" href="#DrawingManager.getDrawingMode"><span>getDrawingMode</span></a></code></td>
<td><div><code>getDrawingMode()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="OverlayType.md">OverlayType</a></code></div>
<div class="desc">Returns the <code>DrawingManager</code>'s drawing mode.</div></td>
</tr>
<tr id="DrawingManager.getMap">
<td itemprop="property"><code><a class="secret-link" href="#DrawingManager.getMap"><span>getMap</span></a></code></td>
<td><div><code>getMap()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code><a href="Map.md">Map</a></code></div>
<div class="desc">Returns the <code>Map</code> to which the <code>DrawingManager</code> is attached, which is the <code>Map</code> on which the overlays created will be placed.</div></td>
</tr>
<tr id="DrawingManager.setDrawingMode">
<td itemprop="property"><code><a class="secret-link" href="#DrawingManager.setDrawingMode"><span>setDrawingMode</span></a></code></td>
<td><div><code>setDrawingMode(drawingMode)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>drawingMode</code>:&nbsp; <code><a href="OverlayType.md">OverlayType</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Changes the <code>DrawingManager</code>'s drawing mode, which defines the type of overlay to be added on the map. Accepted values are <code>'marker'</code>, <code>'polygon'</code>, <code>'polyline'</code>, <code>'rectangle'</code>, <code>'circle'</code>, or <code>null</code>. A drawing mode of <code>null</code> means that the user can interact with the map as normal, and clicks do not draw anything.</div></td>
</tr>
<tr id="DrawingManager.setMap">
<td itemprop="property"><code><a class="secret-link" href="#DrawingManager.setMap"><span>setMap</span></a></code></td>
<td><div><code>setMap(map)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>map</code>:&nbsp; <code><a href="Map.md">Map</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Attaches the <code>DrawingManager</code> object to the specified <code>Map</code>.</div></td>
</tr>
<tr id="DrawingManager.setOptions">
<td itemprop="property"><code><a class="secret-link" href="#DrawingManager.setOptions"><span>setOptions</span></a></code></td>
<td><div><code>setOptions(options)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>options</code>:&nbsp; <code><a href="DrawingManagerOptions.md">DrawingManagerOptions</a></code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Sets the <code>DrawingManager</code>'s options.</div></td>
</tr>
</tbody>
</table></div>
<div class="devsite-table-wrapper"><table class="details responsive" summary="class DrawingManager - Events">
<thead>
<tr><th colspan="2">Events</th>
</tr></thead>
<tbody>
<tr id="DrawingManager.circlecomplete">
<td itemprop="property"><code><a class="secret-link" href="#DrawingManager.circlecomplete"><span>circlecomplete</span></a></code></td>
<td><div><code>function(circle)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>circle</code>:&nbsp; <code><a href="Circle.md">Circle</a></code></li>
</ul></div>
<div class="desc">This event is fired when the user has finished drawing a circle.</div></td>
</tr>
<tr id="DrawingManager.markercomplete">
<td itemprop="property"><code><a class="secret-link" href="#DrawingManager.markercomplete"><span>markercomplete</span></a></code></td>
<td><div><code>function(marker)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>marker</code>:&nbsp; <code><a href="Marker.md">Marker</a></code></li>
</ul></div>
<div class="desc">This event is fired when the user has finished drawing a marker.</div></td>
</tr>
<tr id="DrawingManager.overlaycomplete">
<td itemprop="property"><code><a class="secret-link" href="#DrawingManager.overlaycomplete"><span>overlaycomplete</span></a></code></td>
<td><div><code>function(event)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>event</code>:&nbsp; <code><a href="OverlayCompleteEvent.md">OverlayCompleteEvent</a></code></li>
</ul></div>
<div class="desc">This event is fired when the user has finished drawing an overlay of any type.</div></td>
</tr>
<tr id="DrawingManager.polygoncomplete">
<td itemprop="property"><code><a class="secret-link" href="#DrawingManager.polygoncomplete"><span>polygoncomplete</span></a></code></td>
<td><div><code>function(polygon)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>polygon</code>:&nbsp; <code><a href="Polygon.md">Polygon</a></code></li>
</ul></div>
<div class="desc">This event is fired when the user has finished drawing a polygon.</div></td>
</tr>
<tr id="DrawingManager.polylinecomplete">
<td itemprop="property"><code><a class="secret-link" href="#DrawingManager.polylinecomplete"><span>polylinecomplete</span></a></code></td>
<td><div><code>function(polyline)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>polyline</code>:&nbsp; <code><a href="Polyline.md">Polyline</a></code></li>
</ul></div>
<div class="desc">This event is fired when the user has finished drawing a polyline.</div></td>
</tr>
<tr id="DrawingManager.rectanglecomplete">
<td itemprop="property"><code><a class="secret-link" href="#DrawingManager.rectanglecomplete"><span>rectanglecomplete</span></a></code></td>
<td><div><code>function(rectangle)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>rectangle</code>:&nbsp; <code><a href="Rectangle.md">Rectangle</a></code></li>
</ul></div>
<div class="desc">This event is fired when the user has finished drawing a rectangle.</div></td>
</tr>
</tbody>
</table></div>
