import './App.css';
import { BrowserRouter , Route, Routes} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Menu from './Pages/Menu';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path ='/' element={<Home/>}></Route>
          <Route path ='/menu' element={<Menu/>}></Route>
          <Route path ='/about' element={<About/>}></Route>
          <Route path ='/contact' element={<Contact/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
