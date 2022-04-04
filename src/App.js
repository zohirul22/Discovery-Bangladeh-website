
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './componeents/About/About';
import Blogs from './componeents/Blogs/Blogs';
import Dashboard from './componeents/Dashboard/Dashboard';
import Header from './componeents/Header/Header';
import Home from './componeents/Home/Home';
import NotFound from './componeents/NotFound/NotFound';
import Review from './componeents/Review/Review';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='reviews' element={<Review></Review>}></Route>
        <Route path='blogs' element={<Blogs></Blogs>}></Route>
        <Route path='about' element={<About></About>}></Route>
      
        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>
    
    </div>
  );
}

export default App;
