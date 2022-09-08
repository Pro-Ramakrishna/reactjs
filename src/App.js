import React from 'react'
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import Orders from './Orders';
import Home from './Home';
import NotFound from './NotFound';
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/orders" element={<Orders />}/>
        <Route path="*" element={<NotFound /> }/>
      </Routes>
      </BrowserRouter>
  
    </div>
  )
}

export default App
