import './App.css';
import Navbar from './Components/NavFolder/Navbar';
import Home from './Components/HomeFolder/Home';
import {Routes , Route} from 'react-router-dom';
import Founders from './Components/AboutusFolder/FoundersFolder/Founders';
import PandC from './Components/AboutusFolder/P&Cfolder/P&C';
import Contactus from './Components/ContactusFolder/Contactus';
import Services from './Components/ServicesFolder/Services';
import Proj1 from './Components/ProjectsFolder/Proj1Folder/Proj1';
import Proj2 from './Components/ProjectsFolder/Proj2Folder/Proj2';
import Proj4 from './Components/ProjectsFolder/Proj4Folder/Proj4';
import Proj5 from './Components/ProjectsFolder/Proj5Folder/Proj5';
import Footer from './Components/FooterFolder/Footer';
import Nerhado from './Components/ProjectsFolder/Proj1Folder/Nerhado';
import Andalos from './Components/ProjectsFolder/Proj1Folder/Andalos';
import Solvida from './Components/ProjectsFolder/Proj1Folder/Solvida';
import Hekma from './Components/ProjectsFolder/Proj1Folder/Hekma';
import Riva from './Components/ProjectsFolder/Proj1Folder/Riva';
import Sheraton from './Components/ProjectsFolder/Proj2Folder/Sheraton';
import Golden from './Components/ProjectsFolder/Proj2Folder/Golden';
import Americana from './Components/ProjectsFolder/Proj1Folder/Americana';
import Foodstore from './Components/ProjectsFolder/Proj1Folder/Foodstore';
import Mekka from './Components/ProjectsFolder/Proj2Folder/Mekka';
import Alunile from './Components/ProjectsFolder/Proj1Folder/Alunile';

function App() {
  return (
    <>
    <Navbar/>

 
      <Routes>
  <Route path='' element={ <Home/>}/>
  <Route path='home' element={ <Home/>}/>
  <Route path='founders' element={ <Founders/>}/>
  <Route path='p&c' element={ <PandC/>}/>
  <Route path='proj1' element={ <Proj1/>}/>
  <Route path='nerhado' element={ <Nerhado/>}/>
  <Route path='andalos' element={ <Andalos /> }/>
  <Route path='solvida' element={ <Solvida /> }/>
  <Route path='hekma' element={ <Hekma /> }/>
  <Route path='riva' element={ <Riva /> }/>
  <Route path='americana' element={ <Americana/>}/>
  <Route path='foodstore' element={ <Foodstore/>}/>
  <Route path='alunile' element={ <Alunile/>}/>
  <Route path='proj2' element={ <Proj2/>}/>
  <Route path='sheraton' element={ <Sheraton/>}/>
  <Route path='golden' element={ <Golden/>}/>
  <Route path='ksa' element={ <Mekka/>}/>
  <Route path='proj4' element={ <Proj4/>}/>
  <Route path='proj5' element={ <Proj5/>}/>
  <Route path='services' element={ <Services/>}/>
  <Route path='contactus' element={ <Contactus/>}/>            

</Routes>
    
    <Footer/>
   
    </>
  );
}

export default App;
