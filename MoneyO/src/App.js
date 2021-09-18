import './App.scss';
import HomePage from './pages/MainPage/HomePage'
import {Switch , Route, BrowserRouter as Router} from "react-router-dom"
import Testing from './pages/Testing';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar/navbar.component';
import Footer from './components/Footer/Footer';
import LandingPage from './pages/LandingPage/landing.page';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import SignUp from './pages/signUpPage/signIp';
import SignIn from './pages/signInPage/signIn';
import KommunicateChat from './chat';

function App() {
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
      <Route exact path = '/newuser'>
      <SignIn />
      </Route>
      <Route exact path = '/testing'>
      <Testing />
      </Route>
      <Route exact path = '/myprofile'>
      <ProfilePage />
      </Route>
      </Switch>
      <Footer />
      </div>
    </Router>
   </>
  );
}

export default App;
