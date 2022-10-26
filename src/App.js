import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './pages/Signup';
import Login from './pages/Login';
import UnderFlix from './pages/Underflix';
import Player from './pages/Player';

class App extends Component {
  render() {
    return (
     <BrowserRouter>
     <Routes>
     <Route exact path="/login" element={<Login />}/>
     <Route exact path="/signup" element={<SignUp />}/>
     <Route path="/player" element={<Player />}/>
     <Route exact path="/" element={<UnderFlix />}/>
     </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
