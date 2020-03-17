
<devsite-heading text=" MVCArray class" for="MVCArray" level="h2" link="" toc="" back-to-top=""><h2 id="MVCArray" is-upgraded="">MVCArray class</h2></devsite-heading>
<p>
<code translate="no" dir="ltr"><span itemprop="path">google.maps</span>.<span itemprop="name">MVCArray&lt;T&gt;</span></code>
class
</p>
<p>This class extends
<code translate="no" dir="ltr"><a href="MVCObject.md">MVCObject</a></code>.
</p>
<div class="devsite-table-wrapper"><table class="constructors responsive" summary="class MVCArray - Constructor">
<thead>
<tr><th colspan="2" id="MVCArray.constructor">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code translate="no" dir="ltr"><a class="secret-link" href="#MVCArray.constructor"><span>MVCArray</span></a></code></td>
<td><div><code translate="no" dir="ltr">MVCArray([array])</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">array</code>:&nbsp; <code translate="no" dir="ltr">Array&lt;T&gt; <span class="optional-type-annotation">optional</span></code></li>
</ul></div>
<div class="desc">A mutable MVC Array.</div></td>
</tr>
</tbody>
</table></div>
<div class="devsite-table-wrapper"><table class="methods responsive" summary="class MVCArray - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr id="MVCArray.clear">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#MVCArray.clear"><span>clear</span></a></code></td>
<td><div><code translate="no" dir="ltr">clear()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Removes all elements from the array.</div></td>
</tr>
<tr id="MVCArray.forEach">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#MVCArray.forEach"><span>forEach</span></a></code></td>
<td><div><code translate="no" dir="ltr">forEach(callback)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">callback</code>:&nbsp; <code translate="no" dir="ltr">function(T, number)</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Iterate over each element, calling the provided callback. The callback is called for each element like: callback(element, index).</div></td>
</tr>
<tr id="MVCArray.getArray">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#MVCArray.getArray"><span>getArray</span></a></code></td>
<td><div><code translate="no" dir="ltr">getArray()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr">Array&lt;T&gt;</code></div>
<div class="desc">Returns a reference to the underlying Array. Warning: if the Array is mutated, no events will be fired by this object.</div></td>
</tr>
<tr id="MVCArray.getAt">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#MVCArray.getAt"><span>getAt</span></a></code></td>
<td><div><code translate="no" dir="ltr">getAt(i)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">i</code>:&nbsp; <code translate="no" dir="ltr">number</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr">T</code></div>
<div class="desc">Returns the element at the specified index.</div></td>
</tr>
<tr id="MVCArray.getLength">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#MVCArray.getLength"><span>getLength</span></a></code></td>
<td><div><code translate="no" dir="ltr">getLength()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr">number</code></div>
<div class="desc">Returns the number of elements in this array.</div></td>
</tr>
<tr id="MVCArray.insertAt">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#MVCArray.insertAt"><span>insertAt</span></a></code></td>
<td><div><code translate="no" dir="ltr">insertAt(i, elem)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">i</code>:&nbsp; <code translate="no" dir="ltr">number</code></li>
<li><code translate="no" dir="ltr">elem</code>:&nbsp; <code translate="no" dir="ltr">T</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Inserts an element at the specified index.</div></td>
</tr>
<tr id="MVCArray.pop">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#MVCArray.pop"><span>pop</span></a></code></td>
<td><div><code translate="no" dir="ltr">pop()</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; None</div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr">T</code></div>
<div class="desc">Removes the last element of the array and returns that element.</div></td>
</tr>
<tr id="MVCArray.push">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#MVCArray.push"><span>push</span></a></code></td>
<td><div><code translate="no" dir="ltr">push(elem)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">elem</code>:&nbsp; <code translate="no" dir="ltr">T</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr">number</code></div>
<div class="desc">Adds one element to the end of the array and returns the new length of the array.</div></td>
</tr>
<tr id="MVCArray.removeAt">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#MVCArray.removeAt"><span>removeAt</span></a></code></td>
<td><div><code translate="no" dir="ltr">removeAt(i)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">i</code>:&nbsp; <code translate="no" dir="ltr">number</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; <code translate="no" dir="ltr">T</code></div>
<div class="desc">Removes an element from the specified index.</div></td>
</tr>
<tr id="MVCArray.setAt">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#MVCArray.setAt"><span>setAt</span></a></code></td>
<td><div><code translate="no" dir="ltr">setAt(i, elem)</code></div>
<div class="desc"><strong>Parameters:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">i</code>:&nbsp; <code translate="no" dir="ltr">number</code></li>
<li><code translate="no" dir="ltr">elem</code>:&nbsp; <code translate="no" dir="ltr">T</code></li>
</ul></div>
<div class="desc"><strong>Return Value:</strong>&nbsp; None</div>
<div class="desc">Sets an element at the specified index.</div></td>
</tr>
</tbody>
</table></div>
<div class="devsite-table-wrapper"><table class="details responsive" summary="class MVCArray - Events">
<thead>
<tr><th colspan="2">Events</th>
</tr></thead>
<tbody>
<tr id="MVCArray.insert_at">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#MVCArray.insert_at"><span>insert_at</span></a></code></td>
<td><div><code translate="no" dir="ltr">function(index)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">index</code>:&nbsp; <code translate="no" dir="ltr">number</code></li>
</ul></div>
<div class="desc">This event is fired when <code translate="no" dir="ltr">insertAt()</code> is called. The event passes the index that was passed to <code translate="no" dir="ltr">insertAt()</code>.</div></td>
</tr>
<tr id="MVCArray.remove_at">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#MVCArray.remove_at"><span>remove_at</span></a></code></td>
<td><div><code translate="no" dir="ltr">function(index, removed)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">index</code>:&nbsp; <code translate="no" dir="ltr">number</code></li>
<li><code translate="no" dir="ltr">removed</code>:&nbsp; <code translate="no" dir="ltr">T</code></li>
</ul></div>
<div class="desc">This event is fired when <code translate="no" dir="ltr">removeAt()</code> is called. The event passes the index that was passed to <code translate="no" dir="ltr">removeAt()</code> and the element that was removed from the array.</div></td>
</tr>
<tr id="MVCArray.set_at">
<td itemprop="property"><code translate="no" dir="ltr"><a class="secret-link" href="#MVCArray.set_at"><span>set_at</span></a></code></td>
<td><div><code translate="no" dir="ltr">function(index, previous)</code></div>
<div class="desc"><strong>Arguments:</strong>&nbsp; <ul>
<li><code translate="no" dir="ltr">index</code>:&nbsp; <code translate="no" dir="ltr">number</code></li>
<li><code translate="no" dir="ltr">previous</code>:&nbsp; <code translate="no" dir="ltr">T</code></li>
</ul></div>
<div class="desc">This event is fired when <code translate="no" dir="ltr">setAt()</code> is called. The event passes the index that was passed to <code translate="no" dir="ltr">setAt()</code> and the element that was previously in the array at that index.</div></td>
</tr>
</tbody>
</table></div>
