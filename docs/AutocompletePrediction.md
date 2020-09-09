[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/AutocompletePrediction.html)

AutocompletePrediction interface
--------------------------------

google.maps.places.AutocompletePrediction interface

Represents a single autocomplete prediction.

#### Library

places

Properties

[undefined](#AutocompletePrediction.description)

**Type:**  string

This is the unformatted version of the query suggested by the Places service.

[undefined](#AutocompletePrediction.distance_meters)

**Type:**  number optional

The distance in meters of the place from the [AutocompletionRequest.origin](AutocompletionRequest.md).

[undefined](#AutocompletePrediction.matched_substrings)

**Type:**  Array<[PredictionSubstring](/maps/documentation/javascript/reference/3.40/places-autocomplete-service#PredictionSubstring)\>

A set of substrings in the place's description that match elements in the user's input, suitable for use in highlighting those substrings. Each substring is identified by an offset and a length, expressed in unicode characters.

[undefined](#AutocompletePrediction.place_id)

**Type:**  string

A place ID that can be used to retrieve details about this place using the place details service (see [PlacesService.getDetails](PlacesService.md)).

[undefined](#AutocompletePrediction.structured_formatting)

**Type:**  [StructuredFormatting](/maps/documentation/javascript/reference/3.40/places-autocomplete-service#StructuredFormatting)

Structured information about the place's description, divided into a main text and a secondary text, including an array of matched substrings from the autocomplete input, identified by an offset and a length, expressed in unicode characters.

[undefined](#AutocompletePrediction.terms)

**Type:**  Array<[PredictionTerm](/maps/documentation/javascript/reference/3.40/places-autocomplete-service#PredictionTerm)\>

Information about individual terms in the above description, from most to least specific. For example, "Taco Bell", "Willitis", and "CA".

[undefined](#AutocompletePrediction.types)

**Type:**  Array<string>

An array of types that the prediction belongs to, for example 'establishment' or 'geocode'.