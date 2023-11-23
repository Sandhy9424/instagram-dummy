import axios from "axios";
import {useSelector,useDispatch} from  "react-redux";
import { useNavigate } from "react-router-dom";
import "../CSS/Head.css"
import { changeUser } from "../redux/actions/changeStudentActions";
const { useState } = require("react")



function Post(props){
    
    const[like,setLike]=useState(props.data.likes) 
    const [commentDiv,setCommentDiv]=useState(false);
    const[comments,setComments]=useState(props.data.comments)
    const dispatch=useDispatch();
    const user=useSelector(state=>state.changeUser)
    function updateLike(){
        console.log(props.data.id)
        axios.post(`http://localhost:4000/set-like?id=${props.data.id}`).then((res)=>setLike(like+1)).catch((err)=>console.log(err))
    }

    function save(){
        let postId=props.data.id
    
       axios.post(`http://localhost:4000/save?id=${user.id}&postId=${postId}`).then((res)=>{
        if(res.data=="err"){
            alert("Post Saved")
            return;
        }
         alert("Post Added")
         dispatch(changeUser(res.data))
        console.log(res.data)}).catch((err)=>  alert("course alredy Subscribed"))
       console.log(user,postId)
        
     }

     function addComment(e){
        let message=e.target.parentNode.children[0].value;
        console.log("aya")
        let postId=props.data.id
        axios.post(`http://localhost:4000/addComment`,{id:user.id,postId:postId,message:message}).then((res)=>{
            setComments(res.data.comments);
        console.log("success",res.data);
     }).catch((err)=>console.log(err))
    }


     
     function showComment(){
           
        return(
            <div className="comment-container">
                <div className="c-tag" onClick={()=>setCommentDiv(false)}><svg onClick={()=>setCommentDiv(false)} xmlns="http://www.w3.org/2000/svg" width="26" height="26" color="white" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
</svg></div>
                <div className="section-spliter">
                <div className="imgC">
                <img src={props.data.display_src}></img>
                </div>
                <div className="comments-container">
                    <h1 style={{textAlign:"center"}}>Comments</h1>
                    {comments.length==0?<p>No Comments Yet</p>:console.log("yes")}
                    {comments.map((e)=>{

                        return(
                            <div style={{display:"flex",alignItems:"center",gap:"2%"}}>
                                <h3>{e.name}</h3>
                                <p>{e.message}</p>
                            </div>
                        )
                    })}
                </div>
                </div>
            </div>
        )
     }

    return(
        <div className="post-container" >
                            <div className="img-container">
                                <img src={props.data.display_src}></img>
                            </div>
                            {commentDiv==false?console.log("comment display none"):showComment()}
                            <div className="like-save-etc">
                                <div>
                            <svg onClick={updateLike} xmlns="http://www.w3.org/2000/svg" color="white" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
</svg>
<svg onClick={()=>setCommentDiv(true)} xmlns="http://www.w3.org/2000/svg" color="white" width="16" height="16" fill="currentColor" class="bi bi-chat" viewBox="0 0 16 16">
  <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894m-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" color="white" fill="currentColor" class="bi bi-send-fill" viewBox="0 0 16 16">
  <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"/>
</svg>
</div>
<svg onClick={save} xmlns="http://www.w3.org/2000/svg" width="16" height="16" color="white" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16">
  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
</svg>
                            </div>
                            <p>{like}</p>
                            <p className="caption">{props.data.caption}</p>
                            <div><input type="text" placeholder="Add Comment"></input> <button  onClick={addComment}>Send</button></div>
                            
                        </div>
    )
}

export default Post;