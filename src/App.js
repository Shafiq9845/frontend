import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Componentes/User/Home.js";
import About from "./Componentes/User/About.js";
import Contact from "./Componentes/User/Contact.js";
import NContact from "./Componentes/Ngo/Contact.js";
import Donate from "./Componentes/User/Donate.js";
import Login from "./Componentes/User/Login.js";
import Signup from "./Componentes/User/Signup.js";
import Nhome from "./Componentes/Ngo/Home.js";
import Pending from "./Componentes/User/pending.js";
import Blocked from "./Componentes/User/Blocked.js";
import Reject from "./Componentes/User/Reject.js";
import Ahome from "./Componentes/Admin/Home.js";
import PApl from "./Componentes/Admin/Pe_apl.js";
import Bank from './Componentes/Ngo/Bank.js';
import ProtectedRoute from "./ProtectedRoute";
import { AuthProvider } from "./context/authContext.js";
import Gallery from "./Componentes/Ngo/Gallery.js";

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Donate" element={<Donate />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />

        <Route
          path="/Ngo/home"
          element={
            <ProtectedRoute>
              <Nhome />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Ngo/bank"
          element={
            <ProtectedRoute>
              <Bank />
            </ProtectedRoute>
          }
        >
        </Route>
        <Route
          path="Ngo/gallery"
          element={
            <ProtectedRoute>
              <Gallery />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="Ngo/contact"
          element={
            <ProtectedRoute>
              <NContact />
            </ProtectedRoute>
          }
        >
        </Route>
        <Route
          path="/pending"
          element={
            <ProtectedRoute>
              <Pending />
            </ProtectedRoute>
          }
        />
        <Route
          path="/blocked"
          element={
            <ProtectedRoute>
              <Blocked />
            </ProtectedRoute>
          }
        />
        <Route
          path="/reject"
          element={
            <ProtectedRoute>
              <Reject />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Admin/home"
          element={
            <ProtectedRoute>
              <Ahome />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Admin/Pending_Applications"
          element={
            <ProtectedRoute>
              <PApl />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
};

export default App;
