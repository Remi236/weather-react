export type WeatherItem = {
  data: {
    time: string;
    values: {
      cloudBase: number;
      humidity: number;
      windSpeed: number;
      windDirection: number;
      precipitationProbability: number;
      cloudCover: number;
      visibility: number;
      dewPoint: number;
      uvIndex: number;
      weatherCode: number;
      freezingRainIntensity: number;
      pressureSurfaceLevel: number;
      rainIntensity: number;
      snowIntensity: number;
      sleetIntensity: number;
      temperature: number;
      temperatureApparent: number;
      uvHealthConcern: number;
      windGust: number;
    };
  };
  location: {
    lat: number;
    lon: number;
  };
};
