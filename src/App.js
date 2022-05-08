import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./reset.scss";
import "./App.scss";
import Header from "./components/Header/Header";
import Main from "./pages/Main";
// import Product from "./Product";
// import NotFound from './NotFound';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route path="/product/:id" element={<Product />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
