import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AppLayout from "./AppLayout";
import SignIn from "./pages/SignIn";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Homepage />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<SignIn register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
