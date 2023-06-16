import Home from "./component/home"
import AboutUS from "./component/aboutUS"
import AllAboutEvoo from "./component/allAboutEvoo"
import Blog from "./component/blog"
import SellEvoo from "./component/sellEvoo"
import FiltreTags from "./component/filtreTags"
import TailorMadeService from "./component/tailorMadeService"
import AdminPage from "./component/admin/adminPage"
import AdminAuth from "./component/admin/adminAuth"
import UserListAuth from "./component/admin/userListAuth"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Profile from "./component/user/profile"
import LotDetails from "./component/commun/lotDetail"
 
import Search from "./component/commun/search"

function App() {

  return (
      <Router >
        <Routes>
          <Route path='/' exact element={<Home />} />
          {/* <Route path='/admin'  element={<AdminPage />} /> */}
          <Route path='/admin'  element={<AdminAuth />} />
          <Route path='/admin/userList'  element={<UserListAuth />} />
          <Route path='/aboutUS'  element={<AboutUS />} />
          <Route path='/allAboutEvoo'  element={<AllAboutEvoo />} />
          <Route path='/blog'  element={<Blog />} />
          <Route path='/sellEvoo'  element={<SellEvoo />} />
          <Route path='/tailorMadeService'  element={<TailorMadeService />} />
          <Route path='/profil'  element={<Profile />} />
          <Route path='/lotDetails/:id'  element={<LotDetails />} />
          <Route path='/search/:id/:type/:val1/:val2/:val3'  element={<Search />} />
          <Route path='/search'  element={<Search />} />
          <Route path='/filtreTags/:idd'  element={<FiltreTags />} />
        </Routes>
      </Router>
  );
  
}
export default App;
