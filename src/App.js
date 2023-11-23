import logo from './logo.svg';
import './App.css';
import { Routes,Route } from "react-router-dom";
import SignIn from './component/SignIn.js';
import SignUp from './component/SignUp.js';
import Profile from "./component/StudentDashbord.js"
import CourseListing from './component/courseListing.js';
import Home from './component/Home.js';
function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<SignIn></SignIn>} />
      <Route path="sign-up" element={<SignUp></SignUp>} /> 
      <Route path='home' element={<Home></Home>}>
       <Route path="profile" element={<Profile></Profile>} />
       <Route path="all-post" element={<CourseListing></CourseListing>}></Route>
       </Route>
    </Routes>
    </div>
  );
}

export default App;
