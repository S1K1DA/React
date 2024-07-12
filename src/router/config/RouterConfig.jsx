import { createBrowserRouter } from "react-router-dom";

// jsx 파일 가져오기(import)
import App from "../../App.jsx";
import RouterPage from '../../pages/02_RouterPage.jsx';
import QueryString from '../../pages/03_QueryString.jsx';
import PathVariable from '../../pages/04_PathVariable.jsx';
import AboutPage from "../../pages/Training/Ex1_AboutPage.jsx";
import AddrPage from "../../pages/Training/Ex1_AddrPage.jsx";
import NamePage from "../../pages/Training/Ex1_NamePage.jsx";
import Jsx from "../../pages/05_JSX.jsx";
import InlinePage from "../../pages/Training/Ex2_InlinePage.jsx";
import OutStyleSheetPage from "../../pages/Training/Ex2_OutStyleSheetPage.jsx";
import PropsPage from "../../pages/06_PropsPage.jsx";


const router = createBrowserRouter([
    {
      path: "/",  // URL 경로
      element: <App />, // 해당 URL로 왔을 때 이동할 페이지
    },
    {
      path: "/RouterPage",  
      element: <RouterPage />, 
    },
    {
      path: "/QueryString",  
      element: <QueryString />,  
    },
    {
      path: "/PathVariable/:value",  
      element: <PathVariable />,  
    },
    {
        path: "/Training/AboutPage",  
        element: <AboutPage />,  
    },
    {
        path: "/Training/AddrPage",  
        element: <AddrPage />,  
    },
    {
        path: "/Training/NamePage/:value",  
        element: <NamePage />,  
    },
    {
    path: "/JSX",  
    element: <Jsx />,  
    },
    {
      path: "/InlinePage",  
      element: <InlinePage />,  
    },
    {
      path: "/OutStyleSheetPage",  
      element: <OutStyleSheetPage />,  
    },
    {
      path: "/PropsPage",  
      element: <PropsPage />,  
    },
    ]);

    export default router;









