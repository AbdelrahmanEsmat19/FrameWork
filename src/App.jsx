import { Home } from "./Components/Home";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout";
import NotFound from "./Components/NotFound";
function App() {
  const router = createBrowserRouter([
   {
    path:'',
    element:<Layout/>,
    children:[
      {
        index: true,
        element: <Home />,
      },
  
      {
        path: "about",
        element: <About/>,
      },
  
      {
        path: "portfolio",
        element: <Portfolio />,
      },
  
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path:"*",
        element:<NotFound/>
      }
    ]

   }
  ]);
  return <RouterProvider router={router} />;
}

export default App;
