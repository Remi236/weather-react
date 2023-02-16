export type WeatherItem = {
  name: string;
  main: {
    temp: number;
  };
  sys: {
    sunrise: number;
    sunset: number;
  };
  weather: [
    {
      description: string;
    }
  ];
};
