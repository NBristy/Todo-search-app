import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Top from "./pages/top/top.jsx";
import Detail from "./pages/todos/detail.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Top />} />
        <Route path="/todos/:taskId" element={<Detail />} />
      </Routes>
    </Router>
  );
}
