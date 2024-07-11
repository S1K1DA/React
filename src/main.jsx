import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// jsx 파일 가져오기(import)
import RouterPage from './pages/02_RouterPage.jsx';
import QueryString from './pages/03_QueryString.jsx';

// 라우터를 사용하기 위해서 필요한 함수들 import
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
  </React.StrictMode>
)
