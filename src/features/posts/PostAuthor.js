import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice"

const PostAuthor = ({userId}) =>{
    const users = useSelector(selectAllUsers);
    const AuthorName = users.find(user=>user.id === userId);
    return(
        <span>
        by {AuthorName ? AuthorName.name :"Unknown"}
        </span>
    )
}

export default PostAuthor;