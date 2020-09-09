[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/DistanceMatrixResponse.html)

DistanceMatrixResponse interface
--------------------------------

google.maps.DistanceMatrixResponse interface

The response to a DistanceMatrixService request, consisting of the formatted origin and destination addresses, and a sequence of DistanceMatrixResponseRows, one for each corresponding origin address.

Properties

[undefined](#DistanceMatrixResponse.destinationAddresses)

**Type:**  Array<string>

The formatted destination addresses.

[undefined](#DistanceMatrixResponse.originAddresses)

**Type:**  Array<string>

The formatted origin addresses.

[undefined](#DistanceMatrixResponse.rows)

**Type:**  Array<[DistanceMatrixResponseRow](/maps/documentation/javascript/reference/3.40/distance-matrix#DistanceMatrixResponseRow)\>

The rows of the matrix, corresponding to the origin addresses.