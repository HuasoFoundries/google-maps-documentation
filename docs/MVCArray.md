<h2 id="MVCArray"> MVCArray class </h2><p>
<code><span itemprop="path">google.maps</span>.<span itemprop="name">MVCArray</span></code>
class
</p><p>This class extends
<code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/MVCObject.md">MVCObject</a></code>.
</p><div class="devsite-table-wrapper"><table class="constructors responsive" summary="class MVCArray - Constructor">
<thead>
<tr><th colspan="2">Constructor</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>MVCArray(<wbr>array?:Array)</span></code></td>
<td>A mutable MVC Array.</td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="methods responsive" summary="class MVCArray - Methods">
<thead>
<tr><th colspan="2">Methods</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>clear()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Removes all elements from the array.</div></td>
</tr>
<tr>
<td><code><span>forEach(<wbr>callback:function(<wbr>*,<wbr> number))</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Iterate over each element, calling the provided callback. The callback is called for each element like: callback(element, index).</div></td>
</tr>
<tr>
<td><code><span>getArray()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>Array</code></div>
<div class="desc">Returns a reference to the underlying Array. Warning: if the Array is mutated, no events will be fired by this object.</div></td>
</tr>
<tr>
<td><code><span>getAt(<wbr>i:number)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>*</code></div>
<div class="desc">Returns the element at the specified index.</div></td>
</tr>
<tr>
<td><code><span>getLength()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>number</code></div>
<div class="desc">Returns the number of elements in this array.</div></td>
</tr>
<tr>
<td><code><span>insertAt(<wbr>i:number,<wbr> elem:*)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Inserts an element at the specified index.</div></td>
</tr>
<tr>
<td><code><span>pop()</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>*</code></div>
<div class="desc">Removes the last element of the array and returns that element.</div></td>
</tr>
<tr>
<td><code><span>push(<wbr>elem:*)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>number</code></div>
<div class="desc">Adds one element to the end of the array and returns the new length of the array.</div></td>
</tr>
<tr>
<td><code><span>removeAt(<wbr>i:number)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>*</code></div>
<div class="desc">Removes an element from the specified index.</div></td>
</tr>
<tr>
<td><code><span>setAt(<wbr>i:number,<wbr> elem:*)</span></code></td>
<td><div><strong>Return Value:</strong>&nbsp; <code>None</code></div>
<div class="desc">Sets an element at the specified index.</div></td>
</tr>
</tbody>
</table></div><div class="devsite-table-wrapper"><table class="details responsive" summary="class MVCArray - Events">
<thead>
<tr><th colspan="2">Events</th>
</tr></thead>
<tbody>
<tr>
<td><code><span>insert_at</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code>number</code></div>
<div class="desc">This event is fired when <code>insertAt()</code> is called. The event passes the index that was passed to <code>insertAt()</code>.</div></td>
</tr>
<tr>
<td><code><span>remove_at</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code>number, *</code></div>
<div class="desc">This event is fired when <code>removeAt()</code> is called. The event passes the index that was passed to <code>removeAt()</code> and the element that was removed from the array.</div></td>
</tr>
<tr>
<td><code><span>set_at</span></code></td>
<td><div><strong>Arguments:</strong>&nbsp; <code>number, *</code></div>
<div class="desc">This event is fired when <code>setAt()</code> is called. The event passes the index that was passed to <code>setAt()</code> and the element that was previously in the array at that index.</div></td>
</tr>
</tbody>
</table></div>