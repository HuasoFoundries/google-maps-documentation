[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/QueryAutocompletionRequest.html)

QueryAutocompletionRequest interface
------------------------------------

google.maps.places.QueryAutocompletionRequest interface

An QueryAutocompletion request to be sent to the QueryAutocompleteService.

#### Library

places

Properties

[undefined](#QueryAutocompletionRequest.bounds)

**Type:**  [LatLngBounds](/maps/documentation/javascript/reference/3.40/coordinates#LatLngBounds)|[LatLngBoundsLiteral](/maps/documentation/javascript/reference/3.40/coordinates#LatLngBoundsLiteral) optional

Bounds for prediction biasing. Predictions will be biased towards, but not restricted to, the given bounds. Both location and radius will be ignored if bounds is set.

[undefined](#QueryAutocompletionRequest.input)

**Type:**  string

The user entered input string.

[undefined](#QueryAutocompletionRequest.location)

**Type:**  [LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng) optional

Location for prediction biasing. Predictions will be biased towards the given location and radius. Alternatively, bounds can be used.

[undefined](#QueryAutocompletionRequest.offset)

**Type:**  number optional

The character position in the input term at which the service uses text for predictions (the position of the cursor in the input field).

[undefined](#QueryAutocompletionRequest.radius)

**Type:**  number optional

The radius of the area used for prediction biasing. The radius is specified in meters, and must always be accompanied by a location property. Alternatively, bounds can be used.