import { BrowserRouter } from "react-router";
import "./App.css";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <div style={{ backgroundColor: "black" }}></div>
      <LandingPage />
    </BrowserRouter>
  );
}

export default App;
