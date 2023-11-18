import { useState } from "react";
import TweetEditForm from "./TweetForm";

function Tweet({ tweet, handleDelete, handleSubmit }) {
    const [viewEditForm, setEditForm] = useState(false);
    const toggleView = () => {
        setEditForm(!viewEditForm);
    };
    return (
        <div className="Tweet">
            {tweetEditForm ? (
                <TweetEditForm tweetDetails={tweet} toggleView={toggleView}
                    handleSubmit={handleSubmit} />
            ) : (
                <div>
                    <h4>
                        {tweet.username}
                        <span> {tweet.image_url}</span>
                    </h4>
                    <h5> {tweet.location}</h5>
                    <h5> {tweet.time}</h5>
                    <p>{tweet.caption} </p>
                    <p> {tweet.hashtags}</p>
                </div>
            )}


            <div className="tweet-actions">
                <button onClick={toggleView}> {viewEditForm ?
                    "Cancel" : "Edit this Tweet"}
                </button>
                <button onClick={() => handleDelete(tweet.id)}> Delete Tweet</button>
            </div>
        </div>
    );
}

export default Tweet;