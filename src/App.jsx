
import './App.css'

import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import User from './User';
import Pages from './Pages';
import Adduser from './Adduser';
import Edituser from './Edituser';
import Addpage from './Addpage';
import Editpage from './Editpage';
function App() {


  return (
    <>
      <div>
      <ToastContainer />
       <Router>
      
      <Routes>
      
        
      
        
        <Route path="/" Component={User}/>
        <Route path='/pages'Component={Pages} />
        <Route path='/addpage'Component={Addpage} />
        <Route path='/editpage/:id'Component={Editpage} />
        <Route path='/adduser' Component={Adduser}/>
        <Route path='/edituser/:id' Component={Edituser}/>
      </Routes>
     
      </Router>
      </div>
      
    </>
  )
}

export default App
