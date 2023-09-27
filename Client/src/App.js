import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Display from './components/Display'
import VideoDisplay from './components/VideoDisplay'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom' 
function App() {
  return (
    <div>
      <Router>
    <Navbar/>
    <Routes>
       <Route exact path='Home'  element={<Home/>} />
       <Route exact path='Display'  element={<Display/>} />
        <Route exact path='VideoDisplay/:videoUrl'  element={<VideoDisplay/>} />
       {/* <Route exact path='Putdata'  element={<Putdata/>} /> */} 
       
   </Routes>
    </Router>
    </div>
  );
}

export default App;
