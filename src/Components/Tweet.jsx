function Tweet({ tweet }) {
    return (
        <div className="Tweet">
            <h4>
                {tweet.username} <span>{tweet.image_id}</span>
            </h4>
            <h5>{tweet.location}</h5>
            <h5> {tweet.time}</h5>
            <h5> {tweet.caption}</h5>
        </div>
    );
}

export default Tweet;