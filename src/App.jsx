import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';



import './App.css'
import Home from './Components/Home';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact.JSX';
import Layout from './Components/Layout';



function App() {


  let routes = createBrowserRouter([
    {path:'/', element:<Layout/>, children :[
      {index: true, element:<Home/>},
      {path:'/about', element:<About/>},
      {path:'/portfolio', element:<Portfolio/>},
      {path:'/contact', element:<Contact/>}
    ]}
  ])


  return (
    <>
      <RouterProvider router={routes}/>
    </>
  );
}

export default App
