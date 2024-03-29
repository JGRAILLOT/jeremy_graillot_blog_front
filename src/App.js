import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Dashboard from "./Dashboard";
import CreatePage from "./CreatePage";
import SearchPage from "./SearchPage";
import LoginPage from "./LoginPage";
import PostPage from "./PostPage";
import UserPage from "./UserPage";
import SignUpPage from "./SignUpPage";
import ProfilePage from "./ProfilePage";
import Footer from "./Footer";

const App = () => {
  return (
    <Router>
      <div>
        <Header />

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/post/:postId" element={<PostPage />} />
          <Route path="/userTable" element={<UserPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/profilepage" element={<ProfilePage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
