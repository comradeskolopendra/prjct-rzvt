import MainPage from "../pages/main/main";
import { Route, Routes } from "react-router";
import React from "react";

function App() {

  return (
    <Routes>
      <Route path={"/"} element={<MainPage />} />
    </Routes>
  )
}

export default App
