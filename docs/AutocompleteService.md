[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/AutocompleteService.html)

AutocompleteService class
-------------------------

google.maps.places.AutocompleteService class

Contains methods related to retrieving Autocomplete predictions.

#### Library

places

Constructor

[undefined](#AutocompleteService.constructor)

AutocompleteService()

**Parameters:**  None

Creates a new instance of the AutocompleteService.

Methods

[undefined](#AutocompleteService.getPlacePredictions)

getPlacePredictions(request, callback)

**Parameters:** 

*   request:  [AutocompletionRequest](/maps/documentation/javascript/reference/3.40/places-autocomplete-service#AutocompletionRequest)
*   callback:  function(Array<[AutocompletePrediction](/maps/documentation/javascript/reference/3.40/places-autocomplete-service#AutocompletePrediction)\>, [PlacesServiceStatus](/maps/documentation/javascript/reference/3.40/places-service#PlacesServiceStatus))

**Return Value:**  None

Retrieves place autocomplete predictions based on the supplied autocomplete request.

[undefined](#AutocompleteService.getQueryPredictions)

getQueryPredictions(request, callback)

**Parameters:** 

*   request:  [QueryAutocompletionRequest](/maps/documentation/javascript/reference/3.40/places-autocomplete-service#QueryAutocompletionRequest)
*   callback:  function(Array<[QueryAutocompletePrediction](/maps/documentation/javascript/reference/3.40/places-autocomplete-service#QueryAutocompletePrediction)\>, [PlacesServiceStatus](/maps/documentation/javascript/reference/3.40/places-service#PlacesServiceStatus))

**Return Value:**  None

Retrieves query autocomplete predictions based on the supplied query autocomplete request.