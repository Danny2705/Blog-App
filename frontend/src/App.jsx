import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LogIn from "./components/LogIn";
import Logout from "./components/Logout";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import "./App.css";
import { Toaster } from "react-hot-toast";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector(selectUser);
  return (
    <BrowserRouter>
      <div>{user ? <Logout /> : <Navbar />}</div>
      <Toaster position='top-right' toastOptions={{ duration: 2000 }} />
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/login' Component={LogIn} />
        <Route path='/signup' Component={SignUp} />
        <Route path='/profile' Component={Profile} />
        <Route path='/logout' Component={Logout} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
