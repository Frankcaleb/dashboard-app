import Navbar from "./Components/Navbar"
import Menu from "./Components/Menu"
import Home from "./Pages/Home"
import Savings from "./Pages/Savings"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router"
function App() {

  const Layout = () => {
    return (
      <div className="  md:px-20 py-5 flex">
       <div className=" bg-white shadow-lg px-3 md:px-5 w-14 md:w-52 h-100%">
       <Navbar/>
        <Menu/>
       </div>
       <div className="px-3 bg-gray-200">
        <Outlet/>
       </div>
  
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "savings",
          element: <Savings/>
        }
      ]
    }
  ]);

  return <RouterProvider router={router}/>;
}

export default App
