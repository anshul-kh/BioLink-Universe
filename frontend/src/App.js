import { Home } from './container/index';
import { Footer, Navbar, Sidebar } from './components/index';
import Freebar from './components/Freebar';
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Login from './container/Login'

function App() {
  return (
<Router>
      <div className="w-full h-screen flex justify-center items-center bg-mainColor p-2">
         <Navbar />
               {/* <Sidebar /> */}
               <Freebar />
        
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/login" element={<Login/>} /> 
        </Routes>
        
        <Footer/>
      </div>
      
    </Router>
  );
}


export default App;