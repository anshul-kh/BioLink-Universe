import { Home } from './container/index';
import { Footer, Navbar } from './components/index';
import Freebar from './components/Freebar';
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Login from './container/Login';
import Profile from './container/Profile';

function App() {
  return (
<Router>
      <div className="w-full  h-full flex justify-center min-h-screen items-center bg-mainColor p-2">
         <Navbar />
               
          <Freebar />
        
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/login" element={<Login/>} /> 
          <Route path="/user/:userId" element={<Profile/>} /> 
        </Routes>
        
        <Footer/>
      </div>
      
    </Router>
  );
}


export default App;