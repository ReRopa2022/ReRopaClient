import React, { Suspense, lazy, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
import Spinner from "./components/ui/Spinner";

//Guest - Pages
const Home = lazy(() => import("./pages/guest/Home"));
const Login = lazy(() => import("./pages/guest/Login"));
const About = lazy(() => import("./pages/guest/About"));
const Donate = lazy(() => import("./pages/guest/Donate"));
const DonatePoints = lazy(() => import("./pages/guest/DonatePoints"));
const DefienciesExcesses = lazy(() =>
  import("./pages/guest/DefienciesExcesses")
);
const NotFound = lazy(() => import("./pages/guest/NotFound"));
const Contact = lazy(() => import("./pages/guest/Contact"));

//Manager - Pages
const ManagerHome = lazy(() => import("./pages/manager/ManagerHome"));
const Queries = lazy(() => import("./pages/manager/Queries"));
const ClothesTable = lazy(() =>
  import("./pages/manager/tables-pages/ClothesTable")
);
//const BooksOrGamesPage = lazy(() => import("./pages/manager/BooksOrGamesPage"));
const ExcessesReport = lazy(() =>
  import("./pages/manager/posts/ExcessesReport")
);
//const Signup = lazy(() => import("./pages/Signup"));

const DonateRequest = lazy(() => import("./pages/manager/posts/DonateRequest"));
const DonateLocation = lazy(() =>
  import("./pages/manager/posts/AddDonateLocation")
);

const ExcessesTable = lazy(() =>
  import("./pages/manager/tables-pages/ExcessesTable")
);
const DefienciesTable = lazy(() =>
  import("./pages/manager/tables-pages/DefienciesTable")
);
const PointsTable = lazy(() =>
  import("./pages/manager/tables-pages/PointsTable")
);

//Developers - Pages
const Test = lazy(() => import("./pages/developers/Test"));

const URL = "https://reropa-server.onrender.com/api/ping";
function App() {
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    const makePingRequest = async () => {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    makePingRequest();
  }, []);

  return (
    <>
      <Navbar isUser={user} isManager={user?.isManager} />
      <div className="h-full pb-10">
        <Suspense
          fallback={
            <div className="flex justify-center pt-60">
              <Spinner />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />

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

                <Route path="/excesses-table" element={<ExcessesTable />} />
                <Route path="/defiencies-table" element={<DefienciesTable />} />
                <Route path="/locataions-table" element={<PointsTable />} />
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
