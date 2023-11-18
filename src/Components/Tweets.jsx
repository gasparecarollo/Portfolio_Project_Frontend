import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Tweet from "./Tweet";

const API = import.meta.env.VITE_BASE_URL;

function Tweets() {
    const [tweets, setTweets] = useState([]);
    let { id } = useParams();

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
