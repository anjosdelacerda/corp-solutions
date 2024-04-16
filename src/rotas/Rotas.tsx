import { createBrowserRouter } from "react-router-dom";
import HomePagina from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import TalentPool from "../pages/talentPool/TalentPool";
import Profile from "../pages/profile/Profile";
import EditeProfile from "../pages/editProfile/EditeProfile";
import Jobs from "../pages/jobs/Jobs";

const rotas = createBrowserRouter([
  {
    path: "/",
    element: <HomePagina />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/talentpool",
    element: <TalentPool />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/editeprofile",
    element: <EditeProfile />,
  },
  {
    path: "/jobs",
    element: <Jobs />,
  },
]);
export default rotas;
