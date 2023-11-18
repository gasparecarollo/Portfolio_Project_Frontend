import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function TweetForm({ tweetDetails, handleSubmit, toggleView, children }) {
    let { id } = useParams();

    const [tweet, setTweet] = useState({
        username: "",
        image_url: "",
        location: "",
        time: "",
        caption: "",
        hashtags: "",
        menuItem: id,
    });

    const handleTextChange = (event) => {
        setTweet({ ...tweet, [event.target.id]: event.target.value });
    };

    useEffect(() => {
        if (tweetDetails) {
            setTweet(tweetDetails);
        }
    }, [id, tweetDetails]);

    const onSubmit = (event) => {
        event.preventDefault();
        handleSubmit(tweet, id);
        if (tweetDetails) {
            toggleView();
        }

        setTweet({
            username: "",
            image_url: "",
            location: "",
            time: "",
            caption: "",
            hashtags: "",
            menuItem_id: id,
        });
    };
    return (
        <div className="Edit">
            {children}
            <form onSubmit={onSubmit}>
                <label htmlFor="username"> Username:</label>
                <input
                    id="username"
                    value={tweet.username}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Your Twitter handle"
                    required />
                <label htmlFor="image_url"> Image_url</label>
                <input
                    id="image_url"
                    type="text"
                    required
                    value={tweet.image_url}
                    onChange={handleTextChange}
                />

                <label htmlFor="location"> Location:</label>
                <input
                    id="location"
                    type="text"
                    required
                    value={tweet.location}
                    onChange={handleTextChange}
                />
                <label htmlFor="time"> Time</label>
                <input
                    id="time"
                    type="time"
                    name="time"
                    min="00:00"
                    max="12:00"
                    step="60"
                    required
                    placeholder="Please enter a valid time between 01:00 and 12:00"
                    value={tweet.time}
                    onChange={handleTextChange}
                />
                <label htmlFor="caption"> Caption: </label>
                <input
                    id="caption"
                    type="text"
                    required
                    value={tweet.caption}
                    placeholder="Enter caption for this post"
                    onChange={handleTextChange}
                />

                <label htmlFor="hashtags"> Hashtags: </label>
                <input
                    id="hashtags"
                    type="text"
                    required
                    value={tweet.hashtags}
                    placeholder="Enter hashtags for this post"
                    onChange={handleTextChange}
                />
                <br />
                <input type="submit" />
            </form>
        </div>
    );
}

export default TweetForm;