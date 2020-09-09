[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/QueryAutocompletePrediction.html)

QueryAutocompletePrediction interface
-------------------------------------

google.maps.places.QueryAutocompletePrediction interface

Represents a single Query Autocomplete prediction.

#### Library

places

Properties

[undefined](#QueryAutocompletePrediction.description)

**Type:**  string

This is the unformatted version of the query suggested by the Places service.

[undefined](#QueryAutocompletePrediction.matched_substrings)

**Type:**  Array<[PredictionSubstring](/maps/documentation/javascript/reference/3.40/places-autocomplete-service#PredictionSubstring)\>

A set of substrings in the place's description that match elements in the user's input, suitable for use in highlighting those substrings. Each substring is identified by an offset and a length, expressed in unicode characters.

[undefined](#QueryAutocompletePrediction.place_id)

**Type:**  string optional

Only available if prediction is a place. A place ID that can be used to retrieve details about this place using the place details service (see [PlacesService.getDetails](PlacesService.md)).

[undefined](#QueryAutocompletePrediction.terms)

**Type:**  Array<[PredictionTerm](/maps/documentation/javascript/reference/3.40/places-autocomplete-service#PredictionTerm)\>

Information about individual terms in the above description. Categorical terms come first (for example, "restaurant"). Address terms appear from most to least specific. For example, "San Francisco", and "CA".