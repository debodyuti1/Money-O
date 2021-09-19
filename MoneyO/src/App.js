import './App.scss';
import HomePage from './pages/MainPage/HomePage'
import {Switch , Route, BrowserRouter as Router, Redirect } from "react-router-dom"
import Testing from './pages/Testing';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar/navbar.component';
import Footer from './components/Footer/Footer';
import LandingPage from './pages/LandingPage/landing.page';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import SignUp from './pages/signUpPage/signUp';
import SignIn from './pages/signInPage/signIn';
import ResultPage from './pages/ResultPage/ResultPage';
import KommunicateChat from './chat';
import { useContext } from "react"
import { AuthContext } from "./context/AuthContext"

function App() {
  const {user} = useContext(AuthContext)
  return (
   <>
      <KommunicateChat />
      <Router>
      <div className="App">
      <NavBar />
      <Switch>
      <Route exact path = '/'>
      <LandingPage />
      </Route>
      <Route exact path = '/MoneyO'>
      <HomePage />
      </Route>
      <Route exact path = '/signup'>
      <SignUp />
      </Route>
      <Route exact path ="/login">
    {user ? <Redirect to="/MoneyO"/> : <SignIn /> }
    </Route>
      <Route exact path = '/testing'>
      <Testing />
      </Route>
      <Route exact path = '/myprofile'>
      <ProfilePage />
      </Route>
      <Route exact path="/Results">
        <ResultPage />
      </Route>
      </Switch>
      <Footer />
      </div>
    </Router>
   </>
  );
}

export default App;
