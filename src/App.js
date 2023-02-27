import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/Login'
import Confirm from './pages/Confirm'
import Home from './pages/Home'
import Institutions from './pages/Institutions'
import InstitutionTypes from './pages/InstitutionTypes'
import Categories from './pages/Categories'
import Products from './pages/Products'
import OrderPage from './pages/OrderPage';
import Location from './pages/Location';
import OrderHistoryPage from './pages/OrderHistoryPage';
import Logout from './pages/Logout';
import * as Page from './constants/Pages'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path={Page.LOGIN} element={<Login/>} />
        <Route path={Page.LOGOUT} element={<Logout/>} />
        <Route path={Page.CONFIRM} element={<Confirm/>} />
        <Route path={Page.HOME}>
          <Route index element={<Home />} />
          <Route path='institutionTypes'element={<InstitutionTypes />} />
          <Route path='institutionTypes/:id' element={<Institutions />} />
          <Route path='institutions/:id' element={<Categories />} />
          <Route path='categories/:id' element={<Products />} />
          <Route path='order/products' element={<OrderPage />} />
          <Route path='order/location' element={<Location />} />
          <Route path='order/history' element={<OrderHistoryPage/>} />
        </Route> 
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
