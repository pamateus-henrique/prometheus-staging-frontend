import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Buy from './Buy';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/buy' Component={Buy}/>
      </Routes>
    </Router>
  );
}

export default App;
