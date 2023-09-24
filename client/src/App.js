import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import { Register } from './Front-End/register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Loginpage } from './Front-End/loginpage';
import { Dash } from './Front-End/studentdash';
import { Staffdash } from './Front-End/staffdash';
import { Hrdash } from './Front-End/hrdash';
import { StaffUpdate } from './Front-End/fs18staff';
import { Fsregisterform } from './Front-End/fs18register';
import { Fullstackinfo } from './CoursesInformation/fullstack';
import { Webdevelopment } from './CoursesInformation/webdevelopment';
import { Ims } from './CoursesInformation/ims';
import { Sap } from './CoursesInformation/sap';
import { Update } from './Front-End/update';
import { Hrstudentdetail } from './Front-End/hrstudentdetail';
import { Singledata } from './Front-End/StuHrSingleDetail/singledata';
function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Register/>}  />
    <Route path='/loginpage' element={<Loginpage/>}  />
    <Route path='/dash/:id' element={<Dash/>}  />
    <Route path='/staffdash/:std_id' element={<Staffdash/>}  />
    <Route path='/hrdash/:id' element={<Hrdash/>}  />
    <Route path='/update/:std_id' element={<Update/>}  />
    <Route path='/fs18' element={<StaffUpdate/>}  />
    <Route path='/fs18register' element={<Fsregisterform/>}  />
    <Route path='/fullstackinfo' element={<Fullstackinfo/>}  />
    <Route path='/webdevelopment' element={<Webdevelopment/>}  />
    <Route path='/hrstudentdetail' element={<Hrstudentdetail/>}  />
    <Route path='/singledata/:std_id' element={<Singledata/>}  />
    <Route path='/navims' element={<Ims/>} />
    <Route path='/sap' element={<Sap/>} />
    

   

  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
