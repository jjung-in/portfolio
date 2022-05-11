import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./reset.scss";
import "./App.scss";
import Header from "./components/Header/Header";
import Main from "./pages/Main";
import More from "./pages/More";
import Doran from "./pages/project/Doran/Doran";
import Chic from "./pages/project/Chic/Chic";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/project" element={<More />} />
        <Route path="/project/doran" element={<Doran />} />
        <Route path="/project/chic" element={<Chic />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
