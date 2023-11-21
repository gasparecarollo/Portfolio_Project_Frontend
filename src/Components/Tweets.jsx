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
        <section className="Tweets">
            {tweets.map((tweet) => (
                <div key={tweet.id} className="tweet-wrap">
                    <div className="tweet-header">
                        <img src="https://pbs.twimg.com/profile_images/1012717264108318722/9lP-d2yM_400x400.jpg" alt="profile-pic" className="avatar" />
                        <div className="tweet-header-info">
                            {tweet.location && <span>{tweet.location}</span>}
                            {tweet.id && <span>@{tweet.id}</span>}
                            {tweet.time && <span>. {tweet.time}</span>}
                            <p> {tweet.caption}{tweet.hashtags}</p>
                        </div>
                    </div>

                    <div className="tweet-img-wrap">
                        <img src="https://pbs.twimg.com/media/Dgti2h0WkAEUPmT.png" alt="" className="tweet-img" />
                    </div>

                    <div className="tweet-info-counts">
                        <div className="comments">
                            <svg className="feather feather-message-circle sc-dnqmqq jxshSx" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                            </svg>
                            <div className="comment-count">33</div>
                        </div>

                        <div className="retweets">
                            <svg className="feather feather-repeat sc-dnqmqq jxshSx" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <polyline points="17 1 21 5 17 9"></polyline>
                                <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
                                <polyline points="7 23 3 19 7 15"></polyline>
                                <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
                            </svg>
                            <div className="retweet-count">397</div>
                        </div>

                        <div className="likes">
                            <svg className="feather feather-heart sc-dnqmqq jxshSx" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                            </svg>
                            <div className="likes-count">2.6k</div>
                        </div>

                        <div className="message">
                            <svg className="feather feather-send sc-dnqmqq jxshSx" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <line x1="22" y1="2" x2="11" y2="13"></line>
                                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                            </svg>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}


export default Tweets;