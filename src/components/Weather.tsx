import { Card, Skeleton } from 'antd';
import Meta from 'antd/es/card/Meta';
import { useWeather } from '../hooks';

const Weather = () => {
  const { loading, data } = useWeather();
  return (
      <Card
        style={{ maxWidth: 300, margin: '30px auto' }}
        hoverable
      >
        <Skeleton loading={loading} active>
          <Meta
            title={data?.name}
            description={data?.weather?.[0]?.description}
          />
          <Meta
            description={data?.main?.temp}
          />
          <Meta
            description={data?.sys?.sunrise}
          />
          <Meta
            description={data?.sys?.sunset}
          />
        </Skeleton>
      </Card>
  );
}

export default Weather;