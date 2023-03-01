import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from "./UserStaff/login";
// import CustumerTest from "./components/sidepages/custumer";
import Main from './components/MainPage';
import Welcome from "./UserStaff/welocome";
import Match from './components/match';
import Error from "./components/sidepages/404";
import Join from "./UserStaff/join";
import Profile from "./UserStaff/profile";
const App = () => {
  return (
    <Routes>
      <Route exact path="/login" element={<Login />} />
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
