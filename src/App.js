import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='login' element={<Login/>} />
        <Route path='register' element={<Register/>} />
        <Route>
          <Route index element={<Home />} />
          <Route path='my-collections' element={<MyCollections />}/>
          <Route path='collection/:collectionId' element={<CollectionPage user={user}/>} />
          <Route path='item/:itemId' element={<ItemPage user={user}/>}/>
          <Route path='logout' element={<Logout setUser = {setUser}/>}/>
          <Route path='users' element={<Users/>}/>
        </Route> 
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
