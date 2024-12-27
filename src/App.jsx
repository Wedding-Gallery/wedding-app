import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home";
import About from "./components/About";
import Gallery from "./pages/Gallery";
import RSVP from "./pages/RSVP";
import LandingPage from "./pages/LandingPage";
import MessageSection from "./pages/MessageSection";
import GalleryUploadSection from "./components/GalleryUpload";
import Venue from "./pages/Venue";


function App() {
  const router = createBrowserRouter([

    {path: "/",
      element: <LandingPage/>,
    },
    {path: "/home",
      element: <Home/>,
    },
    {path: "/about",
      element: <About/>,
    },
  {
    path: "/venue",
    element: <Venue/>,
  },
    {path: "/message",
      element: <MessageSection/>,
    },
    {path: "/upload",
      element: <GalleryUploadSection/>
    },
    {path: "/gallery",
      element: <Gallery/> ,
    },
    {path: "/rsvp", 
      element: <RSVP/>,
    }
    
  ])

  return <RouterProvider router={router}/>;
}

export default App;
