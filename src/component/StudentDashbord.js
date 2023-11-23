import {useSelector,useDispatch}from "react-redux"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { changeUser } from "../redux/actions/changeStudentActions.js";
import "../CSS/Head.css"
import Post from "./Post.js";
import axios from "axios";
function Profile(){
    const user=useSelector(state=>state.changeUser);
    const dispatch=useDispatch()
    console.log(user);
    const navigate=useNavigate();
    let l=[];
    
        l=user.posts;
    
const [courseList,setCourseList]=useState(l);

const[create,setCreate]=useState(false);

function post(e){
    let caption=e.target.parentNode.children[1].value;
    let Img=e.target.parentNode.children[3].value;
    console.log(caption,Img)
    axios.post(`http://localhost:4000/create-post`,{id:user.id,caption:caption,Img:Img}).then((res)=>{
        console.log(res.data)
         dispatch(changeUser(res.data));
         setCourseList(res.data.posts);
         setCreate(false);
    }).catch((err)=>console.log(err));
}
 
function createe(){

    return(
        <div className="create-class">
             <div style={{textAlign:"end"}} onClick={()=>setCreate(false)}><svg onClick={()=>setCreate(false)} xmlns="http://www.w3.org/2000/svg" width="26" height="26" color="white" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
</svg></div>
            <input type="text" placeholder="caption"></input><br />
            <input type="text" placeholder="Img-source"></input><br/>
            <button onClick={post}>Post</button>
        </div>
    )
}

    return(
        <div>
            <div>
            <h3>{user.name}</h3>
            <p>{user.bio}</p>    
            </div> 
            {create==false?console.log("false"):createe()}
            <div className="pl">
                <div style={{display:"flex", justifyContent:"space-evenly"}}><h3>My Posts</h3> <h3 onClick={()=>setCreate(true)}>create post</h3></div>
                {courseList.length==0?<p style={{textAlign:"center"}}>No Post Uploded</p>:console.log("Courses avilable")}
                {courseList.map((e)=><Post data={e}></Post>)}
            </div>

        </div>
    )
}

export default Profile;