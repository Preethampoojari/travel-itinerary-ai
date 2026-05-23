import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

import CommonLayout from "./layout/CommonLayout";
import ProtectedRoute from "./routes/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";

// Lazy Loaded Pages
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const History = lazy(() => import("./pages/History"));
const SingleItinerary = lazy(() => import("./pages/SingleItinerary"));
const SharedTrip = lazy(() => import("./pages/SharedTrip"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Suspense
          fallback={
            <h1 className="text-center mt-20 text-2xl font-semibold">
              Loading...
            </h1>
          }
        >
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
                path="itinerary/:id"
                element={
                  <ProtectedRoute>
                    <SingleItinerary />
                  </ProtectedRoute>
                }
              />

              <Route path="share/:shareId" element={<SharedTrip />} />
            </Route>

            <Route path="login" element={<Login />} />

            <Route path="signup" element={<Signup />} />

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>

        <Toaster />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
