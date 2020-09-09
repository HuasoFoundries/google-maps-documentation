[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/event.html)

event namespace
---------------

google.maps.event namespace

Static Methods

[undefined](#event.addDomListener)

addDomListener(instance, eventName, handler\[, capture\])

**Parameters:** 

*   instance:  Object
*   eventName:  string
*   handler:  Function
*   capture:  boolean optional

**Return Value:**  [MapsEventListener](/maps/documentation/javascript/reference/3.40/event#MapsEventListener)

Cross browser event handler registration. This listener is removed by calling removeListener(handle) for the handle that is returned by this function.

[undefined](#event.addDomListenerOnce)

addDomListenerOnce(instance, eventName, handler\[, capture\])

**Parameters:** 

*   instance:  Object
*   eventName:  string
*   handler:  Function
*   capture:  boolean optional

**Return Value:**  [MapsEventListener](/maps/documentation/javascript/reference/3.40/event#MapsEventListener)

Wrapper around addDomListener that removes the listener after the first event.

[undefined](#event.addListener)

addListener(instance, eventName, handler)

**Parameters:** 

*   instance:  Object
*   eventName:  string
*   handler:  Function

**Return Value:**  [MapsEventListener](/maps/documentation/javascript/reference/3.40/event#MapsEventListener)

Adds the given listener function to the given event name for the given object instance. Returns an identifier for this listener that can be used with removeListener().

[undefined](#event.addListenerOnce)

addListenerOnce(instance, eventName, handler)

**Parameters:** 

*   instance:  Object
*   eventName:  string
*   handler:  Function

**Return Value:**  [MapsEventListener](/maps/documentation/javascript/reference/3.40/event#MapsEventListener)

Like addListener, but the handler removes itself after handling the first event.

[undefined](#event.clearInstanceListeners)

clearInstanceListeners(instance)

**Parameters:** 

*   instance:  Object

**Return Value:**  None

Removes all listeners for all events for the given instance.

[undefined](#event.clearListeners)

clearListeners(instance, eventName)

**Parameters:** 

*   instance:  Object
*   eventName:  string

**Return Value:**  None

Removes all listeners for the given event for the given instance.

[undefined](#event.removeListener)

removeListener(listener)

**Parameters:** 

*   listener:  [MapsEventListener](/maps/documentation/javascript/reference/3.40/event#MapsEventListener)

**Return Value:**  None

Removes the given listener, which should have been returned by addListener above. Equivalent to calling listener.remove().

[undefined](#event.trigger)

trigger(instance, eventName, eventArgs)

**Parameters:** 

*   instance:  Object
*   eventName:  string
*   eventArgs:  ...\*

**Return Value:**  None

Triggers the given event. All arguments after eventName are passed as arguments to the listeners.