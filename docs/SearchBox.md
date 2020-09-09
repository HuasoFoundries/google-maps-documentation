[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/SearchBox.html)

SearchBox class
---------------

google.maps.places.SearchBox class

A widget that provides query predictions based on a user's text input. It attaches to an input element of type text, and listens for text entry in that field. The list of predictions is presented as a drop-down list, and is updated as text is entered.

This class extends [MVCObject](/maps/documentation/javascript/reference/3.40/event#MVCObject).

#### Library

places

Constructor

[undefined](#SearchBox.constructor)

SearchBox(inputField\[, opts\])

**Parameters:** 

*   inputField:  HTMLInputElement
*   opts:  [SearchBoxOptions](/maps/documentation/javascript/reference/3.40/places-widget#SearchBoxOptions) optional

Creates a new instance of SearchBox that attaches to the specified input text field with the given options.

Methods

[undefined](#SearchBox.getBounds)

getBounds()

**Parameters:**  None

**Return Value:**  [LatLngBounds](/maps/documentation/javascript/reference/3.40/coordinates#LatLngBounds)

Returns the bounds to which query predictions are biased.

[undefined](#SearchBox.getPlaces)

getPlaces()

**Parameters:**  None

**Return Value:**  Array<[PlaceResult](/maps/documentation/javascript/reference/3.40/places-service#PlaceResult)\>

Returns the query selected by the user, or null if no places have been found yet, to be used with places\_changed event.

[undefined](#SearchBox.setBounds)

setBounds(bounds)

**Parameters:** 

*   bounds:  [LatLngBounds](/maps/documentation/javascript/reference/3.40/coordinates#LatLngBounds)|[LatLngBoundsLiteral](/maps/documentation/javascript/reference/3.40/coordinates#LatLngBoundsLiteral)

**Return Value:**  None

Sets the region to use for biasing query predictions. Results will only be biased towards this area and not be completely restricted to it.

Events

[undefined](#SearchBox.places_changed)

function()

**Arguments:**  None

This event is fired when the user selects a query, getPlaces should be used to get new places.