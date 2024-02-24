import logo from './logo.svg';
import './App.css';
import Login from './componants/Login';
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
import Blog from './componants/Blog';
import Addblog from './componants/Addblog';
import Singleblog from './componants/Singleblog';

function App() {
  return (
    <>
  <Router>
    <Routes>
      <Route path='/' element ={<Login/>}/>
      <Route path='/blog' element ={<Blog/>}/>
      <Route path='/blog/:id' element ={<Singleblog/>}/>
      <Route path='/addblog' element ={<Addblog/>}/>
    </Routes>
  </Router>
    </>
   
  );
}

export default App;
