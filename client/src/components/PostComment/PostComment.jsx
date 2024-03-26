import "./PostComment.scss"
// import addComment from "../../assets/icons/add_comment.svg"
import { useState } from "react"

function PostComment({ selectedImage, postComment }) {
    const [newComment, setNewComment] = useState("");

    const handleCommentSubmit = async (e) => {
        console.log(newComment)
        e.preventDefault();
        const Comment = {
            name: "Noshin",
            comment: newComment
        }
        postComment(Comment)
        setNewComment("");

    };
    return (
        <>
            <div className="newComment">

                <form onSubmit={handleCommentSubmit} className="newComment__box">
                    <div className="newComment__input">
                        <input className="newComment__text-input" type="text" placeholder="Share your thoughts . . ." value={newComment}
                            onChange={(e) => setNewComment(e.target.value)} />
                    </div>

                    <div>
                        <p className="newComment__button">
                            <button className="newComment__btn" type="submit">COMMENT</button>
                        </p>
                    </div>

                </form>

                <div className="newComment__comments">
                    <p className="newComment__text">{selectedImage.comments?.length} Comments</p>
                </div>

            </div>
        </>
    )
}

export default PostComment 