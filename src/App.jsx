import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import { ProfileProvider } from "./contexts/ProfileContext";

function App() {
  return (
    <BrowserRouter>
      <ProfileProvider>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="Sign up" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<Homepage />} />
        </Routes>
      </ProfileProvider>
    </BrowserRouter>
  );
}

export default App;
