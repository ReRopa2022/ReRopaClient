import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
import Spinner from "./components/ui/Spinner";

const Home = lazy(() => import("./pages/Home"));
const Test = lazy(() => import("./pages/Test"));
const ManagerHome = lazy(() => import("./pages/manager/ManagerHome"));
const ClothesTable = lazy(() => import("./pages/manager/ClothesTable"));
const BooksOrGamesPage = lazy(() => import("./pages/manager/BooksOrGamesPage"));
const ExcessesReport = lazy(() => import("./pages/manager/ExcessesReport"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const About = lazy(() => import("./pages/About"));
const Donate = lazy(() => import("./pages/Donate"));
const DonatePoints = lazy(() => import("./pages/DonatePoints"));
const DonateRequest = lazy(() => import("./pages/manager/DonateRequest"));
const DonateLocation = lazy(() => import("./pages/manager/AddDonateLocation"));
const DefienciesExcesses = lazy(() => import("./pages/DefienciesExcesses"));
const ExcessesTable = lazy(() => import("./pages/manager/ExcessesTable"));
const DefienciesTable = lazy(() => import("./pages/manager/DefienciesTable"));
const Contact = lazy(() => import("./pages/Contact"));
const Queries = lazy(() => import("./pages/manager/Queries"));

function App() {
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      <Navbar isUser={user} isManager={user?.isManager} />
      <div className="h-full pb-10">
        <Suspense
          fallback={
            <div className="flex justify-center">
              <Spinner />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/test" element={<Test />} />
            <Route path="donate-points" element={<DonatePoints />} />
            <Route
              path="/deficiencies-excesses"
              element={<DefienciesExcesses />}
            />
            <Route path="/donate" element={<Donate user={user} />} />
            {user?.isManager && (
              <>
                <Route path="/manager-home" element={<ManagerHome />} />
                <Route path="/add-location" element={<DonateLocation />} />
                <Route path="/donate-request" element={<DonateRequest />} />
                <Route path="/info-tables" element={<Queries />} />
                <Route path="/excesses-report" element={<ExcessesReport />} />
                <Route path="/clothes-table" element={<ClothesTable />} />
                <Route path="/games-books" element={<BooksOrGamesPage />} />
                <Route path="/excesses-table" element={<ExcessesTable />} />
                <Route path="/defiencies-table" element={<DefienciesTable />} />
              </>
            )}
            <Route path="*" element={<NotFound />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
