[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/MVCObject.html)

MVCObject class
---------------

google.maps.MVCObject class

Base class implementing KVO.  
  
The MVCObject constructor is guaranteed to be an empty function, and so you may inherit from MVCObject by simply writing MySubclass.prototype = new google.maps.MVCObject();. Unless otherwise noted, this is not true of other classes in the API, and inheriting from other classes in the API is not supported.

Constructor

[undefined](#MVCObject.constructor)

MVCObject()

**Parameters:**  None

Creates an MVCObject.

Methods

[undefined](#MVCObject.addListener)

addListener(eventName, handler)

**Parameters:** 

*   eventName:  string
*   handler:  Function

**Return Value:**  [MapsEventListener](/maps/documentation/javascript/reference/3.40/event#MapsEventListener)

Adds the given listener function to the given event name. Returns an identifier for this listener that can be used with google.maps.event.removeListener.

[undefined](#MVCObject.bindTo)

bindTo(key, target\[, targetKey, noNotify\])

**Parameters:** 

*   key:  string
*   target:  [MVCObject](/maps/documentation/javascript/reference/3.40/event#MVCObject)
*   targetKey:  string optional
*   noNotify:  boolean optional

**Return Value:**  None

Binds a View to a Model.

[undefined](#MVCObject.get)

get(key)

**Parameters:** 

*   key:  string

**Return Value:**  ?

Gets a value.

[undefined](#MVCObject.notify)

notify(key)

**Parameters:** 

*   key:  string

**Return Value:**  None

Notify all observers of a change on this property. This notifies both objects that are bound to the object's property as well as the object that it is bound to.

[undefined](#MVCObject.set)

set(key, value)

**Parameters:** 

*   key:  string
*   value:  \*

**Return Value:**  None

Sets a value.

[undefined](#MVCObject.setValues)

setValues(\[values\])

**Parameters:** 

*   values:  Object optional

**Return Value:**  None

Sets a collection of key-value pairs.

[undefined](#MVCObject.unbind)

unbind(key)

**Parameters:** 

*   key:  string

**Return Value:**  None

Removes a binding. Unbinding will set the unbound property to the current value. The object will not be notified, as the value has not changed.

[undefined](#MVCObject.unbindAll)

unbindAll()

**Parameters:**  None

**Return Value:**  None

Removes all bindings.