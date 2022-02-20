import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import ListMonstersPage from "./pages/ListMonstersPage";
import AddMonster from "./pages/AddMonster";
import EditMonster from "./pages/EditMonster";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<ListMonstersPage />} />
      <Route path="add" element={<AddMonster />} />
      <Route path="add/:name" element={<AddMonster />} />
      <Route path="edit/:name" element={<EditMonster />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
