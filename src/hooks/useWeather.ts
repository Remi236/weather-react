import { useEffect, useState } from 'react';
import { getErrorMessage, params } from '../helpers';
import { api } from '../hooks';
import { API } from '../constants';
import { WeatherItem } from '../models';

export const useWeather = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<WeatherItem>({} as WeatherItem);
  useEffect(() => {
    try {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        const paramsObject = {
          location: `${latitude},${longitude}`,
          units: 'metric',
          apikey: process.env.REACT_APP_API_KEY,
        };
        api<WeatherItem>('GET', params(API.weather, paramsObject)).then(
          (resObject) => {
            const { json, error } = resObject;
            if (json) {
              setData(json);
              setLoading(false);
            } else {
              alert(getErrorMessage(error));
              console.error(getErrorMessage(error));
            }
          }
        );
      });
    } catch (error) {
      alert(getErrorMessage(error));
      console.error(getErrorMessage(error));
    }
  }, []);

  return { loading, data };
};
