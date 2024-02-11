import Header from "../components/header/header";
import MainPage from "../pages/main/main";
import { Route, Routes } from "react-router";
import "../index.css";

function App() {
  return (
    <div className="app">
      <Header links={
        [{
          href: "/",
          title: "Главная"
        },
        {
          href: "/home",
          title: "Личный кабинет"
        }
        ]
      } />
      <Routes>
        <Route path={"/"} index element={<MainPage />} />
      </Routes>
    </div>
  )
}

export default App
