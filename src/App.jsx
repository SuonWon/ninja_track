import { Routes, Route } from "react-router";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Setting from "./pages/Setting";
import Login from "./Login";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import localforage from "localforage";

const App = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  async function checkUser() {
    const data = await localforage.getItem('data');
    if(data == null) {
      navigate('/Login');
    }
    setUser(data);
  }

  useEffect(() => {
    checkUser();
  })

  return (
    <div className="min-w-[1040px]">
      
      <Routes>
        <Route path="/Login" element= {
          <Login/>
        }></Route>
        <Route path="/" element={
          <div>
            {
              user != null || user != undefined ? (
                <div>
                  <Header />
                  <Home />
                </div>
              ) : <Login/>
            }
          </div>
        }></Route>
        <Route path="/Setting/:type" element={
          <div>
            {
              user != null || user != undefined ? (
                <div>
                  <Header />
                  <Setting />
                </div>
              ) : <Login/>
            }
          </div>
        }></Route>
      </Routes>

    </div>
  )
}

export default App;
