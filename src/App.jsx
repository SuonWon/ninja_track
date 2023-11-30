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
  const [loading, setLoading] = useState(false);

  async function checkUser() {
    setLoading(true);
    const data = await localforage.getItem('data');
    if(data == null) {
      setLoading(false);
      navigate('/Login');
    }
    navigate('/');
    setLoading(false);
    setUser(data);
  }

  useEffect(() => {
    checkUser();
  },[])

  return (
    <div className="min-w-[1040px]">
      
      <Routes>
        <Route path="/Login" element= {
          <Login/>
        }></Route>
        <Route path="/" element={
          <div>
            {
              !loading ? (
                user != null || user != undefined ? (
                  <div>
                    <Header />
                    <Home />
                  </div>
                ) : <Login/>
              ) : (<p>Loading...</p>)
            }
          </div>
        }></Route>
        <Route path="/Setting/:type" element={
          <div>
            {
              !loading ? (
                user != null || user != undefined ? (
                  <div>
                    <Header />
                    <Setting />
                  </div>
                ) : <Login/>
              ) : (<p>Loading...</p>)
              
            }
          </div>
        }></Route>
      </Routes>

    </div>
  )
}

export default App;
