import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import HomePageNavBar from './pages/homePageNavBar';
import HomePage from './pages/homePage';
import CreateNew from './pages/createNew';
import Education from './pages/education';
import Experience from './pages/experience';
import Navbarhome from './pages/navbarhome';
import ViewResume from './pages/viewResume';



import HomePage1 from './components/homePage1';
import Resume from './components/create';
import Edu2 from './components/edu';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/homenav' element={<HomePageNavBar/>}/>
      <Route path='/homepage' element={<HomePage/>}/>
      <Route path='/createnew' element={<CreateNew/>}/>
      <Route path='/edu' element={<Education/>}/>
      <Route path='/exp' element={<Experience/>}/>
      <Route path='/home' element={<Navbarhome/>}/>
      <Route path='/resume' element={<ViewResume/>}/>



      <Route path='/homepage1' element={<HomePage1/>}/>
      <Route path='/create' element={<Resume/>}/>
      <Route path='/edu' element={<Edu2/>}/>



    </Routes>
    </BrowserRouter>
  );
}

export default App;
