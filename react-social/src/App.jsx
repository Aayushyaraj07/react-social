import Login from "./pages/login/Login";
import "./style.scss";
import Register from "./pages/register/Register";
import Navbar from "./components/navbar/navbar";
import Leftbar from "./components/leftbar/leftbar";
import Rightbar from "./components/rightbar/rightbar";
import Home from "./pages/home/home";
import Profile from "./pages/profile/profile";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";


import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";

function App() {
  const currentUser = true;

  const {darkMode} = useContext(DarkModeContext);

  const Layout = () => {
    return (
      <div className={`wrapper theme-${darkMode ? "dark" : "light"}`} >
        <Navbar />
        <div style={{ display: "flex" }}>
          <Leftbar />
          <div style={{flex: 6}}> 
          <Outlet />
          </div>
          <Rightbar />
        </div>
      </div>
    );
  };

  const ProtectedRoute = ({children}) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
