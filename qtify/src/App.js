
import './App.css';
// import { createTheme, ThemeProvider } from '@mui/material';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from './pages/Roots';
import ErrorPage from './pages/ErroPage';
import HomePage from './pages/HomePage';

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#34C94B',
//       contrastText: '#fff', // Text color for primary elements
//     },
//     // You can define other palette colors here
//   },
//   typography: {
//     fontFamily: 'Poppins, sans-serif',
//   },
// });


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
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;