import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";

const Home = lazy(() => import("./pages/Home"));
const ManagerHome = lazy(() => import("./pages/manager/ManagerHome"));
const ExcessesReport = lazy(() => import("./pages/manager/ExcessesReport"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const About = lazy(() => import("./pages/About"));
const Donate = lazy(() => import("./pages/Donate"));
const DonateRequest = lazy(() => import("./pages/manager/DonateRequest"));
const DonateLocation = lazy(() => import("./pages/manager/AddDonateLocation"));
const AnonymousDonation = lazy(() => import("./pages/AnonymousDonation"));
const Contact = lazy(() => import("./pages/Contact"));
const Queries = lazy(() => import("./pages/manager/Queries"));

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
            <>
              <Route path="/manager-home" element={<ManagerHome />} />
              <Route path="/add-location" element={<DonateLocation />} />
              <Route path="/donate-request" element={<DonateRequest />} />
              <Route path="/info-tables" element={<Queries />} />
              <Route path="/excesses-report" element={<ExcessesReport />} />
            </>
          )}
          <Route path="*" element={<NotFound />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/anonymous-donate" element={<AnonymousDonation />} />
        </Routes>
      </Suspense>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
