import { Routes, Route, BrowserRouter } from "react-router-dom";
import GlobalProvider from "./contexts/GlobalProvider";
import DefaultLayout from "./layouts/DefaultLayout";
import AppMain from "./components/AppMain";

//npm run dev --host: posso vederlo da telefono se è connesso alla stessa rete wifi del telefono

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<AppMain />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;

