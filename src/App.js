import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import Post from './pages/post/Post';
import Edit from './pages/edit/Edit';
import Select from './pages/select/Select';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route  exact path='/' element={ <Home /> }/>
          <Route exact path='/post' element={ <Post /> } />
          <Route exact path='/edit/:id' element={ <Edit /> } />
          <Route exact path='/select/:id' element={ <Select /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
