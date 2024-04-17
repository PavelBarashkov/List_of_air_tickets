import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { useTheme } from "./hooks/useTheme";

import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./Pages/helpers/component/AppRouter";

function App() {
  useTheme();
  return (
    <BrowserRouter>
      <div className="app_container w-100 h-100">
        <header>
          <NavBar />
        </header>
        <main className="main">
          <AppRouter />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
