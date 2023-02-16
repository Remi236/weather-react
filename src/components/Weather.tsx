import { Card, Skeleton } from 'antd';
import { useWeather } from '../hooks';
import moment from 'moment';

const Weather = () => {
  const { loading, data } = useWeather();
  return (
    <section className='weather'>
      <Card
        style={{ margin: '30px auto' }}
        hoverable
        title="Realtime Weather"
        type="inner"
      >
       
        <Skeleton loading={loading} active paragraph={{ rows: 18 }} >
          <p className='weather__attr'>
            <span className='weather__attr--title'>Time:</span>
            <span className='weather__attr--value'>{moment(data?.data?.time).format('DD/MM/YYYY hh:mm:ss')}</span>
          </p>
          <p className='weather__attr'>
            <span className='weather__attr--title'>Humidity:</span>
            <span className='weather__attr--value'>{data?.data?.values.humidity}</span>
          </p>
          <p className='weather__attr'>
            <span className='weather__attr--title'>Temperature:</span>
            <span className='weather__attr--value'>{data?.data?.values.temperature}</span>
          </p>
          <p className='weather__attr'>
            <span className='weather__attr--title'>Wind Speed:</span>
            <span className='weather__attr--value'>{data?.data?.values.windSpeed}</span>
          </p>
          <p className='weather__attr'>
            <span className='weather__attr--title'>Wind Direction:</span>
            <span className='weather__attr--value'>{data?.data?.values.windDirection}</span>
          </p>
          <p className='weather__attr'>
            <span className='weather__attr--title'>CloudBase:</span>
            <span className='weather__attr--value'>{data?.data?.values.cloudBase}</span>
          </p>
          <p className='weather__attr'>
            <span className='weather__attr--title'>Cloud Cover:</span>
            <span className='weather__attr--value'>{data?.data?.values.cloudCover}</span>
          </p>
          <p className='weather__attr'>
            <span className='weather__attr--title'>Visibility:</span>
            <span className='weather__attr--value'>{data?.data?.values.visibility}</span>
          </p>
          <p className='weather__attr'>
            <span className='weather__attr--title'>Precipitation Probability:</span>
            <span className='weather__attr--value'>{data?.data?.values.precipitationProbability}</span>
          </p>
          <p className='weather__attr'>
            <span className='weather__attr--title'>DewPoint:</span>
            <span className='weather__attr--value'>{data?.data?.values.dewPoint}</span>
          </p>
          <p className='weather__attr'>
            <span className='weather__attr--title'>Uv Index:</span>
            <span className='weather__attr--value'>{data?.data?.values.uvIndex}</span>
          </p>
          <p className='weather__attr'>
            <span className='weather__attr--title'>Freezing Rain Intensity:</span>
            <span className='weather__attr--value'>{data?.data?.values.freezingRainIntensity}</span>
          </p>
          <p className='weather__attr'>
            <span className='weather__attr--title'>Pressure Surface Level:</span>
            <span className='weather__attr--value'>{data?.data?.values.pressureSurfaceLevel}</span>
          </p>
          <p className='weather__attr'>
            <span className='weather__attr--title'>Rain Intensity:</span>
            <span className='weather__attr--value'>{data?.data?.values.rainIntensity}</span>
          </p>
          <p className='weather__attr'>
            <span className='weather__attr--title'>Snow Intensity:</span>
            <span className='weather__attr--value'>{data?.data?.values.snowIntensity}</span>
          </p>
          <p className='weather__attr'>
            <span className='weather__attr--title'>Sleet Intensity:</span>
            <span className='weather__attr--value'>{data?.data?.values.sleetIntensity}</span>
          </p>
          <p className='weather__attr'>
            <span className='weather__attr--title'>Temperature Apparent:</span>
            <span className='weather__attr--value'>{data?.data?.values.temperatureApparent}</span>
          </p>
          <p className='weather__attr'>
            <span className='weather__attr--title'>Uv Health Concern:</span>
            <span className='weather__attr--value'>{data?.data?.values.uvHealthConcern}</span>
          </p>
          <p className='weather__attr'>
            <span className='weather__attr--title'>Wind Gust:</span>
            <span className='weather__attr--value'>{data?.data?.values.windGust}</span>
          </p>

        </Skeleton>
      </Card>
    </section>
  );
}

export default Weather;