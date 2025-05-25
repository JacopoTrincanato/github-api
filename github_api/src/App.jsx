import { Routes, Route, BrowserRouter } from "react-router-dom";
import GlobalProvider from "./contexts/GlobalProvider";
import DefaultLayout from "./layouts/DefaultLayout";
import AppMain from "./components/AppMain";

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

