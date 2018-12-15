[See html formatted version](https://huasofoundries.github.io/google-maps-documentation/WeatherFeature.html)

## WeatherFeature object specification

google.maps.weather.WeatherFeature object specification

Describes a single Weather feature.

#### Library

weather

Properties

current

**Type:**  [WeatherConditions](WeatherConditions.md)

The current weather conditions at this location.

forecast

**Type:**  Array<[WeatherForecast](WeatherForecast.md)\>

A forecast of weather conditions over the next four days. The forecast array is always in chronological order.

location

**Type:**  string

The location name of this feature, e.g. "San Francisco, California".

temperatureUnit

**Type:**  [TemperatureUnit](TemperatureUnit.md)

The temperature units being used.

windSpeedUnit

**Type:**  [WindSpeedUnit](WindSpeedUnit.md)

The wind speed units being used.
