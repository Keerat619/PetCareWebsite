import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import FindSitters from "./pages/FindSitters";
import BecomeSitter from "./pages/BecomeSitter";
import SitterProfile from "./pages/SitterProfile";
import Bookings from "./pages/Bookings";

import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminSitters from "./pages/AdminSitters";
import AdminBookings from "./pages/AdminBookings";
import AdminAddSitter from "./pages/AdminAddSitter";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
const Protected = ({ children }) => {
  const admin = localStorage.getItem("admin");

  if (!admin) {
    return <Navigate to="/admin-login" />;
  }

  return children;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/find-sitters" element={<FindSitters />} />
        <Route path="/become-sitter" element={<BecomeSitter />} />
        <Route path="/sitter/:id" element={<SitterProfile />} />
        <Route path="/bookings" element={<Bookings />} />
<Route path="/signup" element={<Signup/>}/>
<Route path="/login" element={<Login/>}/>
        <Route path="/admin-login" element={<AdminLogin />} />

        <Route
          path="/admin"
          element={
            <Protected>
              <AdminDashboard />
            </Protected>
          }
        />

        <Route
          path="/admin/sitters"
          element={
            <Protected>
              <AdminSitters />
            </Protected>
          }
        />

        <Route
          path="/admin/bookings"
          element={
            <Protected>
              <AdminBookings />
            </Protected>
          }
        />

        <Route
          path="/admin/add-sitter"
          element={
            <Protected>
              <AdminAddSitter />
            </Protected>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;