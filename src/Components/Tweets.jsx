import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Tweet from "./Tweet";
import TweetEditForm from "./TweetForm";

const API = import.meta.env.VITE_BASE_URL;

function Tweets() {
    const [tweets, setTweets] = useState([]);
    let { id } = useParams();

    const handleAdd = (newTweet) => {
        fetch(`${API}/menu/${id}/tweets`, {
            method: "POST",
            body: JSON.stringify(newTweet),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((responseJSON) => {
                setTweets([responseJSON, ...tweets]);
            })
            .catch((error) => console.error("catch", error));
    };

    const handleDelete = (id) => {
        fetch(`${API}/menu/${id}/tweets/${id}`, {
            method: "DELETE",
        })
            .then((response) => {
                const copyTweetArray = [...tweets];
                const indexDeletedTweet = copyTweetArray.findIndex((tweet) => {
                    return tweet.id === id;
                });
                copyTweetArray.splice(indexDeletedTweet, 1);
                setTweets(copyTweetArray);
            },
                (error) => console.error(error)
            )
            .catch((error) => console.warn("catch", error));
    };

    const handleEdit = (updatedTweet) => {
        fetch(`${API}/menu/${id}/tweets/${updatedTweet.id}`, {
            method: "PUT",
            body: JSON.stringify(updatedTweet),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((responseJSON) => {
                const copyTweetArray = [...tweets];
                const indexUpdatedTweet = copyTweetArray.findIndex((tweet) => {
                    return tweet.id === updatedTweet.id;
                });
                copyTweetArray[indexUpdatedTweet] = responseJSON;
                setTweets(copyTweetArray);
            })
            .catch((error) => console.error(error));
    };


    useEffect(() => {
        fetch(`${API}/menuitems/${id}/tweets`)
            .then((response) => response.json())
            .then((response) => {
                setTweets(response.allTweets);
            });
    }, [id, API]);

    return (
        <section className="Tweets"> {tweets.map((tweet) => (
            <Tweet key={tweet.id} tweet={tweet} />
        ))}
        </section>
    );
}

export default Tweets;
