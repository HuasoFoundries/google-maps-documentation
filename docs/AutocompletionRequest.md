[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/AutocompletionRequest.html)

AutocompletionRequest interface
-------------------------------

google.maps.places.AutocompletionRequest interface

An Autocompletion request to be sent to [AutocompleteService.getPlacePredictions](AutocompleteService.md).

#### Library

places

Properties

[undefined](#AutocompletionRequest.bounds)

**Type:**  [LatLngBounds](/maps/documentation/javascript/reference/3.40/coordinates#LatLngBounds)|[LatLngBoundsLiteral](/maps/documentation/javascript/reference/3.40/coordinates#LatLngBoundsLiteral) optional

Bounds for prediction biasing. Predictions will be biased towards, but not restricted to, the given bounds. Both location and radius will be ignored if bounds is set.

[undefined](#AutocompletionRequest.componentRestrictions)

**Type:**  [ComponentRestrictions](/maps/documentation/javascript/reference/3.40/places-autocomplete-service#ComponentRestrictions) optional

The component restrictions. Component restrictions are used to restrict predictions to only those within the parent component. For example, the country.

[undefined](#AutocompletionRequest.input)

**Type:**  string

The user entered input string.

[undefined](#AutocompletionRequest.location)

**Type:**  [LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng) optional

Location for prediction biasing. Predictions will be biased towards the given location and radius. Alternatively, bounds can be used.

[undefined](#AutocompletionRequest.offset)

**Type:**  number optional

The character position in the input term at which the service uses text for predictions (the position of the cursor in the input field).

[undefined](#AutocompletionRequest.origin)

**Type:**  [LatLng](/maps/documentation/javascript/reference/3.40/coordinates#LatLng)|[LatLngLiteral](/maps/documentation/javascript/reference/3.40/coordinates#LatLngLiteral) optional

The location where [AutocompletePrediction.distance\_meters](AutocompletePrediction.md) is calculated from.

[undefined](#AutocompletionRequest.radius)

**Type:**  number optional

The radius of the area used for prediction biasing. The radius is specified in meters, and must always be accompanied by a location property. Alternatively, bounds can be used.

[undefined](#AutocompletionRequest.sessionToken)

**Type:**  [AutocompleteSessionToken](/maps/documentation/javascript/reference/3.40/places-autocomplete-service#AutocompleteSessionToken) optional

Unique reference used to bundle individual requests into sessions.

[undefined](#AutocompletionRequest.types)

**Type:**  Array<string> optional

The types of predictions to be returned. For a list of supported types, see the [developer's guide](https://developers.google.com/places/supported_types#table3). If nothing is specified, all types are returned. In general only a single type is allowed. The exception is that you can safely mix the 'geocode' and 'establishment' types, but note that this will have the same effect as specifying no types.