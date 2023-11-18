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
import Admin from './Admin/Admin';
import AdminUpdate from './Admin/AdminUpdate';
import AdminSidebar from './Admin/AdminSidebar';
import AdminAddAssest from './Admin/AdminAddAssest';
import AdminUsers from './Admin/AdminUsers';
import AdminContact from './Admin/AdminContact';

function App() {
  return (
    <>
      <Router>
        {/* <Nav/> */}
        <Routes>
          
          <Route path='/admin' Component={Admin}/>
          <Route path='/UpdateAssest' Component={AdminUpdate}/>
          <Route path='/addAssest' Component={AdminAddAssest}/>
          <Route path='/AdminUsers' Component={AdminUsers}/>
          <Route path='/AdminContacts' Component={AdminContact}/>

          <Route path='/' Component={Home}/>
          
          <Route path='/Nav' Component={Nav}/>
          {/* <Route path='' Component={Main}/> */}
          <Route path='/likes' Component={Likes}/>
          <Route path='/watch_later' Component={Watchlater}/>
          <Route path='/Contact' Component={Contact}/>
          <Route path='/history' Component={History}/>
          <Route path='/VR' Component={Vr}/>
          <Route path='/views/:ids' Component={View}/>
          {/* </Route> */}
          <Route path='/login' Component={Login}/>
          <Route path='/Signup' Component={SignUp}/>
          <Route path='/forgot_password' Component={ForgotPassword}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
