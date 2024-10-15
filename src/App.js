import { CreatePost } from "./features/posts/CreatePost";
import { PostsList } from "./features/posts/PostsList";

function App() {
  return (
    <div className="App"> 
    <CreatePost/>
    <PostsList/>
    </div>
  );
}

export default App;
