
import "../CSS/sign.css";
import { useNavigate} from "react-router-dom";
import axios from "axios"
import { useDispatch,useSelector } from "react-redux";
import { changeUser } from "../redux/actions/changeStudentActions.js";


function SignIn(){
  
  const navigate= useNavigate();
     const dispatch=useDispatch();
    const user=useSelector(state=>state)
  function logIn(event){
    event.preventDefault();
    const email=document.getElementById("logEmail").value;
    const password=document.getElementById("logPassword").value;
    console.log("ayaya")
    
    axios.get(`http://localhost:4000/get-user?email=${email}&password=${password}`).then((res)=>{
      console.log(res);
      if(res.data=="student not find"){
        alert ("enter valid emailid Or password");
        return;
      }
    dispatch(changeUser(res.data)) 
    navigate("home");
    console.log(user)}).catch((err)=>console.log(err))
    console.log(user);
    }
    return(
        <div id="loginDiv" class="sign">
          <h1>Login</h1>
          <form>
          <input required id="logEmail" type="email" name="email" placeholder="Enter Email" />
          <input required id="logPassword" type="password" name="password" placeholder="Enter Password" />
          <button onClick={logIn}>Login</button>
          <button onClick={()=>navigate("/sign-up")} id="signUp">Signup</button>
          </form>
        </div>
    )
}

export default SignIn;