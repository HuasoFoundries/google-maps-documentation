# Google Maps Api v3 Documentation

In sync, versioned copy of [Google Maps JavaScript API V3 Reference](https://developers.google.com/maps/documentation/javascript/reference)

### What is this?

This repo mirrors the contents of [Google Maps JavaScript API V3 Reference](https://developers.google.com/maps/documentation/javascript/reference)

Each time there's a version bump, or documentation "Last updated" date differs from the last time the users visits the page,
there's no easy way to check what's different to the prior version.

This project crawls the documentation page periodically, and compares its contents with the contents of this repo. Each time changes
are detected, said changes are commited and pushed, so the user can check the exact diff between [commits](https://github.com/HuasoFoundries/google-maps-documentation/commits/develop).

**Caveat** There are several changes that are only cosmetical or rearrangements of the DOM structure of the documentation. Said changes are
false positives, but will be considered as updates by this project's crawler.

Starting August 2018, this project will regularly inspect the contents of the [weekly channel](https://developers.google.com/maps/documentation/javascript/versions#choosing-the-weekly-channel) reference docs. Each time the stable version is bumped, the old one will be tagged.

### Last Update

Version 3.35, last updated on Monday, January 14, 2019.

### Table of Contents


#### Maps

  - [Map](Map.html)
  - [MapOptions](MapOptions.html)
  - [MapTypeStyle](MapTypeStyle.html)
  - [MouseEvent](MouseEvent.html)
  - [IconMouseEvent](IconMouseEvent.html)
  - [MapTypeId](MapTypeId.html)
  - [MapTypeRegistry](MapTypeRegistry.html)
  - [MapRestriction](MapRestriction.html)
  - [TrafficLayer](TrafficLayer.html)
  - [TrafficLayerOptions](TrafficLayerOptions.html)
  - [TransitLayer](TransitLayer.html)
  - [BicyclingLayer](BicyclingLayer.html)

#### Coordinates

  - [LatLng](LatLng.html)
  - [LatLngLiteral](LatLngLiteral.html)
  - [LatLngBounds](LatLngBounds.html)
  - [LatLngBoundsLiteral](LatLngBoundsLiteral.html)
  - [Point](Point.html)
  - [Size](Size.html)
  - [Padding](Padding.html)
  - [CircleLiteral](CircleLiteral.html)

#### Event system

  - [event](event.html)
  - [MapsEventListener](MapsEventListener.html)
  - [MVCObject](MVCObject.html)
  - [MVCArray](MVCArray.html)

#### Controls

  - [FullscreenControlOptions](FullscreenControlOptions.html)
  - [MapTypeControlOptions](MapTypeControlOptions.html)
  - [MapTypeControlStyle](MapTypeControlStyle.html)
  - [MotionTrackingControlOptions](MotionTrackingControlOptions.html)
  - [PanControlOptions](PanControlOptions.html)
  - [RotateControlOptions](RotateControlOptions.html)
  - [ScaleControlOptions](ScaleControlOptions.html)
  - [ScaleControlStyle](ScaleControlStyle.html)
  - [StreetViewControlOptions](StreetViewControlOptions.html)
  - [ZoomControlOptions](ZoomControlOptions.html)
  - [ControlPosition](ControlPosition.html)

#### Geometry Library

  - [encoding](encoding.html)
  - [spherical](spherical.html)
  - [poly](poly.html)

#### Marker

  - [Marker](Marker.html)
  - [MarkerOptions](MarkerOptions.html)
  - [Icon](Icon.html)
  - [MarkerLabel](MarkerLabel.html)
  - [MarkerShape](MarkerShape.html)
  - [Symbol](Symbol.html)
  - [SymbolPath](SymbolPath.html)
  - [Animation](Animation.html)

#### Info Window

  - [InfoWindow](InfoWindow.html)
  - [InfoWindowOptions](InfoWindowOptions.html)

#### Polygons

  - [Polyline](Polyline.html)
  - [PolylineOptions](PolylineOptions.html)
  - [IconSequence](IconSequence.html)
  - [Polygon](Polygon.html)
  - [PolygonOptions](PolygonOptions.html)
  - [PolyMouseEvent](PolyMouseEvent.html)
  - [Rectangle](Rectangle.html)
  - [RectangleOptions](RectangleOptions.html)
  - [Circle](Circle.html)
  - [CircleOptions](CircleOptions.html)
  - [StrokePosition](StrokePosition.html)

#### Data

  - [Data](Data.html)
  - [Data.DataOptions](Data.DataOptions.html)
  - [Data.GeoJsonOptions](Data.GeoJsonOptions.html)
  - [Data.StyleOptions](Data.StyleOptions.html)
  - [Data.StylingFunction](Data.StylingFunction.html)
  - [Data.Feature](Data.Feature.html)
  - [Data.FeatureOptions](Data.FeatureOptions.html)
  - [Data.Geometry](Data.Geometry.html)
  - [Data.Point](Data.Point.html)
  - [Data.MultiPoint](Data.MultiPoint.html)
  - [Data.LineString](Data.LineString.html)
  - [Data.MultiLineString](Data.MultiLineString.html)
  - [Data.LinearRing](Data.LinearRing.html)
  - [Data.Polygon](Data.Polygon.html)
  - [Data.MultiPolygon](Data.MultiPolygon.html)
  - [Data.GeometryCollection](Data.GeometryCollection.html)
  - [Data.MouseEvent](Data.MouseEvent.html)
  - [Data.AddFeatureEvent](Data.AddFeatureEvent.html)
  - [Data.RemoveFeatureEvent](Data.RemoveFeatureEvent.html)
  - [Data.SetGeometryEvent](Data.SetGeometryEvent.html)
  - [Data.SetPropertyEvent](Data.SetPropertyEvent.html)
  - [Data.RemovePropertyEvent](Data.RemovePropertyEvent.html)

#### DOM elements

  - [OverlayView](OverlayView.html)
  - [MapPanes](MapPanes.html)
  - [MapCanvasProjection](MapCanvasProjection.html)

#### KML

  - [KmlLayer](KmlLayer.html)
  - [KmlLayerOptions](KmlLayerOptions.html)
  - [KmlLayerMetadata](KmlLayerMetadata.html)
  - [KmlLayerStatus](KmlLayerStatus.html)
  - [KmlMouseEvent](KmlMouseEvent.html)
  - [KmlFeatureData](KmlFeatureData.html)
  - [KmlAuthor](KmlAuthor.html)

#### Fusion Tables

  - [FusionTablesLayer](FusionTablesLayer.html)
  - [FusionTablesLayerOptions](FusionTablesLayerOptions.html)
  - [FusionTablesQuery](FusionTablesQuery.html)
  - [FusionTablesStyle](FusionTablesStyle.html)
  - [FusionTablesHeatmap](FusionTablesHeatmap.html)
  - [FusionTablesMarkerOptions](FusionTablesMarkerOptions.html)
  - [FusionTablesPolygonOptions](FusionTablesPolygonOptions.html)
  - [FusionTablesPolylineOptions](FusionTablesPolylineOptions.html)
  - [FusionTablesMouseEvent](FusionTablesMouseEvent.html)
  - [FusionTablesCell](FusionTablesCell.html)

#### Image overlays

  - [MapType](MapType.html)
  - [Projection](Projection.html)
  - [ImageMapType](ImageMapType.html)
  - [ImageMapTypeOptions](ImageMapTypeOptions.html)
  - [GroundOverlay](GroundOverlay.html)
  - [GroundOverlayOptions](GroundOverlayOptions.html)
  - [StyledMapType](StyledMapType.html)
  - [StyledMapTypeOptions](StyledMapTypeOptions.html)

#### Drawing Library

  - [DrawingManager](DrawingManager.html)
  - [DrawingManagerOptions](DrawingManagerOptions.html)
  - [DrawingControlOptions](DrawingControlOptions.html)
  - [OverlayCompleteEvent](OverlayCompleteEvent.html)
  - [OverlayType](OverlayType.html)

#### Heatmaps

  - [HeatmapLayer](HeatmapLayer.html)
  - [HeatmapLayerOptions](HeatmapLayerOptions.html)
  - [WeightedLocation](WeightedLocation.html)

#### Max Zoom

  - [MaxZoomService](MaxZoomService.html)
  - [MaxZoomResult](MaxZoomResult.html)
  - [MaxZoomStatus](MaxZoomStatus.html)

#### Rendering

  - [StreetViewPanorama](StreetViewPanorama.html)
  - [StreetViewPanoramaOptions](StreetViewPanoramaOptions.html)
  - [StreetViewAddressControlOptions](StreetViewAddressControlOptions.html)
  - [PanoProviderOptions](PanoProviderOptions.html)
  - [StreetViewTileData](StreetViewTileData.html)
  - [StreetViewPov](StreetViewPov.html)
  - [StreetViewCoverageLayer](StreetViewCoverageLayer.html)

#### Service

  - [StreetViewService](StreetViewService.html)
  - [StreetViewStatus](StreetViewStatus.html)
  - [StreetViewLocationRequest](StreetViewLocationRequest.html)
  - [StreetViewPanoRequest](StreetViewPanoRequest.html)
  - [StreetViewLocation](StreetViewLocation.html)
  - [StreetViewPreference](StreetViewPreference.html)
  - [StreetViewSource](StreetViewSource.html)
  - [StreetViewPanoramaData](StreetViewPanoramaData.html)
  - [StreetViewLink](StreetViewLink.html)

#### Places Widgets

  - [Autocomplete](Autocomplete.html)
  - [AutocompleteOptions](AutocompleteOptions.html)
  - [SearchBox](SearchBox.html)
  - [SearchBoxOptions](SearchBoxOptions.html)

#### Places Service

  - [PlacesService](PlacesService.html)
  - [PlaceDetailsRequest](PlaceDetailsRequest.html)
  - [FindPlaceFromPhoneNumberRequest](FindPlaceFromPhoneNumberRequest.html)
  - [FindPlaceFromQueryRequest](FindPlaceFromQueryRequest.html)
  - [PlaceSearchRequest](PlaceSearchRequest.html)
  - [TextSearchRequest](TextSearchRequest.html)
  - [RankBy](RankBy.html)
  - [LocationBias](LocationBias.html)
  - [PlacesServiceStatus](PlacesServiceStatus.html)
  - [PlaceSearchPagination](PlaceSearchPagination.html)
  - [PlaceResult](PlaceResult.html)
  - [PlaceAspectRating](PlaceAspectRating.html)
  - [PlaceGeometry](PlaceGeometry.html)
  - [PlaceOpeningHours](PlaceOpeningHours.html)
  - [PlaceOpeningHoursPeriod](PlaceOpeningHoursPeriod.html)
  - [PlaceOpeningHoursTime](PlaceOpeningHoursTime.html)
  - [PlacePlusCode](PlacePlusCode.html)
  - [PlacePhoto](PlacePhoto.html)
  - [PhotoOptions](PhotoOptions.html)
  - [PlaceReview](PlaceReview.html)

#### Places Autocomplete Service

  - [AutocompleteService](AutocompleteService.html)
  - [AutocompletionRequest](AutocompletionRequest.html)
  - [QueryAutocompletionRequest](QueryAutocompletionRequest.html)
  - [AutocompleteSessionToken](AutocompleteSessionToken.html)
  - [ComponentRestrictions](ComponentRestrictions.html)
  - [AutocompletePrediction](AutocompletePrediction.html)
  - [QueryAutocompletePrediction](QueryAutocompletePrediction.html)
  - [PredictionTerm](PredictionTerm.html)
  - [PredictionSubstring](PredictionSubstring.html)
  - [StructuredFormatting](StructuredFormatting.html)

#### Geocoder

  - [Geocoder](Geocoder.html)
  - [GeocoderRequest](GeocoderRequest.html)
  - [GeocoderComponentRestrictions](GeocoderComponentRestrictions.html)
  - [GeocoderStatus](GeocoderStatus.html)
  - [GeocoderResult](GeocoderResult.html)
  - [GeocoderAddressComponent](GeocoderAddressComponent.html)
  - [GeocoderGeometry](GeocoderGeometry.html)
  - [GeocoderLocationType](GeocoderLocationType.html)

#### Directions

  - [DirectionsService](DirectionsService.html)
  - [DirectionsRequest](DirectionsRequest.html)
  - [DirectionsStatus](DirectionsStatus.html)
  - [DirectionsResult](DirectionsResult.html)
  - [DirectionsRenderer](DirectionsRenderer.html)
  - [DirectionsRendererOptions](DirectionsRendererOptions.html)
  - [DirectionsWaypoint](DirectionsWaypoint.html)
  - [DirectionsGeocodedWaypoint](DirectionsGeocodedWaypoint.html)
  - [DirectionsRoute](DirectionsRoute.html)
  - [DirectionsLeg](DirectionsLeg.html)
  - [DirectionsStep](DirectionsStep.html)
  - [Place](Place.html)
  - [TravelMode](TravelMode.html)
  - [DrivingOptions](DrivingOptions.html)
  - [TrafficModel](TrafficModel.html)
  - [TransitOptions](TransitOptions.html)
  - [TransitMode](TransitMode.html)
  - [TransitRoutePreference](TransitRoutePreference.html)
  - [TransitFare](TransitFare.html)
  - [TransitDetails](TransitDetails.html)
  - [TransitStop](TransitStop.html)
  - [TransitLine](TransitLine.html)
  - [TransitAgency](TransitAgency.html)
  - [TransitVehicle](TransitVehicle.html)
  - [VehicleType](VehicleType.html)
  - [UnitSystem](UnitSystem.html)
  - [Distance](Distance.html)
  - [Duration](Duration.html)
  - [Time](Time.html)

#### Distance Matrix

  - [DistanceMatrixService](DistanceMatrixService.html)
  - [DistanceMatrixRequest](DistanceMatrixRequest.html)
  - [DistanceMatrixResponse](DistanceMatrixResponse.html)
  - [DistanceMatrixResponseRow](DistanceMatrixResponseRow.html)
  - [DistanceMatrixResponseElement](DistanceMatrixResponseElement.html)
  - [DistanceMatrixStatus](DistanceMatrixStatus.html)
  - [DistanceMatrixElementStatus](DistanceMatrixElementStatus.html)

#### Elevation

  - [ElevationService](ElevationService.html)
  - [LocationElevationRequest](LocationElevationRequest.html)
  - [PathElevationRequest](PathElevationRequest.html)
  - [ElevationResult](ElevationResult.html)
  - [ElevationStatus](ElevationStatus.html)