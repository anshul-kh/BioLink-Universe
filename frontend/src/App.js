import { Home } from './container/index'
import { Footer,Navbar,Sidebar } from './components/index'
import Freebar from './components/Freebar'


function App() {
  return (
    <div className="w-full h-screen bg-mainColor p-2" >
            <Navbar/>
      
      <Home />
      <Sidebar />
            <Freebar/>
            <Footer/>
    </div>
  );
}

export default App;
