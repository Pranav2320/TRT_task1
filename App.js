
import './App.css';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Home from './Components/Home/Home';
import Main from './Main/Main';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
    <div className="App">
     
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/main' element={<Main/>}/>
    </Routes>
    </div>
    </Router>

  );
}

export default App;
