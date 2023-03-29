import { useQuery } from 'react-query';
import styled from 'styled-components';
import { fetchCoinHistory } from './api';

interface ChartProps {
  coinId: string;
}

interface IHistorical {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}

const Chart = ({ coinId }: ChartProps) => {
  const { isLoading, data } = useQuery<IHistorical[]>(['ohlcv', coinId], () =>
    fetchCoinHistory(coinId)
  );

  return <div>{isLoading ? 'Loading...' : <>Chart!!!{data}</>}</div>;
};

export default Chart;
