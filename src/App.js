import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./reset.scss";
import "./App.scss";
import Main from "./pages/Main";
import More from "./pages/More";
import Detail from "./pages/Detail";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/project" element={<More />} />
        <Route path="/project/:name" element={<Detail />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
