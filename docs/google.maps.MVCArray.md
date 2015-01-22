<h2 id="MVCArray">
google.maps.MVCArray
class
</h2><p>This class extends
<code><a href="https://github.com/amenadiel/google-maps-documentation/blob/master/docs/google.maps.MVCObject.md">MVCObject</a></code>.
</p><h3 id="devsite_header_235">Constructor</h3><table summary="class MVCArray - Constructor" width="100%">
<thead>
<tr><th>Constructor</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>MVCArray(array?:Array)</code></td>
<td>A mutable MVC Array.</td>
</tr>
</tbody>
</table><h3 id="devsite_header_236">Methods</h3><table summary="class MVCArray - Methods" width="100%">
<thead>
<tr><th>Methods</th>
<th>Return Value</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>clear()</code></td>
<td><code>None</code></td>
<td>Removes all elements from the array.</td>
</tr>
<tr>
<td><code>forEach(callback:function(*, number))</code></td>
<td><code>None</code></td>
<td>Iterate over each element, calling the provided callback. The callback is called for each element like: callback(element, index).</td>
</tr>
<tr>
<td><code>getArray()</code></td>
<td><code>Array</code></td>
<td>Returns a reference to the underlying Array. Warning: if the Array is mutated, no events will be fired by this object.</td>
</tr>
<tr>
<td><code>getAt(i:number)</code></td>
<td><code>*</code></td>
<td>Returns the element at the specified index.</td>
</tr>
<tr>
<td><code>getLength()</code></td>
<td><code>number</code></td>
<td>Returns the number of elements in this array.</td>
</tr>
<tr>
<td><code>insertAt(i:number, elem:*)</code></td>
<td><code>None</code></td>
<td>Inserts an element at the specified index.</td>
</tr>
<tr>
<td><code>pop()</code></td>
<td><code>*</code></td>
<td>Removes the last element of the array and returns that element.</td>
</tr>
<tr>
<td><code>push(elem:*)</code></td>
<td><code>number</code></td>
<td>Adds one element to the end of the array and returns the new length of the array.</td>
</tr>
<tr>
<td><code>removeAt(i:number)</code></td>
<td><code>*</code></td>
<td>Removes an element from the specified index.</td>
</tr>
<tr>
<td><code>setAt(i:number, elem:*)</code></td>
<td><code>None</code></td>
<td>Sets an element at the specified index.</td>
</tr>
</tbody>
</table><h3 id="devsite_header_237">Events</h3><table summary="class MVCArray - Events" width="100%">
<thead>
<tr><th>Events</th>
<th>Arguments</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td><code>insert_at</code></td>
<td><code>number</code></td>
<td>This event is fired when <code>insertAt()</code> is called. The event passes the index that was passed to <code>insertAt()</code>.</td>
</tr>
<tr>
<td><code>remove_at</code></td>
<td><code>number, *</code></td>
<td>This event is fired when <code>removeAt()</code> is called. The event passes the index that was passed to <code>removeAt()</code> and the element that was removed from the array.</td>
</tr>
<tr>
<td><code>set_at</code></td>
<td><code>number, *</code></td>
<td>This event is fired when <code>setAt()</code> is called. The event passes the index that was passed to <code>setAt()</code> and the element that was previously in the array at that index.</td>
</tr>
</tbody>
</table>