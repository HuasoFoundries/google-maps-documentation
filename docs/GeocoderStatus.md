[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/GeocoderStatus.html)

GeocoderStatus constants
------------------------

google.maps.GeocoderStatus constants

The status returned by the Geocoder on the completion of a call to geocode(). Specify these by value, or by using the constant's name. For example, 'OK' or google.maps.GeocoderStatus.OK.

Constants

[undefined](#GeocoderStatus.ERROR)

There was a problem contacting the Google servers.

[undefined](#GeocoderStatus.INVALID_REQUEST)

This GeocoderRequest was invalid.

[undefined](#GeocoderStatus.OK)

The response contains a valid GeocoderResponse.

[undefined](#GeocoderStatus.OVER_QUERY_LIMIT)

The webpage has gone over the requests limit in too short a period of time.

[undefined](#GeocoderStatus.REQUEST_DENIED)

The webpage is not allowed to use the geocoder.

[undefined](#GeocoderStatus.UNKNOWN_ERROR)

A geocoding request could not be processed due to a server error. The request may succeed if you try again.

[undefined](#GeocoderStatus.ZERO_RESULTS)

No result was found for this GeocoderRequest.