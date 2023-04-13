import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from "./components/UserStaff/login";
// import CustumerTest from "./components/sidepages/custumer";
import Main from './components/MainPage';
import Welcome from "./components/sidepages/welocome";
import Match from './components/UserStaff/match';
import Error from "./components/sidepages/404";
import Join from "./components/UserStaff/join";
import Profile from "./components/UserStaff/profile";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Main />}/>
      <Route path="*" element={<Error />} />
      <Route exact path="/welcome" element={<Welcome />} />
      <Route exact path="/matches" element={<Match />} />
      <Route exact path="/join" element={<Join />} />
      <Route exact path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default App;
