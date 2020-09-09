[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/Data.Feature.html)

Data.Feature class
------------------

google.maps.Data.Feature class

A feature has a geometry, an id, and a set of properties.

Constructor

[undefined](#Data.Feature.constructor)

Data.Feature(\[options\])

**Parameters:** 

*   options:  [Data.FeatureOptions](Data.md) optional

Constructs a Feature with the given options.

Methods

[undefined](#Data.Feature.forEachProperty)

forEachProperty(callback)

**Parameters:** 

*   callback:  function(\*, string)

**Return Value:**  None

Repeatedly invokes the given function, passing a property value and name on each invocation. The order of iteration through the properties is undefined.

[undefined](#Data.Feature.getGeometry)

getGeometry()

**Parameters:**  None

**Return Value:**  [Data.Geometry](Data.md)

Returns the feature's geometry.

[undefined](#Data.Feature.getId)

getId()

**Parameters:**  None

**Return Value:**  number|string optional

Returns the feature ID.

[undefined](#Data.Feature.getProperty)

getProperty(name)

**Parameters:** 

*   name:  string

**Return Value:**  \*

Returns the value of the requested property, or undefined if the property does not exist.

[undefined](#Data.Feature.removeProperty)

removeProperty(name)

**Parameters:** 

*   name:  string

**Return Value:**  None

Removes the property with the given name.

[undefined](#Data.Feature.setGeometry)

setGeometry(newGeometry)

**Parameters:** 

*   newGeometry:  [Data.Geometry](Data.md)|[LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng)|[LatLngLiteral](/maps/documentation/javascript/reference/3.40/coordinates#LatLngLiteral)

**Return Value:**  None

Sets the feature's geometry.

[undefined](#Data.Feature.setProperty)

setProperty(name, newValue)

**Parameters:** 

*   name:  string
*   newValue:  \*

**Return Value:**  None

Sets the value of the specified property. If newValue is undefined this is equivalent to calling removeProperty.

[undefined](#Data.Feature.toGeoJson)

toGeoJson(callback)

**Parameters:** 

*   callback:  function(Object)

**Return Value:**  None

Exports the feature to a GeoJSON object.

Events

[undefined](#Data.Feature.removeproperty)

function(event)

**Arguments:** 

*   event:  [Data.RemovePropertyEvent](Data.md)

This event is triggered when a feature's property is removed.

[undefined](#Data.Feature.setgeometry)

function(event)

**Arguments:** 

*   event:  [Data.SetGeometryEvent](Data.md)

This event is triggered when a feature's geometry is set.

[undefined](#Data.Feature.setproperty)

function(event)

**Arguments:** 

*   event:  [Data.SetPropertyEvent](Data.md)

This event is triggered when a feature's property is set.