Google Maps Api v3 Documentation
================================

In sync, versioned copy of [Google Maps JavaScript API V3 Reference](https://developers.google.com/maps/documentation/javascript/reference)


### What is this?

This repo mirrors the contents of [Google Maps JavaScript API V3 Reference](https://developers.google.com/maps/documentation/javascript/reference)

Each time there's a version bump, or documentation "Last updated" date differs from the last time the users visits the page, 
there's no easy way to check what's different to the prior version. 

This project crawls the documentation page periodically, and compares its contents with the contents of this repo. Each time changes
are detected, said changes are commited and pushed, so the user can check the exact diff between commits. 

**Caveat** There are several changes that are only cosmetical or rearrangements of the DOM structure of the documentation. Said changes are
false positives, but will be considered as updates by this project's crawler.

Starting August 2018, this project will regularly inspect the contents of the [weekly channel](https://developers.google.com/maps/documentation/javascript/versions#choosing-the-weekly-channel) reference docs. Each time the stable version is bumped, the old one will be tagged.

### Last Update

Version 3.34, last updated on Monday, August 13, 2018.

### Table of Contents


#### Maps

  - [Map](Map.md)
  - [MapOptions](MapOptions.md)
  - [MapTypeStyle](MapTypeStyle.md)
  - [MouseEvent](MouseEvent.md)
  - [IconMouseEvent](IconMouseEvent.md)
  - [MapTypeId](MapTypeId.md)
  - [MapTypeRegistry](MapTypeRegistry.md)
  - [TrafficLayer](TrafficLayer.md)
  - [TrafficLayerOptions](TrafficLayerOptions.md)
  - [TransitLayer](TransitLayer.md)
  - [BicyclingLayer](BicyclingLayer.md)

#### Coordinates

  - [LatLng](LatLng.md)
  - [LatLngLiteral](LatLngLiteral.md)
  - [LatLngBounds](LatLngBounds.md)
  - [LatLngBoundsLiteral](LatLngBoundsLiteral.md)
  - [Point](Point.md)
  - [Size](Size.md)
  - [Padding](Padding.md)
  - [CircleLiteral](CircleLiteral.md)

#### Event system

  - [event](event.md)
  - [MapsEventListener](MapsEventListener.md)
  - [MVCObject](MVCObject.md)
  - [MVCArray](MVCArray.md)

#### Controls

  - [FullscreenControlOptions](FullscreenControlOptions.md)
  - [MapTypeControlOptions](MapTypeControlOptions.md)
  - [MapTypeControlStyle](MapTypeControlStyle.md)
  - [MotionTrackingControlOptions](MotionTrackingControlOptions.md)
  - [PanControlOptions](PanControlOptions.md)
  - [RotateControlOptions](RotateControlOptions.md)
  - [ScaleControlOptions](ScaleControlOptions.md)
  - [ScaleControlStyle](ScaleControlStyle.md)
  - [StreetViewControlOptions](StreetViewControlOptions.md)
  - [ZoomControlOptions](ZoomControlOptions.md)
  - [ControlPosition](ControlPosition.md)

#### Geometry Library

  - [encoding](encoding.md)
  - [spherical](spherical.md)
  - [poly](poly.md)

#### Marker

  - [Marker](Marker.md)
  - [MarkerOptions](MarkerOptions.md)
  - [Icon](Icon.md)
  - [MarkerLabel](MarkerLabel.md)
  - [MarkerShape](MarkerShape.md)
  - [Symbol](Symbol.md)
  - [SymbolPath](SymbolPath.md)
  - [Animation](Animation.md)

#### Info Window

  - [InfoWindow](InfoWindow.md)
  - [InfoWindowOptions](InfoWindowOptions.md)

#### Polygons

  - [Polyline](Polyline.md)
  - [PolylineOptions](PolylineOptions.md)
  - [IconSequence](IconSequence.md)
  - [Polygon](Polygon.md)
  - [PolygonOptions](PolygonOptions.md)
  - [PolyMouseEvent](PolyMouseEvent.md)
  - [Rectangle](Rectangle.md)
  - [RectangleOptions](RectangleOptions.md)
  - [Circle](Circle.md)
  - [CircleOptions](CircleOptions.md)
  - [StrokePosition](StrokePosition.md)

#### Data

  - [Data](Data.md)
  - [Data.DataOptions](Data.DataOptions.md)
  - [Data.GeoJsonOptions](Data.GeoJsonOptions.md)
  - [Data.StyleOptions](Data.StyleOptions.md)
  - [Data.StylingFunction](Data.StylingFunction.md)
  - [Data.Feature](Data.Feature.md)
  - [Data.FeatureOptions](Data.FeatureOptions.md)
  - [Data.Geometry](Data.Geometry.md)
  - [Data.Point](Data.Point.md)
  - [Data.MultiPoint](Data.MultiPoint.md)
  - [Data.LineString](Data.LineString.md)
  - [Data.MultiLineString](Data.MultiLineString.md)
  - [Data.LinearRing](Data.LinearRing.md)
  - [Data.Polygon](Data.Polygon.md)
  - [Data.MultiPolygon](Data.MultiPolygon.md)
  - [Data.GeometryCollection](Data.GeometryCollection.md)
  - [Data.MouseEvent](Data.MouseEvent.md)
  - [Data.AddFeatureEvent](Data.AddFeatureEvent.md)
  - [Data.RemoveFeatureEvent](Data.RemoveFeatureEvent.md)
  - [Data.SetGeometryEvent](Data.SetGeometryEvent.md)
  - [Data.SetPropertyEvent](Data.SetPropertyEvent.md)
  - [Data.RemovePropertyEvent](Data.RemovePropertyEvent.md)

#### DOM elements

  - [OverlayView](OverlayView.md)
  - [MapPanes](MapPanes.md)
  - [MapCanvasProjection](MapCanvasProjection.md)

#### KML

  - [KmlLayer](KmlLayer.md)
  - [KmlLayerOptions](KmlLayerOptions.md)
  - [KmlLayerMetadata](KmlLayerMetadata.md)
  - [KmlLayerStatus](KmlLayerStatus.md)
  - [KmlMouseEvent](KmlMouseEvent.md)
  - [KmlFeatureData](KmlFeatureData.md)
  - [KmlAuthor](KmlAuthor.md)

#### Fusion Tables

  - [FusionTablesLayer](FusionTablesLayer.md)
  - [FusionTablesLayerOptions](FusionTablesLayerOptions.md)
  - [FusionTablesQuery](FusionTablesQuery.md)
  - [FusionTablesStyle](FusionTablesStyle.md)
  - [FusionTablesHeatmap](FusionTablesHeatmap.md)
  - [FusionTablesMarkerOptions](FusionTablesMarkerOptions.md)
  - [FusionTablesPolygonOptions](FusionTablesPolygonOptions.md)
  - [FusionTablesPolylineOptions](FusionTablesPolylineOptions.md)
  - [FusionTablesMouseEvent](FusionTablesMouseEvent.md)
  - [FusionTablesCell](FusionTablesCell.md)

#### Image overlays

  - [MapType](MapType.md)
  - [Projection](Projection.md)
  - [ImageMapType](ImageMapType.md)
  - [ImageMapTypeOptions](ImageMapTypeOptions.md)
  - [GroundOverlay](GroundOverlay.md)
  - [GroundOverlayOptions](GroundOverlayOptions.md)
  - [StyledMapType](StyledMapType.md)
  - [StyledMapTypeOptions](StyledMapTypeOptions.md)

#### Drawing Library

  - [DrawingManager](DrawingManager.md)
  - [DrawingManagerOptions](DrawingManagerOptions.md)
  - [DrawingControlOptions](DrawingControlOptions.md)
  - [OverlayCompleteEvent](OverlayCompleteEvent.md)
  - [OverlayType](OverlayType.md)

#### Heatmaps

  - [HeatmapLayer](HeatmapLayer.md)
  - [HeatmapLayerOptions](HeatmapLayerOptions.md)
  - [WeightedLocation](WeightedLocation.md)

#### Max Zoom

  - [MaxZoomService](MaxZoomService.md)
  - [MaxZoomResult](MaxZoomResult.md)
  - [MaxZoomStatus](MaxZoomStatus.md)

#### Rendering

  - [StreetViewPanorama](StreetViewPanorama.md)
  - [StreetViewPanoramaOptions](StreetViewPanoramaOptions.md)
  - [StreetViewAddressControlOptions](StreetViewAddressControlOptions.md)
  - [PanoProviderOptions](PanoProviderOptions.md)
  - [StreetViewTileData](StreetViewTileData.md)
  - [StreetViewPov](StreetViewPov.md)
  - [StreetViewCoverageLayer](StreetViewCoverageLayer.md)

#### Service

  - [StreetViewService](StreetViewService.md)
  - [StreetViewStatus](StreetViewStatus.md)
  - [StreetViewLocationRequest](StreetViewLocationRequest.md)
  - [StreetViewPanoRequest](StreetViewPanoRequest.md)
  - [StreetViewLocation](StreetViewLocation.md)
  - [StreetViewPreference](StreetViewPreference.md)
  - [StreetViewSource](StreetViewSource.md)
  - [StreetViewPanoramaData](StreetViewPanoramaData.md)
  - [StreetViewLink](StreetViewLink.md)

#### Places Widgets

  - [Autocomplete](Autocomplete.md)
  - [AutocompleteOptions](AutocompleteOptions.md)
  - [SearchBox](SearchBox.md)
  - [SearchBoxOptions](SearchBoxOptions.md)

#### Places Service

  - [PlacesService](PlacesService.md)
  - [PlaceDetailsRequest](PlaceDetailsRequest.md)
  - [FindPlaceFromPhoneNumberRequest](FindPlaceFromPhoneNumberRequest.md)
  - [FindPlaceFromQueryRequest](FindPlaceFromQueryRequest.md)
  - [PlaceSearchRequest](PlaceSearchRequest.md)
  - [TextSearchRequest](TextSearchRequest.md)
  - [RankBy](RankBy.md)
  - [LocationBias](LocationBias.md)
  - [PlacesServiceStatus](PlacesServiceStatus.md)
  - [PlaceSearchPagination](PlaceSearchPagination.md)
  - [PlaceResult](PlaceResult.md)
  - [PlaceAspectRating](PlaceAspectRating.md)
  - [PlaceGeometry](PlaceGeometry.md)
  - [PlaceOpeningHours](PlaceOpeningHours.md)
  - [PlaceOpeningHoursPeriod](PlaceOpeningHoursPeriod.md)
  - [PlaceOpeningHoursTime](PlaceOpeningHoursTime.md)
  - [PlacePlusCode](PlacePlusCode.md)
  - [PlacePhoto](PlacePhoto.md)
  - [PhotoOptions](PhotoOptions.md)
  - [PlaceReview](PlaceReview.md)

#### Places Autocomplete Service

  - [AutocompleteService](AutocompleteService.md)
  - [AutocompletionRequest](AutocompletionRequest.md)
  - [QueryAutocompletionRequest](QueryAutocompletionRequest.md)
  - [AutocompleteSessionToken](AutocompleteSessionToken.md)
  - [ComponentRestrictions](ComponentRestrictions.md)
  - [AutocompletePrediction](AutocompletePrediction.md)
  - [QueryAutocompletePrediction](QueryAutocompletePrediction.md)
  - [PredictionTerm](PredictionTerm.md)
  - [PredictionSubstring](PredictionSubstring.md)
  - [StructuredFormatting](StructuredFormatting.md)

#### Geocoder

  - [Geocoder](Geocoder.md)
  - [GeocoderRequest](GeocoderRequest.md)
  - [GeocoderComponentRestrictions](GeocoderComponentRestrictions.md)
  - [GeocoderStatus](GeocoderStatus.md)
  - [GeocoderResult](GeocoderResult.md)
  - [GeocoderAddressComponent](GeocoderAddressComponent.md)
  - [GeocoderGeometry](GeocoderGeometry.md)
  - [GeocoderLocationType](GeocoderLocationType.md)

#### Directions

  - [DirectionsService](DirectionsService.md)
  - [DirectionsRequest](DirectionsRequest.md)
  - [DirectionsStatus](DirectionsStatus.md)
  - [DirectionsResult](DirectionsResult.md)
  - [DirectionsRenderer](DirectionsRenderer.md)
  - [DirectionsRendererOptions](DirectionsRendererOptions.md)
  - [DirectionsWaypoint](DirectionsWaypoint.md)
  - [DirectionsGeocodedWaypoint](DirectionsGeocodedWaypoint.md)
  - [DirectionsRoute](DirectionsRoute.md)
  - [DirectionsLeg](DirectionsLeg.md)
  - [DirectionsStep](DirectionsStep.md)
  - [Place](Place.md)
  - [TravelMode](TravelMode.md)
  - [DrivingOptions](DrivingOptions.md)
  - [TrafficModel](TrafficModel.md)
  - [TransitOptions](TransitOptions.md)
  - [TransitMode](TransitMode.md)
  - [TransitRoutePreference](TransitRoutePreference.md)
  - [TransitFare](TransitFare.md)
  - [TransitDetails](TransitDetails.md)
  - [TransitStop](TransitStop.md)
  - [TransitLine](TransitLine.md)
  - [TransitAgency](TransitAgency.md)
  - [TransitVehicle](TransitVehicle.md)
  - [VehicleType](VehicleType.md)
  - [UnitSystem](UnitSystem.md)
  - [Distance](Distance.md)
  - [Duration](Duration.md)
  - [Time](Time.md)

#### Distance Matrix

  - [DistanceMatrixService](DistanceMatrixService.md)
  - [DistanceMatrixRequest](DistanceMatrixRequest.md)
  - [DistanceMatrixResponse](DistanceMatrixResponse.md)
  - [DistanceMatrixResponseRow](DistanceMatrixResponseRow.md)
  - [DistanceMatrixResponseElement](DistanceMatrixResponseElement.md)
  - [DistanceMatrixStatus](DistanceMatrixStatus.md)
  - [DistanceMatrixElementStatus](DistanceMatrixElementStatus.md)

#### Elevation

  - [ElevationService](ElevationService.md)
  - [LocationElevationRequest](LocationElevationRequest.md)
  - [PathElevationRequest](PathElevationRequest.md)
  - [ElevationResult](ElevationResult.md)
  - [ElevationStatus](ElevationStatus.md)