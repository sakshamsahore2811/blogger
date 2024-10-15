import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";

export const CreatePost = () =>{
    
    const [title,setTitle] = useState('');
    const [content,setContent] = useState('');
    const [userId,setUserId] = useState(0);
    const dispatch = useDispatch();
    const users = useSelector(selectAllUsers);
    const userOptions = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>));
    const canSave = Boolean(title) && Boolean(content);
    const saveBlog = () =>{
        if (title && content){
        dispatch(addPost(title,content,userId));
        setTitle('');
        setContent('');
        console.log("New Blog added");
        alert("New Post Created !");
    }
    };
    return(<>
    <div className="form">
    <p>
        Title
    </p>
    <input value={title} onChange={(e)=>setTitle(e.target.value)} />
    <p>
        Content
    </p>
    <input value={content} onChange={(e)=>setContent(e.target.value)} />
    <br/>
    <p>Author : </p>
    <select value={userId} onChange={(e)=>setUserId(e.target.value)}>
        <option value=""></option>
        {userOptions}
        </select>
    <br/>
    <button className="button" disabled={!canSave} onClick={saveBlog}>Save</button>
    </div>
    </>);
}