import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./Home";
import AddProyect from "./pages/Add-proyect/Add-proyect";
import P404 from "./pages/404/404";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-proyect" element={<AddProyect />} />
          <Route path="*" element={<P404 />} errorElement={404} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
