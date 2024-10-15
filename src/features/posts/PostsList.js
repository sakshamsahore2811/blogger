
import { selectAllPosts, getPostsError, getPostsStatus, fetchPosts  } from "./postsSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

export const PostsList = () =>{
    const dispatch = useDispatch();
    const postsStatus = useSelector(getPostsStatus);
    const postsError  = useSelector(getPostsError);
    const posts = useSelector(selectAllPosts);

    useEffect(()=>{
        if(postsStatus==='idle'){
            dispatch(fetchPosts());
        }
    },[postsStatus,dispatch])

    const renderredPosts = posts.map(post => {
        return(<>
        <div className="post">
        <h1 className="postTitle">{post.title}</h1>
        <div className="author"><PostAuthor userId={post.userId}/></div>
        <p className="postContent">{post.content}</p>
        <div className="timeago"><TimeAgo timestamp={post.date}/></div>
        <Reactions post={post}/>
        </div>
        </>);
    })
    return(
    <>
    {renderredPosts}
    </>
    );
}