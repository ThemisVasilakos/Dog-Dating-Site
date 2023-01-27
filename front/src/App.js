import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from "./components/Login";
// import CustumerTest from "./components/sidepages/custumer";
import User from "./components/profile";
import Main from './components/MainPage';
import Join from "./components/Join";
import Error from "./components/sidepages/404";
const App = () => {
  return (
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route path="/" element={<Main />}/>
        <Route exact path="/user" element={<User />} />
      <Route path="*" element={<Error />} />
      <Route exact path="/join" element={<Join />} />
    </Routes>
  );
};

export default App;
