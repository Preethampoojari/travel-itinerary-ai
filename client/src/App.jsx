import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CommonLayout from "./layout/CommonLayout";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProtectedRoute from "./routes/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import History from "./pages/History";
import SingleItinerary from "./pages/SingleItinerary";
import SharedTrip from "./pages/SharedTrip";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CommonLayout />}>
            <Route index element={<Home />} />
            <Route
              path="dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path="history"
              element={
                <ProtectedRoute>
                  <History />
                </ProtectedRoute>
              }
            />
            <Route
              path="/itinerary/:id"
              element={
                <ProtectedRoute>
                  <SingleItinerary />
                </ProtectedRoute>
              }
            />
            <Route path="/share/:shareId" element={<SharedTrip />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </>
  );
}

export default App;
