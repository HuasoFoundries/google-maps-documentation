[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/StreetViewService.html)

StreetViewService class
-----------------------

google.maps.StreetViewService class

A StreetViewService object performs searches for Street View data.

Constructor

[undefined](#StreetViewService.constructor)

StreetViewService()

**Parameters:**  None

Creates a StreetViewService, which provides an interface to the data stored in the Street View service.

Methods

[undefined](#StreetViewService.getPanorama)

getPanorama(request, callback)

**Parameters:** 

*   request:  [StreetViewLocationRequest](/maps/documentation/javascript/reference/3.40/street-view-service#StreetViewLocationRequest)|[StreetViewPanoRequest](/maps/documentation/javascript/reference/3.40/street-view-service#StreetViewPanoRequest)
*   callback:  function([StreetViewPanoramaData](/maps/documentation/javascript/reference/3.40/street-view-service#StreetViewPanoramaData), [StreetViewStatus](/maps/documentation/javascript/reference/3.40/street-view-service#StreetViewStatus))

**Return Value:**  None

Retrieves the StreetViewPanoramaData for a panorama that matches the supplied Street View query request. The StreetViewPanoramaData is passed to the provided callback.