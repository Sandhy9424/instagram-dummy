import { Outlet } from "react-router-dom"
import { useSelector } from "react-redux/es/exports";
import { useNavigate } from "react-router-dom";
function Home(){
    const user=useSelector(state=>state.changeUser);
    console.log(user);
    const navigate=useNavigate();

    return(
        <div>
        <div className="nav" >
        <h1>Instagram </h1>
        <div>
            <h1>{user.name}</h1><h1 onClick={()=>navigate("all-post")}>Home</h1><h1 onClick={()=>{navigate("profile")}}>Profile</h1><h1 onClick={()=>navigate("/")}>Log Out</h1></div>    
        </div>
        <Outlet></Outlet>
        </div>
    )
}
export default Home;