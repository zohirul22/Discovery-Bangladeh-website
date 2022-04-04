
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './componeents/Dashboard/Dashboard';
import Header from './componeents/Header/Header';
import Home from './componeents/Home/Home';
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
      
        <Route path='*' element></Route>

      </Routes>
    
    </div>
  );
}

export default App;
