[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/Autocomplete.html)

Autocomplete class
------------------

google.maps.places.Autocomplete class

A widget that provides Place predictions based on a user's text input. It attaches to an input element of type text, and listens for text entry in that field. The list of predictions is presented as a drop-down list, and is updated as text is entered.

This class extends [MVCObject](/maps/documentation/javascript/reference/3.40/event#MVCObject).

#### Library

places

Constructor

[undefined](#Autocomplete.constructor)

Autocomplete(inputField\[, opts\])

**Parameters:** 

*   inputField:  HTMLInputElement
*   opts:  [AutocompleteOptions](/maps/documentation/javascript/reference/3.40/places-widget#AutocompleteOptions) optional

Creates a new instance of Autocomplete that attaches to the specified input text field with the given options.

Methods

[undefined](#Autocomplete.getBounds)

getBounds()

**Parameters:**  None

**Return Value:**  [LatLngBounds](/maps/documentation/javascript/reference/3.40/coordinates#LatLngBounds) optional

Returns the bounds to which predictions are biased.

[undefined](#Autocomplete.getFields)

getFields()

**Parameters:**  None

**Return Value:**  Array<string> optional

Returns the fields to be included for the Place in the details response when the details are successfully retrieved. For a list of fields see [PlaceResult](/maps/documentation/javascript/reference/3.40/places-service#PlaceResult).

[undefined](#Autocomplete.getPlace)

getPlace()

**Parameters:**  None

**Return Value:**  [PlaceResult](/maps/documentation/javascript/reference/3.40/places-service#PlaceResult)

Returns the details of the Place selected by user if the details were successfully retrieved. Otherwise returns a stub Place object, with the name property set to the current value of the input field.

[undefined](#Autocomplete.setBounds)

setBounds(bounds)

**Parameters:** 

*   bounds:  [LatLngBounds](/maps/documentation/javascript/reference/3.40/coordinates#LatLngBounds)|[LatLngBoundsLiteral](/maps/documentation/javascript/reference/3.40/coordinates#LatLngBoundsLiteral) optional

**Return Value:**  None

Sets the preferred area within which to return Place results. Results are biased towards, but not restricted to, this area.

[undefined](#Autocomplete.setComponentRestrictions)

setComponentRestrictions(restrictions)

**Parameters:** 

*   restrictions:  [ComponentRestrictions](/maps/documentation/javascript/reference/3.40/places-autocomplete-service#ComponentRestrictions)

**Return Value:**  None

Sets the component restrictions. Component restrictions are used to restrict predictions to only those within the parent component. For example, the country.

[undefined](#Autocomplete.setFields)

setFields(fields)

**Parameters:** 

*   fields:  Array<string> optional

**Return Value:**  None

Sets the fields to be included for the Place in the details response when the details are successfully retrieved. For a list of fields see [PlaceResult](/maps/documentation/javascript/reference/3.40/places-service#PlaceResult).

[undefined](#Autocomplete.setOptions)

setOptions(options)

**Parameters:** 

*   options:  [AutocompleteOptions](/maps/documentation/javascript/reference/3.40/places-widget#AutocompleteOptions)

**Return Value:**  None

[undefined](#Autocomplete.setTypes)

setTypes(types)

**Parameters:** 

*   types:  Array<string>

**Return Value:**  None

Sets the types of predictions to be returned. For a list of supported types, see the [developer's guide](https://developers.google.com/places/supported_types#table3). If no type is specified, all types will be returned. The setTypes method accepts a single element array.

Events

[undefined](#Autocomplete.place_changed)

function()

**Arguments:**  None

This event is fired when a PlaceResult is made available for a Place the user has selected.  
If the user enters the name of a Place that was not suggested by the control and presses the Enter key, or if a Place Details request fails, the PlaceResult contains the user input in the name property, with no other properties defined.