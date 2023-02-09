import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { HelmetProvider } from 'react-helmet-async';

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

const Coins = () => {
  return (
    <Container>
      <HelmetProvider>
        <Helmet>
          <Title>Coins</Title>
        </Helmet>
      </HelmetProvider>
      <Header>
        <Title>Coins</Title>
      </Header>
    </Container>
  );
};

export default Coins;
