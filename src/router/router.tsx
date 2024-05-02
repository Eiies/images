import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home.tsx";
import UpFile from "../pages/upFile.tsx";
import NotPage from "../pages/404.tsx";

function RouterPath() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user">
          <Route path="login" />
          <Route path="register" />
          <Route path="about" />
        </Route>
        <Route path="/upload" element={<UpFile />} />
        <Route path="/readfile" />
        <Route path="/notpage" element={<NotPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouterPath;
