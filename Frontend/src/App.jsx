import "./App.css";

import {NavBar} from "./component/NavBar";

import { Routes, Route } from "react-router-dom";

import Package from "./component/Package.jsx";
import { Router } from "./Route/Route.js";

// import Cart from "./component/Cart.jsx";
import Contact from "./component/Contact.jsx";

import SignIn from "./component/SignIn.jsx";

import SignUp from "./component/SignUp.jsx";
import Home from "./component/HomePageBeforeLogin.jsx";
import { HomeAfterLogin } from "./component/HomeAfterLogin.jsx";
import { Details } from "./component/Details.jsx";

import AboutUs from "./component/AboutUs.jsx"
function App() {
  return (
    <>
      
       
      <Routes>
        

        <Route path={Router.DEFAULT} element={<Home/>}/>
        <Route path={Router.AFTER} element={<HomeAfterLogin/>}/>
        <Route path={Router.PACKAGE} element={<Package />} />
        {/* <Route path={Router.CART} element={<Cart />} /> */}
        <Route path={Router.CONTACTUS} element={<Contact />} />
        <Route path={Router.SIGNIN} element={<SignIn />} />
        <Route path={Router.SIGNUP} element={<SignUp />} />
        <Route path={Router.DETAIL} element={<Details/>}/>
        <Route path={Router.CONTACTUS} element={<Contact/>}/>
        <Route path={Router.ABOUT} element={<AboutUs/>}/>
      </Routes>
    </>
  );
}

export default App;
