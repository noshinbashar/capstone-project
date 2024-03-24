import "./Comments.scss"
import Like from "../../assets/Images/likes.svg"

function Comments({Comments, deleteComment}) {

    function formatDate(timestamp) {
        const date = new Date(timestamp);
        const now = new Date();
        const timeDifference = now - date;
    
        const seconds = Math.floor(timeDifference / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
    
        if (days > 0) {
            return `${days} day${days > 1 ? 's' : ''} ago`;
        } else if (hours > 0) {
            return `${hours} hour${hours > 1 ? 's' : ''} ago`;
        } else if (minutes > 0) {
            return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
        } else {
            return 'Just now';
        }
    }

    return(
    <>
    <div className="comments">
    <ul className="comments__box">
    {Comments?.sort((a, b) => b.timestamp - a.timestamp).map((item) => {

        return (
        <li className="list" key={item.id}>
            <p className="list__name">{item.name}</p>
            <p className="list__comment">{item.comment}</p>

            <div className="comment-item">
                <div className="comment-item__image">
                    <img src={Like} alt="Like" ></img>
                    <p>{item.likes}</p>
                </div>

                <div>
                    <button className="comment-item__button" 
                    onClick={() => deleteComment(item.id)} >Delete</button>   {/* Delete button for comments */}
                </div>
            </div>

                <p className="list__time">{formatDate(item.timestamp)}</p>
                <p className="list__image"></p>     {/* This represents profile image for each comment */}
                
        </li>
        );
    })}

    </ul>

    </div>
    </>

)
}

export default Comments;


