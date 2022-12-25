import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import ManagerOptions from "./pages/manager/ManagerOptions";

const Home = lazy(() => import("./pages/Home"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const About = lazy(() => import("./pages/About"));
const Donate = lazy(() => import("./pages/Donate"));

function App() {
  const { user } = useSelector((state) => state.auth);
  var isManager = null;
  if (user) {
    isManager = user.isManager;
  }

  return (
    <>
      <Navbar isUser={user} isManager={isManager} />

      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          {user && <Route path="/donate" element={<Donate user={user} />} />}
          {isManager && (
            <Route path="manager-options" element={<ManagerOptions />} />
          )}
          <Route path="*" element={<NotFound />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
