import { Helmet } from 'react-helmet';
import { useQuery } from 'react-query';
import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { fetchCoinInfo } from './api';

const Container = styled.div`
  padding: 0 20px;
  max-width: 480px;
  margin: 0 auto;
`;
const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
`;
const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33%;
  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;

interface RouteState {
  name: string;
}

interface RouteParams {
  coinId: string;
}

interface InfoData {}

const Coin = () => {
  const { coinId } = useParams<RouteParams>();
  const { state } = useLocation<RouteState>();

  const { isLoading, data } = useQuery<InfoData>(['info', coinId], () =>
    fetchCoinInfo(coinId!)
  );

  console.log(isLoading);
  console.log(data);

  return (
    <Container>
      <Helmet>
        <title>{state?.name}</title>
      </Helmet>
      <Header>
        <Title>{state?.name}</Title>
      </Header>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Overview>
            <OverviewItem>
              <span>Rank: </span>
              <span></span>
            </OverviewItem>
          </Overview>
        </>
      )}
    </Container>
  );
};

export default Coin;
