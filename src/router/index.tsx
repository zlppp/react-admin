
import LayoutMain from '../components/layout';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from '../components/PrivateRoute'
import Login from '../page/Login';
import About from '../page/About';

const Router = () => {
  return (
    <div>
      <Switch>
        <Route path='/login' component={Login}/>
        {/* <PrivateRoute path='/' component={LayoutMain}/> */}
      </Switch>
      {/* <LayoutMain /> */}
    </div>
  )
}

export default Router;