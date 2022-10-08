//import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./Home";
// import SignIn from "./SignIn";
import Profile from "./Profile";
import About from "./About";
import Auth from "./components/Auth";
import AuthModal from "./components/Auth-modal";
import View from "./View";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "react-toastify/dist/ReactToastify.css";
// import SignIn from './SignIn';
import { GoogleOAuthProvider } from "@react-oauth/google";
import Footer from "./components/footer";
function App() {
  return (
    <GoogleOAuthProvider clientId='5958372731-97sc5g1nktcauq88ioqp6a57evhv5o67.apps.googleusercontent.com'>
      <Router>
        {/* <Navbar component='Home' /> */}
        <Routes>
          <Route
            path='/'
            exact
            element={
              <>
                <Navbar component='Home' />
                <Home />
              </>
            }
          />

          <Route
            path='/About'
            exact
            element={
              <>
                <Navbar component='About' />
                <About />
              </>
            }
          />
          <Route
            path='/View/:id'
            exact
            element={
              <>
                <Navbar component='Home' />
                <View />
              </>
            }
          />
        </Routes>
      </Router>
      <Footer />
    </GoogleOAuthProvider>
  );
}

export default App;
