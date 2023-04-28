import { Routes, Route } from "react-router-dom";
import MainPage from "./screens/MainPage/MainPage";
import LoginPage from "./screens/LoginPage/LoginPage";
import RegisterPage from "./screens/RegisterPage/RegisterPage";

// TODO: 1 - Cверстать форму авторизации.
// TODO: 2 - Изучить авторизацию на Firebase(поэтапно =) ).
// TODO: 3 - Изучить быстрый курс по TypeScript
// TODO: 4 - Прочитать Promise

function App() {
  // const navigate = useNavigate();

  return (
    <>
      {/* <div>App</div> */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default App;
