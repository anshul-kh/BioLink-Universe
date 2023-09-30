import { Home } from './container/index';
import { Footer, Navbar } from './components/index';
import Freebar from './components/Freebar';
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Login from './container/Login';
import Profile from './container/Profile';
import Edit from './container/Edit';

function App() {

  return (
<Router>
      <div className="w-full  h-full flex justify-center min-h-screen items-center  p-2">
         <Navbar />
        <Freebar />

        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/login" element={<Login/>} /> 
          <Route path="/user/:userId" element={<Profile/>} /> 
          <Route path="/edit/:userId" element={<Edit/>} /> 
        </Routes>
        
       
      </div>
      
    </Router>
  );
}


export default App;