import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import ListMonstersPage from './ListMonsters'
import EditMonster from './EditMonster'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<ListMonstersPage />} />
      <Route path="/Add" element={<EditMonster name='Add New Monster' />} />
      <Route path="/Edit/:slug" element={<EditMonster name='Edit Monster Stats'/>} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
