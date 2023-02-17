import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import './App.css';
import Albums from './Components/Albums/Albums';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Photos from './Components/Photos/Photos';
import Users from './Components/Users/Users';
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Header />}>
        <Route index element={<Home />}></Route>
        <Route path='/users' element={<Users />}> </Route>
        <Route path='/albums' element={<Albums />}></Route>
        <Route path='/users/:userId/albums' element={<Albums />}></Route>
        <Route path='/users/:userId/albums/:albumId/photos' element={<Photos />}></Route>
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
};

export default App;


