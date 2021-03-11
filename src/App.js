import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Dashboard from './pages/Dashboard/Dashboard'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Users from './pages/Users'
import './App.css'

const App = () => {
  return (
    <Router>
      <Header />
      <div className="App">
        <div className="container">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/users" component={Users} />
            <Route component={() => <h1>404</h1>} />
          </Switch>
        </div>
      </div>
      <Footer />
    </Router>
  )
}

export default App
