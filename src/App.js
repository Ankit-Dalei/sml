import './App.css';
import Contact from './components/Contact';
import Courses from './components/Courses';
import Likes from './components/Likes';
import Main from './components/Main';
import Nav from './components/Nav';
import Space from './components/Space';
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Watchlater from './components/Watchlater';
import Vr from './components/Vr';
import History from './components/History';
import View from './components/View';
import Home from './components/Home';
import Login from './login/Login';
import SignUp from './login/SignUp';
import ForgotPassword from './login/ForgotPassword';

function App() {
  return (
    <>
      <Router>
        {/* <Nav/> */}
        <Routes>
          {/* <Route path='/' Component={Main}/> */}
          {/* <Route path='/Nav' Component={Nav}/> */}
          <Route path='/' Component={Home}/>
          <Route path='/likes' Component={Likes}/>
          <Route path='/watch_later' Component={Watchlater}/>
          <Route path='/Contact' Component={Contact}/>
          <Route path='/history' Component={History}/>
          <Route path='/VR' Component={Vr}/>
          <Route path='/0' Component={View}/>
          <Route path='/login' Component={Login}/>
          <Route path='/Signup' Component={SignUp}/>
          <Route path='/forgot_password' Component={ForgotPassword}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
