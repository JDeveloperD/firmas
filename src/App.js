import './utilities.css'
import './App.css'
import './layouts.css'

import { BrowserRouter as Router, Switch } from 'react-router-dom'
import PublicRoute from './utils/PublicRoute'
import PrivateRoute from './utils/PrivateRoute'

// import FirmState from './context/FirmState'
import { FirmProvider } from './context/FirmContext'
import { UserProvider } from './context/UserContext'

import MainPage from './pages/MainPage'
import LoginPage from './pages/LoginPage'

function App() {
  return (
    <UserProvider>
        <div className="App">
          <Router>
            <Switch>
              <PublicRoute restricted={true} path="/login" exact component={LoginPage} />
              {/* <PublicRoute restricted={false} component={Home} path="/" exact /> */}
            <FirmProvider>
              <PrivateRoute path="/" component={MainPage} exact />
            </FirmProvider>

            </Switch>
          </Router>
        </div>
    </UserProvider>
  );
}

export default App
