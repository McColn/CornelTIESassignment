
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegistrationPage from './components/RegistrationPage';
import SigninPage from './components/SigninPage';
import NavbarPage from './components/NavbarPage';
import HomePage from './components/HomePage';
import BookUpload from './components/BookUpload';
import BookEdit from './components/BookEdit';
import SystemUsers from './components/SystemUsers';
import AddUser from './components/AddUser';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SigninPage/>} />
        <Route path='/register' element={<RegistrationPage/>} />
        <Route path='/home' element={<HomePage/>} />
        <Route path='/upload' element={<BookUpload/>} />
        <Route path='/bookedit' element={<BookEdit/>} />
        <Route path='/users' element={<SystemUsers/>} />
        <Route path='/adduser' element={<AddUser/>} />
        
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
