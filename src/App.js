//Style Components
import { StyledContainer } from "./components/Styles";

// Router
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

// Home component
import Home from "./pages/Home";
// Login Component
import Login from "./pages/Login";
// Register Component
import Register from "./pages/Register";
// Dashboard Component
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <StyledContainer>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </StyledContainer>
    </BrowserRouter>
  );
}

export default App;
