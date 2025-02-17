import {
  createBrowserRouter,
   Route, 
   createRoutesFromElements,
   RouterProvider} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import RootLayout from './layouts/RootLayout';
import HelpLayout from './layouts/HelpLayout';
import Faq from './pages/help/Faq';
import Contact from './pages/help/contact'
import NotFound from './pages/NotFound';
import Career,{careersLoader} from './pages/careers/Career';
import CareerLayout from './layouts/CareerLayout';
import CareerDetails, { CareerDetailsLoader } from './pages/careers/CareerDetails';
import CareerError from './pages/careers/CareerError';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
    <Route index element={<Home/>}/>
    <Route path='/about' element={<About/>}/>

    <Route path='help' element={<HelpLayout/>}>
      <Route path='faq' element={<Faq/>}/>
      <Route path='contact' element={<Contact/>}/>
    </Route>

    <Route path='career' element={<CareerLayout/>}  errorElement={<CareerError/>}>
      <Route
       index element={<Career/>}
       loader={careersLoader}/>
       <Route path=':id'
       loader={CareerDetailsLoader} 
       element={<CareerDetails/>}/>
    </Route>

    <Route path='*' element={<NotFound/>}/>
  </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App
