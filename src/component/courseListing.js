import { useState, useEffect, useRef } from "react";
import {useSelector,useDispatch} from  "react-redux";
import { useNavigate } from "react-router-dom";
import axios  from "axios";
import "../CSS/Head.css"
import { changeUser } from "../redux/actions/changeStudentActions.js";
import Post from "./Post.js";


function CourseListing(){





const [postList,setPostList]=useState([])
const navigate=useNavigate();
const user=useSelector(state=>state.changeStudent)
const d=useSelector(state=>state.changeCourse)
console.log(postList,d)
 
function getAllCourse(){
    axios.get("http://localhost:4000/get-all-posts").then((result) => {
        console.log(result)
        setPostList(result.data);
    }).catch((err) => {
        console.log(err);
    });
}
  useEffect(()=>getAllCourse(),[]);


    return(
<div className="course-l">
    <div className="navvv">
    <svg onClick={()=>navigate(-1)} xmlns="http://www.w3.org/2000/svg" width="83" height="44" color="white" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
</svg>
    <h1> Posts</h1>
    </div>
    <div className="pl">
        {postList.map((e)=>{
            return(
                <Post data={e}></Post>
            )
        })}
    </div>
</div>

    )
}

export default CourseListing;