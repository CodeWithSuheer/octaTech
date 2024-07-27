import React, { useEffect, useState, useRef, Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/homepage/HomePage";
import Services from "./pages/services/Services";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Dashboard from "./admin/Dashboard";
import ContactQueries from "./admin/ContactQueries";
import QueryDisplay from "./admin/QueryDisplay";
import Contact from "./pages/contact/Contact";
import NotFound from "./components/NotFound";
import "./App.css";

/* ---------- SERVICES ROUTES ---------- */
import RemoteMonitoring from "./pages/services/remoteMonitoring/RemoteMonitoring";
import DeskSupport from "./pages/services/deskSupport/DeskSupport";
import Infrastructure from "./pages/services/infrastructure/Infrastructure";
import Security from "./pages/services/security/Security";
import BackupAndRecovery from "./pages/services/backupAndRecovery/BackupAndRecovery";
import PatchManagement from "./pages/services/Patch/PatchManagement";
import Vendor from "./pages/services/Vendor/Vendor";
import ITConsulting from "./pages/services/ITConsulting/ITConsulting";
import WebsiteDevelopment from "./pages/services/WebDevelopment/WebsiteDevelopment";
import Loader from "./components/Loader";
import PrivacyPolicy from "./components/PrivacyPolicy";
import CloudSolution from "./pages/services/cloudSolution/CloudSolution";
import ITSM from "./pages/services/ITSM/ITSM";
import DigitalMarketing from "./pages/services/digitalMarketing/DigitalMarketing";

{
  /* ---------- LAZY ROUTES ---------- */
}
const LazyServiceDetails = React.lazy(() =>
  import("./pages/services/ServiceDetails")
);
const LazyIndustries = React.lazy(() =>
  import("./pages/Industries/Industries")
);
const LazyAbout = React.lazy(() => import("./pages/about/About"));
const LazyBlog = React.lazy(() => import("./pages/blog/Blog"));

function App() {
  const [showCursor, setShowCursor] = useState(true);
  const tawkMessengerRef = useRef();

  const handleMinimize = () => {
    tawkMessengerRef.current.minimize();
  };

  const onLoad = () => {
    // console.log('onLoad works!');
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setShowCursor(false);
      } else {
        setShowCursor(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <BrowserRouter>
        {/* {showCursor && <AnimCursor />} */}
        <TawkMessengerReact
          propertyId="66045430a0c6737bd1258124"
          widgetId="1hq0ehnqs"
          ref={tawkMessengerRef}
          onLoad={onLoad}
        />

        <Header />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          {/* ---------- LAZY ROUTES ---------- */}
          <Route
            path="/service-info/:id"
            element={
              <Suspense fallback={<Loader />}>
                <LazyServiceDetails />
              </Suspense>
            }
          />
          <Route
            path="/industries"
            element={
              <Suspense fallback={<Loader />}>
                <LazyIndustries />
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense fallback={<Loader />}>
                <LazyAbout />
              </Suspense>
            }
          />
          <Route
            path="/blog"
            element={
              <Suspense fallback={<Loader />}>
                <LazyBlog />
              </Suspense>
            }
          />

          {/* ---------- SERVICES ROUTES ---------- */}
          <Route path="/website-development" element={<WebsiteDevelopment />} />
          <Route path="/remote-monitoring" element={<RemoteMonitoring />} />
          <Route path="/desk-support" element={<DeskSupport />} />
          <Route path="/infrastructure" element={<Infrastructure />} />
          <Route path="/security" element={<Security />} />
          <Route path="/backup-and-recovery" element={<BackupAndRecovery />} />
          <Route path="/patch-management" element={<PatchManagement />} />
          <Route path="/vendor" element={<Vendor />} />
          <Route path="/IT-consulting" element={<ITConsulting />} />
          <Route path="/cloud-solution" element={<CloudSolution />} />
          <Route path="/itsm" element={<ITSM />} />
          <Route path="/digital-marketing" element={<DigitalMarketing />} />

          {/* ---------- AUTH ROUTES ---------- */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* ---------- AUTH ROUTES ---------- */}
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<ContactQueries />} />
            <Route path="client-message/:id" element={<QueryDisplay />} />
          </Route>
        </Routes>
        <Footer />
        {/* <button onClick={handleMinimize}> Minimize the Chat </button> */}
        <Toaster />
      </BrowserRouter>
    </>
  );
}

export default App;
