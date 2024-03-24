import "./Newcomment.scss"
import { useState } from "react"

function NewComment({ selectedImage, postComment }) {
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
            <div className="container">

                <p className="text">{selectedImage.comments?.length} Comments</p>

                <form onSubmit={handleCommentSubmit} className="commentBox">
                    <div>
                        <p className="commentBox__text">JOIN THE CONVERSATION</p>
                        <p className="commentBox__input"><input className="commentBox__input--text" type="text" placeholder="Add a new comment"
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                        /></p>
                    </div>

                    <div>
                        <p className="commentBox__btn">
                            <button type="submit" className="button__text">COMMENT</button>
                        </p>
                    </div>


                </form>

            </div>
        </>
    )
}

export default NewComment 