import { useDispatch } from "react-redux"
import { reactionAdded } from "./postsSlice"
const emojis={
        'smile':'😊',
        'wow':'😮',
        'rocket':'🚀',
        'coffee':'☕️'
    }
const Reactions = ({ post }) => {
        const dispatch = useDispatch()
    
        const reactionButtons = Object.entries(emojis).map(([name, emoji]) => {
            return (
                <button
                    key={name}
                    type="button"
                    className="reactionButton"
                    onClick={() =>
                        dispatch(reactionAdded({ postId: post.id, reaction: name }))
                    }
                >
                    {emoji} {post.reactions[name]}
                </button>
            )
        })
    
        return <div>{reactionButtons}</div>
    }
export default Reactions;