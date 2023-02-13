import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Coins from './routes/Coins';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <Coins />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
