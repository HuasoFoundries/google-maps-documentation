<h2 id="MVCArray"> MVCArray class </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">MVCArray&lt;T&gt;</span></code>
class
</p><p>This class extends
<code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MVCObject.md">MVCObject</a></code>.
</p><div class="devsite-table-wrapper"><table class="constructors responsive" summary="class MVCArray - Constructor">
<thead>
<tr><th colspan="2" id="MVCArray.constructor">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>MVCArray</span></code></td>
<td><div><code>MVCArray([array])</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>array</code> (optional):&nbsp; <code>Array&lt;T&gt;</code></li>
</ul></div>
<div class="desc">A mutable MVC Array.</div></td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="methods responsive" summary="class MVCArray - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr id="MVCArray.clear">
<td><code><span>clear</span></code></td>
<td><div><code>clear()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Removes all elements from the array.</div></td>
</tr>
<tr id="MVCArray.forEach">
<td><code><span>forEach</span></code></td>
<td><div><code>forEach(callback)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>callback</code>:&nbsp; <code>function(T, number)</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Iterate over each element, calling the provided callback. The callback is called for each element like: callback(element, index).</div></td>
</tr>
<tr id="MVCArray.getArray">
<td><code><span>getArray</span></code></td>
<td><div><code>getArray()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>Array&lt;T&gt;</code></div>
<div class="desc">Returns a reference to the underlying Array. Warning: if the Array is mutated, no events will be fired by this object.</div></td>
</tr>
<tr id="MVCArray.getAt">
<td><code><span>getAt</span></code></td>
<td><div><code>getAt(i)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>i</code>:&nbsp; <code>number</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>T</code></div>
<div class="desc">Returns the element at the specified index.</div></td>
</tr>
<tr id="MVCArray.getLength">
<td><code><span>getLength</span></code></td>
<td><div><code>getLength()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>number</code></div>
<div class="desc">Returns the number of elements in this array.</div></td>
</tr>
<tr id="MVCArray.insertAt">
<td><code><span>insertAt</span></code></td>
<td><div><code>insertAt(i, elem)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>i</code>:&nbsp; <code>number</code></li>
<li><code>elem</code>:&nbsp; <code>T</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Inserts an element at the specified index.</div></td>
</tr>
<tr id="MVCArray.pop">
<td><code><span>pop</span></code></td>
<td><div><code>pop()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>T</code></div>
<div class="desc">Removes the last element of the array and returns that element.</div></td>
</tr>
<tr id="MVCArray.push">
<td><code><span>push</span></code></td>
<td><div><code>push(elem)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>elem</code>:&nbsp; <code>T</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>number</code></div>
<div class="desc">Adds one element to the end of the array and returns the new length of the array.</div></td>
</tr>
<tr id="MVCArray.removeAt">
<td><code><span>removeAt</span></code></td>
<td><div><code>removeAt(i)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>i</code>:&nbsp; <code>number</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code>T</code></div>
<div class="desc">Removes an element from the specified index.</div></td>
</tr>
<tr id="MVCArray.setAt">
<td><code><span>setAt</span></code></td>
<td><div><code>setAt(i, elem)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code>i</code>:&nbsp; <code>number</code></li>
<li><code>elem</code>:&nbsp; <code>T</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Sets an element at the specified index.</div></td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="details responsive" summary="class MVCArray - Events">
<thead>
<tr><th colspan="2">Events</th>
</tr></thead>
<tbody>
<tr id="MVCArray.insert_at">
<td><code><span>insert_at</span></code></td>
<td><div><code>function(index)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>index</code>:&nbsp; <code>number</code></li>
</ul></div>
<div class="desc">This event is fired when <code>insertAt()</code> is called. The event passes the index that was passed to <code>insertAt()</code>.</div></td>
</tr>
<tr id="MVCArray.remove_at">
<td><code><span>remove_at</span></code></td>
<td><div><code>function(index, removed)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>index</code>:&nbsp; <code>number</code></li>
<li><code>removed</code>:&nbsp; <code>T</code></li>
</ul></div>
<div class="desc">This event is fired when <code>removeAt()</code> is called. The event passes the index that was passed to <code>removeAt()</code> and the element that was removed from the array.</div></td>
</tr>
<tr id="MVCArray.set_at">
<td><code><span>set_at</span></code></td>
<td><div><code>function(index, previous)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code>index</code>:&nbsp; <code>number</code></li>
<li><code>previous</code>:&nbsp; <code>T</code></li>
</ul></div>
<div class="desc">This event is fired when <code>setAt()</code> is called. The event passes the index that was passed to <code>setAt()</code> and the element that was previously in the array at that index.</div></td>
</tr>
</tbody>
</table></div>