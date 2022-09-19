import index from "../pages";
import profile from "../pages/profile";
import seekMentor from "../pages/seekMentor";

export const mainRoutes = [
  {
    path: "/",
    component: index,
    title: "Index",
    exact: true,
  },
  {
    path: "/profile",
    component: profile,
    title: "Profile",
  },
  {
    path: "/seekMentor",
    component: seekMentor,
    title: "SeekMentor",
  },
];
