import { Routes, Route } from "react-router";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Setting from "./pages/Setting";

const App = () => {
  return (
    <div className="min-w-[1040px]">
      <Header />
      <Routes>
        <Route path="/" element={
          // <RequireAuth loginPath="/login">
            <Home />
          // </RequireAuth>
        }></Route>
        <Route path="/Setting/:type" element={
          // <RequireAuth loginPath="/login">
            <Setting />
          // </RequireAuth>
          
        }></Route>
      </Routes>
      {/* <Setting/> */}
    </div>
  )
}

export default App;
