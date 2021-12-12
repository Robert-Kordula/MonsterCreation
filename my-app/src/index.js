import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import ListMonstersPage from "./ListMonsters";
import AddMonster from "./AddMonster";
import EditMonster from "./TempEditMonster";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<ListMonstersPage />} />
      <Route path="add" element={<AddMonster />} />
      <Route path="edit/:slug" element={<EditMonster />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
