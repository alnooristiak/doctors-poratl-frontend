import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import NavBar from './pages/Shared/NavBar';
import Appointment from './pages/Appointment/Appointment';
import Reviews from './pages/Reviews/Reviews';
import ContactUs from './pages/ContactUs/ContactUs';
import Login from './pages/Login/Login';
import Footer from './pages/Shared/Footer';
import SignUp from './pages/Login/SignUp';
import RequirAuth from './pages/Login/RequirAuth';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home></Home>}>Home</Route>
        <Route path='home' element={<Home></Home>}>Home</Route>
        <Route path='about' element={<About></About>}>About</Route>
        <Route path='appointment' element={
          <RequirAuth>
            <Appointment/>
          </RequirAuth>
        }></Route>
        <Route path='reviews' element={<Reviews></Reviews>}>Reviews</Route>
        <Route path='contactus' element={<ContactUs></ContactUs>}>Contact Us</Route>
        <Route path='login' element={<Login></Login>}>Login</Route>
        <Route path='signup' element={<SignUp></SignUp>}>SignUp</Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
