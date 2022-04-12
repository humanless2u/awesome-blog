import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import ErrorPage from "./pages/ErrorPage";
import Contact from "./pages/Contact";

import Header from "./components/Header";

import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog/" element={<Blog />} />
      <Route path="/about/" element={<About />} />
      <Route path="/contact/" element={<Contact />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
