import { useQuery } from 'react-query';
import styled from 'styled-components';
import { fetchCoinHistory } from './api';

const Items = styled.div`
  display: grid;
  margin: 25px 0;
  gap: 10px;
`;
const Item = styled.div`
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 7px 0px;
  border-radius: 10px;
`;

interface ChartProps {
  coinId: string;
}

interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

const Price = ({ coinId }: ChartProps) => {
  const { isLoading, data } = useQuery<IHistorical[]>(
    ['ohlcv', coinId],
    () => fetchCoinHistory(coinId),
    {
      refetchInterval: 5000,
    }
  );

  return (
    <div>
      {isLoading ? (
        'Loading...'
      ) : (
        <>
          <Items>
            <Item>Open Price : $ {data?.[data.length - 1].open}</Item>
            <Item>Close Price : $ {data?.[data.length - 1].close}</Item>
            <Item>Highest Price : $ {data?.[data.length - 1].high}</Item>
            <Item>Lowest Price : $ {data?.[data.length - 1].low}</Item>
          </Items>
        </>
      )}
    </div>
  );
};

export default Price;
