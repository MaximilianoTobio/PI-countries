import './App.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './component/LandingPage';
import Home from './component/Home';
import FormActivity from './component/FormActivity';
import DetailCountries from './component/DetailCountries';
import Error404 from './component/Error404';
import Nav from './component/Nav';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  return (
    <div className="App">
       {location.pathname !== '/' && <Nav /> }  
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/activity' element={<FormActivity />}></Route>
        <Route path='/detail/:id' element={<DetailCountries />}></Route>
        <Route path='*' element={<Error404 />}></Route>
      </Routes>
    </div>
  );
}

export default App;
      


   

