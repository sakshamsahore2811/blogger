import PostAuthor from "./PostAuthor";
import TimeAgo from '../posts/TimeAgo';
import Reactions from "./Reactions";
const PostsExcerpt = () => {
    return (
        <div>
           <div className="post">
        <h1 className="postTitle">{post.title}</h1>
        <div className="author"><PostAuthor userId={post.userId}/></div>
        <p className="postContent">{post.content}</p>
        <div className="timeago"><TimeAgo timestamp={post.date}/></div>
        <Reactions post={post}/>
        </div> 
        </div>
    );
}

export default PostsExcerpt;
