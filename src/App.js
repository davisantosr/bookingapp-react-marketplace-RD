import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux';

import Home from './booking/Home';
import Login from './auth/Login';
import Register from './auth/Register';
import TopNav from './components/TopNav';

import {store} from './redux/store'



function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <TopNav/>
          <Switch>
            <Route component={Home} exact path={'/'}/>
            <Route component={Login} path={'/login'}/>
            <Route component={Register} path={'/register'}/>
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
