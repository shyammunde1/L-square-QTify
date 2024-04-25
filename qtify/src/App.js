
import './App.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from './pages/Roots';
import ErrorPage from './pages/ErroPage';
import HomePage from './pages/HomePage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> }
     
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;